import { Database } from "./database.js"
import {randomUUID} from 'node:crypto'
import { buildRoutePath } from "./utils/build-route-path.js"


const database = new Database()


export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/profile'),
        handler: (req, res) => {

            console.log(req.query)


            const { search } = req.query

            const searchPerfis = search ? {
                
                name: search,
                email:search,
                bio:search
            }: null

            const perfis = database.select('perfis', searchPerfis)


            return res.end(JSON.stringify(perfis))
        } 
    },

    {
        method: 'POST',
        path: buildRoutePath('/profile'),
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
        path: buildRoutePath('/profile/:id'),
        handler: (req, res) => {
            const { id } = req.params
            const { name, email, bio } = req.body

            database.update('perfis', id, {
                name,
                email,
                bio
            })

            return res.writeHead(204).end()

        }

    },
    {
        method: 'DELETE',
        path: buildRoutePath('/profile/:id'),
        handler: (req, res) => {

            const { id } = req.params

            database.delete('perfis', id)


            return res.writeHead(204).end()
        }
    }
]