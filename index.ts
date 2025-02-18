console.log("Hello World");

// import fs from "fs";
// import { env } from "./src/infrasctructure/config/env/environments";
// import { server } from "./src/server";
// import { checkEnvVariables } from "./src/utils/check-env-varibles.util";
// import { AppError } from "./src/lib/app-error";
// import { appConsole } from "./src/utils/app-console";

// const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
// const apiVersion = packageJson.version;

// process.on("uncaughtException", (error: Error) => {
//   appConsole.error(error);
//   const isTrusted = error instanceof AppError;
//   if (!isTrusted) {
//     process.exit(1);
//   }
// });

// server.listen(env.app.port, () => {
//   checkEnvVariables(env);
//   appConsole.log(
//     `Server running on port ${env.app.port} version: ${apiVersion}`
//   );
// });
