// @flow
import React from 'react'
import { styled } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import celebrationIcon from '../../../assets/celebration.svg'
import sadIcon from '../../../assets/bolotinha_sad.svg'

const Feedback = icon =>
  styled(props => (
    <div {...props}>
      <img src={icon} />
      <Typography variant='h4'> {props.children} </Typography>
    </div>
  ))({
    margin: 'auto',
    padding: '2rem 0',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    '& img': {
      width: '100%',
      maxWidth: '300px',
      '@media screen and (max-width: 600px)': {
        maxWidth: '200px'
      }
    },
    '& h4': {
      padding: '1rem 0'
    },
    '& strong': {
      fontWeight: 'bolder'
    }
  })

export const SadFeedback = Feedback(sadIcon)
export const SuccessFeedback = Feedback(celebrationIcon)
