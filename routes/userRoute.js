import express from "express";
const router = express.Router();
import userModel from "../models/userModel.js";
router.get("/users", async(req,res)=>{
    try{
        const users = await userModel.find({role:0});
        res.status(200).send({
                    success: true,
                    message: "ALL users ",
                    users
                  });
    }
    catch (error) {
              console.log(error);
              res.status(500).send({
                success: false,
                message: "Erorr in getting users",
                error: error.message,
              });
            }
});
export default router;
