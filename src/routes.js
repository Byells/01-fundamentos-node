import { Database } from "./database.js"
import {randomUUID} from 'node:crypto'


const database = new Database()


export const routes = [
    {
        method: 'GET',
        path: '/profile',
        handler: (req, res) => {
            const perfis = database.select('perfis')


            return res.end(JSON.stringify(perfis))
        } 
    },

    {
        method: 'POST',
        path: '/profile',
        handler: (req, res) => {
            const {name, email, bio} = req.body


            const profile = {
                id : randomUUID(),
                name,
                email,
                bio
            }

            database.insert('perfis', profile)


            return res
                .writeHead(201)
                .end('Funcionou')
        } 
    },
    {
        method: 'PUT',
        path: '/profile',
        handler: (req, res) => {
            
        }
    }
]