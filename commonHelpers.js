import{S as f,i as m}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l=document.querySelector(".form-search"),c=document.querySelector(".gallery-list"),a=document.querySelector(".loader-wrapper"),d="42027651-7bedd500762feb24dffc0a2de",h="https://pixabay.com/api/?",p=new URLSearchParams({key:d,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:1}),g={captionsData:"alt",captionPosition:"bottom",captionDelay:250},y={theme:"dark",class:"izi-toast-error-style",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",iconUrl:"./img/octagon.svg",position:"topRight",maxWidth:"25%"},b=new f(".gallery-list a",g);l.addEventListener("submit",L);function L(r){r.preventDefault(),a.style.display="flex",c.innerHTML="",p.set("q",r.target.elements.search.value),w().then(o=>{o.totalHits>0?S(o):m.error(y),a.style.display="none"}).catch(o=>console.log(o)),l.reset()}function w(){return fetch(h+p).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const P=r=>r.map(({largeImageURL:o,webformatURL:n,tags:i,likes:e,views:t,comments:s,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${n}" alt="${i}" width="360" height="200" loading="lazy"/>
        </a>
        <div class="item-info">
        <p class="item-info-p">Likes <span>${e}</span></p>
        <p class="item-info-p">Views <span>${t}</span></p>
        <p class="item-info-p">Comments <span>${s}</span></p>
        <p class="item-info-p">Downloads <span>${u}</span></p>
        </div>
        </li>`).join("");function S(r){c.insertAdjacentHTML("beforeend",P(r.hits)),b.refresh()}
//# sourceMappingURL=commonHelpers.js.map
