
import { Router } from "express";
import AuthRoute from "./auth.route.js";

const AllRoutes = Router()

AllRoutes.use('/auth',AuthRoute)

export default AllRoutes;