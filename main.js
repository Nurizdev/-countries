const hero=document.querySelector(".hero")
const blackMode=document.querySelector(".black-mode")
const body=document.querySelector("body")
const title=document.querySelector(".title")
const regionSelect=document.querySelector(".region-select")
const searchInput=document.querySelector(".search-input")




fetch("https://restcountries.com/v3.1/all")
.then((res)=> res.json())
.then((data)=>{
const allCountries=data;

    function createCountries(el)  {
       const block= document.createElement("div");
       block.classList.add("block");
      

       //flags

       const img=document.createElement("img");
       img.classList.add("img");
       img.src=`${el.flags.svg}`;
       block.appendChild(img);

// name countries

       const title=document.createElement("h2")
       title.classList.add("title");
       title.innerHTML= el.name.common;
       block.appendChild(title);
     
    
       //info countries
       //region

       const region=document.createElement("h4");
      region.classList.add("region");
      region.innerHTML=`region : ${el.region}`;
      block.appendChild(region);

//population
const population=document.createElement("h4");
population.classList.add("population");
population.innerHTML=`population : ${el.population}`;
block.appendChild(population);

// capital

const capital=document.createElement("h4");
capital.classList.add("capital");
capital.innerHTML=`capital : ${el.capital}`;
block.appendChild(capital);

hero.appendChild(block)

    };

    //filter region

function displayCountries(region = "all", searchValue = ""){
   hero.innerHTML="";
   let filteredCountries=
   region==="all"
   ? allCountries
   : allCountries.filter((el) => el.region === region);

if ( searchValue !==""){
   filteredCountries= filteredCountries.filter((el)=>
      el.name.common.toLowerCase().includes( searchValue.toLowerCase())
   )}



   filteredCountries.forEach(createCountries);

   }

   displayCountries()


regionSelect.addEventListener("change",(e) => {
   const selectedRegion= e.target.value;
   displayCountries(selectedRegion,searchInput.value);
});

searchInput.addEventListener("input",(e) =>{
   const searchValue = e.target.value;
   displayCountries(regionSelect.value,  searchValue);
});
})


 .catch(error=>{
    console.log(error);
});

// button dark and light mode

blackMode.addEventListener("click",() =>{
if( body.style.background === "black"){
   body.style.background="white";
   title.style.color="black";
   blackMode.innerHTML="Dark Mode";

} else{
   body.style.background="black";
     title.style.color="white";
     blackMode.innerHTML="Light Mode";
   
}
});


