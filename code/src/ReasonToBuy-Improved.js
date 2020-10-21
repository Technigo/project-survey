// import React, { useState } from 'react';

// const reasons = [
//   'Good Quality',
//   'Good Price',
//   'Good Aftersales Services',
//   'Good Design',
//   'Good Initiatives'
// ]

// const ReasonsToBuy = () => {
//   const [purchaseReasons, setPurchaseReasons] = useState ('[]');
//   return (
//     <div className="reason-to-buy">
//       <p>Please tell us what made you decide to buy Suzuki car(s)</p>
//       {reasons.map(reason => {
//         return (
//           <label key={reason}>
//             <input
//               type="checkbox"
//               value={reason}
//               onChange={event => setPurchaseReasons(event.target.value)}
//               checked={purchaseReasons === reason}
//             />
//           </label>
//         )
//       })}
//     </div>
//   );
// };
// export default ReasonsToBuy;