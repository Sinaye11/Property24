import React from 'react';
import PropertyCard from "../property-card/property-card";

const PropertyList = () => {
    return ( 
    <div className="bg-light text-dark ">
        <div className="bg-secondary text-white px-3 py-2">
            <h2 className="">Listings</h2>
        </div>
        <ul className="pl-0 p-3">
            <li className="list-group-item mb-3"><PropertyCard></PropertyCard></li>
            
        </ul>
    </div> );
}
 
export default PropertyList;