import { Router } from "express"
import { createFood } from "../controller/foods/create-food.js"
import { getFoods } from "../controller/foods/get-foods.js"

const FoodRouter = Router()

FoodRouter.get("/",getFoods).post("/",createFood)

export {FoodRouter};