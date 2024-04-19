// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Todos, TodosUser } = initSchema(schema);

export {
  User,
  Todos,
  TodosUser
};