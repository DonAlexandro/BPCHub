# Changelog

Всі важливі зміни в цьому проєкті будуть задокументовані в цьому файлі.

## [0.0.8] - 2023-08-27

### Added

#### Scrapper

- CRON to run articles scrapping automatically every day at 10AM

## [0.0.7] - 2023-08-26

### Added

#### Client

- Pagination to the home page
- Loading indicator for articles
- Illustration if error happened
- Real-time articles update using websockets
- Illustration if there're no articles at all in DB yet

## [0.0.6] - 2023-08-20

### Added

#### Client

- Redux + Redux Toolkit + RTK Query
- Articles fetching from the Strapi API

## [0.0.5] - 2023-08-18

### Added

#### Scrapper

- The initial fully tested implementation of scrapper

#### Client

- Websocket connection with the scrapper to update new articles without page reloading

## [0.0.4] - 2023-08-08

### Added

#### Client

- Sticky header
- Desktop version of the website
- Pagination
- Section with ads
- Footer

### Fixed

#### Client

- Adjusted the width and the height of mobile article image
- Moved article related code to separate component

## [0.0.3] - 2023-08-02

### Added

#### Client

- Mobile version of the header
- Mobile version of article card

## [0.0.2] - 2023-08-02

### Added

#### Client

- Mobile version of navbar at the top of the page
- Navbar drawer to hide links on the mobile

#### Backend

- Main entities of the app
- Data to have the content to fetch on the client

## [0.0.1] - 2023-07-31

### Added

- Pre-commit hooks
- Changelog. Подивимося, на скільки мене хватить на цьому проєкті і куда зайде версія :)
