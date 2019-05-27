import React from 'react'
import styled from 'styled-components'
import { Palette } from '../utils/Theme'
import logoimg from '../assets/images/logos/logo-cfp.svg'

export const Container = styled.div`
	background-color: ${Palette.defaultBG};
	display: block;
	flex-direction: column;
	justify-content: center;
	margin: auto;
	padding: 90px 0 90px 0;
	max-width: 930px;
	width: auto;
	min-height: 60vh;
	height: auto;
	line-height: 1.5rem;
	p {
		margin-bottom: 15px !important;
		:last-child {
			margin-bottom: 0 !important;
		}
	}
`

export const ContainerAlt = styled.div`
	background-color: ${Palette.altBG};
	height: auto;
	> div {
		background-color: ${Palette.altBG};
	}
`

export const Texto = styled.div`
	text-align: left;
	> p {
		margin: 0;
	}
`

export const SubTexto = styled.div`
	@media (min-width: 1170px) {
	}
	padding-left: 45px;
	> p {
		margin: 0;
	}
`

export const Titulo = styled.h1`
	display: inline-block !important;
	width: auto;
	margin-bottom: 45px;
	font-size: 34px;
	padding-top: 0;
	span {
		display: flex;
		width: 40%;
		border-bottom: 3px solid ${Palette.primary.medium};
		margin-top: 15px;
	}
`

export const Subtitulo = styled.h2`
	@media (min-width: 721px) {
		margin-top: 45px;
	}
	display: inline-block;
	width: auto;
	margin-bottom: 30px;
	margin-top: 15px;
	font-size: 22px;
	span {
		display: flex;
		width: 40%;
		border-bottom: 3px solid ${Palette.primary.medium};
		margin-top: 15px;
	}
`

export const SubtituloB = styled.div`
	display: block;
	width: 100%;
	height: 16px;
	border-bottom: 1px solid ${Palette.grey.medium};
	margin-bottom: 30px;
`

export const Span = styled.span`
	background-color: ${Palette.altBG};
	font-size: 19px !important;
	padding-right: 15px;
`

export const Anchor = styled.a`
	display: block;
	color: inherit;
	text-decoration: underline;
	text-decoration-color: ${Palette.primary.medium};
	&:hover {
		color: ${Palette.primary.medium};
	}
	&:visited {
		color: ${Palette.grey.dark};
		&:hover {
			color: ${Palette.primary.dark};
		}
	}
`

const LogoIMG = styled.img`
	align-self: start;
	margin-left: 30px;
	padding-top: 45px;
	height: 60px;
`

export const LogoExt = styled.img`
	margin-top: 10px;
	margin-bottom: 45px;
	margin-right: 30px;
`

export const CenterVertical = styled.div`
	display: flex;
	align-items: center;
`

export const Logo = () => <LogoIMG src={logoimg} alt='Logo do site' />
