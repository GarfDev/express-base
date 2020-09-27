import mongoose, { Connection } from 'mongoose';

let conn: Connection | null = null;

const getMongooseConn = (url?: string) => {
  if (conn) {
    return conn;
  }
  mongoose.connect(url || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  conn = mongoose.connection;
  conn.on('error', console.error.bind(console, 'MongoDB connection error:'));
  return conn;
};

export default getMongooseConn;
