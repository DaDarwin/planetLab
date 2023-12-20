import mongoose from "mongoose"
import { dbContext } from "../db/DbContext.js"






class GalaxyService{
    
    async createGalaxy(data) {
       return await dbContext.Galaxies.create(data)

    }
    async getGalaxies() {
        return await dbContext.Galaxies.find()
    }

    async getGalaxyById(id) {
        const galaxy = await dbContext.Galaxies.findById(id)
        if(!galaxy){
            throw new Error(`No System with ID: ${id}`);
        }
        return galaxy
    }

}


export const galaxyService = new GalaxyService()