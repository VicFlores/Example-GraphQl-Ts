import { MutationAddStudentArgs } from '../../generated/graphql';

export const resolvers = {
  Query: {
    getStudent: () => 'world',
  },
  Mutation: {
    addStudent: (_: void, args: MutationAddStudentArgs) => {
      console.log(args);
    },
  },
};
