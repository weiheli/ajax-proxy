# ajax-proxy

## 安装

- CDN 引入

```
<script src="https://unpkg.com/@weiheli/ajax-proxy@latest/dist/ajax-proxy.cdn.js"></script>
```

引入后会有一个名为 `ap`（ajax proxy）的全局对象，可以通过 `ap.startProxy` 来启动代理，通过 `ap.endProxy` 来结束代理。

- npm 安装

```
npm install @weiheli/ajax-proxy
```

## 使用

```
import { startProxy, endProxy } from '@weiheli/ajax-proxy';

// 启动代理
startProxy({
  open: function (xhr, data) {
    console.log('open', xhr, data);
    data[1] += '&test=1';
  },
  send: function (xhr, data) {
    console.log('send', xhr, data);
    xhr.setRequestHeader('test', '1');
  },
});

// 结束代理
endProxy();
```
