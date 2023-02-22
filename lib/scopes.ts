import { Provider } from "./config";

export const scopes: Record<Provider, string> = {
  github: "repo,user",
  gitlab: "api",
};
