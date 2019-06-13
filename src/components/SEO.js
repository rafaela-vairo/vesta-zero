import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import favicon from '../assets/images/logo.ico'

function SEO({ description, lang, meta, keywords, title }) {
	const site = {
		title: 'Complexo de Formação de Professores',
		description: '',
	}

	const metaDescription = description || site.description

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={site.title}
			titleTemplate={`%s | ${site.description}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
			]
				.concat(
					keywords.length > 0
						? {
								name: `keywords`,
								content: keywords.join(`, `),
						  }
						: []
				)
				.concat(meta)}
			link={[
				{
					rel: `shortcut icon`,
					href: `${favicon}`,
					type: `image/x-icon`,
				},
				{
					rel: `stylesheet`,
					href: `https://fonts.googleapis.com/icon?family=Material+Icons`,
				},
				{
					rel: `stylesheet`,
					href: `https://use.fontawesome.com/releases/v5.0.10/css/all.css`,
					integrity:
						'sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg',
					crossorigin: 'anonymous',
				},
			]}
		/>
	)
}

SEO.defaultProps = {
	lang: `pt`,
	meta: [],
	keywords: [],
	description: ``,
}

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	keywords: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string.isRequired,
}

export default SEO
