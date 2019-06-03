// @flow
import React from 'react'
import {
  Typography,
  CardMedia,
  IconButton,
  Input,
  Tooltip
} from '@material-ui/core'
import { CloseRounded, AddRounded, RemoveRounded } from '@material-ui/icons'
import { styled } from '@material-ui/styles'

type Props = {
  /* Handler to see the details */
  onDetails?: () => mixed,
  /** Handler for onChangeQuantity */
  onChangeQuantity?: (q: number) => mixed,
  /** Handler for onRemove */
  onRemove?: () => mixed,
  /** A title for the product  */
  title: string,
  /** A price for the product */
  price: number,
  /** A image for the product */
  image: string,
  /** The quantity for the product */
  quantity: number,
  /* A className */
  className?: string
}

const Root = styled('div')({
  display: 'block'
})

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
  boxSizing: 'border-box',
  maxWidth: '600px',
  minWidth: '320px',
  position: 'relative',
  borderRadius: theme.spacing(1),
  boxShadow: '0px 5px 18px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
  justifyContent: 'space-around'
}))

const CardMediaStyled = styled(CardMedia)({
  minWidth: '120px',
  minHeight: '120px'
})

const Details = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  paddingLeft: theme.spacing(1),
  justifyContent: 'center',
  maxWidth: '300px'
}))

const Title = styled(props => <Typography variant='body1' {...props} />)(
  ({ theme }) => ({
    color: theme.palette.primary.light,
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  })
)

const Price = styled(props => <Typography variant='body1' {...props} />)(
  ({ theme }) => ({
    color: theme.palette.primary.light,
    fontWeight: 'bolder'
  })
)

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(2),
  justifyContent: 'space-between'
}))

const QuantityControl = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  maxHeight: '30px',
  maxWidth: '100px'
})

const CloseButton = styled(props => (
  <IconButton {...props} color='primary'>
    <CloseRounded color='inherit' />
  </IconButton>
))(({ theme }) => ({
  position: 'absolute',
  right: '1rem',
  top: '1rem',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.error.main
  }
}))

const MinusButton = styled(props => (
  <IconButton {...props}>
    <RemoveRounded />
  </IconButton>
))(({ theme }) => ({
  padding: theme.spacing(0),
  color: theme.palette.primary.main,
  borderRadius: '0'
}))

const PlusButton = styled(props => (
  <IconButton {...props}>
    <AddRounded />
  </IconButton>
))(({ theme }) => ({
  padding: theme.spacing(0),
  color: theme.palette.primary.main,
  borderRadius: '0'
}))

const InputNumber = styled(
  React.forwardRef((props, ref) => (
    <Input {...props} ref={ref} margin='dense' disableUnderline />
  ))
)({
  border: 'none',
  backgroundColor: '#f6f6f6',
  borderRadius: '4px',
  '& input': {
    textAlign: 'center'
  }
})

const formatPrice = n => {
  const value = parseInt(n) || 0
  return value.toFixed(2)
}

const ProductCart = (props: Props) => {
  const {
    image,
    title,
    quantity = 1,
    price,
    onDetails,
    onChangeQuantity,
    onRemove,
    className
  } = props
  const dec = q => () => {
    const value = Math.max(1, q - 1)
    onChangeQuantity && onChangeQuantity(value)
  }
  const inc = q => () => {
    const value = Math.min(50, q + 1)
    onChangeQuantity && onChangeQuantity(value)
  }
  const handlerQuantity = q => {
    const value = parseInt(q.replace(/[^\d]/, '')) || 1
    const max = Math.max(1, value)
    const min = Math.min(50, max)
    onChangeQuantity && onChangeQuantity(min)
  }
  return (
    <Root>
      <Wrapper className={className} onClick={onDetails}>
        <CloseButton aria-label='Remover' onClick={onRemove} />
        <CardMediaStyled image={image} title={title} />
        <Details>
          <Title aria-label='Nome do produto'>{title}</Title>
          <Container>
            <Price aria-label='preço'>{`R$ ${formatPrice(price)}`}</Price>
            <QuantityControl>
              <MinusButton aria-label='decrementar' onClick={dec(quantity)} />
              <Tooltip title='até 50 unidades se houver estoque'>
                <InputNumber
                  inputProps={{ 'aria-label': 'quantidade do produto' }}
                  value={quantity}
                  onChange={e => handlerQuantity(e.target.value)}
                />
              </Tooltip>
              <PlusButton aria-label='incrementar' onClick={inc(quantity)} />
            </QuantityControl>
          </Container>
        </Details>
      </Wrapper>
    </Root>
  )
}

ProductCart.defaultProps = {
  quantity: 1,
  maxQuantity: 3
}

export default ProductCart
