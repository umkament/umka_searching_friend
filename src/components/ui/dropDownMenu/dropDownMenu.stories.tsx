import type { Meta, StoryObj } from '@storybook/react'

import { DropDownMenu } from './dropDownMenu'

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
          <div>
            <div>Ivan</div>
            <div>j&johnson@gmail.com</div>
          </div>
        </DropDownItem>
        <DropDownItem>
          <img alt={'icon'} src={personOutline} />
          <div>My profile</div>
        </DropDownItem>
        <DropDownItem>
          <img alt={'icon'} src={logOut} />
          <div>SignOut</div>
        </DropDownItem>
      </>
    ),
  },
  render: args => {
    return <DropDownMenu {...args} />
  },
}
