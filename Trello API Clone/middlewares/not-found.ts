import {Request, Response} from 'express'

const notFound = (req: Request, res: Response) => {
    res.send('<h2> Route does not exist </h2>')
}

export default notFound