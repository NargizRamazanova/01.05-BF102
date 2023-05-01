import { getPostById } from "./service.js"

const postId = window.location.search.slice(4)

const h2 = document.querySelector("h2")
const p = document.querySelector("p")
const span = document.querySelector("span")


async function Detail(){
    const post = await getPostById(postId);

    h2.innerText = post.title
    p.innerText = post.body
    span.innerText = post.userId
}

Detail()
