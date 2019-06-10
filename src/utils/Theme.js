import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const light = 400;
const medium = 500;
const dark = 600;

export const Palette = {
	grey: {
		light: grey[light],
		medium: grey[medium],
		dark: grey[dark]
	},
	primary: {
		light: '#f74342',
		medium: '#ED1C24',
		dark: '#ce0015'
	},
	secondary: {
		light: '#ebd0ae',
		medium: '#B6966A',
		dark: '#8b6833'
	},
	defaultBG: '#ededed',
	altBG: '#FFFFFF',
	transparent: 'rgb(255, 255, 255, 0)'
};

export const Theme = createMuiTheme({
	typography: {
		fontSize: 14,
		fontFamily: [
			'Alegreya Sans',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(',')
	},
	props: {
		MuiButtonBase: {
			disableRipple: true,
			'&:hover': {
				backgroundColor: Palette.transparent
			}
		}
	}
});
