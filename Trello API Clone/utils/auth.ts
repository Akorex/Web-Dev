// utility functions 
import {hashSync, compareSync, genSaltSync} from "bcryptjs"
import {sign} from 'jsonwebtoken'
import { jwt_lifetime, jwt_secret } from "../config/config"
import crypto from "crypto"


interface ISchemaDefault{
    type:
    | StringConstructor
    | NumberConstructor
    | DateConstructor
    | BooleanConstructor
    | StringConstructor[]

    default: null | string | number | Date | boolean
}

export const generateHashedValue = (value: string) =>{
    const salt = genSaltSync(10)
    return hashSync(value, salt)
}


export const createAccessToken = (id: any) => {
    return sign({id}, 'jwt_secret', {expiresIn: jwt_lifetime})
}

export const checkValidity = (value: string, compareValue: string) => {
    return compareSync(value, compareValue)
}

export const generateRandomToken = (): string => {
    return crypto.randomBytes(32).toString('hex')
}

export const getTypeAndDefaultValue = (type:
    | StringConstructor
    | NumberConstructor
    | DateConstructor
    | BooleanConstructor
    | StringConstructor[],
    defaultValue: null | string | number | Date | boolean): ISchemaDefault => {
        return {
            type, 
            default: defaultValue
        }
}