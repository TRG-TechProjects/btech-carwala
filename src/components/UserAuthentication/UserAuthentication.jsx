import React from "react";

const AuthModal = ({ authMode, setAuthMode }) => {
    if (!authMode) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">
                    {authMode === "login" ? "Login" : "Signup"}
                </h2>

                {authMode === "signup" && (
                    <>
                        <input type="text" placeholder="Full Name" className="w-full border p-2 mb-3 rounded dark:bg-black" />
                        <input type="tel" placeholder="Phone Number" className="w-full border p-2 mb-3 rounded dark:bg-black" />
                    </>
                )}

                <input type="email" placeholder="Email" className="w-full border p-2 mb-3 rounded dark:bg-black" />
                <input type="password" placeholder="Password" className="w-full border p-2 mb-3 rounded dark:bg-black" />

                <button className="bg-primary text-white dark:text-black px-4 py-2 w-full rounded">
                    {authMode === "login" ? "Login" : "Sign Up"}
                </button>

                <p className="mt-3 text-center">
                    {authMode === "login" ? "Don't have an account? " : "Already have an account? "}
                    <span
                        className="text-blue-500 cursor-pointer"
                        onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}
                    >
                        {authMode === "login" ? "Sign up" : "Login"}
                    </span>
                </p>

                <button onClick={() => setAuthMode(null)} className="mt-3 text-red-500 w-full">
                    Close
                </button>
            </div>
        </div>
    );
};

export default AuthModal;
