export default {
  profile: {
    name: 'Adewale Yusuph',
    profileImg: require('./assets/demoImages/gal1.png'),
    backdrop: require('./assets/demoImages/gal1.png'),
    address: 'Yaba, lagos',
    categories: ['Clothing', 'Accessories', 'Shoes', 'Bags', 'Materials'],
    bio: 'Lorem ipsum dolor sit amet consectetur. Nibh sit ornare velit odio molestie mi cras. Ultrices eget dignissim facilisis turpis malesuada enim molestie nulla. Est dui metus convallis tellus scelerisque id eget in aliquam. Nec amet venenatis tempus porttitor amet.',
    gallery: [
      require('./assets/demoImages/gal1.png'),
      require('./assets/demoImages/gal2.png'),
      require('./assets/demoImages/gal3.png'),
      require('./assets/demoImages/gal4.png'),
      require('./assets/demoImages/gal5.png'),
      require('./assets/demoImages/gal6.png'),
    ],
    review: [
      {
        profileImg: require('./assets/img/pp.png'),
        name: 'Esther Ogehenepero',
        rating: 5,
        comment:
          'Lorem ipsum dolor sit amet consectetur. Nibh sit ornare velit odio molestie mi cras. Ultrices eget dignissim facilisis turpis malesuada enim molestie nulla. Est dui metus convallis tellus scelerisque id eget in aliquam. Nec amet venenatis tempus porttitor amet.',
      },
      {
        profileImg: require('./assets/img/pp.png'),
        name: 'JAmes milner',
        rating: 4,
        comment: '',
      },
    ],
  },
  transaction: [
    {
      type: 'credit',
      desc: 'Deposit',
      amount: 25000,
      date: '2024-03-01',
    },
    {
      type: 'debit',
      desc: 'Order 200876',
      amount: 3000,
      date: '2024-06-01',
    },
    {
      type: 'debit',
      desc: 'Order 200876',
      amount: 1000,
      date: '2024-03-01',
    },
    {
      type: 'credit',
      desc: 'Deposit',
      amount: 25000,
      date: '2024-06-01',
    },
    {
      type: 'debit',
      desc: 'Order 200876',
      amount: 1000,
      date: '2024-10-01',
    },
  ],
};
