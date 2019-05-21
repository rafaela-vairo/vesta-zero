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
import Carousel from './components/carousel'

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
						<Carousel>
							<Slide>
								<h2>Lorem</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Quisque molestie purus ex, at consectetur leo accumsan id.
									Aenean aliquet, enim sed convallis pellentesque, lacus sem
									interdum nunc, quis sollicitudin mi nulla sed turpis. Aliquam
									suscipit quam in mauris interdum tincidunt. Nulla eros urna,
									molestie eget nisl eu, mattis pretium magna. Phasellus vitae
									arcu egestas, suscipit magna non, euismod felis. Donec
									suscipit diam a erat dictum euismod sit amet lobortis quam.
									Proin vestibulum efficitur vehicula. Etiam ut dolor vitae enim
									vestibulum blandit. Nullam eros tellus, fringilla non tellus
									bibendum, condimentum pulvinar nisi. Suspendisse rutrum dui
									sed nisi elementum bibendum. Nullam mauris felis, facilisis
									porttitor elit gravida, tempor congue lectus. Suspendisse orci
									nibh, ultricies eu tortor a, consequat tempor sapien. Morbi
									eget hendrerit ante.
								</p>
							</Slide>
							<Slide>
								<h2>Ipsum</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Quisque molestie purus ex, at consectetur leo accumsan id.
									Aenean aliquet, enim sed convallis pellentesque, lacus sem
									interdum nunc, quis sollicitudin mi nulla sed turpis. Aliquam
									suscipit quam in mauris interdum tincidunt. Nulla eros urna,
									molestie eget nisl eu, mattis pretium magna. Phasellus vitae
									arcu egestas, suscipit magna non, euismod felis. Donec
									suscipit diam a erat dictum euismod sit amet lobortis quam.
									Proin vestibulum efficitur vehicula. Etiam ut dolor vitae enim
									vestibulum blandit. Nullam eros tellus, fringilla non tellus
									bibendum, condimentum pulvinar nisi. Suspendisse rutrum dui
									sed nisi elementum bibendum. Nullam mauris felis, facilisis
									porttitor elit gravida, tempor congue lectus. Suspendisse orci
									nibh, ultricies eu tortor a, consequat tempor sapien. Morbi
									eget hendrerit ante.
								</p>
							</Slide>
						</Carousel>
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
