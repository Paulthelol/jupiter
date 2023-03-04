import React from "react";
import Head from 'next/head';
import { useRouter } from 'next/router'

export default function OBPersonalInfo(){
    const router = useRouter();
    return <>
    <Head>
        <title>Sign Up - Jupiter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <div className = "nebBack">

                <div className = "whiteSquare">

                    <div className="onboardingTitle">
                        <p>Personal Information</p>
                    </div>

                    <div className="onboardingSub" style={{
                            position: "absolute",
                            left: 120,
                            top: 90
                        }}>
                            <p>Choose Your Role</p>
                    </div>
                    <div style={{  position: "absolute",
                                    left: 125,
                                    top: 110}} 
                    className="perInfoRadio">
                        <form>
                            <input className="buttonStyle" type="radio" name="role"/>
                            <label>Student</label>
                            <br />
                            <input className="buttonStyle" type="radio" name="role"/>
                            <label>Student organizer</label>
                            <br />
                            <input className="buttonStyle" type="radio" name="role"/>
                            <label>Administrator</label>
                        </form>
                    </div>
                    <div className="onboardingSub" style={{
                        position: "absolute",
                        left: 120,
                        top: 230
                        }}>
                            <p>What year are you?</p>
                    </div>
                    <div>
                        <form>
                            <select style={{    
                                position: "absolute",
                                left: 120,
                                top: 250}}
                            className="perInfoDropList">            
                                <option selected disabled hidden>Select...</option>                
                                <option style={{color:"black"}}>Freshman</option>
                                <option style={{color:"black"}}>Sophomore</option>
                                <option style={{color:"black"}}>Junior</option>
                                <option style={{color:"black"}}>Senior</option>
                            </select>
                        </form>
                    </div>
                    <div className="onboardingSub" style={{
                        position: "absolute",
                        left: 120,
                        top: 320
                        }}>
                            <p>Are you a transfer student?</p>
                    </div>
                    <div style={{  position: "absolute",
                                    left: 125,
                                    top: 340}} 
                    className="perInfoRadio">
                        <form>
                            <input className="buttonStyle" type="radio" name="transfer"/>
                            <label>Yes</label>
                            <br />
                            <input className="buttonStyle" type="radio" name="transfer"/>
                            <label>No</label>
                        </form>
                    </div>
                    <div className="onboardingSub" style={{
                        position: "absolute",
                        left: 120,
                        top: 430
                        }}>
                            <p>What is your major?</p>
                    </div>
                    <div>
                        <form>
                            <select style={{    
                                position: "absolute",
                                left: 120,
                                top: 450}}
                            className="perInfoDropList">            
                                <option selected disabled hidden>Select...</option>                
                                <option style={{color:"black"}}>ECS</option>
                                <option style={{color:"black"}}>JSOM</option>
                                <option style={{color:"black"}}>Sciences</option>
                                <option style={{color:"black"}}>Humanities</option>
                            </select>
                        </form>
                    </div>
                    <div>
                        <button style={{
                                    position: "absolute", 
                                    left: 195, 
                                    top: 515
                                }} onClick={() => {
                                        router.push('./onbinterests');
                                    }} className="onboardingContinueButton" type="button">
                            CONTINUE TO PERSONAL INTERESTS
                        </button>
                    </div>
                    <div>
                        <button style={{
                            position: "absolute",
                            left: 290,
                            top: 560
                        }} className="setLaterButton" type="button">
                            SET UP LATER
                        </button>
                    </div>
                </div>

            </div>

            </>
}