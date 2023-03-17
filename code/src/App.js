import React from 'react';
import { Survey } from 'Components/Survey';

export const App = () => {
  return (
    <div className="survey-container">
      <img className="banner-image" src="https://blogger.googleusercontent.com/img/a/AVvXsEi_CdLLWqFq5jn84jKBAQBG2jngv2uBgkLqDV3OsJxvwr4rDxQ-1PurvnMQjqq3PlVIrv-inlyXHAkVxlnKEtLYopRdwlzsq4O5tlBC_fcEHjQ6LmnE5by5j17BbvORh007LdMu8U2EZyoHNZYTe6zJp5VHQouun7m1sdOAhsb4hz5IgONMGzLnOPiF=s16000" alt="interior of a house" />
      <form>
        <Survey />
      </form>
    </div>
  );
}
