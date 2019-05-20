import React from 'react'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { makeStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		position: 'fixed',
		top: '0%',
		height: '100vh',
	},
	paper: {
		marginRight: theme.spacing(2),
		position: 'absolute',
		top: '50%',
		width: '10vw',
		maxHeight: '100vh',
		overflowY: 'auto',
		transform: 'translateY(-50%)',
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}))

function MenuListComposition() {
	const classes = useStyles()
	const [open, setOpen] = React.useState(false)

	function handleClick() {
		setOpen(!open)
	}

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<MenuList>
					<MenuItem>Profile</MenuItem>
					<MenuItem>My account</MenuItem>
					<MenuItem>Logout</MenuItem>
					<MenuItem>Lorem</MenuItem>
					<MenuItem>Ipsum</MenuItem>
					<MenuItem>Dolor</MenuItem>
					<MenuItem>Profile</MenuItem>
					<MenuItem onClick={handleClick}>
						My account {open ? <ExpandLess /> : <ExpandMore />}
					</MenuItem>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<MenuItem className={classes.nested}>Logout</MenuItem>
						<MenuItem className={classes.nested}>Lorem</MenuItem>
						<MenuItem className={classes.nested}>Ipsum</MenuItem>
						<MenuItem className={classes.nested}>Dolor</MenuItem>
					</Collapse>
					<MenuItem>Profile</MenuItem>
					<MenuItem>My account</MenuItem>
					<MenuItem>Logout</MenuItem>
					<MenuItem>Lorem</MenuItem>
					<MenuItem>Ipsum</MenuItem>
					<MenuItem>Dolor</MenuItem>
					<MenuItem>Logout</MenuItem>
					<MenuItem>Lorem</MenuItem>
					<MenuItem>Ipsum</MenuItem>
					<MenuItem>Dolor</MenuItem>
				</MenuList>
			</Paper>
		</div>
	)
}

export default MenuListComposition
