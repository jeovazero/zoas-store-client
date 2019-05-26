// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { array } from '@storybook/addon-knobs'
import Carousel, { CarouselComponent } from './Carousel'

const imagesList = [
  'https://res.cloudinary.com/sohdezoas/image/upload/v1556135859/zoas/Group_8_rfakg9.png',
  'https://res.cloudinary.com/sohdezoas/image/upload/v1556135845/zoas/Group_9_w0aim1.png',
  'https://res.cloudinary.com/sohdezoas/image/upload/v1556135859/zoas/Group_8_rfakg9.png',
  'https://res.cloudinary.com/sohdezoas/image/upload/v1556135845/zoas/Group_9_w0aim1.png',
  'https://res.cloudinary.com/sohdezoas/image/upload/v1556135859/zoas/Group_8_rfakg9.png',
  'https://res.cloudinary.com/sohdezoas/image/upload/v1556135845/zoas/Group_9_w0aim1.png'
]

storiesOf('Components', module)
  .addParameters({
    info: {
      propTables: [CarouselComponent],
      propTablesExclude: [Carousel],
      components: {
        Carousel: Carousel
      },
      excludedPropTypes: ['classes']
    }
  })
  .add('Carousel', () => {
    const images = array('images', imagesList)

    return <Carousel images={images} />
  })
