import React from "react";
import { useRouter } from 'next/router'

export default function Onboarding(){
    const router = useRouter();

    return <>
            <div className = "nebBack">

                <div className = "whiteSquare">

                    <div className="onboardingTitle">
                        <p>Recommendations</p>
                    </div>
                    <div className="smallInfo">
                        <p> Here are some recommendations based on your
                            <br /> selections. You can modify these now or later in
                            <br />your profile.
                        </p>
                    </div>
                    <div className="onboardingSub" style={{
                            position: "absolute",
                            left: 100,
                            top: 155
                        }}>
                            <p>Clubs</p>
                    </div>
                    <div style={{
                            position: "absolute",
                            left: 100,
                            top: 170,
                            width: 200,
                            height: 70
                        }} className="clubRecBox">
                        <div style={{  
                            top: 7,
                            left: 10,
                            width: 50,
                            height: 50
                            }} className="graySq">

                        </div>
                        <div style={{  
                                top: -14,
                                left: 183
                            }} className="dot">
                            <p style={{
                                position: "absolute",
                                left: 2,
                                top: -12
                            }}>+</p>
                        </div>
                        <p style={{
                            position: "absolute",
                            top: 20,
                            left: 85
                        }}>Club Name</p>
                    </div>
                    <div style={{
                          position: "absolute",
                          left: 325,
                          top: 170,
                          width: 200,
                          height: 70
                        }} className="clubRecBox">
                        <div style={{  
                            top: 7,
                            left: 10,
                            width: 50,
                            height: 50
                            }} className="graySq">

                        </div>
                        <div style={{  
                                top: -14,
                                left: 183
                            }} className="dot">
                            <p style={{
                                position: "absolute",
                                left: 2,
                                top: -12
                            }}>+</p>
                        </div>
                        <p style={{
                            position: "absolute",
                            top: 20,
                            left: 85
                        }}>Club Name</p>
                    </div>
                    <div className="onboardingSub" style={{
                            position: "absolute",
                            left: 100,
                            top: 260
                        }}>
                            <p>Events</p>
                    </div>
                    <div style={{
                            position: "absolute",
                            left: 100,
                            top: 275,
                            width: 425,
                            height: 120
                        }} className="clubRecBox">
                        <div style={{  
                            top: 10,
                            left: 10,
                            width: 90,
                            height: 90
                            }} className="graySq">

                        </div>
                        <div style={{  
                                top: -14,
                                left: 410
                            }} className="dot">
                            <p style={{
                                position: "absolute",
                                left: 2,
                                top: -12
                            }}>+</p>
                        </div>
                        <p style={{
                            position: "absolute",
                            top: 10,
                            left: 130
                        }}>Event Title</p>
                        <p style={{
                            position: "absolute",
                            top: 30,
                            left: 130
                        }} className="eventDetails">
                            <b>Date: </b>XX/XX
                            <br /><b>Time: </b>00:00 PM
                            <br /><b>Location: </b>SU
                            <br />[Description]</p>
                    </div>
                    <div style={{
                            position: "absolute",
                            left: 100,
                            top: 415,
                            width: 425,
                            height: 120
                        }} className="clubRecBox">
                        <div style={{  
                            top: 10,
                            left: 10,
                            width: 90,
                            height: 90
                            }} className="graySq">

                        </div>
                        <div style={{  
                                top: -14,
                                left: 410
                            }} className="dot">
                            <p style={{
                                position: "absolute",
                                left: 2,
                                top: -12
                            }}>+</p>
                        </div>
                        <p style={{
                            position: "absolute",
                            top: 10,
                            left: 130
                        }}>Event Title</p>
                        <p style={{
                            position: "absolute",
                            top: 30,
                            left: 130
                        }} className="eventDetails">
                            <b>Date: </b>XX/XX
                            <br /><b>Time: </b>00:00 PM
                            <br /><b>Location: </b>SU
                            <br />[Description]</p>
                    </div>
                    <div>
                        <button style={{
                            position: "absolute", 
                            top: 560, 
                            left: 305
                            }} onClick={() => {
                                router.push('./accountconf');
                                }}className="continuePersonalButton" type="button">
                            CREATE ACCOUNT
                        </button>
                    </div>
                </div>

            </div>

            </>
}