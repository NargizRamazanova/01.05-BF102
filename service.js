const API_URL = "https://jsonplaceholder.typicode.com/posts/"

export const getAllPosts = (searchInput, createCard) => {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                createCard(element)
            });

            searchInput.addEventListener("keyup", function () {
                if (this.value.trim() != "") {
                    postsBody.innerHTML = ""
                    const res = data.filter(x => x.title.toLowerCase().includes(searchInput.value.trim().toLowerCase()))
                    res.forEach(elem => createCard(elem))
                }
            })
        })
}


export const getPostById = async (postId) => {
    const res = await fetch(`${API_URL}${postId}`)
    const data = await res.json()
    return data;
}

export const createPost = async (post) => {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(post),
    })
    const data = await res.json()
    return data;
}

export const updatePost = async (post) => {
    const res = await fetch(API_URL + post.id, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(post),
    })
    const data = await res.json()
    return data;
}


export const deletePost = async (postId) => {
    const res = await fetch(API_URL+postId, {
        method: 'DELETE',
    })
    const data = await res.json()
    return data;
}