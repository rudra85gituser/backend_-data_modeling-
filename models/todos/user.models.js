import mongoose from "mongoose"

const userSchema = new mongoose.Schema
(
  {
    /*  username:string,
        email:string,
        isActive:Boolean  */

    //or

    username:
    {
       type: Stirng,
       require:true,
       unique:true,
       lowercase:true
    },
    email:
    {
       type: Stirng,
       require:true,
       unique:true,
       lowercase:true
    },
    password:
    {
       type: Stirng,
       require:true,
       unique:true
    }

  },
  {timestamps:true} // adds two fields createdat and updatedat
)

export const User = mongoose.model("User" , userSchema)