import { dbContext } from "../db/DbContext.js";
import { galaxyService } from "./GalaxyService.js";

class SystemService {
	async createSystem(data) {
		return await dbContext.Systems.create(data);
	}
	async getSystems() {
		return await dbContext.Systems.find().populate("galaxy");
	}

	async getSystemById(id) {
		const system = await dbContext.Systems.findById(id);
		if (!system) {
			throw new Error(`No System with ID: ${id}`);
		}
		return system;
	}

	async getSystemsInGalaxy(id) {
		await galaxyService.getGalaxyById(id);
		return dbContext.Systems.find({ galaxyId: id });
	}
}

export const systemService = new SystemService();
