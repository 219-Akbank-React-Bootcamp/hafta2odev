import state from '../state.js'
const AddUserForm = () => {
    return `<form class="addUserForm__form" id="addUserForm">
          <input onchange="handleOnChangeText(event,'inputAdSoyad')" value="${state.inputAdSoyad}" name="adSoyad" type="text" placeholder="Ad Soyad"/>
          <input onchange="handleOnChangeText(event,'inputBakiye')" value="${state.inputBakiye}" name="bakiye" type="text" placeholder="Bakiye"/>
          <button type="button" onclick="javascript:handleAddUser()">Ekle</button>
      </form>`
  }

  export default AddUserForm