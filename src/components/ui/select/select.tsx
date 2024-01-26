import { ReactNode } from 'react'

export type Options = {
  disabled?: boolean
  label?: string
  value: string
}
export type SelectProps = {
  className?: string
  defaultValue?: string
  disabled?: boolean
  label?: string
  onValueChange?: (value: string) => void
  placeholder?: ReactNode
  selectOptions: Options[]
  value?: string
}
export const Select = ({}: SelectProps) => {
  return <></>
}
