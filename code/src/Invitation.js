import React from "react"

export const Invitation = ({date, time, place}) => {
  return (
    <section className="practical-info">
      <h2>Födelsedag + Nyår = Fest</h2>
        <img src="../Ballons.jpeg" alt="Ballons" className="ballons"></img>
        <p>Det är inte så ofta vi har riktiga fester längre, därför känns det dumt att inte fira när tillfälle ges.
          Nu händer det, Joakim fyller 40 år och vi är lediga på nyår. Dessutom har vi barnvakt till ungarna och 
          en stuga med sängplatser, bastu och nybyggt orangeri att fylla.</p>  
          <ul>
            <li>31 oktober</li>
            <li>Kl. 15.00</li>
            <li>Lillholmsjö</li>
          </ul>
    </section>
  )
}
