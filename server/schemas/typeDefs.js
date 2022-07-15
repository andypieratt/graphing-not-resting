const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Book {
    bookId: ID
    title: String
    image: String
    authors: [String]
    description: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input SaveBook {
    bookId: ID
    title: String
    image: String
    authors: [String]
    description: String
    link: String
  }

  type Query {
    #users: [User]!
    #user(userId: ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    saveBook(input: SaveBook!): User

    #removeUser: User

    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
