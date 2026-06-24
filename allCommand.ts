import ICommand from "./command";
import Pessoa from "./pessoa";

export default class AllCommand implements ICommand {
constructor(public pessoas: Pessoa[]) {}    
  async execute(...args: any[]): Promise<void> {

    console.log(`Pessoas:`, this.pessoas);
}
}