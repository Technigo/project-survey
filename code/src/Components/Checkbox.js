/* eslint-disable */
import React from 'react';
import '../index.css';
import './checkbox.css';

export const Checkbox = (props) => {
  const { step, adjectivesArray, onAdjectivesArrayChange, handleStepIncrease } = props
  console.log(step);
  return (
    <div>
      <p>Tick all the adjectives that sound good to you.</p>
      <div className="checkbox-container">
        <form>
          <div className="checkbox-wrapper">
            <div className="adjective-container">
              <label className="check-btn-bontainer">
                <input
                  type="checkbox"
                  value="Chill"
                  checked={adjectivesArray.includes('Chill')}
                  onChange={() => onAdjectivesArrayChange('Chill')} />
                <span className="adjective-text"> Chill</span>
              </label>
            </div>
            <div className="adjective-container">
              <label className="check-btn-bontainer">
                <input
                  type="checkbox"
                  value="Upbeat"
                  checked={adjectivesArray.includes('Upbeat')}
                  onChange={() => onAdjectivesArrayChange('Upbeat')} />
                <span className="adjective-text"> Upbeat</span>
              </label>
            </div>
            <div className="adjective-container">
              <label className="check-btn-bontainer">
                <input
                  type="checkbox"
                  value="Traditional"
                  checked={adjectivesArray.includes('Traditional')}
                  onChange={() => onAdjectivesArrayChange('Traditional')} />
                <span className="adjective-text"> Traditional</span>
              </label>
            </div>
            <div className="adjective-container">
              <label className="check-btn-bontainer">
                <input
                  type="checkbox"
                  value="House-inspired"
                  checked={adjectivesArray.includes('House-inspired')}
                  onChange={() => onAdjectivesArrayChange('House-inspired')} />
                <span className="adjective-text"> House-inspired</span>
              </label>
            </div>
            <div className="adjective-container">
              <label className="check-btn-bontainer">
                <input
                  type="checkbox"
                  value="Soulful"
                  checked={adjectivesArray.includes('Soulful')}
                  onChange={() => onAdjectivesArrayChange('Soulful')} />
                <span className="adjective-text"> Soulful</span>
              </label>
            </div>
            <div className="adjective-container">
              <label className="check-btn-bontainer">
                <input
                  type="checkbox"
                  value="Fusion"
                  checked={adjectivesArray.includes('Fusion')}
                  onChange={() => onAdjectivesArrayChange('Fusion')} />
                <span className="adjective-text"> Fusion</span>
              </label>
            </div>
            <div className="adjective-container">
              <label className="check-btn-bontainer">
                <input
                  type="checkbox"
                  value="Hypnotic"
                  checked={adjectivesArray.includes('Hypnotic')}
                  onChange={() => onAdjectivesArrayChange('Hypnotic')} />
                <span className="adjective-text"> Hypnotic</span>
              </label>
            </div>
            <div className="adjective-container">
              <label className="check-btn-bontainer">
                <input
                  type="checkbox"
                  value="Contemporary"
                  checked={adjectivesArray.includes('Contemporary')}
                  onChange={() => onAdjectivesArrayChange('Contemporary')} />
                <span className="adjective-text"> Contemporary</span>
              </label>
            </div>
          </div>
          <div className="checkbox-wrapper">
            <div className="adjective-container">
              <label className="check-btn-bontainer">
                <input
                  type="checkbox"
                  value="Pan-African"
                  checked={adjectivesArray.includes('Pan-African')}
                  onChange={() => onAdjectivesArrayChange('Pan-African')} />
                <span className="adjective-text"> Pan-African</span>
              </label>
            </div>
            <div className="adjective-container">
              <label className="check-btn-bontainer">
                <input
                  type="checkbox"
                  value="Celebratory"
                  checked={adjectivesArray.includes('Celebratory')}
                  onChange={() => onAdjectivesArrayChange('Celebratory')} />
                <span className="adjective-text"> Celebratory</span>
              </label>
            </div>
            <div className="adjective-container">
              <label className="check-btn-bontainer">
                <input
                  type="checkbox"
                  value="Alternative"
                  checked={adjectivesArray.includes('Alternative')}
                  onChange={() => onAdjectivesArrayChange('Alternative')} />
                <span className="adjective-text"> Alternative</span>
              </label>
            </div>
            <div className="adjective-container">
              <label className="check-btn-bontainer">
                <input
                  type="checkbox"
                  value="Romantic"
                  checked={adjectivesArray.includes('Romantic')}
                  onChange={() => onAdjectivesArrayChange('Romantic')} />
                <span className="adjective-text"> Romantic</span>
              </label>
            </div>
            <div className="adjective-container">
              <label className="check-btn-bontainer">
                <input
                  type="checkbox"
                  value="Bass-heavy"
                  checked={adjectivesArray.includes('Bass-heavy')}
                  onChange={() => onAdjectivesArrayChange('Bass-heavy')} />
                <span className="adjective-text"> Bass-heavy</span>
              </label>
            </div>
            <div className="adjective-container">
              <label className="check-btn-bontainer">
                <input
                  type="checkbox"
                  value="Joyful"
                  checked={adjectivesArray.includes('Joyful')}
                  onChange={() => onAdjectivesArrayChange('Joyful')} />
                <span className="adjective-text"> Joyful</span>
              </label>
            </div>
          </div>
        </form>
      </div>
      <button
        className="nextBtn button"
        type="submit"
        onClick={handleStepIncrease}>Get your results!
      </button>
    </div>
  );
};