import React from 'react';
import "./FeaturedProperties.css";
import useFetch from "../hooks/useFetch.js";



const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (        
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;

//If it is loading return "Loading" and if it is not, return everything in the div

/*
For testing of API
URL: localhost:8800/api/hotels?featured=true
Method: GET
Format: BODY

To limit the number of items to be displayed, the URL will be localhost:8800/api/hotels?featured=true&limit=4

To display the hotels with their minimum and maximum prices items to be displayed, the URL will be localhost:8800/api/hotels?featured=true&limit=4&min=10&max=200
*/



/*const FeaturedProperties = () => {
    return (
      <div className="fp">
        <div className="fpItem">
          <img
            src="https://res.cloudinary.com/polad/image/upload/v1662474382/falconetech/hotel13_ahetyl.webp"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Aparthotel Stare Miasto</span>
          <span className="fpCity">Madrid</span>
          <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://res.cloudinary.com/polad/image/upload/v1662475304/falconetech/hotel14_to4rxu.jpg"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Comfort Suites Airport</span>
          <span className="fpCity">Austin</span>
          <span className="fpPrice">Starting from $140</span>
          <div className="fpRating">
            <button>9.3</button>
            <span>Exceptional</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://res.cloudinary.com/polad/image/upload/v1662474534/falconetech/hotel15_ugvcmp.jpg"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Four Seasons Hotel</span>
          <span className="fpCity">Lisbon</span>
          <span className="fpPrice">Starting from $99</span>
          <div className="fpRating">
            <button>8.8</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://res.cloudinary.com/polad/image/upload/v1662475867/falconetech/hotel16_wwa0c6.jpg"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Hilton Garden Inn</span>
          <span className="fpCity">Berlin</span>
          <span className="fpPrice">Starting from $105</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    );
  };

export default FeaturedProperties;*/