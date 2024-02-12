let serchForm=document.getElementById('serchForm');
let searchBox=document.getElementById('searchBox');
let searchResult=document.getElementById('searchResult');
let showMoreBtn=document.getElementById('showMoreBtn');
let keyWord;
let page=1;
let accessKey="ShP3mmfVTOcRuiDGdA3MJlgMiNjJf9U4hghtJoaIMNk";
async function searchImages(){
keyWord=searchBox.value;
const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=12`;
const response=await fetch(url);
const data=await response.json();
if(page===1){
    searchResult.innerHTML='';
}
const results=data.results;
results.map((result)=>{
const image=document.createElement('img');
image.src=result.urls.small;
const imageLink=document.createElement('a');
imageLink.href=result.links.html;
imageLink.target='_blank';
imageLink.appendChild(image);
searchResult.appendChild(imageLink);
});
showMoreBtn.style.display='block';
// searchBox.value=''
}
serchForm.addEventListener('submit',(e)=>{
e.preventDefault();
page=1;
searchImages();
});
showMoreBtn.addEventListener('click',()=>{
page++;
searchImages();
});
