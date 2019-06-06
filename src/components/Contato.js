import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import MaskedInput from 'react-text-mask'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import PropTypes from 'prop-types'
import { Container, ContainerAlt, Titulo } from './Atoms'
import Grid from '@material-ui/core/Grid'
import { Palette } from '../utils/Theme'
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Mail from '@material-ui/icons/MailOutline'
import Phone from '@material-ui/icons/Phone'

const StyAccountCircle = styled(AccountCircle)``
const StyMail = styled(Mail)``
const StyPhone = styled(Phone)``

const ContatoInfo = styled.div`
	a, p {
		margin-block-start: 0;
		margin-block-end: 0;
		margin-bottom: 15px;
		display: inline-flex;
		padding: 0px;
		text-align: center;
		${StyAccountCircle}, ${StyMail}, ${StyPhone} {
		padding: 0 7px 0 0;
		color: ${Palette.primary.medium};
		}
	}
	a {
		transition-property: color;
  	transition-duration: 0.3s;
		color: black;
		text-decoration: none;
		&:hover {
			color: ${Palette.primary.medium};
		}
	}
`

const StyButton = styled(Button)`
	font-weight: 700 !important;
	border-radius: 3px !important;
`

const useStyles = makeStyles(theme => ({
	root: {
		'& label': {
			fontWeight: 700,
			color: 'black',
		},
		'& label.Mui-focused': {
			color: 'black',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#ed1c24',
		},
		'& .MuiButton-outlinedPrimary': {
			color: 'black',
			border: '1px solid black',
		},
		'& .MuiButton-outlinedPrimary:hover': {
			color: 'black',
			border: '1px solid #ed1c24',
		},
	},
	textField: {
		width: '100%',
	},
	formControl: {
		marginTop: '16px',
		marginBottom: '8px',
		width: '100%',
	},
}))

function TextMaskCustom(props) {
	const { inputRef, ...other } = props

	return (
		<MaskedInput
			{...other}
			ref={ref => {
				inputRef(ref ? ref.inputElement : null)
			}}
			mask={[
				'(',
				/[1-9]/,
				/\d/,
				')',
				' ',
				/\d/,
				/\d/,
				/\d/,
				/\d/,
				/\d/,
				'-',
				/\d/,
				/\d/,
				/\d/,
				/\d/,
			]}
			placeholderChar={'\u2000'}
		/>
	)
}

TextMaskCustom.propTypes = {
	inputRef: PropTypes.func.isRequired,
}

function TextFields() {
	const classes = useStyles()
	return (
		<ContainerAlt id='contato' className={classes.root}>
			<Container>
				<Titulo>
					Contato <span />
				</Titulo>
				<form
					className={classes.container}
					noValidate
					autoComplete='off'
					action='https://formspree.io/luizggsantos@gmail.com'
					method='POST'
				>
					<Grid container spacing={5} style={{ padding: '5px 15px 30px 15px' }}>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id='nome'
								label='Nome'
								className={classes.textField}
								margin='normal'
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id='email'
								label='Email'
								className={classes.textField}
								margin='normal'
								type='email'
								name='_replyto'
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id='assunto'
								label='Assunto'
								className={classes.textField}
								margin='normal'
								type='text'
								name='mensagem'
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor='formatted-text-mask-input'>
									Telefone
								</InputLabel>
								<Input
									id='telefone'
									inputComponent={TextMaskCustom}
									type='tel'
									name='telefone'
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<TextField
								multiline
								required
								id='mensagem'
								label='Mensagem'
								rows='8'
								className={classes.textField}
								margin='normal'
								type='text'
								name='name'
							/>
						</Grid>
						<Grid item xs={12}>
							<StyButton variant='outlined' color='primary' type='submit'>
								Enviar
							</StyButton>
						</Grid>
						<Grid item xs={12}>
							<ContatoInfo>
								<p>
									<StyAccountCircle />
									Fulano Sicrano
								</p>
								<br />
								<a href='mailto:fulanosicrano@email.com subject=Assunto%20do%20mail'>
									<StyMail />
									nome@email.com
								</a>
								<br />
								<a href='tel:2100000000'>
									<StyPhone />
									(21)0000-0000
								</a>
							</ContatoInfo>
						</Grid>
					</Grid>
				</form>
			</Container>
		</ContainerAlt>
	)
}

export default TextFields
