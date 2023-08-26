import 'dotenv/config'
import {google} from 'googleapis'

export const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
)

export const config = {
    apiVersion: process.env.API_VERSION,
    port: process.env.PORT,
}

export const jwt_secret = process.env.JWT_SECRET
export const jwt_lifetime = process.env.JWT_LIFETIME