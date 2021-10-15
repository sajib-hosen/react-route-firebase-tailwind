import React from 'react';
import useFirebase from '../hooks/useFirebase';
import img from "../imgs/5645031.jpg"

const Login = () => {
    const { user, error, googleSignIn, gitSignIn, creatUser } = useFirebase();
    console.log(user);
    console.log(error);
    return (
        <div style={{ backgroundImage: `url(${img})`, backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="flex justify-center items-center p-44" >

            <div className="p-5 m-50 flex flex-row items-center border-2 bg-black bg-opacity-50 shadow-2xl rounded">
                <div className="border-r-2 flex flex-col items-center p-2">
                    <h1 className="font-bold text-white">PLEASE LOGIN</h1>
                    <br />
                    <form onSubmit={creatUser} method="post" className="flex flex-col items-center">
                        <input type="email" name="email" id="email" placeholder="Enter Your Email" required className="bg-transparent border-b-2 text-center" /> <br />
                        <input type="password" name="password" id="password" placeholder="Enter Password" required className="bg-transparent border-b-2  text-center" /> <br />
                        <input type="submit" value="LOGIN" className="border-2 m-2 hover:shadow-2xl hover:bg-purple-900 hover:text-white transition duration-1000 ease-in-out text-center cursor-pointer" />
                    </form>
                    <p className="text-white"><label htmlFor="register">Register  </label>
                     <input type="checkbox" name="register" id="register" /></p>
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