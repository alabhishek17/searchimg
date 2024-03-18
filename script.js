let searchBtn=document.getElementById("searcBtn");
let searchVal=document.getElementById("searchVal");
let mainImg=document.getElementById("main-img");

// async function imgeDisplay(){

// }
searchBtn.addEventListener("click",imgeDisplay);

// function imgeDisplay(){
    // const accessKey = 'lo0FTTa2hv_QUrmGp2QSgNNSI-Y-Z0dOJyaMsoZwJM4';
//     async function ajay(){
//         let url=
//             let res=await fetch(" https://api.unsplash.com/ ",{
//                 method:'GET',
//                 headers: {'X-Api-Key': 'sZtWySsoMxqHMq0IwOyrf_f5ZH8qc-60eXn2q-C1N6A'},
//                 ContentType:"application/json"
        
//             });
//             let data=await  res.json();
//             console.log(data);
//         }
// // console.log(result);
// ajay();
// }
// imgeDisplay();


const accessKey = 'lo0FTTa2hv_QUrmGp2QSgNNSI-Y-Z0dOJyaMsoZwJM4';
function imgeDisplay(){

mainImg.innerHTML="";

async function searchImages() {
    inputData = searchVal.value;
    const url = `https://api.unsplash.com/search/photos?query=${inputData}&client_id=${accessKey}`;
  
    const response = await fetch(url);
    const data1 = await response.json();
    // console.log(data1);

    // let addImg="";
    // data1.data.forEach(element => {
    //     console.log(element);
    //     // addImg+=`<div>
    //     // <img src"${element.url.small} alt"animal"> 
    //     // </div>`
    // });
    // mainImg.innerHTML=addImg;

    let results=data1.results;
    results.map((results)=>{
       const imgdiv=document.createElement("div")
       imgdiv.classList.add("dispimg")
       const img=document.createElement("img");
       img.src=results.urls.small;

       mainImg.appendChild(img);
    })
    console.log(results);
    
}
 
searchImages()
}