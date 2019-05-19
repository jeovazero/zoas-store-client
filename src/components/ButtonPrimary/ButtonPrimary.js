// @flow
import type { Node } from 'react'
import React from 'react'
import Button from '@material-ui/core/Button'

type Props = {
  children: Node
}

const ButtonPrimary = ({ children }: Props) => (
  <Button variant='contained' color='primary'>
    {children}
  </Button>
)

export default ButtonPrimary
