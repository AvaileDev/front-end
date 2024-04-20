import aws from 'aws-sdk';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function emailHandler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ message: 'Email sent successfully' });
}