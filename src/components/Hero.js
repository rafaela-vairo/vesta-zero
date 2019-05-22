import React from 'react'
import styled from 'styled-components'
import LogoDesktop from '../assets/images/logos/cfp_titulo_desktop.svg'
import LogoMobile from '../assets/images/logos/cfp_titulo-mobile.svg'
import Background from '../assets/images/cfp_modulo_padronagem.svg'

const Hero = styled.div`
	grid-column: 1 / span 5;
	grid-row-start: 1;
	height: 100vh;
	display: flex;
	justify-content: center;
	background: top left/84px url(${Background}) repeat;
	@media (min-width: 721px) {
		height: 100vh;
		background: top left/110px url(${Background}) repeat;
	}
`

const Title = styled.h1`
	display: grid;
	height: 100vh;
	margin: 0;
	place-items: center center;
	text-transform: uppercase;
	font-family: 'Alegreya Sans Bold';
	color: white;
`

const Logo = styled.div`
	background: url(${LogoMobile}) no-repeat center center;
	margin: auto;
	@media (min-width: 721px) and (min-height: 721px) {
		background: url(${LogoDesktop}) no-repeat center center;
		max-width: 480px;
		width: 50%;
	}
	width: 223px;
	height: 50%;
`

export default ({ children }) => (
	<Hero>
		<Title>{children}</Title>
		<Logo id='logo-principal' role='Logo do site' />
	</Hero>
)
