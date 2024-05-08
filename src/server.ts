import app from "./app";
import mongoose from "mongoose";


mongoose.connect(process.env.CONN_STR!).then(()=>{
    console.log("Conntected");
    
})

app.listen(8080,()=>{
    console.log("server started");
    
})