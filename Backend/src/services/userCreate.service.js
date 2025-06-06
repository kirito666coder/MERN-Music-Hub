import UserModel from "../Models/user.model.js"


export default createUser = async ()=>{

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

    const user = await UserModel.findOneAndUpdate()
}