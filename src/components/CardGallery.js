import React from 'react'
import { Container } from './Atoms'
import Grid from '@material-ui/core/Grid'
import Carousel from './CarouselCards'
import Card from './Moleculas/Cards'
import FiltroDropdown from './FiltroDropdown'

export default () => (
	<Container id='acoes'>
		<FiltroDropdown>
			Ações Formativas <span />
		</FiltroDropdown>
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
