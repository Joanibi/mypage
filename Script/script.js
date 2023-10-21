window.onload = function () {
    window.addEventListener("contextmenu", e => e.preventDefault());
} 

(function(b) {
    var a = {
        version: "0.0.1",
        history_api: typeof history.pushState !== "undefined",
        init: function() {
            b.location.hash = "#no-back";
            a.configure();
        },
        hasChanged: function() {
            if (b.location.hash == "#no-back") {
                b.location.hash = "#";
                b.location.href = "https://go.perfectpay.com.br/PPU38CN6PO2"; //LINK PARA REDIRECIONAR AQUI
            }
        },
        checkCompat: function() {
            if (b.addEventListener) {
                b.addEventListener("hashchange", a.hasChanged, false);
            } else {
                if (b.attachEvent) {
                    b.attachEvent("onhashchange", a.hasChanged);
                } else {
                    b.onhashchange = a.hasChanged;
                }
            }
        },
        configure: function() {
            if (b.location.hash == "#no-back") {
                if (this.history_api) {
                    history.pushState(null, "", "#");
                } else {
                    b.location.hash = "#";
                    b.location.href = "https://go.perfectpay.com.br/PPU38CN6PO2"; //LINK PARA REDIRECIONAR AQUI
                }
            }
            a.checkCompat();
            a.hasChanged();
        }
    };
    if (typeof define === "function" && define.amd) {
        define(function() {
            return a;
        });
    } else {
        if (typeof module === "object" && module.exports) {
            module.exports = a;
        } else {
            b.noback = a;
        }
    }
    a.init();
}(window));

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
