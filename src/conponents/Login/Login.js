import React from 'react';
import useFirebase from '../hooks/useFirebase';
import img from "../imgs/5645031.jpg"

const Login = () => {
    const { user, error, isRegis, loginEmailPassword, handleCheckBox, googleSignIn, gitSignIn, handleCreatUser, handleEmail, handlePassword } = useFirebase();
    console.log(user);
    console.log(error.code);
    return (
        <div style={{ backgroundImage: `url(${img})`, backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="flex justify-center items-center p-44" >

            <div className="p-5 m-50 flex flex-row items-center border-2 bg-black bg-opacity-50 shadow-2xl rounded">
                <div className="border-r-2 flex flex-col items-center p-2">
                    <h1 className="font-bold text-white">{ isRegis ?  "SIGN UP" : "SIGN IN"}</h1>

                    <form onSubmit={ isRegis ? handleCreatUser : loginEmailPassword } className="flex flex-col items-center my-1">
                        { isRegis && <input type="text" name="name" id="name" placeholder="Enter Your Name" required className="bg-transparent border-b-2 text-center text-white" /> } <br />
                        <input onBlur={handleEmail} type="email" name="email" id="email" placeholder="Enter Your Email" required className="bg-transparent border-b-2 text-center text-white" /> <br />
                        <input onBlur={handlePassword} type="password" name="password" id="password" placeholder="Enter Password" required className="bg-transparent border-b-2  text-center text-white" /> <br />
                        <input type="submit" value={ isRegis ?  "Sign Up" : "Sign In"} className="border-2 m-2 hover:shadow-2xl hover:bg-purple-900 hover:text-white transition duration-1000 ease-in-out text-center cursor-pointer" />
                    </form>
                    <p className="text-white"><label htmlFor="register">Sign Up  </label>
                     <input onChange={handleCheckBox} type="checkbox" name="register" id="register" /></p>
                </div>
                <div>
                    <h1 onClick={googleSignIn} className="px-1.5 text-white border-2 m-2 hover:shadow-2xl hover:bg-purple-900 hover:text-white transition duration-1000 ease-in-out text-center cursor-pointer">Google Sign In</h1>
                    <h1 className="px-1.5 text-white border-2 m-2 hover:shadow-2xl hover:bg-purple-900 hover:text-white transition duration-1000 ease-in-out text-center cursor-pointer">Yahoo Sign In</h1>
                    <h1 className="px-1.5 text-white border-2 m-2 hover:shadow-2xl hover:bg-purple-900 hover:text-white transition duration-1000 ease-in-out text-center cursor-pointer">Facebook Sign In</h1>
                    <h1 onClick={gitSignIn} className="px-1.5 text-white border-2 m-2 hover:shadow-2xl hover:bg-purple-900 hover:text-white transition duration-1000 ease-in-out text-center cursor-pointer">Github Sign In</h1>
                    <h1 className="px-1.5 text-white border-2 m-2 hover:shadow-2xl hover:bg-purple-900 hover:text-white transition duration-1000 ease-in-out text-center cursor-pointer">Twitter Sign In</h1>
                </div>
            </div>
        </div>
    );
};

export default Login;