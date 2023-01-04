import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    distance: {
        type: String,
        required: true,
    },
    photos: {
        type: [String],
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    rooms: {
        type: [String],
    },
    cheapestPrice: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
})

//1. Once all these from name to featured in this module is done, enter into Insomnia(for API request)
//2. Press ctrl N, this create a New request. Double click on the "New Request" to create request.
//3. Give the New Request a title "CREATE HOTEL and use the post method"
/*4. In the middle of the UI;
    i. change body to JSON
    ii. put the following details {
        "name":"Barclays Hotel",
        "type":"hotel",
        "city":"berlin",
        "address":"somewhere",
        "distance":"500",
        "title":"Best Hotel in the City",
        "desc":"hotel description",
        "cheapestPrice":100,
    } */
//5. Change the endpoint just above to localhost:8800/api/hotels and click send
//6. In the database, refresh, click Database, click Browse Collections
/*7. After the UPDATE has been created in hotel.js, enter into either Insomnia or Postman and do the following;
    i. ensure it is in JSON
    ii. give the New Request a title "UPDATE HOTEL and use the PUT method"
    iii. put the following details;
        {
            "name":"Awesome Hotel"
        }
    iv. change the endpoint just above to localhost:8800/api/hotels/theUniqueId(provided in the CREATE HOTEL)  and click send
*/
/*8. After the GET has been created in hotel.js, enter into either Insomnia or Postman and do the following;
    i. ensure it is in BODY
    ii. give the New Request a title "GET HOTEL and use the get method"
    iii. change the endpoint just above to localhost:8800/api/hotels/theUniqueId(provided in the CREATE HOTEL)  and click send
*/
/*9. After the GET ALL has been created in hotel.js, enter into either Insomnia or Postman and do the following;
    i. ensure it is in BODY
    ii. give the New Request a title "GET ALL HOTELS and use the get method"
    iii. change the endpoint just above to localhost:8800/api/hotels and click send
*/
/*10. After the DELETE has been created in hotel.js, enter into either Insomnia or Postman and do the following;
    i. ensure it is in Body
    ii. give the New Request a title "DELETE HOTEL and use the delete method"
    iii. change the endpoint just above to localhost:8800/api/hotels/theUniqueId(provided in the CREATE HOTEL)  and click send
*/


export default mongoose.model("Hotel", HotelSchema)