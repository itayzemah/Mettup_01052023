import { KnexUserDao, UserDao } from "./dao/user";

export function initAdapters(): Adapters {
  const userDao = new KnexUserDao();
  return { userDao };
}
export type Adapters = {
  userDao: UserDao;
};
