import { user } from './query/user.js';

const resolvers = {
  Query: {
    user,
  },
};

export default resolvers;
