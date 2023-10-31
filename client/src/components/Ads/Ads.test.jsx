import 'whatwg-fetch';
import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { articleAPI } from '../../store/api/article.api';
import { Ads } from './Ads';

jest.mock('../../store/api/article.api');

describe('Article', () => {
  afterEach(() => jest.resetAllMocks());

  it('should render the list of ads', () => {
    const firstTitle = faker.lorem.words(5);
    const secondTitle = faker.lorem.words(5);

    articleAPI.useLazyFindAdsQuery = jest.fn().mockReturnValue([
      () => {},
      {
        data: {
          data: [
            {
              attributes: {
                title: firstTitle,
              },
            },
            {
              attributes: {
                title: secondTitle,
              },
            },
          ],
        },
      },
    ]);

    render(<Ads />);

    expect(screen.getByText(firstTitle)).toBeInTheDocument();
    expect(screen.getByText(secondTitle)).toBeInTheDocument();
  });

  it('should render the empty message if there are no ads yet', () => {
    articleAPI.useLazyFindAdsQuery = jest.fn().mockReturnValue([
      () => {},
      {
        data: {
          data: [],
        },
      },
    ]);

    render(<Ads />);

    expect(screen.getByText('Оголошень поки що немає')).toBeInTheDocument();
    expect(screen.queryByTestId('ad-title')).not.toBeInTheDocument();
  });

  it('should render the error message if the error happened during the loading process', () => {
    articleAPI.useLazyFindAdsQuery = jest.fn().mockReturnValue([
      () => {},
      {
        data: {
          data: [],
        },
        isError: true,
      },
    ]);

    render(<Ads />);

    expect(screen.getByText('На жаль, сталася помилка при завантаженні оголошень')).toBeInTheDocument();
    expect(screen.queryByTestId('ads')).not.toBeInTheDocument();
  });
});
