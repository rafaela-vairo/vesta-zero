import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Slide from '@material-ui/core/Slide'
import logoimg from '../assets/images/logos/logo-cfp.svg'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

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
	const [state, setState] = React.useState({
		open: false,
	})

	function handleOpen() {
		setState(state => ({ open: !state.open }))
	}
	return (
		<React.Fragment>
			<AppBar color='inherit'>
				<StyToolBar>
					<Logo />
					<Expand edge='end' aria-label='Menu' onClick={handleOpen}>
						<MenuIcon />
					</Expand>
				</StyToolBar>
				<Collapse in={state.open}>{props.children}</Collapse>
			</AppBar>
		</React.Fragment>
	)
}
