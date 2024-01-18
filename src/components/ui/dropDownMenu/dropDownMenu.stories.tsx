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

export const DropDown: Story = {
  args: {
    align: 'start',
    children: (
      <>
        <DropDownItem>
          <Avatar />
          <div>
            <div>Popov</div>
            <div>popov@gmail.com</div>
          </div>
        </DropDownItem>
        <DropDownItem>
          <BsPersonCircle />
          <div>My profile</div>
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
