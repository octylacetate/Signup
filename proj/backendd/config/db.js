// config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://aoctyl:UQ2mIHQTimqBbSmD@cluster0.freisob.mongodb.net/Eliiib?retryWrites=true&w=majority&appName=Cluster0' , {
        
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
export default connectDB;
