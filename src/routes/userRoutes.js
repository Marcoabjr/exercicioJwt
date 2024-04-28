import express from "express";
import controller from "../controllers/userController.js"
import authControllers from "../controllers/authControllers.js";

const router = express.Router(); 

router.get("/", controller.getAllUsers);
router.post("/criar", controller.createUser);
router.post("/editarUser", controller.updateUser);
router.post("/DeletarUser", controller.deleteUser);

router.post("/login", authControllers.login);
router.post("/rotaAutenticada", authControllers.verifToken, controller.rotaAutenticada);
