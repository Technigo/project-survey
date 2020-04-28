import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RadioForm, Radio } from 'components/Radio';
import { Text } from 'components/Text';
import { Select } from './Select';
import { Checkbox } from './Checkbox';
import { Container, StyledLink, Title, PinkButton, Wrapper } from 'shared/shared';
import { addInfo } from '../reducers/survey';

export const values = { name: '', room: '', city: '', parking: 'no' };
const StyledForm = styled.form`
	width: 80%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const Form = () => {
	const [ object, setObject ] = useState({});
	const dispatch = useDispatch();

	// var hasName = (name === 'true') ? 'Y' :'N';
	const handleSubmit = (evt) => {
		evt.preventDefault();
		dispatch(addInfo(object));
		setObject({});
		// alert(`Submitting Name ${values.toString()}`)
	};
	return (
		<Container>
			<Title>Fill in your information</Title>
			<StyledForm onSubmit={handleSubmit}>
				<Text object={object} setObject={setObject} />
				<Radio object={object} />
				<Checkbox object={object} />
				<Select object={object} />
				<Wrapper>
					<PinkButton type="submit">Submit information</PinkButton>
					<StyledLink to="/endpage">End Page</StyledLink>
				</Wrapper>
			</StyledForm>
		</Container>
	);
};

export const Bar = (props) => {
	return (
		<div className="bar">
			<div className="filled" style={{ width: `${props.size}%` }} />
		</div>
	);
};

// export const Form = () => {
//   const inputRef = useRef()
//   const [done, setDone] = useState(false)

//   // var hasName = (name === 'true') ? 'Y' :'N';
//   const handleSubmit = (evt) => {
//     evt.preventDefault()
//     inputRef.current.className += " noShow"

//     // alert(`Submitting Name ${values.toString()}`)

//   }
//   return (
//     <>
//       <form className="myForm" onSubmit={handleSubmit} ref={inputRef}>
//        <p>Please fill in your name</p>
//         < Text />
//         <button type ="submit" className="btn" onClick={setDone}>Submit answers</button>
//       <Bar size = "25"/>
//       </form>
//       {done && <RadioForm />}
// </>

//   )

// }
