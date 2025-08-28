import UserModel from "../Models/user.model.js"


const createUser = async ({ email, providerName, providerId, profile }) => {
    try {
        const query = {
            $or: [
                { email },
                { [providerName]: providerId }
            ]
        }

        const existingUser = await UserModel.findOne(query)

        if (existingUser) {

            if (!existingUser[providerName]) {
                existingUser[providerName] = providerId
                await existingUser.save()
            }
            return existingUser
        }

        const user = await UserModel.create({
            name: profile.displayName,
            email: email,
            image: profile.photos[0]?.value || null,
            [providerName]: providerId,
        })

        return user;
    } catch (error) {
        console.log('Error creating or fetching user', error)
    }
}

export const editUserService = async ({userId,updateData}) =>{

    if(!userId || !updateData){
        throw new error("something went wrong")
    }

   const user = await UserModel.findByIdAndUpdate(
        userId,
        { $set: updateData },
        { new: true }
      ); 

      return user;
}

export default createUser;