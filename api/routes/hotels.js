import express from "express";
import {
    countByCity,
    countByType,
    createHotel,
    deleteHotel,
    getHotel,
    getHotelRooms,
    getHotels,
    updateHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

//THESE CAME FROM THE ../controllers/hotel.js THEREFORE, IT SHOULD BE DONE FIRST AND IMPORTED HERE

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
//router.get("/:id", getHotel);
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
//router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);


export default router;


/*
Only admin can create, update and delete hotel
All users can get hotel(s)
*/