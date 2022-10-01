import { excitementFunction } from './utils';

const Summary = ({ name, surname, gift, excitement, favActivity }) => {
  const excitementLevel = excitementFunction(excitement);
  const formattedGift = gift.toLowerCase();

  return (
    <div className="summary-container">
      <p>
        Nice one <span className="summary-prop"> {name}</span>, we've got all of
        your details and will contact you on 10th December to let you know who
        you're buying for and all their answers to the questions too.
      </p>
      <p>
        Summary of choices for{' '}
        <span className="summary-prop">
          {name} {surname}
        </span>
        :
      </p>
      <p>
        - I would like a gift that is{' '}
        <span className="summary-prop">{formattedGift}</span>
      </p>
      <p>
        - My favorite activity on a friday night is{' '}
        <span className="summary-prop"> {favActivity}</span>
      </p>
      <p>
        - My Christmas excitement level is that of{' '}
        <span className="summary-prop">"{excitementLevel}"</span>
      </p>
    </div>
  );
};

export default Summary;
