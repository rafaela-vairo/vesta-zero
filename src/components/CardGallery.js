import React, { useState, useEffect } from 'react'
import He from 'he'
import axios from 'axios'
import { Container } from './Atoms'
import Grid from '@material-ui/core/Grid'
import Card from './Moleculas/Card'
import FiltroDropdown from './FiltroDropdown'

const API_URL = 'https://cfp.olimpo.tic.ufrj.br/wp-json/wp/v2'

const hardcoded = {
	local: 'Universidade Federal do Rio de Janeiro',
	tipo: 'Ação',
	titulo: 'Título',
	vagas: '00',
	cargahoraria: '00h',
	nivel: 'Nível',
	categoria: 'Categoria',
}

/* const listCards = hardcoded.map(topic => (
	<Grid item xs={12} sm={6}>
		<Card
			local={hardcoded.local}
			tipo={hardcoded.tipo}
			titulo={hardcoded.titulo}
			vagas={hardcoded.vagas}
			cargahoraria={hardcoded.cargahoraria}
			nivel={hardcoded.nivel}
			categoria={hardcoded.categoria}
		/>
	</Grid>
)) */

function CardGallery() {
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`${API_URL}/acoes`)
			setData(result.data)
		}
		fetchData()
	}, [])

	return (
		<Container id='acoes'>
			<FiltroDropdown>
				Ações Formativas <span />
			</FiltroDropdown>
			<Grid container spacing={5} style={{ padding: '5px 15px 30px 15px' }}>
				{data.map(item => (
					<Grid item xs={12} sm={6}>
						<Card
							local={item.local || hardcoded.local}
							tipo={hardcoded.tipo}
							titulo={He.decode(
								item.title.rendered.replace(/(<([^>]+)>)/gi, '')
							)}
							vagas={item.acf.vagas || hardcoded.vagas}
							cargahoraria={item.cargahoraria || hardcoded.cargahoraria}
							nivel={item.nivel || hardcoded.nivel}
							categoria={item.categoria || hardcoded.categoria}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default CardGallery
