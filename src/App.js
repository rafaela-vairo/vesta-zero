import React from 'react'
import './App.scss'
import SEO from './components/SEO'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Layout from './components/Layout'
import styled from 'styled-components'
import { Theme } from './utils/Theme'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Estrutura from './components/Estrutura'
import CardGallery from './components/CardGallery'
import Gallery from './components/Carousel'

const AppContainer = styled.div`
	> div {
		padding-left: 13vw !important;
		padding-right: 13vw !important;
	}
`

function App() {
	return (
		<div className='App'>
			<MuiThemeProvider theme={Theme}>
				<SEO />
				<Layout>
					<Gallery />
					<Menu />
					<AppContainer>
						<Hero />
						<Sobre />
						<Estrutura />
						<CardGallery />

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
