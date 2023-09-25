import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { ConfigProvider } from 'antd'
import { theme } from '../../theme/override'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  decorators: [(Story) => <ConfigProvider theme={theme}><Story /></ConfigProvider>]
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button'
  }
}

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Button'
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Button'
  }
}

export default meta
