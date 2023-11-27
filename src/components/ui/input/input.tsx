import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Typography } from '@/components/ui/typography'

import s from './input.module.scss'

export type InputProps = {
  className?: string
  disabled?: boolean
  errorMessage?: string
  inputIcon?: string
  label?: string
  onChangeValue?: (value: string) => void
  onClearClick?: () => void
  onEnter?: () => void
  placeholder?: string
  value?: string
} & ComponentPropsWithoutRef<'input'>
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      errorMessage,
      label,
      onChangeValue,
      onClearClick,
      onEnter,
      placeholder,
      value,
      ...restProps
    },
    ref
  ) => {
    const isError = errorMessage ? s.error : ''

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChangeValue) {
        onChangeValue(e.currentTarget.value)
      }
    }
    // @ts-ignore
    const onPressEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      onEnter && e.key === 'Enter' && onEnter()
    }

    const [showPassword, setShowPassword] = useState(false)

    return (
      <div className={className}>
        <Typography as={'label'} className={s.label} variant={'body2'}>
          {label}
        </Typography>
        <div className={s.inputWrapper}>
          <input
            className={isError ? isError : s.default}
            disabled={disabled}
            onChange={onChangeValueHandler}
            onKeyDown={onPressEnterHandler}
            placeholder={placeholder}
            ref={ref}
            value={value}
          />
        </div>
        {errorMessage ? <div className={s.errorMessage}>{errorMessage}</div> : null}
      </div>
    )
  }
)
