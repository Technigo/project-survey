import React from 'react'
import 'component/banner.css'
import 'component/fonts.css'

export const Banner = (props) => {
  return (
    <section className="banner">
      <h3 className="bannerTitle">{props.title}</h3>
    </section>
  )
}