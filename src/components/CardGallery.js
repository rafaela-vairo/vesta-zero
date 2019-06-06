import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Container } from './Atoms'
import Grid from '@material-ui/core/Grid'
import Card from './Moleculas/Cards'
import FiltroDropdown from './FiltroDropdown'

import PostList from './postList'

const numbers = [1, 2, 3, 4, 5]
const listCards = numbers.map(number => (
	<Grid item xs={12} sm={6}>
		<Card
			local='UFRJ'
			tipo='Tipo'
			titulo='Título lorem ipsum'
			vagas={number}
			cargahoraria='120h'
			nivel='Pós-graduação'
			categoria='Categoria'
		/>
	</Grid>
))

export default () => (
	<Router>
		<Container id='acoes'>
			{/* <Route path='/' component={PostList} /> */}
			<FiltroDropdown>
				Ações Formativas <span />
			</FiltroDropdown>
			<Grid container spacing={5} style={{ padding: '5px 15px 30px 15px' }}>
				{listCards}
			</Grid>
		</Container>
	</Router>
)
