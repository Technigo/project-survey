import React from "react"
import linkedin from '../images/linkedinlogo.png'
import github from 'images/githublogo.png'
import stackoverflow from 'images/SOlogo.png'

const Footer = () => {

	return (
		<footer>
			<div className="logo-container">
				<a 
					target="_blank"
					rel="noopener noreferrer"
					className="no-underline-link" 
					aria-label="LinkedIn logo" 
					href="https://www.linkedin.com/in/linn%C3%A9a-wilhelmsson-42a5a2108/">
						<img 
							src={linkedin}
							alt="LinkedIn logo" 
							className="logos-bottom" />
				</a>
				<a 
					target="_blank"
					rel="noopener noreferrer"
					className="no-underline-link" 
					aria-label="GitHub logo" 
					href="https://github.com/Skrosen">
						<img 
							src={github}
							alt="GitHub logo" 
							className="logos-bottom" />					
				</a>

				<a
					target="_blank"
					rel="noopener noreferrer" 
					className="no-underline-link" 
					aria-label="StackOverflow logo" 
					href="https://stackoverflow.com/users/16687101/linn%c3%a9a-wilhelmsson">
						<img 
							src={stackoverflow}
							alt="StackOverflow logo" 
							className="logos-bottom" />
				</a>
			</div>
		</footer>
	)
}

export default Footer