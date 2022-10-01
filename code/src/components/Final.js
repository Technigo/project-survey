import React from "react";

const Final =() => {

    return (
        <>
        <div className="final-container">
                <h1> Thank you! </h1>
                <h2>We will get in touch with you as soon as we have found a dog that matches your preferences.</h2>
                <p>In the meantime, please take a look at these sites where you also can find your new best friend:</p>
                <div className="links">
                    <ul>
                        <li><a href="https://hundstallet.se/" target='blank'>Hundstallet</a></li>
                        <li><a href="https://www.rspca.org.uk/findapet" target='blank'>RSPCA</a></li>
                        <li><a href="https://hundarutanhem.se/" target='blank'>HundarUtanHem</a></li>
                    </ul>
                </div> 
                <p>More of a cat person? Then check out these sites! </p> 
                <div className="links">
                    <ul>
                        <li><a href="https://kattstallet.se/">Kattstallet</a></li>
                        <li><a href="https://www.katthemmet.nu/">Stockholms Katthem</a></li>
                    </ul>
                </div>

                <div className="quote">
                    <p>“Histories are more full of examples of the fidelity of dogs than of friends.” <span className="small-p"> – Alexander Pope </span></p>
                </div>

                <div className="final-image">
                    <img src='/images/dog-glasses.png' alt='funny dog'/>
                </div>

            </div>

        </>
    )
}

export default Final