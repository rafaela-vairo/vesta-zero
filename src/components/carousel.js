import React from 'react'
import Carousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Button from '@material-ui/core/Button'
import ArrowBack from '@material-ui/icons/ChevronLeft'
import ArrowForward from '@material-ui/icons/ChevronRight'
import styled from 'styled-components'

const SlideContainer = styled.div`
	margin: 300px;
`

const SlideButtonLeft = styled(Button)`
	font-size: 1.5rem !important;
	min-width: 2rem !important;
	width: 2rem;
	height: 4rem;
	border-radius: 3px !important;
	span {
		justify-content: flex-start;
		padding-left: 0.2rem;
	}
	@media (min-width: 721px) {
		width: 8vw;
		span {
			padding-left: 0.6rem;
		}
	}
`
const SlideButtonRight = styled(Button)`
	font-size: 1.5rem !important;
	min-width: 2rem !important;
	width: 2rem;
	height: 4rem;
	border-radius: 3px !important;
	span {
		justify-content: flex-end;
		padding-right: 0.2rem;
	}
	@media (min-width: 721px) {
		width: 8vw;
		span {
			padding-right: 0.6rem;
		}
	}
`
const Buttons = styled.div`
	display: flex;
	position: relative;
	top: 400px;
	width: auto;
	z-index: 999;
	align-items: center;
	justify-content: space-between;
`

export default class Gallery extends React.Component {
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

	render() {
		const { currentIndex, responsive } = this.state

		return (
			<div>
				<Buttons>
					<SlideButtonRight
						variant='contained'
						color='primary'
						onClick={this.slidePrevPage}
					>
						<ArrowBack />
					</SlideButtonRight>
					<SlideButtonLeft
						variant='contained'
						color='primary'
						onClick={this.slideNextPage}
					>
						<ArrowForward />
					</SlideButtonLeft>
				</Buttons>
				<SlideContainer>
					<Carousel
						mouseDragEnabled
						slideToIndex={currentIndex}
						responsive={responsive}
						buttonsDisabled={true}
						onInitialized={this.handleOnSlideChange}
						onSlideChanged={this.handleOnSlideChange}
						onResized={this.handleOnSlideChange}
					>
						{this.props.children}
					</Carousel>
				</SlideContainer>
			</div>
		)
	}
}
