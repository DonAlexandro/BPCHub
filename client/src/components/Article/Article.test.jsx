import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { Article } from './Article';

describe('Article', () => {
  const prepareFixtures = () => {
    return {
      title: faker.lorem.words(3),
      category: faker.lorem.word(),
      description: faker.lorem.paragraph(),
      image: '/images/News/News2023_1/A285/2.jpg',
    };
  };

  it('should render the button, the title and the image covered in Link', () => {
    const { title, description, category, image } = prepareFixtures();

    render(
      <Article
        id={1}
        category={category}
        title={title}
        image={image}
        description={description}
        categoryId={2}
        views={100}
      />,
    );

    // Check if components are covered in Links
    const LinkedTitle = screen.getByTestId('linked-title');
    const LinkedImage = screen.getByTestId('linked-image');
    const ReadMoreButton = screen.getByTestId('read-more-button');

    expect(LinkedTitle).toBeInTheDocument();
    expect(LinkedImage).toBeInTheDocument();
    expect(ReadMoreButton).toBeInTheDocument();

    // Check if article renders text values correctly
    const Title = screen.getByText(title);
    const Category = screen.getByText(category);
    const Description = screen.getByText(description);

    expect(Title).toBeInTheDocument();
    expect(Category).toBeInTheDocument();
    expect(Description).toBeInTheDocument();
  });

  it('should not render the button, the image and the title without Link', () => {
    const { title, description, category, image } = prepareFixtures();

    render(
      <Article category={category} title={title} image={image} description={description} categoryId={2} views={100} />,
    );

    const Title = screen.getByTestId('title');
    const Image = screen.getByTestId('image');
    const ReadMoreButton = screen.queryByTestId('read-more-button');

    expect(Title).toBeInTheDocument();
    expect(Image).toBeInTheDocument();
    expect(ReadMoreButton).not.toBeInTheDocument();
  });

  it('should render the loading state', () => {
    render(<Article loading />);

    const LoadingTitle = screen.getByTestId('loading-title');
    const LoadingDescription = screen.getByTestId('loading-description');
    const ArticleMeta = screen.queryByTestId('article-meta');

    expect(LoadingTitle).toBeInTheDocument();
    expect(LoadingDescription).toBeInTheDocument();
    expect(ArticleMeta).not.toBeInTheDocument();
  });
});
