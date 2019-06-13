import React from 'react'
import PropTypes from 'prop-types'
import { Palette } from '../utils/Theme'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import Close from '@material-ui/icons/Close'

import styled from 'styled-components'

const useStyles = makeStyles(theme => ({
	paper: {
		backgroundColor: Palette.defaultBG,
		padding: '60px',
	},
	close: {
		position: 'relative',
		left: '-45px',
		top: '45px',
		'&:hover': {
			color: Palette.primary.medium,
		},
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
	typography: {
		padding: theme.spacing(2),
	},
	button: {
		'&:hover': {
			color: Palette.primary.medium,
			backgroundColor: Palette.transparent,
		},
		'&.active': {
			color: Palette.primary.medium,
		},
	},
	paperFullScreen: {
		paddingTop: '100px',
		height: '80%',
	},
}))

const CFRight = styled(Button)`
	font-weight: 700 !important;
	padding: 0 !important;
	margin: 0 !important;
	color: ${Palette.primary.medium} !important;
	background-color: ${Palette.transparent} !important;
	border-radius: 0px !important;
	:hover {
		box-shadow: inset 0px -2px 0px ${Palette.primary.medium};
	}
`

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />
})

function ModalPopper(props) {
	const { fullScreen } = props
	const classes = useStyles()
	const [open, setOpen] = React.useState(null)

	function handleClickOpen() {
		setOpen(true)
	}

	function handleClose() {
		setOpen(false)
	}

	return (
		<div>
			<CFRight className={classes.button} onClick={handleClickOpen}>
				Ver mais
			</CFRight>
			<Dialog
				fullScreen={fullScreen}
				open={Boolean(open)}
				onClose={handleClose}
				TransitionComponent={Transition}
				maxWidth='md'
				classes={{
					paperFullScreen: classes.paperFullScreen,
					paper: classes.paper,
				}}
			>
				<Hidden xlUp>
					<IconButton
						onClick={handleClose}
						style={{ justifyContent: 'flex-start', padding: '0 0 15px 0' }}
					>
						<Close />
					</IconButton>
				</Hidden>

				{props.children}
			</Dialog>
		</div>
	)
}

ModalPopper.propTypes = {
	fullScreen: PropTypes.bool.isRequired,
}

export default withMobileDialog()(ModalPopper)
