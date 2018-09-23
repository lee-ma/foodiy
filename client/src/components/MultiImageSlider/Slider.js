import React, { Component } from 'react'
import styled from 'styled-components'
import Slide from './Slide'
import Dots from './Dots'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

const StyledSlider  = styled('div')`
  position: relative;
  width: 100%;
  display: inline-block;
  margin: 0 auto;
  height: 47.5vh;
  @media(min-width:1440px) {
    height: 62.5vh
  }
  overflow: hidden;
  white-space: nowrap;
`

const SlideWrapper = styled('div')`
  position: relative;
  height: 100%;
  width: 100%;
`

export default class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: props.images,
      currentIndex: 0,
      translateValue: 0,
      hidden: false
    }
  }

  goToPrevSlide = () => {
    if(this.state.currentIndex === 0) {
      return
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + (this.slideWidth())
    }))
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }))
  }

  handleDotClick = i => {
    const { index } = this.props
    if(i === index) return

    if(i > index) {
      this.setState({
        translateValue: (-(i * this.slideWidth()))
      })
    }
    else {
      this.setState(prevState => ({
        translateValue: prevState.translateValue + (this.state.currentIndex - i) * (this.slideWidth())
      }))
    }

    this.setState({
      currentIndex: i
    })
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth + 1
  }

  hoverSlider = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  render() {
    const { translateValue, currentIndex, images, hidden } = this.state
    return (
      <StyledSlider onMouseLeave={() => this.hoverSlider()} onMouseEnter={() => this.hoverSlider()}>

        <SlideWrapper
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s',
          }}>
          {
            this.state.images.map((image, i) => (
              <Slide key={i} image={image}/>
            ))
          }
        </SlideWrapper>
        <Dots
          visible={hidden}
          index={currentIndex}
          images={images}
          dotClick={this.handleDotClick}
        />

        {currentIndex && <LeftArrow
          visible={hidden}
          goToPrevSlide={this.goToPrevSlide}
        />}

        {!(currentIndex === images.length - 1) && <RightArrow
          visible={hidden}
          goToNextSlide={this.goToNextSlide}
        />}

      </StyledSlider>
    )
  }
}