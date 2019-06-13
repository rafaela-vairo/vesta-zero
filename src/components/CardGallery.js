import React from 'react'
import He from 'he'
import { Container, Titulo } from './Atoms'
import styled from 'styled-components'
import { Palette } from '../utils/Theme'
import Grid from '@material-ui/core/Grid'
import Card from './Moleculas/Card'
//import FiltroDropdown from './FiltroDropdown'
import CardInfo from './CardInfo'

import ModalPopper from './ModalPopper'

//import Menu from '@material-ui/core/Menu'
//import Switch from './Moleculas/Switches'
//import Less from '@material-ui/icons/ExpandLess'
//import More from '@material-ui/icons/ExpandMore'
//import Divider from '@material-ui/core/Divider'

const Tag = styled.span`
	padding-right: 5px;
	white-space: nowrap;
	:not(:first-child) {
		border-left: 1px solid ${Palette.grey.dark} !important;
		padding-left: 5px;
	}
`

const PublicoTag = styled.span`
	padding-left: 5px;
	:not(:last-of-type) {
		border-right: 1px solid ${Palette.grey.dark} !important;
		padding-right: 5px;
	}
`

/*const StyledMenu = withStyles({
	paper: {
		border: '1px solid #d3d4d5',
		padding: '0 15px 0 15px',
	},
})(props => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'center',
		}}
		{...props}
	/>
))

/* function FiltroPopper(props) {
	const classes = useStyles()
	const [anchorEl, setAnchorEl] = React.useState(null)

	function handleClick(event) {
		setAnchorEl(event.currentTarget)
	}

	function handleClose() {
		setAnchorEl(null)
	}

	const open = Boolean(anchorEl)
	const id = open ? 'filtro-popper' : null

	return (
		<div className={classes.innerpopper}>
			<Button
				aria-describedby={id}
				aria-controls='customized-menu'
				aria-haspopup='true'
				className={classes.button}
				onClick={handleClick}
			>
				{props.name} {open ? <Less /> : <More />}
			</Button>
			<StyledMenu
				id='customized-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{props.children}
			</StyledMenu>
		</div>
	)
} */

function CardGallery(props) {
	return (
		<Container id='acoes'>
			<Titulo>
				Ações Formativas <span />
			</Titulo>
			{/* <FiltroDropdown
				titulo={
					<>
						Ações Formativas <span />
					</>
				}
				filtros={
					<>
						<FiltroPopper name='Público Alvo'>
							<Switch>Item 1</Switch>
							<Divider />
							<Switch>Item 2</Switch>
							<Divider />
							<Switch>Item 3</Switch>
							<Divider />
							<Switch>Item 4</Switch>
						</FiltroPopper>
						<FiltroPopper name='Natureza'>
							<Switch>Item 1</Switch>
							<Divider />
							<Switch>Item 2</Switch>
							<Divider />
							<Switch>Item 3</Switch>
							<Divider />
							<Switch>Item 4</Switch>
						</FiltroPopper>
						<FiltroPopper name='Área de Conhecimento'>
							<Switch>Item 1</Switch>
							<Divider />
							<Switch>Item 2</Switch>
							<Divider />
							<Switch>Item 3</Switch>
							<Divider />
							<Switch>Item 4</Switch>
						</FiltroPopper>
						<FiltroPopper name='Instituição'>
							<Switch>Universidade Federal do Rio de Janeiro</Switch>
							<Divider />
							<Switch>Universidade Estadual do Rio de Janeiro</Switch>
							<Divider />
							<Switch>Universidade Federal Rural do Rio de Janeiro</Switch>
							<Divider />
							<Switch>Universidade Federal Fluminense</Switch>
						</FiltroPopper>
					</>
				}
			/> */}
			<Grid container spacing={5} style={{ padding: '5px 15px 30px 15px' }}>
				{props.data.map(item => (
					<Grid item xs={12} sm={6}>
						<Card
							local={item.acf.instituicao.post_title}
							tipo={item.acf.acao_tipo.name}
							titulo={He.decode(
								item.title.rendered.replace(/(<([^>]+)>)/gi, '')
							)}
							vagas={item.acf.vagas}
							cargahoraria={item.acf.carga_horaria}
							nivel={item.nivel}
							categoria={item.categoria}
							area={
								item.acf.area
									? item.acf.area.map(item => <Tag>{item.name}</Tag>)
									: ''
							}
							natureza={
								item.acf.natureza
									? item.acf.natureza.map(item => item.name)
									: ''
							}
						>
							<ModalPopper>
								<CardInfo
									local={item.acf.instituicao.post_title}
									tipo={item.acf.acao_tipo.name}
									titulo={He.decode(
										item.title.rendered.replace(/(<([^>]+)>)/gi, '')
									)}
									codigo={item.acf.codigo}
									vagas={item.acf.vagas}
									cargahoraria={item.acf.carga_horaria}
									area={
										item.acf.area
											? item.acf.area.map(item => <Tag>{item.name}</Tag>)
											: ''
									}
									natureza={
										item.acf.natureza
											? item.acf.natureza.map(item => item.name)
											: ''
									}
									publico={
										item.acf.alvo
											? item.acf.alvo.map(item => (
													<PublicoTag>{item.name}</PublicoTag>
											  ))
											: ''
									}
									content={He.decode(
										item.content.rendered.replace(/(<([^>]+)>)/gi, '')
									)}
									localidade={
										item.acf.local
											? item.acf.local.replace(/(<([^>]+)>)/gi, '')
											: ''
									}
									observacoes={He.decode(
										item.acf.observacoes.replace(/(<([^>]+)>)/gi, '')
									)}
									ementa={item.acf.ementa}
									contatonome={item.acf.contato.nome}
									contatofone={item.acf.contato.telefone}
								/>
							</ModalPopper>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default CardGallery
