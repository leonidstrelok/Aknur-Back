(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{373:function(t,e,r){"use strict";var l=r(7),o=r(167),n=r(168),f=r(237),c=r(208),m=r(17),d=r(192).f,h=r(193).f,y=r(20).f,w=r(374).trim,x="Number",T=l.Number,z=T,M=T.prototype,H=n(r(209)(M))==x,I="trim"in String.prototype,k=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var r,l,o,n=(e=I?e.trim():w(e,3)).charCodeAt(0);if(43===n||45===n){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:l=2,o=49;break;case 79:case 111:l=8,o=55;break;default:return+e}for(var code,f=e.slice(2),i=0,m=f.length;i<m;i++)if((code=f.charCodeAt(i))<48||code>o)return NaN;return parseInt(f,l)}}return+e};if(!T(" 0o1")||!T("0b1")||T("+0x1")){T=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof T&&(H?m((function(){M.valueOf.call(r)})):n(r)!=x)?f(new z(k(e)),r,T):k(e)};for(var v,B=r(14)?d(z):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;B.length>E;E++)o(z,v=B[E])&&!o(T,v)&&y(T,v,h(z,v));T.prototype=M,M.constructor=T,r(22)(l,x,T)}},374:function(t,e,r){var l=r(5),o=r(172),n=r(17),f=r(375),c="["+f+"]",m=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),h=function(t,e,r){var o={},c=n((function(){return!!f[t]()||"​"!="​"[t]()})),m=o[t]=c?e(y):f[t];r&&(o[r]=m),l(l.P+l.F*c,"String",o)},y=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(d,"")),t};t.exports=h},375:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},387:function(t,e,r){var content=r(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("c565ec82",content,!0,{sourceMap:!1})},388:function(t,e,r){var content=r(438);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("55170bdf",content,!0,{sourceMap:!1})},435:function(t,e,r){"use strict";r(387)},436:function(t,e,r){var l=r(12),o=r(25),n=r(26),f=r(27),c=r(28),m=r(29),d=r(30),h=r(31),y=r(32),w=r(33),x=r(34),T=r(35),z=r(36),M=r(37),H=r(38),I=r(39),k=r(40),v=r(41),B=r(42),E=r(43),L=r(44),N=r(45),_=r(46),Y=r(47),S=r(48),A=r(49),R=r(50),C=r(51),F=r(52),O=r(53),j=r(54),V=r(55),$=r(56),G=r(57),P=r(58),J=r(59),U=r(60),X=r(61),D=r(62),K=r(63),Q=r(64),W=r(65),Z=r(66),tt=r(67),et=r(68),at=r(69),lt=r(70),ot=r(71),it=r(72),nt=r(73),ft=r(74),st=r(75),ct=r(76),mt=r(77),ut=r(78),pt=r(79),ht=r(80),yt=r(81),wt=r(82),xt=r(83),Tt=r(84),gt=r(85),bt=r(86),zt=r(87),Mt=r(88),Ht=r(89),It=r(90),kt=r(91),vt=r(92),Bt=r(93),Et=r(94),Lt=r(95),Nt=r(96),_t=r(97),Yt=r(98),St=r(99),At=r(100),Rt=r(101),Ct=r(102),Ft=r(103),Ot=r(104),jt=r(105),Vt=r(106),$t=r(107),Gt=r(108),Pt=r(109),Jt=r(110),Ut=r(111),Xt=r(112),qt=r(113),Dt=r(114),Kt=r(115),Qt=r(116),Wt=r(117),Zt=r(118),te=r(119),ee=r(120),ae=r(121),re=r(122),le=r(123),oe=r(124),ie=r(125),ne=r(126),fe=r(127),se=r(128),ce=r(129),me=r(130),de=r(131),ue=r(132),pe=r(133),he=r(134),ye=r(135),we=r(136),xe=r(137),Te=r(138),ge=r(139),be=r(140),ze=r(141),Me=r(142),He=r(143),Ie=r(144),ke=r(145),ve=r(146),Be=r(147),Ee=r(148),Le=r(149),Ne=r(150),_e=r(151),Ye=l(!1),Se=o(n),Ae=o(n,{hash:"?#iefix"}),Re=o(f),Ce=o(c),Fe=o(m),Oe=o(m,{hash:"?#iefix"}),je=o(d),Ve=o(h),$e=o(y),Ge=o(y,{hash:"?#iefix"}),Pe=o(w),Je=o(x),Ue=o(T),Xe=o(T,{hash:"?#iefix"}),qe=o(z),De=o(M),Ke=o(H),Qe=o(H,{hash:"?#iefix"}),We=o(I),Ze=o(k),ta=o(v),ea=o(v,{hash:"?#iefix"}),aa=o(B),ra=o(E),la=o(L),oa=o(L,{hash:"?#iefix"}),ia=o(N),na=o(_),fa=o(Y),sa=o(Y,{hash:"?#iefix"}),ca=o(S),ma=o(A),da=o(R),ua=o(R,{hash:"?#iefix"}),pa=o(C),ha=o(F),ya=o(O),wa=o(O,{hash:"?#iefix"}),xa=o(j),Ta=o(V),ga=o($),ba=o($,{hash:"?#iefix"}),za=o(G),Ma=o(P),Ha=o(J),Ia=o(J,{hash:"?#iefix"}),ka=o(U),va=o(X),Ba=o(D),Ea=o(D,{hash:"?#iefix"}),La=o(K),Na=o(Q),_a=o(W),Ya=o(W,{hash:"?#iefix"}),Sa=o(Z),Aa=o(tt),Ra=o(et),Ca=o(et,{hash:"?#iefix"}),Fa=o(at),Oa=o(lt),ja=o(ot),Va=o(ot,{hash:"?#iefix"}),$a=o(it),Ga=o(nt),Pa=o(ft),Ja=o(ft,{hash:"?#iefix"}),Ua=o(st),Xa=o(ct),qa=o(mt),Da=o(mt,{hash:"?#iefix"}),Ka=o(ut),Qa=o(pt),Wa=o(ht),Za=o(ht,{hash:"?#iefix"}),er=o(yt),ar=o(wt),rr=o(xt),lr=o(Tt),or=o(Tt,{hash:"?#iefix"}),ir=o(gt),nr=o(bt),fr=o(zt),sr=o(Mt),cr=o(Mt,{hash:"?#iefix"}),mr=o(Ht),dr=o(It),ur=o(kt),pr=o(vt),yr=o(vt,{hash:"?#iefix"}),wr=o(Bt),xr=o(Et),Tr=o(Lt),gr=o(Nt),zr=o(Nt,{hash:"?#iefix"}),Mr=o(_t),Hr=o(Yt),Ir=o(St),kr=o(At),vr=o(At,{hash:"?#iefix"}),Br=o(Rt),Er=o(Ct),Lr=o(Ft),Nr=o(Ot),_r=o(Ot,{hash:"?#iefix"}),Yr=o(jt),Sr=o(Vt),Ar=o($t),Rr=o(Gt),Cr=o(Gt,{hash:"?#iefix"}),Fr=o(Pt),Or=o(Jt),jr=o(Ut),Vr=o(Xt),$r=o(Xt,{hash:"?#iefix"}),Gr=o(qt),Pr=o(Dt),Jr=o(Kt),Ur=o(Qt),Xr=o(Qt,{hash:"?#iefix"}),qr=o(Wt),Dr=o(Zt),Kr=o(te),Qr=o(ee),Wr=o(ee,{hash:"?#iefix"}),Zr=o(ae),tl=o(re),el=o(le),al=o(oe),rl=o(oe,{hash:"?#iefix"}),ll=o(ie),il=o(ne),nl=o(fe),fl=o(se),sl=o(se,{hash:"?#iefix"}),cl=o(ce),ml=o(me),pl=o(de),hl=o(ue),yl=o(ue,{hash:"?#iefix"}),wl=o(pe),xl=o(he),Tl=o(ye),gl=o(we),bl=o(we,{hash:"?#iefix"}),zl=o(xe),Ml=o(Te),Hl=o(ge),Il=o(be),kl=o(be,{hash:"?#iefix"}),vl=o(ze),Bl=o(Me),El=o(He),Ll=o(Ie),Nl=o(Ie,{hash:"?#iefix"}),_l=o(ke),Yl=o(ve),Sl=o(Be),Al=o(Ee),Rl=o(Ee,{hash:"?#iefix"}),Cl=o(Le),Fl=o(Ne),Ol=o(_e);Ye.push([t.i,'@font-face{font-family:"Montserrat";src:url('+Se+');src:local("Montserrat Light"),local("Montserrat-Light"),url('+Ae+') format("embedded-opentype"),url('+Re+') format("woff"),url('+Ce+') format("truetype");font-weight:300;font-style:normal}@font-face{font-family:"Montserrat";src:url('+Fe+');src:local("Montserrat Medium Italic"),local("Montserrat-MediumItalic"),url('+Oe+') format("embedded-opentype"),url('+je+') format("woff"),url('+Ve+') format("truetype");font-weight:500;font-style:italic}@font-face{font-family:"Montserrat";src:url('+$e+');src:local("Montserrat Thin"),local("Montserrat-Thin"),url('+Ge+') format("embedded-opentype"),url('+Pe+') format("woff"),url('+Je+') format("truetype");font-weight:100;font-style:normal}@font-face{font-family:"Montserrat";src:url('+Ue+');src:local("Montserrat ExtraLight Italic"),local("Montserrat-ExtraLightItalic"),url('+Xe+') format("embedded-opentype"),url('+qe+') format("woff"),url('+De+') format("truetype");font-weight:200;font-style:italic}@font-face{font-family:"Montserrat";src:url('+Ke+');src:local("Montserrat Bold Italic"),local("Montserrat-BoldItalic"),url('+Qe+') format("embedded-opentype"),url('+We+') format("woff"),url('+Ze+') format("truetype");font-weight:700;font-style:italic}@font-face{font-family:"Montserrat";src:url('+ta+');src:local("Montserrat SemiBold"),local("Montserrat-SemiBold"),url('+ea+') format("embedded-opentype"),url('+aa+') format("woff"),url('+ra+') format("truetype");font-weight:600;font-style:normal}@font-face{font-family:"Montserrat";src:url('+la+');src:local("Montserrat ExtraLight"),local("Montserrat-ExtraLight"),url('+oa+') format("embedded-opentype"),url('+ia+') format("woff"),url('+na+') format("truetype");font-weight:200;font-style:normal}@font-face{font-family:"Montserrat";src:url('+fa+');src:local("Montserrat ExtraBold Italic"),local("Montserrat-ExtraBoldItalic"),url('+sa+') format("embedded-opentype"),url('+ca+') format("woff"),url('+ma+') format("truetype");font-weight:800;font-style:italic}@font-face{font-family:"Montserrat";src:url('+da+');src:local("Montserrat Italic"),local("Montserrat-Italic"),url('+ua+') format("embedded-opentype"),url('+pa+') format("woff"),url('+ha+') format("truetype");font-weight:400;font-style:italic}@font-face{font-family:"Montserrat";src:url('+ya+');src:local("Montserrat Bold"),local("Montserrat-Bold"),url('+wa+') format("embedded-opentype"),url('+xa+') format("woff"),url('+Ta+') format("truetype");font-weight:700;font-style:normal}@font-face{font-family:"Montserrat";src:url('+ga+');src:local("Montserrat Light Italic"),local("Montserrat-LightItalic"),url('+ba+') format("embedded-opentype"),url('+za+') format("woff"),url('+Ma+') format("truetype");font-weight:300;font-style:italic}@font-face{font-family:"Montserrat";src:url('+Ha+');src:local("Montserrat Black Italic"),local("Montserrat-BlackItalic"),url('+Ia+') format("embedded-opentype"),url('+ka+') format("woff"),url('+va+') format("truetype");font-weight:900;font-style:italic}@font-face{font-family:"Montserrat";src:url('+Ba+');src:local("Montserrat SemiBold Italic"),local("Montserrat-SemiBoldItalic"),url('+Ea+') format("embedded-opentype"),url('+La+') format("woff"),url('+Na+') format("truetype");font-weight:600;font-style:italic}@font-face{font-family:"Montserrat";src:url('+_a+');src:local("Montserrat Regular"),local("Montserrat-Regular"),url('+Ya+') format("embedded-opentype"),url('+Sa+') format("woff"),url('+Aa+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"Montserrat";src:url('+Ra+');src:local("Montserrat Medium"),local("Montserrat-Medium"),url('+Ca+') format("embedded-opentype"),url('+Fa+') format("woff"),url('+Oa+') format("truetype");font-weight:500;font-style:normal}@font-face{font-family:"Montserrat";src:url('+ja+');src:local("Montserrat ExtraBold"),local("Montserrat-ExtraBold"),url('+Va+') format("embedded-opentype"),url('+$a+') format("woff"),url('+Ga+') format("truetype");font-weight:800;font-style:normal}@font-face{font-family:"Montserrat";src:url('+Pa+');src:local("Montserrat Black"),local("Montserrat-Black"),url('+Ja+') format("embedded-opentype"),url('+Ua+') format("woff"),url('+Xa+') format("truetype");font-weight:900;font-style:normal}@font-face{font-family:"Montserrat";src:url('+qa+');src:local("Montserrat Thin Italic"),local("Montserrat-ThinItalic"),url('+Da+') format("embedded-opentype"),url('+Ka+') format("woff"),url('+Qa+') format("truetype");font-weight:100;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+Wa+');src:local("TT Hazelnuts ExtraLight"),local("TTHazelnuts-ExtraLight"),url('+Za+') format("embedded-opentype"),url('+er+') format("woff2"),url('+ar+') format("woff"),url('+rr+') format("truetype");font-weight:200;font-style:normal}@font-face{font-family:"TT Hazelnuts";src:url('+lr+');src:local("TT Hazelnuts Bold Italic"),local("TTHazelnuts-BoldItalic"),url('+or+') format("embedded-opentype"),url('+ir+') format("woff2"),url('+nr+') format("woff"),url('+fr+') format("truetype");font-weight:700;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+sr+');src:local("TT Hazelnuts Regular"),local("TTHazelnuts-Regular"),url('+cr+') format("embedded-opentype"),url('+mr+') format("woff2"),url('+dr+') format("woff"),url('+ur+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"TT Hazelnuts";src:url('+pr+');src:local("TT Hazelnuts Italic"),local("TTHazelnuts-Italic"),url('+yr+') format("embedded-opentype"),url('+wr+') format("woff2"),url('+xr+') format("woff"),url('+Tr+') format("truetype");font-weight:400;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+gr+');src:local("TT Hazelnuts Light Italic"),local("TTHazelnuts-LightItalic"),url('+zr+') format("embedded-opentype"),url('+Mr+') format("woff2"),url('+Hr+') format("woff"),url('+Ir+') format("truetype");font-weight:300;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+kr+');src:local("TT Hazelnuts Light"),local("TTHazelnuts-Light"),url('+vr+') format("embedded-opentype"),url('+Br+') format("woff2"),url('+Er+') format("woff"),url('+Lr+') format("truetype");font-weight:300;font-style:normal}@font-face{font-family:"TT Hazelnuts";src:url('+Nr+');src:local("TT Hazelnuts Medium Italic"),local("TTHazelnuts-MediumItalic"),url('+_r+') format("embedded-opentype"),url('+Yr+') format("woff2"),url('+Sr+') format("woff"),url('+Ar+') format("truetype");font-weight:500;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+Rr+');src:local("TT Hazelnuts Thin Italic"),local("TTHazelnuts-ThinItalic"),url('+Cr+') format("embedded-opentype"),url('+Fr+') format("woff2"),url('+Or+') format("woff"),url('+jr+') format("truetype");font-weight:100;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+Vr+');src:local("TT Hazelnuts ExtraBold"),local("TTHazelnuts-ExtraBold"),url('+$r+') format("embedded-opentype"),url('+Gr+') format("woff2"),url('+Pr+') format("woff"),url('+Jr+') format("truetype");font-weight:800;font-style:normal}@font-face{font-family:"TT Hazelnuts";src:url('+Ur+');src:local("TT Hazelnuts ExtraLight Italic"),local("TTHazelnuts-ExtraLightItalic"),url('+Xr+') format("embedded-opentype"),url('+qr+') format("woff2"),url('+Dr+') format("woff"),url('+Kr+') format("truetype");font-weight:200;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+Qr+');src:local("TT Hazelnuts Medium"),local("TTHazelnuts-Medium"),url('+Wr+') format("embedded-opentype"),url('+Zr+') format("woff2"),url('+tl+') format("woff"),url('+el+') format("truetype");font-weight:500;font-style:normal}@font-face{font-family:"TT Hazelnuts";src:url('+al+');src:local("TT Hazelnuts Heavy Italic"),local("TTHazelnuts-HeavyItalic"),url('+rl+') format("embedded-opentype"),url('+ll+') format("woff2"),url('+il+') format("woff"),url('+nl+') format("truetype");font-weight:900;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+fl+');src:local("TT Hazelnuts Thin"),local("TTHazelnuts-Thin"),url('+sl+') format("embedded-opentype"),url('+cl+') format("woff2"),url('+ml+') format("woff"),url('+pl+') format("truetype");font-weight:100;font-style:normal}@font-face{font-family:"TT Hazelnuts";src:url('+hl+');src:local("TT Hazelnuts Black"),local("TTHazelnuts-Black"),url('+yl+') format("embedded-opentype"),url('+wl+') format("woff2"),url('+xl+') format("woff"),url('+Tl+') format("truetype");font-weight:900;font-style:normal}@font-face{font-family:"TT Hazelnuts";src:url('+gl+');src:local("TT Hazelnuts Bold"),local("TTHazelnuts-Bold"),url('+bl+') format("embedded-opentype"),url('+zl+') format("woff2"),url('+Ml+') format("woff"),url('+Hl+') format("truetype");font-weight:700;font-style:normal}@font-face{font-family:"TT Hazelnuts";src:url('+Il+');src:local("TT Hazelnuts ExtraBold Italic"),local("TTHazelnuts-ExtraBoldItalic"),url('+kl+') format("embedded-opentype"),url('+vl+') format("woff2"),url('+Bl+') format("woff"),url('+El+') format("truetype");font-weight:800;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+Ll+');src:local("TT Hazelnuts Black Italic"),local("TTHazelnuts-BlackItalic"),url('+Nl+') format("embedded-opentype"),url('+_l+') format("woff2"),url('+Yl+') format("woff"),url('+Sl+') format("truetype");font-weight:900;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+Al+');src:local("TT Hazelnuts Heavy"),local("TTHazelnuts-Heavy"),url('+Rl+') format("embedded-opentype"),url('+Cl+') format("woff2"),url('+Fl+') format("woff"),url('+Ol+') format("truetype");font-weight:900;font-style:normal}.mobile{display:none}@media only screen and (max-width:767px){.mobile{-webkit-min-device-pixel-ratio:2;display:block}}.tablet{display:none}@media only screen and (min-width:768px) and (max-width:1200px){.tablet{-webkit-min-device-pixel-ratio:2;display:block}}.desctop{display:none}@media only screen and (min-width:1200px){.desctop{-webkit-min-device-pixel-ratio:2;display:block}}body,html{margin:0;padding:0;font-style:normal}body{overflow-x:hidden}*,:after,:before{box-sizing:border-box;margin:0;padding:0}a{text-decoration:none}button{outline:none;border:none}h1,h2,h3,h4,h5,h6{font-family:"TT Hazelnuts"}p{font-family:"Montserrat"}.page-title{color:#043480;font-family:"TT Hazelnuts";font-size:3.8em;font-weight:900;line-height:1.2em;letter-spacing:.2em;text-transform:uppercase}@media only screen and (max-width:1200px){.page-title{-webkit-min-device-pixel-ratio:2;font-size:2.8em}}@media only screen and (max-width:576px){.page-title{-webkit-min-device-pixel-ratio:2;font-size:2.2em}}.page-text{color:#043480;font-family:"Montserrat";font-style:normal;font-weight:400;font-size:1.8em;line-height:1.4em}@media only screen and (max-width:1200px){.page-text{-webkit-min-device-pixel-ratio:2;font-size:1.6em}}@media only screen and (max-width:576px){.page-text{-webkit-min-device-pixel-ratio:2;font-size:1.4em;line-height:1.5em}}.second-page-title{color:#043480;font-family:"TT Hazelnuts";font-size:2.2em;font-weight:900;line-height:1.4em;letter-spacing:.2em;text-transform:uppercase}@media only screen and (max-width:1200px){.second-page-title{-webkit-min-device-pixel-ratio:2;font-size:2em}}@media only screen and (max-width:576px){.second-page-title{-webkit-min-device-pixel-ratio:2;font-size:1.8em}}.card-title{color:#043480;font-family:TT Hazelnuts;font-style:normal;font-weight:900;font-size:2em;line-height:1.4em;text-transform:uppercase}@media only screen and (max-width:1200px){.card-title{-webkit-min-device-pixel-ratio:2;font-size:2em}}@media only screen and (max-width:576px){.card-title{-webkit-min-device-pixel-ratio:2;font-size:1.6em}}.card-text{color:#043480;font-family:Montserrat;font-style:normal;font-weight:400;font-size:1.6em;line-height:2.6em;text-transform:lowercase}@media only screen and (max-width:1200px){.card-text{-webkit-min-device-pixel-ratio:2;font-size:1.4em}}@media only screen and (max-width:576px){.card-text{-webkit-min-device-pixel-ratio:2;font-size:1.4em}}@-webkit-keyframes bubble1{0%{transform:translateY(0)}50%{transform:translateY(-5%)}}@keyframes bubble1{0%{transform:translateY(0)}50%{transform:translateY(-5%)}}@-webkit-keyframes anim2{0%{transform:translateY(0)}50%{transform:translateY(-3%)}}@keyframes anim2{0%{transform:translateY(0)}50%{transform:translateY(-3%)}}@-webkit-keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.articles-wrapper{width:100%;padding:27.5em 15em 15em;position:relative}@media only screen and (max-width:1200px){.articles-wrapper{-webkit-min-device-pixel-ratio:2;padding:18em 5em 5em}}@media only screen and (max-width:576px){.articles-wrapper{-webkit-min-device-pixel-ratio:2;padding:15em 1.5em 1.5em}}.articles-wrapper .articles-cards{margin:10em 0 0;display:grid;grid-template-columns:repeat(3,1fr);align-content:center;justify-items:center}@media only screen and (min-width:1201px){.articles-wrapper .articles-cards{-webkit-min-device-pixel-ratio:2}.articles-wrapper .articles-cards :first-child.articles-card-wrapper{margin:10em 0 0}}@media only screen and (min-width:1201px) and (max-width:576px){.articles-wrapper .articles-cards :first-child.articles-card-wrapper{-webkit-min-device-pixel-ratio:2;margin:0}}@media only screen and (min-width:1201px){.articles-wrapper .articles-cards :nth-child(3).articles-card-wrapper{margin:10em 0 0}}@media only screen and (min-width:1201px) and (max-width:576px){.articles-wrapper .articles-cards :nth-child(3).articles-card-wrapper{-webkit-min-device-pixel-ratio:2;margin:0}}@media only screen and (min-width:1201px){.articles-wrapper .articles-cards :nth-child(4).articles-card-wrapper{margin:10em 0 0}}@media only screen and (min-width:1201px) and (max-width:576px){.articles-wrapper .articles-cards :nth-child(4).articles-card-wrapper{-webkit-min-device-pixel-ratio:2;margin:0}}@media only screen and (min-width:1201px){.articles-wrapper .articles-cards :nth-child(6).articles-card-wrapper{margin:10em 0 0}}@media only screen and (min-width:1201px) and (max-width:576px){.articles-wrapper .articles-cards :nth-child(6).articles-card-wrapper{-webkit-min-device-pixel-ratio:2;margin:0}}@media only screen and (max-width:1200px){.articles-wrapper .articles-cards{-webkit-min-device-pixel-ratio:2;grid-template-columns:repeat(2,1fr)}.articles-wrapper .articles-cards :first-child.articles-card-wrapper{margin:10em 0 0}}@media only screen and (max-width:1200px) and (max-width:576px){.articles-wrapper .articles-cards :first-child.articles-card-wrapper{-webkit-min-device-pixel-ratio:2;margin:0}}@media only screen and (max-width:1200px){.articles-wrapper .articles-cards :nth-child(3).articles-card-wrapper{margin:10em 0 0}}@media only screen and (max-width:1200px) and (max-width:576px){.articles-wrapper .articles-cards :nth-child(3).articles-card-wrapper{-webkit-min-device-pixel-ratio:2;margin:0}}@media only screen and (max-width:1200px){.articles-wrapper .articles-cards :nth-child(5).articles-card-wrapper{margin:10em 0 0}}@media only screen and (max-width:1200px) and (max-width:576px){.articles-wrapper .articles-cards :nth-child(5).articles-card-wrapper{-webkit-min-device-pixel-ratio:2;margin:0}}@media only screen and (max-width:576px){.articles-wrapper .articles-cards{-webkit-min-device-pixel-ratio:2;grid-template-columns:repeat(1,1fr);grid-row-gap:5em}.articles-wrapper .articles-cards :first-child.articles-card-wrapper{margin:10em 0 0}}@media only screen and (max-width:576px) and (max-width:576px){.articles-wrapper .articles-cards :first-child.articles-card-wrapper{-webkit-min-device-pixel-ratio:2;margin:0}}@media only screen and (max-width:576px){.articles-wrapper .articles-cards :nth-child(3).articles-card-wrapper{margin:10em 0 0}}@media only screen and (max-width:576px) and (max-width:576px){.articles-wrapper .articles-cards :nth-child(3).articles-card-wrapper{-webkit-min-device-pixel-ratio:2;margin:0}}@media only screen and (max-width:576px){.articles-wrapper .articles-cards :nth-child(5).articles-card-wrapper{margin:10em 0 0}}@media only screen and (max-width:576px) and (max-width:576px){.articles-wrapper .articles-cards :nth-child(5).articles-card-wrapper{-webkit-min-device-pixel-ratio:2;margin:0}}',""]),t.exports=Ye},437:function(t,e,r){"use strict";r(388)},438:function(t,e,r){var l=r(12),o=r(25),n=r(26),f=r(27),c=r(28),m=r(29),d=r(30),h=r(31),y=r(32),w=r(33),x=r(34),T=r(35),z=r(36),M=r(37),H=r(38),I=r(39),k=r(40),v=r(41),B=r(42),E=r(43),L=r(44),N=r(45),_=r(46),Y=r(47),S=r(48),A=r(49),R=r(50),C=r(51),F=r(52),O=r(53),j=r(54),V=r(55),$=r(56),G=r(57),P=r(58),J=r(59),U=r(60),X=r(61),D=r(62),K=r(63),Q=r(64),W=r(65),Z=r(66),tt=r(67),et=r(68),at=r(69),lt=r(70),ot=r(71),it=r(72),nt=r(73),ft=r(74),st=r(75),ct=r(76),mt=r(77),ut=r(78),pt=r(79),ht=r(80),yt=r(81),wt=r(82),xt=r(83),Tt=r(84),gt=r(85),bt=r(86),zt=r(87),Mt=r(88),Ht=r(89),It=r(90),kt=r(91),vt=r(92),Bt=r(93),Et=r(94),Lt=r(95),Nt=r(96),_t=r(97),Yt=r(98),St=r(99),At=r(100),Rt=r(101),Ct=r(102),Ft=r(103),Ot=r(104),jt=r(105),Vt=r(106),$t=r(107),Gt=r(108),Pt=r(109),Jt=r(110),Ut=r(111),Xt=r(112),qt=r(113),Dt=r(114),Kt=r(115),Qt=r(116),Wt=r(117),Zt=r(118),te=r(119),ee=r(120),ae=r(121),re=r(122),le=r(123),oe=r(124),ie=r(125),ne=r(126),fe=r(127),se=r(128),ce=r(129),me=r(130),de=r(131),ue=r(132),pe=r(133),he=r(134),ye=r(135),we=r(136),xe=r(137),Te=r(138),ge=r(139),be=r(140),ze=r(141),Me=r(142),He=r(143),Ie=r(144),ke=r(145),ve=r(146),Be=r(147),Ee=r(148),Le=r(149),Ne=r(150),_e=r(151),Ye=l(!1),Se=o(n),Ae=o(n,{hash:"?#iefix"}),Re=o(f),Ce=o(c),Fe=o(m),Oe=o(m,{hash:"?#iefix"}),je=o(d),Ve=o(h),$e=o(y),Ge=o(y,{hash:"?#iefix"}),Pe=o(w),Je=o(x),Ue=o(T),Xe=o(T,{hash:"?#iefix"}),qe=o(z),De=o(M),Ke=o(H),Qe=o(H,{hash:"?#iefix"}),We=o(I),Ze=o(k),ta=o(v),ea=o(v,{hash:"?#iefix"}),aa=o(B),ra=o(E),la=o(L),oa=o(L,{hash:"?#iefix"}),ia=o(N),na=o(_),fa=o(Y),sa=o(Y,{hash:"?#iefix"}),ca=o(S),ma=o(A),da=o(R),ua=o(R,{hash:"?#iefix"}),pa=o(C),ha=o(F),ya=o(O),wa=o(O,{hash:"?#iefix"}),xa=o(j),Ta=o(V),ga=o($),ba=o($,{hash:"?#iefix"}),za=o(G),Ma=o(P),Ha=o(J),Ia=o(J,{hash:"?#iefix"}),ka=o(U),va=o(X),Ba=o(D),Ea=o(D,{hash:"?#iefix"}),La=o(K),Na=o(Q),_a=o(W),Ya=o(W,{hash:"?#iefix"}),Sa=o(Z),Aa=o(tt),Ra=o(et),Ca=o(et,{hash:"?#iefix"}),Fa=o(at),Oa=o(lt),ja=o(ot),Va=o(ot,{hash:"?#iefix"}),$a=o(it),Ga=o(nt),Pa=o(ft),Ja=o(ft,{hash:"?#iefix"}),Ua=o(st),Xa=o(ct),qa=o(mt),Da=o(mt,{hash:"?#iefix"}),Ka=o(ut),Qa=o(pt),Wa=o(ht),Za=o(ht,{hash:"?#iefix"}),er=o(yt),ar=o(wt),rr=o(xt),lr=o(Tt),or=o(Tt,{hash:"?#iefix"}),ir=o(gt),nr=o(bt),fr=o(zt),sr=o(Mt),cr=o(Mt,{hash:"?#iefix"}),mr=o(Ht),dr=o(It),ur=o(kt),pr=o(vt),yr=o(vt,{hash:"?#iefix"}),wr=o(Bt),xr=o(Et),Tr=o(Lt),gr=o(Nt),zr=o(Nt,{hash:"?#iefix"}),Mr=o(_t),Hr=o(Yt),Ir=o(St),kr=o(At),vr=o(At,{hash:"?#iefix"}),Br=o(Rt),Er=o(Ct),Lr=o(Ft),Nr=o(Ot),_r=o(Ot,{hash:"?#iefix"}),Yr=o(jt),Sr=o(Vt),Ar=o($t),Rr=o(Gt),Cr=o(Gt,{hash:"?#iefix"}),Fr=o(Pt),Or=o(Jt),jr=o(Ut),Vr=o(Xt),$r=o(Xt,{hash:"?#iefix"}),Gr=o(qt),Pr=o(Dt),Jr=o(Kt),Ur=o(Qt),Xr=o(Qt,{hash:"?#iefix"}),qr=o(Wt),Dr=o(Zt),Kr=o(te),Qr=o(ee),Wr=o(ee,{hash:"?#iefix"}),Zr=o(ae),tl=o(re),el=o(le),al=o(oe),rl=o(oe,{hash:"?#iefix"}),ll=o(ie),il=o(ne),nl=o(fe),fl=o(se),sl=o(se,{hash:"?#iefix"}),cl=o(ce),ml=o(me),pl=o(de),hl=o(ue),yl=o(ue,{hash:"?#iefix"}),wl=o(pe),xl=o(he),Tl=o(ye),gl=o(we),bl=o(we,{hash:"?#iefix"}),zl=o(xe),Ml=o(Te),Hl=o(ge),Il=o(be),kl=o(be,{hash:"?#iefix"}),vl=o(ze),Bl=o(Me),El=o(He),Ll=o(Ie),Nl=o(Ie,{hash:"?#iefix"}),_l=o(ke),Yl=o(ve),Sl=o(Be),Al=o(Ee),Rl=o(Ee,{hash:"?#iefix"}),Cl=o(Le),Fl=o(Ne),Ol=o(_e);Ye.push([t.i,'@font-face{font-family:"Montserrat";src:url('+Se+');src:local("Montserrat Light"),local("Montserrat-Light"),url('+Ae+') format("embedded-opentype"),url('+Re+') format("woff"),url('+Ce+') format("truetype");font-weight:300;font-style:normal}@font-face{font-family:"Montserrat";src:url('+Fe+');src:local("Montserrat Medium Italic"),local("Montserrat-MediumItalic"),url('+Oe+') format("embedded-opentype"),url('+je+') format("woff"),url('+Ve+') format("truetype");font-weight:500;font-style:italic}@font-face{font-family:"Montserrat";src:url('+$e+');src:local("Montserrat Thin"),local("Montserrat-Thin"),url('+Ge+') format("embedded-opentype"),url('+Pe+') format("woff"),url('+Je+') format("truetype");font-weight:100;font-style:normal}@font-face{font-family:"Montserrat";src:url('+Ue+');src:local("Montserrat ExtraLight Italic"),local("Montserrat-ExtraLightItalic"),url('+Xe+') format("embedded-opentype"),url('+qe+') format("woff"),url('+De+') format("truetype");font-weight:200;font-style:italic}@font-face{font-family:"Montserrat";src:url('+Ke+');src:local("Montserrat Bold Italic"),local("Montserrat-BoldItalic"),url('+Qe+') format("embedded-opentype"),url('+We+') format("woff"),url('+Ze+') format("truetype");font-weight:700;font-style:italic}@font-face{font-family:"Montserrat";src:url('+ta+');src:local("Montserrat SemiBold"),local("Montserrat-SemiBold"),url('+ea+') format("embedded-opentype"),url('+aa+') format("woff"),url('+ra+') format("truetype");font-weight:600;font-style:normal}@font-face{font-family:"Montserrat";src:url('+la+');src:local("Montserrat ExtraLight"),local("Montserrat-ExtraLight"),url('+oa+') format("embedded-opentype"),url('+ia+') format("woff"),url('+na+') format("truetype");font-weight:200;font-style:normal}@font-face{font-family:"Montserrat";src:url('+fa+');src:local("Montserrat ExtraBold Italic"),local("Montserrat-ExtraBoldItalic"),url('+sa+') format("embedded-opentype"),url('+ca+') format("woff"),url('+ma+') format("truetype");font-weight:800;font-style:italic}@font-face{font-family:"Montserrat";src:url('+da+');src:local("Montserrat Italic"),local("Montserrat-Italic"),url('+ua+') format("embedded-opentype"),url('+pa+') format("woff"),url('+ha+') format("truetype");font-weight:400;font-style:italic}@font-face{font-family:"Montserrat";src:url('+ya+');src:local("Montserrat Bold"),local("Montserrat-Bold"),url('+wa+') format("embedded-opentype"),url('+xa+') format("woff"),url('+Ta+') format("truetype");font-weight:700;font-style:normal}@font-face{font-family:"Montserrat";src:url('+ga+');src:local("Montserrat Light Italic"),local("Montserrat-LightItalic"),url('+ba+') format("embedded-opentype"),url('+za+') format("woff"),url('+Ma+') format("truetype");font-weight:300;font-style:italic}@font-face{font-family:"Montserrat";src:url('+Ha+');src:local("Montserrat Black Italic"),local("Montserrat-BlackItalic"),url('+Ia+') format("embedded-opentype"),url('+ka+') format("woff"),url('+va+') format("truetype");font-weight:900;font-style:italic}@font-face{font-family:"Montserrat";src:url('+Ba+');src:local("Montserrat SemiBold Italic"),local("Montserrat-SemiBoldItalic"),url('+Ea+') format("embedded-opentype"),url('+La+') format("woff"),url('+Na+') format("truetype");font-weight:600;font-style:italic}@font-face{font-family:"Montserrat";src:url('+_a+');src:local("Montserrat Regular"),local("Montserrat-Regular"),url('+Ya+') format("embedded-opentype"),url('+Sa+') format("woff"),url('+Aa+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"Montserrat";src:url('+Ra+');src:local("Montserrat Medium"),local("Montserrat-Medium"),url('+Ca+') format("embedded-opentype"),url('+Fa+') format("woff"),url('+Oa+') format("truetype");font-weight:500;font-style:normal}@font-face{font-family:"Montserrat";src:url('+ja+');src:local("Montserrat ExtraBold"),local("Montserrat-ExtraBold"),url('+Va+') format("embedded-opentype"),url('+$a+') format("woff"),url('+Ga+') format("truetype");font-weight:800;font-style:normal}@font-face{font-family:"Montserrat";src:url('+Pa+');src:local("Montserrat Black"),local("Montserrat-Black"),url('+Ja+') format("embedded-opentype"),url('+Ua+') format("woff"),url('+Xa+') format("truetype");font-weight:900;font-style:normal}@font-face{font-family:"Montserrat";src:url('+qa+');src:local("Montserrat Thin Italic"),local("Montserrat-ThinItalic"),url('+Da+') format("embedded-opentype"),url('+Ka+') format("woff"),url('+Qa+') format("truetype");font-weight:100;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+Wa+');src:local("TT Hazelnuts ExtraLight"),local("TTHazelnuts-ExtraLight"),url('+Za+') format("embedded-opentype"),url('+er+') format("woff2"),url('+ar+') format("woff"),url('+rr+') format("truetype");font-weight:200;font-style:normal}@font-face{font-family:"TT Hazelnuts";src:url('+lr+');src:local("TT Hazelnuts Bold Italic"),local("TTHazelnuts-BoldItalic"),url('+or+') format("embedded-opentype"),url('+ir+') format("woff2"),url('+nr+') format("woff"),url('+fr+') format("truetype");font-weight:700;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+sr+');src:local("TT Hazelnuts Regular"),local("TTHazelnuts-Regular"),url('+cr+') format("embedded-opentype"),url('+mr+') format("woff2"),url('+dr+') format("woff"),url('+ur+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"TT Hazelnuts";src:url('+pr+');src:local("TT Hazelnuts Italic"),local("TTHazelnuts-Italic"),url('+yr+') format("embedded-opentype"),url('+wr+') format("woff2"),url('+xr+') format("woff"),url('+Tr+') format("truetype");font-weight:400;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+gr+');src:local("TT Hazelnuts Light Italic"),local("TTHazelnuts-LightItalic"),url('+zr+') format("embedded-opentype"),url('+Mr+') format("woff2"),url('+Hr+') format("woff"),url('+Ir+') format("truetype");font-weight:300;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+kr+');src:local("TT Hazelnuts Light"),local("TTHazelnuts-Light"),url('+vr+') format("embedded-opentype"),url('+Br+') format("woff2"),url('+Er+') format("woff"),url('+Lr+') format("truetype");font-weight:300;font-style:normal}@font-face{font-family:"TT Hazelnuts";src:url('+Nr+');src:local("TT Hazelnuts Medium Italic"),local("TTHazelnuts-MediumItalic"),url('+_r+') format("embedded-opentype"),url('+Yr+') format("woff2"),url('+Sr+') format("woff"),url('+Ar+') format("truetype");font-weight:500;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+Rr+');src:local("TT Hazelnuts Thin Italic"),local("TTHazelnuts-ThinItalic"),url('+Cr+') format("embedded-opentype"),url('+Fr+') format("woff2"),url('+Or+') format("woff"),url('+jr+') format("truetype");font-weight:100;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+Vr+');src:local("TT Hazelnuts ExtraBold"),local("TTHazelnuts-ExtraBold"),url('+$r+') format("embedded-opentype"),url('+Gr+') format("woff2"),url('+Pr+') format("woff"),url('+Jr+') format("truetype");font-weight:800;font-style:normal}@font-face{font-family:"TT Hazelnuts";src:url('+Ur+');src:local("TT Hazelnuts ExtraLight Italic"),local("TTHazelnuts-ExtraLightItalic"),url('+Xr+') format("embedded-opentype"),url('+qr+') format("woff2"),url('+Dr+') format("woff"),url('+Kr+') format("truetype");font-weight:200;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+Qr+');src:local("TT Hazelnuts Medium"),local("TTHazelnuts-Medium"),url('+Wr+') format("embedded-opentype"),url('+Zr+') format("woff2"),url('+tl+') format("woff"),url('+el+') format("truetype");font-weight:500;font-style:normal}@font-face{font-family:"TT Hazelnuts";src:url('+al+');src:local("TT Hazelnuts Heavy Italic"),local("TTHazelnuts-HeavyItalic"),url('+rl+') format("embedded-opentype"),url('+ll+') format("woff2"),url('+il+') format("woff"),url('+nl+') format("truetype");font-weight:900;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+fl+');src:local("TT Hazelnuts Thin"),local("TTHazelnuts-Thin"),url('+sl+') format("embedded-opentype"),url('+cl+') format("woff2"),url('+ml+') format("woff"),url('+pl+') format("truetype");font-weight:100;font-style:normal}@font-face{font-family:"TT Hazelnuts";src:url('+hl+');src:local("TT Hazelnuts Black"),local("TTHazelnuts-Black"),url('+yl+') format("embedded-opentype"),url('+wl+') format("woff2"),url('+xl+') format("woff"),url('+Tl+') format("truetype");font-weight:900;font-style:normal}@font-face{font-family:"TT Hazelnuts";src:url('+gl+');src:local("TT Hazelnuts Bold"),local("TTHazelnuts-Bold"),url('+bl+') format("embedded-opentype"),url('+zl+') format("woff2"),url('+Ml+') format("woff"),url('+Hl+') format("truetype");font-weight:700;font-style:normal}@font-face{font-family:"TT Hazelnuts";src:url('+Il+');src:local("TT Hazelnuts ExtraBold Italic"),local("TTHazelnuts-ExtraBoldItalic"),url('+kl+') format("embedded-opentype"),url('+vl+') format("woff2"),url('+Bl+') format("woff"),url('+El+') format("truetype");font-weight:800;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+Ll+');src:local("TT Hazelnuts Black Italic"),local("TTHazelnuts-BlackItalic"),url('+Nl+') format("embedded-opentype"),url('+_l+') format("woff2"),url('+Yl+') format("woff"),url('+Sl+') format("truetype");font-weight:900;font-style:italic}@font-face{font-family:"TT Hazelnuts";src:url('+Al+');src:local("TT Hazelnuts Heavy"),local("TTHazelnuts-Heavy"),url('+Rl+') format("embedded-opentype"),url('+Cl+') format("woff2"),url('+Fl+') format("woff"),url('+Ol+') format("truetype");font-weight:900;font-style:normal}.mobile{display:none}@media only screen and (max-width:767px){.mobile{-webkit-min-device-pixel-ratio:2;display:block}}.tablet{display:none}@media only screen and (min-width:768px) and (max-width:1200px){.tablet{-webkit-min-device-pixel-ratio:2;display:block}}.desctop{display:none}@media only screen and (min-width:1200px){.desctop{-webkit-min-device-pixel-ratio:2;display:block}}body,html{margin:0;padding:0;font-style:normal}body{overflow-x:hidden}*,:after,:before{box-sizing:border-box;margin:0;padding:0}a{text-decoration:none}button{outline:none;border:none}h1,h2,h3,h4,h5,h6{font-family:"TT Hazelnuts"}p{font-family:"Montserrat"}.page-title{color:#043480;font-family:"TT Hazelnuts";font-size:3.8em;font-weight:900;line-height:1.2em;letter-spacing:.2em;text-transform:uppercase}@media only screen and (max-width:1200px){.page-title{-webkit-min-device-pixel-ratio:2;font-size:2.8em}}@media only screen and (max-width:576px){.page-title{-webkit-min-device-pixel-ratio:2;font-size:2.2em}}.page-text{color:#043480;font-family:"Montserrat";font-style:normal;font-weight:400;font-size:1.8em;line-height:1.4em}@media only screen and (max-width:1200px){.page-text{-webkit-min-device-pixel-ratio:2;font-size:1.6em}}@media only screen and (max-width:576px){.page-text{-webkit-min-device-pixel-ratio:2;font-size:1.4em;line-height:1.5em}}.second-page-title{color:#043480;font-family:"TT Hazelnuts";font-size:2.2em;font-weight:900;line-height:1.4em;letter-spacing:.2em;text-transform:uppercase}@media only screen and (max-width:1200px){.second-page-title{-webkit-min-device-pixel-ratio:2;font-size:2em}}@media only screen and (max-width:576px){.second-page-title{-webkit-min-device-pixel-ratio:2;font-size:1.8em}}.card-title{color:#043480;font-family:TT Hazelnuts;font-style:normal;font-weight:900;font-size:2em;line-height:1.4em;text-transform:uppercase}@media only screen and (max-width:1200px){.card-title{-webkit-min-device-pixel-ratio:2;font-size:2em}}@media only screen and (max-width:576px){.card-title{-webkit-min-device-pixel-ratio:2;font-size:1.6em}}.card-text{color:#043480;font-family:Montserrat;font-style:normal;font-weight:400;font-size:1.6em;line-height:2.6em;text-transform:lowercase}@media only screen and (max-width:1200px){.card-text{-webkit-min-device-pixel-ratio:2;font-size:1.4em}}@media only screen and (max-width:576px){.card-text{-webkit-min-device-pixel-ratio:2;font-size:1.4em}}@-webkit-keyframes bubble1{0%{transform:translateY(0)}50%{transform:translateY(-5%)}}@keyframes bubble1{0%{transform:translateY(0)}50%{transform:translateY(-5%)}}@-webkit-keyframes anim2{0%{transform:translateY(0)}50%{transform:translateY(-3%)}}@keyframes anim2{0%{transform:translateY(0)}50%{transform:translateY(-3%)}}@-webkit-keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.main-page-wrapper{width:100%;min-height:100vh;position:relative}',""]),t.exports=Ye},495:function(t,e,r){"use strict";r.r(e);var l=r(414),o=r(386),n={components:{ArticleCard:l.a},data:function(){return{articles:Object(o.a)(this)}}},f=(r(435),r(4)),c={components:{Articles:Object(f.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"articles-wrapper"},[r("h1",{staticClass:"page-title"},[t._v("\n\t\t"+t._s(t.$t("articles.title"))+"\n\t")]),t._v(" "),r("div",{staticClass:"articles-cards"},t._l(t.articles,(function(t,e){return r("ArticleCard",{key:e,attrs:{data:t}})})),1)])}),[],!1,null,null,null).exports}},m=(r(437),Object(f.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-page-wrapper"},[e("Articles")],1)}),[],!1,null,null,null));e.default=m.exports}}]);