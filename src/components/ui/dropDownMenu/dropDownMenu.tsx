import React, { ReactNode } from 'react'

export type DropDownMenuProps = {
  aline?: 'center' | 'end' | 'start'
  children?: ReactNode
  isMenuOpen?: boolean
  onChange?: (open: boolean) => void
  trigger?: ReactNode
}
export const DropDownMenu: React.FC<DropDownMenuProps> = ({
  aline,
  children,
  isMenuOpen,
  onChange,
  trigger,
}) => {
  return true
}
