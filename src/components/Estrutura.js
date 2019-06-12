import React, { useState, useEffect } from 'react'
import {
	Container,
	ContainerAlt,
	Texto,
	SubTexto,
	Titulo,
	Subtitulo,
} from './Atoms'
import axios from 'axios'
import styled from 'styled-components'

const API_URL =
	'https://cfp.olimpo.tic.ufrj.br/wp-json/acf/v3/options/estrutura'

const PreP = styled.p`
	white-space: pre-wrap;
`

function Sobre() {
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`${API_URL}`)
			setData(result.data.acf)
		}
		fetchData()
	}, [])

	var estrutura =
		typeof data.estrutura == 'string'
			? data.estrutura.replace(/(<([^>]+)>)/gi, '')
			: ''

	var estruturaUFRJ =
		typeof data.estrutura_na_ufrj == 'string'
			? data.estrutura_na_ufrj.replace(/(<([^>]+)>)/gi, '')
			: ''

	return (
		<ContainerAlt id='estrutura'>
			<Container>
				<Texto>
					<Titulo>
						Estrutura <span />
					</Titulo>
					<PreP>{estrutura}</PreP>
					<SubTexto>
						<Subtitulo>
							Estrutura na UFRJ <span />
						</Subtitulo>
						<PreP>{estruturaUFRJ}</PreP>
					</SubTexto>
				</Texto>
			</Container>
		</ContainerAlt>
	)
}

export default Sobre
