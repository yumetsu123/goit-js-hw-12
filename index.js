import{a as h,S as g,i as d}from"./assets/vendor-BX8YMJUK.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const L="https://pixabay.com/api/",w="58349884-cb67c3693c894603089b85818",b=async(e,r)=>await(await h.get(L,{params:{key:w,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data,m=document.querySelector(".gallery"),f=document.querySelector(".loader"),v=new g(".gallery a",{captionsData:"alt",captionDelay:250}),S=e=>{const r=e.map(o=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${o.largeImageURL}">
            <img
              class="gallery-image"
              src="${o.webformatURL}"
              alt="${o.tags}"
            />
          </a>

          <div class="image-info">
            <p><span>Likes</span>${o.likes}</p>
            <p><span>Views</span>${o.views}</p>
            <p><span>Comments</span>${o.comments}</p>
            <p><span>Downloads</span>${o.downloads}</p>
          </div>
        </li>
      `).join("");m.insertAdjacentHTML("beforeend",r),v.refresh()},q=()=>{m.innerHTML=""},M=()=>{f.classList.remove("hidden")},R=()=>{f.classList.add("hidden")},B=e=>{e.classList.remove("hidden")},p=e=>{e.classList.add("hidden")},D=document.querySelector(".form"),n=document.querySelector(".btn-load-more");let i,u=1,a;const y=async(e,r)=>{p(n),M();try{if(a=await b(e,r),a.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(a.hits);const o=Math.ceil(a.totalHits/15);r>=o?(p(n),d.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"})):B(n)}catch{d.error({message:"Sorry, something went wrong",position:"topRight"})}finally{R()}};D.addEventListener("submit",async e=>{e.preventDefault(),u=1,i=new FormData(e.currentTarget).get("search-text").trim(),i&&(q(),await y(i,1),e.currentTarget.reset())});const P=()=>{const e=document.querySelector(".gallery-item");if(!e)return;const r=e.getBoundingClientRect().height;scrollBy({top:r*2,behavior:"smooth"})};n.addEventListener("click",async()=>{u++,await y(i,u),P()});
//# sourceMappingURL=index.js.map
