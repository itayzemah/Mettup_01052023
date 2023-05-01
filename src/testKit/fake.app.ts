import { initApp } from "../app";
import { Adapters } from "../init.adapter";
import { FakeToDoDao, FakeUserDao } from "./fake.adapters";

export function createFakeApp(overrideAdapters?: Partial<Adapters>) {
  const adapters = { ...fakeAdapters, ...overrideAdapters };
  const app = initApp(adapters);

  return { app, adapters };
}

const fakeAdapters: Adapters = {
  userDao: new FakeUserDao(),
  toDoDao: new FakeToDoDao(),
} as const;
