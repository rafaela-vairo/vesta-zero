import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MaskedInput from 'react-text-mask'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import PropTypes from 'prop-types'
import { Container, ContainerAlt, Titulo } from './Atoms'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
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
		<ContainerAlt id='contato'>
			<Container>
				<Titulo>
					Contato <span />
				</Titulo>

				<form className={classes.container} noValidate autoComplete='off'>
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
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								id='assunto'
								label='Assunto'
								className={classes.textField}
								margin='normal'
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor='formatted-text-mask-input'>
									Telefone
								</InputLabel>
								<Input id='telefone' inputComponent={TextMaskCustom} />
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
							/>
						</Grid>
					</Grid>
				</form>
			</Container>
		</ContainerAlt>
	)
}

export default TextFields
