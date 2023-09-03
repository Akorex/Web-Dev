// code functionality to set up emails for the project

import nodemailer from "nodemailer"
import logger from  "../logger"

export interface EmailOptions {
    from: string
    to: string | string[]
    subject: string
    body: string
}

const transporter = nodemailer.createTransport({
    service: "smtp@gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: "OAUTH2",
        // TO DO
        //user: to do,
        //serviceClient:  to do,
        //privateKey: to do
    }, 

    tls: {
        rejectUnauthorized: false
    }
})


export async function sendEmail({
    from,
    to,
    subject,
    body}: EmailOptions){
        try{
            logger.info(`Sending Email from ${from} to ${to}`)
            
            await transporter.verify()
            await transporter.sendMail({
                from: `Trello API Clone <${from}>`,
                to,
                subject: `${subject} - Trello`,
                html: body
            })
            logger.info("Email sent successfully.")
        } catch(error){
            console.log(error)
        }
    }

// to do - work with mailer