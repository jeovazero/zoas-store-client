// @flow
import React from 'react'
import { CardMedia, IconButton } from '@material-ui/core'
import { KeyboardArrowRight, KeyboardArrowLeft } from '@material-ui/icons'
import { styled } from '@material-ui/styles'

type Props = {
  /** A list of images */
  images: string[],
  /* A className */
  className?: string
}

const Root = styled('div')({
  display: 'inline-block',
  maxWidth: '480px',
  maxHeight: '480px'
})

const Wrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  boxSizing: 'border-box',
  padding: theme.spacing(2),
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}))

const Container = styled('div')(({ theme }) => ({
  width: '280px',
  height: '280px',
  boxShadow: '-5px 0 24px rgba(0, 0, 0, 0.08)',
  overflow: 'hidden',
  margin: 'auto'
}))

const Images = styled('div')(({ theme, current = 0, length }) => ({
  right: `${current * 280}px`,
  position: 'relative',
  width: `${length * 280}px`,
  height: '280px',
  transition: 'right ease 0.33s'
}))

const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundSize: 'contain'
}))

const Arrows = styled('div')({
  position: 'absolute',
  top: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxHeight: '24px',
  margin: 'auto'
})

const ImageWrapper = styled('div')(({ theme }) => ({
  width: '280px',
  height: '280px',
  boxSizing: 'border-box',
  padding: theme.spacing(2),
  display: 'inline-block'
}))

const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  padding: 0,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.light
  }
}))

const ArrowLeft = props => (
  <IconButtonStyled {...props}>
    <KeyboardArrowLeft />
  </IconButtonStyled>
)

const ArrowRight = props => (
  <IconButtonStyled {...props}>
    <KeyboardArrowRight />
  </IconButtonStyled>
)

const Control = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const Dot = styled('div')(({ status, theme }) => ({
  ...(status === 'active'
    ? {
      width: '16px',
      height: '16px',
      backgroundColor: theme.palette.primary.main
    }
    : {
      width: '12px',
      height: '12px',
      backgroundColor: theme.palette.primary.light
    }),
  borderRadius: '50%',
  margin: '0 4px',
  cursor: 'pointer'
}))

const Carousel = (props: Props) => {
  const { images, className } = props
  const [current, setCurrent] = React.useState(0)
  const handleLeft = () => setCurrent(Math.max(0, current - 1))
  const handleRight = () => setCurrent(Math.min(images.length - 1, current + 1))

  return (
    <Root className={className}>
      <Wrapper>
        {images.length > 1 && (
          <Arrows>
            <ArrowLeft onClick={handleLeft} aria-label='imagem anterior' />
            <ArrowRight onClick={handleRight} aria-label='próxima imagem' />
          </Arrows>
        )}
        <Container>
          <Images current={current} length={images.length}>
            {images.map((im, key) => (
              <ImageWrapper aria-label='imagem do produto' key={key}>
                <CardMediaStyled image={im} />
              </ImageWrapper>
            ))}
          </Images>
        </Container>
        {images.length > 1 && (
          <Control>
            {images.map((_, key) => (
              <Dot
                key={key}
                status={key === current ? 'active' : 'none'}
                onClick={() => setCurrent(key)}
              />
            ))}
          </Control>
        )}
      </Wrapper>
    </Root>
  )
}

Carousel.defaultProps = {
  images: []
}

export default Carousel
