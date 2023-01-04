import User from "../models/User.js";

export const updateUser = async (req,res,next)=>{
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}
export const deleteUser = async (req,res,next)=>{
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
}
export const getUser = async (req,res,next)=>{
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}
export const getUsers = async (req,res,next)=>{
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}

//1. Once all these from updateUsers to getUsers in this module is done, enter into Insomnia(for API request)
//2. Press ctrl N, this create a New request. Double click on the "New Request" to create request.
//3. Give the New Request a title "UPDATE USER and use the GET method"
/*4. In the middle of the UI;
    i. change body to JSON
    ii. put the following details {
        "username":"the new username"
    } */
//5. Change the endpoint just above to localhost:8800/api/users/checkauthentication and click send