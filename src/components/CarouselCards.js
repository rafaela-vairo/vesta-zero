import React from 'react'
import Carousel from 'react-alice-carousel'
import '../styles/carousel.scss'
import Button from '@material-ui/core/Button'
import ArrowBack from '@material-ui/icons/ChevronLeft'
import ArrowForward from '@material-ui/icons/ChevronRight'
import styled from 'styled-components'
import { Palette } from '../utils/Theme'

const SlideContainer = styled.div`
	width: 100%;
`

const SlideButtonLeft = styled(Button)`
	font-size: 1.5rem !important;
	color: ${Palette.primary.medium} !important;
	span {
		justify-content: flex-start;
		padding-left: 0 !important;
	}
`
const SlideButtonRight = styled(Button)`
	font-size: 1.5rem !important;
	color: ${Palette.primary.medium} !important;
	span {
		justify-content: flex-end;
		padding-right: 0rem;
	}
`
const Buttons = styled.div`
	display: flex;
	width: auto;
	z-index: 999;
	align-items: center;
	justify-content: start;
`

const Dot = styled.span`
	font-weight: 700;
	display: inline-block;
	width: 18px !important;
	height: 18px !important;
	cursor: pointer;
	text-align: center;
	line-height: 18px;
	background-color: rgba(0, 0, 0, 0);
	border: 2px solid rgba(0, 0, 0, 0);
	color: ${Palette.primary.medium};
	&.__active,
	&:hover {
		border-radius: 3px;
		border: 2px solid ${Palette.grey.medium};
	}
	@media (min-width: 721px) {
		width: 15px;
		height: 15px;
	}
	&:not(:last-child) {
		@media (min-width: 721px) {
			margin-right: 14px;
		}
		margin-right: 0;
	}
`

const Dots = styled.ul`
	padding: 0;
`

export default class Gallery extends React.Component {
	items = [1, 2, 3]

	state = {
		currentIndex: 0,
		responsive: { 1024: { items: 1 } },
	}

	slidePrevPage = () => {
		const currentIndex = this.state.currentIndex - this.state.itemsInSlide
		this.setState({ currentIndex })
	}

	slideNextPage = () => {
		const currentIndex = this.state.currentIndex + this.state.itemsInSlide
		this.setState({ currentIndex })
	}

	handleOnSlideChange = event => {
		const { itemsInSlide, item } = event
		this.setState({ itemsInSlide, currentIndex: item })
	}

	slideTo = i => this.setState({ currentIndex: i })

	thumbItem = (item, i) => {
		const className = this.state.currentIndex === i ? '__active' : ''
		return (
			<Dot className={className} onClick={() => this.slideTo(i)}>
				{item}
			</Dot>
		)
	}

	render() {
		const { currentIndex, responsive } = this.state

		return (
			<div>
				<SlideContainer>
					<Carousel
						mouseDragEnabled
						slideToIndex={currentIndex}
						responsive={responsive}
						buttonsDisabled
						dotsDisabled
						onInitialized={this.handleOnSlideChange}
						onSlideChanged={this.handleOnSlideChange}
						onResized={this.handleOnSlideChange}
					>
						{this.props.children}
					</Carousel>
				</SlideContainer>
				<Buttons>
					<SlideButtonRight onClick={this.slidePrevPage}>
						<ArrowBack />
					</SlideButtonRight>
					<Dots>{this.items.map(this.thumbItem)}</Dots>
					<SlideButtonLeft onClick={this.slideNextPage}>
						<ArrowForward />
					</SlideButtonLeft>
				</Buttons>
			</div>
		)
	}
}
