import React from "react";
import { useRouter } from 'next/router'

export default function Onboarding(){
    const router = useRouter();

    return <>
            <div className = "nebBack">

                <div className = "whiteSquare">

                    <div className="onboardingTitle">
                        <p>Your Account Has
                        <br />Been Created!</p>
                    </div>
                    <div className="profileCircle">

                    </div>
                    <div style ={{
                        left: 30,
                        top: 400
                        }} className="smallInfo">
                        <p>You'll receive a confirmation email
                        <br />shortly. If you don't receive one,
                        <br />check your junk or spam folder.</p>
                    </div>
                    <div>
                        <button style={{
                            position: "absolute",
                            top: 520,
                            left: 200,
                            }} className="accountConfButton" type="button">View Profile
                        </button>
                    </div>
                    <div>
                        <button style={{
                            position: "absolute",
                            top: 520,
                            left: 360
                            }} onClick={() => {
                                router.push('/');
                                }}className="accountConfButton" type="button">Home
                        </button>
                    </div>

                </div>

            </div>

            </>
}