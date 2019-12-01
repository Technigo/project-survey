// <div>
//   <label htmlFor="firstName">First name</label>
//   <input
//     className={
//       error['firstName'] ? 'invalid-input' : 'valid-input'
//     }
//     id="firstName"
//     name="firstName"
//     value={input.firstName || ''}
//     type="text"
//     placeholder="Name"
//     onBlur={handleInputBlur}
//     onChange={handleInputChange}
//     required
//     // autoFocus
//   />
//   <div className="input-sub-details">
//     {error['firstName'] && (
//       <p className="error">{error['firstName']}</p>
//     )}
//     {count['firstName'] && (
//       <p className="counter">{count['firstName']}/25</p>
//     )}
//   </div>
// </div>
// <div>
//   <label htmlFor="lastName">Last name</label>
//   <input
//     className={
//       error['lastName'] ? 'invalid-input' : 'valid-input'
//     }
//     id="lastName"
//     name="lastName"
//     value={input.lastName || ''}
//     type="text"
//     placeholder="Name"
//     onBlur={handleInputBlur}
//     onChange={handleInputChange}
//     required
//   />
//   <div className="input-sub-details">
//     {error['lastName'] && (
//       <p className="error">{error['lastName']}</p>
//     )}
//     {count['lastName'] && (
//       <p className="counter">{count['lastName']}/25</p>
//     )}
//   </div>
// </div>
