import { dbContext } from "../db/DbContext.js"
import { systemService } from "./SystemsService.js"




class PlanetService{
    async createPlanet(data) {
        return await dbContext.Planets.create(data)
    }
    async getPlanets() {
        return await dbContext.Planets.find().populate('system')
    }

    async getPlanetsInSystem(id){
        await systemService.getSystemById(id)
        return dbContext.Planets.find({systemId: id})
    }
    // async updatePlanet(id, update){
    //     const planet = await dbContext.Planets.updateOne()
        
    // }

}

export const planetService = new PlanetService()