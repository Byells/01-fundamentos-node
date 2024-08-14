import http from 'node:http'
import { Transform } from 'node:stream'

class TransformStream extends Transform{
    _transform(chunk, encoding, callback){
      const transform = Number(chunk.toString()) * -1
        
      console.log(transform)


      callback(null, Buffer.from(String(transform)))
    }
  }


//   - Request ⇒  ReadableStream
//   - Response ⇒ WritableStream

const server = http.createServer(async(req, res) => {

  const buffers = []

  for await(const chunk of req){
    buffers.push(chunk)
  }

  const fullStreamContent = Buffer.concat(buffers).toString()

  console.log(fullStreamContent)
  return res.end(fullStreamContent)

  // req
  //   .pipe(new TransformStream())
  //   .pipe(res)

})


server.listen(3034)
