import { ethereum } from "@graphprotocol/graph-ts";
import { Token, User } from "../classes";

export function handleTornadoDeposit(
  tokenId: string,
  event: ethereum.Event
): void {
  let token = Token.load(tokenId);
  if (token == null) {
    token = new Token(tokenId);
  }

  token.addDeposit(event.transaction.value);

  let userId = event.transaction.from.toHex();
  let user = User.load(userId);
  if (user == null) {
    user = new User(userId);
    token.addUser();
  }

  user.addTx();

  token.save();
  user.save();
}
