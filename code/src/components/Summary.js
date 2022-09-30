import React from 'react';

const Summary = ({
  name, cakeOption, cakeQuality, service, prices, opinion, isVoucherVisible,
  handleVoucherPress
}) => {
  return (
    <div className="container">
      <h3>Thank you for your answer, <span className="answers">{name}</span>!</h3>
      <p>We are happy to know that <span className="answers">{cakeOption.join(', ')} </span>are your
      favourite cakes! We love them too 🎂
      </p>
      <p>And we totally understand your preferences in cakes.
      You want your cake to be <span className="answers">{cakeQuality}</span>.
      Gotcha!😎
      </p>
      <p>We would also want to mention how thankful we are to know that you think our <span className="answers">{service}</span>
      is one of our best strength.
      We are always looking to improving our service for you 💗
      </p>
      <p>Regarding price range, you think the price of our cakes is <span className="answers">{prices}</span>.
      Whichever your answer is,
      we just want to let you know that
      we are working on giving you the best deals.
      </p>
      <p>Last but not least, to phrase your opinion which is <span className="answers">&quot;{opinion}&quot;</span>.
      Your opinion is highly valuable for us
      and we will take this into consideration.
      </p>
      <p>Just a little something to show our appreciation,
      please click on the button below to get
      personal voucher code for you, <span className="answers">{name}</span>!🍰
      </p>
      <button type="button" onClick={handleVoucherPress}>Grab you code here!</button>{isVoucherVisible && <h3>JUSTKIDDING2502</h3>}
    </div>
  );
}
export default Summary;
