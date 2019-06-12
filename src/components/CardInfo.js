import React from 'react';
import styled from 'styled-components';
import { Palette } from '../utils/Theme';
import { Texto } from './Atoms';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Alarm from '@material-ui/icons/Alarm';
import School from '@material-ui/icons/School';

const StyAccountCircle = styled(AccountCircle)``;
const StyAlarm = styled(Alarm)``;
const StySchool = styled(School)``;

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
`;

const CContent = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 30px;
  > strong {
    margin-right: 5px;
  }
	${StyAccountCircle} {
		padding-right: 7px;
	}
	${StyAlarm}, ${StySchool} {
		padding-right: 7px;
		padding-left: 15px;
	}
  ${StyAccountCircle}, ${StyAlarm}, ${StySchool} {
    color: ${Palette.primary.medium};
  }
`;

const Codigo = styled.div`
	color: ${Palette.primary.medium};
	margin-top: 10px;
	font-size: 18px;
	font-weight: 500;
`;

const Natureza = styled.div`
	color: ${Palette.primary.medium};
	margin-bottom: 45px;
`;

const InfoBasica = styled.div``;

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
						{props.vagas ? (
							<>
								<StyAccountCircle /> <strong>Vagas: </strong> {props.vagas}
							</>
						) : (
							''
						)}
						{props.cargahoraria ? (
							<>
								<StyAlarm /> <strong>Carga horária: </strong>{' '}
								{props.cargahoraria}
							</>
						) : (
							''
						)}

						{props.natureza ? (
							<>
								<StySchool /> <strong>Natureza: </strong>
								{props.natureza}
							</>
						) : (
							''
						)}
					</CContent>
					<Natureza>
						<strong>{props.area}</strong> | {props.local}
					</Natureza>
				</InfoBasica>
				<p>{props.content}</p>
			</Texto>
		</div>
	);
};

export default CardInfo;
