import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as y,i as f}from"./assets/vendor-77e16229.js";const o=document.querySelector("[data-start]"),u=document.querySelector("#datetime-picker"),p=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),E=document.querySelector("[data-seconds]");o.setAttribute("disabled","");let d=null,c=null;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0].getTime(),n=Date.now();e>n?(o.removeAttribute("disabled"),d=e):(f.error({title:"Error",position:"topRight",message:"Please choose a date in the future"}),o.setAttribute("disabled",""))}};y(u,D);function q(t){const i=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:h}}function s(t){return t.toString().padStart(2,"0")}o.addEventListener("click",()=>{o.setAttribute("disabled",""),u.setAttribute("disabled",""),c=setInterval(()=>{const t=d-Date.now(),{days:e,hours:n,minutes:r,seconds:a}=q(t);p.textContent=s(e),b.textContent=s(n),S.textContent=s(r),E.textContent=s(a),t<1e3&&clearInterval(c)},1e3)});
//# sourceMappingURL=commonHelpers.js.map