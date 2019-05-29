import React from 'react'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'
import { Palette } from '../../utils/Theme'
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Alarm from '@material-ui/icons/Alarm'
import School from '@material-ui/icons/School'

const CHeader = styled.div`
	display: flex;
	justify-content: space-between;
	color: ${Palette.primary.medium};
`

const CHLeft = styled.div``

const CHRight = styled.div`
	font-weight: 700;
`

const CTitle = styled.h3`
	margin: 30px 0 15px 0;
`

const Divider = styled.hr`
	height: 2px;
	margin: 0;
	border: none;
	flex-shrink: 0;
	background-color: rgba(0, 0, 0, 0.2);
`

const StyAccountCircle = styled(AccountCircle)``
const StyAlarm = styled(Alarm)``
const StySchool = styled(School)``

const CContent = styled.div`
	display: flex;
	align-items: center;
	margin-top: 15px;
	color: ${Palette.grey.dark};
	${StyAccountCircle} {
		padding-right: 7px;
	}
	${StyAlarm}, ${StySchool} {
		padding-right: 7px;
		padding-left: 15px;
	}
`

const CFooter = styled.div`
	display: flex;
	margin: auto 0 0 0;
	justify-content: space-between;
`

const CFLeft = styled.div`
	color: ${Palette.grey.dark} !important;
`

const CFRight = styled(Button)`
	font-weight: 700 !important;
	padding: 0 !important;
	margin: 0 !important;
	color: ${Palette.primary.medium} !important;
	border-radius: 0px !important;
`

const Card = styled(Box)`
	display: flex;
	flex-direction: column;
	border: 2px solid ${Palette.grey.medium};
	height: 231px;
	padding: 30px;
	border-radius: 3px;
	box-shadow: 0 0px 0px rgba(0, 0, 0, 0.12), 0 0px 0px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	&:hover {
		border: 2px solid ${Palette.primary.medium};
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
		${CFRight} {
			box-shadow: inset 0px -2px 0px ${Palette.primary.medium};
		}
	}
`

export default () => (
	<Card>
		<CHeader>
			<CHLeft>Universidade Federal do Rio de Janeiro</CHLeft>
			<CHRight>Curso</CHRight>
		</CHeader>
		<CTitle>Título do card lorem ipsum dolor sit amet</CTitle>
		<Divider />
		<CContent>
			<StyAccountCircle /> 100 <StyAlarm /> 120h <StySchool /> Pós-Graduação
		</CContent>
		<CFooter>
			<CFLeft>Biomédicas</CFLeft>
			<CFRight>Ver mais</CFRight>
		</CFooter>
	</Card>
)
