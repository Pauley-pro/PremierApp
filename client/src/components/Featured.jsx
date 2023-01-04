import React from 'react';
import "./Featured.css";
import useFetch from '../hooks/useFetch';

const Featured = () => {
    const { data, loading, error } = useFetch(
        "/hotels/countByCity?cities=Berlin,Spain,London"
    );

    return (
        <div className="featured">
            {loading ? (                        //This means, if loading is true, send "Loading please wait"
                "Loading please wait" 
            ) : (
            <>
                <div className="featuredItem">
                    <img
                    src="https://res.cloudinary.com/polad/image/upload/v1662475316/falconetech/hotel17_cdrzgt.webp"
                    alt=""
                    className="featuredImg"
                    />
                    <div className="featuredTitles">
                    <h1>Berlin</h1>
                    <h2>{data[0]} properties</h2>
                    </div>
                </div>

                <div className="featuredItem">
                    <img
                    src="https://res.cloudinary.com/polad/image/upload/v1662474514/falconetech/hotel18_ys5r5d.webp"
                    alt=""
                    className="featuredImg"
                    />
                    <div className="featuredTitles">
                    <h1>Spain</h1>
                    <h2>{data[1]} properties</h2>
                    </div>
                </div>
                
                <div className="featuredItem">
                    <img
                    src="https://res.cloudinary.com/polad/image/upload/v1662475312/falconetech/hotel19_w4rcxa.webp"
                    alt=""
                    className="featuredImg"
                    />
                    <div className="featuredTitles">
                    <h1>London</h1>
                    <h2>{data[2]} properties</h2>
                    </div>
                </div>
            </>)}
        </div>
    )
}

export default Featured