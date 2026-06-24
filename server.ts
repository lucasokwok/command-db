import AllCommand from "./allCommand.ts";
import type ICommand from "./command.ts";
import DeleteCommand from "./deleteCommand.ts";
import GetCommand from "./getCommand.ts";
import NewCommand from "./newCommand.ts";
import Pessoa from "./pessoa.ts";

export default class Server{
  public pessoas: Pessoa[] = [];
  public commands: Map<string, ICommand> = new Map();

  constructor() {
    this.commands.set("get", new GetCommand(this.pessoas));
    this.commands.set("all", new AllCommand(this.pessoas));
    this.commands.set("new", new NewCommand(this.pessoas));
    this.commands.set("delete", new DeleteCommand(this.pessoas));
  }

  public async executeCommand(commandName: string, ...args: any[]): Promise<void> {
    const command = this.commands.get(commandName);
    if (!command) {
      console.log("Command " + commandName + " not found");
      return;
    }
    await command.execute(...args);
  }
}
