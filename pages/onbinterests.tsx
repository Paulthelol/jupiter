import React from "react";
import { useRouter } from 'next/router'
import { useState } from 'react';


export default function Onboarding(){
const [showAcDialog, setShowAcDialog] = useState(false);
const [showArtDialog, setShowArtDialog] = useState(false);
const [showSpDialog, setShowSpDialog] = useState(false);
const [showSoDialog, setShowSoDialog] = useState(false);
const [showCuDialog, setShowCuDialog] = useState(false);
const [showVoDialog, setShowVoDialog] = useState(false);

const [showHeDialog, setShowHeDialog] = useState(false);
const [showArMDialog, setShowArMDialog] = useState(false);
const [showEnDialog, setShowEnDialog] = useState(false);
const [showBuDialog, setShowBuDialog] = useState(false);
const [showScDialog, setShowScDialog] = useState(false);
const [showPsDialog, setShowPsDialog] = useState(false);

const acDialogHandler = () => {
    setShowAcDialog(true);
    setShowArtDialog(false);
    setShowSpDialog(false);
    setShowSoDialog(false);
    setShowCuDialog(false);
    setShowVoDialog(false);

    setShowHeDialog(false);
    setShowArMDialog(false);
    setShowEnDialog(false);
    setShowBuDialog(false);
    setShowScDialog(false);
    setShowPsDialog(false);
};
const artDialogHandler = () => {
    setShowAcDialog(false);
    setShowArtDialog(true);
    setShowSpDialog(false);
    setShowSoDialog(false);
    setShowCuDialog(false);
    setShowVoDialog(false);

    setShowHeDialog(false);
    setShowArMDialog(false);
    setShowEnDialog(false);
    setShowBuDialog(false);
    setShowScDialog(false);
    setShowPsDialog(false);
};
const spDialogHandler = () => {
    setShowAcDialog(false);
    setShowArtDialog(false);
    setShowSpDialog(true);
    setShowSoDialog(false);
    setShowCuDialog(false);
    setShowVoDialog(false);

    setShowHeDialog(false);
    setShowArMDialog(false);
    setShowEnDialog(false);
    setShowBuDialog(false);
    setShowScDialog(false);
    setShowPsDialog(false);
};
const soDialogHandler = () => {
    setShowAcDialog(false);
    setShowArtDialog(false);
    setShowSpDialog(false);
    setShowSoDialog(true);
    setShowCuDialog(false);
    setShowVoDialog(false);

    setShowHeDialog(false);
    setShowArMDialog(false);
    setShowEnDialog(false);
    setShowBuDialog(false);
    setShowScDialog(false);
    setShowPsDialog(false);
};
const cuDialogHandler = () => {
    setShowAcDialog(false);
    setShowArtDialog(false);
    setShowSpDialog(false);
    setShowSoDialog(false);
    setShowCuDialog(true);
    setShowVoDialog(false);

    setShowHeDialog(false);
    setShowArMDialog(false);
    setShowEnDialog(false);
    setShowBuDialog(false);
    setShowScDialog(false);
    setShowPsDialog(false);
};
const voDialogHandler = () => {
    setShowAcDialog(false);
    setShowArtDialog(false);
    setShowSpDialog(false);
    setShowSoDialog(false);
    setShowCuDialog(false);
    setShowVoDialog(true);

    setShowHeDialog(false);
    setShowArMDialog(false);
    setShowEnDialog(false);
    setShowBuDialog(false);
    setShowScDialog(false);
    setShowPsDialog(false);
};

const acDialogClose = () => {
    setShowAcDialog(false);
}
const artDialogClose = () => {
    setShowArtDialog(false);
}
const spDialogClose = () => {
    setShowSpDialog(false);
}
const soDialogClose = () => {
    setShowSoDialog(false);
}
const cuDialogClose = () => {
    setShowCuDialog(false);
}
const voDialogClose = () => {
    setShowVoDialog(false);
}

const heDialogHandler = () => {
    setShowAcDialog(false);
    setShowArtDialog(false);
    setShowSpDialog(false);
    setShowSoDialog(false);
    setShowCuDialog(false);
    setShowVoDialog(false);

    setShowHeDialog(true);
    setShowArMDialog(false);
    setShowEnDialog(false);
    setShowBuDialog(false);
    setShowScDialog(false);
    setShowPsDialog(false);
};
const armDialogHandler = () => {
    setShowAcDialog(false);
    setShowArtDialog(false);
    setShowSpDialog(false);
    setShowSoDialog(false);
    setShowCuDialog(false);
    setShowVoDialog(false);

    setShowHeDialog(false);
    setShowArMDialog(true);
    setShowEnDialog(false);
    setShowBuDialog(false);
    setShowScDialog(false);
    setShowPsDialog(false);
};
const enDialogHandler = () => {
    setShowAcDialog(false);
    setShowArtDialog(false);
    setShowSpDialog(false);
    setShowSoDialog(false);
    setShowCuDialog(false);
    setShowVoDialog(false);

    setShowHeDialog(false);
    setShowArMDialog(false);
    setShowEnDialog(true);
    setShowBuDialog(false);
    setShowScDialog(false);
    setShowPsDialog(false);
};
const buDialogHandler = () => {
    setShowAcDialog(false);
    setShowArtDialog(false);
    setShowSpDialog(false);
    setShowSoDialog(false);
    setShowCuDialog(false);
    setShowVoDialog(false);

    setShowHeDialog(false);
    setShowArMDialog(false);
    setShowEnDialog(false);
    setShowBuDialog(true);
    setShowScDialog(false);
    setShowPsDialog(false);
};
const scDialogHandler = () => {
    setShowAcDialog(false);
    setShowArtDialog(false);
    setShowSpDialog(false);
    setShowSoDialog(false);
    setShowCuDialog(false);
    setShowVoDialog(false);

    setShowHeDialog(false);
    setShowArMDialog(false);
    setShowEnDialog(false);
    setShowBuDialog(false);
    setShowScDialog(true);
    setShowPsDialog(false);
};
const psDialogHandler = () => {
    setShowAcDialog(false);
    setShowArtDialog(false);
    setShowSpDialog(false);
    setShowSoDialog(false);
    setShowCuDialog(false);
    setShowVoDialog(false);

    setShowHeDialog(false);
    setShowArMDialog(false);
    setShowEnDialog(false);
    setShowBuDialog(false);
    setShowScDialog(false);
    setShowPsDialog(true);
};

const heDialogClose = () => {
    setShowHeDialog(false);
}
const armDialogClose = () => {
    setShowArMDialog(false);
}
const enDialogClose = () => {
    setShowEnDialog(false);
}
const buDialogClose = () => {
    setShowBuDialog(false);
}
const scDialogClose = () => {
    setShowScDialog(false);
}
const psDialogClose = () => {
    setShowPsDialog(false);
}

const router = useRouter();

    return <>
            <div className = "nebBack">

                <div className = "whiteSquare">

                    <div className="onboardingTitle">
                        <p>Interests</p>
                    </div>
                    <div className="smallInfo">
                        <p>With selected interests, you can get
                        <br />personalized club and event 
                        <br />recommendations.
                        </p>
                    </div>
                    <div className="onboardingSub" style={{
                            position: "relative",
                            left: 135,
                            top: 155
                        }}>
                            <p>Personal</p>
                    </div>
                    <div>
                        <button onClick={acDialogHandler} className={showAcDialog ? "perInterestsButtonSelected" : "perInterestsButton"} type="button">
                            ACADEMICS
                        </button>
                        <button onClick={artDialogHandler} className={showArtDialog ? "perInterestsButtonSelected" : "perInterestsButton"} type="button">
                            ART & MUSIC
                        </button>
                    </div>
                        {
                            showAcDialog ? 
                            <div className="dialogBoxArrowLeft">
                                <button onClick={acDialogClose} className="collapseButton" type="button">COLLAPSE</button>
                            </div> : null
                        }
                        {
                            showArtDialog ? 
                            <div className="dialogBoxArrowRight">
                                <button onClick={artDialogClose} className="collapseButton" type="button">COLLAPSE</button>
                            </div> : null
                        }
                    
                    <div>
                        <button onClick={spDialogHandler} className={showSpDialog ? "perInterestsButtonSelected" : "perInterestsButton"} type="button">
                            SPORTS
                        </button>
                        <button onClick={soDialogHandler} className={showSoDialog ? "perInterestsButtonSelected" : "perInterestsButton"} type="button">
                            SOCIAL
                        </button>
                    </div>
                        {
                            showSpDialog ? 
                            <div className="dialogBoxArrowLeft">
                                <button onClick={spDialogClose} className="collapseButton" type="button">COLLAPSE</button>
                            </div> : null
                        }
                        {
                            showSoDialog ? 
                            <div className="dialogBoxArrowRight">
                                <button onClick={soDialogClose} className="collapseButton" type="button">COLLAPSE</button>
                            </div> : null
                        }

                    <div>
                        <button onClick={cuDialogHandler} className={showCuDialog ? "perInterestsButtonSelected" : "perInterestsButton"} type="button">
                            CULTURAL
                        </button>
                        <button onClick={voDialogHandler}className={showVoDialog ? "perInterestsButtonSelected" : "perInterestsButton"} type="button">
                            VOLUNTEERING
                        </button>
                    </div>
                        {
                            showCuDialog ? 
                            <div className="dialogBoxArrowLeft">
                                <button onClick={cuDialogClose} className="collapseButton" type="button">COLLAPSE</button>
                            </div> : null
                        }
                        {
                            showVoDialog ? 
                            <div className="dialogBoxArrowRight">
                                <button onClick={voDialogClose} className="collapseButton" type="button">COLLAPSE</button>
                            </div> : null
                        }



                    <div className="onboardingSub" style={{
                            position: "relative",
                            left: 135,
                            top: 155,
                            marginTop: 20
                        }}>
                            <p>Career</p>
                    </div>
                    <div>
                        <button onClick={heDialogHandler} className={showHeDialog ? "carInterestsButtonSelected" : "carInterestsButton"} type="button">
                            HEALTHCARE
                        </button>
                        <button onClick={armDialogHandler} className={showArMDialog ? "carInterestsButtonSelected" : "carInterestsButton"} type="button">
                            ART & MUSIC
                        </button>
                    </div>
                        {
                            showHeDialog ? 
                            <div className="dialogBoxArrowLeft">
                                <button onClick={heDialogClose} className="collapseButton" type="button">COLLAPSE</button>
                            </div> : null
                        }
                        {
                            showArMDialog ? 
                            <div className="dialogBoxArrowRight">
                                <button onClick={armDialogClose} className="collapseButton" type="button">COLLAPSE</button>
                            </div> : null
                        }
                    
                    <div>
                        <button onClick={enDialogHandler} className={showEnDialog ? "carInterestsButtonSelected" : "carInterestsButton"} type="button">
                            ENGINEERING
                        </button>
                        <button onClick={buDialogHandler} className={showBuDialog ? "carInterestsButtonSelected" : "carInterestsButton"} type="button">
                            BUSINESS
                        </button>
                    </div>
                        {
                            showEnDialog ? 
                            <div className="dialogBoxArrowLeft">
                                <button onClick={enDialogClose} className="collapseButton" type="button">COLLAPSE</button>
                            </div> : null
                        }
                        {
                            showBuDialog ? 
                            <div className="dialogBoxArrowRight">
                                <button onClick={buDialogClose} className="collapseButton" type="button">COLLAPSE</button>
                            </div> : null
                        }

                    <div>
                        <button onClick={scDialogHandler} className={showScDialog ? "carInterestsButtonSelected" : "carInterestsButton"} type="button">
                            SCIENCES
                        </button>
                        <button onClick={psDialogHandler}className={showPsDialog ? "carInterestsButtonSelected" : "carInterestsButton"} type="button">
                            PUBLIC SERVICE
                        </button>
                    </div>
                        {
                            showScDialog ? 
                            <div className="dialogBoxArrowLeft">
                                <button onClick={scDialogClose} className="collapseButton" type="button">COLLAPSE</button>
                            </div> : null
                        }
                        {
                            showPsDialog ? 
                            <div className="dialogBoxArrowRight">
                                <button onClick={psDialogClose} className="collapseButton" type="button">COLLAPSE</button>
                            </div> : null
                        }
                    
                    <div>
                        <button style={{
                                    position: "absolute",
                                    left: 347,
                                    top: 570
                                }} onClick={() => {
                                    router.push('/onbrecom');
                                    }} className="continuePersonalButton" type="button">
                            CONTINUE TO RECOMMENDATIONS
                        </button>
                    </div>
                    <div>
                        <button style={{
                                position: "absolute",
                                left: 242,
                                top: 570
                            }} className="setLaterButton" type="button">
                            SET UP LATER
                        </button>
                    </div>
                </div>

            </div>

            </>
}