export default class Popoper {
  constructor(holder) {
    this.holder = holder;
    this.button = document.querySelector('[data-id=popover]');
  }

  set popoperContent(data) {
    this.data = data;
  }

  create() {
    this.addListenerButton();
  }

  addListenerButton() {
    this.button.addEventListener('click', () => {
      try {
        this.button.nextElementSibling.classList.remove('showMode');
        this.button.nextElementSibling.classList.add('hideMode');
        setTimeout(() => {
          this.button.nextElementSibling.remove();
        }, 900);
      } catch (error) {
        const popoperEl = document.createElement('div');
        popoperEl.classList = 'text_holder showMode';
        popoperEl.setAttribute('data-id', 'popover');

        popoperEl.innerHTML = `<p class="text">${this.data}</p>`;

        this.holder.appendChild(popoperEl);
      }
    });
  }
}