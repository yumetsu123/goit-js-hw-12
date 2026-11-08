import{a as f,S as h,i as d}from"./assets/vendor-BX8YMJUK.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const g="https://pixabay.com/api/",L="58349884-cb67c3693c894603089b85818",w=async(e,r)=>await(await f.get(g,{params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data,p=document.querySelector(".gallery"),m=document.querySelector(".loader"),b=new h(".gallery a",{captionsData:"alt",captionDelay:250}),v=e=>{const r=e.map(o=>`
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
      `).join("");p.insertAdjacentHTML("beforeend",r),b.refresh()},S=()=>{p.innerHTML=""},q=()=>{m.classList.remove("hidden")},M=()=>{m.classList.add("hidden")},R=e=>{e.classList.remove("hidden")},B=e=>{e.classList.add("hidden")},D=document.querySelector(".form"),u=document.querySelector(".btn-load-more");let a,n=1,i;const y=async(e,r)=>{q();try{if(i=await w(e,r),i.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(i.hits)}catch{d.error({message:"Sorry, something went wrong",position:"topRight"})}finally{M()}};D.addEventListener("submit",async e=>{e.preventDefault(),n=1,a=new FormData(e.currentTarget).get("search-text").trim(),a&&(S(),await y(a,1),R(u),e.currentTarget.reset())});const P=()=>{const e=document.querySelector(".gallery-item");if(!e)return;const r=e.getBoundingClientRect().height;scrollBy({top:r*2,behavior:"smooth"})};u.addEventListener("click",async()=>{const e=Math.ceil(i.totalHits/15);if(n>=e){B(u),d.error({message:"We're sorry, but you've reached the end of search results",position:"topRight"});return}n++,await y(a,n),P()});
//# sourceMappingURL=index.js.map
