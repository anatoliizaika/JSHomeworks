function fetchPost() {
    return fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(post => {
            console.log("Post:", post);
            return post;
        });
}

function fetchComments() {
    return fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
        .then(response => response.json())
        .then(comments => {
            console.log("Comments:", comments);
            return comments;
        });
}


fetchPost();
fetchComments();