/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "./property-card.css"
import p1img from "../../assets/images/properties/p11.jpg"
import p2img from "../../assets/images/properties/p62.jpg"
import p3img from "../../assets/images/properties/p21.jpg"
import p4img from "../../assets/images/properties/p53.jpg"

const PropertyCard = () => {
    return ( 
        <div>
            <div className="card property-card my-3">
                <img className="card-img-top property-img" src={p1img} alt="Card image cap"></img>
                <div className="card-body text-white pt-1 w-50">
                    <h2 className="card-title text-secondary">R1 650 000</h2>
                    <h5 className="card-subtitle text-grey">4 Bedroom house</h5>
                    <h5 className="card-subtitle font-weight-bold my-2"> Musgrave </h5>
                    <h6 className="card-subtitle font-weight-light text-secondary my-2">45 Sunblaze Way</h6>
                    <p className="card-text">
                    Beautiful Family Home Close To All Amenities (Schools, Shopping Malls, Place of Worship). Well Secured In Small Complex. Remote Gate Access. Bedrooms with Cupboards. Fully Fitted Kitchen with Hob, Oven, Extractor Fan and Plenty Cupboards. Spacious Lounge and Dining Area That Opens To Your Own Private Garden with Braai Facilities and Jacuzzi. 2 Fully Tiled Bathroom with Shower (1 En-Suite) Seperate Guest Toilet. Parking For 2 Cars. 
                    Viewing Strictly By Appointment. </p>
                </div>
            </div>

            <div className="card property-card my-3">
                <img className="card-img-top property-img" src={p2img} alt="Card image cap"></img>
                <div className="card-body text-white pt-1 w-50">
                    <h2 className="card-title text-secondary">R3 650 000</h2>
                    <h5 className="card-subtitle text-grey">6 Bedroom house</h5>
                    <h5 className="card-subtitle font-weight-bold my-2">The Conifers</h5>
                    <h6 className="card-subtitle font-weight-light text-secondary my-2">54 Sunblaze Way</h6>
                    <p className="card-text">
                    Italian elegance at it's finest

                    Experience the opulence and magnificence of royal living in this palatial Italian styled masterpiece. As you enter this double site property, you are immediately gripped by its unsurpassed splendor and breathtaking views. Built in 1970's this unique home features a Porte-cochere to provide your guests with an A-list feeling on their arrival and leads a large entry hall which leads to beautiful open plan living areas including two lounges a dining room and a double volume indoor atrium with a garden.  The home offers seven bedrooms, five bathrooms, three lounges, fully equipped bar with full size billiard table, two guest suites, two studies and a spacious Italian styles kitchen with a walk-in cold room. The home also has its own Yoga Studio and Sauna. 
                    Additional features include domestic accommodation, two outside storerooms, security, air-conditioning and an automated irrigation system.                    </p>
                </div>
            </div>

            <div className="card property-card my-0">
                <img className="card-img-top property-img" src={p3img} alt="Card image cap"></img>
                <div className="card-body text-white pt-1 w-50">
                    <h2 className="card-title text-secondary">R5 650 000</h2>
                    <h5 className="card-subtitle text-grey">6 Bedroom house</h5>
                    <h5 className="card-subtitle font-weight-bold my-2">Ballito</h5>
                    <h6 className="card-subtitle font-weight-light text-secondary my-2">5 Sunblaze Way</h6>
                    <p className="card-text">
                    Perfectly located, spacious and private in secure complex - walking distance from shops

                        Nestled in sought after mini Complex with 24 hour access controlled security, the perfectly located property, brimming with future potential, while providing quick and easy access to all the shopping centers of Ballito.  Charming, private home with low maintenance exterior offering exceptional value in accommodation and under cover, with expansive private entertainment area and cleverly covered atrium, inviting you into the warmth on offer inside this gem.  Only 31 houses in the Complex, with exceptionally low levies. Easy access to all main routes.  The home offers a spacious reception area, lounge and dining room with open plan kitchen. 
                       It flows effortlessly onto the undercover and private patio through an aluminium sliding door and invites you to enjoy the tranquility on offer within this very well maintained Complex and the private garden.                    </p>
                </div>
            </div>

            <div className="card property-card my-0">
                <img className="card-img-top property-img" src={p4img} alt="Card image cap"></img>
                <div className="card-body text-white pt-1 w-50">
                    <h2 className="card-title text-secondary">R4 999 000</h2>
                    <h5 className="card-subtitle text-grey">5 Bedroom house</h5>
                    <h5 className="card-subtitle font-weight-bold my-2">The Conifers</h5>
                    <h6 className="card-subtitle font-weight-light text-secondary my-2">81 Ridge road, Umhlanga Ridge</h6>
                    <p className="card-text">
                    Fabulous family home.

                     Upon entering this remarkable home, one's attention is immediately drawn to its spaciousness and quality finishes. This well-maintained home is secure with top class solid wood cottage pane windows and burglar guards as well as wooden sliding doors that open onto the entertainment area.  The double volume entrance hall leads into the open plan formal lounge and dining room. Both the dining room and separate family TV room lead out to the pool area and tennis court.  The fully fitted solid oak kitchen features a separate scullery . Leading off the kitchen is an additional tiled room, currently used as a hobby room. This would make an ideal bar or breakfast room. An enormous master suite is on the upper level and features a walk-in cupboard/dressing area. Featuring 5 large bedrooms there is also a full en-suite bedroom on the ground floor. An upper-level bedroom is currently used as a study. 
                    There are staff quarters/ laundry room and a double garage with direct access to the home                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default PropertyCard;