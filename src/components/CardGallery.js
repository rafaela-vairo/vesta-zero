import React, { useState, useEffect } from 'react';
import He from 'he';
import axios from 'axios';
import { Container } from './Atoms';
import styled from 'styled-components';
import { Palette } from '../utils/Theme';
import Grid from '@material-ui/core/Grid';
import Card from './Moleculas/Card';
import FiltroDropdown from './FiltroDropdown';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import CardInfo from './CardInfo';

const API_URL =
	'https://cfp.olimpo.tic.ufrj.br/wp-json/wp/v2/acoes?per_page=100';

const CFRight = styled(Button)`
	font-weight: 700 !important;
	padding: 0 !important;
	margin: 0 !important;
	color: ${Palette.primary.medium} !important;
	background-color: ${Palette.transparent} !important;
	border-radius: 0px !important;
`;

const Tag = styled.span`
	padding-right: 5px;
	white-space: nowrap;
	:not(:first-child) {
		border-left: 1px solid ${Palette.grey.dark} !important;
		padding-left: 5px;
	}
`;

const useStyles = makeStyles(theme => ({
	paper: {
		backgroundColor: Palette.defaultBG
	},
	close: {
		position: 'relative',
		left: '-45px',
		top: '45px',
		'&:hover': {
			color: Palette.primary.medium
		}
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1
	}
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function CardGallery() {
	const classes = useStyles();
	const [data, setData] = useState([]);
	const [open, setOpen] = React.useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`${API_URL}`);
			setData(result.data);
		};
		fetchData();
	}, []);

	function handleClickOpen() {
		setOpen(true);
	}

	function handleClose() {
		setOpen(false);
	}

	console.log(data);

	return (
		<Container id="acoes">
			<FiltroDropdown>
				Ações Formativas <span />
			</FiltroDropdown>
			<Grid container spacing={5} style={{ padding: '5px 15px 30px 15px' }}>
				{data.map(item => (
					<Grid item xs={12} sm={6}>
						<Card
							local={item.acf.instituicao.post_title}
							tipo={item.acf.acao_tipo.name}
							titulo={He.decode(
								item.title.rendered.replace(/(<([^>]+)>)/gi, '')
							)}
							vagas={item.acf.vagas}
							cargahoraria={item.cargahoraria}
							nivel={item.nivel}
							categoria={item.categoria}
							area={
								item.acf.area
									? item.acf.area.map(item => <Tag>{item.name}</Tag>)
									: ''
							}
							natureza={
								item.acf.natureza
									? item.acf.natureza.map(item => <Tag>{item.name}</Tag>)
									: ''
							}
						>
							<CFRight onClick={handleClickOpen}>Ver mais</CFRight>
							<Dialog
								fullScreen
								open={open}
								onClose={handleClose}
								TransitionComponent={Transition}
								classes={{ paper: classes.paper }}
							>
								<CardInfo>
									<IconButton
										className={classes.close}
										edge="start"
										color="inherit"
										onClick={handleClose}
										aria-label="Close"
									>
										<CloseIcon />
									</IconButton>
								</CardInfo>
							</Dialog>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default CardGallery;
