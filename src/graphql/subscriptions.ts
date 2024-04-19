/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateTodos = /* GraphQL */ `subscription OnCreateTodos($filter: ModelSubscriptionTodosFilterInput) {
  onCreateTodos(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTodosSubscriptionVariables,
  APITypes.OnCreateTodosSubscription
>;
export const onUpdateTodos = /* GraphQL */ `subscription OnUpdateTodos($filter: ModelSubscriptionTodosFilterInput) {
  onUpdateTodos(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTodosSubscriptionVariables,
  APITypes.OnUpdateTodosSubscription
>;
export const onDeleteTodos = /* GraphQL */ `subscription OnDeleteTodos($filter: ModelSubscriptionTodosFilterInput) {
  onDeleteTodos(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTodosSubscriptionVariables,
  APITypes.OnDeleteTodosSubscription
>;
export const onCreateTodosUser = /* GraphQL */ `subscription OnCreateTodosUser($filter: ModelSubscriptionTodosUserFilterInput) {
  onCreateTodosUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTodosUserSubscriptionVariables,
  APITypes.OnCreateTodosUserSubscription
>;
export const onUpdateTodosUser = /* GraphQL */ `subscription OnUpdateTodosUser($filter: ModelSubscriptionTodosUserFilterInput) {
  onUpdateTodosUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTodosUserSubscriptionVariables,
  APITypes.OnUpdateTodosUserSubscription
>;
export const onDeleteTodosUser = /* GraphQL */ `subscription OnDeleteTodosUser($filter: ModelSubscriptionTodosUserFilterInput) {
  onDeleteTodosUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTodosUserSubscriptionVariables,
  APITypes.OnDeleteTodosUserSubscription
>;
