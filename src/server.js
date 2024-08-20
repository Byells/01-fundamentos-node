import  http  from 'node:http';
import { json } from './middlewares/json.js';


const perfil = []

const server = http.createServer(async(req, res) =>{
    const { method, url } = req

    await  json(req, res)



    console.log(req.body)



    if(method == 'GET' && url == '/profile'){
        return res.end(JSON.stringify(perfil))
    }
    else if(method == 'POST' && url == '/profile'){

        const { name, email } = req.body

        perfil.push({
            id: 7,
            name,
            email,
            bio: 'Solus Christus'
        })


       return res
            .writeHead(201)
            .end('Funcionou')

    }


    return res.writeHead(404).end('Hello World')


})

server.listen(3033);
