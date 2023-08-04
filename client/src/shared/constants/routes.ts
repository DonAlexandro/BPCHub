export const navbarRoutes = {
  home: {
    title: 'Головна',
    path: '/',
  },
};

export const otherRoutes = {
  article: {
    path: '/article/:id',
  },
  category: {
    path: '/category/:id',
  },
};

export const routes = Object.assign(navbarRoutes, otherRoutes);
