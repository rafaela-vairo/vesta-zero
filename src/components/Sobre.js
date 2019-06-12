import React, { useState, useEffect } from 'react'
import { Container, Texto, SubTexto, Titulo, Subtitulo, Anchor } from './Atoms'
import axios from 'axios'
import styled from 'styled-components'

const API_URL = 'https://cfp.olimpo.tic.ufrj.br/wp-json/acf/v3/options/sobre'

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

	console.log(data)

	var sobre =
		typeof data.sobre == 'string' ? data.sobre.replace(/(<([^>]+)>)/gi, '') : ''

	var historico =
		typeof data.historico == 'string'
			? data.historico.replace(/(<([^>]+)>)/gi, '')
			: ''

	var docintro =
		typeof data.documentos == 'object'
			? data.documentos.intro
					.replace(/(<([^>]+)>)/gi, '')
					.replace('\r\n\r\n\r\n', '')
			: ''

	var files = typeof data.documentos == 'object' ? data.documentos.files : []

	console.log(typeof data.documentos == 'object' ? data.documentos.files : [])

	return (
		<Container id='sobre'>
			<Texto>
				<Titulo>
					Sobre <span />
				</Titulo>
				<PreP>{sobre}</PreP>
				<SubTexto>
					<Subtitulo>
						Histórico <span />
					</Subtitulo>
					<PreP>{historico}</PreP>
				</SubTexto>
				<SubTexto>
					<Subtitulo>
						Documentos e Resoluções <span />
					</Subtitulo>
					<p>
						<PreP>{docintro}</PreP>
						{files.map(item => (
							<Anchor href={item.file.url}>{item.file.title}</Anchor>
						))}
					</p>
				</SubTexto>
			</Texto>
		</Container>
	)
}

export default Sobre
