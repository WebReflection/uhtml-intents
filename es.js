self.uhtmlIntent=function(t){"use strict";const n=new Map;return t.define=(t,e)=>{n.set(t,e)},t.intent=t=>e=>{for(const r in t)if(n.has(r))return n.get(r).call(t,t[r],e)},t}({}).default;
