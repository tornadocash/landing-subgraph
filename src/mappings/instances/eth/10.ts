import { handleTornadoDeposit } from "../../core";
import { Deposit } from "../../../../generated/eth10/Tornado";

export function handleDeposit(event: Deposit): void {
  handleTornadoDeposit("ETH", event);
}
