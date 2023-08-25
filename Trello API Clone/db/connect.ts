import mongoose from "mongoose"
import logger from '../logger'

const connectDB = (url: any) =>{
    return mongoose
    .connect(url)
    .then(() => logger.info(`Connected to database successfully.`))
    .catch((err: any) => logger.error(`Unable to connect to database. ${err}`))
}

export default connectDB