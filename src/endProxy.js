import { rawXhr } from './config';

export function endProxy(win) {
  win = win || window;
  if (win[rawXhr]) win.XMLHttpRequest = win[rawXhr];
  delete win[rawXhr];
}
