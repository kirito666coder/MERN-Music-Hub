import UserModel from "../Models/user.model.js"


const createUser = async ({email,providerName,providerId,profile})=>{

    const query = {
        $or:[
            {email},
        ]
    }

    const update = {
        $setOnInsert:{
            name:profile.displayName,
            email:email,
            image:profile.photos[0]?.value || null,
            [providerName]:providerId,
        }
    }

    const user = await UserModel.findOneAndUpdate(query,update,{
        upsert:true,
        new:true,
    })

    return user;
}

export default createUser;