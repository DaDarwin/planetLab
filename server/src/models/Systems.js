import { Schema } from "mongoose";





export const SystemSchema = new Schema({
    name:{type: String, required: true, maxLength: 25, minLength: 3},
    galaxyId: {type: Schema.Types.ObjectId, ref: 'galaxy', required: true}
    // @ts-ignore
    },{toJSON: {virtuals: true}})


SystemSchema.virtual('galaxy',
{
    localField:'galaxyId',
    foreignField:'_id',
    ref:'Galaxy',
    justOne:true
})