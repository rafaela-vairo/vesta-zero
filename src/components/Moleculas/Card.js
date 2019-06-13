import React from 'react'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'
import { Palette } from '../../utils/Theme'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Alarm from '@material-ui/icons/Alarm'
import School from '@material-ui/icons/School'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'

const CHeader = styled.div`
	display: flex;
	justify-content: space-between;
	color: ${Palette.primary.medium};
`

const CHLeft = styled.div``

const CHRight = styled.div`
	color: ${Palette.primary.medium} !important;
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
	flex-wrap: wrap;
	align-items: center;
	margin-top: 15px;
	margin-bottom: 15px;
	color: ${Palette.grey.dark};
	${StyAlarm}, ${StySchool}, ${StyAccountCircle} {
		padding-right: 5px;
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
	min-height: 231px;
	padding: 30px;
	border-radius: 3px;
	box-shadow: 0 0px 0px rgba(0, 0, 0, 0.12), 0 0px 0px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	&:hover {
		border: 2px solid ${Palette.primary.medium};
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	}
`

const SpanA = styled.span`
	position: relative;
	top: 5px;
`

const SpanB = styled.span`
	position: relative;
	top: -5px;
`

function CardAcao(props) {
	return (
		<Card>
			<CHeader>
				<CHLeft>{props.local}</CHLeft>
				<Hidden lgDown>
					<CHRight>{props.tipo}</CHRight>
				</Hidden>
			</CHeader>
			<CTitle>{props.titulo}</CTitle>
			<Divider />
			<CContent>
				<Grid container spacing={1}>
					<Grid item>
						<SpanA>
							{props.vagas ? (
								<Tooltip title={<Typography>Vagas</Typography>}>
									<StyAccountCircle />
								</Tooltip>
							) : (
								''
							)}
							<SpanB>{props.vagas}</SpanB>
						</SpanA>
					</Grid>
					<Grid item>
						<SpanA>
							{props.cargahoraria ? (
								<>
									<Tooltip title={<Typography>Carga Horária</Typography>}>
										<StyAlarm />
									</Tooltip>
									<SpanB>{props.cargahoraria}h</SpanB>
								</>
							) : (
								''
							)}
						</SpanA>
					</Grid>
					<Grid item>
						<SpanA>
							{props.natureza ? (
								<Tooltip title={<Typography>Natureza</Typography>}>
									<StySchool />
								</Tooltip>
							) : (
								''
							)}{' '}
							<SpanB>{props.natureza}</SpanB>
						</SpanA>
					</Grid>
				</Grid>
			</CContent>
			<CFooter>
				<CFLeft>
					<Hidden xlUp>
						<CHRight>{props.tipo}</CHRight>
					</Hidden>
					{props.categoria ? props.categoria : ''}
					{props.area ? props.area : ''}
				</CFLeft>
				<div
					style={{
						display: 'flex',
						alignSelf: 'flex-end',
					}}
				>
					{props.children}
				</div>
			</CFooter>
		</Card>
	)
}

export default CardAcao
