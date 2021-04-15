import { store } from "@graphprotocol/graph-ts";
import { User as generatedUser } from "../../generated/schema";

export class User extends generatedUser {
  constructor(name: string) {
    super(name);
    this.txCount = 0;
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  addTx(): void {
    this.txCount = this.txCount + 1;
  }
}
