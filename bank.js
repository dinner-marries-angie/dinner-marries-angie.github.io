const bankModal = document.getElementById('money-modal');
const moneyInfo = document.getElementById('money-info');
const moneyName = document.getElementById('money-name');
const moneyBank = document.getElementById('money-bank');

let name = "dinner";
let bank = '';

const closeMoney = () => {
  bankModal.style.display = 'none';
};

const openMoneyModal = (changeName) => {
  bankModal.style.display = 'block';
  document.querySelector('body').style.overflow = 'hidden';
  name = changeName;

  if (name === 'angie') {
    moneyInfo.innerText = '신부측 마음 전하실 곳';
    moneyName.innerText = '길은선';
    moneyBank.innerText = '신한은행 110476417750';
  } else if (name === 'dinner') {
    moneyInfo.innerText = '신랑측 마음 전하실 곳';
    moneyName.innerText = '강전혁';
    moneyBank.innerText = '국민은행 94313823445';
  }
};

const copyBank = () => {
  const text = `${moneyName.textContent} ${moneyBank.textContent}`;

  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = text;
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);
  alert(`${text} 복사되었습니다.`);
};