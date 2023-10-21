window.onload = function () {
    window.addEventListener("contextmenu", e => e.preventDefault());
} 

if(!document.querySelector('script[src^="https://player.pandavideo.com.br/api.v2.js"]')){
    let s=document.createElement('script'); 
    s.src='https://player.pandavideo.com.br/api.v2.js'; 
    s.async=true; document.head.appendChild(s);
}
window.pandascripttag=window.pandascripttag || [];
window.pandascripttag.push(function (){
    const p=new PandaPlayer('panda-847e7ee2-7e3f-428f-be86-505d3ec9c64e',{
        onReady(){p.loadButtonInTime({fetchApi: true})}});
    }
)
function curtiu(number) {
    if (document.getElementById('like_'+number).innerHTML=="Curtir") {
        document.getElementById('like_'+number).innerHTML = "Descurtir";
        document.getElementById('like_'+number).style.color = "#365899";
        document.getElementById('qtd_like_'+number).innerHTML++;
    } else {
        document.getElementById('like_'+number).innerHTML = "Curtir";
        document.getElementById('like_'+number).style.color = "#93979f";
        document.getElementById('qtd_like_'+number).innerHTML--;
    }
}
