const routes=require("express").Router();

routes.get("/",require("../Controllers/user"));

module.exports=routes;