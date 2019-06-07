import React, { useState, useEffect } from 'react'
import He from 'he'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Card from './Moleculas/Card'

const API_URL = 'https://cfp.olimpo.tic.ufrj.br/wp-json/wp/v2'

function Instituicoes() {
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`${API_URL}/instituicoes`)
			setData(result.data)
		}
		fetchData()
	}, [])

	return data
}

function Cards() {
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`${API_URL}/acoes`)
			setData(result.data)
		}
		fetchData()
	}, [])

	return (
		<div>
			{data.map(item => (
				<Grid item xs={12} sm={6}>
					<Card
						local={item.local}
						tipo={item.type}
						titulo={He.decode(item.title.rendered.replace(/(<([^>]+)>)/gi, ''))}
						vagas={item.acf.vagas}
						cargahoraria={item.cargahoraria}
						nivel={item.nivel}
						categoria={item.categoria}
					/>
				</Grid>
			))}
		</div>
	)
}

export { Cards }
