const bankModal = document.getElementById('money-modal');
const moneyInfo = document.getElementById('money-info');
const moneyName = document.getElementById('money-name');
const moneyBank = document.getElementById('money-bank');
const moneyName2 = document.getElementById('money-name2');
const moneyBank2 = document.getElementById('money-bank2');

let name = "dinner";
let bank = '';

const closeMoney = () => {
  bankModal.style.display = 'none';
  document.querySelector('body').style.overflow = 'auto';
};

const openMoneyModal = (changeName) => {
  bankModal.style.display = 'block';
  document.querySelector('body').style.overflow = 'hidden';
  name = changeName;

  if (name === 'angie') {
    moneyInfo.innerText = '신부측 마음 전하실 곳';
    moneyName.innerText = '길은선';
    moneyBank.innerText = '신한은행 110476417750';
    moneyName2.innerText = '김경자';
    moneyBank2.innerText = '농협은행 20101752084459';
  } else if (name === 'dinner') {
    moneyInfo.innerText = '신랑측 마음 전하실 곳';
    moneyName.innerText = '강전혁';
    moneyBank.innerText = '국민은행 94313823445';
    moneyName2.innerText = '왕혜신';
    moneyBank2.innerText = '국민은행 45540291101286';
  }
};

const copyBank = (number) => {
  let text = `${moneyName.textContent} ${moneyBank.textContent}`;
  if (number) text = `${moneyName2.textContent} ${moneyBank2.textContent}`;

  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = text;
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);
  alert(`${text} 복사되었습니다.`);
};