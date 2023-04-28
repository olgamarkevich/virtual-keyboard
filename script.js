const keyboardKeys = [
  [
    {
      keyCode: 192,
      symbol: { ru: { main: ']', shift: '[' }, en: { main: '`', shift: '~' } },
    },
    {
      keyCode: 49,
      symbol: { ru: { main: '1', shift: '!' }, en: { main: '1', shift: '!' } },
    },
    {
      keyCode: 50,
      symbol: { ru: { main: '2', shift: '"' }, en: { main: '2', shift: '@' } },
    },
    {
      keyCode: 51,
      symbol: { ru: { main: '3', shift: '№' }, en: { main: '3', shift: '#' } },
    },
    {
      keyCode: 52,
      symbol: { ru: { main: '4', shift: '%' }, en: { main: '4', shift: '$' } },
    },
    {
      keyCode: 53,
      symbol: { ru: { main: '5', shift: ':' }, en: { main: '5', shift: '%' } },
    },
    {
      keyCode: 54,
      symbol: { ru: { main: '6', shift: ',' }, en: { main: '6', shift: '^' } },
    },
    {
      keyCode: 55,
      symbol: { ru: { main: '7', shift: '.' }, en: { main: '7', shift: '&' } },
    },
    {
      keyCode: 56,
      symbol: { ru: { main: '8', shift: ';' }, en: { main: '8', shift: '*' } },
    },
    {
      keyCode: 57,
      symbol: { ru: { main: '9', shift: '(' }, en: { main: '9', shift: '(' } },
    },
    {
      keyCode: 48,
      symbol: { ru: { main: '0', shift: ')' }, en: { main: '0', shift: ')' } },
    },
    {
      keyCode: 189,
      symbol: { ru: { main: '-', shift: '_' }, en: { main: '-', shift: '_' } },
    },
    {
      keyCode: 187,
      symbol: { ru: { main: '=', shift: '+' }, en: { main: '=', shift: '+' } },
    },

    {
      keyCode: 8,
      сlassName: 'keyboard__key_special',
      symbol: {
        ru: { main: 'Backspace' },
        en: { main: 'Backspace' },
      },
    },
  ],
  [
    {
      keyCode: 9,
      сlassName: 'keyboard__key_special',
      width: '49px',
      symbol: {
        ru: { main: 'tab' },
        en: { main: 'tab' },
      },
    },
    {
      keyCode: 81,
      symbol: { ru: { main: 'й', shift: 'Й' }, en: { main: 'q', shift: 'Q' } },
    },
    {
      keyCode: 87,
      symbol: { ru: { main: 'ц', shift: 'Ц' }, en: { main: 'w', shift: 'W' } },
    },
    {
      keyCode: 69,
      symbol: { ru: { main: 'у', shift: 'У' }, en: { main: 'e', shift: 'E' } },
    },
    {
      keyCode: 82,
      symbol: { ru: { main: 'к', shift: 'К' }, en: { main: 'r', shift: 'R' } },
    },
    {
      keyCode: 84,
      symbol: { ru: { main: 'е', shift: 'Е' }, en: { main: 't', shift: 'T' } },
    },
    {
      keyCode: 89,
      symbol: { ru: { main: 'н', shift: 'Н' }, en: { main: 'y', shift: 'Y' } },
    },
    {
      keyCode: 85,
      symbol: { ru: { main: 'г', shift: 'Г' }, en: { main: 'u', shift: 'U' } },
    },
    {
      keyCode: 73,
      symbol: { ru: { main: 'ш', shift: 'Ш' }, en: { main: 'i', shift: 'I' } },
    },
    {
      keyCode: 79,
      symbol: { ru: { main: 'щ', shift: 'Щ' }, en: { main: 'o', shift: 'O' } },
    },
    {
      keyCode: 80,
      symbol: { ru: { main: 'з', shift: 'З' }, en: { main: 'p', shift: 'P' } },
    },
    {
      keyCode: 219,
      symbol: { ru: { main: 'х', shift: 'X' }, en: { main: '[', shift: '{' } },
    },
    {
      keyCode: 221,
      symbol: { ru: { main: 'ъ', shift: 'Ъ' }, en: { main: ']', shift: '}' } },
    },
    {
      keyCode: 220,
      symbol: { ru: { main: 'ё', shift: 'Ё' }, en: { main: '||', shift: '|' } },
    },
    {
      keyCode: 220,
      сlassName: 'keyboard__key_special',
      symbol: {
        ru: { main: 'del' },
        en: { main: 'del' },
      },
    },
  ],
  [
    {
      keyCode: 20,
      сlassName: 'keyboard__key_special',
      width: '98px',
      symbol: {
        ru: { main: 'caps lock' },
        en: { main: 'caps lock' },
      },
    },
    {
      keyCode: 65,
      symbol: { ru: { main: 'ф', shift: 'Ф' }, en: { main: 'a', shift: 'A' } },
    },
    {
      keyCode: 83,
      symbol: { ru: { main: 'ы', shift: 'Ы' }, en: { main: 's', shift: 'S' } },
    },
    {
      keyCode: 68,
      symbol: { ru: { main: 'в', shift: 'В' }, en: { main: 'd', shift: 'D' } },
    },
    {
      keyCode: 70,
      symbol: { ru: { main: 'а', shift: 'А' }, en: { main: 'f', shift: 'F' } },
    },
    {
      keyCode: 71,
      symbol: { ru: { main: 'п', shift: 'П' }, en: { main: 'g', shift: 'G' } },
    },

    {
      keyCode: 72,
      symbol: { ru: { main: 'р', shift: 'Р' }, en: { main: 'h', shift: 'H' } },
    },
    {
      keyCode: 74,
      symbol: { ru: { main: 'о', shift: 'О' }, en: { main: 'j', shift: 'J' } },
    },
    {
      keyCode: 75,
      symbol: { ru: { main: 'л', shift: 'Л' }, en: { main: 'k', shift: 'K' } },
    },
    {
      keyCode: 76,
      symbol: { ru: { main: 'д', shift: 'Д' }, en: { main: 'l', shift: 'L' } },
    },
    {
      keyCode: 186,
      symbol: { ru: { main: 'ж', shift: 'Ж' }, en: { main: ';', shift: ':' } },
    },
    {
      keyCode: 222,
      symbol: { ru: { main: 'э', shift: 'Э' }, en: { main: "'", shift: '"' } },
    },
    {
      keyCode: 13,
      сlassName: 'keyboard__key_special',
      width: '90px',
      symbol: {
        ru: { main: 'enter' },
        en: { main: 'enter' },
      },
    },
  ],
  [
    {
      keyCode: 16,
      сlassName: 'keyboard__key_special',
      width: '98px',
      position: 'left',
      symbol: {
        ru: { main: 'shift' },
        en: { main: 'shift' },
      },
    },
    {
      keyCode: 90,
      symbol: { ru: { main: 'я', shift: 'Я' }, en: { main: 'z', shift: 'Z' } },
    },
    {
      keyCode: 88,
      symbol: { ru: { main: 'ч', shift: 'Ч' }, en: { main: 'x', shift: 'X' } },
    },
    {
      keyCode: 67,
      symbol: { ru: { main: 'с', shift: 'С' }, en: { main: 'c', shift: 'C' } },
    },
    {
      keyCode: 86,
      symbol: { ru: { main: 'м', shift: 'М' }, en: { main: 'v', shift: 'V' } },
    },
    {
      keyCode: 66,
      symbol: { ru: { main: 'и', shift: 'И' }, en: { main: 'b', shift: 'B' } },
    },
    {
      keyCode: 78,
      symbol: { ru: { main: 'т', shift: 'Т' }, en: { main: 'n', shift: 'N' } },
    },
    {
      keyCode: 77,
      symbol: { ru: { main: 'ь', shift: 'Ь' }, en: { main: 'm', shift: 'M' } },
    },
    {
      keyCode: 188,
      symbol: { ru: { main: 'б', shift: 'Б' }, en: { main: ',', shift: '<' } },
    },
    {
      keyCode: 190,
      symbol: { ru: { main: 'ю', shift: 'Ю' }, en: { main: '.', shift: '>' } },
    },
    {
      keyCode: 191,
      symbol: { ru: { main: '/', shift: '?' }, en: { main: '/', shift: '?' } },
    },
    {
      keyCode: 38,
      сlassName: 'keyboard__key_special',
      symbol: {
        ru: { main: '▲' },
        en: { main: '▲' },
      },
    },
    {
      keyCode: 16,
      сlassName: 'keyboard__key_special',
      width: '90px',
      position: 'right',
      symbol: {
        ru: { main: 'shift' },
        en: { main: 'shift' },
      },
    },
  ],
  [
    {
      keyCode: 17,
      сlassName: 'keyboard__key_special',
      position: 'left',
      symbol: {
        ru: { main: 'ctrl' },
        en: { main: 'ctrl' },
      },
    },
    {
      keyCode: 18,
      сlassName: 'keyboard__key_special',
      position: 'left',
      symbol: {
        ru: { main: 'alt' },
        en: { main: 'alt' },
      },
    },
    {
      keyCode: 18,
      сlassName: 'keyboard__key_special',
      symbol: {
        ru: { main: 'win' },
        en: { main: 'win' },
      },
    },
    {
      keyCode: 32,
      width: '334px',
      symbol: {
        ru: { main: ' ' },
        en: { main: ' ' },
      },
    },
    {
      keyCode: 18,
      сlassName: 'keyboard__key_special',
      position: 'right',
      symbol: {
        ru: { main: 'alt' },
        en: { main: 'alt' },
      },
    },
    {
      keyCode: 37,
      сlassName: 'keyboard__key_special',
      symbol: {
        ru: { main: '◄' },
        en: { main: '◄' },
      },
    },
    {
      keyCode: 40,
      сlassName: 'keyboard__key_special',
      symbol: {
        ru: { main: '▼' },
        en: { main: '▼' },
      },
    },
    {
      keyCode: 39,
      сlassName: 'keyboard__key_special',
      symbol: {
        ru: { main: '►' },
        en: { main: '►' },
      },
    },
    {
      keyCode: 17,
      сlassName: 'keyboard__key_special',
      position: 'right',
      symbol: {
        ru: { main: 'ctrl' },
        en: { main: 'ctrl' },
      },
    },
  ],
];

console.log(navigator.language);

class RSSKeyword {
  constructor(keys, initinalLang) {
    this.keys = keys;
    this.lang = initinalLang;
    this.renderWrapper();
    this.renderKeys();

    window.addEventListener('keydown', (e) => {
      const nodes = document.querySelectorAll('.keyboard__key');

      nodes.forEach((item) => {
        if (item.getAttribute('data-keycode') == e.keyCode) {
          item.classList.add('active');
        }
      });
    });

    window.addEventListener('keyup', (e) => {
      const nodes = document.querySelectorAll('.keyboard__key');
      console.log(e);

      nodes.forEach((item) => {
        if (item.getAttribute('data-keycode') == e.keyCode) {
          item.classList.remove('active');
        }
      });
    });
  }

  renderWrapper() {
    const app = document.querySelector('#app');

    const title = document.createElement('div');
    title.className = 'title';
    title.innerText = 'RSS Virtual keyboard';
    const wrapperApp = document.createElement('div');
    wrapperApp.className = 'wrapper';
    app.appendChild(wrapperApp);
    wrapperApp.appendChild(title);
    const input = document.createElement('textarea');
    input.id = 'textarea';
    input.className = 'textarea';
    wrapperApp.appendChild(input);
    this.keyboardWrapper = document.createElement('div');
    this.keyboardWrapper.className = 'keyboard-wrapper';
    wrapperApp.appendChild(this.keyboardWrapper);
  }

  renderKeys() {
    this.keys.forEach((arrRow) => {
      const keywordsRow = document.createElement('div');
      keywordsRow.className = 'keyboard__row';

      arrRow.forEach((item) => {
        const key = `<div class="keyboard__key ${
          item.сlassName ? item.сlassName : ''
        }" ${item.width ? `style="width: ${item?.width}"` : ''} data-keyCode=${
          item.keyCode
        }>${item.symbol[this.lang].main}</div>`;
        keywordsRow.innerHTML += key;
      });

      this.keyboardWrapper.appendChild(keywordsRow);
    });
  }
}

const keyboard = new RSSKeyword(keyboardKeys, 'ru');
