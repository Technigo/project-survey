import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    defaults,
} from 'chart.js';

// Chart JS Options
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
);

defaults.font.family = 'Montserrat'
defaults.font.size = 13
defaults.color = "#001053"
// defaults.scales.radialLinear.grid.circular = 'true'
defaults.scales.radialLinear.pointLabels.font.size = 11
defaults.scales.radialLinear.pointLabels.padding = -2

const options = {
    scales: {
      r:
        {
          min: 0,
          max: 7,
          stepSize: 0.5,
        },
    }
  };

// Data for Male Age Groups
const maleGroupOne = [3.79, 4.47, 4.41, 4.61, 5.43]
const maleGroupTwo = [3.71, 4.5, 4.57, 4.64, 5.49]
const maleGroupThree = [3.81, 4.55, 4.77, 4.63, 5.49]
const maleGroupFour = [3.85, 4.7, 4.96, 4.72, 5.41]
const maleGroupFive = [3.87, 4.89, 5.11, 4.8, 5.39]
const maleGroupSix = [3.85, 4.95, 5.26, 4.92, 5.37]

// Data for Female Age Groups
const femaleGroupOne = [4.06, 4.73, 4.52, 4.07, 5.58]
const femaleGroupTwo = [4.07, 4.88, 4.78, 4.09, 5.55]
const femaleGroupThree = [4.17, 5.04, 4.97, 4.25, 5.49]
const femaleGroupFour = [4.2, 5.28, 5.18, 4.49, 5.46]
const femaleGroupFive = [4.18, 5.43, 5.35, 4.66, 5.42]
const femaleGroupSix = [4.21, 5.5, 5.39, 4.84, 5.39]

// Labels for Charts
let maleLabel = ''
let femaleLabel = ''

// Function for Opening and Closing Accordion

// Function for opening and closing the projects items
const openSesame = () => {
    let accordionHeader = document.querySelector('.tipi-header');
    let accordionBody = accordionHeader.nextElementSibling;
    if (getComputedStyle(accordionBody).display === "none") {
        accordionBody.style.display = "block";
        accordionHeader.classList.add("accordion-header--active")
    } else {
        accordionBody.style.display = "none";
        accordionHeader.classList.remove("accordion-header--active")
    }
}

export const TipiChart = ({name, age, q1Answer, q2Answer, q3Answer, q4Answer, q5Answer, q6Answer, q7Answer, q8Answer, q9Answer, q10Answer}) => {

    const extr = ((q1Answer + q6Answer) / 2)
    const agre = ((q2Answer + q7Answer) / 2)
    const cons = ((q3Answer + q8Answer) / 2)
    const emot = ((q4Answer + q9Answer) / 2)
    const open = ((q5Answer + q10Answer) / 2)
    let maleData
    let femaleData

    if (age === '15-20') {
        maleLabel = 'Mean Scores for Males 15-20'
        femaleLabel = 'Mean Scores for Females 15-20'
        maleData = maleGroupOne
        femaleData = femaleGroupOne
    } if (age === '21-30') {
        maleLabel = 'Mean Scores for Males 21-30'
        femaleLabel = 'Mean Scores for Females 21-30'
        maleData = maleGroupTwo
        femaleData = femaleGroupTwo
    } if (age === '31-40') {
        maleLabel = 'Mean Scores for Males 31-40'
        femaleLabel = 'Mean Scores for Females 31-40'
        maleData = maleGroupThree
        femaleData = femaleGroupThree
    } if (age === '41-50') {
        maleLabel = 'Mean Scores for Males 41-50'
        femaleLabel = 'Mean Scores for Females 41-50'
        maleData = maleGroupFour
        femaleData = femaleGroupFour
    } if (age === '51-60') {
        maleLabel = 'Mean Scores for Males 51-60'
        femaleLabel = 'Mean Scores for Females 51-60'
        maleData = maleGroupFive
        femaleData = femaleGroupFive
    } if (age === '61plus') {
        maleLabel = 'Mean Scores for Males 61+'
        femaleLabel = 'Mean Scores for Females 61+'
        maleData = maleGroupSix
        femaleData = femaleGroupSix
    }

    const data = [
        {
            label: name + "'s personality matrix",
            data: [extr, agre, cons, emot, open],
            backgroundColor: 'rgba(251, 133, 0, 0.6)',
            borderColor: 'rgba(251, 133, 0, 0.8)',
            borderWidth: 2,
        },
        {
            label: maleLabel,
            data: maleData,
            backgroundColor: 'rgba(150, 217, 227, 0.6)',
            borderColor: 'rgba(150, 217, 227, 1)',
            borderWidth: 2,
        },
        {
            label: femaleLabel,
            data: femaleData,
            backgroundColor: 'rgba(255, 184, 189, 0.6)',
            borderColor: 'rgba(255, 184, 189, 1)',
            borderWidth: 2,
        },
    ]

    return (
    <div className="page-container">
    <h2 className="center title">Big 5 Personality Traits</h2>
    <Radar 
    data={{
        labels: ['Extraversion', 'Agreeableness', 'Conscientiousness', ['Emotional', 'Stability'], ['Openness to', 'Experiences']],
        datasets: data
    }} 
    options={options}
    />
    <div>
        <button className="tipi-header" onClick={openSesame}>
            Explanation of Big 5 Personality Traits
        </button>
        <div className="accordion-info">
            <h4>Introduction:</h4>
            <p>The Big 5 personality traits is a suggested grouping or taxonomy of personality traits. They have decades of empirical evidence, supported by many researchers using factor analysis to correlate and group traits, which have independently revealed these five personality dimensions. Studies indicate that the Big Five traits (the effects of personality) can statistically predict many aspects of an individual, but mostly within social functioning and rules-driven behaviour, such as mental health disorders, romantic relationships, academic success and learning styles, and employment and work success.</p>
            <br />
            <h4>Extraversion:</h4>
            <p>outgoing/energetic vs. solitary/reserved</p>
            <h4>Agreeableness:</h4>
            <p>friendly/compassionate vs. critical/rational</p>
            <h4>Conscientiousness:</h4>
            <p>efficient/organized vs. extravagant/careless</p>
            <h4>Emotional stability:</h4>
            <p>resilient/confident vs. sensitive/nervous</p>
            <h4>Openness to experiences:</h4>
            <p>inventive/curious vs. consistent/cautious</p>
            <br />
            <h4>More about the TIPI scale used here:</h4>
            <p className="underline"><a href="http://gosling.psy.utexas.edu/scales-weve-developed/ten-item-personality-measure-tipi/" target="_blank" rel="noopener noreferrer">University of Texas Department of Psychology</a></p>
            <br/>
            <h4>More about the Big 5 personality traits and their predictive effects on life:</h4>
            <p className="underline"><a href="https://en.wikipedia.org/wiki/Big_Five_personality_traits#Descriptions_of_the_particular_personality_traits" target="_blank" rel="noopener noreferrer">Wikipedia Article on Big Five Personality Traits</a></p>
        </div>
    </div>
    </div>
    )
}
