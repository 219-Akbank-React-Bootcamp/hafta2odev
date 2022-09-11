const UserProducts = (props) => {
    const userProducts = state.userList.find(
      (user) => user.id === props.userId
    ).products
    return `
    <button onclick="javascript:handleUnselectCurrentUser()">Kapat</button>
      <ul>
          ${userProducts
            .map((prod) => {
              return `<li class="userProduct_product"><span>${prod.productName}</span><span>${prod.price}</span></li>`
            })
            .join('')}
      </ul>
      `
  }

  export default UserProducts