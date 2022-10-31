
const grpc  = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + '/server.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const proto  = grpc.loadPackageDefinition(packageDefinition);

console.log(proto)

const UserGrpcClient = new proto.userproto.User('localhost:50051', grpc.credentials.createInsecure());

console.log('============================')
console.log(UserGrpcClient)
console.log('============================')
Promise.promisifyAll(UserGrpcClient);

let userId = '76543'
let condition = JSON.stringify({isDeleted: false});

UserGrpcClient.getById({ userId }, (err, result) => {
  if(!!err) {
    return print(err);
  }
  console.log(result)
  return print(result.message);
})

function print (data) {
  console.log(data)
}
