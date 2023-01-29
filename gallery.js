const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const imgArea = document.getElementById('img-area');

const tagList = ['all', 'wedding', 'hodu'];
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
  img.innerHTML = `<img class="gallery-img" src="${url}" alt="결혼사진" onclick="event.stopPropagation()" />`;
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
  if (!nextImg) return;
  imgArea.innerHTML = '';

  const img = document.createElement('div');
  img.innerHTML = `<img class="gallery-img" src="${nextImg.url}" alt="결혼사진" onclick="event.stopPropagation()"  />`;
  selectedImg = nextImg.url;
  checkArrow(index + direction);
  imgArea.append(img);
};

const checkArrow = (idx) => {
  const index = {
    first: 0,
    last: 39,
  };
  if (selectedTag === 'wedding') {
    index.last = 24;
  } else if (selectedTag === 'hodu') {
    index.first = 24;
    index.last = 39;
  }
  if (idx === index.first) {
    document.getElementsByClassName('left')[0].classList.add('hidden');
  } else {
    document.getElementsByClassName('left')[0].classList.remove('hidden');
  }
  if (idx === index.last - 1) {
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

let touchstartX = 0
let touchendX = 0

function checkDirection() {
  if (modal.style.display === 'flex') {
    if (touchendX < touchstartX) moveImg(1);
    if (touchendX > touchstartX) moveImg(-1);
  }
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})