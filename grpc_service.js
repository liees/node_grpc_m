const grpc = require('grpc');
const path = require('path');
const Promise = require('bluebird')
const PROTO_PATH = __dirname + '/server.proto';
const user_proto = grpc.load(PROTO_PATH).userproto;

let getById = (call, callback) => {
  let userId = call.request.userId;
  callback(null, 'findById(' + userId + ')');
}

let getList = async (call, callback) => {
  let condition = call.request.condition;
  callback(null, 'find(' + condition + ')');
}

const main  = async () => {
  const server = new grpc.Server();
  server.addService(user_proto.User.service, {
    getById: getById,
    getList: getList,
  });
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
};

main();
