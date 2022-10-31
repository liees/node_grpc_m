const grpc  = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + '/server.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const proto  = grpc.loadPackageDefinition(packageDefinition);

let getById = (call, callback) => {
  console.log(call)
  let userId = call.request.userId;
  callback(null, { message: 'findById(' + userId + ')'});
}

let getList = async (call, callback) => {
  let condition = call.request.condition;
  callback(null, { message: 'find(' + condition + ')'});
}

const main  = async () => {
  const server = new grpc.Server();
  server.addService(proto.userproto.User.service, {
    getById,
    getList,
  });
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });

};

main();
