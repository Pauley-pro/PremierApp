import useFetch from "../hooks/useFetch";
import "./PropertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://res.cloudinary.com/polad/image/upload/v1662474312/falconetech/hotel8_qbz9ca.webp",
    "https://res.cloudinary.com/polad/image/upload/v1662474314/falconetech/hotel9_xlfvas.jpg",
    "https://res.cloudinary.com/polad/image/upload/v1662475254/falconetech/hotel10_erlzhc.jpg",
    "https://res.cloudinary.com/polad/image/upload/v1662474368/falconetech/hotel11_zoq7k0.jpg",
    "https://res.cloudinary.com/polad/image/upload/v1662474524/falconetech/hotel12_o3nf5u.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;


/*import React from 'react';
import "./PropertyList.css";
import hotel8 from "../Premierimg/hotel8.jpg";
import hotel9 from "../Premierimg/hotel9.jpg";
import hotel10 from "../Premierimg/hotel10.jpg";
import hotel11 from "../Premierimg/hotel11.jpg";
import hotel12 from "../Premierimg/hotel12.jpg";
import useFetch from '../hooks/useFetch';


const PropertyList = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );
  return (
    <div className="pList">
      <div className="pListItem">
        <img src="https://res.cloudinary.com/polad/image/upload/v1662474312/falconetech/hotel8_qbz9ca.webp" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://res.cloudinary.com/polad/image/upload/v1662474314/falconetech/hotel9_xlfvas.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://res.cloudinary.com/polad/image/upload/v1662475254/falconetech/hotel10_erlzhc.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Resort</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://res.cloudinary.com/polad/image/upload/v1662474368/falconetech/hotel11_zoq7k0.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://res.cloudinary.com/polad/image/upload/v1662474524/falconetech/hotel12_o3nf5u.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
    </div>
  )
}

export default PropertyList;*/