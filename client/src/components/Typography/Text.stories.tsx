import type { Meta, StoryObj } from '@storybook/react'
import { ConfigProvider } from 'antd'
import { Text } from './Text'
import { theme } from '../../theme/override'

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  decorators: [(Story) => <ConfigProvider theme={theme}><Story /></ConfigProvider>]
}

type Story = StoryObj<typeof Text>

export const Leading: Story = {
  args: {
    children: 'Duis aute irure dolor in reprehenderit in voluptate',
    $lead: true
  }
}

export const Paragraph: Story = {
  args: {
    children: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.'
  }
}

export default meta
