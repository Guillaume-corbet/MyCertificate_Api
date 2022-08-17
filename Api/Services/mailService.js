import nodemailer from "nodemailer";
import dotenv from 'dotenv'

let transporter = "";
dotenv.config();

const initSmtp = () => {
    transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
    });
}

const sendNewMail = async (to, subject, text, html) => {
    let info = await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: to,
        subject: subject,
        text: text,
        html: html,
    });

    return ({accepted: info.accepted,
            rejected: info.rejected,
            response: info.response,
            from: info.envelope.from,
            to: info.envelope.to
    });
}

export {initSmtp, sendNewMail}