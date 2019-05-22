import React, { useState } from 'react'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Divider from '@material-ui/core/Divider'

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
	border-bottom: 1px solid #ccc !important;
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
		border-bottom: 1px solid #999;
	}

	${Item}:last-child, ${Nester}:last-child {
		border-bottom: none !important;
		padding-bottom: 45px;
	}
`

const Less = styled(ExpandLess)`
	color: red;
`

const More = styled(ExpandMore)`
	color: red;
`

function MenuListComposition() {
	const [open, setOpen] = useState(false)
	const [active, inactive] = useState(false)

	function openClick() {
		setOpen(!open)
	}

	function activeClick() {
		inactive(!active)
	}

	return (
		<Root>
			<PaperBox boxShadow={3} bgcolor='background.paper'>
				<MenuList>
					<Item button button>
						Menu
					</Item>
					<Item button button>
						Estrutura
					</Item>
					<Nester onClick={openClick}>
						Ações Formativas
						{open ? <Less /> : <More />}
					</Nester>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Nested button>Item</Nested>
						<Nested button>Item</Nested>
						<Nested button>Item</Nested>
						<Nested button>Item</Nested>
					</Collapse>
					<Item button button>
						Contato
					</Item>
				</MenuList>
			</PaperBox>
		</Root>
	)
}

export default MenuListComposition
