import React from 'react'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'
import { Palette } from '../../utils/Theme'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Alarm from '@material-ui/icons/Alarm'
import School from '@material-ui/icons/School'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

const CHeader = styled.div`
	display: flex;
	justify-content: space-between;
	color: ${Palette.primary.medium};
`

const CHLeft = styled.div``

const CHRight = styled.div`
	font-weight: 700;
`

function TitleH3(props) {
	// Spread the properties to the underlying DOM element.
	return <h3 {...props}>{props.children}</h3>
}
const CTitle = styled(TitleH3)`
	margin: 30px 0 15px 0;
	max-height: 48px;
  overflow: hidden;
  position: relative;
  &:after {
  content: "";
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30%;
  height: 1.2em;
  background: linear-gradient(to right, rgb(237, 237, 237, 0), rgb(237, 237, 237, 1) 50%);
	}
}
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
	overflow: hidden;
	text-overflow: ellipsis;
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
	}
`

export default props => (
	<Card>
		<CHeader>
			<CHLeft>{props.local}</CHLeft>
			<CHRight>{props.tipo}</CHRight>
		</CHeader>
		<CTitle>
			<Tooltip title={<Typography>{props.titulo}</Typography>} placement='top'>
				<div>{props.titulo}</div>
			</Tooltip>
		</CTitle>
		<Divider />
		<CContent>
			{props.vagas ? <StyAccountCircle /> : ''}
			{props.vagas} {props.cargahoraria ? <StyAlarm /> : ''}
			{props.cargahoraria}
			{props.natureza ? (
				<>
					<StySchool />
					{props.natureza}
				</>
			) : (
				''
			)}
		</CContent>
		<CFooter>
			<CFLeft>
				{props.categoria ? props.categoria : ''}
				{props.area ? props.area : ''}
			</CFLeft>
			{props.children}
		</CFooter>
	</Card>
)
