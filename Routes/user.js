const routes=require("express").Router();

routes.get("/",require("../Controllers/user"));
routes.get("/signup",require("../Controllers/signup"))

module.exports=routes;