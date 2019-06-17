import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import logoimg from '../assets/images/logos/logo-cfp.svg'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { ClickAwayListener } from '@material-ui/core'

const Expand = styled(IconButton)`
	top: 0;
`

const StyToolBar = styled(Toolbar)`
	justify-content: space-between !important;
`

const LogoIMG = styled.img`
	align-self: start;
	margin: 24px 8px;
	height: 24px;
`
const Logo = () => <LogoIMG src={logoimg} alt='Logo do site' />

export default function HideAppBar(props) {
	const [open, setOpen] = React.useState(false)
	const anchorRef = React.useRef(null)

	function handleToggle() {
		setOpen(prevOpen => !prevOpen)
	}

	function handleClose(event) {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return
		}

		setOpen(false)
	}
	return (
		<React.Fragment>
			<AppBar color='inherit'>
				<StyToolBar>
					<Logo />
					<Expand
						edge='end'
						aria-label='Menu'
						ref={anchorRef}
						aria-controls='menu-list-grow'
						aria-haspopup='true'
						onClick={handleToggle}
					>
						<MenuIcon />
					</Expand>
				</StyToolBar>
				<Collapse in={open} anchorEl={anchorRef.current}>
					<ClickAwayListener onClickAway={handleClose}>
						{props.children}
					</ClickAwayListener>
				</Collapse>
			</AppBar>
		</React.Fragment>
	)
}
