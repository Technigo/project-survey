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
} from 'chart.js';

// Chart JS Options
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const options = {
    scales: {
      r:
        {
          min: 1,
          max: 7,
          stepSize: 0.5,
        },
    },
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

export const TipiChart = (props) => {

    console.log(props)

    const extr = ((parseInt(props.q1Answer, 10) + parseInt(props.q6Answer, 10)) / 2)
    const agre = ((parseInt(props.q2Answer, 10) + parseInt(props.q7Answer, 10)) / 2)
    const cons = ((parseInt(props.q3Answer, 10) + parseInt(props.q8Answer, 10)) / 2)
    const emot = ((parseInt(props.q4Answer, 10) + parseInt(props.q9Answer, 10)) / 2)
    const open = ((parseInt(props.q5Answer, 10) + parseInt(props.q10Answer, 10)) / 2)
    const name = props.name
    let maleData = []
    let femaleData = []

    if (props.age === '15-20') {
        maleLabel = 'Mean Scores for Males 15-20'
        femaleLabel = 'Mean Scores for Females 15-20'
        maleData = maleGroupOne
        femaleData = femaleGroupOne
    } if (props.age === '21-30') {
        maleLabel = 'Mean Scores for Males 21-30'
        femaleLabel = 'Mean Scores for Females 21-30'
        maleData = maleGroupTwo
        femaleData = femaleGroupTwo
    } if (props.age === '31-40') {
        maleLabel = 'Mean Scores for Males 31-40'
        femaleLabel = 'Mean Scores for Females 31-40'
        maleData = maleGroupThree
        femaleData = femaleGroupThree
    } if (props.age === '41-50') {
        maleLabel = 'Mean Scores for Males 41-50'
        femaleLabel = 'Mean Scores for Females 41-50'
        maleData = maleGroupFour
        femaleData = femaleGroupFour
    } if (props.age === '51-60') {
        maleLabel = 'Mean Scores for Males 51-60'
        femaleLabel = 'Mean Scores for Females 51-60'
        maleData = maleGroupFive
        femaleData = femaleGroupFive
    } if (props.age === '61plus') {
        maleLabel = 'Mean Scores for Males 61+'
        femaleLabel = 'Mean Scores for Females 61+'
        maleData = maleGroupSix
        femaleData = femaleGroupSix
    }

    const data = [
        {
            label: name + "'s personality matrix",
            data: [extr, agre, cons, emot, open],
            backgroundColor: 'rgba(161, 85, 185, 0.6)',
            borderColor: 'rgba(108, 47, 128, 1)',
            borderWidth: 3,
        },
        {
            label: maleLabel,
            data: maleData,
            backgroundColor: 'rgba(22, 91, 169, 0.2)',
            borderColor: 'rgba(14, 59, 110, 1)',
            borderWidth: 1,
        },
        {
            label: femaleLabel,
            data: femaleData,
            backgroundColor: 'rgba(247, 100, 162, 0.2)',
            borderColor: 'rgba(199, 64, 121, 1)',
            borderWidth: 1,
        },
    ]

    return (
    <>
    <Radar 
    data={{
        labels: ['Extraversion', 'Agreeableness', 'Conscientiousness', 'Emotional Stability', 'Openness to Experiences'],
        datasets: data
    }} 
    options={options}
    />
    </>
    )
}
