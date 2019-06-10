import React from 'react'
import styled from 'styled-components'
import { Palette } from '../utils/Theme'
import { Container, Texto, SubTexto, Titulo, Subtitulo } from './Atoms'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Alarm from '@material-ui/icons/Alarm'
import School from '@material-ui/icons/School'

const StyAccountCircle = styled(AccountCircle)``
const StyAlarm = styled(Alarm)``
const StySchool = styled(School)``

const CContent = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 30px;
  > strong {
    margin-right: 5px;
  }
	${StyAccountCircle} {
		padding-right: 7px;
	}
	${StyAlarm}, ${StySchool} {
		padding-right: 7px;
		padding-left: 15px;
	}
  ${StyAccountCircle}, ${StyAlarm}, ${StySchool} {
    color: ${Palette.primary.medium};
  }
`

const Codigo = styled.div`
	color: ${Palette.primary.medium};
	margin-top: 10px;
	font-size: 18px;
	font-weight: 500;
`

const Natureza = styled.div`
	color: ${Palette.primary.medium};
	margin-bottom: 45px;
`

const InfoBasica = styled.div``

export default ({ props, children }) => (
	<Container>
		<Texto style={{ paddingBottom: '90px' }}>
			{children}
			<Titulo>
				Quisque vehicula porttitor metus, sit amet interdum nisi. Nullam augue
				velit, pulvinar ut hendrerit vitae, auctor nec risus. <span />
				<Codigo>Código: ABC000</Codigo>
			</Titulo>
			<InfoBasica>
				<CContent>
					<StyAccountCircle /> <strong>Vagas: </strong> 100
					<StyAlarm /> <strong>Carga horária: </strong> 120h
					<StySchool /> <strong>Natureza: </strong> Pós-Graduação
				</CContent>
				<Natureza>
					<strong>Natureza</strong> | Universidade
				</Natureza>
			</InfoBasica>

			<p>
				Quisque vehicula porttitor metus, sit amet interdum nisi. Nullam augue
				velit, pulvinar ut hendrerit vitae, auctor nec risus. Lorem ipsum dolor
				sit amet, consectetur adipiscing elit. Nulla placerat orci sit amet
				placerat commodo. Nulla at sollicitudin nibh. Quisque bibendum sagittis
				vulputate. Suspendisse sapien leo, consequat eu orci at, tincidunt
				molestie eros. Integer mattis nibh nec sapien congue faucibus. In
				interdum elementum sem viverra congue. Interdum et malesuada fames ac
				ante ipsum primis in faucibus. Morbi porttitor enim sed molestie
				euismod. Mauris fermentum cursus ex eget interdum. Suspendisse eget
				euismod odio. Orci varius natoque penatibus et magnis dis parturient
				montes, nascetur ridiculus mus. Nulla pharetra suscipit lacinia. Duis
				risus quam, placerat non eleifend quis, varius in ante. Vestibulum
				vestibulum eleifend erat sed malesuada. Ut efficitur maximus velit nec
				ultricies. Integer tempus diam sed euismod pellentesque. Donec
				sollicitudin gravida felis, a bibendum arcu elementum molestie. Nullam
				vulputate dapibus risus, vel laoreet mi consequat sed. Vestibulum
				lacinia arcu massa, at interdum lacus ullamcorper nec. Fusce lobortis,
				nisi eget bibendum finibus, odio felis dignissim elit, vitae blandit
				neque ipsum porttitor orci.
			</p>
			<SubTexto>
				<Subtitulo>
					Ementa <span />
				</Subtitulo>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
					tortor pretium, blandit lectus non, condimentum mi. Maecenas
					condimentum sapien ac aliquet dictum. Morbi accumsan maximus enim, eu
					congue lacus viverra vitae. Aliquam nec risus in nunc auctor eleifend
					quis vel dui. Vestibulum a metus gravida, hendrerit lectus ac,
					eleifend magna. Nulla tempor diam at risus consequat, pulvinar
					scelerisque nunc tincidunt. Maecenas ac rhoncus ante. Proin euismod
					egestas enim vitae mollis. Aenean vel sapien ut urna vulputate
					consequat. Cras vitae orci sem.
				</p>
			</SubTexto>
			<SubTexto>
				<Subtitulo>
					Pré-Requisitos <span />
				</Subtitulo>
				<p>
					<ul>
						<li>Quisque vehicula porttitor metus, sit amet interdum nisi.</li>
						<li>Quisque vehicula porttitor metus, sit amet interdum nisi.</li>
						<li>Quisque vehicula porttitor metus, sit amet interdum nisi.</li>
					</ul>
				</p>
			</SubTexto>
		</Texto>
	</Container>
)
