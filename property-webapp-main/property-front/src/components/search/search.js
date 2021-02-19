import React from 'react';

const SearchArea = () => {
    return ( 
        <div className="px-3 py-2 bg-primary">
            <h1>Find your dream home</h1>
            <form className="d-flex flex-column w-50">
                <div class="input-group">
                 <input className="form-control-lg w-75" type="text"/> 
                    <div className="input-group-append">
                        <button className="btn btn-lg btn-danger px-5" type="button">Search</button>
                    </div>
                </div>

                <p className="mb-1 mt-2">Filter by:</p>
                <div className="w-50 filters btn-group mb-3">
                    <button className="btn btn-dark px-4">Area</button>
                    <button className="btn btn-dark px-4">Agency</button>
                    <button className="btn btn-dark px-4">Address</button>
                </div>
            </form>
        </div>
     );
}
 
export default SearchArea;