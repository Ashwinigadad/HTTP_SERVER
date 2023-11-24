const app=require("express")();

app.use("/user",require("./Routes/user"))

app.listen("2000",()=>{
    console.log("server started at port 2000")
})