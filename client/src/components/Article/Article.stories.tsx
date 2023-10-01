import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import { Article } from './Article';
import { theme } from '../../theme/override';

const meta: Meta<typeof Article> = {
  component: Article,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ConfigProvider theme={theme}>
        <Story />
      </ConfigProvider>
    ),
  ],
};

type Story = StoryObj<typeof Article>;

export const Default: Story = {
  args: {
    id: 1,
    category: 'Lorem Ipsum',
    title: 'Lorem ipsum dolor sit amet',
    image: '/images/News/News2023_1/A285/2.jpg',
    description:
      'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    categoryId: 2,
    views: 100,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export default meta;
