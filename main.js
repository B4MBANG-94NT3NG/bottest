// Ya Begiitulah Masbro

const _0xa6a588=_0x4581;(function(_0x474e59,_0x1dfc95){const _0x1c49ce=_0x4581,_0x5e0523=_0x474e59();while(!![]){try{const _0x428d23=-parseInt(_0x1c49ce(0x23a))/0x1*(-parseInt(_0x1c49ce(0x21e))/0x2)+parseInt(_0x1c49ce(0x260))/0x3+parseInt(_0x1c49ce(0x225))/0x4+parseInt(_0x1c49ce(0x1ec))/0x5+parseInt(_0x1c49ce(0x21c))/0x6*(parseInt(_0x1c49ce(0x23f))/0x7)+-parseInt(_0x1c49ce(0x246))/0x8+-parseInt(_0x1c49ce(0x256))/0x9;if(_0x428d23===_0x1dfc95)break;else _0x5e0523['push'](_0x5e0523['shift']());}catch(_0x4a3e88){_0x5e0523['push'](_0x5e0523['shift']());}}}(_0x5773,0x48f81),process[_0xa6a588(0x202)][_0xa6a588(0x20f)]='0');import'./config.js';import{createRequire}from'module';import _0x4b2785,{join}from'path';import{fileURLToPath,pathToFileURL}from'url';import{platform}from'process';global[_0xa6a588(0x200)]=function filename(_0x447607=import.meta[_0xa6a588(0x1f7)],_0x565bce=platform!=='win32'){const _0x1ed2b2=_0xa6a588;return _0x565bce?/file:\/\/\//[_0x1ed2b2(0x21f)](_0x447607)?fileURLToPath(_0x447607):_0x447607:pathToFileURL(_0x447607)[_0x1ed2b2(0x262)]();},global[_0xa6a588(0x1e7)]=function dirname(_0x3f45e0){const _0x51e1e2=_0xa6a588;return _0x4b2785[_0x51e1e2(0x253)](global[_0x51e1e2(0x200)](_0x3f45e0,!![]));},global[_0xa6a588(0x209)]=function require(_0x38e3b7=import.meta[_0xa6a588(0x1f7)]){return createRequire(_0x38e3b7);};import*as _0x3b4745 from'ws';import{readdirSync,statSync,unlinkSync,existsSync,readFileSync,watch}from'fs';import _0x51d692 from'yargs';import{spawn}from'child_process';import _0x56291d from'lodash';import _0x39ec71 from'syntax-error';import{tmpdir}from'os';import{format}from'util';import{makeWASocket,protoType,serialize}from'./lib/simple.js';import{Low,JSONFile}from'lowdb';import _0x43c0cc from'pino';import{mongoDB,mongoDBV2}from'./lib/mongoDB.js';const {useSingleFileAuthState,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,msgRetryCounterMap}=await import(_0xa6a588(0x1fa));import _0x4e6733 from'./lib/store.js';const store=_0x4e6733[_0xa6a588(0x1e9)](),{CONNECTING}=_0x3b4745,{chain}=_0x56291d,PORT=process[_0xa6a588(0x202)]['PORT']||process['env'][_0xa6a588(0x230)]||0xbb8;protoType(),serialize(),global[_0xa6a588(0x252)]=(_0x29b8a1,_0xb72bdc='/',_0x3125ea={},_0x2b26dc)=>(_0x29b8a1 in global[_0xa6a588(0x24a)]?global[_0xa6a588(0x24a)][_0x29b8a1]:_0x29b8a1)+_0xb72bdc+(_0x3125ea||_0x2b26dc?'?'+new URLSearchParams(Object[_0xa6a588(0x212)]({..._0x3125ea,..._0x2b26dc?{[_0x2b26dc]:global[_0xa6a588(0x239)][_0x29b8a1 in global[_0xa6a588(0x24a)]?global[_0xa6a588(0x24a)][_0x29b8a1]:_0x29b8a1]}:{}})):''),global[_0xa6a588(0x22f)]={'start':new Date()};const __dirname=global['__dirname'](import.meta[_0xa6a588(0x1f7)]);global[_0xa6a588(0x25e)]=new Object(_0x51d692(process[_0xa6a588(0x203)][_0xa6a588(0x231)](0x2))[_0xa6a588(0x24b)](![])[_0xa6a588(0x22b)]()),global['prefix']=new RegExp('^['+(opts[_0xa6a588(0x1e0)]||'‎/!#.\x5c')[_0xa6a588(0x242)](/[|\\{}()[\]^$+*?.\-\^]/g,_0xa6a588(0x25d))+']'),global['db']=new Low(/https?:\/\//['test'](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb(\+srv)?:\/\//i[_0xa6a588(0x21f)](opts['db'])?opts['mongodbv2']?new mongoDBV2(opts['db']):new mongoDB(opts['db']):new JSONFile((opts['_'][0x0]?opts['_'][0x0]+'_':'')+_0xa6a588(0x1ea))),global[_0xa6a588(0x25f)]=global['db'],global[_0xa6a588(0x244)]=async function loadDatabase(){const _0x44122a=_0xa6a588;if(global['db'][_0x44122a(0x213)])return new Promise(_0x3cd98a=>setInterval(async function(){const _0x25c5b9=_0x44122a;!global['db']['READ']&&(clearInterval(this),_0x3cd98a(global['db'][_0x25c5b9(0x1de)]==null?global[_0x25c5b9(0x244)]():global['db']['data']));},0x1*0x3e8));if(global['db'][_0x44122a(0x1de)]!==null)return;global['db'][_0x44122a(0x213)]=!![],await global['db'][_0x44122a(0x1e3)]()[_0x44122a(0x20e)](console[_0x44122a(0x22e)]),global['db']['READ']=null,global['db']['data']={'users':{},'chats':{},'stats':{},'msgs':{},'sticker':{},'settings':{},...global['db'][_0x44122a(0x1de)]||{}},global['db'][_0x44122a(0x227)]=chain(global['db'][_0x44122a(0x1de)]);},loadDatabase();const authF=global['opts']['single']?(global[_0xa6a588(0x25e)]['_'][0x0]||_0xa6a588(0x236))+_0xa6a588(0x21a):_0xa6a588(0x1fc),{state,saveState,saveCreds}=global['opts'][_0xa6a588(0x1f9)]?await useSingleFileAuthState(authF):await useMultiFileAuthState(authF),connectionOptions={'printQRInTerminal':!![],'auth':state,'patchMessageBeforeSending':_0x14834c=>{const _0x290737=_0xa6a588,_0x3a3f89=!!(_0x14834c[_0x290737(0x1f5)]||_0x14834c['templateMessage']||_0x14834c['listMessage']);return _0x3a3f89&&(_0x14834c={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x14834c}}}),_0x14834c;},'logger':_0x43c0cc({'level':_0xa6a588(0x243)}),'getMessage':async _0x251c48=>(conn['loadMessage'](_0x251c48['id'])||store[_0xa6a588(0x20d)](_0x251c48['id'])||{})['message']||{'conversation':null}};function _0x5773(){const _0x325a09=['sIcon','re\x20-\x20require\x20plugin\x20\x27','APIs','exitProcess','then','mtimeMs','connect','participantsUpdate','server','race','API','dirname','sort','deleteUpdate','11905371HmEuOt','forEach','statusCode','keys','welcome','-hide_banner','connection.update','\x5c$&','opts','DATABASE','657093BMEDFq','☑️\x20Quick\x20Test\x20Done','toString','chats','error\x20require\x20plugin\x20\x27','data','push','prefix','syntax\x20error\x20while\x20loading\x20\x27','group-participants.update','read','-frames:v','message.delete','./handler.js','__dirname','now','makeInMemoryStore','database.json','requiring\x20new\x20plugin\x20\x27','2495090bTLpdW','output','ffmpeg','sDesc','localeCompare','@user\x20Sekarang\x20Bukan\x20Admin!','ffmpegWebp','-filter_complex','loggedOut','buttonsMessage','warn','url','freeze','single','@adiwajshing/baileys','Link\x20Group\x20Telah\x20Diubah\x20Ke\x20\x0a@revoke','Zeltoria','connectionUpdate','off','?update=','__filename','stringify','env','argv','support','conn','credsUpdate','Please\x20install\x20ffmpeg\x20for\x20sending\x20videos\x20(pkg\x20install\x20ffmpeg)','bind','__require','reloadHandler','reload','plugins','loadMessage','catch','NODE_TLS_REJECT_UNAUTHORIZED','payload','sdemote','entries','READ','Stickers\x20may\x20not\x20work\x20without\x20imagemagick\x20if\x20libwebp\x20on\x20ffmpeg\x20doesnt\x20isntalled\x20(pkg\x20install\x20imagemagick)','log','./server.js','./handler.js?update=','spromote','isInit','.json','sSubject','6oqXgCT','convert','2NJjWBV','test','sRevoke','Selamat\x20Tinggal\x20*@user*\x0aSelamat\x20Jalan\x20Semoga\x20Tenang\x20Di\x20Alam\x20Sana!','Sukses\x20Tersambung\x0a\x0aScript\x20Ini\x20Di\x20Tulis\x20Ulang\x20Oleh\x20Zeltoria\x0aWhatsapp\x20:\x20wa.me/6285776353741','color','handler','1819136PqOIhF','map','chain','Deskripsi\x20Telah\x20Diubah\x20Ke\x20\x0a@desc','module','autocleartmp','parse','webp','default','error','timestamp','SERVER_PORT','slice','groupsUpdate','./tmp','onDelete','removeAllListeners','Yaemiko','logger','isFile','APIKeys','297563wdeykA','info','readyState','Stickers\x20may\x20not\x20animated\x20without\x20libwebp\x20on\x20ffmpeg\x20(--enable-ibwebp\x20while\x20compiling\x20ffmpeg)','receivedPendingNotifications','1382983sNfVpM','Foto\x20Grup\x20Telah\x20Diubah!','creds.update','replace','silent','loadDatabase','filter','370120KVtPGJ','close'];_0x5773=function(){return _0x325a09;};return _0x5773();}global[_0xa6a588(0x205)]=makeWASocket(connectionOptions),conn[_0xa6a588(0x219)]=![];function _0x4581(_0x290fc9,_0x3127d9){const _0x5773a6=_0x5773();return _0x4581=function(_0x45813e,_0x298901){_0x45813e=_0x45813e-0x1dd;let _0x4fb918=_0x5773a6[_0x45813e];return _0x4fb918;},_0x4581(_0x290fc9,_0x3127d9);}!opts[_0xa6a588(0x21f)]&&setInterval(async()=>{const _0x16cbf6=_0xa6a588;if(global['db'][_0x16cbf6(0x1de)])await global['db']['write']()[_0x16cbf6(0x20e)](console['error']);if(opts[_0x16cbf6(0x22a)])try{clearTmp();}catch(_0x6a23f8){console['error'](_0x6a23f8);}},0x3c*0x3e8);if(opts[_0xa6a588(0x250)])(await import(_0xa6a588(0x216)))['default'](global[_0xa6a588(0x205)],PORT);function clearTmp(){const _0x113f2a=_0xa6a588,_0x202620=[tmpdir(),join(__dirname,_0x113f2a(0x233))],_0x57053b=[];return _0x202620[_0x113f2a(0x257)](_0xf65681=>readdirSync(_0xf65681)[_0x113f2a(0x257)](_0x22fd56=>_0x57053b[_0x113f2a(0x1df)](join(_0xf65681,_0x22fd56)))),_0x57053b[_0x113f2a(0x226)](_0x39a2bd=>{const _0x3a6313=_0x113f2a,_0xe8fc24=statSync(_0x39a2bd);if(_0xe8fc24[_0x3a6313(0x238)]()&&Date[_0x3a6313(0x1e8)]()-_0xe8fc24[_0x3a6313(0x24d)]>=0x3e8*0x3c*0x3)return unlinkSync(_0x39a2bd);return![];});}async function connectionUpdate(_0x53c44a){const _0xb62fd3=_0xa6a588,{connection:_0x4d2e8e,lastDisconnect:_0x803a2e,isNewLogin:_0x3501c2}=_0x53c44a;if(_0x3501c2)conn[_0xb62fd3(0x219)]=!![];const _0xd1637=_0x803a2e?.[_0xb62fd3(0x22e)]?.['output']?.[_0xb62fd3(0x258)]||_0x803a2e?.[_0xb62fd3(0x22e)]?.[_0xb62fd3(0x1ed)]?.[_0xb62fd3(0x210)]?.[_0xb62fd3(0x258)];_0xd1637&&_0xd1637!==DisconnectReason[_0xb62fd3(0x1f4)]&&conn?.['ws'][_0xb62fd3(0x23c)]!==CONNECTING&&(console[_0xb62fd3(0x215)](await global[_0xb62fd3(0x20a)](!![])[_0xb62fd3(0x20e)](console[_0xb62fd3(0x22e)])),global[_0xb62fd3(0x22f)][_0xb62fd3(0x24e)]=new Date());if(global['db'][_0xb62fd3(0x1de)]==null)await loadDatabase();console[_0xb62fd3(0x215)](JSON[_0xb62fd3(0x201)](_0x53c44a,null,0x4));if(_0x53c44a[_0xb62fd3(0x23e)])conn['sendMessage']('6285776353741@s.whatsapp.net',{'text':_0xb62fd3(0x222)});}process['on']('uncaughtException',console['error']);let isInit=!![],handler=await import(_0xa6a588(0x1e6));global[_0xa6a588(0x20a)]=async function(_0x24b6eb){const _0x4ecf98=_0xa6a588;try{const _0x2b8553=await import(_0x4ecf98(0x217)+Date['now']())['catch'](console[_0x4ecf98(0x22e)]);if(Object['keys'](_0x2b8553||{})['length'])handler=_0x2b8553;}catch(_0x4c38e1){console[_0x4ecf98(0x22e)](_0x4c38e1);}if(_0x24b6eb){const _0x18c362=global[_0x4ecf98(0x205)][_0x4ecf98(0x263)];try{global[_0x4ecf98(0x205)]['ws']['close']();}catch{}conn['ev'][_0x4ecf98(0x235)](),global[_0x4ecf98(0x205)]=makeWASocket(connectionOptions,{'chats':_0x18c362}),isInit=!![];}return!isInit&&(conn['ev']['off']('messages.upsert',conn[_0x4ecf98(0x224)]),conn['ev'][_0x4ecf98(0x1fe)](_0x4ecf98(0x1e2),conn[_0x4ecf98(0x24f)]),conn['ev'][_0x4ecf98(0x1fe)]('groups.update',conn[_0x4ecf98(0x232)]),conn['ev']['off'](_0x4ecf98(0x1e5),conn[_0x4ecf98(0x234)]),conn['ev'][_0x4ecf98(0x1fe)]('connection.update',conn[_0x4ecf98(0x1fd)]),conn['ev'][_0x4ecf98(0x1fe)](_0x4ecf98(0x241),conn[_0x4ecf98(0x206)])),conn[_0x4ecf98(0x25a)]='Selamat\x20Datang\x20*@user*\x20Di\x20*@subject*\x0a\x0aMohon\x20Di\x20Baca\x20Ya!\x0a@desc',conn['bye']=_0x4ecf98(0x221),conn[_0x4ecf98(0x218)]='@user\x20Sekarang\x20Admin!',conn[_0x4ecf98(0x211)]=_0x4ecf98(0x1f1),conn[_0x4ecf98(0x1ef)]=_0x4ecf98(0x228),conn[_0x4ecf98(0x21b)]='Nama\x20Grup\x20Telah\x20Diubah\x20Ke\x20\x0a@subject',conn[_0x4ecf98(0x248)]=_0x4ecf98(0x240),conn[_0x4ecf98(0x220)]=_0x4ecf98(0x1fb),conn[_0x4ecf98(0x224)]=handler[_0x4ecf98(0x224)]['bind'](global[_0x4ecf98(0x205)]),conn[_0x4ecf98(0x24f)]=handler[_0x4ecf98(0x24f)][_0x4ecf98(0x208)](global[_0x4ecf98(0x205)]),conn['groupsUpdate']=handler[_0x4ecf98(0x232)][_0x4ecf98(0x208)](global[_0x4ecf98(0x205)]),conn[_0x4ecf98(0x234)]=handler[_0x4ecf98(0x255)][_0x4ecf98(0x208)](global['conn']),conn['connectionUpdate']=connectionUpdate[_0x4ecf98(0x208)](global['conn']),conn[_0x4ecf98(0x206)]=global['opts'][_0x4ecf98(0x1f9)]?saveState[_0x4ecf98(0x208)](global[_0x4ecf98(0x205)]):saveCreds['bind'](global[_0x4ecf98(0x205)]),conn['ev']['on']('messages.upsert',conn[_0x4ecf98(0x224)]),conn['ev']['on']('group-participants.update',conn[_0x4ecf98(0x24f)]),conn['ev']['on']('groups.update',conn['groupsUpdate']),conn['ev']['on']('message.delete',conn[_0x4ecf98(0x234)]),conn['ev']['on'](_0x4ecf98(0x25c),conn[_0x4ecf98(0x1fd)]),conn['ev']['on'](_0x4ecf98(0x241),conn[_0x4ecf98(0x206)]),isInit=![],!![];};const pluginFolder=global[_0xa6a588(0x1e7)](join(__dirname,'./plugins/index')),pluginFilter=_0x298ae0=>/\.js$/[_0xa6a588(0x21f)](_0x298ae0);global[_0xa6a588(0x20c)]={};async function filesInit(){const _0x3ddfd3=_0xa6a588;for(let _0x13edce of readdirSync(pluginFolder)[_0x3ddfd3(0x245)](pluginFilter)){try{let _0x42a44a=global[_0x3ddfd3(0x200)](join(pluginFolder,_0x13edce));const _0x435929=await import(_0x42a44a);global['plugins'][_0x13edce]=_0x435929['default']||_0x435929;}catch(_0xa3fb29){conn[_0x3ddfd3(0x237)][_0x3ddfd3(0x22e)](_0xa3fb29),delete global[_0x3ddfd3(0x20c)][_0x13edce];}}}filesInit()[_0xa6a588(0x24c)](_0x18fa79=>console[_0xa6a588(0x215)](Object[_0xa6a588(0x259)](global[_0xa6a588(0x20c)])))[_0xa6a588(0x20e)](console[_0xa6a588(0x22e)]),global['reload']=async(_0x268693,_0x5c9cfe)=>{const _0x35c6d9=_0xa6a588;if(pluginFilter(_0x5c9cfe)){let _0x3307f4=global[_0x35c6d9(0x200)](join(pluginFolder,_0x5c9cfe),!![]);if(_0x5c9cfe in global[_0x35c6d9(0x20c)]){if(existsSync(_0x3307f4))conn['logger'][_0x35c6d9(0x23b)](_0x35c6d9(0x249)+_0x5c9cfe+'\x27');else return conn['logger']['warn']('deleted\x20plugin\x20\x27'+_0x5c9cfe+'\x27'),delete global['plugins'][_0x5c9cfe];}else conn[_0x35c6d9(0x237)][_0x35c6d9(0x23b)](_0x35c6d9(0x1eb)+_0x5c9cfe+'\x27');let _0x384df9=_0x39ec71(readFileSync(_0x3307f4),_0x5c9cfe,{'sourceType':_0x35c6d9(0x229),'allowAwaitOutsideFunction':!![]});if(_0x384df9)conn[_0x35c6d9(0x237)][_0x35c6d9(0x22e)](_0x35c6d9(0x1e1)+_0x5c9cfe+'\x27\x0a'+format(_0x384df9));else try{const _0x3cbd90=await import(global[_0x35c6d9(0x200)](_0x3307f4)+_0x35c6d9(0x1ff)+Date[_0x35c6d9(0x1e8)]());global['plugins'][_0x5c9cfe]=_0x3cbd90[_0x35c6d9(0x22d)]||_0x3cbd90;}catch(_0x2a99d6){conn[_0x35c6d9(0x237)][_0x35c6d9(0x22e)](_0x35c6d9(0x1dd)+_0x5c9cfe+'\x0a'+format(_0x2a99d6)+'\x27');}finally{global[_0x35c6d9(0x20c)]=Object['fromEntries'](Object['entries'](global['plugins'])[_0x35c6d9(0x254)](([_0x213078],[_0x4fb4ef])=>_0x213078[_0x35c6d9(0x1f0)](_0x4fb4ef)));}}},Object[_0xa6a588(0x1f8)](global['reload']),watch(pluginFolder,global[_0xa6a588(0x20b)]),await global[_0xa6a588(0x20a)]();async function _quickTest(){const _0x1660a0=_0xa6a588;let _0x575f4b=await Promise['all']([spawn(_0x1660a0(0x1ee)),spawn('ffprobe'),spawn('ffmpeg',[_0x1660a0(0x25b),'-loglevel',_0x1660a0(0x22e),_0x1660a0(0x1f3),_0x1660a0(0x223),_0x1660a0(0x1e4),'1','-f',_0x1660a0(0x22c),'-']),spawn(_0x1660a0(0x21d)),spawn('magick'),spawn('gm'),spawn('find',['--version'])][_0x1660a0(0x226)](_0x56a2a0=>{const _0x23bead=_0x1660a0;return Promise[_0x23bead(0x251)]([new Promise(_0x12c4c5=>{const _0x5b5732=_0x23bead;_0x56a2a0['on'](_0x5b5732(0x247),_0x10c459=>{_0x12c4c5(_0x10c459!==0x7f);});}),new Promise(_0x80391e=>{const _0x4fc623=_0x23bead;_0x56a2a0['on'](_0x4fc623(0x22e),_0x289f95=>_0x80391e(![]));})]);})),[_0x4a258c,_0xb6c286,_0x90190c,_0x48f4ec,_0x330d02,_0x47523b,_0x11f53c]=_0x575f4b;console[_0x1660a0(0x215)](_0x575f4b);let _0xcc2fd3=global[_0x1660a0(0x204)]={'ffmpeg':_0x4a258c,'ffprobe':_0xb6c286,'ffmpegWebp':_0x90190c,'convert':_0x48f4ec,'magick':_0x330d02,'gm':_0x47523b,'find':_0x11f53c};Object[_0x1660a0(0x1f8)](global['support']);if(!_0xcc2fd3[_0x1660a0(0x1ee)])conn['logger'][_0x1660a0(0x1f6)](_0x1660a0(0x207));if(_0xcc2fd3[_0x1660a0(0x1ee)]&&!_0xcc2fd3[_0x1660a0(0x1f2)])conn['logger'][_0x1660a0(0x1f6)](_0x1660a0(0x23d));if(!_0xcc2fd3['convert']&&!_0xcc2fd3['magick']&&!_0xcc2fd3['gm'])conn[_0x1660a0(0x237)][_0x1660a0(0x1f6)](_0x1660a0(0x214));}_quickTest()['then'](()=>conn[_0xa6a588(0x237)][_0xa6a588(0x23b)](_0xa6a588(0x261)))[_0xa6a588(0x20e)](console[_0xa6a588(0x22e)]);