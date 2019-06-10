import React, { useState, useEffect } from 'react'
import He from 'he'
import axios from 'axios'
import { Container } from './Atoms'
import Grid from '@material-ui/core/Grid'
import Card from './Moleculas/Card'
import FiltroDropdown from './FiltroDropdown'

const API_URL = 'https://cfp.olimpo.tic.ufrj.br/wp-json/wp/v2'

const hardcoded = {
	local: '',
	tipo: '',
	titulo: '',
	vagas: '',
	cargahoraria: '',
	nivel: '',
	categoria: '',
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
							local={item.acf.instituicao.post_title}
							tipo={item.acf.acao_tipo.name}
							titulo={He.decode(
								item.title.rendered.replace(/(<([^>]+)>)/gi, '')
							)}
							vagas={item.acf.vagas}
							cargahoraria={item.cargahoraria}
							nivel={item.nivel}
							categoria={item.categoria}
							area={item.acf.area[0].name}
							natureza={item.acf.natureza[0].name}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default CardGallery
