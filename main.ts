import Server from "./server.ts";

async function main() {
  const server = new Server();

  console.log("Cadastro command new ");
  await server.executeCommand("new", 1, "Ana");
  await server.executeCommand("new", 2, "Bruno");

  console.log("Consulta por id command get ");
  await server.executeCommand("get", 1);

  console.log("Printa todos command all ");
  await server.executeCommand("all");

  console.log("Remocao command delete ");
  await server.executeCommand("delete", 1);

  console.log("Printa apos remocao ");
  await server.executeCommand("all");
}

main();
("");
