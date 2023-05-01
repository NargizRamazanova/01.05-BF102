import { createPost } from "./service.js"

const titleInput = document.querySelector(".title")
const bodyInput = document.querySelector(".body")
const userIdInput = document.querySelector(".userId")
const saveBtn = document.querySelector(".btn-success")

saveBtn.addEventListener("click", async function(){
    const newPost = {
        title: titleInput.value,
        body: bodyInput.value,
        userId: userIdInput.value
    }

    const res = await createPost(newPost)
    window.location.href = './index.html'
})
