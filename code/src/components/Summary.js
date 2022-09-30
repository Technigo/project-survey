import React from 'react';

const Summary = ({
  name, cakeOption, quality, service, prices, opinion, isVoucherVisible,
  handleVoucherPress
}) => {
  return (
    <div className="container">
      <h3>Thank you for your answer, {name}!</h3>
      <p>We are happy to know that {cakeOption.join(', ')} are your
      favourite cakes! We love them too 🎂
      </p>
      <p>And we totally understand your preferences in cakes.
      You want your cake to be {quality}.
      Gotcha!😎
      </p>
      <p>We would also want to mention how thankful we are to know that you think our {service}
      is one of our best strength.
      We are always looking to improving our service for you 💗
      </p>
      <p>Regarding price range, you think the price of our cakes is {prices}.
      Whichever your answer is,
      we just want to let you know that
      we are working on it.
      </p>
      <p>Last but not least, to phrase your opinion which is &quot;{opinion}&quot;.
      Your opinion is highly valuable for us
      and we will take this into consideration.
      </p>
      <p>Just a little something to show our appreciation,
      please click on the button below to get
      personal voucher code for you, {name}!🍰
      </p>
      <button type="button" onClick={handleVoucherPress}>Grab you code here!</button>{isVoucherVisible && <h3>JUSTKIDDING2502</h3>}
    </div>
  );
}
export default Summary;
