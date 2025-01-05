/*
 * Mongoose schema to model instances of Product entity.
 * Entity stored as table. Each new instance is a new row.
 * Schema defines data stored in each new row.
 * Note: Review schema defined for use in Product.
 * Note: MongoDB creates id (primary key) for each new row.
*/
import mongoose from "mongoose";

// REVIEW TABLE SCHEMA
const reviewSchema = mongoose.Schema({
    name: {             // col name
        type: String,   // data type
        required: true  // constraint
    },
    rating: { 
        type: Number, 
        required: true 
    },
    comment: { 
        type: String 
    },

    user: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: "User"        // foreign key -> User table
    }

}, { timestamps: true });  // at row creation

// PRODUCT TABLE SCHEMA
const productSchema = new mongoose.Schema({
    name: {             // col name
        type: String,   // data type
        required: true  // constraint
    },
    category: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
    brand: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    inStock: { 
        type: Number, 
        required: true, 
        default: 0 
    },
    price: { 
        type: Number, 
        required: true,
        default: 0 
    },
    rating: { 
        type: Number, 
        required: true, 
        default: 0 },
    numRatings: { 
        type: Number, 
        required: true, 
        default: 0 
    },
    
    reviews: [reviewSchema],  // from above schema

    // foreign key to User table
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: "User"
    },

}, { timestaps: true }); // row creation timestamp

const Product = mongoose.model("Product", productSchema);
export default Product;