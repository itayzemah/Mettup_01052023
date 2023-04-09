import { initApp } from "../app";
import { Adapters } from "../init.adapter";
import { FakeUserDao } from "./fake.adapters";

const fakeAdapters: Adapters = {
  userDao: new FakeUserDao(),
};

export function createFakeApp(overrideAdapters?: Partial<Adapters>) {
  const adapters = { ...fakeAdapters, ...overrideAdapters };
  const app = initApp(adapters);

  return { app, adapters };
}
