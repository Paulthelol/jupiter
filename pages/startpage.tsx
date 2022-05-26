import React from "react";
import { useRouter } from 'next/router'

export default function Onboarding(){
    const router = useRouter();

    return <>
            <div className = "nebBack">

                <div className = "whiteSquare">

                    <div className="onboardingTitle">
                        <p>Sign up</p>
                    </div>

                    <div className="smallInfo">
                        <p>To save clubs, events, and get
                        <br />personalized recommendations.
                        
                        <br /><br />Already have an account? 
                        <a 
                            style={{
                                color: "#4940C0",
                                fontWeight: 700
                            }} 
                            href="#"> Login</a>
                        </p>
                        
                    </div>
                    
                        <form>

                            <div className="first-name">
                                <label>
                                    First Name
                                </label>
                                <br />
                                <input className="onboardname-input" type="text"/>
                            </div>

                            <div className="last-name">
                                <label>
                                    Last Name
                                </label>
                                <br />
                                <input className="onboardname-input" type="text"/>
                            </div>

                            <div className="email-address">
                                <label>
                                    Email Address
                                </label>
                                <br />
                                <input className="onboardother-input" type="email"/>
                            </div>

                            <div className="pass-word">
                                <label>
                                    Password
                                </label>
                                <br />
                                <input className="onboardother-input" type="password"/>
                            </div>
                            
                            <div>
                                <button onClick={() => {
                                    router.push('/perinfo');
                                    }} className="continueButton" type="button">
                                    Continue
                                </button>
                            </div>

                            <div>
                                <button className="signGoogleButton" type="button">
                                    Sign up with Google
                                </button>
                            </div>
                        </form>

                </div>

            </div>

            </>
}