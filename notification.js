!function () {
  const _0x13c164 = document.querySelector(".pl763847__wrap");
  const _0x35876c = document.querySelector(".pl763847__closelink");
  const _0x19cf3b = document.querySelector(".pl763847__btn");
  const {
    searchParams: _0x3160a4
  } = new URL(window.location.href);
  const _0x23c742 = _0x3160a4.get("s2s");
  const _0x193c7a = _0x3160a4.get("url1");
  const _0x35b705 = _0x3160a4.get("url2");
  const _0xaf91ef = _0x3160a4.get('infinity');
  const _0x3747f5 = _0x3160a4.get("pidp");
  const _0x88559d = _0x3160a4.get("lidp");
  const _0x6912a5 = _0x3747f5 ? "&pid=" + _0x3747f5 : '';
  const _0x3b101a = _0x88559d ? '&lid=' + _0x88559d : '';
  const _0x13da98 = _0x193c7a || ("object" != typeof eddOptions || null === eddOptions ? 'https://pw-red-ad.com' : "redirect_url" in eddOptions ? eddOptions[_0x2f0296] : 'https://pw-red-ad.com');
  const _0xfd8ada = _0x35b705 || ("object" != typeof eddOptions || null === eddOptions ? _0x3046(0x13a) : "close_url" in eddOptions ? eddOptions[_0x2f0296] : "https://pw-red-ad.com");
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("sw.js")["catch"](() => {});
    if (null !== _0x23c742) {
      navigator.serviceWorker.ready.then(_0x2914c8 => {
        _0x2914c8.active.postMessage({
          's2s': _0x23c742
        });
      });
    }
    navigator.serviceWorker.ready.then(_0x416392 => {
      _0x416392.active.postMessage({
        'url1': _0x13da98
      });
    });
  }
  if ("true" === _0xaf91ef) {
    setTimeout(() => {
      navigator.serviceWorker.ready.then(_0x8e36e8 => {
        _0x8e36e8.active.postMessage({
          'infinityLoop': true
        });
      });
    }, 0x3e8);
    window.addEventListener("pageshow", function (_0x197848) {
      if (_0x197848.persisted) {
        navigator.serviceWorker.ready.then(_0x1276b8 => {
          _0x1276b8.active.postMessage({
            'infinityLoop': true
          });
        });
      }
    });
  }
  _0x13c164.style.display = "none";
  if (null !== _0x35876c) {
    _0x35876c.onclick = function (_0x27d2c9) {
      _0x27d2c9.preventDefault();
      if ('' !== _0xfd8ada) {
        window.location.href = _0xfd8ada + "&psid=" + window.location.hostname;
      } else {
        _0x13c164.style.display = "none";
      }
    };
  }
  let _0xb4f159 = null;
  if (_0x19cf3b) {
    _0x19cf3b.addEventListener('click', function () {
      if (null !== _0xb4f159) {
        _0x13c164.style.display = "none";
        _0xb4f159.prompt();
        _0xb4f159.userChoice.then(_0x1e1c8c => {
          if ("accepted" === _0x1e1c8c.outcome) {
            new Image().src = "//adscienceltd.com/pixel/pwa?a=1&h=" + window.location.hostname + _0x6912a5 + _0x3b101a;
          }
          _0xb4f159 = null;
        });
      }
    });
  }
  window.addEventListener("beforeinstallprompt", function (_0x1c615f) {
    _0x1c615f.preventDefault();
    _0xb4f159 = _0x1c615f;
    _0x13c164.style.display = "inline-block";
    new Image().src = "//adscienceltd.com/pixel/pwa?a=0&h=" + window.location.hostname + _0x6912a5 + _0x3b101a;
  });
}();
