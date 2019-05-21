import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { makeStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Divider from '@material-ui/core/Divider'
import classNames from 'classnames'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		position: 'fixed',
		top: '0%',
		height: '100vh',
		zIndex: '9999',
		textTransform: 'uppercase',
	},
	paper: {
		marginRight: theme.spacing(2),
		position: 'absolute',
		top: '50%',
		width: '13vw',
		maxHeight: '100vh',
		overflowY: 'auto',
		transform: 'translateY(-50%)',
		borderRadius: '0 3px 3px 0 !important',
		padding: '20px',
	},
	item: {
		fontWeight: '500',
		'&:hover': {
			fontWeight: '700',
		},
	},
	nester: {
		justifyContent: 'space-between',
		fontWeight: '500',
		'&:hover': {
			fontWeight: '700',
		},
	},
	nested: {
		paddingLeft: theme.spacing(4),
		fontWeight: '500',
		'&:hover': {
			fontWeight: '700',
		},
	},
	less: {
		color: 'red',
	},
	more: {
		color: 'red',
	},
	active: {
		fontWeight: '700',
	},
}))

function MenuListComposition() {
	const classes = useStyles()
	const [open, setOpen] = useState(false)
	const [active, inactive] = useState(false)

	function openClick() {
		setOpen(!open)
	}

	function activeClick() {
		inactive(!active)
	}

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<MenuList>
					<MenuItem
						button
						divider
						className={
							active ? [classes.item, classes.active].join(' ') : classes.item
						}
						onClick={activeClick}
					>
						Menu
					</MenuItem>
					<MenuItem
						button
						divider
						className={
							active ? [classes.item, classes.active].join(' ') : classes.item
						}
						onClick={activeClick}
					>
						Estrutura
					</MenuItem>
					<MenuItem className={classes.nester} onClick={openClick}>
						Ações Formativas
						{open ? (
							<ExpandLess className={classes.less} />
						) : (
							<ExpandMore className={classes.more} />
						)}
					</MenuItem>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<MenuItem className={classes.nested} button>
							Item
						</MenuItem>
						<MenuItem className={classes.nested} button>
							Item
						</MenuItem>
						<MenuItem className={classes.nested} button>
							Item
						</MenuItem>
						<MenuItem className={classes.nested} button>
							Item
						</MenuItem>
					</Collapse>
					<Divider />
					<MenuItem button divider className={classes.item}>
						Contato
					</MenuItem>
				</MenuList>
			</Paper>
		</div>
	)
}

export default MenuListComposition
