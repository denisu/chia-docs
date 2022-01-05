"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[9718],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,h=f["".concat(c,".").concat(d)]||f[d]||p[d]||s;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=f;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4049:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var r=t(7462),o=t(3366),s=(t(7294),t(3905)),i=["components"],a={sidebar_position:1},c="3.1 Chia Consensus Introduction",u={unversionedId:"03consensus/consensus_intro",id:"03consensus/consensus_intro",isDocsHomePage:!1,title:"3.1 Chia Consensus Introduction",description:"Decentralized consensus algorithms require Sybil resistance, using a resource that is both cryptographically verifiable and scarce (not infinite). In previous blockchain systems, two different scarce resources have been used: computing power (Proof of Work) and staked money (Proof of Stake).",source:"@site/docs/03consensus/consensus_intro.md",sourceDirName:"03consensus",slug:"/03consensus/consensus_intro",permalink:"/docs/03consensus/consensus_intro",editUrl:"https://github.com/Chia-Network/chia-docs/docs/03consensus/consensus_intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"2.1 Peer to Peer system",permalink:"/docs/02architecture/p2p-system"},next:{title:"3.2 Proof of Space",permalink:"/docs/03consensus/proof-of-space"}},l=[],p={toc:l};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"31-chia-consensus-introduction"},"3.1 Chia Consensus Introduction"),(0,s.kt)("p",null,"Decentralized consensus algorithms require Sybil resistance, using a resource that is both cryptographically verifiable and scarce (not infinite). In previous blockchain systems, two different scarce resources have been used: computing power (Proof of Work) and staked money (Proof of Stake)."),(0,s.kt)("p",null,"Chia's Proof of Space and Time consensus uses storage capacity as the scarce resource. This comes much closer than previous systems to Satoshi's original ideal of \u201cone CPU, one vote,\u201d where a ",(0,s.kt)("em",{parentName:"p"},"vote")," refers to a chance to win and validate a block, not an actual vote on-chain. For example, someone storing 500 GiB has 5 \u201cvotes,\u201d and someone storing 100 GiB has 1 \u201cvote.\u201d"),(0,s.kt)("p",null,"One other cryptographic puzzle piece is used to secure Chia's system: a verifiable delay function (VDF), which is a cryptographic proof that real time has passed."),(0,s.kt)("p",null,"A fair system can be created by combining proofs of space and time. In such a system, users store random-looking data on their hard drives. Their chance to win XCH is proportional to their allocated space. Furthermore, such a system scales to billions of participants in a similar way to the Proof of Work lottery. No funds, special hardware, registration, or permission is required to join, only a hard drive and an internet connection. The system is completely transparent and deterministic -- anyone can efficiently and objectively verify which chain is the canonical one, without relying on any trusted parties."),(0,s.kt)("p",null,"Some notes to keep in mind as you continue reading:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Whenever the word ",(0,s.kt)("em",{parentName:"li"},"signature")," is used, it refers specifically to a deterministic BLS signature, following the IETF specification with the Augmented scheme."),(0,s.kt)("li",{parentName:"ul"},"The private keys performing these digital signatures are controlled and stored by the farmers."),(0,s.kt)("li",{parentName:"ul"},"A unique private key is used for each plot."),(0,s.kt)("li",{parentName:"ul"},"The hash function used is SHA256, except for the proofs of space which also use CHACHA8 and BLAKE3.")))}f.isMDXComponent=!0}}]);