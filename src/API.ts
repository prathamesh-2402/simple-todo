/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
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

export type User = {
  __typename: "User",
  id: string,
  username?: string | null,
  todoss?: ModelTodosUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTodosUserConnection = {
  __typename: "ModelTodosUserConnection",
  items:  Array<TodosUser | null >,
  nextToken?: string | null,
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
};

export type Todos = {
  __typename: "Todos",
  id: string,
  title?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userId?: string | null,
  Users?: ModelTodosUserConnection | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateTodosInput = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userId?: string | null,
};

export type ModelTodosConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelTodosConditionInput | null > | null,
  or?: Array< ModelTodosConditionInput | null > | null,
  not?: ModelTodosConditionInput | null,
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
  createdAt?: string | null,
  updatedAt?: string | null,
  userId?: string | null,
};

export type DeleteTodosInput = {
  id: string,
};

export type CreateTodosUserInput = {
  id?: string | null,
  userId: string,
  todosId: string,
};

export type ModelTodosUserConditionInput = {
  userId?: ModelIDInput | null,
  todosId?: ModelIDInput | null,
  and?: Array< ModelTodosUserConditionInput | null > | null,
  or?: Array< ModelTodosUserConditionInput | null > | null,
  not?: ModelTodosUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateTodosUserInput = {
  id: string,
  userId?: string | null,
  todosId?: string | null,
};

export type DeleteTodosUserInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelTodosFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelTodosFilterInput | null > | null,
  or?: Array< ModelTodosFilterInput | null > | null,
  not?: ModelTodosFilterInput | null,
};

export type ModelTodosConnection = {
  __typename: "ModelTodosConnection",
  items:  Array<Todos | null >,
  nextToken?: string | null,
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
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTodosFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodosFilterInput | null > | null,
};

export type ModelSubscriptionTodosUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  todosId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodosUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodosUserFilterInput | null > | null,
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
    } | null,
    createdAt: string,
    updatedAt: string,
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
    } | null,
    createdAt: string,
    updatedAt: string,
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
    } | null,
    createdAt: string,
    updatedAt: string,
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
    createdAt?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
    Users?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
    } | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
    Users?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
    } | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
    Users?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
    } | null,
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
    },
    todos:  {
      __typename: "Todos",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
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
    },
    todos:  {
      __typename: "Todos",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
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
    },
    todos:  {
      __typename: "Todos",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
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
    } | null,
    createdAt: string,
    updatedAt: string,
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
    } | null >,
    nextToken?: string | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
    Users?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
    } | null,
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
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
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
    },
    todos:  {
      __typename: "Todos",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
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
    } | null >,
    nextToken?: string | null,
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
    } | null >,
    nextToken?: string | null,
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
    } | null >,
    nextToken?: string | null,
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
    } | null,
    createdAt: string,
    updatedAt: string,
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
    } | null,
    createdAt: string,
    updatedAt: string,
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
    } | null,
    createdAt: string,
    updatedAt: string,
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
    createdAt?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
    Users?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
    } | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
    Users?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
    } | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
    Users?:  {
      __typename: "ModelTodosUserConnection",
      nextToken?: string | null,
    } | null,
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
    },
    todos:  {
      __typename: "Todos",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
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
    },
    todos:  {
      __typename: "Todos",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
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
    },
    todos:  {
      __typename: "Todos",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
