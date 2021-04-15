import { handleTornadoDeposit } from "../../core";
import { Deposit } from "../../../../generated/eth01/Tornado";

export function handleDeposit(event: Deposit): void {
  handleTornadoDeposit("ETH", event);
}
