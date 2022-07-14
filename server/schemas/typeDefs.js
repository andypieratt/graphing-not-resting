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

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    saveBook(userId: ID!, input: SaveBook): User

    removeUser: User

    removeBook(book: String!): User
  }

  input SaveBook {
    bookId: ID
    title: String
    image: String
    authors: [String]
    description: String
    link: String
  }
`;

module.exports = typeDefs;
