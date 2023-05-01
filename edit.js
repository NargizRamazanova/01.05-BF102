import { getPostById, updatePost } from "./service.js"

const postId = window.location.search.slice(4)
const titleInput = document.querySelector(".title")
const bodyInput = document.querySelector(".body")
const saveBtn = document.querySelector(".btn-success")

async function edit(){
    const post = await getPostById(postId)
    titleInput.value = post.title;
    bodyInput.value = post.body;
    
    saveBtn.addEventListener("click", async function(){
        console.log("here") 
        post.title = titleInput.value.trim();
        post.body = bodyInput.value.trim();

        const res = await updatePost(post);
        console.log(res)
    })
}
edit()
