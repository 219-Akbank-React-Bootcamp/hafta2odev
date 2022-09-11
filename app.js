const getValuesFromForm = (formId)=>{
    const f = document.getElementById(formId)
    return Array.from(f.childNodes).filter(node=>node.tagName === "INPUT")
    .reduce((prev,curr)=>{
        prev[curr.name] = curr.value
        return prev
    },{})
}
const handleOnChangeText = (event,inputName)=>{
    state[inputName]=event.target.value
}

const state = {
    inputAdSoyad:"",
    inputBakiye:"",
    userList: [
        {id:1,adSoyad:"Hakan Özoğlu",bakiye:1000},
        {id:2,adSoyad:"Pelin Hangişi",bakiye:2000},
        {id:3,adSoyad:"Burcu Yılmaz",bakiye:500},
        {id:4,adSoyad:"İlayda Yurttakalan",bakiye:1500},
    ]
}

const App = ()=>{
    return `<div class="container">
    <div class="left">
    <div class="addUserForm">${AddUserForm()}</div>
    <div class="userList">${UserList()}</div>
    </div>
    <div class="center">a</div>
    <div class="rigt">a</div>
    </div>`
}

const AddUserForm = ()=>{
    return `<form class="addUserForm__form" id="addUserForm">
        <input onchange="handleOnChangeText(event,'inputAdSoyad')" value="${state.inputAdSoyad}" name="adSoyad" type="text" placeholder="Ad Soyad"/>
        <input onchange="handleOnChangeText(event,'inputBakiye')" value="${state.inputBakiye}" name="bakiye" type="text" placeholder="Bakiye"/>
        <button type="button" onclick="javascript:handleAddUser()">Ekle</button>
    </form>`
}

const UserList = () => {
    return `
    <ul>
        ${state.userList.map(user=>UserListUser(user)).join("")}
    </ul>
    `
}

const UserListUser = (props)=>{
    return `<li class="userListUser__li">
    <div class="userListUser__text">
    <span>${props.adSoyad}</span>
    <span>${props.bakiye}</span></div>
    <div class="userListUser__actions"> <button>Ürünler</button>
    <button>Extre</button></div>
    </li>`
}

const render = ()=>{
    const root = document.getElementById("root")
    root.innerHTML = App()
}

const handleAddUser = ()=>{
    //const values = getValuesFromForm("addUserForm")
    const values = {
        adSoyad : state.inputAdSoyad,
        bakiye:state.inputBakiye,
        id:Math.round(Math.random()*5000)
     }
    state.userList.push(values)
    state.inputAdSoyad = ""
    state.inputBakiye = ""

    render()
}



render()

/* ["a","b"].join(" ") = "a b"
"a b".split(" ") */