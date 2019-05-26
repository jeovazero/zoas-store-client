// @flow
import React from 'react'
import Slide from '@material-ui/core/Slide'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'

type Classes = {
  root: mixed,
  wrapper: mixed,
  arrow: mixed,
  arrowRight: mixed,
  arrowLeft: mixed,
  cover: mixed,
  indicatorContainer: mixed,
  indicator: mixed,
  indicatorActive: mixed
}

type Props = {
  /** A list of images */
  images: string[],
  classes: Classes
}

const styles = theme => ({
  arrow: {
    display: 'inline',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '24px',
    height: '24px',
    margin: 'auto',
    zIndex: 10,
    borderRadius: '8px',
    backgroundColor: theme.palette.primary.contrastText,
    cursor: 'pointer'
  },
  arrowRight: {
    right: '20px'
  },
  arrowLeft: {
    left: '20px'
  },
  wrapper: {
    display: 'flex',
    position: 'relative',
    minWidth: '200px',
    minHeight: '200px'
  },
  root: {
    display: 'flex',
    padding: theme.spacing.unit * 2,
    minWidth: '200px',
    position: 'relative',
    justifyContent: 'center'
  },
  cover: {
    minWidth: '200px',
    minHeight: '200px',
    position: 'absolute',
    left: 0,
    top: 0
  },
  indicatorContainer: {
    display: 'inline-flex',
    position: 'absolute',
    bottom: '10px',
    left: 0,
    right: 0,
    justifyContent: 'center'
  },
  indicator: {
    width: '12px',
    height: '12px',
    borderRadius: '8px',
    backgroundColor: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.light,
    borderWidth: '2px',
    borderStyle: 'solid',
    marginLeft: '2px',
    marginRight: '2px',
    boxSizing: 'border-box'
  },
  indicatorActive: {
    backgroundColor: theme.palette.primary.light
  }
})

const handlerPrevious = (val, set) => () => {
  if (val - 1 >= 0) set(val - 1)
}

const handlerNext = (val, set, max) => () => {
  if (val + 1 < max) set(val + 1)
}

const Carousel = (props: Props) => {
  const { classes, images } = props
  const [current, setCurrent] = React.useState(0)

  return (
    <Paper className={classes.root}>
      <div
        className={[classes.arrow, classes.arrowLeft].join(' ')}
        onClick={handlerPrevious(current, setCurrent)}
        data-testid='arrow-left'
      >
        <KeyboardArrowLeft />
      </div>
      <Card className={classes.wrapper}>
        {images.map((im, i) => (
          <Slide
            direction='left'
            mountOnEnter
            unmountOnExit
            appear
            in={i === current}
            key={i}
          >
            <CardMedia image={im} className={classes.cover} title='image' />
          </Slide>
        ))}
      </Card>
      <div
        className={[classes.arrow, classes.arrowRight].join(' ')}
        onClick={handlerNext(current, setCurrent, images.length)}
        data-testid='arrow-right'
      >
        <KeyboardArrowRight />
      </div>
      <div className={classes.indicatorContainer}>
        {images.map((im, i) => (
          <div
            className={[
              classes.indicator,
              i === current ? classes.indicatorActive : ''
            ].join(' ')}
            key={`indicator-${i}`}
          />
        ))}
      </div>
    </Paper>
  )
}

Carousel.defaultProps = {
  images: []
}

export const CarouselComponent = Carousel

export default withStyles(styles)(Carousel)
