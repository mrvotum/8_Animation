export default class CallbackChat {
  constructor(holder) {
    this.holder = holder;
    this.button = document.querySelector('[data-id=callbackChat]');
  }

  create() {
    this.addListenerButton();
  }

  addListenerButton() {
    this.button.addEventListener('click', (event) => {
      // борьба со всплытием (при нажатии на крестик создавался
      // новый чат-окно)
      if (event.toElement.getAttribute('data-id') === 'callbackChat') {
        this.button.classList.add('hideBtn');
        this.button.classList.remove('showBtn');

        const chatEl = document.createElement('div');
        chatEl.className = 'window_holder showChat';

        chatEl.innerHTML = `<div class="window_header">
          <span class="title">Напишите нам</span>
          <span data-id="closeBtn" class="close">X</span>
        </div>
        <div class="form_holder">
          <form action="">
            <textarea class="textarea" rows="10"></textarea>
            <input class="btn_submit" type="submit">
          </form>
        </div>`;

        this.holder.appendChild(chatEl);

        chatEl.style.marginTop = `${-chatEl.offsetHeight}px`;
        chatEl.style.marginLeft = `calc(50% - ${chatEl.offsetWidth}px)`;
        console.info(this.button.marginLeft);

        this.addListenerButtonClose(chatEl);
      }
    });
  }

  addListenerButtonClose(chatEl) {
    const closeBtn = chatEl.querySelector('[data-id=closeBtn]');
    closeBtn.addEventListener('click', () => {
      closeBtn.parentElement.parentElement.classList.add('hideChat');

      setTimeout(() => {
        closeBtn.parentElement.parentElement.remove();
      }, 1000);

      this.button.classList.remove('hideBtn');
      this.button.classList.add('showBtn');
    });
  }
}