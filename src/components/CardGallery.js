import React from 'react'
import { Container, Titulo } from './Atoms'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Carousel from './CarouselCards'
import Card from './Moleculas/Cards'
import FiltroDropdown from './FiltroDropdown'

const TituloDropdown = styled.div`
	display: flex;
	justify-content: space-between;
	> * {
		margin-block-start: 22px;
    	margin-block-end: 22px;
	}
`

export default () => (
	<Container id='acoes'>
		<TituloDropdown>
			<Titulo>
				Ações Formativas <span />
			</Titulo>
			<FiltroDropdown />
		</TituloDropdown>
		<Carousel>
			<Grid container spacing={5} style={{ padding: '5px 15px 30px 15px' }}>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
			</Grid>
			<Grid container spacing={5}>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
			</Grid>
			<Grid container spacing={5}>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card />
				</Grid>
			</Grid>
		</Carousel>
	</Container>
)
