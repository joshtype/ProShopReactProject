/*
 * Mongoose schema to model instances of Order entity.
 * Entity stored as table. Each new instance is a new row.
 * Schema defines data stored in each new row.
*/
import mongoose from "mongoose";

const orderSChema = mongoose.Schema({

    // order info (comp attribute array/assoc entity)
    orderItems: [{ 
        name: {             // col name
            type: String,   // data type
            required: true  // constraint
        },
        image: { 
            type: String, 
            required: true 
        },
        qty: { 
            type: Number, 
            required: true 
        },
        price: { 
            type: Number, 
            required: true 
        },
        product: { 
            type: mongoose.Schema.Types.ObjectId,
            required: true, 
            ref: "Product"  // foreign key
        }
    }],

    // price info
    subtotal: { 
        type: Number, 
        required: true, 
        default: 0.0 
    },
    taxPrice: { 
        type: Number, 
        required: true, 
        default: 0.0 
    },
    shipingPrice: { 
        type: Number, 
        required: true, 
        default: 0.0 
    },
    total: { 
        type: Number, 
        required: true, 
        default: 0.0 
    },

    // payment info
    paymentMethod: { 
        type: String, 
        required: true 
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
        required: true
    },

    // order completion info
    isPaid: { 
        type: Boolean, 
        required: true, 
        default: false 
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },

    // foreign key to User table
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,                       
        ref: "User"
    },

}, { timestamps: true }); // at row creation

const Order = mongoose.model("Order", orderSchema);
export default Order;