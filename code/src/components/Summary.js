import React from 'react';

const Summary = ({ name, cakeOption, quality, service, opinion }) => {
  return (
    <div className="container">
      <h3>Thank you for your answer, {name}</h3>
      <p>We are happy to know that {cakeOption.join(', ')} are your
      favourite cakes! We love them too 🎂
      </p>
      <p>And we totally understand your preferences in cakes.
      You want your cake to be {quality}.
      Gotcha!
      </p>
      <p>We would also want to mention that you think our {service}
      is one of our best strength. So thankful for that.
      We are always looking to improving our service for you.
      </p>
      <p>Last but not least, to phrase your opinion which is &quot;{opinion}&quot;.
      Your opinion is highly valuable for us
      and we will take this into consideration
      Just a little something to show our appreciation,
      please click on the button below to get your
      personal voucher code.
      Once again... thank you, {name}!
      </p>
      <button type="button">Grab you code here!</button>
    </div>
  );
}
export default Summary;