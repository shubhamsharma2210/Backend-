import mongoose  from "mongoose";

const orderItemsSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    qunatity:{
        type:Number,
        required:true,
    }
})

const OrderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    orderItems:[orderItemsSchema]
} , {timestamps:true})

export const Order = mongoose.model('Order', OrderSchema)