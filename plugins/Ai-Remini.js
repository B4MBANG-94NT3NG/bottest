// Mau Ngapain Sih Om?
// Kepo Amat :v

function _0x3e3b(){const _0x449e83=['Proses\x20Gagal\x20:(','apikey','96655lygwqF','8XySUrs','9LPLpqH','/image/unblur','Sedang\x20Di\x20Proses...','Sudah\x20Selesai\x20Kak\x20```>_<```','Request\x20False','quoted','arrayBuffer','12AQTUbH','test','status','694300POIZsi','limit','381558uSgpVO','sendFile','7731feghDW','Masih\x20Ada\x20Yang\x20Belum\x20Selesai,\x20Mohon\x20Tunggu','command','reply','82005LvqZcK','remini','524NbQwhy','unblur_high','sender','mimetype','\x20tidak\x20support','5522769QGzRVS','2424aMYawR','13120180QyTAUC','tags'];_0x3e3b=function(){return _0x449e83;};return _0x3e3b();}const _0x5d4c86=_0x3b6a;(function(_0x6321cf,_0x426430){const _0xede372=_0x3b6a,_0x24a509=_0x6321cf();while(!![]){try{const _0x1e6507=-parseInt(_0xede372(0x1ea))/0x1+parseInt(_0xede372(0x1e8))/0x2+parseInt(_0xede372(0x1ec))/0x3*(parseInt(_0xede372(0x1d1))/0x4)+-parseInt(_0xede372(0x1dc))/0x5*(-parseInt(_0xede372(0x1e5))/0x6)+-parseInt(_0xede372(0x1d6))/0x7*(-parseInt(_0xede372(0x1dd))/0x8)+-parseInt(_0xede372(0x1de))/0x9*(-parseInt(_0xede372(0x1d8))/0xa)+-parseInt(_0xede372(0x1cf))/0xb*(parseInt(_0xede372(0x1d7))/0xc);if(_0x1e6507===_0x426430)break;else _0x24a509['push'](_0x24a509['shift']());}catch(_0x15dc41){_0x24a509['push'](_0x24a509['shift']());}}}(_0x3e3b,0xe4bd4));import _0x8cd408 from'node-fetch';function _0x3b6a(_0x17a743,_0x22b152){const _0x3e3bd6=_0x3e3b();return _0x3b6a=function(_0x3b6a14,_0x1878a5){_0x3b6a14=_0x3b6a14-0x1cc;let _0x2f4bb6=_0x3e3bd6[_0x3b6a14];return _0x2f4bb6;},_0x3b6a(_0x17a743,_0x22b152);}import _0x5a3290 from'../lib/uploadImage.js';let handler=async(_0x10092c,{conn:_0x406e8b,usedPrefix:_0x12affe,command:_0xd93a4f})=>{const _0x91826=_0x3b6a;_0x406e8b[_0x91826(0x1d2)]=_0x406e8b[_0x91826(0x1d2)]?_0x406e8b[_0x91826(0x1d2)]:{};if(_0x10092c[_0x91826(0x1d3)]in _0x406e8b['unblur_high'])throw _0x91826(0x1cc);let _0x15becd=_0x10092c[_0x91826(0x1e3)]?_0x10092c['quoted']:_0x10092c,_0x542d1f=(_0x15becd['msg']||_0x15becd)[_0x91826(0x1d4)]||_0x15becd['mediaType']||'';if(!_0x542d1f)throw'Fotonya\x20Mana?';if(!/image\/(jpe?g|png)/[_0x91826(0x1e6)](_0x542d1f))throw'Mime\x20'+_0x542d1f+_0x91826(0x1d5);else _0x406e8b[_0x91826(0x1d2)][_0x10092c[_0x91826(0x1d3)]]=!![];_0x10092c[_0x91826(0x1ce)](_0x91826(0x1e0));let _0x5312a0=await _0x15becd['download']?.(),_0xd26de=await _0x5a3290(_0x5312a0),_0x51419e;try{_0x51419e=await _0x8cd408(global['API']('rose',_0x91826(0x1df),{'url':_0xd26de},_0x91826(0x1db)));if(_0x51419e[_0x91826(0x1e7)]==![])throw _0x91826(0x1e2);let _0x496f34=await _0x51419e[_0x91826(0x1e4)]();_0x406e8b[_0x91826(0x1eb)](_0x10092c['chat'],_0x496f34,'',_0x91826(0x1e1),_0x10092c);}catch{_0x10092c[_0x91826(0x1ce)](_0x91826(0x1da));}finally{delete _0x406e8b[_0x91826(0x1d2)][_0x10092c['sender']];}};handler['help']=['remini'],handler[_0x5d4c86(0x1d9)]=['ai'],handler[_0x5d4c86(0x1cd)]=[_0x5d4c86(0x1d0)],handler[_0x5d4c86(0x1e9)]=!![];export default handler;