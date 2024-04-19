/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createTodos = /* GraphQL */ `mutation CreateTodos(
  $input: CreateTodosInput!
  $condition: ModelTodosConditionInput
) {
  createTodos(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTodosMutationVariables,
  APITypes.CreateTodosMutation
>;
export const updateTodos = /* GraphQL */ `mutation UpdateTodos(
  $input: UpdateTodosInput!
  $condition: ModelTodosConditionInput
) {
  updateTodos(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTodosMutationVariables,
  APITypes.UpdateTodosMutation
>;
export const deleteTodos = /* GraphQL */ `mutation DeleteTodos(
  $input: DeleteTodosInput!
  $condition: ModelTodosConditionInput
) {
  deleteTodos(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTodosMutationVariables,
  APITypes.DeleteTodosMutation
>;
export const createTodosUser = /* GraphQL */ `mutation CreateTodosUser(
  $input: CreateTodosUserInput!
  $condition: ModelTodosUserConditionInput
) {
  createTodosUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTodosUserMutationVariables,
  APITypes.CreateTodosUserMutation
>;
export const updateTodosUser = /* GraphQL */ `mutation UpdateTodosUser(
  $input: UpdateTodosUserInput!
  $condition: ModelTodosUserConditionInput
) {
  updateTodosUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTodosUserMutationVariables,
  APITypes.UpdateTodosUserMutation
>;
export const deleteTodosUser = /* GraphQL */ `mutation DeleteTodosUser(
  $input: DeleteTodosUserInput!
  $condition: ModelTodosUserConditionInput
) {
  deleteTodosUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTodosUserMutationVariables,
  APITypes.DeleteTodosUserMutation
>;
