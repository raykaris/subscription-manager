import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'user Name is required'],
        trim: true,
        minLength: 2,
        maxLength: 60,
    },
    email: {
        type: String,
        required: [true, 'user Email is required'],
        trim: true,
        unique: true,
        lowercase: true,
        match: [/\s+@\s+\.\s+/, 'Please provide a valid email'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: 6,
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;