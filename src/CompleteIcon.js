import React from 'react'
import { TodoIcon } from './TodoIcon'

export const CompleteIcon = ({ completed, onClick }) => {
  return (
    <TodoIcon type="check" color={ completed ? 'green' : 'gray' } onClick={ onClick } />
  )
}
