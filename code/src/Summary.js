
import React from "react"


export const Summary = ({firstName,email,city,adress,SugarFree,GlutenFree}) => {
    
    return (
        <div className="Summarytxt">
            <article >Thank you for registering {firstName}, a confirmation has been sent to {email}, your local bakery is in {city} and they will be happy to deliver to your home on {adress} place an order to try them out. Your future orders will be based on your special requests, feel free to change them any time. {SugarFree && <p>(Sugar Free)</p>} {GlutenFree && <p>(Gluten Free)</p>}
</article>
        </div>
    )}
