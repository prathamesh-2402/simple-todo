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
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const syncUsers = /* GraphQL */ `query SyncUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      username
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncUsersQueryVariables, APITypes.SyncUsersQuery>;
export const getTodos = /* GraphQL */ `query GetTodos($id: ID!) {
  getTodos(id: $id) {
    id
    title
    description
    userId
    Users {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const syncTodos = /* GraphQL */ `query SyncTodos(
  $filter: ModelTodosFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncTodos(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      title
      description
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncTodosQueryVariables, APITypes.SyncTodosQuery>;
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    todos {
      id
      title
      description
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTodosUsersQueryVariables,
  APITypes.ListTodosUsersQuery
>;
export const syncTodosUsers = /* GraphQL */ `query SyncTodosUsers(
  $filter: ModelTodosUserFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncTodosUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userId
      todosId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncTodosUsersQueryVariables,
  APITypes.SyncTodosUsersQuery
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TodosUsersByTodosIdQueryVariables,
  APITypes.TodosUsersByTodosIdQuery
>;
