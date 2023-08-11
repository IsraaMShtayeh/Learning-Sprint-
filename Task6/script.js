
 async function fetchCharacter(url){
    const response=  await fetch(url);
const body =await response.json();
 return body.results;
    
    
 }
 (async () => {
    try {
        let results= await fetchCharacter("https://rickandmortyapi.com/api/character");
        results=results.filter((item)=> item.status==='Alive');
        console.log(results);
        let data="" ;
        let i=0;
        const size= results.length > 50 ? 50 : results.length ;
        for( i=0;i<size;i++){   
        data=data+`
        <li>
        <section class="section">
  <img src="${results[i].image}" class="image" />
  <div class="content">
    <h2 >
    ${results[i].name}
    </h2>
    <p class="paragraph">
 <a href="${results[i].location.url}">    location :  ${results[i].location.name}</a>
     species : ${results[i].species}
     <br>
     gender : ${results[i].gender}
      </p>
  </div>
</section>
       
        </li>
       `;
        }
       
        document.getElementById("characterList").innerHTML=data;

    } catch (err) {
      console.log(err);
    }
  })();
 