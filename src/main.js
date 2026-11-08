import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton
} from './js/render-functions.js';

const form = document.querySelector('.form');
const loadMoreButton = document.querySelector('.btn-load-more');

let query;
let page = 1;
let data;

const renderResult = async (query, page) => {
  showLoader();
  showLoadMoreButton(loadMoreButton);
  try {
    data = await getImagesByQuery(query, page);
    if (data.hits.length === 0) {
      iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
    }    

    createGallery(data.hits);
  }
  catch (error) {
    console.log('Error: ', error.message);
  }

  finally {
    hideLoader();
  }

}

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  query = formData.get('search-text').trim();
  if (!query) {
    return;
  }
  clearGallery();
  renderResult(query, 1)
  e.currentTarget.reset();
});

const scrollAfterClickLoadMore = () => {
  const item = document.querySelector('.gallery-item');

  const itemHeight = item.getBoundingClientRect().height;

  scrollBy({
    top: itemHeight * 2,
    behavior: "smooth",
  })
}

loadMoreButton.addEventListener('click', async () => {
  const maxPages = Math.ceil(data.totalHits / 15);
  
  if (page > maxPages) {
    hideLoadMoreButton(loadMoreButton);
    iziToast.error({
          message:
            "We're sorry, but you've reached the end of search results",
          position: 'topRight',
    });
    return;
  }
  page++;
  await renderResult(query, page);
  scrollAfterClickLoadMore();
})