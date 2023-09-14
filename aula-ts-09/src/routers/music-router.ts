import {Router} from "express";
import musicController from "../controllers/music-controller";
import {validation} from "../middlewares/validation"
import { musicSchema } from "../schemas/schemas";
const musicRouter = Router();

musicRouter.get("/musics",musicController.getMusics);
musicRouter.post("/musics", validation(musicSchema),musicController.createMusic); // TODO: validação via Joi 

export default musicRouter;