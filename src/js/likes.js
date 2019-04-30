import randomCount from './randomCount';

export default class Likes {
  constructor(holder) {
    this.holder = holder;
    this.button = document.querySelector('[data-id=likesBtn]');
    this.heartCount = 0;
  }

  create() {
    this.addListenerButton();
  }

  addListenerButton() {
    this.button.addEventListener('click', () => {
      this.heartCount += 1;
      this.makeNewHeart();
    });
  }

  makeNewHeart() {
    const imgEl = document.createElement('img');
    imgEl.classList = `heart heart-animate heart-animate-${randomCount()}`;
    imgEl.setAttribute('data-id', `heart_${this.heartCount}`);
    imgEl.src = '../img/heart.png';
    imgEl.alt = 'heart';

    this.holder.appendChild(imgEl);

    imgEl.addEventListener('animationend', (event) => {
      document.querySelector(`[data-id=${event.target.getAttribute('data-id')}]`).remove();
    });
  }
}