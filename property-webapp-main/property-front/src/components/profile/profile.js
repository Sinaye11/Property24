import {useState} from "react";
import Navbar from '../navbar/navbar';
import PropertyCard from '../property-card/property-card';




const Profile = () => {
    const imagesStyle = {
        height: "200px",
    }

    const [showlistings, setShowListings] = useState(true);
    const [showCreateListing, setShowCreateListing] = useState(false);

    const handleCreateListing = () =>{
        console.log("creating listing...");
        setShowCreateListing(false);
    }
    
    return ( 
        <main>
            <Navbar></Navbar>
            <div className=" bg-primary">
                <div className="tab-container container p-3">
                    <ul className="tab-header bg-dark  text-center nav nav-tabs">
                        <li className="left w-50 nav-item">
                            {showlistings && <a href="#!" onClick={() => setShowListings(true)} className="nav-link active mb-0 border border-light border-right-0 text-light"><h2>Listings</h2></a>}
                            {!showlistings && <a href="#!" onClick={() => setShowListings(true)} className="nav-link mb-0 border border-light border-right-0 text-light"><h2>Listings</h2></a>}
                        </li>
                        <li className="right w-50">
                            {showlistings && <a href="#!" onClick={() => setShowListings(false)} className="nav-link mb-0 border border-light text-light"><h2>Profile</h2></a>}
                            {!showlistings && <a href="#!" onClick={() => setShowListings(false)} className="nav-link active mb-0 border border-light text-light"><h2>Profile</h2></a>}
                        </li>
                    </ul>
                    <div className="tab-contents bg-light text-dark">
                        {showlistings &&
                        <div className="left-tab ">
                            <div className="bg-dark text-light p-2 d-flex justify-content-between">
                                <h3 className="text-underline font-weight-bold my-auto">My Listings</h3>
                                <div className="pt-2 pr-4 ">
                                    <button onClick={() => setShowCreateListing(!showCreateListing)} className="add-property btn btn-sm btn-primary">
                                        {!showCreateListing && <h1 className="font-weight-bold mx-3">+</h1>}
                                        {showCreateListing && <h1 className="font-weight-bold mx-3">x</h1>}
                                    </button>
                                </div>
                            </div>
                            {showCreateListing &&
                            <div className="add-property-modal my-3 p-2 text-light">
                                <div className="header bg-dark p-2">
                                    <h3>Create a Listing</h3>
                                </div>
                                <div className="modal-body bg-primary">
                                    <form >
                                        <div className="property-images">
                                            <h4>Property Images</h4>
                                            <div className="border border-radius border-light p-2">
                                                <div className="images-container" style={imagesStyle}>

                                                </div>
                                                <div className="buttons text-center">
                                                    <button className="btn btn-secondary mr-4">Take a Photo</button>
                                                    <button className="btn btn-secondary ml-4">Choose a Photo</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="property-images pt-3">
                                            <h4>Property Details</h4>
                                            <div className="border border-radius border-light px-3 pt-3">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <input type="text" placeholder="Name" className="form-control mb-3"/>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input type="text" placeholder="Address" className="form-control mb-3"/>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input type="number" start="10000" step="1000" placeholder="Price (R)" className="form-control mb-3"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button onClick={() => setShowCreateListing(!showCreateListing)} className="btn btn-lg btn-danger">Cancel</button>
                                            <button onClick={handleCreateListing} className="btn btn-lg btn-success">Create</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            }
                            <div className="pb-1 px-2">
                                <PropertyCard></PropertyCard>
                                <PropertyCard></PropertyCard>
                                <PropertyCard></PropertyCard>
                                <PropertyCard></PropertyCard>
                                <PropertyCard></PropertyCard>
                                <PropertyCard></PropertyCard>
                            </div>
                        </div>
                        }
                        {!showlistings &&
                        <div className="Right-tab">
                        <   div className="bg-dark text-light p-4">
                                <h3 className="text-underline font-weight-bold">Edit Profile</h3>
                            </div>
                            <form>
                                <div className="row p-2">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="name" className="ml-2">Name</label>
                                            <input type="text" name="name" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="surname" className="ml-2">Surname</label>
                                            <input type="text" name="surname" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="email" className="ml-2">E-mail</label>
                                            <input type="email" name="email" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="phone" className="ml-2">Phone Number</label>
                                            <input type="tel" name="phone" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="password" className="ml-2">Password</label>
                                            <input type="password" name="password" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="password-confirm" className="ml-2">Confirm Password</label>
                                            <input type="password" name="password-confirm" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default Profile;