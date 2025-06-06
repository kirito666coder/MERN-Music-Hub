import mongoose from "mongoose"

export const ConnectDB = async ()=>{
 
    const dbURL = process.env.MONGO_URL

    if(!dbURL){
        console.log("MONGO_URL not defined in environment vriables")
        process.exit(1)
    }

    try{  
      const db =  await mongoose.connect(dbURL)
            console.log(`connect to ${db.connection.name} DB`)
    }catch(error){
        console.log('Error to Connect MongoDB',error)
        process.exit(1)
    }
}