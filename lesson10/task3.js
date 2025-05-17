async function fetchPost() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    return await res.json();
}
async function fetchComments() {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
    return await res.json();
}
async function getPostAndComments() {
    try {
        const post = await fetchPost();
        const comments = await fetchComments();
        console.log("Post:", post);
        console.log("Comments:", comments);
    } catch (error) {
        console.error("Error:", error);
    }
}
function getFastestResponse() {
    Promise.race([fetchPost(), fetchComments()])
        .then(result => {
            console.log("Fastest responce:", result);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}


getPostAndComments();
getFastestResponse();