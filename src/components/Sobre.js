import React from 'react'
import {
	Container,
	Texto,
	SubTexto,
	Titulo,
	Subtitulo,
	Anchor,
} from './Atoms'

export default ({ children }) => (
	<Container id='sobre'>
		<Texto>
			<Titulo>
				Sobre <span />
			</Titulo>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
				tortor pretium, blandit lectus non, condimentum mi. Maecenas condimentum
				sapien ac aliquet dictum. Morbi accumsan maximus enim, eu congue lacus
				viverra vitae. Aliquam nec risus in nunc auctor eleifend quis vel dui.
				Vestibulum a metus gravida, hendrerit lectus ac, eleifend magna. Nulla
				tempor diam at risus consequat, pulvinar scelerisque nunc tincidunt.
				Maecenas ac rhoncus ante. Proin euismod egestas enim vitae mollis.
				Aenean vel sapien ut urna vulputate consequat. Cras vitae orci sem.
			</p>
			<p>
				Integer eu faucibus sapien. Sed aliquam volutpat orci, nec elementum
				lorem aliquam fringilla. Integer venenatis egestas magna a vestibulum.
				Nullam magna augue, vulputate in eros eu, placerat pellentesque neque.
				Suspendisse aliquam lorem nec convallis vehicula. Proin vestibulum
				malesuada sem, nec feugiat justo consequat vel. Quisque rutrum, tellus
				vitae consectetur lobortis, tellus augue dapibus urna, egestas posuere
				ipsum risus quis velit. Cras sed ex dolor. Nulla ligula odio, lacinia eu
				lacinia nec, sollicitudin efficitur odio.
			</p>

			<SubTexto>
				<Subtitulo>
					Histórico <span />
				</Subtitulo>
				<p>
					Curabitur ullamcorper lectus orci, ac lacinia dui consectetur vitae.
					Proin metus nunc, fermentum eget placerat et, dictum a risus. Sed id
					augue sapien. Integer sed quam ut dolor maximus vestibulum sit amet et
					urna. Suspendisse potenti. Aenean placerat nec orci at volutpat.
					Pellentesque dapibus laoreet justo ac posuere. Curabitur sit amet arcu
					aliquet, tempus arcu id, placerat est. Maecenas vel faucibus ex.
					Pellentesque habitant morbi tristique senectus et netus et malesuada
					fames ac turpis egestas. Fusce convallis vehicula ante eget dignissim.
				</p>
				<p>
					Quisque vehicula porttitor metus, sit amet interdum nisi. Nullam augue
					velit, pulvinar ut hendrerit vitae, auctor nec risus. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Nulla placerat orci sit
					amet placerat commodo. Nulla at sollicitudin nibh. Quisque bibendum
					sagittis vulputate. Suspendisse sapien leo, consequat eu orci at,
					tincidunt molestie eros. Integer mattis nibh nec sapien congue
					faucibus. In interdum elementum sem viverra congue. Interdum et
					malesuada fames ac ante ipsum primis in faucibus. Morbi porttitor enim
					sed molestie euismod. Mauris fermentum cursus ex eget interdum.
					Suspendisse eget euismod odio. Orci varius natoque penatibus et magnis
					dis parturient montes, nascetur ridiculus mus. Nulla pharetra suscipit
					lacinia. Duis risus quam, placerat non eleifend quis, varius in ante.
					Vestibulum vestibulum eleifend erat sed malesuada. Ut efficitur
					maximus velit nec ultricies. Integer tempus diam sed euismod
					pellentesque. Donec sollicitudin gravida felis, a bibendum arcu
					elementum molestie. Nullam vulputate dapibus risus, vel laoreet mi
					consequat sed. Vestibulum lacinia arcu massa, at interdum lacus
					ullamcorper nec. Fusce lobortis, nisi eget bibendum finibus, odio
					felis dignissim elit, vitae blandit neque ipsum porttitor orci.
				</p>
			</SubTexto>
			<SubTexto>
				<Subtitulo>
					Documentos e Resoluções <span />
				</Subtitulo>
				<p>
					<Anchor href=''>
						Consectetur adipiscing elit donec quis tortor pretium
					</Anchor>
					<Anchor href='https://developer.mozilla.org/en-US/docs/Web/CSS/line-break'>
						Integer tempus diam sed sollicitudin gravida felis
					</Anchor>
					<Anchor href='https://css-tricks.com/injecting-line-break/'>
						Fusce lobortis, nisi eget bibendum finibus, odio felis elit
					</Anchor>
				</p>
			</SubTexto>
		</Texto>
	</Container>
)
