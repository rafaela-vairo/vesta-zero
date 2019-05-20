import React from 'react'
import './App.css'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import Menu from './components/Menu'
import SEO from './components/SEO'
import Hero from './components/Hero'
import Layout from './components/Layout'

const theme = createMuiTheme({
	typography: {
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
		// Name of the component ⚛️
		MuiButtonBase: {
			// The default props to change
			disableRipple: true, // No more ripple, on the whole application 💣!
		},
	},
})

function App() {
	return (
		<div className='App'>
			<MuiThemeProvider theme={theme}>
				<SEO />
				<Layout>
					<Menu />
					<Hero />
				</Layout>
			</MuiThemeProvider>
		</div>
	)
}

export default App
