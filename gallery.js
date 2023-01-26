const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const imgArea = document.getElementById('img-area');

const tagList = ['all', 'wedding', 'dinner', 'angie', 'hodu'];
let selectedTag = tagList[0];
let selectedImg = '';

const changeTag = (index) => {
  document.getElementById(selectedTag).classList.remove('active');
  selectedTag = tagList[index];
  document.getElementById(selectedTag).classList.add('active');
  setImages();
};

const showMoreImages = (url) => {
  document.querySelector('body').style.overflow = 'hidden';
  modal.style.display = 'flex';
  imgArea.innerHTML = '';
  const img = document.createElement('div');
  img.innerHTML = `<img src="${url}" alt="결혼사진" />`;
  imgArea.append(img);
};

const closeModal = () => {
  modal.style.display = 'none';
  document.querySelector('body').style.overflow = 'auto';
};


const setImages = () => {
  gallery.innerHTML = '';

  imageList.forEach((item,) => {
    if (selectedTag === 'all' || item.tag === selectedTag) {
      const list = document.createElement('li');
      list.innerHTML = `<img class="imgs" src="${item.url}" alt="결혼사진" />`;

      list.addEventListener('click', () => {
        showMoreImages(item.url);
      });

      gallery.append(list);
    }
  });
}
setImages();

