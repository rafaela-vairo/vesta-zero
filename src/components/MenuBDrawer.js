import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import styled from 'styled-components'

const useStyles = makeStyles({
	fullList: {
		width: 'auto',
	},
})

const Expand = styled(IconButton)`
	top: 0;
`

export default function MenuBDrawer(props) {
	const classes = useStyles()
	const [state, setState] = React.useState({
		open: false,
	})

	function handleOpen() {
		setState(state => ({ open: !state.open }))
	}

	return (
		<div>
			<Expand
				edge='end'
				className={classes.menuButton}
				aria-label='Menu'
				onClick={handleOpen}
			>
				<MenuIcon />
			</Expand>
			<Collapse in={state.open}>{props.children}</Collapse>
		</div>
	)
}
