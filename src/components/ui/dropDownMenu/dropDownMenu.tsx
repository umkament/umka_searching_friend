import React, { ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

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
  return (
    <DropdownMenu.Root onOpenChange={onChange} open={isMenuOpen}>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'custom menu'} className={s.buttonTrigger}>
          {trigger}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Label />
          <DropdownMenu.Item />
          <DropdownMenu.Group>
            <DropdownMenu.Item />
          </DropdownMenu.Group>
          <DropdownMenu.CheckboxItem>
            <DropdownMenu.ItemIndicator />
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.RadioGroup>
            <DropdownMenu.RadioItem>
              <DropdownMenu.ItemIndicator />
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Sub>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent />
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Separator />
          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
