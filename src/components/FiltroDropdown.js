import React from 'react';
import PropTypes from 'prop-types';
import { Titulo } from './Atoms';
import { withStyles } from '@material-ui/core/styles';
import { Palette } from '../utils/Theme';

import Filter from '@material-ui/icons/FilterList';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';

import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const styles = theme => ({
	root: {
		width: '920px',
		textAlign: 'left',
		height: 'auto'
	},
	titulocontainer: {
		marginBottom: 20,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-end'
	},
	titulo: {
		marginBlockEnd: 0
	},
	popper: {
		justifyContent: 'flex-end',
		width: '100%',
		marginBottom: 25
	},
	innerpopper: {
		margin: 'auto',
		width: '100%'
	},
	filtros: {
		display: 'flex',
		justifyContent: 'flex-end'
	},

	searchoutline: {
		borderRadius: '3px'
	},
	searchinput: {
		padding: '10px',
		borderRadius: '30px'
	},

	box: {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'right',
		margin: theme.spacing(1)
	},
	typography: {
		padding: theme.spacing(0)
	},
	button: {
		fontWeight: 700,
		textTransform: 'none',
		'&:hover': {
			color: Palette.primary.medium,
			backgroundColor: Palette.transparent
		}
	},
	icon: {
		paddingRight: 10
	},
	filterbutton: {
		fontWeight: 700,
		padding: 5,
		borderRadius: '0 0 3px 3px',
		borderTop: '0px',
		textTransform: 'none',
		'&:hover': {
			color: theme.palette.common.white,
			backgroundColor: Palette.primary.medium
		}
	}
});

class FiltroDropdown extends React.Component {
	state = {
		openFirst: false,
		openSecond: false,
		anchorEl: null
	};

	handleOpenFirst = () => {
		this.setState(state => ({ openFirst: !state.openFirst }));
	};

	handleClick = event => {
		const { currentTarget } = event;
		this.setState(state => ({
			anchorEl: state.anchorEl ? null : currentTarget
		}));
	};

	render() {
		const { classes } = this.props;
		const { openFirst } = this.state;

		return (
			<div className={classes.root}>
				<div className={classes.titulocontainer}>
					<Titulo className={classes.titulo}>{this.props.titulo}</Titulo>
					<div>
						<FormControl className={classes.formControl} variant="outlined">
							<OutlinedInput
								classes={{
									notchedOutline: classes.searchoutline,
									input: classes.searchinput
								}}
								id="component-outlined"
								placeholder="Faça sua busca"
								inputProps={{ 'aria-label': 'Busca direta' }}
								endAdornment={
									<InputAdornment position="end">
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
							{this.props.filtros}
							<Button variant="outlined" className={classes.filterbutton}>
								Filtrar
							</Button>
						</div>
					</Collapse>
				</div>
			</div>
		);
	}
}

FiltroDropdown.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired
};

export default withStyles(styles)(FiltroDropdown);
