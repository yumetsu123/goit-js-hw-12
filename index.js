import{a as y,S as h,i as u}from"./assets/vendor-BX8YMJUK.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const g="https://pixabay.com/api/",L="58349884-cb67c3693c894603089b85818",b=async(e,r)=>await(await y.get(g,{params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data,p=document.querySelector(".gallery"),m=document.querySelector(".loader"),w=new h(".gallery a",{captionsData:"alt",captionDelay:250}),v=e=>{const r=e.map(o=>`
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
      `).join("");p.insertAdjacentHTML("beforeend",r),w.refresh()},S=()=>{p.innerHTML=""},q=()=>{m.classList.remove("hidden")},M=()=>{m.classList.add("hidden")},B=e=>{e.classList.remove("hidden")},D=e=>{e.classList.add("hidden")},P=document.querySelector(".form"),d=document.querySelector(".btn-load-more");let a,l=1,n;const f=async(e,r)=>{q(),B(d);try{n=await b(e,r),n.hits.length===0&&u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),v(n.hits)}catch(o){console.log("Error: ",o.message)}finally{M()}};P.addEventListener("submit",e=>{e.preventDefault(),a=new FormData(e.currentTarget).get("search-text").trim(),a&&(S(),f(a,1),e.currentTarget.reset())});const R=()=>{const r=document.querySelector(".gallery-item").getBoundingClientRect().height;scrollBy({top:r*2,behavior:"smooth"})};d.addEventListener("click",async()=>{const e=Math.ceil(n.totalHits/15);if(l>e){D(d),u.error({message:"We're sorry, but you've reached the end of search results",position:"topRight"});return}l++,await f(a,l),R()});
//# sourceMappingURL=index.js.map
