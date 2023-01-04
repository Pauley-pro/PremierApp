import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const getHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

/*
endpoint for to display featured properties: localhost:8800/api/hotels?featured=true
endpoint for to limit to a specific number which in this case = 2: localhost:8800/api/hotels?featured=true&limit=2
endoint to show limit, minimum and maximum: localhost:8800/api/hotels?featured=true&limit=2&min=10&max=200

line 51;
gt means greater than
lt means less than
*/

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

/*
To get the endpoint for countByCity, 
URL: localhost:8800/api/hotels/countByCity?cities=berlin,madrid,london
(NOTE: that the search for the cities are case sensitive. Madrid is different from madrid).
method: GET
format: BODY
*/

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotels", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};


/*
To get the endpoint for countByCity, 
URL: localhost:8800/api/hotels/countByCity?cities=berlin,madrid,london
(NOTE: that the search for the cities are case sensitive. Madrid is different from madrid).
method: GET
format: BODY
*/

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};




/*import Hotel from "../models/Hotel.js"

export const createHotel = async (req,res,next) => {
    const newHotel = new Hotel(req.body);
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel)
    }catch(err)
    { next(err); }
}

export const updateHotel = async (req,res,next) => {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body },{ new:true })
        res.status(200).json(updatedHotel);
    }catch(err)
    { next(err); }
}

export const deleteHotel = async (req,res,next) => {
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");
    }catch(err)
    { next(err); }
}

export const getHotel = async (req,res,next) => {
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);    //if the request is successful, it returns "hotel"
    }catch(err)
    { next(err); }
}

export const getHotels = async (req,res,next) => {
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err)
    { next(err); }
}
*/