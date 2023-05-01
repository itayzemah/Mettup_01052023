import { NextFunction, Request, Response } from "express";
import { initApp } from "./app";
import { initAdapters } from "./init.adapter";

const adapters = initAdapters();

const app = initApp(adapters);

app.listen(8090, () => {
  console.log(`Server started on port 8090`);
});
app.use((err: Error, _req: Request, _res: Response, _next: NextFunction) => {
  console.log(err);
});
