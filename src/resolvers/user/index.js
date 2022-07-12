import { user } from './query/user.js';

const resolvers = {
  Query: {
    user,
  },
  User: {
    company: () => {
      return {
        id: 2,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet',
      };
    },
  },
};

export default resolvers;
