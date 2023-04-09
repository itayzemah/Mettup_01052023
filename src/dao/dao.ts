import { getDBConnection } from "../db/config";

export abstract class KnexDao {
  protected getDbConnection() {
    return getDBConnection();
  }
}
