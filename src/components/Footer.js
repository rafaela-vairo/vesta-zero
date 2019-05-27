import React from 'react'
import styled from 'styled-components'
import logoUFRJ100anos from '../assets/images/logos/ufrj-100-anos-branco-horizontal.svg'
import logoTIC from '../assets/images/logos/tic_branco.png'
import logoCoordCom from '../assets/images/logos/coordcom-monocromia-branco-horizontal-sem-subtitulo.svg'

const Footer = styled.div`
	display: flex;
	background: #333333;
	margin: 0px !important;
	padding: 45px 0 45px 0 !important;
	height: auto;
`

const Container = styled.div`
	@media (min-width: 721px) {
		margin-top: 75px;
	}
	width: 930px !important;
	padding: 145px auto 45px auto !important;
	margin: auto;
	display: flex;
	justify-content: left;
	flex-wrap: wrap;
	flex-flow: row wrap;
`

const LogoUFRJ = styled.div`
	height: auto;
	@media (min-width: 600px) {
		margin-right: 65px;
	}
	margin-right: 0px;
	img {
		object-fit: cover;
		height: 185px;
	}
`
const Logos = styled.div`
	@media (min-width: 400px) {
		width: auto;
	}
	@media (min-width: 400px) {
		width: auto;
	}
	width: 220px;
`

const Subtitulo = styled.h4`
	text-align: start;
	margin-top: 20px;
	color: #fff;
	margin-bottom: 45px;
	span {
		display: flex;
		width: 100px;
		border-bottom: 3px solid #fff;
		margin-top: 15px;
	}
`

const LogoCoordCom = styled.img`
	height: 60px;
	@media (min-width: 400px) {
		padding-right: 60px;
	}
	padding-right: 0px;
`

const LogoTIC = styled.img`
	height: 60px;
	padding-right: 0px;
`

export default () => (
	<Footer id='footer'>
		<Container>
			<LogoUFRJ>
				<img src={logoUFRJ100anos} alt='Logo UFRJ faz 100 Anos' />
			</LogoUFRJ>
			<Logos>
				<Subtitulo>
					Desenvolvido por <span />
				</Subtitulo>
				<div>
					<LogoCoordCom src={logoCoordCom} alt='Logo CoordCom' />
					<LogoTIC src={logoTIC} alt='Logo TIC' />
				</div>
			</Logos>
		</Container>
	</Footer>
)
