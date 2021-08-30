import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Student {
    id: ID
    name: String
    lastName: String
    code: String
    degree: String
  }

  input studentInput {
    name: String!
    lastName: String!
    code: String!
    degree: String!
  }

  type Query {
    getStudent: String
  }

  type Mutation {
    addStudent(input: studentInput): Student
  }
`;
