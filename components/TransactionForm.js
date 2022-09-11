import state from "../state.js"
import UserSelectList from "./UserSelectList.js"

const TransactionForm = () => {
    return `<form>
      ${UserSelectList({
        name: 'sender',
        stateControl: 'inputTransactionSender',
        value: `${state.inputTransactionSender}`,
      })}
      <input  value="${
        state.inputAmount
      }" onchange="handleOnChangeText(event,'inputAmount')"  type="text" name="amount" placeholder="miktar"/>
      ${UserSelectList({
        name: 'receiver',
        stateControl: 'inputTransactionReceiver',
        hidden: `${state.inputTransactionSender}`,
      })}
      <button type="button" onclick="javascript:handleTransaction()">Gönder</button>
      </form>`
  }
  export default TransactionForm