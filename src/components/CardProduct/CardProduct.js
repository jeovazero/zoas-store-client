// @flow
import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import { styled } from '@material-ui/styles'

type Props = {
  onClick?: () => mixed,
  /** A title for the product card */
  title: string,
  /** A price for the product card */
  price: string,
  /** A image for the product card */
  image: string,
  /** To display whether the product has stock */
  isInStock: boolean,
  /* A className */
  className?: string
}

const Root = styled('div')({
  cursor: 'pointer',
  display: 'inline-block'
})

const Wrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  height: 250,
  width: 160,
  paddingTop: theme.spacing(2),
  boxSizing: 'border-box'
}))

const Background = styled('div')(({ theme }) => ({
  width: 130,
  top: 0,
  left: theme.spacing(3),
  height: 246,
  position: 'absolute',
  backgroundColor: '#f2f2f2',
  borderRadius: theme.shape.borderRadius
}))

const CardStyled = styled(Card)({
  position: 'relative',
  width: 140,
  height: 220,
  backgroundColor: 'white',
  boxShadow: '-5px 5px 15px rgba(0, 0, 0, 0.05)',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0.75rem 1rem 0rem',
  boxSizing: 'border-box',
  transition: 'all ease 0.07s',
  '&:hover': {
    transform: 'scale(1.02) translateX(6px)',
    boxShadow: '0px 0px 15px rgba(0,0,0,0.1)'
  }
})

const CardMediaStyled = styled(CardMedia)({
  width: 120,
  height: 120,
  backgroundSize: 'contain'
})

const Details = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItem: 'flex-start',
  width: '100%',
  padding: '0.5rem 0 0',
  boxSizing: 'border-box'
})

const Container = styled('div')({
  display: 'flex',
  justifyContent: props => props.justifycontent || 'space-between',
  alignItems: 'center',
  margin: '0.25rem 0',
  minHeight: '1.25rem'
})

const Title = styled(props => <Typography variant='body2' {...props} />)(
  ({ theme }) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    color: theme.palette.primary.light
  })
)

const Price = styled(props => <Typography variant='body1' {...props} />)(
  ({ theme }) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: 'bold',
    fontFamily: theme.typography.fontFamilySecondary
  })
)

const Danger = styled(props => <Typography variant='subtitle2' {...props} />)(
  ({ theme }) => ({
    color: theme.palette.error.dark,
    fontSize: '0.66rem'
  })
)

const Dots = styled('div')({
  display: 'flex',
  backgroundColor: '#eeeeee',
  borderRadius: '8px',
  height: '10px',
  width: '18px',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '0 0.25rem',
  boxSizing: 'border-radius'
})

const Dot = styled('div')({
  width: '4px',
  height: '4px',
  backgroundColor: '#ABABAB',
  borderRadius: '50%'
})

const CardProduct = (props: Props) => {
  const { onClick, image, title, isInStock, price, className } = props

  return (
    <Root
      className={className}
      title={title}
      aria-label={title}
      onClick={onClick}
    >
      <Wrapper>
        <Background />
        <CardStyled>
          <CardMediaStyled image={image} title={title} />
          <Details>
            <Title>{title}</Title>
            <Price>{price}</Price>
            <Container
              justifycontent={isInStock ? 'flex-end' : 'space-between'}
            >
              {!isInStock && <Danger> Sem estoque </Danger>}
              <Dots>
                <Dot />
                <Dot />
                <Dot />
              </Dots>
            </Container>
          </Details>
        </CardStyled>
      </Wrapper>
    </Root>
  )
}

CardProduct.defaultProps = {}

export default CardProduct
