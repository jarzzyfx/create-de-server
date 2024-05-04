import { ProcessEnvOptions } from "child_process";
import { Express } from "express";

export interface StartProps {
  app: Express;
  port: number | ProcessEnvOptions | string;
}
