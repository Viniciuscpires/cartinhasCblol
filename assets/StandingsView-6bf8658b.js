import{s as r}from"./enums-b1673adf.js";import{D as l,G as c,C as d,E as u,H as p}from"./VList-7d55a672.js";import{a1 as _,a2 as s,ab as i,aw as o,s as e,a4 as a,_ as m,ac as g,a6 as w,a3 as f,ad as n}from"./index-1f3cd34c.js";const x={class:"tw-p-4"},h={class:"tw-text-5xl tw-font-bold tw-pb-4 tw-flex align-center"},V=o("span",{class:"tw-h-full"},"CBLOL - Split 1 2023 - Etapa Regular",-1),C={class:"tw-w-24 tw-text-4xl tw-font-bold tw-text-center"},S=_({__name:"StandingsView",setup(b){return(L,k)=>(s(),i("div",x,[o("div",h,[e(l,{image:"https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2Fcblol-logo-symbol-offwhite.png",size:"60"}),V]),e(c,{lines:"two"},{default:a(()=>[(s(!0),i(m,null,g(w(r),t=>(s(),f(d,{key:t.teams[0].slug,value:t.teams[0].slug,to:`/team/${t.teams[0].slug}`},{prepend:a(()=>[o("span",C,n(t.ordinal),1),e(l,{rounded:"0",image:t.teams[0].image},null,8,["image"])]),default:a(()=>[e(u,{textContent:n(t.teams[0].name)},null,8,["textContent"]),e(p,{textContent:n(`${t.teams[0].record.wins}V - ${t.teams[0].record.losses}D`)},null,8,["textContent"])]),_:2},1032,["value","to"]))),128))]),_:1})]))}});export{S as default};