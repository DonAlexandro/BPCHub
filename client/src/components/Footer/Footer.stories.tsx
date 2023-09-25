import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'
import { ConfigProvider } from 'antd'
import { theme } from '../../theme/override'

const meta: Meta<typeof Footer> = {
  component: Footer,
  tags: ['autodocs'],
  decorators: [(Story) => <ConfigProvider theme={theme}><Story /></ConfigProvider>]
}

type Story = StoryObj<typeof Footer>

export const Default: Story = {
  render: () => <Footer />
}

export default meta
