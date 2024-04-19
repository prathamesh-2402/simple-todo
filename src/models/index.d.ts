import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly todoss?: (TodosUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly todoss: AsyncCollection<TodosUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerTodos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly userId?: string | null;
  readonly Users?: (TodosUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly userId?: string | null;
  readonly Users: AsyncCollection<TodosUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todos = LazyLoading extends LazyLoadingDisabled ? EagerTodos : LazyTodos

export declare const Todos: (new (init: ModelInit<Todos>) => Todos) & {
  copyOf(source: Todos, mutator: (draft: MutableModel<Todos>) => MutableModel<Todos> | void): Todos;
}

type EagerTodosUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TodosUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly todosId?: string | null;
  readonly user: User;
  readonly todos: Todos;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodosUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TodosUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly todosId?: string | null;
  readonly user: AsyncItem<User>;
  readonly todos: AsyncItem<Todos>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TodosUser = LazyLoading extends LazyLoadingDisabled ? EagerTodosUser : LazyTodosUser

export declare const TodosUser: (new (init: ModelInit<TodosUser>) => TodosUser) & {
  copyOf(source: TodosUser, mutator: (draft: MutableModel<TodosUser>) => MutableModel<TodosUser> | void): TodosUser;
}