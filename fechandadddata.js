let postSelector = document.querySelector('#posts');

async function datafetch(){
    this.data = await fetch('https://jsonplaceholder.typicode.com/posts')
    return this.data.json()
}
async function fetchdata(){
    fetcheddata = await datafetch()
    return fetcheddata;
}

async function postasssigning(){
    this.postdata = await fetchdata();//data
    postdata.forEach(post => {
        const divs = createpost(post)
        postSelector.append(divs);                
    });
    
}

function createpost(post){
    const div = document.createElement('div')
    div.className = 'post'
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    h2.textContent = post.title
    p.textContent = post.body
    div.appendChild(h2);
    div.appendChild(p);
    return div
}
postasssigning()