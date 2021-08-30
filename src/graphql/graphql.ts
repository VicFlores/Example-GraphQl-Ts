import { makeExecutableSchema } from '@graphql-tools/schema';
import { merge } from 'lodash';

// Students
import { typeDefs as studentSchema } from './students/students.schema';
import { resolvers as studentResolver } from './students/students.resolvers';

export const schema = makeExecutableSchema({
  typeDefs: [studentSchema],
  resolvers: merge(studentResolver),
});
