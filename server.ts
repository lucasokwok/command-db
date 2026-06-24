import AllCommand from "./allCommand";
import ICommand from "./command";
import DeleteCommand from "./deleteCommand";
import GetCommand from "./getCommand";
import NewCommand from "./newCommand";
import Pessoa from "./pessoa";

export default class Server{
    pessoas: Pessoa[] = [];
    commands: Map<string, ICommand> = new Map();
    constructor() {
        this.commands.set("get", new GetCommand(this.pessoas));
        this.commands.set("all", new AllCommand(this.pessoas));
        this.commands.set("new", new NewCommand(this.pessoas));
        this.commands.set("delete", new DeleteCommand(this.pessoas));
    }
    public async executeCommand(commandName: string, ...args: any[]): Promise<void> {
        const command = this.commands.get(commandName);
        if (!command) {
            console.log("Command "+commandName+" not found");
            return;
        }
        await command.execute(...args);
    }
}