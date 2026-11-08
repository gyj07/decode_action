//Sun Nov 08 2026 00:29:19 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function getHourlyTimestamp() {
  const _0x5b8ce1 = new Date();
  _0x5b8ce1.setMinutes(0);
  _0x5b8ce1.setSeconds(0);
  _0x5b8ce1.setMilliseconds(0);
  return _0x5b8ce1.getTime();
}
function sha256(_0x40b625) {
  return new Promise((_0x5dc819, _0x2c9e18) => {
    {
      const _0x3892e1 = new TextEncoder().encode(_0x40b625);
      window.crypto.subtle.digest("SHA-256", _0x3892e1).then(_0x3c82e4 => {
        const _0x7d8084 = Array.from(new Uint8Array(_0x3c82e4)),
          _0x29ee9d = _0x7d8084.map(_0x4c9df7 => _0x4c9df7.toString(16).padStart(2, "0")).join("");
        _0x5dc819(_0x29ee9d);
      }).catch(_0x37588b => {
        console.error("Error computing SHA-256 hash:", _0x37588b);
        _0x2c9e18(_0x37588b);
      });
    }
  });
}
var stray = {
  "start": function () {
    $.ajaxSettings.timeout = 30000;
    $.ajaxSettings.async = true;
    sha256(getHourlyTimestamp() / 1000 + "cnmdhb").then(_0xaccc2d => {
      $.post("https://play.brovod.com/JX", JSON.stringify({
        "url": config.url,
        "pbgjz": config.pbgjz,
        "dmkey": config.dmkey,
        "key": _0xaccc2d
      }), function (_0x573813) {
        _0x573813.code == "200" ? (stray.url = _0x573813.cnmdhb, stray.dmkey = _0x573813.dmkey, stray.zantingguanggaoqidong = 0, stray.zantingguanggaourl = _0x573813.zantingguanggaourl, stray.zantingguanggaolianjie = _0x573813.zantingguanggaolianjie, stray.pbgjz = _0x573813.pbgjz, stray.type = stray.videotype(_0x573813.cnmdhb, _0x573813.type), $("#loading").remove(), $("body").append("<div id=\"artplayer\" class=\"artplayer-app\" style=\"width:100%;height:100%;padding:0;margin:0\"></div>"), stray.DmPlayer()) : TheError();
      }, "json").fail(function (_0x1d5c3c, _0x23411f, _0xe5409d) {
        TheError();
      });
    }).catch(_0x323bf9 => {
      console.error("Error computing SHA-256 hash:", _0x323bf9);
      TheError();
    });
  },
  "DmPlayer": function () {
    stray.ad = new Artplayer({
      "container": "#artplayer",
      "theme": "#ce0021",
      "url": stray.url,
      "airplay": true,
      "type": stray.type,
      "volume": 5,
      "muted": false,
      "autoplay": true,
      "flip": true,
      "pip": true,
      "autoSize": false,
      "autoMini": true,
      "screenshot": true,
      "setting": true,
      "loop": false,
      "lock": true,
      "playbackRate": true,
      "aspectRatio": true,
      "fullscreen": true,
      "miniProgressBar": false,
      "hotkey": true,
      "backdrop": true,
      "fastForward": true,
      "playsInline": true,
      "autoOrientation": true,
      "lang": navigator.language.toLowerCase(),
      "whitelist": ["*"],
      "icons": {
        "loading": "<img src=\"artplayer/img/ploading.gif\">",
        "state": "<img width=\"150\" heigth=\"150\" src=\"artplayer/img/state.svg\">",
        "indicator": "<img width=\"16\" heigth=\"16\" src=\"artplayer/img/indicator.svg\">"
      },
      "customType": {
        "m3u8": playM3u8,
        "flv": playMpegts,
        "ts": playMpegts,
        "mpd": playMpd
      },
      "plugins": [artplayerPluginDanmuku({
        "danmuku": async function () {
          return new Promise(async _0x265bdd => {
            const _0x212efc = await fetch("https://dmku.brovod.top/dmku/?ac=dm&type=json&id=" + stray.dmkey),
              _0x1b7a80 = await _0x212efc.json(),
              _0x3ae61c = _0x1b7a80.danmuku ?? [],
              _0x571a1c = await fetch("https://dmku.brovod.top/xddm.php?url=" + config.url),
              _0x5354f2 = await _0x571a1c.json(),
              _0x42e4ca = _0x5354f2.danmuku ?? [];
            let _0x402e5d = [];
            const _0x365ebb = ["#FE0302", "#FF7204", "#FFAA02", "#FFD302", "#FFFF00", "#A0EE00", "#00CD00", "#019899", "#4266BE", "#89D5FF", "#CC0273", "#222222", "#9B9B9B", "#FFFFFF"];
            function _0x2b77a2() {
              return _0x365ebb[Math.floor(Math.random() * _0x365ebb.length)];
            }
            for (let _0x2aecb4 = 0; _0x2aecb4 < _0x3ae61c.length; _0x2aecb4++) {
              {
                const _0x6a1bc8 = _0x3ae61c[_0x2aecb4];
                _0x402e5d.push({
                  "time": Number(_0x6a1bc8.time),
                  "mode": typeof _0x6a1bc8.mode === "number" ? _0x6a1bc8.mode : _0x6a1bc8.mode === "right" ? 0 : 1,
                  "color": _0x2b77a2(),
                  "text": _0x6a1bc8.text
                });
              }
            }
            for (let _0x2ef071 = 0; _0x2ef071 < _0x42e4ca.length; _0x2ef071++) {
              {
                const _0x3610e1 = _0x42e4ca[_0x2ef071],
                  _0x24d32b = _0x3610e1[4];
                !_0x24d32b.toLowerCase().includes("君离") && _0x402e5d.push({
                  "time": Number(_0x3610e1[0]),
                  "mode": _0x3610e1[1].includes("right") ? 0 : 1,
                  "color": _0x2b77a2(),
                  "text": _0x24d32b
                });
              }
            }
            _0x265bdd(_0x402e5d);
          });
        },
        "speed": 8.5,
        "opacity": 1,
        "fontSize": 18,
        "color": "#FFFFFF",
        "mode": 0,
        "margin": [10, "75%"],
        "antiOverlap": true,
        "synchronousPlayback": true,
        "filter": _0x2a164c => _0x2a164c.text.length < 50,
        "lockTime": 6,
        "heatmap": true
      })]
    });
    let _0x190553 = $(".art-video-player");
    _0x190553.prepend("<div class=\"vodlist-of danmu-hide\"></div><div class=\"ec-listbox\"><div class=\"anthology-wrap\"></div></div></div><div class=\"r-button\"><span class=\"yzmplayer-icon-content\"><svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M448 128a106.667 106.667 0 0 1 106.667 106.667v576A106.667 106.667 0 0 1 448 917.333H128A106.667 106.667 0 0 1 21.333 810.667v-576A106.667 106.667 0 0 1 128 128h320z m448 256a106.667 106.667 0 0 1 106.667 106.667v320A106.667 106.667 0 0 1 896 917.333H661.333a42.667 42.667 0 1 1 0-85.333H896a21.333 21.333 0 0 0 21.333-21.333v-320A21.333 21.333 0 0 0 896 469.333H661.333a42.667 42.667 0 1 1 0-85.333zM448 213.333H128a21.333 21.333 0 0 0-21.333 21.334v554.666A21.333 21.333 0 0 0 128 810.667h320a21.333 21.333 0 0 0 21.333-21.334V234.667A21.333 21.333 0 0 0 448 213.333zM384 672a32 32 0 0 1 0 64H213.333a32 32 0 0 1 0-64z\"></path></svg></span></div>");
    $(document).on("click", ".vodlist-of", function () {
      $(".ec-listbox").removeClass("ec-stting");
      $(this).hide();
    });
    stray.ad.controls.add({
      "disable": false,
      "name": "danmu",
      "index": 11,
      "position": "right",
      "style": {
        "display": "none"
      },
      "html": "<i class=\"art-icon art-icon-screenshot\"><svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\"><path d=\"M591.052962 516.456498h36.308951v30.253025h-36.308951z\"></path><path d=\"M963.626469 391.364479h-73.188906c-17.155728-49.615001-43.482327-94.682429-76.567863-134.00604h94.240361v-82.312704H721.732234c-66.509786-43.469024-145.831366-68.940139-231.185337-68.940139-233.809093 0-423.356101 189.534727-423.3561 423.370427 0 233.835699 189.547007 423.358147 423.3561 423.358147 69.369927 0 134.605697-16.997116 192.382589-46.574758h225.179552v-82.286098H794.323529c37.269835-38.412868 67.288522-83.715657 87.898932-134.00604h81.402985v-82.284051h-57.233516c4.757351-25.366737 7.537673-51.462069 7.537674-78.206176 0-18.972097-1.688455-37.503149-4.105505-55.82647h53.800324v-82.286098z m-447.166389-88.653109c9.358135 14.814404 18.790972 33.631982 28.224832 56.451709l-54.448077 20.168342c-10.761088-20.168342-20.87033-38.960337-30.228465-56.451709l56.45171-20.168342zM407.561881 500.343519h-72.591295v48.393174h64.533782V689.864944c0 26.926256-6.055926 44.392046-18.167778 52.449559-10.784624 9.407254-38.308491 16.788361-82.674955 22.194488-4.027733-22.871917-11.434423-43.065841-22.143322-60.506049 48.342008 6.757914 69.186755-8.057513 62.455447-44.391023V603.160209h-60.479443V445.892373h66.559928v-54.4491h-84.676541V336.967568h147.184177v163.375951z m308.529889 185.518251H593.054549v82.650395h-62.48103v-82.650395H415.643953v-52.448536h114.929566v-34.281781h-100.816127V385.387347h143.178957c8.032954-24.197098 14.764262-45.689598 20.117177-64.533782 4.054339-13.410428 6.731308-20.818141 8.107655-22.194488 12.087293 2.728134 35.58138 10.81123 70.565149 24.222681 0 1.351787-2.026146 3.377934-6.055927 6.055926a319.803653 319.803653 0 0 0-38.309514 56.450687h62.50559v213.745128h-98.81454v34.281781h125.038807v52.44649z\"></path><path d=\"M591.052962 439.83747h36.308951v28.224832h-36.308951zM492.262982 516.456498h38.310537v30.253025h-38.310537zM492.262982 439.83747h38.310537v28.224832h-38.310537z\"></path></svg></i>",
      "tooltip": "发布弹幕",
      "click": function () {
        stray.DanMu.wap();
      }
    });
    $(document).on("click", ".r-button", function () {
      $(".art-video").toggleClass("gyro-contain");
    });
    $(".r-button").addClass("hp");
    $(".art-controls-center").addClass("dm-input-show");
    stray.load();
    stray.DanMu.initial();
    stray.ad.on("artplayerPluginDanmuku:emit", _0x46042f => {
      stray.DanMu.add(_0x46042f);
    });
  },
  "load": function () {
    stray.nextcass();
    stray.ad.on("video:loadedmetadata", () => {
      {
        var _0x43a463 = localStorage.getItem(stray.dmkey);
        stray.ad.seek = _0x43a463;
      }
    });
    stray.ad.on("video:timeupdate", () => {
      {
        var _0x23be79 = Math.floor(stray.ad.currentTime);
        localStorage.setItem(stray.dmkey, _0x23be79);
      }
    });
    stray.ad.on("video:pause", () => {
      stray.zantingguanggaoqidong == 1 && stray.pause.play(stray.zantingguanggaolianjie, stray.zantingguanggaourl);
    });
    stray.ad.on("video:play", () => {
      stray.zantingguanggaoqidong == 1 && stray.pause.out();
    });
    stray.ad.on("video:ended", () => {
      localStorage.removeItem(stray.dmkey);
      !!config.next && (top.location.href = config.next);
    });
  },
  "DanMu": {
    "initial": function () {
      stray.ad.on("artplayerPluginDanmuku:error", _0x234a38 => {
        stray.Msg("没有弹幕", 2000);
      });
      $(document).on("click", ".player-comment-setting-icon", function () {
        stray.ad.plugins.artplayerPluginDanmuku.isHide ? (stray.ad.plugins.artplayerPluginDanmuku.show(), $(this).addClass("danmu-setting-show").removeClass("danmu-setting-hide")) : (stray.ad.plugins.artplayerPluginDanmuku.hide(), $(this).addClass("danmu-setting-hide").removeClass("danmu-setting-show"));
      });
    },
    "add": function (_0x3ef7f3) {
      if (_0x3ef7f3.text < 1) {
        stray.Msg("要输入内容啊~", 2000);
        return;
      }
      if (stray.pbgjz.length > 0) for (var _0x50b273 = 0; _0x50b273 < stray.pbgjz.length; _0x50b273++) {
        {
          if (_0x3ef7f3.text.search(stray.pbgjz[_0x50b273]) != -1) {
            {
              stray.Msg("您发送的内容含有敏感字符，请规范您的弹幕内容", 2000);
              return;
            }
          }
        }
      }
      $.ajax({
        "url": "https://dmku.brovod.top/dmku/?ac=dm",
        "type": "post",
        "dataType": "json",
        "contentType": "application/x-www-form-urlencoded",
        "data": JSON.stringify({
          "player": stray.dmkey,
          "author": "",
          "time": _0x3ef7f3.time,
          "text": _0x3ef7f3.text,
          "color": getrgb(_0x3ef7f3.color),
          "type": "right",
          "size": "32px",
          "referer": getreferrer()
        }),
        "success": function (_0x5194ed) {
          _0x5194ed.code != "23" && stray.Msg(_0x5194ed.msg, 2000);
        },
        "error": function () {
          stray.Msg("弹幕发送失败", 2000);
        }
      });
    },
    "wap": function () {
      $(".art-controls-right,.art-progress,.art-controls-left").hide();
      $(".art-controls-center").addClass("danmu-input-show");
      $(".danmu-hide").show();
      $(".danmu-hide").click(function () {
        $(".art-controls-center").removeClass("danmu-input-show");
        $(".art-controls-right,.art-progress,.art-controls-left").show();
      });
    }
  },
  "pause": {
    "play": function (_0x49818f, _0x47ad79) {
      let _0x15076e = "<div id=\"player_pause\"><div class=\"tip\" style=\"left:0;bottom:6px\">广告</div><div class=\"tip g_close\"><a href=\"javascript:\" title=\"关闭广告\" style=\"color:#f4f4f4\">X</a></div><a href=\"" + _0x49818f + "\" target=\"_blank\"><img src=\"" + _0x47ad79 + "\"></a><script>$(\".g_close\").click(function(){$(this).parent().remove()})</script></div>";
      $(".art-video-player").prepend(_0x15076e);
    },
    "out": function () {
      $("#player_pause").remove();
    }
  },
  "RemoveMsg": function () {
    $(".pop-msg").remove();
  },
  "Msg": function (_0x5dc1e8, _0x3669be) {
    $(".art-video-player").prepend("<div class=\"pop-msg\"><div class=\"pop-content\"></div></div>");
    $(".pop-msg .pop-close").click(function () {
      $(".pop-msg").remove();
    });
    $(".pop-msg .pop-content").html(_0x5dc1e8);
    $(".pop-msg").show();
    setTimeout(stray.RemoveMsg, _0x3669be);
  },
  "videotype": function (_0x3ac92b, _0x54b79b) {
    if (_0x3ac92b.indexOf(".m3u8") > 0) thetype = "m3u8";else {
      if (_0x3ac92b.indexOf(".flv") > 0) {
        thetype = "flv";
      } else {
        if (_0x3ac92b.indexOf(".ts") > 0) thetype = "ts";else {
          if (_0x3ac92b.indexOf(".mpd") > 0) thetype = "mpd";else {
            _0x54b79b == "hls" || _0x54b79b == "m3u8" ? thetype = "m3u8" : thetype = _0x54b79b;
          }
        }
      }
    }
    return thetype;
  },
  "nextcass": function () {
    config.next && ($(".art-control-playAndPause").after("<div class=\"art-control art-control-next\" data-index=\"10\"><i class=\"art-icon art-icon-next hint--rounded hint--top\" aria-label=\"下一集\" style=\"display: flex;\"><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"22\" width=\"22\"><path d=\"M16 5a1 1 0 00-1 1v4.615a1.431 1.431 0 00-.615-.829L7.21 5.23A1.439 1.439 0 005 6.445v9.11a1.44 1.44 0 002.21 1.215l7.175-4.555a1.436 1.436 0 00.616-.828V16a1 1 0 002 0V6C17 5.448 16.552 5 16 5z\"></path></svg></i></div>"), $(".art-control-next").on("click", function () {
      top.location.href = config.next;
    }));
  }
};
function TheError() {
  $("body").append("<div id=\"error\"><h1>解析失败，请切换线路或刷新！</h1></div>");
  $("#loading").remove();
}
function getrgb(_0x463037) {
  var _0x211f89 = new RegExp(/^#[0-9a-fA-F]{6}$/);
  if (!_0x211f89.test(_0x463037)) {
    {
      console.log("invalid hex");
      return;
    }
  }
  var _0x2f3b01 = parseInt(_0x463037.slice(1), 16),
    _0x53a7fe = _0x2f3b01 % 256;
  _0x2f3b01 = parseInt(_0x2f3b01 / 256);
  var _0x2c93a5 = _0x2f3b01 % 256;
  _0x2f3b01 = parseInt(_0x2f3b01 / 256);
  var _0x57652d = _0x2f3b01 % 256;
  return "rgb(" + _0x57652d + "," + _0x2c93a5 + "," + _0x53a7fe + ")";
}
function getreferrer() {
  var _0x21cb48 = "";
  document.referrer.length > 0 ? _0x21cb48 = document.referrer : _0x21cb48 = window.location.href;
  return _0x21cb48;
}
function playM3u8(_0x297439, _0x4e4c71, _0xab6cf) {
  const _0x454a4e = document.createElement("script");
  _0x454a4e.src = "./artplayer/js/hls.min.js";
  document.head.appendChild(_0x454a4e);
  _0x454a4e.onload = function () {
    {
      if (Hls.isSupported()) {
        var _0x46406d = {
          "maxBufferLength": 120
        };
        if (_0xab6cf.hls) _0xab6cf.hls.destroy();
        const _0x2a1618 = new Hls();
        _0x2a1618.loadSource(_0x4e4c71);
        _0x2a1618.attachMedia(_0x297439);
        _0xab6cf.hls = _0x2a1618;
        _0xab6cf.on("destroy", () => _0x2a1618.destroy());
      } else _0x297439.canPlayType("application/vnd.apple.mpegurl") ? _0x297439.src = _0x4e4c71 : _0xab6cf.notice.show = "Unsupported playback format: m3u8";
    }
  };
}
function playMpegts(_0x195ba3, _0x3a5fe2, _0x5a2a01) {
  const _0x478860 = document.createElement("script");
  _0x478860.src = "./artplayer/js/mpegts.js";
  document.head.appendChild(_0x478860);
  _0x478860.onload = function () {
    if (mpegts.isSupported()) {
      {
        if (_0x5a2a01.mpegts) _0x5a2a01.mpegts.destroy();
        const _0x48787d = mpegts.createPlayer({
          "type": "mse",
          "url": _0x3a5fe2
        });
        _0x48787d.attachMediaElement(_0x195ba3);
        _0x48787d.load();
        _0x5a2a01.stray = _0x48787d;
        _0x5a2a01.on("destroy", () => _0x48787d.destroy());
      }
    } else _0x5a2a01.notice.show = "Unsupported playback format: flv or ts";
  };
}
function playMpd(_0x47d59b, _0x402fba, _0xab2463) {
  const _0x3cb718 = document.createElement("script");
  _0x3cb718.src = "./artplayer/js/dash.all.min.js";
  document.head.appendChild(_0x3cb718);
  _0x3cb718.onload = function () {
    {
      if (dashjs.supportsMediaSource()) {
        {
          if (_0xab2463.dash) _0xab2463.dash.destroy();
          const _0x2d13e7 = dashjs.MediaPlayer().create();
          _0x2d13e7.initialize(_0x47d59b, _0x402fba, _0xab2463.option.autoplay);
          _0xab2463.dash = _0x2d13e7;
          _0xab2463.on("destroy", () => _0x2d13e7.destroy());
        }
      } else _0xab2463.notice.show = "Unsupported playback format: mpd";
    }
  };
}
console.info("%c兄弟影视，https://xdys.vip", "background: linear-gradient(to right, #ff8a00, #e52e71); color: white; padding: 8px; border-radius: 5px;");