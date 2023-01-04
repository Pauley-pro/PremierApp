import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

 /*router.get("/checkauthentication", verifyToken, (req,res,next)=>{
   res.send("hello user, you are logged in")
 })

 router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
   res.send("hello user, you are logged in and you can delete your account")
 })

 router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
   res.send("hello admin, you are logged in and you can delete all accounts")
 })*/
//The commented section above above has to be uncommented to test the API as explained in the commented down this page


//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;



//1. For verification of user enter into Insomnia(for API request)
//2. Press ctrl N, this create a New request. Double click on the "New Request" to create request.
//3. Give the New Request a title "UPDATE USER and use the GET method"
/*4. In the middle of the UI;
    i. change body to JSON
    ii. put the following details {
        "username":"the new username"
    } */
//5. Change the endpoint just above to localhost:8800/api/users/checkuser/theUniqueID and click send.
/*6. To verify admin, change the endpoint just above to localhost:8800/api/users/checkadmin/theUniqueID and click send.
This will give an error but on the database in the browser, edit the isAdmin of the user and change the false to true, then login again
*/

