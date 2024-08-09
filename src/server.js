import  http  from 'node:http';


const perfil = []

const server = http.createServer((req, res) =>{


    const { method, url } = req

    console.log(method, url)

    if(method == 'GET' && url == '/profile'){
        console.log(perfil)
        return res
            .setHeader('Content-type', 'application/json')    
            .end(JSON.stringify(perfil))
    }
    else if(method == 'POST' && url == '/profile'){

        perfil.push({
            id: 7,
            name: 'gabriel',
            email: 'gabriel@gmail.com',
            bio: 'Solus Christus'
        })

        console.log(perfil)

       return res
            .writeHead(201)
            .end('Funcionou')

    }


    return res.writeHead(404).end('Hello World')


})

server.listen(3033);
