
const charactersList = document.getElementById('charactersList');
// let hpCharacters = [];
var favid=[];
// const loadCharacters = async () => {
//     try {
//         const res = await fetch('https://hp-api.herokuapp.com/api/characters');
//         hpCharacters = await res.json();
//         displayCharacters(hpCharacters);
//     } catch (err) {
//         console.error(err);
//     }
// };

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.strength}</p>
                <p></p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

// loadCharacters();


var wage = document.getElementById("searchWrapper");
wage.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
       getSearchResult(document.getElementById('searchBar').value);
      // alert(wage.value);
    }
  
});


const getSearchResult = async (name) => {
    try {
        const res = await fetch('https://api.allorigins.win/raw?url=https://superheroapi.com/api/4994777060586748/search/'+name);
        var heros = await res.json();
      console.log(heros);
      charactersList.innerHTML = '';
      displayCharacteSearch(heros.results);
        //displayCharacters(hpCharacters);
      
    } catch (err) {
        console.error(err);
    }
};


const displayCharacteSearch = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <a href='Superhero.html?id=${character.id} target='_blank'><li class="character">
                <h2>${character.name}</h2>
                <p>id: ${character.id}</p>
 
                <p></P>
                <img src="${character.image.url}"></img>
            </li></a>
            <span class='${character.id}' onClick="addToFav('${character.name}','${character.id}','${character.image.url}')"  style='font-size:50px;color:grey;margin-left:25px;margin-top:-10px;'>&hearts;</span>
            
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};



function addToFav(name,id,url){
document.getElementsByClassName(id)[0].style.color='red';
    var obj = {} ;
    obj.id=id;
    obj.name=name;
    obj.url=url;
    favid.push(obj);

}

function favfunc(){
//    var temp=JSON.parse(localStorage.getItem('fav'));
//    if (temp.length >0){
//        favid.push(...temp);
//    }
localStorage.setItem('fav',JSON.stringify(favid));
    window.open('Fav.html',"_blank");

}

setInterval(deleteFav
    // var tempo=JSON.parse(localStorage.getItem('fav'));
    // favid=tempo;
   
,500);
function deleteFav(){
    var temparr=JSON.parse(localStorage.getItem('del'));
    if(temparr != null){
    for(var i =0; i<temparr.length;i++){
        document.getElementsByClassName(temparr[i])[0].style.color='grey';
        favid=favid.filter(x =>x.id !=temparr[i]);
    }
}
setInterval(deleteFav,500); 
}
