import state from '../state.js'

const AddProductForm = () => {
    return `<form  class="addProductForm__form">
    <input onchange="handleOnChangeText(event,'inputProductName')" value="${state.inputProductName}" name="productName" type="text" placeholder="ürün Adı"/>
    <input onchange="handleOnChangeText(event,'inputQuantity')" value="${state.inputQuantity}" name="quantity" type="text" placeholder="ürün Adedi"/>
    <input onchange="handleOnChangeText(event,'inputPrice')" value="${state.inputPrice}" name="price" type="text" placeholder="ürün Fiyatı"/>
    <button type="button" onclick="javascript:handleAddProduct()">Ekle</button>
  
  </form>`
  }

  export default AddProductForm