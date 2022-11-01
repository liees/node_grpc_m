// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var server_pb = require('./server_pb.js');

function serialize_userproto_RequestCondition(arg) {
  if (!(arg instanceof server_pb.RequestCondition)) {
    throw new Error('Expected argument of type userproto.RequestCondition');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userproto_RequestCondition(buffer_arg) {
  return server_pb.RequestCondition.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userproto_RequestObjectId(arg) {
  if (!(arg instanceof server_pb.RequestObjectId)) {
    throw new Error('Expected argument of type userproto.RequestObjectId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userproto_RequestObjectId(buffer_arg) {
  return server_pb.RequestObjectId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userproto_Response(arg) {
  if (!(arg instanceof server_pb.Response)) {
    throw new Error('Expected argument of type userproto.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userproto_Response(buffer_arg) {
  return server_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  getById: {
    path: '/userproto.User/getById',
    requestStream: false,
    responseStream: false,
    requestType: server_pb.RequestObjectId,
    responseType: server_pb.Response,
    requestSerialize: serialize_userproto_RequestObjectId,
    requestDeserialize: deserialize_userproto_RequestObjectId,
    responseSerialize: serialize_userproto_Response,
    responseDeserialize: deserialize_userproto_Response,
  },
  getList: {
    path: '/userproto.User/getList',
    requestStream: false,
    responseStream: false,
    requestType: server_pb.RequestCondition,
    responseType: server_pb.Response,
    requestSerialize: serialize_userproto_RequestCondition,
    requestDeserialize: deserialize_userproto_RequestCondition,
    responseSerialize: serialize_userproto_Response,
    responseDeserialize: deserialize_userproto_Response,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
