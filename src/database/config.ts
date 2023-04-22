import { connect, set } from "mongoose"


export const connectDB = async () => {
  set('strictQuery', false);

  try {

    const db = await connect(`${process.env.MONGO_URI}`);
    console.log('Database port: ' + db.connection.port, 'Database Name: ' + db.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}