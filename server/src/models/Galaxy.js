import { Schema } from "mongoose"




export const GalaxySchema = new Schema({
    name: {type: String, required: true, maxLength:25, minLength:3}
})