import axios from "axios";
import { nanoid } from "nanoid";

let currentId=nanoid()


   export const saveUser=(user)=>{
        user.id=currentId
        return new Promise(async(resolve, reject) => {
            try {
              const res= await axios.post('http://localhost:3002/users',user)  
              resolve(res)
            } catch (error) {
                reject(error)
                console.log(error.message)
            }
        })
    }

   export const getUser=(userId,password,cb)=>{
        axios.get(`http://localhost:3002/users?email=${userId}&password=${password}`)
        .then(response => cb(response.data[0]))
		.catch(error => { throw error })
   
    }


