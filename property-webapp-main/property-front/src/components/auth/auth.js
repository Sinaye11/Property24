import React, {useState} from 'react';


const Auth = () => {
    const [signin, setSignIn] = useState(true);
    const [email, setEmail] = useState('');

    const togglesignin = () =>{
        setSignIn(!signin); 
    }

    return ( 
        <div className="vh-100 d-flex align-content-center">
            <div className="container bg-light text-dark text-center w-50 my-auto py-2 border-radius ">
                <h1 className="font-weight-bold text-primary" >Property<span className="text-danger">24</span></h1>
                <h2 className="font-weight-light">Welcome { (signin) ? 'Back' : 'New User' }</h2>
                <p className="text-muted">Sign{(signin) ? 'in' : 'up'} To Continue </p>

                <form className="w-50 mx-auto text-left">
                    { (!signin) &&
                        <div className="form-group">
                            <label className="ml-2" for="fullname">Full Name</label>
                            <input type="text" className="form-control" id="fullname" placeholder="John Doe"/>
                        </div> 
                    }
                    <div className="form-group">
                        <label className="ml-2" for="email">E-mail</label>
                        <input type="text" className="form-control" id="email" placeholder="john@example.com"/>
                    </div>
                    <div className="form-group">
                        <label className="ml-2" for="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="MakeItAStrong1567345@#"/>
                    </div>

                    { (!signin) &&
                        <div className="form-group">
                            <label className="ml-2" for="password-conf">Confirm Password </label>
                            <input type="password" className="form-control" id="password-conf" placeholder="MakeItAStrong1567345@#"/>
                        </div> 
                    }

                    { (signin) &&
                        <div className="forgot-pword text-center">
                            <a href="!#" className="text-muted text-underline" >Forgot Password</a>
                        </div> 
                    }

                    <div className="form-group mt-4">
                        <input type="submit" className="form-control" id="submit" value={(signin) ? 'Login' : 'Signup'}/>
                    </div>
                </form>

                <div className="switching">
                    {signin && <p>New User? <button className="text-primary btn btn-secondary text-underline hand-pointer" onClick={togglesignin}>Signup</button></p>}
                    {!signin && <p>Already have an account? <button className="text-primary btn btn-secondary text-underline hand-pointer" onClick={togglesignin}>Signin</button></p>}
                </div>
            </div>
        </div>
     );
}
 
export default Auth;