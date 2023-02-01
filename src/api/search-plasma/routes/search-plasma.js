module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/search-plasma',
     handler: 'search-plasma.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
