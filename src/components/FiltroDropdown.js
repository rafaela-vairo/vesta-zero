import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import Filter from '@material-ui/icons/FilterList'

import Paper from '@material-ui/core/Paper'
import Collapse from '@material-ui/core/Collapse'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const styles = theme => ({
	root: {
		height: 180,
	},
	container: {
		display: 'flex',
	},
	paper: {
		margin: theme.spacing(1),
	},
})

class FiltroDropdown extends React.Component {
	state = {
		checked: false,
	}

	handleChange = () => {
		this.setState(state => ({ checked: !state.checked }))
	}

	render() {
		const { classes } = this.props
		const { checked } = this.state

		return (
			<div className={classes.root}>
				<FormControlLabel
					control={<Switch checked={checked} onChange={this.handleChange} />}
					label='Show'
				/>
				<div className={classes.container}>
					<Collapse in={checked}>
						<Paper elevation={4} className={classes.paper}>
							<Filter />
							Filtre os resultados
						</Paper>
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
