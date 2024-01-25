import{i as m,S as d}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c=document.querySelector(".form-search"),p=document.querySelector(".gallery-list"),l="42027651-7bedd500762feb24dffc0a2de";let a="";const h={captionsData:"alt",captionPosition:"bottom",captionDelay:250},g={class:"izi-toast-error-style",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",iconUrl:"./img/octagon.svg"};c.addEventListener("submit",y);function y(o){o.preventDefault(),p.innerHTML="",a=o.target.elements.search.value,b().then(r=>L(r)).catch(r=>console.log(r)),c.reset()}function b(){return console.log(`https://pixabay.com/api/?key=${l}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`),fetch(`https://pixabay.com/api/?key=${l}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function L(o){if(console.log(o),o.hits==0)m.error(g);else{const r=o.hits.map(({largeImageURL:n,webformatURL:i,tags:e,likes:t,views:s,comments:f,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img class="gallery-image" src="${i}" alt="${e}" width="360" height="200"/>
          </a>
          <div class="item-info">
          <p class="item-info-p">Likes <span>${t}</span></p>
          <p class="item-info-p">Views <span>${s}</span></p>
          <p class="item-info-p">Comments <span>${f}</span></p>
          <p class="item-info-p">Downloads <span>${u}</span></p>
          </div>
          </li>`).join("");p.insertAdjacentHTML("beforeend",r),new d(".gallery-list a",h)}}
//# sourceMappingURL=commonHelpers.js.map
