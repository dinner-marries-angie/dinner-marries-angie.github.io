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

const showMoreImages = (url, idx) => {
  document.querySelector('body').style.overflow = 'hidden';
  modal.style.display = 'flex';
  checkArrow(idx);

  imgArea.innerHTML = '';
  const img = document.createElement('div');
  img.innerHTML = `<img class="gallery-img" src="${url}" alt="결혼사진" />`;
  selectedImg = url;
  imgArea.append(img);
};

const closeModal = () => {
  modal.style.display = 'none';
  document.querySelector('body').style.overflow = 'auto';
};

const moveImg = (direction) => {
  const index = imageList.findIndex(i => i.url === selectedImg);
  const nextImg = imageList[index + direction];

  imgArea.innerHTML = '';

  const img = document.createElement('div');
  img.innerHTML = `<img class="gallery-img" src="${nextImg.url}" alt="결혼사진"  />`;
  selectedImg = nextImg.url;
  checkArrow(index + direction);
  imgArea.append(img);
};

const checkArrow = (idx) => {
  if (idx === 0) {
    document.getElementsByClassName('left')[0].classList.add('hidden');
  } else {
    document.getElementsByClassName('left')[0].classList.remove('hidden');
  }
  if (idx === imageList.length - 1) {
    document.getElementsByClassName('right')[0].classList.add('hidden');
  } else {
    document.getElementsByClassName('right')[0].classList.remove('hidden');
  }
}

const setImages = () => {
  gallery.innerHTML = '';

  imageList.forEach((item, idx) => {
    if (selectedTag === 'all' || item.tag === selectedTag) {
      const list = document.createElement('li');
      list.innerHTML = `<img class="imgs" src="${item.url}" alt="결혼사진" />`;

      list.addEventListener('click', () => {
        showMoreImages(item.url, idx);
      });

      gallery.append(list);
    }
  });
}
setImages();

