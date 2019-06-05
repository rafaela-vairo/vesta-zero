import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Filter from '@material-ui/icons/FilterList'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'

const styles = theme => ({
	root: {
		textAlign: 'right',
		height: 'auto',
	},
	container: {
		justifyContent: 'right',
		width:'100%',
	},
	box: {
		display: 'flex',
		flexDirection: 'column',
		alignContent:'right',
		margin: theme.spacing(1),
	},
	wrapper: {
		display: 'flex',
		alignContent: 'flex-start',
	}
})

class FiltroDropdown extends React.Component {
	state = {
		openFirst: false,
		openSecond: false,
	}

	values = {
		age: '',
		name: 'hai',
	}

	handleOpenFirst = () => {
		this.setState(state => ({ openFirst: !state.openFirst }))
	}

	handleChange = (event) => {
		this.setState(oldValues => ({
		  ...oldValues,
		  [event.target.name]: event.target.value,
		}))
	}

	render() {
		const { classes } = this.props
		const { openFirst, values } = this.state

		return (
			<div className={classes.root}>
				
				<Button onClick={this.handleOpenFirst}><Filter /> Filtre os resultados</Button>
				<div className={classes.container}>
					<Collapse in={openFirst} classes={{wrapperInner: classes.wrapper,}}>
					<FormControl className={classes.formControl}>
						<InputLabel htmlFor="age-simple">Age</InputLabel>
						<Select
						value={this.values.age}
						onChange={this.handleChange}
						inputProps={{
							name: 'age',
							id: 'age-simple',
						}}
						>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
					</Collapse>
				</div>
			</div>
		)
	}
}

FiltroDropdown.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FiltroDropdown)
