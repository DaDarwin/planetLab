import mongoose from "mongoose"
import { dbContext } from "../db/DbContext.js"






class GalaxyService{
    
    async createGalaxy(data) {
        const galaxy = await dbContext.Galaxies.create(data)
        return galaxy
    }
    async getGalaxies() {
        return await dbContext.Galaxies.find()
    }

}


export const galaxyService = new GalaxyService()