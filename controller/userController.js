import { response } from 'express';
import User from '../model/userSchema.js'



export const userSignup = async(request, response) => {
    try{

        const checkUser = await User.findOne({ username: request.body.username});
        if(checkUser){
            return response.status(401).json({message:'Username already exist'});
        }
        const user  = request.body;
        console.log(user);
        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json({message:user});
    }catch(error){
        response.status(500).json({
            message: `error while inserting user info${error.message}`
            

        })
    }
}

export const userLogin = async (request, resposne) => {
    try{
        const username = request.body.username;
        const password = request.body.password;

        let user  = await User.findOne({ username: username, password: password});
        if(user){
            return resposne.status(200).json( {data: user});
        }else{
            return response.status(401).json("invalid login");
        }

    }catch(error){
        response.status(500).json('error for login', error.message);
    }
    
}

// export default userSignup;