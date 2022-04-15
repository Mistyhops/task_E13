import "./scss/styles.scss";


const postNode = document.querySelector(".post_list");

function getPostList() {
    fetch("http://localhost:3000/posts")
        .then(response => response.json())
        .then(json => displayResult(json))
}


function displayResult(apiData) {
    let result = "";

    apiData.forEach(item => {
        const resultBlock = `
        <div class="post_list post_block">
          <div class="post-image">
            <img src="https://picsum.photos/300/200?random=${item.id}">
          </div>
          <div class="post-text">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </div>
        `;

        result += resultBlock;
    });

    postNode.innerHTML = result;
}


getPostList();
