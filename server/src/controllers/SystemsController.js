import { planetService } from "../services/PlanetService.js";
import { systemService } from "../services/SystemsService.js";
import BaseController from "../utils/BaseController.js";




export class SystemsController extends BaseController{
    constructor(){
        super('api/systems')
        this.router
        .post('',this.createSystem)
        .get('', this.getSystems)
        .get('/:id/planets', this.getPlanetsInSystem)
    }
    
    async createSystem(request, response, next){
        try {
            const newSystem = await systemService.createSystem(request.body)
            response.send(newSystem)
        } catch (error) {
            next(error)
        }
    }
    async getSystems(request, response, next) {
        try {
            response.send(await systemService.getSystems())
        } catch (error) {
            next(error)
        }
    }

    async getPlanetsInSystem(request, response, next){
        try {
            response.send(await planetService.getPlanetsInSystem())
        } catch (error) {
            next(error)
        }
    }
}
