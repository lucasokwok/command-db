import Pessoa from "./pessoa";

export default interface ICommand {
  pessoas: Pessoa[];
  execute(...args: any[]): Promise<void>;
}