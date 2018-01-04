
const grpc = require('grpc');
const Promise = require('bluebird');
const PROTO_PATH = __dirname + '/server.proto';
const user_proto = grpc.load(PROTO_PATH).userproto;
const UserGrpcClient = new user_proto.User('localhost:50051', grpc.credentials.createInsecure());

Promise.promisifyAll(UserGrpcClient);

let userId = '76543'
let condition = JSON.stringify({isDeleted: false});

UserGrpcClient.getById(userId, (err, result) => {
  if(!!err) {
    return print(err);
  }
  return print(result.message);
})

function print (data) {
  console.log(data)
}
