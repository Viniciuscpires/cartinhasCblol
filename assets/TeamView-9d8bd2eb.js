import{X as m,r as u,A as c,Y as o,a5 as r,a2 as f,a7 as p,au as i,U as l,a6 as _,ay as d,Z as w}from"./index-c0190d2b.js";import{t as I}from"./enums-68f43fb6.js";import{_ as g}from"./CartinhaItem.vue_vue_type_script_setup_true_lang-7da7c958.js";const k={class:"tw-flex tw-flex-row tw-flex-wrap tw-gap-4"},B=m({__name:"TeamView",setup(v){const s=d(),e=u({teamInfo:{}}),n=t=>{e.value.teamInfo=I[t]};return n(`${s.params.teamSlug}`),c(s,t=>{n(`${t.params.teamSlug}`)}),(t,x)=>(o(),r(l,null,[f(p(e.value.teamInfo.slug)+" ",1),i("div",k,[(o(!0),r(l,null,_(e.value.teamInfo.players,a=>(o(),w(g,{key:a.summonerName,value:"80",countryId:"1",team:e.value.teamInfo.slug,nick:a.summonerName,name:`${a.firstName} ${a.lastName}`,role:a.role},null,8,["team","nick","name","role"]))),128))])],64))}});export{B as default};