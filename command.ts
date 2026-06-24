import type Pessoa from "./pessoa.ts";

export default interface ICommand {
  pessoas: Pessoa[];
  execute(...args: any[]): Promise<void>;
}
