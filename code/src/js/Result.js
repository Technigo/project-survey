import React from 'react'

import '../css/result.css'

export const Result = ({ legal, drink, alcohol }) => {

  return (
    <div className="result">

      {legal ? (
        <>
          <figure class="card">

            {drink === "Aperol Spritz" ? (
              <img src="https://images.unsplash.com/photo-1585386116149-22ad0453f631?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt={drink}></img>
            ) : drink === "Bloody Mary" ? (
              <img src="https://images.unsplash.com/photo-1541546339599-ecdbfcf77378?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt={drink}></img>
            ) : drink === "Irish Coffee" ? (
              <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt={drink}></img>
            ) : drink === "Surprise" ? (
              <img src="https://images.unsplash.com/photo-1563894417364-b8cd2940baa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt={drink}></img>
            ) : (
                      null
                    )}

            <figcaption><span>{alcohol}</span><br></br> {drink}</figcaption>
          </figure>

        </>
      ) : (
          <figure class="card">
            <img src="https://images.unsplash.com/photo-1564644411757-a723deba07a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Water"></img>
            <figcaption><span>Glass of</span><br></br> Water</figcaption>
          </figure>
        )
      }
    </div >
  )
}