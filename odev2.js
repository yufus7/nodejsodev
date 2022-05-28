const posts = [
    { postId: 1, description: "post 1" },
    { postId: 2, description: "post 2" },
    { postId: 3, description: "post 3" },
    { postId: 4, description: "post 4" },
];

const postList = () => {
    posts.map((post) => {
        console.log(`${post.postId} - ${post.description}`);
    });
}

function addPost(newPost) {
    const promise1 = new Promise((resolve, reject) => {
        if (newPost) {
            posts.push(newPost);
            resolve("Post Added")
        } else {
            reject("Hata")
        }
    })

    return promise1
}

async function showPosts() {
    try {
        await addPost({ postId: 5, description: "post 5" },)
        postList()
    } catch (error) {
        console.log(error);
    }
}

showPosts()
