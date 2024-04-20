import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';
import aws from 'aws-sdk';

const subjectTxt = "Contact form confirmation for availe.io"
const bodyTxt = "This email contains the information you submitted to the contact form on availe.io. If you did not submit this information, please disregard this email. Thank you for your interest in availe.io."

const ses = new aws.SES({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export default async function emailHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, subject, content } = req.body; // destructure data from request body

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

        try {

        }
        catch {

        }
    }
}