import mongoose from "mongoose";

const MongooseWrapper = {
  connect: (uri) => {
    return mongoose.connect(uri);
  },
  connection: () => mongoose.connection,

  getMany: (model, filter = {}, columns = {}) => {
    return model.find(filter, columns);
  },
  getOne: (model, id, columns = {}) => {
    return model.findById(id, columns);
  },
}; 

export {MongooseWrapper};