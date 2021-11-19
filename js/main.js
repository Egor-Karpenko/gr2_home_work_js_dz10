async function getRasponce() {
    let responce = await fetch('https://jsonplaceholder.typicode.com/posts');
    let content = await responce.json()
    content = content;

    let list = document.querySelector('.posts');
    let key;



    for (key in content) {

        list.innerHTML += `
        <li class = "post" style="border: 1px solid #000000;""font-size : 30px;" >
                <h4 >${content[key].title}</h4>
                <img src="./Без названия.jfif" width="200" > 
                
                <button id="AlertButtton">alert</button>
                <button id = "DeleteButton">delete</button>   
                
                                               
        </li>
        `
    }
    document.querySelector("#AlertButtton").onclick = function() {
        alert(`${content[key].title}`);
    }



}
getRasponce()
