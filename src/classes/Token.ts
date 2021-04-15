import { store, BigInt } from "@graphprotocol/graph-ts";
import { Token as generatedToken } from "../../generated/schema";

export class Token extends generatedToken {
  constructor(name: string) {
    super(name);
    this.depositedAmount = BigInt.fromI32(0);
    this.totalDeposits = 0;
    this.totalUsers = 0;
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  addDeposit(value: BigInt): void {
    this.totalDeposits = this.totalDeposits + 1;
    this.depositedAmount = this.depositedAmount.plus(value);
  }

  addUser(): void {
    this.totalUsers = this.totalUsers + 1;
  }
}
