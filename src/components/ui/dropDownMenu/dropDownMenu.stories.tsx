import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '@radix-ui/react-avatar'
import { BsPersonCircle } from 'react-icons/bs'
import { IoMdLogOut } from 'react-icons/io'

import { DropDownItem, DropDownMenu } from './dropDownMenu'

const meta = {
  argTypes: {},
  component: DropDownMenu,
  tags: ['autodocs'],
  title: 'Components/DropDownMenu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

// @ts-ignore
export const DropDown: Story = {
  args: {
    children: (
      <>
        <DropDownItem>
          <Avatar />
          <div>
            <div>Popovich</div>
            <div>popovich@gmail.com</div>
          </div>
        </DropDownItem>
        <DropDownItem>
          <BsPersonCircle />
          <div>My page</div>
        </DropDownItem>
        <DropDownItem>
          <IoMdLogOut />
          <div>SignOut</div>
        </DropDownItem>
      </>
    ),
    trigger: <Avatar />,
  },
  render: args => {
    return <DropDownMenu {...args} />
  },
}
