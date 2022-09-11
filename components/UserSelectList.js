import state from "../state.js"
const UserSelectList = (props) => {
    return `<select onchange="javascript:handleOnChangeText(event,'${
      props.stateControl
    }')" name="${props.name}">
      ${state.userList
        .filter((user) => user.id !== props.hidden)
        .map(
          (user) =>
            '<option ' +
            (user.id === state[props.stateControl] ? 'selected' : '') +
            ' value="' +
            user.id +
            '" >' +
            user.adSoyad +
            '</option>'
        )
        .join('')}
      </select> `
  }
  export default UserSelectList