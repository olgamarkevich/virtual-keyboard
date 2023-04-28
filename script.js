const keyboardKeys = [
  [
    {
      type: 'letter',
      keyCode: 192,
      symbol: { ru: { main: ']', shift: '[' }, en: { main: '`', shift: '~' } },
    },
    {
      keyCode: 49,
      type: 'letter',
      symbol: { ru: { main: '1', shift: '!' }, en: { main: '1', shift: '!' } },
    },
    {
      keyCode: 50,
      type: 'letter',
      symbol: { ru: { main: '2', shift: '"' }, en: { main: '2', shift: '@' } },
    },
    {
      keyCode: 51,
      type: 'letter',
      symbol: { ru: { main: '3', shift: '№' }, en: { main: '3', shift: '#' } },
    },
    {
      keyCode: 52,
      type: 'letter',
      symbol: { ru: { main: '4', shift: '%' }, en: { main: '4', shift: '$' } },
    },
    {
      keyCode: 53,
      type: 'letter',
      symbol: { ru: { main: '5', shift: ':' }, en: { main: '5', shift: '%' } },
    },
    {
      keyCode: 54,
      type: 'letter',
      symbol: { ru: { main: '6', shift: ',' }, en: { main: '6', shift: '^' } },
    },
    {
      keyCode: 55,
      type: 'letter',
      symbol: { ru: { main: '7', shift: '.' }, en: { main: '7', shift: '&' } },
    },
    {
      keyCode: 56,
      type: 'letter',
      symbol: { ru: { main: '8', shift: ';' }, en: { main: '8', shift: '*' } },
    },
    {
      keyCode: 57,
      type: 'letter',
      symbol: { ru: { main: '9', shift: '(' }, en: { main: '9', shift: '(' } },
    },
    {
      keyCode: 48,
      type: 'letter',
      symbol: { ru: { main: '0', shift: ')' }, en: { main: '0', shift: ')' } },
    },
    {
      keyCode: 189,
      type: 'letter',
      symbol: { ru: { main: '-', shift: '_' }, en: { main: '-', shift: '_' } },
    },
    {
      keyCode: 187,
      type: 'letter',
      symbol: { ru: { main: '=', shift: '+' }, en: { main: '=', shift: '+' } },
    },

    {
      type: 'symbol',
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
      type: 'symbol',
      keyCode: 9,
      сlassName: 'keyboard__key_special',
      width: '49px',
      symbol: {
        ru: { main: 'tab' },
        en: { main: 'tab' },
      },
    },
    {
      type: 'letter',
      keyCode: 81,
      symbol: { ru: { main: 'й', shift: 'Й' }, en: { main: 'q', shift: 'Q' } },
    },
    {
      type: 'letter',
      keyCode: 87,
      symbol: { ru: { main: 'ц', shift: 'Ц' }, en: { main: 'w', shift: 'W' } },
    },
    {
      type: 'letter',
      keyCode: 69,
      symbol: { ru: { main: 'у', shift: 'У' }, en: { main: 'e', shift: 'E' } },
    },
    {
      type: 'letter',
      keyCode: 82,
      symbol: { ru: { main: 'к', shift: 'К' }, en: { main: 'r', shift: 'R' } },
    },
    {
      type: 'letter',
      keyCode: 84,
      symbol: { ru: { main: 'е', shift: 'Е' }, en: { main: 't', shift: 'T' } },
    },
    {
      type: 'letter',
      keyCode: 89,
      symbol: { ru: { main: 'н', shift: 'Н' }, en: { main: 'y', shift: 'Y' } },
    },
    {
      type: 'letter',
      keyCode: 85,
      symbol: { ru: { main: 'г', shift: 'Г' }, en: { main: 'u', shift: 'U' } },
    },
    {
      type: 'letter',
      keyCode: 73,
      symbol: { ru: { main: 'ш', shift: 'Ш' }, en: { main: 'i', shift: 'I' } },
    },
    {
      type: 'letter',
      keyCode: 79,
      symbol: { ru: { main: 'щ', shift: 'Щ' }, en: { main: 'o', shift: 'O' } },
    },
    {
      type: 'letter',
      keyCode: 80,
      symbol: { ru: { main: 'з', shift: 'З' }, en: { main: 'p', shift: 'P' } },
    },
    {
      type: 'letter',
      keyCode: 219,
      symbol: { ru: { main: 'х', shift: 'X' }, en: { main: '[', shift: '{' } },
    },
    {
      type: 'letter',
      keyCode: 221,
      symbol: { ru: { main: 'ъ', shift: 'Ъ' }, en: { main: ']', shift: '}' } },
    },
    {
      type: 'letter',
      keyCode: 220,
      symbol: { ru: { main: 'ё', shift: 'Ё' }, en: { main: '||', shift: '|' } },
    },
    {
      type: 'symbol',
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
      type: 'symbol',
      keyCode: 20,
      сlassName: 'keyboard__key_special',
      width: '98px',
      symbol: {
        ru: { main: 'caps lock' },
        en: { main: 'caps lock' },
      },
    },
    {
      type: 'letter',
      keyCode: 65,
      symbol: { ru: { main: 'ф', shift: 'Ф' }, en: { main: 'a', shift: 'A' } },
    },
    {
      type: 'letter',
      keyCode: 83,
      symbol: { ru: { main: 'ы', shift: 'Ы' }, en: { main: 's', shift: 'S' } },
    },
    {
      type: 'letter',
      keyCode: 68,
      symbol: { ru: { main: 'в', shift: 'В' }, en: { main: 'd', shift: 'D' } },
    },
    {
      type: 'letter',
      keyCode: 70,
      symbol: { ru: { main: 'а', shift: 'А' }, en: { main: 'f', shift: 'F' } },
    },
    {
      type: 'letter',
      keyCode: 71,
      symbol: { ru: { main: 'п', shift: 'П' }, en: { main: 'g', shift: 'G' } },
    },

    {
      type: 'letter',
      keyCode: 72,
      symbol: { ru: { main: 'р', shift: 'Р' }, en: { main: 'h', shift: 'H' } },
    },
    {
      type: 'letter',
      keyCode: 74,
      symbol: { ru: { main: 'о', shift: 'О' }, en: { main: 'j', shift: 'J' } },
    },
    {
      type: 'letter',
      keyCode: 75,
      symbol: { ru: { main: 'л', shift: 'Л' }, en: { main: 'k', shift: 'K' } },
    },
    {
      type: 'letter',
      keyCode: 76,
      symbol: { ru: { main: 'д', shift: 'Д' }, en: { main: 'l', shift: 'L' } },
    },
    {
      type: 'letter',
      keyCode: 186,
      symbol: { ru: { main: 'ж', shift: 'Ж' }, en: { main: ';', shift: ':' } },
    },
    {
      type: 'letter',
      keyCode: 222,
      symbol: { ru: { main: 'э', shift: 'Э' }, en: { main: "'", shift: '"' } },
    },
    {
      type: 'symbol',
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
      type: 'symbol',
      keyCode: 16,
      сlassName: 'keyboard__key_special',
      width: '98px',
      location: 1,
      symbol: {
        ru: { main: 'shift' },
        en: { main: 'shift' },
      },
    },
    {
      type: 'letter',
      keyCode: 90,
      symbol: { ru: { main: 'я', shift: 'Я' }, en: { main: 'z', shift: 'Z' } },
    },
    {
      type: 'letter',
      keyCode: 88,
      symbol: { ru: { main: 'ч', shift: 'Ч' }, en: { main: 'x', shift: 'X' } },
    },
    {
      type: 'letter',
      keyCode: 67,
      symbol: { ru: { main: 'с', shift: 'С' }, en: { main: 'c', shift: 'C' } },
    },
    {
      type: 'letter',
      keyCode: 86,
      symbol: { ru: { main: 'м', shift: 'М' }, en: { main: 'v', shift: 'V' } },
    },
    {
      type: 'letter',
      keyCode: 66,
      symbol: { ru: { main: 'и', shift: 'И' }, en: { main: 'b', shift: 'B' } },
    },
    {
      type: 'letter',
      keyCode: 78,
      symbol: { ru: { main: 'т', shift: 'Т' }, en: { main: 'n', shift: 'N' } },
    },
    {
      keyCode: 77,
      symbol: { ru: { main: 'ь', shift: 'Ь' }, en: { main: 'm', shift: 'M' } },
    },
    {
      type: 'letter',
      keyCode: 188,
      symbol: { ru: { main: 'б', shift: 'Б' }, en: { main: ',', shift: '<' } },
    },
    {
      type: 'letter',
      keyCode: 190,
      symbol: { ru: { main: 'ю', shift: 'Ю' }, en: { main: '.', shift: '>' } },
    },
    {
      type: 'letter',
      keyCode: 191,
      symbol: { ru: { main: '/', shift: '?' }, en: { main: '/', shift: '?' } },
    },
    {
      type: 'letter',
      keyCode: 38,
      сlassName: 'keyboard__key_special',
      symbol: {
        ru: { main: '▲' },
        en: { main: '▲' },
      },
    },
    {
      type: 'letter',
      keyCode: 16,
      сlassName: 'keyboard__key_special',
      width: '90px',
      location: 2,
      symbol: {
        ru: { main: 'shift' },
        en: { main: 'shift' },
      },
    },
  ],
  [
    {
      type: 'symbol',
      keyCode: 17,
      сlassName: 'keyboard__key_special',
      location: 1,
      symbol: {
        ru: { main: 'ctrl' },
        en: { main: 'ctrl' },
      },
    },
    {
      type: 'symbol',
      keyCode: 18,
      сlassName: 'keyboard__key_special',
      location: 1,
      symbol: {
        ru: { main: 'alt' },
        en: { main: 'alt' },
      },
    },
    {
      type: 'symbol',
      keyCode: 18,
      сlassName: 'keyboard__key_special',
      symbol: {
        ru: { main: 'win' },
        en: { main: 'win' },
      },
    },
    {
      type: 'letter',
      keyCode: 32,
      width: '334px',
      symbol: {
        ru: { main: ' ' },
        en: { main: ' ' },
      },
    },
    {
      type: 'symbol',
      keyCode: 18,
      сlassName: 'keyboard__key_special',
      location: 2,
      symbol: {
        ru: { main: 'alt' },
        en: { main: 'alt' },
      },
    },
    {
      type: 'letter',
      keyCode: 37,
      сlassName: 'keyboard__key_special',
      symbol: {
        ru: { main: '◄' },
        en: { main: '◄' },
      },
    },
    {
      type: 'letter',
      keyCode: 40,
      сlassName: 'keyboard__key_special',
      symbol: {
        ru: { main: '▼' },
        en: { main: '▼' },
      },
    },
    {
      type: 'letter',
      keyCode: 39,
      сlassName: 'keyboard__key_special',
      symbol: {
        ru: { main: '►' },
        en: { main: '►' },
      },
    },
    {
      type: 'letter',
      keyCode: 17,
      сlassName: 'keyboard__key_special',
      location: 2,
      symbol: {
        ru: { main: 'ctrl' },
        en: { main: 'ctrl' },
      },
    },
  ],
];

class RSSKeyword {
  constructor(keys, initinalLang) {
    this.keys = keys;
    this.lang = initinalLang;
    this.renderWrapper();
    this.renderKeys();

    window.addEventListener('keydown', this.handleKeyDown.bind(this));
    window.addEventListener('keyup', this.handleKeyUp.bind(this));

    const wrapperKeys = document.querySelector('.keyboard-wrapper');
    const keyClick = (e) => {
      this.print(e.target.getAttribute('data-keycode'));
    };
    wrapperKeys.addEventListener('click', keyClick);
  }

  handleKeyDown(e) {
    this.input.focus();

    const selector = document.querySelectorAll(
      `.keyboard__key[data-keycode = "${e.keyCode}"]`
    );

    if (selector.length === 1) {
      selector[0].classList.add('active');
    } else {
      selector[e.location - 1].classList.add('active');
    }
  }

  handleKeyUp(e) {
    const selector = document.querySelectorAll(
      `.keyboard__key[data-keycode = "${e.keyCode}"]`
    );

    if (selector.length === 1) {
      selector[0].classList.remove('active');
    } else {
      selector[e.location - 1].classList.remove('active');
    }
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
    input.focus();
    this.input = input;
    this.input.focus();
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

  print(code) {
    let key;
    keyboardKeys.filter((item) => {
      const f = item.filter((i) => i.keyCode == code);
      if (f.length !== 0) {
        key = f;
      }
    });

    [key] = key;

    if (key.type == 'letter') {
      this.input.focus();
      this.input.value += key.symbol.ru.main;
    } else {
      console.log(key);
      switch (key.keyCode) {
        case 13:
          this.input.setRangeText('\n', this.input.selectionStart);
          console.log(this.input.selectionStart);
          //   this.input.value += '\n';
          this.input.focus();
          break;
        case 9:
          this.input.value += '\t';
          this.input.focus();
          break;
        case 8:
          this.input.value += '\t';
          this.input.focus();
          break;
        default:
          console.log('default');
      }
    }
  }
}

const keyboard = new RSSKeyword(keyboardKeys, 'ru');
