/**
 * get an user by id
 * @param {object} _
 * @param {{ id: number }} args
 */
export const user = (_, args) => {
  if (args.id < 0) {
    return Promise.reject(new Error('user not found'));
  }

  return {
    id: 1,
    name: 'John Doe',
    email: 'john_teste@teste.com',
  };
};
