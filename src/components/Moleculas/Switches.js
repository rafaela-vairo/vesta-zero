import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Palette } from '../../utils/Theme'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const AntSwitch = withStyles(theme => ({
	root: {
		width: 28,
		height: 16,
		padding: '2px 1px 2px 2px',
		display: 'flex',
	},
	switchBase: {
		padding: '4px',
		color: theme.palette.common.white,
		'&$checked': {
			transform: 'translateX(12px)',
			color: theme.palette.common.white,
			'& + $track': {
				opacity: 1,
				backgroundColor: Palette.primary.medium,
				borderColor: Palette.primary.medium,
			},
		},
	},
	thumb: {
		width: 10,
		height: 10,
		boxShadow: 'none',
	},
	track: {
		border: `1px solid ${Palette.grey.medium}`,
		borderRadius: 16 / 2,
		opacity: 1,
		backgroundColor: Palette.grey.medium,
	},
	checked: {},
}))(Switch)

function CustomizedSwitches(props) {
	const [state, setState] = React.useState({
		checked: false,
	})

	const handleChange = name => event => {
		setState({ ...state, [name]: event.target.checked })
	}

	return (
		<Typography component='div' style={{ padding: 15 }}>
			<Grid
				component='label'
				container
				alignItems='center'
				spacing={2}
				justify='space-between'
			>
				<Grid item>{props.children}</Grid>
				<Grid item>
					<AntSwitch
						checked={state.checked}
						onChange={handleChange('checked')}
						value='checked'
					/>
				</Grid>
			</Grid>
		</Typography>
	)
}

export default CustomizedSwitches
