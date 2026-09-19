//Sat Sep 19 2026 11:32:57 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function (_0x476b19, _0x40a05b) {
  "use strict";
  const _0x2ecc19 = {
      "dataMap": new Map(),
      "currentVideoId": null,
      "init"() {
        try {
          {
            const _0x31077b = sessionStorage.getItem("video_api_data");
            if (_0x31077b) {
              {
                const _0x4b3e80 = JSON.parse(_0x31077b);
                Object.entries(_0x4b3e80).forEach(([_0x5b91bd, _0xe6ea57]) => {
                  this.dataMap.set(_0x5b91bd, _0xe6ea57);
                });
              }
            }
          }
        } catch (_0x233f3a) {}
      },
      "saveVideoData"(_0x18d92d, _0x517886) {
        try {
          const _0x27f653 = this.extractVideoId(_0x18d92d);
          if (!_0x27f653 || !_0x517886) return false;
          this.dataMap.set(_0x27f653, {
            ..._0x517886,
            "timestamp": Date.now(),
            "videoUrl": _0x18d92d
          });
          this.currentVideoId = _0x27f653;
          this.persistToStorage();
          return true;
        } catch (_0x3fa785) {
          return false;
        }
      },
      "getVideoData"(_0x2845cd) {
        try {
          const _0xd47e4c = this.extractVideoId(_0x2845cd);
          if (!_0xd47e4c) return null;
          const _0x523424 = this.dataMap.get(_0xd47e4c);
          if (!_0x523424) return null;
          if (Date.now() - _0x523424.timestamp > 86400000) {
            this.dataMap.delete(_0xd47e4c);
            this.persistToStorage();
            return null;
          }
          return _0x523424;
        } catch (_0xea8d1e) {
          return null;
        }
      },
      "getCurrentVideoData"() {
        if (!this.currentVideoId) return null;
        return this.dataMap.get(this.currentVideoId);
      },
      "extractVideoId"(_0x4fa10b) {
        try {
          const _0x48c719 = new URL(_0x4fa10b),
            _0x22e2fc = _0x48c719.pathname.split("/").filter(_0x50dd48 => _0x50dd48);
          for (const _0x7477ae of _0x22e2fc) {
            {
              if (/^\d+$/.test(_0x7477ae)) {
                return _0x7477ae;
              }
            }
          }
          const _0x2c0eb1 = _0x48c719.hostname + _0x48c719.pathname.replace(/[^a-zA-Z0-9]/g, "_");
          return _0x2c0eb1;
        } catch {
          return this.hashString(_0x4fa10b);
        }
      },
      "hashString"(_0x5067c3) {
        let _0x5884a7 = 0;
        for (let _0x3a7b1b = 0; _0x3a7b1b < _0x5067c3.length; _0x3a7b1b++) {
          _0x5884a7 = (_0x5884a7 << 5) - _0x5884a7 + _0x5067c3.charCodeAt(_0x3a7b1b);
          _0x5884a7 = _0x5884a7 & _0x5884a7;
        }
        return "id_" + Math.abs(_0x5884a7);
      },
      "persistToStorage"() {
        try {
          const _0x3929b4 = {};
          this.dataMap.forEach((_0x4acc09, _0x36eaea) => {
            _0x3929b4[_0x36eaea] = _0x4acc09;
          });
          sessionStorage.setItem("video_api_data", JSON.stringify(_0x3929b4));
        } catch (_0x1f55a9) {}
      },
      "cleanExpired"() {
        const _0x5db3a2 = Date.now();
        let _0x40c063 = false;
        this.dataMap.forEach((_0x40825b, _0x5de0d8) => {
          _0x5db3a2 - _0x40825b.timestamp > 86400000 && (this.dataMap.delete(_0x5de0d8), _0x40c063 = true);
        });
        _0x40c063 && this.persistToStorage();
      }
    },
    _0x61536 = {
      "getUrlParam"(_0x565304) {
        try {
          const _0x26ae96 = new URLSearchParams(_0x476b19.location.search);
          return _0x26ae96.get(_0x565304);
        } catch (_0x38c3a3) {
          const _0x332f65 = new RegExp("(^|&)" + _0x565304 + "=([^&]*)(&|$)"),
            _0x38a867 = _0x476b19.location.search.substr(1).match(_0x332f65);
          if (!_0x38a867 || !_0x38a867[2]) return null;
          try {
            return decodeURIComponent(_0x38a867[2]);
          } catch (_0x52260d) {
            return _0x38a867[2];
          }
        }
      },
      "removeUrlParams"(_0x4c23de) {
        if (!_0x4c23de) return _0x4c23de;
        try {
          const _0x2ad1f1 = new URL(_0x4c23de);
          return _0x2ad1f1.origin + _0x2ad1f1.pathname;
        } catch (_0x63ef02) {
          _0x4c23de = _0x4c23de.split("?")[0];
          _0x4c23de = _0x4c23de.split("#")[0];
          return _0x4c23de;
        }
      },
      "hashString"(_0x384c05) {
        {
          let _0x4d5b88 = 0;
          for (let _0x5cbf2e = 0; _0x5cbf2e < _0x384c05.length; _0x5cbf2e++) {
            _0x4d5b88 = (_0x4d5b88 << 5) - _0x4d5b88 + _0x384c05.charCodeAt(_0x5cbf2e);
            _0x4d5b88 = _0x4d5b88 & _0x4d5b88;
          }
          return "episode_cache_" + Math.abs(_0x4d5b88);
        }
      },
      "extractVideoUrl"() {
        try {
          const _0x127773 = new URL(location.href),
            _0x5dc7af = _0x127773.searchParams.get("url");
          if (_0x5dc7af?.["startsWith"]("http")) return this.removeUrlParams(_0x5dc7af);
        } catch (_0x24b083) {}
        const _0x13f1b8 = location.href.match(/url=([^&]+)/);
        if (!_0x13f1b8?.[1]?.["startsWith"]("http")) throw new Error("无效视频地址");
        try {
          {
            const _0x497ed0 = decodeURIComponent(_0x13f1b8[1]);
            return this.removeUrlParams(_0x497ed0);
          }
        } catch (_0x31c1a4) {
          return this.removeUrlParams(_0x13f1b8[1]);
        }
      },
      "debounce"(_0x57dc24, _0x21ba89) {
        let _0x1e67b4 = null;
        return function (..._0x4a7058) {
          {
            if (_0x1e67b4) clearTimeout(_0x1e67b4);
            _0x1e67b4 = setTimeout(() => _0x57dc24.apply(this, _0x4a7058), _0x21ba89);
          }
        };
      },
      "safeJSONParse"(_0x419a52, _0x4a5d8e = null) {
        try {
          return JSON.parse(_0x419a52);
        } catch {
          return _0x4a5d8e;
        }
      },
      "openLink"(_0x170715, _0x3d48b5 = "_blank") {
        try {
          const _0x4cde94 = new URL(_0x170715, _0x476b19.location.origin);
          _0x476b19.open(_0x4cde94.href, _0x3d48b5, "noopener,noreferrer");
        } catch (_0x3b7026) {
          _0x476b19.open(_0x170715, _0x3d48b5);
        }
      },
      "getBaseUrl"() {
        return location.href.split("?url=")[0] || location.href;
      },
      "buildUrlWithParam"(_0x57b265, _0x53d613, _0x45c35c) {
        {
          if (!_0x57b265) _0x57b265 = this.getBaseUrl();
          return _0x57b265 + "?" + _0x53d613 + "=" + encodeURIComponent(_0x45c35c);
        }
      },
      "sleep"(_0x573a52) {
        return new Promise(_0x35f200 => setTimeout(_0x35f200, _0x573a52));
      }
    },
    _0x198ea9 = {
      "init"() {
        this.loadStyles();
      },
      "loadStyles"() {
        if (_0x40a05b.getElementById("player-styles")) return;
        const _0x4a4f8d = _0x40a05b.createElement("link");
        _0x4a4f8d.id = "player-styles";
        _0x4a4f8d.rel = "stylesheet";
        _0x4a4f8d.href = CONFIG.STYLES_PATH;
        _0x40a05b.head.appendChild(_0x4a4f8d);
      },
      "showLoading"(_0x2ef523) {
        const _0x23d3d5 = _0x40a05b.querySelector(CONFIG.SELECTORS.APP);
        if (!_0x23d3d5) return;
        _0x23d3d5.style.display = "flex";
        _0x23d3d5.innerHTML = "<div class=\"loading-container\"><div class=\"loading-spinner\"></div><p style=\"color:#fff;font-size:18px;margin-top:20px;text-align:center\">" + _0x2ef523 + "</p></div>";
      },
      "showError"(_0x5f0ed6, _0x32e92b = true, _0x404502 = "请求失败") {
        const _0x4950a8 = _0x40a05b.querySelector(CONFIG.SELECTORS.APP);
        if (!_0x4950a8) return;
        _0x4950a8.style.display = "flex";
        _0x4950a8.innerHTML = "<div class=\"error-container\"><div class=\"error-icon\">⚠️</div><h2 class=\"error-title\">" + _0x404502 + "</h2><p class=\"error-message\">" + _0x5f0ed6 + "</p>" + (_0x32e92b ? "<button class=\"retry-btn\" onclick=\"location.reload()\">刷新重试</button>" : "") + "</div>";
      },
      "showToast"(_0x1da92e) {
        const _0xa00118 = _0x40a05b.createElement("div");
        _0xa00118.className = "auto-next-toast";
        _0xa00118.textContent = _0x1da92e;
        _0x40a05b.body.appendChild(_0xa00118);
        setTimeout(() => {
          _0xa00118.remove();
        }, 3000);
      }
    },
    _0x421ff0 = {
      "table": (() => {
        {
          const _0x376255 = new Int32Array(256);
          for (let _0x3eda35 = 0; _0x3eda35 < 256; _0x3eda35++) {
            let _0x330093 = _0x3eda35;
            for (let _0x1a9382 = 0; _0x1a9382 < 8; _0x1a9382++) {
              _0x330093 = _0x330093 & 1 ? 3988292384 ^ _0x330093 >>> 1 : _0x330093 >>> 1;
            }
            _0x376255[_0x3eda35] = _0x330093;
          }
          return _0x376255;
        }
      })(),
      "compute"(_0x150e44) {
        {
          let _0x822cbe = 4294967295;
          for (let _0x4898ef = 0; _0x4898ef < _0x150e44.length; _0x4898ef++) {
            _0x822cbe = _0x822cbe >>> 8 ^ this.table[(_0x822cbe ^ _0x150e44.charCodeAt(_0x4898ef)) & 255];
          }
          return (_0x822cbe ^ 4294967295) >>> 0;
        }
      }
    },
    _0x28bcba = {
      "generateKeyBytes"(_0x42e586) {
        const _0x1fc1af = new Uint8Array(32);
        for (let _0x1dbb1c = 0; _0x1dbb1c < 32; _0x1dbb1c++) {
          _0x1fc1af[_0x1dbb1c] = _0x42e586.charCodeAt(_0x1dbb1c % _0x42e586.length);
        }
        return _0x1fc1af;
      },
      "uint8ArrayToWordArray"(_0x499768) {
        const _0x125795 = [];
        for (let _0x4a9e42 = 0; _0x4a9e42 < _0x499768.length; _0x4a9e42 += 4) {
          _0x125795.push((_0x499768[_0x4a9e42] << 24 | _0x499768[_0x4a9e42 + 1] << 16 | _0x499768[_0x4a9e42 + 2] << 8 | _0x499768[_0x4a9e42 + 3]) >>> 0);
        }
        return new CryptoJS.lib.WordArray.init(_0x125795, _0x499768.length);
      },
      "wordArrayToString"(_0x11537b) {
        const _0x5bfee = _0x11537b.words,
          _0x3588db = _0x11537b.sigBytes;
        let _0x101b99 = "";
        for (let _0x113e2a = 0; _0x113e2a < _0x3588db; _0x113e2a++) {
          const _0x5a1cc4 = _0x5bfee[_0x113e2a >>> 2] >>> 24 - _0x113e2a % 4 * 8 & 255;
          _0x101b99 += String.fromCharCode(_0x5a1cc4);
        }
        if (typeof TextDecoder !== "undefined") {
          const _0x48aaae = new Uint8Array(_0x3588db);
          for (let _0x46a35e = 0; _0x46a35e < _0x3588db; _0x46a35e++) {
            _0x48aaae[_0x46a35e] = _0x101b99.charCodeAt(_0x46a35e);
          }
          return new TextDecoder("utf-8").decode(_0x48aaae);
        }
        return _0x101b99;
      },
      "getDynamicKey"() {
        {
          const _0x432e32 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            _0x40c6a9 = new Date(),
            _0x1b9c90 = _0x40c6a9.getFullYear() + String(_0x40c6a9.getMonth() + 1).padStart(2, "0") + String(_0x40c6a9.getDate()).padStart(2, "0"),
            _0x4a4b2a = Math.abs(_0x421ff0.compute(_0x1b9c90)) % (_0x432e32.length - 16);
          return _0x432e32.slice(_0x4a4b2a, _0x4a4b2a + 16);
        }
      },
      async "decrypt"(_0x6bbd59) {
        try {
          if (!_0x6bbd59 || typeof _0x6bbd59 !== "string") throw new Error("无效数据");
          const _0x2fe246 = atob(_0x6bbd59);
          if (_0x2fe246.length < 17) {
            throw new Error("数据不足");
          }
          const _0x1e672b = new Uint8Array(_0x2fe246.length);
          for (let _0x2aa99b = 0; _0x2aa99b < _0x2fe246.length; _0x2aa99b++) {
            _0x1e672b[_0x2aa99b] = _0x2fe246.charCodeAt(_0x2aa99b);
          }
          const _0x2aec72 = _0x1e672b.slice(0, 16),
            _0x555479 = _0x1e672b.slice(16),
            _0x348f2a = this.generateKeyBytes(this.getDynamicKey()),
            _0xed32ff = this.uint8ArrayToWordArray(_0x348f2a),
            _0xa6f958 = this.uint8ArrayToWordArray(_0x2aec72),
            _0x437abe = this.uint8ArrayToWordArray(_0x555479),
            _0x533fec = CryptoJS.AES.decrypt({
              "ciphertext": _0x437abe
            }, _0xed32ff, {
              "iv": _0xa6f958,
              "mode": CryptoJS.mode.CBC,
              "padding": CryptoJS.pad.Pkcs7
            });
          if (!_0x533fec || _0x533fec.sigBytes <= 0) throw new Error("解密失败");
          const _0x1e5c99 = this.wordArrayToString(_0x533fec);
          if (!_0x1e5c99?.["trim"]()["startsWith"]("{")) throw new Error("数据格式错误");
          return JSON.parse(_0x1e5c99);
        } catch (_0x390407) {
          throw new Error("异常:" + _0x390407.message);
        }
      }
    },
    _0x1da46c = {
      async "fetchVideoData"(_0x1093c7) {
        _0x198ea9.showLoading(CONFIG.LINKS.DEFAULT_UI);
        const _0x535eca = new URLSearchParams({
          "url": _0x1093c7,
          "api_key": CONFIG.API_KEY
        });
        try {
          {
            const _0x202d35 = new AbortController(),
              _0x10cf9e = setTimeout(() => _0x202d35.abort(), CONFIG.TIMEOUT),
              _0x438699 = await fetch(CONFIG.API_URL, {
                "method": "POST",
                "headers": {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Accept": "text/plain",
                  "X-Requested-With": "XMLHttpRequest"
                },
                "body": _0x535eca,
                "signal": _0x202d35.signal
              });
            clearTimeout(_0x10cf9e);
            if (!_0x438699.ok) {
              throw new Error("网络请求失败(HTTP " + _0x438699.status + ")");
            }
            const _0x542669 = await _0x438699.text();
            if (!_0x542669 || _0x542669.trim().length < 10) throw new Error("服务器返回空响应");
            return await this.parseResponse(_0x542669);
          }
        } catch (_0x4c9047) {
          if (_0x4c9047.name === "AbortError") throw new Error("请求超时，请稍后重试");
          throw _0x4c9047;
        }
      },
      async "parseResponse"(_0x5c5d22) {
        try {
          return JSON.parse(_0x5c5d22);
        } catch {
          return await _0x28bcba.decrypt(_0x5c5d22);
        }
      },
      async "fetchEpisodeData"(_0x5e6ed3) {
        {
          const _0x5d17e0 = await fetch(_0x5e6ed3),
            _0x31ac6c = await _0x5d17e0.json();
          if (_0x31ac6c.vod_code !== 200) {
            const _0x1f1948 = new Error(_0x31ac6c.vod_msg || "请求失败");
            _0x1f1948.vod_msg = _0x31ac6c.vod_msg;
            _0x1f1948.vod_code = _0x31ac6c.vod_code;
            throw _0x1f1948;
          }
          return _0x31ac6c;
        }
      }
    };
  function _0x2a212d() {
    {
      if (localStorage.getItem("autoNext") !== "true") {
        return;
      }
      const _0x521a81 = _0x61536.extractVideoUrl(),
        _0x31a748 = _0x2ecc19.getVideoData(_0x521a81);
      if (!_0x31a748 || !_0x31a748.vod_episodes || _0x31a748.vod_episodes.length === 0) {
        {
          _0x198ea9.showToast("请先点击选集面板加载剧集列表");
          return;
        }
      }
      try {
        const _0x5c8f4a = _0x31a748.vod_episodes,
          _0x236ea1 = _0x5c8f4a.findIndex(_0x5cfb86 => {
            return _0x5cfb86.url && _0x521a81.includes(_0x5cfb86.url);
          });
        if (_0x236ea1 !== -1 && _0x236ea1 < _0x5c8f4a.length - 1) {
          const _0x536e0d = _0x5c8f4a[_0x236ea1 + 1];
          _0x198ea9.showToast("即将播放" + (_0x536e0d.name || "下一集") + "...");
          sessionStorage.setItem("isAutoJumping", "true");
          _0x2ecc19.saveVideoData(_0x536e0d.url, _0x31a748);
          setTimeout(() => {
            const _0x475a43 = _0x61536.buildUrlWithParam("", "url", _0x536e0d.url);
            _0x476b19.location.href = _0x475a43;
          }, 3000);
        } else _0x198ea9.showToast("已经是最后一集了");
      } catch (_0x421023) {
        sessionStorage.removeItem("isAutoJumping");
      }
    }
  }
  function _0x5abb29(_0x3c7e8d) {
    {
      if (!_0x3c7e8d) return;
      _0x3c7e8d.removeEventListener("ended", _0x2a212d);
      _0x3c7e8d.addEventListener("ended", function _0x1dee97() {
        if (sessionStorage.getItem("isAutoJumping") === "true") {
          {
            sessionStorage.removeItem("isAutoJumping");
            return;
          }
        }
        _0x2a212d.call(this);
      });
      _0x3c7e8d._hasEndedListener = true;
    }
  }
  const _0x14e4ea = (() => {
      const _0x1b3ea2 = {
        "panel": null,
        "mask": null,
        "isOpen": false,
        "isMouseMoving": false,
        "isVideoPaused": false,
        "playerContainer": null,
        "episodes": [],
        "videoData": null,
        "pagePrefix": "",
        "timers": {
          "autoHide": null,
          "mouseIdle": null
        },
        "art": null,
        "videoEventsBound": false
      };
      function _0x3d6c44(_0x3571bd) {
        if (!_0x3571bd) return;
        _0x2ecc19.saveVideoData(_0x3571bd, _0x1b3ea2.videoData);
        location.href = _0x61536.buildUrlWithParam("", "url", _0x3571bd);
      }
      function _0x2f982d(_0x15a595) {
        setTimeout(() => {
          const _0x226b4c = _0x15a595.querySelector(".episode-item.active");
          if (_0x226b4c) {
            _0x226b4c.scrollIntoView({
              "behavior": "smooth",
              "block": "center"
            });
          }
        }, 150);
      }
      const _0x4601f8 = {
          "get"(_0x36bb4f) {
            try {
              const _0x104407 = _0x61536.hashString(_0x36bb4f),
                _0xa46342 = localStorage.getItem(_0x104407);
              if (!_0xa46342) return null;
              const _0x53d44a = JSON.parse(_0xa46342);
              if (Date.now() - _0x53d44a.cacheTime > CONFIG.EPISODE.CACHE.EXPIRE) return localStorage.removeItem(_0x104407), null;
              return _0x53d44a;
            } catch {
              return null;
            }
          },
          "isFresh"(_0x15d62f) {
            return _0x15d62f && Date.now() - _0x15d62f.cacheTime < CONFIG.EPISODE.CACHE.FRESH;
          },
          "set"(_0x2230f3, _0x3df1ef) {
            try {
              const _0x2fe568 = _0x61536.hashString(_0x2230f3);
              localStorage.setItem(_0x2fe568, JSON.stringify({
                "videoData": _0x3df1ef,
                "cacheTime": Date.now(),
                "apiUrl": _0x2230f3
              }));
            } catch (_0x2385be) {}
          },
          "findByVideoUrl"(_0x3df26f) {
            try {
              for (let _0x129bce = 0; _0x129bce < localStorage.length; _0x129bce++) {
                {
                  const _0xca27fd = localStorage.key(_0x129bce);
                  if (!_0xca27fd.startsWith("episode_cache_")) continue;
                  const _0xe28302 = localStorage.getItem(_0xca27fd);
                  if (!_0xe28302) continue;
                  const _0x41f15e = JSON.parse(_0xe28302);
                  if (Date.now() - _0x41f15e.cacheTime > CONFIG.EPISODE.CACHE.EXPIRE) {
                    {
                      localStorage.removeItem(_0xca27fd);
                      continue;
                    }
                  }
                  if (_0x41f15e.videoData?.["vod_episodes"]?.["some"](_0x5c5668 => _0x5c5668.url && _0x3df26f.includes(_0x5c5668.url))) return _0x41f15e;
                }
              }
            } catch {}
            return null;
          },
          "clearByVideoUrl"(_0x159828) {
            try {
              for (let _0x155ae7 = 0; _0x155ae7 < localStorage.length; _0x155ae7++) {
                {
                  const _0x1d21e0 = localStorage.key(_0x155ae7);
                  if (!_0x1d21e0.startsWith("episode_cache_")) continue;
                  const _0x3fdb50 = localStorage.getItem(_0x1d21e0);
                  if (!_0x3fdb50) continue;
                  const _0x1fcc98 = JSON.parse(_0x3fdb50);
                  if (_0x1fcc98.videoData?.["vod_episodes"]?.["some"](_0x507da2 => _0x507da2.url && _0x159828.includes(_0x507da2.url))) {
                    localStorage.removeItem(_0x1d21e0);
                  }
                }
              }
            } catch {}
          }
        },
        _0x1b5045 = {
          "clearTimers"() {
            Object.values(_0x1b3ea2.timers).forEach(_0x24ab95 => {
              if (_0x24ab95) clearTimeout(_0x24ab95);
            });
            _0x1b3ea2.timers = {
              "autoHide": null,
              "mouseIdle": null
            };
          },
          "onMouseMove": _0x61536.debounce(function () {
            if (!_0x1b3ea2.isOpen) return;
            _0x1b3ea2.isMouseMoving = true;
            _0x1b5045.clearTimers();
            if (_0x1b3ea2.panel) _0x1b3ea2.panel.style.display = "block";
            if (_0x1b3ea2.mask) _0x1b3ea2.mask.style.display = "block";
            _0x1b3ea2.timers.mouseIdle = setTimeout(() => {
              _0x1b3ea2.isMouseMoving = false;
              if (!_0x1b3ea2.isVideoPaused) _0x1b5045.startAutoHide();
            }, CONFIG.EPISODE.TIMER.MOUSE_IDLE);
          }, 50),
          "startAutoHide"() {
            if (_0x1b3ea2.isVideoPaused || !_0x1b3ea2.isOpen || _0x1b3ea2.isMouseMoving) return;
            _0x1b5045.clearTimers();
            _0x1b3ea2.timers.autoHide = setTimeout(() => {
              if (_0x1b3ea2.isOpen && !_0x1b3ea2.isMouseMoving && !_0x1b3ea2.isVideoPaused) {
                if (_0x1b3ea2.panel) _0x1b3ea2.panel.style.display = "none";
                if (_0x1b3ea2.mask) _0x1b3ea2.mask.style.display = "none";
              }
            }, CONFIG.EPISODE.TIMER.AUTO_HIDE);
          },
          "bindVideoEvents"(_0x5e914a) {
            {
              if (_0x1b3ea2.videoEventsBound || !_0x5e914a) return;
              _0x1b3ea2.videoEventsBound = true;
              _0x1b3ea2.isVideoPaused = _0x5e914a.paused;
              const _0x445a0e = {
                "pause": () => {
                  _0x1b3ea2.isVideoPaused = true;
                  _0x1b5045.clearTimers();
                  setTimeout(() => {
                    if (_0x1b3ea2.isOpen && _0x1b3ea2.isVideoPaused) {
                      {
                        if (_0x1b3ea2.panel) _0x1b3ea2.panel.style.display = "block";
                        if (_0x1b3ea2.mask) _0x1b3ea2.mask.style.display = "block";
                      }
                    }
                  }, CONFIG.EPISODE.TIMER.RESTORE_DELAY);
                },
                "play": () => {
                  _0x1b3ea2.isVideoPaused = false;
                  !_0x1b3ea2.isMouseMoving && _0x1b3ea2.isOpen && _0x1b5045.startAutoHide();
                }
              };
              Object.entries(_0x445a0e).forEach(([_0x21b09d, _0xde2608]) => {
                _0x5e914a.removeEventListener(_0x21b09d, _0xde2608);
                _0x5e914a.addEventListener(_0x21b09d, _0xde2608);
              });
              _0x5abb29(_0x5e914a);
            }
          },
          "bindContainerEvents"(_0xd209a0) {
            if (!_0xd209a0 || _0x1b3ea2.playerContainer === _0xd209a0) return;
            _0x1b3ea2.playerContainer = _0xd209a0;
            const _0x3498c8 = {
              "mousemove": _0x1b5045.onMouseMove,
              "mouseenter": () => {
                if (_0x1b3ea2.isOpen) {
                  {
                    if (_0x1b3ea2.panel) _0x1b3ea2.panel.style.display = "block";
                    if (_0x1b3ea2.mask) _0x1b3ea2.mask.style.display = "block";
                    _0x1b5045.onMouseMove();
                  }
                }
              },
              "mouseleave": _0x1f3e2b => {
                if (!_0x1b3ea2.isOpen) return;
                const _0x5b7eda = _0x1f3e2b.relatedTarget,
                  _0x412497 = _0x5b7eda && (_0x1b3ea2.panel?.["contains"](_0x5b7eda) || _0x1b3ea2.mask?.["contains"](_0x5b7eda));
                if (!_0x412497 && !_0x1b3ea2.isVideoPaused) {
                  _0x1b5045.startAutoHide();
                }
              }
            };
            Object.entries(_0x3498c8).forEach(([_0x564835, _0x1feca4]) => {
              _0xd209a0.removeEventListener(_0x564835, _0x1feca4);
              _0xd209a0.addEventListener(_0x564835, _0x1feca4, {
                "passive": _0x564835 === "mousemove"
              });
            });
            _0x1b5045.bindVideoEvents(_0xd209a0.querySelector("video"));
          }
        },
        _0x32d905 = {
          "findPlayerContainer"() {
            for (const _0x2ff991 of CONFIG.EPISODE.SELECTORS.PLAYER) {
              const _0x18e909 = _0x40a05b.querySelector(_0x2ff991);
              if (_0x18e909) return _0x18e909;
            }
            return _0x40a05b.querySelector("video")?.["parentElement"] || null;
          },
          "renderEpisodeList"(_0x1f8b58, _0xc4d552, _0x3eafea = false) {
            _0x1f8b58.innerHTML = "";
            if (!_0xc4d552?.["length"]) {
              {
                _0x1f8b58.innerHTML = CONFIG.LINKS.DEFAULT_HTML;
                return;
              }
            }
            const _0x28a8e0 = _0x40a05b.createDocumentFragment(),
              _0x4d818e = _0x61536.extractVideoUrl(),
              _0x33c447 = _0x3eafea ? [..._0xc4d552].reverse() : _0xc4d552;
            _0x33c447.forEach(_0x1d14de => {
              const _0x1c1c05 = _0x40a05b.createElement("li");
              _0x1c1c05.className = "episode-item";
              _0x1c1c05.textContent = _0x1d14de.name || "";
              _0x1c1c05.setAttribute("data-url", _0x1d14de.url || "");
              _0x1c1c05.setAttribute("title", _0x1d14de.name || "");
              if (_0x1d14de.url && _0x4d818e?.["includes"](_0x1d14de.url)) {
                _0x1c1c05.classList.add("active");
              }
              _0x1c1c05.onclick = () => {
                _0x1d14de.url && (_0x3d6c44(_0x1d14de.url), _0x1b3ea2.panel?.["remove"](), _0x1b3ea2.mask?.["remove"](), _0x1b3ea2.isOpen = false);
              };
              _0x1c1c05.addEventListener("mouseenter", _0x1b5045.onMouseMove);
              _0x28a8e0.appendChild(_0x1c1c05);
            });
            _0x1f8b58.appendChild(_0x28a8e0);
            _0x2f982d(_0x1f8b58);
          },
          "updateNavigation"(_0x197e5a, _0x1ab941) {
            const _0x4f2e86 = _0x61536.extractVideoUrl(),
              _0x2acb91 = _0x1b3ea2.episodes.findIndex(_0x4d1fd8 => _0x4d1fd8.url && _0x4f2e86.includes(_0x4d1fd8.url)),
              _0x251267 = _0x2acb91 > 0 ? _0x1b3ea2.episodes[_0x2acb91 - 1] : null,
              _0x12b477 = _0x2acb91 < _0x1b3ea2.episodes.length - 1 ? _0x1b3ea2.episodes[_0x2acb91 + 1] : null;
            [_0x197e5a, _0x1ab941].forEach((_0x550409, _0x2294e4) => {
              {
                const _0x48fca3 = _0x2294e4 === 0 ? _0x251267 : _0x12b477;
                _0x550409.classList.toggle("disabled", !_0x48fca3);
                _0x550409.onclick = _0x48fca3 ? () => _0x3d6c44(_0x48fca3.url) : null;
              }
            });
          },
          "createPanel"(_0x1d4e8f) {
            {
              const _0x42e25b = _0x1b3ea2.art?.["container"] || _0x40a05b.querySelector(CONFIG.EPISODE.SELECTORS.PLAYER.join(","));
              if (!_0x42e25b) return null;
              _0x1b3ea2.videoData = _0x1d4e8f;
              _0x1b3ea2.episodes = _0x1d4e8f.vod_episodes || [];
              _0x1b3ea2.pagePrefix = _0x61536.getBaseUrl();
              _0x2ecc19.saveVideoData(_0x61536.extractVideoUrl(), _0x1d4e8f);
              _0x42e25b.style.position = "relative";
              const _0x59f098 = _0x40a05b.createElement("div");
              _0x59f098.className = "episode-mask";
              _0x59f098.onclick = _0x4367f3 => {
                if (!_0x4367f3.target.closest(CONFIG.EPISODE.SELECTORS.CONTROLS)) {
                  _0x517cb7.remove();
                  _0x59f098.remove();
                  _0x1b3ea2.isOpen = false;
                  _0x1b3ea2.videoEventsBound = false;
                }
              };
              _0x59f098.addEventListener("mouseenter", _0x1b5045.onMouseMove);
              _0x59f098.addEventListener("mouseleave", () => {
                if (!_0x1b3ea2.isVideoPaused) _0x1b5045.startAutoHide();
              });
              const _0x517cb7 = _0x40a05b.createElement("div");
              _0x517cb7.className = "episode-panel";
              _0x517cb7.addEventListener("mouseenter", _0x1b5045.onMouseMove);
              _0x517cb7.addEventListener("mouseleave", () => {
                {
                  if (!_0x1b3ea2.isVideoPaused) _0x1b5045.startAutoHide();
                }
              });
              const _0x51e271 = _0x40a05b.createElement("div");
              _0x51e271.className = "episode-close";
              _0x51e271.innerHTML = "✕";
              _0x51e271.onclick = () => {
                _0x517cb7.remove();
                _0x59f098.remove();
                _0x1b3ea2.isOpen = false;
                _0x1b3ea2.videoEventsBound = false;
              };
              const _0x33df04 = _0x40a05b.createElement("div");
              _0x33df04.className = "film-info";
              const _0x392ff3 = _0x1d4e8f.vod_year ? "<div class=\"film-cover-tag\">" + _0x1d4e8f.vod_year + "</div>" : "",
                _0x2e2b4c = _0x1d4e8f.vod_category ? "<span class=\"film-meta-tag category\">" + _0x1d4e8f.vod_category + "</span>" : "",
                _0x514bf7 = _0x1d4e8f.vod_area ? "<span class=\"film-meta-tag area\">" + _0x1d4e8f.vod_area + "</span>" : "",
                _0xdd0b94 = _0x1d4e8f.vod_type ? "<span class=\"film-meta-tag\">" + _0x1d4e8f.vod_type + "</span>" : "",
                _0x4e8a1a = (_0x1d4e8f.vod_updateTo || "共" + _0x1b3ea2.episodes.length + "集").replace(/<[^>]*>/g, ""),
                _0x394445 = _0x1d4e8f.vod_desc || CONFIG.LINKS.DEFAULT_DESC,
                _0xd32e14 = _0x394445.length > 90 ? _0x394445.substring(0, 90) + "..." : _0x394445;
              _0x33df04.innerHTML = "<div class=\"film-cover-wrap\"><img class=\"film-cover\"src=\"" + (_0x1d4e8f.vod_pic || CONFIG.LINKS.DEFAULT_COVER) + "\"referrerPolicy=\"no-referrer\"onerror=\"this.src='" + CONFIG.LINKS.DEFAULT_COVER + "'\">" + _0x392ff3 + "</div><div class=\"film-detail\"><div class=\"film-name\"title=\"" + (_0x1d4e8f.vod_title || CONFIG.LINKS.DEFAULT_TITLE) + "\">" + (_0x1d4e8f.vod_title || CONFIG.LINKS.DEFAULT_TITLE) + "</div><div class=\"film-meta\">" + _0xdd0b94 + _0x2e2b4c + _0x514bf7 + "</div><div class=\"film-update\">" + _0x4e8a1a + "</div><div class=\"film-desc\"title=\"" + _0x394445 + "\">" + _0xd32e14 + "</div></div>";
              const _0x51c955 = _0x40a05b.createElement("div");
              _0x51c955.className = "episode-title-wrap";
              const _0x3ea95e = _0x40a05b.createElement("div");
              _0x3ea95e.className = "episode-controls";
              const _0x2b1987 = _0x40a05b.createElement("div");
              _0x2b1987.className = "episode-prev";
              _0x2b1987.textContent = "◀ 上集";
              const _0x41ea61 = _0x40a05b.createElement("div");
              _0x41ea61.className = "episode-next";
              _0x41ea61.textContent = "下集 ▶";
              const _0x122440 = _0x40a05b.createElement("div");
              _0x122440.className = "episode-auto-btn";
              const _0x52595e = localStorage.getItem("autoNext") === "true";
              _0x122440.textContent = _0x52595e ? "自动连播 ✓" : "自动连播";
              _0x52595e && _0x122440.classList.add("active");
              _0x122440.onclick = () => {
                {
                  const _0x50bc98 = localStorage.getItem("autoNext") === "true",
                    _0x3d9f83 = !_0x50bc98;
                  localStorage.setItem("autoNext", _0x3d9f83);
                  _0x122440.textContent = _0x3d9f83 ? "自动连播 ✓" : "自动连播";
                  if (_0x3d9f83) {
                    _0x122440.classList.add("active");
                  } else _0x122440.classList.remove("active");
                }
              };
              let _0x47ca8c = false;
              const _0x6374b2 = _0x40a05b.createElement("div");
              _0x6374b2.className = "episode-sort-btn";
              _0x6374b2.textContent = "↓ 正序";
              _0x6374b2.onclick = () => {
                _0x47ca8c = !_0x47ca8c;
                _0x6374b2.textContent = _0x47ca8c ? "↑ 倒序" : "↓ 正序";
                _0x32d905.renderEpisodeList(_0x2f20ec, _0x1b3ea2.episodes, _0x47ca8c);
                _0x32d905.updateNavigation(_0x2b1987, _0x41ea61);
              };
              [_0x2b1987, _0x41ea61, _0x6374b2, _0x122440].forEach(_0x20c6f3 => {
                _0x20c6f3.addEventListener("mouseenter", _0x1b5045.onMouseMove);
              });
              _0x3ea95e.append(_0x2b1987, _0x41ea61, _0x6374b2, _0x122440);
              _0x51c955.appendChild(_0x3ea95e);
              const _0x2f20ec = _0x40a05b.createElement("ul");
              _0x2f20ec.className = "episode-list";
              _0x32d905.renderEpisodeList(_0x2f20ec, _0x1b3ea2.episodes);
              _0x517cb7.append(_0x51e271, _0x33df04, _0x51c955, _0x2f20ec);
              _0x42e25b.append(_0x59f098, _0x517cb7);
              _0x1b3ea2.panel = _0x517cb7;
              _0x1b3ea2.mask = _0x59f098;
              _0x1b3ea2.isOpen = true;
              _0x1b3ea2.videoEventsBound = false;
              _0x32d905.updateNavigation(_0x2b1987, _0x41ea61);
              setTimeout(() => {
                _0x1b5045.bindContainerEvents(_0x32d905.findPlayerContainer());
                _0x1b3ea2.isVideoPaused && (_0x517cb7.style.display = "block", _0x59f098.style.display = "block");
              }, CONFIG.EPISODE.TIMER.RESTORE_DELAY);
              return _0x517cb7;
            }
          }
        };
      return async function (_0x2f86b7) {
        const _0x21141b = _0x2f86b7.html;
        _0x1b3ea2.art = this.art;
        _0x476b19.artInstance = this.art;
        if (_0x1b3ea2.isOpen) {
          _0x1b3ea2.panel?.["remove"]();
          _0x1b3ea2.mask?.["remove"]();
          _0x1b3ea2.isOpen = false;
          _0x1b3ea2.videoEventsBound = false;
          _0x2f86b7.html = _0x21141b;
          return;
        }
        _0x2f86b7.html = "<span style=\"color:#999\">加载中...</span>";
        try {
          const _0x2a70cf = _0x61536.extractVideoUrl();
          let _0x4dd22 = null;
          _0x4dd22 = _0x2ecc19.getVideoData(_0x2a70cf);
          if (!_0x4dd22?.["vod_episodes"]?.["length"]) {
            const _0x3c96c9 = _0x4601f8.findByVideoUrl(_0x2a70cf);
            if (_0x3c96c9?.["videoData"]) {
              _0x4dd22 = _0x3c96c9.videoData;
            }
          }
          if (!_0x4dd22?.["vod_episodes"]?.["length"]) {
            {
              const _0x6da458 = CONFIG.EPISODE.API_DOMAIN + _0x2a70cf;
              _0x4dd22 = await _0x1da46c.fetchEpisodeData(_0x6da458);
              _0x4601f8.set(_0x6da458, _0x4dd22);
            }
          }
          _0x2ecc19.saveVideoData(_0x2a70cf, _0x4dd22);
          _0x32d905.createPanel(_0x4dd22);
          _0x2f86b7.html = _0x21141b;
        } catch (_0x3ec722) {
          {
            const _0x2b7bbf = _0x3ec722?.["vod_msg"] || _0x3ec722?.["message"] || "目前支持：腾讯、优酷、爱奇艺、芒果TV";
            _0x198ea9.showToast(_0x2b7bbf);
            _0x2f86b7.html = _0x21141b;
          }
        }
      };
    })(),
    _0x2fdc80 = {
      "instance": null,
      "init"(_0x330f4c) {
        const _0x28aca7 = _0x330f4c.url.includes(".m3u8");
        if (this.instance) {
          this.instance.destroy();
        }
        this.instance = new Artplayer({
          "container": "#app",
          "url": _0x330f4c.url,
          "type": _0x28aca7 ? "m3u8" : "auto",
          "volume": 1,
          "aspectRatio": true,
          "screenshot": true,
          "setting": true,
          "flip": true,
          "playbackRate": true,
          "autoplay": true,
          "hotkey": true,
          "autoMini": true,
          "pip": true,
          "lock": true,
          "fullscreen": true,
          "playsInline": true,
          "contextmenu": [{
            "html": "<a href=\"" + CONFIG.LINKS.PARSE_SERVICE.URL + "\"target=\"_blank\">" + CONFIG.LINKS.PARSE_SERVICE.TITLE + "</a>",
            "click": () => _0x61536.openLink(CONFIG.LINKS.PARSE_SERVICE.URL)
          }],
          "theme": "#ff0000",
          "controls": [{
            "name": "xji",
            "position": "right",
            "index": 10,
            "html": "选集",
            "tooltip": "选集",
            "click": _0x14e4ea
          }, {
            "position": "right",
            "html": CONFIG.LINKS.WELFARE.TITLE,
            "tooltip": CONFIG.LINKS.WELFARE.TITLE,
            "click": () => _0x61536.openLink(CONFIG.LINKS.WELFARE.URL)
          }],
          "customType": {
            "m3u8": this.handleM3U8
          }
        });
        _0x476b19.artInstance = this.instance;
        setTimeout(() => {
          {
            const _0x500edc = this.instance.video;
            if (_0x500edc) {
              _0x5abb29(_0x500edc);
            }
          }
        }, 1000);
        return this.instance;
      },
      "handleM3U8"(_0x338761, _0x4b5c57) {
        {
          if (Hls.isSupported()) {
            const _0x327aaa = new Hls();
            _0x327aaa.loadSource(_0x4b5c57);
            _0x327aaa.attachMedia(_0x338761);
            _0x327aaa.on(Hls.Events.MANIFEST_PARSED, () => _0x338761.play());
          } else {
            if (_0x338761.canPlayType("application/vnd.apple.mpegurl")) {
              _0x338761.src = _0x4b5c57;
            }
          }
        }
      }
    };
  function _0x2b812b() {
    {
      sessionStorage.removeItem("isAutoJumping");
      const _0x26fd5f = _0x40a05b.querySelector("video");
      if (_0x26fd5f && !_0x26fd5f._hasEndedListener) {
        _0x5abb29(_0x26fd5f);
      }
      const _0x9ebb79 = new MutationObserver(_0x42683c => {
        _0x42683c.forEach(_0xf3988b => {
          if (_0xf3988b.addedNodes.length) {
            {
              const _0x471983 = _0x40a05b.querySelector("video");
              _0x471983 && !_0x471983._hasEndedListener && _0x5abb29(_0x471983);
            }
          }
        });
      });
      _0x9ebb79.observe(_0x40a05b.body, {
        "childList": true,
        "subtree": true
      });
      _0x476b19._autoNextObserver = _0x9ebb79;
    }
  }
  _0x476b19.addEventListener("error", _0x4cfc8c => {});
  _0x476b19.addEventListener("unhandledrejection", _0x51879a => {});
  _0x476b19.addEventListener("popstate", () => {
    setTimeout(() => {
      _0x2b812b();
    }, 500);
  });
  async function _0x5c0f9f() {
    (function () {})();
    _0x198ea9.init();
    _0x2ecc19.init();
    setInterval(() => {
      _0x2ecc19.cleanExpired();
    }, 3600000);
    _0x2b812b();
    const _0x42fd06 = _0x61536.getUrlParam("url");
    if (!_0x42fd06) {
      {
        _0x198ea9.showError("请在URL中传入视频地址参数", false, "参数缺失");
        return;
      }
    }
    const _0x9be49b = _0x40a05b.querySelector(CONFIG.SELECTORS.BTN);
    if (!_0x9be49b) return;
    _0x9be49b.onclick = async function () {
      {
        _0x9be49b.style.display = "none";
        try {
          {
            const _0x5f48c4 = await _0x1da46c.fetchVideoData(_0x42fd06);
            if (!_0x5f48c4 || typeof _0x5f48c4 !== "object") throw new Error("服务器返回数据格式异常");
            if (_0x5f48c4.code !== 200) {
              const _0x2b41b8 = CONFIG.ERROR_MESSAGES[_0x5f48c4.code] || "请求失败",
                _0xca841f = _0x5f48c4.msg || _0x5f48c4.error || "未知错误";
              throw {
                "title": _0x2b41b8,
                "message": _0xca841f
              };
            }
            _0x2fdc80.init(_0x5f48c4);
          }
        } catch (_0x29981d) {
          const _0x279394 = _0x29981d.title || "请求失败",
            _0x487dfc = _0x29981d.message || String(_0x29981d);
          _0x198ea9.showError(_0x487dfc, true, _0x279394);
        }
      }
    };
  }
  if (_0x40a05b.readyState === "loading") _0x40a05b.addEventListener("DOMContentLoaded", _0x5c0f9f);else {
    _0x5c0f9f();
  }
})(window, document);