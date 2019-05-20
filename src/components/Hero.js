import React from 'react'
import styled from 'styled-components'
//import bg from '../assets/images/backgroundSIQb.jpg'

const Hero = styled.div`
	grid-column: 1 / span 5;
	grid-row-start: 1;
	height: auto;
	padding: 2rem;
	display: flex;
	justify-content: center;
	background-image: linear-gradient(
		0deg,
		rgba(0, 29, 87, 1) 0%,
		rgba(0, 51, 153, 1) 50%,
		rgba(58, 124, 255, 1) 100%
	);
	background-size: cover;
	background-origin: border-box;
	background-repeat: no-repeat;
	@media (min-width: 721px) {
		height: calc(100vh - 85px);
	}
	> img {
		margin: auto;
		@media (min-width: 721px) and (min-height: 721px) {
			margin-top: 25vh;
			width: 50%;
			height: 50%;
			max-width: 350px;
		}

		width: 70vw;
		height: 50%;
	}
`

export default ({ children }) => <Hero>{children}</Hero>
