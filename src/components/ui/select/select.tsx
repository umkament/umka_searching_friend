import { ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'
import * as Label from '@radix-ui/react-label'
import * as SelectRadixUI from '@radix-ui/react-select'

import s from './select.module.scss'

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
export const Select = ({
  className,
  defaultValue,
  disabled,
  label,
  onValueChange,
  placeholder,
  selectOptions,
  value,
}: SelectProps) => {
  return (
    <Label.Root>
      <Typography
        as={'label'}
        className={`${s.label} ${disabled && s.labelDisabled}`}
        variant={'body2'}
      >
        {label}
      </Typography>
      <SelectRadixUI.Root
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onValueChange}
        required
        value={value}
      >
        <SelectRadixUI.Trigger>
          <SelectRadixUI.Value />
          <SelectRadixUI.Icon />
        </SelectRadixUI.Trigger>

        <SelectRadixUI.Portal>
          <SelectRadixUI.Content>
            <SelectRadixUI.ScrollUpButton />
            <SelectRadixUI.Viewport>
              <SelectRadixUI.Item>
                <SelectRadixUI.ItemText />
                <SelectRadixUI.ItemIndicator />
              </SelectRadixUI.Item>

              <SelectRadixUI.Group>
                <SelectRadixUI.Label />
                <SelectRadixUI.Item>
                  <SelectRadixUI.ItemText />
                  <SelectRadixUI.ItemIndicator />
                </SelectRadixUI.Item>
              </SelectRadixUI.Group>

              <SelectRadixUI.Separator />
            </SelectRadixUI.Viewport>
            <SelectRadixUI.ScrollDownButton />
            <SelectRadixUI.Arrow />
          </SelectRadixUI.Content>
        </SelectRadixUI.Portal>
      </SelectRadixUI.Root>
    </Label.Root>
  )
}
