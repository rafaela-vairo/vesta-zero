import React, { useState } from 'react'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { Logo } from '../components/Atoms'
import { Palette } from '../utils/Theme'

const Root = styled.div`
	display: flex;
	position: fixed;
	top: 0%;
	height: 100vh;
	z-index: 9999;
	text-transform: lowercase;
`

const Item = styled(MenuItem)`
	margin-left: 0 !important;
	margin-right: 20px !important;
`

const Nester = styled(MenuItem)`
	justify-content: space-between !important;
	margin-right: 20px !important;
`
const Nested = styled(MenuItem)`
	margin-left: 30px !important;
	margin-right: 0 !important;
	border-bottom: 1px solid ${Palette.grey.light} !important;
`

const PaperBox = styled(Box)`
	padding: 0 !important;
	position: absolute;
	top: 50%;
	width: 220px;
	max-height: 100vh;
	overflow-y: auto;
	transform: translateY(-50%);
	border-radius: 0 3px 3px 0 !important;
	padding: 20px;

	${Item}, ${Nester}, ${Nested} {
		padding-left: 30px !important;
		letter-spacing: 1px;
		font-family: 'Alegreya Sans SC Regular' !important;
		font-size: 19px !important;
		font-weight: 500;
		&:hover {
			font-weight: 700;
		}
		border-bottom: 1px solid ${Palette.grey.medium} ;
	}

	${Item}:last-child, ${Nester}:last-child {
		border-bottom: none !important;
		padding-bottom: 26px;
	}
`

const Less = styled(ExpandLess)`
	color: ${Palette.primary.medium};
`

const More = styled(ExpandMore)`
	color: ${Palette.primary.medium};
`

function MenuListComposition() {
	const [open, setOpen] = useState(false)

	function openClick() {
		setOpen(!open)
	}

	return (
		<Root>
			<PaperBox boxShadow={4} bgcolor='background.paper'>
				<Logo />
				<MenuList>
					<Item component='button' href='#sobre'>
						Sobre
					</Item>
					<Item component='button' href='#estrutura'>
						Estrutura
					</Item>
					<Nester component='button' onClick={openClick} href='#acoes'>
						Ações Formativas
						{open ? <Less /> : <More />}
					</Nester>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Nested component='button' href='#item'>
							Cursos
						</Nested>
						<Nested component='button' href='#item'>
							Disciplinas
						</Nested>
						<Nested component='button' href='#item'>
							Projetos
						</Nested>
						<Nested component='button' href='#item'>
							Eventos
						</Nested>
						<Nested component='button' href='#item'>
							Espaços
						</Nested>
						<Nested component='button' href='#item'>
							Equipamentos
						</Nested>
					</Collapse>
					<Item component='button' href='#contato'>
						Contato
					</Item>
				</MenuList>
			</PaperBox>
		</Root>
	)
}

export default MenuListComposition
