import React from 'react'
import 'component/banner.css'

export const Banner = (props) => {
  return (
    <section className="banner">
      <h3 className="bannerTitle">{props.title}</h3>
    </section>
  )
}