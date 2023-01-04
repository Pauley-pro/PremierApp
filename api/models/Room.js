import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
    {
        title: {
        type: String,
        required: true,
        },
        price: {
        type: Number,
        required: true,
        },
        maxPeople: {
        type: Number,
        required: true,
        },
        desc: {
        type: String,
        required: true,
        },
        roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
    },
    { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);


//1. Once all these from title to desc in this module is done, enter into Insomnia(for API request)
//2. Press ctrl N, this create a New request. Double click on the "New Request" to create request.
//3. Give the New Request a title "CREATE ROOM and use the POST method"
/*4. In the middle of the UI;
    i. change body to JSON
    ii. put the following details {
        "title":"King Room",
        "desc":"King size bed, 1 bathroom, balcony",
        "price":100,
        "maxPeople":"2",
        "roomNumbers":[{"number": 101},{"number":102}]
    } */
//5. Change the endpoint just above to localhost:8800/api/rooms/AnyHotelId and click send
/*6. The room created can be deleted;
    i. Change to DELETE method
    ii. The endpoint should be localhost:8800/api/rooms/roomID/hotelID
    iii. JSON should be changed to BODY and then semd
*/