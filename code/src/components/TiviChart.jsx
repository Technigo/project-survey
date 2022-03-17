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

// export const data = {
//   labels: ['Stimulation', 'Self-Direction', 'Universalism', 'Benevolence', 'Conformity', 'Tradition', 'Security', 'Power', 'Achievement', 'Hedonism'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [6, 5, 3, 5, 2, 3, 4, 5, 6, 4],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.5)',
//         'rgba(54, 162, 235, 0.5)',
//         'rgba(255, 206, 86, 0.5)',
//         'rgba(75, 192, 192, 0.5)',
//         'rgba(153, 102, 255, 0.5)',
//         'rgba(255, 159, 64, 0.5)',
//         'rgba(255, 206, 86, 0.5)',
//         'rgba(75, 192, 192, 0.5)',
//         'rgba(153, 102, 255, 0.5)',
//         'rgba(255, 159, 64, 0.5)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

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

// Function for Opening and Closing Accordion

const openSesame = () => {
  let accordionHeader = document.querySelector('.tivi-header');
  let accordionBody = accordionHeader.nextElementSibling;
  if (getComputedStyle(accordionBody).display === "none") {
      accordionBody.style.display = "block";
      accordionHeader.classList.add("accordion-header--active")
  } else {
      accordionBody.style.display = "none";
      accordionHeader.classList.remove("accordion-header--active")
  }
}

export function TiviChart ({q1Answer, q2Answer, q3Answer, q4Answer, q5Answer, q6Answer, q7Answer, q8Answer, q9Answer, q10Answer, q11Answer, q12Answer, q13Answer, q14Answer, q15Answer, q16Answer, q17Answer, q18Answer, q19Answer, q20Answer}) {
    const stim = ((q6Answer + q16Answer) / 2)
    const self = ((q5Answer + q15Answer) / 2)
    const univ = ((q4Answer + q14Answer) / 2)
    const bene = ((q3Answer + q13Answer) / 2)
    const conf = ((q1Answer + q11Answer) / 2)
    const trad = ((q2Answer + q12Answer) / 2)
    const secu = ((q10Answer + q20Answer) / 2)
    const powe = ((q9Answer + q19Answer) / 2)
    const achi = ((q8Answer + q18Answer) / 2)
    const hedo = ((q7Answer + q17Answer) / 2)

    const data = [
        {
            // label: '# of Votes',
            data: [stim, self, univ, bene, conf, trad, secu, powe, achi, hedo],
            backgroundColor: [
              'rgba(224, 104, 63, 0.7)',
              'rgba(232, 197, 72, 0.7)',
              'rgba(125, 167, 77, 0.7)',
              'rgba(88, 121, 64, 0.7)',
              'rgba(85, 155, 170, 0.7)',
              'rgba(44, 126, 176, 0.7)',
              'rgba(73, 88, 141, 0.7)',
              'rgba(109, 51, 111, 0.7)',
              'rgba(194, 45, 54, 0.7)',
              'rgba(217, 85, 136, 0.7)',
            ],
            borderWidth: 1,
          },
    ]

    return (
        <div className="page-container">
        <h2 className="center">Universal Motivating Human Values Scores</h2>
        <PolarArea
        data={{
            labels: ['Stimulation', 'Self-Direction', 'Universalism', 'Benevolence', 'Conformity', 'Tradition', 'Security', 'Power', 'Achievement', 'Hedonism'],
            datasets: data
        }} 
        options={options} />
        <button className="tivi-header" onClick={openSesame}>
          Explanation of Schwartz's Theory of Basic Human Values
        </button>
        <div className="accordion-info">
          <h4>Introduction:</h4>
          <p>Values are defined as what we think of what is important to us in life. Each of us holds numerous values with varying degrees of importance. Schwartz's value theory adopts a conception of values with six defining features:</p>
          <p>1. Values are beliefs linked inextricably to affect (emotion).</p>
          <p>2. Values refer to desirable goals that motivate action.</p>
          <p>3. Values transcend specific actions and situations.</p>
          <p>4. Values serve as standards or criteria.</p>
          <p>5. Values are ordered by importance relative to one another.</p>
          <p>6. The relative importance of multiple values guides actions.</p>
          <br/>
          <p>Each of these ten universal values can be defined by a central goal as an underlying motivator. They can also be organized into four higher-order groups (displayed below). The theory also explains how these ten values are interconnected and influence each other, since the pursuit of any of the values results in either accordance with one another, or conflict with at least one other value. The values are organized in a circular structure, because they can more lightly or strongly oppose each other. Although the theory distinguishes ten values, the borders between the values are artificial, and adjacent values flow into each other, by sharing motivational emphases.</p>
          <br/>
          <h4>Openness to change</h4>
          <p><span className="underline">Stimulation:</span> Excitement, novelty, and challenge in life.</p>
          <p><span className="underline">Self-direction:</span> Independent thought and action - choosing, creating, exploring.</p>

          <h4>Self-transcendence</h4>
          <p><span className="underline">Universalism:</span> Understanding, appreciation, tolerance, and protection for the welfare of all people and for nature.</p>
          <p><span className="underline">Benevolence:</span> Preserving and enhancing the welfare of those with whom one is in frequent personal contact (the 'in-group').</p>
          

          <h4>Conservation</h4>
          <p><span className="underline">Conformity:</span> Restraint of actions, inclinations, and impulses likely to upset or harm others and violate social expectations or norms.</p>
          <p><span className="underline">Tradition:</span> Respect, commitment, and acceptance of the customs and ideas that one's culture or religion provides.</p>
          <p><span className="underline">Security:</span> Safety, harmony, and stability of society, of relationships, and of self.</p>

          <h4>Self-enhancement</h4>
          <p><span className="underline">Power:</span> Social status and prestige, control or dominance over people and resources.</p>
          <p><span className="underline">Achievement:</span> Personal success through demonstrating competence according to social standards.</p>
          <p><span className="underline">Hedonism:</span> Pleasure or sensuous gratification for oneself.</p>

          <p>Note: Hedonism is a border value between self-enhancement and openness to change.</p>
          <br/>
          <h4>More about the TwIVI Scale used here:</h4>
          <p><a href="https://gosling.psy.utexas.edu/two-short-measures-of-values-tivi-and-twivi/" target="_blank" rel="noopener noreferrer">University of Texas Department of Psychology</a></p>
          <h4>Overview of Theory of Basic Human Values:</h4>
          <p><a href="https://gosling.psy.utexas.edu/two-short-measures-of-values-tivi-and-twivi/" target="_blank" rel="noopener noreferrer">Wikipedia Article on Theory of Basic Human Values</a></p>
          <h4>In-Depth Paper "An Overview of the Schwartz Theory of Basic Values"</h4>
          <p><a href="https://scholarworks.gvsu.edu/cgi/viewcontent.cgi?article=1116&context=orpc" target="_blank" rel="noopener noreferrer">The Hebrew University of Jerusalem</a></p>
        </div>

        </div>
        );
}
