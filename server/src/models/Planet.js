import { Schema } from "mongoose";





export const PlanetSchema = new Schema({
    name: {type: String, required: true, maxLength: 25, minLength: 3},
    systemId: {type: Schema.Types.ObjectId, ref: 'system', required: true}
    // @ts-ignore
    },{toJSON: {virtuals: true}})


PlanetSchema.virtual('system',
{
    localField:'systemId',
    foreignField:'_id',
    ref:'System',
    justOne:true
})