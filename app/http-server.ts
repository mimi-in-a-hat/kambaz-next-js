const DEFAULT_HTTP_SERVER = "https://kambaz-node-server-app-xj05.onrender.com";

const configuredHttpServer = process.env.NEXT_PUBLIC_HTTP_SERVER?.trim();

export const HTTP_SERVER =
  configuredHttpServer ||
  (process.env.NODE_ENV === "development" ? "http://localhost:4000" : DEFAULT_HTTP_SERVER);

export default HTTP_SERVER;