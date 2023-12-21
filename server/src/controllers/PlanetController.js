import { planetService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetController extends BaseController {
	constructor() {
		super("api/planets");
		this.router.post("", this.createPlanet).get("", this.getPlanets);
		// .put(':/id', this.updatePlanet)
	}

	async createPlanet(request, response, next) {
		try {
			response.send(await planetService.createPlanet(request.body));
		} catch (error) {
			next(error);
		}
	}
	async getPlanets(request, response, next) {
		try {
			response.send(await planetService.getPlanets());
		} catch (error) {
			next(error);
		}
	}

	// async updatePlanet(request, response, next){
	//     try {
	//         response.send(await planetService.updatePlanet(request.params.id ,request.body))
	//     } catch (error) {
	//         next(error)
	//     }
	// }
}
