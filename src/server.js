import {randomUUID} from 'node:crypto'
import  http  from 'node:http';
import { json } from './middlewares/json.js';
import { Database } from './database.js';


const database = new Database()

const server = http.createServer(async(req, res) =>{
    const { method, url } = req

    await  json(req, res)



    console.log(req.body)


    if(method == 'GET' && url == '/profile'){

        const perfis = database.select('perfis')


        return res.end(JSON.stringify(perfis))
    }


    else if(method == 'POST' && url == '/profile'){

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


    return res.writeHead(404).end('Hello World')


})

server.listen(3033);
