import React from 'react'
import { TodoIcon } from "./TodoIcon"

export const DeleteIcon = ({ onClick }) => {
  return (
    <TodoIcon type="delete" color='gray' onClick={ onClick } />
  )
}
