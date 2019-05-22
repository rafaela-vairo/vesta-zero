import React from 'react'
import './App.css'
import SEO from './components/SEO'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Layout from './components/Layout'
import styled from 'styled-components'
import blueGrey from '@material-ui/core/colors/blueGrey'

import Menu from './components/Menu'
import Footer from './components/footer'
import Hero from './components/Hero'

const Slide = styled.div`
	text-align: start;
`

const AppContainer = styled.div`
	> div {
		padding-left: 13vw !important;
		padding-right: 13vw !important;
	}
`

const theme = createMuiTheme({
	typography: {
		fontSize: 14,
		fontFamily: [
			'Alegreya Sans',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
	props: {
		MuiButtonBase: {
			disableRipple: true,
		},
	},
	palette: {
		primary: blueGrey,
	},
})

function App() {
	return (
		<div className='App'>
			<MuiThemeProvider theme={theme}>
				<SEO />
				<Layout>
					<Menu />
					<AppContainer>
						<Hero />
						<Footer>
							<a href='#footer'>Footer</a>
						</Footer>
					</AppContainer>
				</Layout>
			</MuiThemeProvider>
		</div>
	)
}

export default App
