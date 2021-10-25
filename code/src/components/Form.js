import React, { useState } from 'react';
import Start from './Start';
import FirstQuestionRating from './FirstQuestionRating';
import SecondQuestionAppUse from './SecondQuestionAppUse';
import ThirdQuestionEase from './ThirdQuestionEase';
import FourthQuestionLike from './FourthQuestionLike';
import FifthQuestionMore from './FifthQuestionMore';
import SixthQuestionPerformance from './SixthQuestionPerformance';
import SeventhQuestionReason from './SeventhQuestionReason';
import SeventhQuestionRecommend from './SeventhQuestionRecommend';
import Summary from './Summary';
import Button from './Button';

//Style //
import './form.css';

const Form = () => {
  const [step, setStep] = useState(0);
  const [usage, setUsage] = useState('Type or select an option...');
  const [easeRange, setEaseRange] = useState(0);
  const [performanceRange, setPerformanceRange] = useState(0);
  const [rating, setRating] = useState(1);
  const [whatsMissing, setWhatsMissing] = useState('');
  const [myReason, setMyReason] = useState('');
  const [recommend, setRecommendation] = useState('');

  const whatYouLike = ['Features', 'Ease of Use', 'Design', 'Content'];
  const [checkedState, setCheckedState] = useState(
    new Array(whatYouLike.length).fill(false)
  );
  const [selectedOnes, updateSelectedOnes] = useState([]);

  const onRecommendationChange = (event) => {
    setRecommendation(event.target.value);
  };

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);

    const youLiked = updatedCheckedState.map((item, index) =>
      item === true ? whatYouLike[index] : item
    );

    updateSelectedOnes(youLiked);
  };

  const onWhatsMissingChange = (event) => {
    setWhatsMissing(event.target.value);
  };
  const onMyReasonChange = (event) => {
    setMyReason(event.target.value);
  };

  const onSubmission = () => {};
  const onStepChange = (event) => {
    event.target.innerText === 'Back' && setStep(step - 1);
    (event.target.innerText === 'OK' || event.target.innerText === 'Start') &&
      setStep(step + 1);
  };

  const onSetRating = (index) => {
    setRating(index);
  };

  const onUsageChange = (event) => {
    setUsage(event);
  };

  const onEaseChange = (event) => {
   
    setEaseRange(event.target.value);
  };
  const onPerformanceChange = (event) => {
   
    setPerformanceRange(event.target.value);
  };
  return (
    <div className="main-form">
      <form>
        {step === 0 && <Start onStepChange={onStepChange} />}
        {step === 1 && (
          <FirstQuestionRating rating={rating} onSetRating={onSetRating} />
        )}
        {step === 2 && (
          <SecondQuestionAppUse usage={usage} onUsageChange={onUsageChange} />
        )}
        {step === 3 && (
          <ThirdQuestionEase
            rangeValue={easeRange}
            onRangeChange={onEaseChange}
          />
        )}
        {step === 4 && (
          <FourthQuestionLike
            whatYouLike={whatYouLike}
            checkedState={checkedState}
            handleOnChange={handleOnChange}
          />
        )}
        {step === 5 && (
          <FifthQuestionMore
            whatsMissing={whatsMissing}
            onWhatsMissingChange={onWhatsMissingChange}
          />
        )}
        {step === 6 && (
          <SixthQuestionPerformance
            rangeValue={performanceRange}
            onRangeChange={onPerformanceChange}
          />
        )}
        {step === 7 && performanceRange <= 3 && (
          <SeventhQuestionReason
            myReason={myReason}
            performanceRange={performanceRange}
            onMyReasonChange={onMyReasonChange}
          />
        )}
        {step === 7 && performanceRange >= 4 && (
          <SeventhQuestionRecommend
            performanceRange={performanceRange}
            onRecommendationChange={onRecommendationChange}
          />
        )}
        {step === 8 && (
          <>
            <Summary
              rating={rating}
              usage={usage}
              easeRange={easeRange}
              checkedState={selectedOnes}
              whatsMissing={whatsMissing}
              performanceRange={performanceRange}
              myReason={myReason}
              recommend={recommend}
            />
          </>
        )}
      </form>
      <div className="buttons">
        {step !== 0 && step <= 7 && (
          <Button
            buttonType="button"
            buttonText="OK"
            whenClicked={onStepChange}
          />
        )}
        {step === 8 && (
          <Button
            buttonType="button"
            buttonText="Submit"
            whenClicked={onSubmission}
          />
        )}
        {step > 1 && step <= 8 && (
          <Button
            buttonType="button"
            buttonText="Back"
            whenClicked={onStepChange}
          />
        )}
      </div>
    </div>
  );
};

export default Form;
