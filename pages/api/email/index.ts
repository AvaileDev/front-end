import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { fromEnv } from '@aws-sdk/credential-provider-env';

const subjectTxt = "Contact form confirmation for availe.io"
const bodyTxt = "This email contains the information you submitted to the contact form on availe.io. If you did not submit this information, please disregard this email. Thank you for your interest in availe.io."

const sesClient = new SESClient({
    region: process.env.AWS_REGION,
    credentials: fromEnv(),
});

export default async function emailHandler(req: NextApiRequest, res: NextApiResponse) {
    // quit if contact form submission is not a POST request -- should never happen
    if (req.method != 'POST') {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed. Please use POST.`);
        return;
    }

    // quit if email address is not provided in .env file -- can't send email without it
    if (!process.env.EMAIL_FROM) {
        res.status(500).json({ message: 'Server is not configured correctly.' });
        return;
    }

    // destructure data from request body
    const { email, subject, content } = req.body;

    if (!email || !subject || !content) {
        res.status(400).json({ message: 'Missing required fields' });
        return;
    }

    // create a new entry in the postgres database
    const dataEntry = await prisma.contactFormSubmission.create({
        data: {
            email,
            subject,
            content
        }
    })

    // send a verification email
    const params = {
        Source: process.env.EMAIL_FROM,
        Destination: {
            ToAddresses: [email]
        },
        Message: {
            Subject: {
                Data: subjectTxt
            },
            Body: {
                Text: {
                    Data: bodyTxt
                }
            }
        }
    }

    const sendEmailCommand = new SendEmailCommand(params);
    try {
        await sesClient.send(sendEmailCommand);
        res.status(200).json({ message: 'Email sent successfully.' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error occured while sending confirmation email.', error: error });
    }
}