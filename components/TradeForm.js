import state from "../state.js"
import UserSelectList from "./UserSelectList.js"
import ProductSelectList from "./ProductSelectList.js"
const TradeForm = () => {
    return `<form>
      ${UserSelectList({
        name: 'seller',
        stateControl: 'inputTradeSeller',
        value: `${state.inputTradeSeller}`,
      })}
      ${ProductSelectList({
        name: 'sellProduct',
        stateControl: 'inputSellProduct',
        value: `${state.inputSellProduct}`,
      })}
      ${UserSelectList({
        name: 'buyer',
        stateControl: 'inputTradeBuyer',
        hidden: `${state.inputTradeSeller}`,
      })}
      <button type="button" onclick="javascript:handleTrade()">Gönder</button>
      </form>`
  }

  export default TradeForm