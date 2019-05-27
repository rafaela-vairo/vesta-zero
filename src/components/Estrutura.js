import React from 'react'
import {
	Container,
	ContainerAlt,
	Texto,
	SubTexto,
	Titulo,
	Subtitulo,
	SubtituloB,
	Span,
	LogoExt,
	CenterVertical,
} from './Atoms'

import LogoA from '../assets/images/logos/logoUFF.jpg'
import LogoB from '../assets/images/logos/logoUERJ.jpg'
import LogoC from '../assets/images/logos/logoUFRRJ.jpg'
import LogoD from '../assets/images/logos/logoPedroII.jpg'

export default ({ children }) => (
	<ContainerAlt id='estrutura'>
		<Container>
			<Texto>
				<Titulo>
					Estrutura <span />
				</Titulo>
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
				<p>
					Integer eu faucibus sapien. Sed aliquam volutpat orci, nec elementum
					lorem aliquam fringilla. Integer venenatis egestas magna a vestibulum.
					Nullam magna augue, vulputate in eros eu, placerat pellentesque neque.
					Suspendisse aliquam lorem nec convallis vehicula. Proin vestibulum
					malesuada sem, nec feugiat justo consequat vel. Quisque rutrum, tellus
					vitae consectetur lobortis, tellus augue dapibus urna, egestas posuere
					ipsum risus quis velit. Cras sed ex dolor. Nulla ligula odio, lacinia
					eu lacinia nec, sollicitudin efficitur odio.
				</p>
				<SubTexto>
					<Subtitulo>
						Coordenação Geral <span />
					</Subtitulo>
					<p>
						Quisque vehicula porttitor metus, sit amet interdum nisi. Nullam
						augue velit, pulvinar ut hendrerit vitae, auctor nec risus. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat
						orci sit amet placerat commodo. Nulla at sollicitudin nibh. Quisque
						bibendum sagittis vulputate. Suspendisse sapien leo, consequat eu
						orci at, tincidunt molestie eros. Integer mattis nibh nec sapien
						congue faucibus. In interdum elementum sem viverra congue. Interdum
						et malesuada fames ac ante ipsum primis in faucibus. Morbi porttitor
						enim sed molestie euismod. Mauris fermentum cursus ex eget interdum.
						Suspendisse eget euismod odio. Orci varius natoque penatibus et
						magnis dis parturient montes, nascetur ridiculus mus. Nulla pharetra
						suscipit lacinia. Duis risus quam, placerat non eleifend quis,
						varius in ante. Vestibulum vestibulum eleifend erat sed malesuada.
						Ut efficitur maximus velit nec ultricies. Integer tempus diam sed
						euismod pellentesque. Donec sollicitudin gravida felis, a bibendum
						arcu elementum molestie. Nullam vulputate dapibus risus, vel laoreet
						mi consequat sed. Vestibulum lacinia arcu massa, at interdum lacus
						ullamcorper nec. Fusce lobortis, nisi eget bibendum finibus, odio
						felis dignissim elit, vitae blandit neque ipsum porttitor orci.
					</p>
				</SubTexto>
				<SubTexto>
					<Subtitulo>
						Estrutura na UFRJ <span />
					</Subtitulo>
					<p>
						Quisque vehicula porttitor metus, sit amet interdum nisi. Nullam
						augue velit, pulvinar ut hendrerit vitae, auctor nec risus. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat
						orci sit amet placerat commodo. Nulla at sollicitudin nibh. Quisque
						bibendum sagittis vulputate. Suspendisse sapien leo, consequat eu
						orci at, tincidunt molestie eros. Integer mattis nibh nec sapien
						congue faucibus. In interdum elementum sem viverra congue. Interdum
						et malesuada fames ac ante ipsum primis in faucibus. Morbi porttitor
						enim sed molestie euismod. Mauris fermentum cursus ex eget interdum.
						Suspendisse eget euismod odio. Orci varius natoque penatibus et
						magnis dis parturient montes, nascetur ridiculus mus. Nulla pharetra
						suscipit lacinia. Duis risus quam, placerat non eleifend quis,
						varius in ante. Vestibulum vestibulum eleifend erat sed malesuada.
						Ut efficitur maximus velit nec ultricies. Integer tempus diam sed
						euismod pellentesque. Donec sollicitudin gravida felis, a bibendum
						arcu elementum molestie. Nullam vulputate dapibus risus, vel laoreet
						mi consequat sed. Vestibulum lacinia arcu massa, at interdum lacus
						ullamcorper nec. Fusce lobortis, nisi eget bibendum finibus, odio
						felis dignissim elit, vitae blandit neque ipsum porttitor orci.
					</p>
				</SubTexto>
				<SubTexto>
					<Subtitulo>
						Instituições Participantes <span />
					</Subtitulo>
					<SubtituloB>
						<Span>Ensino Superior</Span>
					</SubtituloB>
					<CenterVertical>
						<LogoExt src={LogoA} height='50px' />
						<LogoExt src={LogoB} height='120px' />
						<LogoExt src={LogoC} height='160px' />
					</CenterVertical>
				</SubTexto>
				<SubTexto>
					<SubtituloB>
						<Span>Educação Básica</Span>
					</SubtituloB>
					<CenterVertical>
						<LogoExt src={LogoD} height='160px' />
					</CenterVertical>
				</SubTexto>
			</Texto>
		</Container>
	</ContainerAlt>
)
