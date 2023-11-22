import React, { ReactNode } from 'react'

import s from './card.module.scss'

export type CardProps = {
  children?: ReactNode
  className?: string
}
export const Card: React.FC<CardProps> = ({ className, ...rest }) => {
  return <div className={`${s.card} ${className}`} {...rest}></div>
}
