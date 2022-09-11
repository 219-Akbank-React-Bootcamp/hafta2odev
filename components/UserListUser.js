import state from '../state.js'

const UserListUser = (props) => {
    return `<li class="userListUser__li ${
      state.currentUser === props.id ? 'strong' : ''
    }">
      <div class="userListUser__text">
      <span>${props.adSoyad}</span>
      <span>${props.bakiye}</span></div>
      <div class="userListUser__actions">
      <button
          onclick="javascript:handleChangeCurrentUser(${
            props.id
          },'products')">Ürünler</button>
      <button
      onclick="javascript:handleChangeCurrentUser(${props.id},'extre')"
      >Extre</button></div>
      </li>`
  }

  export default UserListUser