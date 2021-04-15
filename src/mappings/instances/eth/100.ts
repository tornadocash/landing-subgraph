import { handleTornadoDeposit } from "../../core";
import { Deposit } from "../../../../generated/eth100/Tornado";

export function handleDeposit(event: Deposit): void {
  handleTornadoDeposit("ETH", event);
}
