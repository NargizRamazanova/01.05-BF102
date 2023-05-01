import {getAllPosts, deletePost} from './service.js'

const postsBody = document.querySelector(".row")
const searchInput = document.querySelector("#search")

getAllPosts(searchInput, createCard);


function createCard({id, body,title}){
    let col = document.createElement("div")
    col.classList.add("col-3")

    let card = document.createElement("div")
    card.classList.add("card")

    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")

    let cardTitle = document.createElement("a")
    cardTitle.setAttribute("href", `details.html?id=${id}`)
    cardTitle.classList.add("card-title")
    cardTitle.innerText = title

    let desc = document.createElement("p")
    desc.classList.add("card-text")
    desc.innerText = body;

    let deleteButton = document.createElement("button")
    deleteButton.classList.add("btn")
    deleteButton.classList.add("btn-danger")
    deleteButton.innerText = "DELETE"

    deleteButton.addEventListener("click", async function(){
        const res = await deletePost(id)
        console.log(res)
    })

    let editButton = document.createElement("a")
    editButton.setAttribute("href", `edit.html?id=${id}`)
    editButton.classList.add("btn")
    editButton.classList.add("btn-primary")
    editButton.innerText = "EDIT"

    cardBody.append(cardTitle, desc, deleteButton, editButton)
    card.append(cardBody)
    col.append(card)
    document.querySelector(".row").append(col)
    
}







