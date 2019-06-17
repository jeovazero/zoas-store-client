// @flow
import React from 'react'
import ProductDataType from './__generated__/Product_data.graphql'
import { Typography, Button } from '@material-ui/core'
import { graphql, createFragmentContainer } from 'react-relay'
import { styled } from '@material-ui/styles'
import { Carousel } from '../../components'
import { Title } from '../../components/common'

type Props = {
  data: ProductDataType,
  onBuy: mixed => mixed
}

const Title2 = styled(Title)(({ theme }) => ({
  [theme.breakpoints.up('xxs')]: {
    padding: '2rem 0.75rem'
  },
  [theme.breakpoints.up('md')]: {
    padding: '2rem 0rem'
  }
}))

const Section = styled('section')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    padding: '0 6rem'
  }
}))

const Wrapper = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  boxSizing: 'border-box',
  [theme.breakpoints.up('xxs')]: {
    justifyContent: 'center',
    padding: '0.75rem'
  },
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'space-between'
  },
  [theme.breakpoints.up('md')]: {
    padding: 0
  }
}))

const GreyText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light
}))

const DarkRedText = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.dark
}))

const DescriptionText = styled(GreyText)({
  marginTop: '1rem',
  marginBottom: '1rem'
})

const FontSecondaryBold = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamilySecondary,
  fontWeigth: 'bold'
}))

const DetailsContainer = styled('div')(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '290px'
  },
  [theme.breakpoints.up('md')]: {
    width: '360px'
  }
}))

const ButtonFull = styled(Button)({
  width: '100%'
})

const ButtonWrapper = styled('div')({
  textAlign: 'center'
})

const PriceContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.2rem 0 2.2rem'
})

const Product = (props: Props) => {
  const { data, onBuy } = props

  return (
    <Section>
      <Title2>{data.title}</Title2>
      <Wrapper>
        <Carousel images={data.photos.map(x => x.url)} />
        <DetailsContainer>
          <DescriptionText variant='h6'>{data.description}</DescriptionText>
          <PriceContainer>
            <FontSecondaryBold variant='h4'>
              {`R$ ${data.price.toFixed(2)}`}
            </FontSecondaryBold>
            {data.avaliability ? (
              <GreyText>Em estoque</GreyText>
            ) : (
              <DarkRedText>Sem estoque</DarkRedText>
            )}
          </PriceContainer>
          <ButtonWrapper>
            <ButtonFull
              variant='contained'
              color='primary'
              size='large'
              onClick={() => onBuy({ productId: data.id, quantity: 1 })}
              disabled={!data.avaliability}
            >
              Comprar
            </ButtonFull>
          </ButtonWrapper>
        </DetailsContainer>
      </Wrapper>
    </Section>
  )
}

export default createFragmentContainer(Product, {
  data: graphql`
    fragment Product_data on Product {
      id
      title
      description
      price
      photos {
        url
      }
      avaliability
    }
  `
})
