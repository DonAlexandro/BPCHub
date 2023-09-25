import type { Meta, StoryObj } from '@storybook/react'
import { ConfigProvider } from 'antd'
import { Title } from './Title'
import { theme } from '../../theme/override'

const meta: Meta<typeof Title> = {
  title: 'Typography/Title',
  component: Title,
  tags: ['autodocs'],
  decorators: [(Story) => <ConfigProvider theme={theme}><Story /></ConfigProvider>]
}

type Story = StoryObj<typeof Title>

export const Heading2: Story = {
  args: {
    children: 'ULTRICIES SED MAGNA EUISMOD ENIM VITAE GRAVIDA'
  },
}

export default meta
