/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    todoss {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getTodos = /* GraphQL */ `query GetTodos($id: ID!) {
  getTodos(id: $id) {
    id
    title
    description
    createdAt
    updatedAt
    userId
    Users {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodosQueryVariables, APITypes.GetTodosQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodosFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      createdAt
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const getTodosUser = /* GraphQL */ `query GetTodosUser($id: ID!) {
  getTodosUser(id: $id) {
    id
    userId
    todosId
    user {
      id
      username
      createdAt
      updatedAt
      __typename
    }
    todos {
      id
      title
      description
      createdAt
      updatedAt
      userId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTodosUserQueryVariables,
  APITypes.GetTodosUserQuery
>;
export const listTodosUsers = /* GraphQL */ `query ListTodosUsers(
  $filter: ModelTodosUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodosUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      todosId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTodosUsersQueryVariables,
  APITypes.ListTodosUsersQuery
>;
export const todosUsersByUserId = /* GraphQL */ `query TodosUsersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTodosUserFilterInput
  $limit: Int
  $nextToken: String
) {
  todosUsersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      todosId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TodosUsersByUserIdQueryVariables,
  APITypes.TodosUsersByUserIdQuery
>;
export const todosUsersByTodosId = /* GraphQL */ `query TodosUsersByTodosId(
  $todosId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTodosUserFilterInput
  $limit: Int
  $nextToken: String
) {
  todosUsersByTodosId(
    todosId: $todosId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      todosId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TodosUsersByTodosIdQueryVariables,
  APITypes.TodosUsersByTodosIdQuery
>;
