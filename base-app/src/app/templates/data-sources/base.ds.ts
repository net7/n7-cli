import { DataSource } from "@net7/core";

export class BaseDS extends DataSource {
  protected transform(data: unknown): unknown {
    console.warn("TODO: update input and output types", data);
    return data;
  }
}
