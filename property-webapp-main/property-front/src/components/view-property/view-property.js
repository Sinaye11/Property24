import React from 'react';
import Header from "../header/header"
import MyCarousel from "../carousel/carousel"

const ViewProperty = () => {
    return ( 
        <div className="">
            <Header></Header>

            <div className="p-3 bg-light text-dark">
                <div >
                    <a href="!#" className="text-underline text-muted ml-3 mr-5" > &#60;&#60; Back to results</a>
                    <button className="btn btn-sm btn-primary">Book Viewing</button>
                </div>

                <div className="card bg-light border-dark mt-2">
                    <div className="card-header bg-light w-100">
                        <div className="row px-5">
                            <div className="col-lg-4 ">
                                <h3 className="font-weight-bold text-primary">R1 650 000</h3>
                                <h3>The Connifers</h3>
                            </div>
                            <div className="col-lg-4 d-flex  justify-content-center">
                                <h3 className="font-weight-bold">6 Bedroom house</h3>
                                
                            </div>
                            <div className="col-lg-4 d-flex  justify-content-end">
                                <p className="text-muted my-auto">size: 73m&sup2;</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-8">
                                <MyCarousel></MyCarousel>
                                <div>
                                    <h4>Description</h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea hic voluptatum libero architecto nobis reiciendis distinctio at, rem dolor totam amet eveniet esse repellat omnis voluptatibus quidem! Earum porro non quibusdam eius quaerat deleniti dolorum? Molestiae vel dolorem, eaque maxime cum optio dolores iste earum magni, accusantium voluptas corrupti voluptate saepe deserunt. Qui iste perferendis ad facilis voluptas, nostrum aliquid?
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center ">
                                <div className="top border-bottom">
                                    <div className="bg-secondary py-2 border-radius">
                                        <h4 className="font-weight-bold text-white">Agency</h4>
                                    </div>
                                    <div>
                                        <h5 className="font-weight-bold my-3">Cookson</h5>
                                    </div>    
                                </div>

                                <div className="bottom my-3">
                                    <div className="bg-secondary py-2 border-radius">
                                        <h4 className="font-weight-bold text-white">Get in touch with us!</h4>
                                        <form className="px-2 text-left">
                                            <div class="form-group">
                                                <label className="ml-2" htmlFor="name" >Name</label>
                                                <input type="text" className="form-control" id="name"  placeHolder="John Doe" />
                                            </div>
                                            <div className="form-group">
                                                <label className="ml-2" htmlFor="email" >E-mail</label>
                                                <input type="text" className="form-control" id="email" placeHolder="jogn@example.com" />
                                            </div>
                                            <div className="form-group">
                                                <label className="ml-2" htmlFor="cell" >Mobile Number</label>
                                                <input type="text" className="form-control" id="cell" placeHolder="0735864496" />
                                            </div>
                                            <div className="form-group">
                                                <label className="ml-2" htmlFor="mesasge" >Message</label>
                                                <textarea type="text" className="form-control" id="message" placeHolder="Mobile Number"> </textarea>
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" className="form-control btn btn-dark" id="submit" value="Send Message" />
                                            </div>


                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default ViewProperty;