import { rawXhr } from './config';

export function startProxy(options, win) {
  win = win || window;

  win[rawXhr] = win.XMLHttpRequest;

  win.XMLHttpRequest = function () {
    const xhr = new win[rawXhr]();

    for (const key in xhr) {
      if (typeof xhr[key] === 'function') {
        this[key] = function () {
          const args = Array.prototype.slice.call(arguments);
          if (options[key]) {
            options[key](xhr, args);
          }
          return xhr[key].apply(xhr, args);
        }
      } else {
        Object.defineProperty(this, key, {
          get: () => xhr[key],
          set: (value) => xhr[key] = value,
        });
      }
    }
  }
}
