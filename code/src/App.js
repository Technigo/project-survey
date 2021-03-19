import React from 'react'; //Outer depenency grouped (from Node module) 

import Header from 'components/Header'; //Local depenencies grouped (created by developer) 
import BackgroundImages from './components/BackgroundImage';
import Form from './components/Form'; 
import Footer from './components/Footer';


export const App = () => {

return (

    <>
    <Header />
    <BackgroundImages />
    <Form />
    <Footer />
    </>
)
}







//COUNTER EXAMPLE FROM LECTURE

// export const App = () => {
//   const [newCounter, setNewCounter] = useState(0);

//   const onCounterIncrease = () => {
//   setNewCounter(newCounter +1);
//   }

//   return (
//    <div>
//      <div>Current value of newCouner : {newCounter}</div>
//     <button onClick={onCounterIncrease}>Click me to increase counter!</button>
//    </div>
//   )
// }
