import { galaxyService } from "../services/GalaxyService.js";
import { systemService } from "../services/SystemsService.js";
import BaseController from "../utils/BaseController.js";





export class GalaxyController extends BaseController{
    constructor(){
        super('api/galaxies')
        this.router
        .post('',this.createGalaxy)
        .get('', this.getGalaxies)
        .get('/:id/systems', this.getSystemsInGalaxy)
    }
    
    async createGalaxy(request, response, next){
        try {
            const newGalaxy = await galaxyService.createGalaxy(request.body)
            response.send(newGalaxy)
        } catch (error) {
            next(error)
        }
    }
    async getGalaxies(request, response, next) {
        try {
            response.send(await galaxyService.getGalaxies())
        } catch (error) {
            next(error)
        }
    }

    async getSystemsInGalaxy(request, response, next){
        try {
            response.send(await systemService.getSystemsInGalaxy())
        } catch (error) {
            next(error)
        }
    }
}
