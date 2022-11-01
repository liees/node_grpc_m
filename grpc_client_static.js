const grpc  = require('@grpc/grpc-js')
const message = require('./proto/server_pb')
const services = require('./proto/server_grpc_pb')

const getClient = () => {
  try {
    const client = new services.UserClient(`localhost:50051`, grpc.credentials.createInsecure())
    console.log(client)
    return client
  } catch (err) {
    console.error(err)
  }
}

getClient()
