/*
 * Mongoose schema to model instances of User entity.
 * Entity stored as table. Each new instance is a new row.
 * Schema defines data stored in each new row.
 * Note: User table has no foreign key.
*/
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // contact info
    name: {             // col name
        type: String,   // data type
        required: true  // constraint 
    },
    email: { 
        type: String, 
        required: true,
        unique: true 
    },
    phone: { 
        type: String, 
        required: true, 
        unique: true 
    },

    // address (comp attribute array/assoc entity)
    shippingAddress: [{
        street: { 
            type: String, 
            reqired: true 
        },
        city: { 
            type: String, 
            required: true 
        },
        state: { 
            type: String, 
            required: true 
        },
        zip: { 
            type: String, 
            required: true }
    }],

    // user credentials
    username: { 
        type: String, 
        required: true, 
        unique: true },
    password: { 
        type: String, 
        required: true },

    // define admin users (via DB access)
    isAdmin: { 
        type: Boolean, 
        required: true, 
        default: false }

}, { timestamps: true });  // at row creation

const User = mongoose.model("User", userSchema);
export default User;