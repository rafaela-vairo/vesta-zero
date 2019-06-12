import React from 'react'
import styled from 'styled-components'
import { Palette } from '../utils/Theme'
import { Texto, SubTexto } from './Atoms'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Alarm from '@material-ui/icons/Alarm'
import School from '@material-ui/icons/School'
import People from '@material-ui/icons/People'
import Grid from '@material-ui/core/Grid'
import Phone from '@material-ui/icons/Phone'
import Person from '@material-ui/icons/Person'
import Place from '@material-ui/icons/Place'

const StyAccountCircle = styled(AccountCircle)``
const StyAlarm = styled(Alarm)``
const StySchool = styled(School)``
const StyPeople = styled(People)``
const StyPerson = styled(Person)``
const StyPlace = styled(Place)``

const StyTitulo = styled.h1`
	width: auto;
	line-height: 1.3em;
	margin-block-start: 0;
	margin-block-end: 45px;
	font-size: 34px;
	padding-top: 0;
	span {
		display: flex;
		width: 40%;
		border-bottom: 3px solid ${Palette.primary.medium};
		margin-top: 15px;
	}
`

const PreP = styled.p`
	white-space: pre-wrap;
`

const CContent = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 30px;
  > strong {
    margin-right: 5px;
  }
  ${StyAccountCircle}, ${StyAlarm}, ${StySchool}, ${StyPeople}, ${StyPlace} {
    color: ${Palette.primary.medium};
  }
`

const Codigo = styled.div`
	color: ${Palette.primary.medium};
	margin-top: 10px;
	font-size: 18px;
	font-weight: 500;
`

const Natureza = styled.div`
	color: ${Palette.primary.medium};
	margin-bottom: 45px;
`

const InfoBasica = styled.div``

const GridItem = styled.span`
	display: flex;
	align-items: center;
	white-space: pre-wrap;
`

const Publico = styled.span`
	display: flex;
	flex-wrap: wrap;
	white-space: pre-wrap;
	align-items: flex-end;
`

const Local = styled.span`
	white-space: pre-wrap;
	align-items: flex-end;
	> div {
		top: -10px;
	}
`

const StyPhone = styled(Phone)``

const ContatoInfo = styled.div`
	display: flex;
	align-items: center;
	${StyPhone}, ${StyPerson} {
		color: ${Palette.primary.medium};
		padding: 0 7px 0 0;
	}
	color: black;
	a,
	p {
		margin-block-start: 0;
		margin-block-end: 0;
		margin-bottom: 15px;
		display: inline-flex;
		align-content: center;
		padding: 0px;
		text-align: center;
		color: black;
	}
	a {
		transition-property: color;
		transition-duration: 0.3s;
		color: black;
		text-decoration: none;
		&:hover {
			color: ${Palette.primary.medium};
		}
	}
`

const Subtitulo = styled.h2`
	display: inline-block;
	width: auto;
	margin-bottom: 15px;
	margin-top: 15px;
	font-size: 22px;
	span {
		display: flex;
		width: 40%;
		border-bottom: 3px solid ${Palette.primary.medium};
		margin-top: 15px;
	}
`

const CardInfo = props => {
	return (
		<div>
			<Texto style={{ paddingBottom: '90px' }}>
				{props.children}
				<StyTitulo>
					{props.titulo} <span />
					{props.codigo ? <Codigo>Código:{props.codigo}</Codigo> : ''}
				</StyTitulo>
				<InfoBasica>
					<CContent>
						<Grid container spacing={1}>
							<Grid item>
								{props.vagas ? (
									<GridItem>
										<StyAccountCircle /> <strong>{'  '} Vagas: </strong>{' '}
										{props.vagas}
									</GridItem>
								) : (
									''
								)}
							</Grid>
							<Grid item>
								{props.cargahoraria ? (
									<GridItem>
										<StyAlarm /> <strong>{'  '} Carga horária: </strong>{' '}
										{props.cargahoraria}
									</GridItem>
								) : (
									''
								)}
							</Grid>
							<Grid item>
								{props.natureza ? (
									<GridItem>
										<StySchool /> <strong>{'  '} Natureza: </strong>
										{props.natureza}
									</GridItem>
								) : (
									''
								)}
							</Grid>
							<Grid item>
								{props.publico ? (
									<Publico>
										<StyPeople /> <strong>{'  '} Público: </strong>
										{props.publico}
									</Publico>
								) : (
									''
								)}
							</Grid>
							<Grid item>
								{props.localidade ? (
									<Local>
										<StyPlace />
										<span
											style={{
												top: '-3px',
												position: 'relative',
											}}
										>
											<strong>{'  '} Local:</strong> {props.localidade}
										</span>
									</Local>
								) : (
									''
								)}
							</Grid>
						</Grid>
					</CContent>
					<Natureza>
						<strong>{props.area}</strong> | {props.local}
					</Natureza>
				</InfoBasica>

				<PreP>
					<p>{props.content}</p>
				</PreP>

				{props.observacoes ? (
					<PreP>
						<p>
							<strong>Observações</strong>
						</p>
						<p>{props.observacoes}</p>
					</PreP>
				) : (
					''
				)}
				<SubTexto>
					{props.ementa ? (
						<>
							<Subtitulo>
								Ementa <span />
							</Subtitulo>
							<p>{props.ementa}</p>
						</>
					) : (
						''
					)}
					<Subtitulo>
						Contato <span />
					</Subtitulo>
					<ContatoInfo>
						<Grid container spacing={0} style={{ paddingTop: '15px' }}>
							<Grid item sm={12}>
								<p>
									<StyPerson />
									{props.contatonome}
								</p>
							</Grid>
							<Grid item sm={12}>
								<a href={`tel:${props.contatofone}`}>
									<StyPhone />
									{props.contatofone}
								</a>
							</Grid>
						</Grid>
					</ContatoInfo>
				</SubTexto>
			</Texto>
		</div>
	)
}

export default CardInfo
