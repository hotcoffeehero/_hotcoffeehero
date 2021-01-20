import mongoose from 'mongoose'
const uri =
  'mongodb+srv://hotcoffeehero:mongo1234@proshop.qiu4a.mongodb.net/hotcoffeehero?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`Mongo hears you on ${connection.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
