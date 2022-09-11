
const handleOnChangeText = (event, inputName) => {
  state[inputName] = event.target.value
  render()
}
const render = () => {
  const root = document.getElementById('root')
  root.innerHTML = App()
}
const state = {
  inputAdSoyad: '',
  inputBakiye: '',
  inputAmount: '',
  inputTransactionSender: '1',
  inputTransactionReceiver: '2',
  userList: [
    { id: '1', adSoyad: 'Hakan Özoğlu', bakiye: 1000 },
    { id: '2', adSoyad: 'Pelin Hangişi', bakiye: 2000 },
    { id: '3', adSoyad: 'Burcu Yılmaz', bakiye: 500 },
    { id: '4', adSoyad: 'İlayda Yurttakalan', bakiye: 1500 },
  ],
}

const App = () => {
  return `<div class="container">
    <div class="left">
    <div class="addUserForm">${AddUserForm()}
    </div>
    <div class="userList">${UserList()}</div>
    </div>
    <div class="center">
    <div class="transactionForm">
        ${TransactionForm()}
    </div>
    </div>
    <div class="right">a</div>
    </div>`
}

const TransactionForm = () => {
  return `<form>
    ${UserSelectList({ name: 'sender',stateControl:"inputTransactionSender", value:`${state.inputTransactionSender}`})}
    <input  value="${state.inputAmount}" onchange="handleOnChangeText(event,'inputAmount')"  type="text" name="amount" placeholder="miktar"/>
    ${UserSelectList({ name: 'receiver',stateControl:"inputTransactionReceiver", hidden:`${state.inputTransactionSender}`})}
    <button type="button" onclick="javascript:handleTransaction()">Gönder</button>
    </form>`
}

const UserSelectList = (props) => {
  return `<select onchange="javascript:handleOnChangeText(event,'${props.stateControl}')" name="${props.name}">
    ${state.userList.filter(user=>user.id!==props.hidden)
      .map(
        (user) =>
          '<option ' + (user.id === state[props.stateControl] ? 'selected' : '') + ' value="' + user.id + '" >' + user.adSoyad + '</option>'
      )
      .join('')}
    </select> `
}

const AddUserForm = () => {
  return `<form class="addUserForm__form" id="addUserForm">
        <input onchange="handleOnChangeText(event,'inputAdSoyad')" value="${state.inputAdSoyad}" name="adSoyad" type="text" placeholder="Ad Soyad"/>
        <input onchange="handleOnChangeText(event,'inputBakiye')" value="${state.inputBakiye}" name="bakiye" type="text" placeholder="Bakiye"/>
        <button type="button" onclick="javascript:handleAddUser()">Ekle</button>
    </form>`
}

const UserList = () => {
  return `
    <ul>
        ${state.userList.map((user) => UserListUser(user)).join('')}
    </ul>
    `
}

const UserListUser = (props) => {
  return `<li class="userListUser__li">
    <div class="userListUser__text">
    <span>${props.adSoyad}</span>
    <span>${props.bakiye}</span></div>
    <div class="userListUser__actions"> <button>Ürünler</button>
    <button>Extre</button></div>
    </li>`
}

const handleAddUser = () => {
  //const values = getValuesFromForm("addUserForm")
  const values = {
    adSoyad: state.inputAdSoyad,
    bakiye: Number(state.inputBakiye),
    id: String(Math.round(Math.random() * 5000)),
  }
  state.userList.push(values)
  state.inputAdSoyad = ''
  state.inputBakiye = ''

  render()
}

const handleTransaction = ()=>{
    const sender = state.userList.find(user=>user.id===state.inputTransactionSender)
    const receiver = state.userList.find(user=>user.id===state.inputTransactionReceiver)
    if (sender.bakiye<Number(state.inputAmount)){
        alert("adamda o kadar para yok")
        return;
    }
    sender.bakiye = sender.bakiye - Number(state.inputAmount)
    receiver.bakiye = receiver.bakiye + Number(state.inputAmount)
    state.inputAmount = ""

    render()
}

render()
