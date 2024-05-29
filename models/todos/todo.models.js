import mongoose from "mongoose"

const todoSchema = new mongoose.Schema
(
  {
     content:
     {
       type: String,
       required: true,
     },
     complete:
     {
       type: Boolean , 
       default: false
     },
     //now when we have to create a link between two models, schemas
     

     //linking user schema,model with todo schema/model
     createdBy:
     {
       type: mongoose.Schema.Types.ObjectId,
       ref:"User"
     },

    //linking subtodo schema,model with todo schema/model
     subTodos:
     {
       type: mongoose.Schema.Types.ObjectId,
       ref: "SubTodo",
     }

  }
  ,{timestamps: true})

export const Todo = mongoose.model("Todo" , todoschema);

