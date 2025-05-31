import mongoose from "mongoose"



export default ConnectDB = async ()=>{
    try{
       
        await mongoose.connect(process.env.MONGO_URL)
        .then(
            console.log("DB Connect")
        )
    }catch(error){
        console.log(error)
    }
}