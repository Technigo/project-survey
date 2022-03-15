import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Stimulation', 'Self-Direction', 'Universalism', 'Benevolence', 'Conformity', 'Tradition', 'Security', 'Power', 'Achievement', 'Hedonism'],
  datasets: [
    {
      label: '# of Votes',
      data: [6, 5, 3, 5, 2, 3, 4, 5, 6, 4],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
    scales: {
      r:
        {
          min: 0,
          max: 6,
          stepSize: 0.5,
        },
    },
  };

export function TiviChartOne (props) {
    const stim = ((parseInt(props.q6Answer, 10) + parseInt(props.q16Answer, 10)) / 2)
    const self = ((parseInt(props.q5Answer, 10) + parseInt(props.q15Answer, 10)) / 2)
    const univ = ((parseInt(props.q4Answer, 10) + parseInt(props.q14Answer, 10)) / 2)
    const bene = ((parseInt(props.q3Answer, 10) + parseInt(props.q13Answer, 10)) / 2)
    const conf = ((parseInt(props.q1Answer, 10) + parseInt(props.q11Answer, 10)) / 2)
    const trad = ((parseInt(props.q2Answer, 10) + parseInt(props.q12Answer, 10)) / 2)
    const secu = ((parseInt(props.q10Answer, 10) + parseInt(props.q20Answer, 10)) / 2)
    const powe = ((parseInt(props.q9Answer, 10) + parseInt(props.q19Answer, 10)) / 2)
    const achi = ((parseInt(props.q8Answer, 10) + parseInt(props.q18Answer, 10)) / 2)
    const hedo = ((parseInt(props.q7Answer, 10) + parseInt(props.q17Answer, 10)) / 2)

    console.log('stim', stim, 'self', self, 'univ', univ, 'bene', bene, 'conf', conf, 'trad', trad, 'secu', secu, 'powe', powe, 'achi', achi, 'hedo', hedo)

    const data = [
        {
            // label: '# of Votes',
            data: [stim, self, univ, bene, conf, trad, secu, powe, achi, hedo],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderWidth: 1,
          },
    ]

    return (
        <>
        <h2>First-Order Scores for Schwartz's Theory of Basic Human Values</h2>
        <PolarArea
        data={{
            labels: ['Stimulation', 'Self-Direction', 'Universalism', 'Benevolence', 'Conformity', 'Tradition', 'Security', 'Power', 'Achievement', 'Hedonism'],
            datasets: data
        }} 
        options={options} />
        </>
        );
}
