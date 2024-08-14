import  http  from 'node:http';


const perfil = []

const server = http.createServer(async(req, res) =>{
    const { method, url } = req


    const buffers = []

    for await(const chunk of req){
      buffers.push(chunk)
    }

    try{
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    }catch{
       req.body = null
    }
  

    console.log(req.body)



    if(method == 'GET' && url == '/profile'){
        return res
            .setHeader('Content-type', 'application/json')    
            .end(JSON.stringify(perfil))
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
