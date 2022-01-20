var list;
var deleted=[];
function start(){
   
     list=localStorage.getItem('fav');
    // getSearchResult(id)
    displayCharacteSearch(JSON.parse(list));
}

const displayCharacteSearch = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <a id=${character.id} href='Superhero.html?id=${character.id} target='_blank'><li class="character">
                <h2>${character.name}</h2>
                <p>id: ${character.id}</p>
 
                <p></P>
                
                <img src="${character.url}"></img>
            </li></a>
           <span class='${character.id}' onClick="deleteFav('${character.id}')"  style='font-size:50px;color:grey;margin-left:25px;margin-top:-10px;'>Delete</span> 
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;

    
};


function deleteFav(id){
    var temp=JSON.parse(list);
    list= temp.filter(x => x.id !=id);
    localStorage.setItem('fav',JSON.stringify(list));
    deleted.push(id);
    localStorage.setItem('del',JSON.stringify(deleted));
document.getElementById(id).style.display='none';
document.getElementsByClassName(id)[0].style.display='none';
}

