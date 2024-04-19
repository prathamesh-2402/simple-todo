/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  username?: string | null,
  todoss?: ModelTodosUserConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelTodosUserConnection = {
  __typename: "ModelTodosUserConnection",
  items:  Array<TodosUser | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type TodosUser = {
  __typename: "TodosUser",
  id: string,
  userId: string,
  todosId: string,
  user: User,
  todos: Todos,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Todos = {
  __typename: "Todos",
  id: string,
  title?: string | null,
  description?: string | null,
  userId?: string | null,
  Users?: ModelTodosUserConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateTodosInput = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  userId?: string | null,
  _version?: number | null,
};

export type ModelTodosConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelTodosConditionInput | null > | null,
  or?: Array< ModelTodosConditionInput | null > | null,
  not?: ModelTodosConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTodosInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  userId?: string | null,
  _version?: number | null,
};

export type DeleteTodosInput = {
  id: string,
  _version?: number | null,
};

export type CreateTodosUserInput = {
  id?: string | null,
  userId: string,
  todosId: string,
  _version?: number | null,
};

export type ModelTodosUserConditionInput = {
  userId?: ModelIDInput | null,
  todosId?: ModelIDInput | null,
  and?: Array< ModelTodosUserConditionInput | null > | null,
  or?: Array< ModelTodosUserConditionInput | null > | null,
  not?: ModelTodosUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateTodosUserInput = {
  id: string,
  userId?: string | null,
  todosId?: string | null,
  _version?: number | null,
};

export type DeleteTodosUserInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTodosFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodosFilterInput | null > | null,
  or?: Array< ModelTodosFilterInput | null > | null,
  not?: ModelTodosFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelTodosConnection = {
  __typename: "ModelTodosConnection",
  items:  Array<Todos | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTodosUserFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  todosId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodosUserFilterInput | null > | null,
  or?: Array< ModelTodosUserFilterInput | null > | null,
  not?: ModelTodosUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTodosFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodosFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodosFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionTodosUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  todosId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodosUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodosUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    todoss?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    todoss?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    todoss?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTodosMutationVariables = {
  input: CreateTodosInput,
  condition?: ModelTodosConditionInput | null,
};

export type CreateTodosMutation = {
  createTodos?:  {
    __typename: "Todos",
    id: string,
    title?: string | null,
    description?: string | null,
    userId?: string | null,
    Users?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTodosMutationVariables = {
  input: UpdateTodosInput,
  condition?: ModelTodosConditionInput | null,
};

export type UpdateTodosMutation = {
  updateTodos?:  {
    __typename: "Todos",
    id: string,
    title?: string | null,
    description?: string | null,
    userId?: string | null,
    Users?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTodosMutationVariables = {
  input: DeleteTodosInput,
  condition?: ModelTodosConditionInput | null,
};

export type DeleteTodosMutation = {
  deleteTodos?:  {
    __typename: "Todos",
    id: string,
    title?: string | null,
    description?: string | null,
    userId?: string | null,
    Users?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTodosUserMutationVariables = {
  input: CreateTodosUserInput,
  condition?: ModelTodosUserConditionInput | null,
};

export type CreateTodosUserMutation = {
  createTodosUser?:  {
    __typename: "TodosUser",
    id: string,
    userId: string,
    todosId: string,
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    todos:  {
      __typename: "Todos",
      id: string,
      title?: string | null,
      description?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTodosUserMutationVariables = {
  input: UpdateTodosUserInput,
  condition?: ModelTodosUserConditionInput | null,
};

export type UpdateTodosUserMutation = {
  updateTodosUser?:  {
    __typename: "TodosUser",
    id: string,
    userId: string,
    todosId: string,
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    todos:  {
      __typename: "Todos",
      id: string,
      title?: string | null,
      description?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTodosUserMutationVariables = {
  input: DeleteTodosUserInput,
  condition?: ModelTodosUserConditionInput | null,
};

export type DeleteTodosUserMutation = {
  deleteTodosUser?:  {
    __typename: "TodosUser",
    id: string,
    userId: string,
    todosId: string,
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    todos:  {
      __typename: "Todos",
      id: string,
      title?: string | null,
      description?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    todoss?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTodosQueryVariables = {
  id: string,
};

export type GetTodosQuery = {
  getTodos?:  {
    __typename: "Todos",
    id: string,
    title?: string | null,
    description?: string | null,
    userId?: string | null,
    Users?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodosFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodosConnection",
    items:  Array< {
      __typename: "Todos",
      id: string,
      title?: string | null,
      description?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTodosQueryVariables = {
  filter?: ModelTodosFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTodosQuery = {
  syncTodos?:  {
    __typename: "ModelTodosConnection",
    items:  Array< {
      __typename: "Todos",
      id: string,
      title?: string | null,
      description?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTodosUserQueryVariables = {
  id: string,
};

export type GetTodosUserQuery = {
  getTodosUser?:  {
    __typename: "TodosUser",
    id: string,
    userId: string,
    todosId: string,
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    todos:  {
      __typename: "Todos",
      id: string,
      title?: string | null,
      description?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTodosUsersQueryVariables = {
  filter?: ModelTodosUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosUsersQuery = {
  listTodosUsers?:  {
    __typename: "ModelTodosUserConnection",
    items:  Array< {
      __typename: "TodosUser",
      id: string,
      userId: string,
      todosId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTodosUsersQueryVariables = {
  filter?: ModelTodosUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTodosUsersQuery = {
  syncTodosUsers?:  {
    __typename: "ModelTodosUserConnection",
    items:  Array< {
      __typename: "TodosUser",
      id: string,
      userId: string,
      todosId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type TodosUsersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTodosUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TodosUsersByUserIdQuery = {
  todosUsersByUserId?:  {
    __typename: "ModelTodosUserConnection",
    items:  Array< {
      __typename: "TodosUser",
      id: string,
      userId: string,
      todosId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type TodosUsersByTodosIdQueryVariables = {
  todosId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTodosUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TodosUsersByTodosIdQuery = {
  todosUsersByTodosId?:  {
    __typename: "ModelTodosUserConnection",
    items:  Array< {
      __typename: "TodosUser",
      id: string,
      userId: string,
      todosId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    todoss?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    todoss?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    todoss?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTodosSubscriptionVariables = {
  filter?: ModelSubscriptionTodosFilterInput | null,
};

export type OnCreateTodosSubscription = {
  onCreateTodos?:  {
    __typename: "Todos",
    id: string,
    title?: string | null,
    description?: string | null,
    userId?: string | null,
    Users?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTodosSubscriptionVariables = {
  filter?: ModelSubscriptionTodosFilterInput | null,
};

export type OnUpdateTodosSubscription = {
  onUpdateTodos?:  {
    __typename: "Todos",
    id: string,
    title?: string | null,
    description?: string | null,
    userId?: string | null,
    Users?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTodosSubscriptionVariables = {
  filter?: ModelSubscriptionTodosFilterInput | null,
};

export type OnDeleteTodosSubscription = {
  onDeleteTodos?:  {
    __typename: "Todos",
    id: string,
    title?: string | null,
    description?: string | null,
    userId?: string | null,
    Users?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTodosUserSubscriptionVariables = {
  filter?: ModelSubscriptionTodosUserFilterInput | null,
};

export type OnCreateTodosUserSubscription = {
  onCreateTodosUser?:  {
    __typename: "TodosUser",
    id: string,
    userId: string,
    todosId: string,
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    todos:  {
      __typename: "Todos",
      id: string,
      title?: string | null,
      description?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTodosUserSubscriptionVariables = {
  filter?: ModelSubscriptionTodosUserFilterInput | null,
};

export type OnUpdateTodosUserSubscription = {
  onUpdateTodosUser?:  {
    __typename: "TodosUser",
    id: string,
    userId: string,
    todosId: string,
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    todos:  {
      __typename: "Todos",
      id: string,
      title?: string | null,
      description?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTodosUserSubscriptionVariables = {
  filter?: ModelSubscriptionTodosUserFilterInput | null,
};

export type OnDeleteTodosUserSubscription = {
  onDeleteTodosUser?:  {
    __typename: "TodosUser",
    id: string,
    userId: string,
    todosId: string,
    user:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    todos:  {
      __typename: "Todos",
      id: string,
      title?: string | null,
      description?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
