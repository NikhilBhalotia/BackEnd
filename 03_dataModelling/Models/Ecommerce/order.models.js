import mongoose from "mongoose";

const orderItemsSchema = mongoose.Schema({
  quatity: {
    type: Number,
    required: true,
    
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Product"
  }
})

const orderSchema = new mongoose.Schema({
  orderPrice: {
    type: Number,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    
  },
  orderItems: {
    type: [orderItemsSchema],
    
  },
  address: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["PENDING", "CANCELLED", "DELIVERED"],
    default:"PENDING"
  }
},{timestamps:true})

export const Order = mongoose.model("Order",orderSchema)