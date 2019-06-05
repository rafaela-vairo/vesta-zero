import React from 'react'
import PropTypes from 'prop-types'
import { Titulo } from './Atoms'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Palette } from '../utils/Theme'
import Switch from './Moleculas/Switches'
import Filter from '@material-ui/icons/FilterList'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import Less from '@material-ui/icons/ExpandLess'
import More from '@material-ui/icons/ExpandMore'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Menu from '@material-ui/core/Menu'

const styles = theme => ({
	root: {
		width: '920px',
		textAlign: 'left',
		height: 'auto',
	},
	titulocontainer: {
		marginBottom: 20,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	titulo: {
		marginBlockEnd: 0,
	},
	popper: {
		justifyContent: 'flex-end',
		width: '100%',
		marginBottom: 25,
	},
	innerpopper: {
		margin: 'auto',
		width: '100%',
	},
	filtros: {
		display: 'flex',
		justifyContent: 'flex-end',
	},

	searchoutline: {
		borderRadius: '3px',
	},
	searchinput: {
		padding: '10px',
		borderRadius: '30px',
	},

	box: {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'right',
		margin: theme.spacing(1),
	},
	typography: {
		padding: theme.spacing(0),
	},
	button: {
		fontWeight: 700,
		textTransform: 'none',
		'&:hover': {
			color: Palette.primary.medium,
		},
	},
	icon: {
		paddingRight: 10,
	},
})

const useStyles = makeStyles(theme => ({
	typography: {
		padding: theme.spacing(2),
	},
	button: {
		textTransform: 'none',
		'&:hover': {
			color: Palette.primary.medium,
		},
		'&.active': {
			color: Palette.primary.medium,
		},
	},
}))

const StyledMenu = withStyles({
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

const FilterButton = withStyles(theme => ({
	root: {
		fontWeight: 700,
		padding: 5,
		borderRadius: '0 0 3px 3px',
		borderTop: '0px',
		textTransform: 'none',
		'&:hover': {
			color: theme.palette.common.white,
			backgroundColor: Palette.primary.medium,
		},
	},
}))(Button)

function FiltroPopper(props) {
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
}

class FiltroDropdown extends React.Component {
	state = {
		openFirst: false,
		openSecond: false,
		anchorEl: null,
	}

	handleOpenFirst = () => {
		this.setState(state => ({ openFirst: !state.openFirst }))
	}

	handleClick = event => {
		const { currentTarget } = event
		this.setState(state => ({
			anchorEl: state.anchorEl ? null : currentTarget,
		}))
	}

	render() {
		const { classes, children } = this.props
		const { openFirst } = this.state

		return (
			<div className={classes.root}>
				<div className={classes.titulocontainer}>
					<Titulo className={classes.titulo}>{children}</Titulo>
					<div>
						<FormControl className={classes.formControl} variant='outlined'>
							<OutlinedInput
								classes={{
									notchedOutline: classes.searchoutline,
									input: classes.searchinput,
								}}
								id='component-outlined'
								placeholder='Faça sua busca'
								inputProps={{ 'aria-label': 'Busca direta' }}
								endAdornment={
									<InputAdornment position='end'>
										<SearchIcon style={{ color: Palette.primary.medium }} />
									</InputAdornment>
								}
							/>
						</FormControl>
						<Button onClick={this.handleOpenFirst} className={classes.button}>
							<Filter className={classes.icon} /> Filtre os resultados
						</Button>
					</div>
				</div>
				<div className={classes.popper}>
					<Collapse in={openFirst}>
						<Divider />
						<div className={classes.filtros}>
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
							<FilterButton variant='outlined'>Filtrar</FilterButton>
						</div>
					</Collapse>
				</div>
			</div>
		)
	}
}

FiltroDropdown.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired,
}

export default withStyles(styles)(FiltroDropdown)
