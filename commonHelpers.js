import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as f}from"./assets/vendor-cd4b7665.js";const y=document.querySelector("input#datetime-picker"),c=document.querySelector(".start-btn");let s,o;function p(){clearInterval(o);let e=s.selectedDates[0]-new Date;u(e),o=setInterval(()=>{u(e),e<=0&&(clearInterval(o),D("Success!"),c.disabled=!0,y.disabled=!0,s.setDate(s.selectedDates[0])),e-=1e3},1e3)}function D(e){f.success({title:"Success",message:e})}function n(e,t){document.querySelector(e).textContent=t>=0?S(t):"00"}function u(e){const{days:t,hours:a,minutes:d,seconds:r}=M(e);n("[data-days]",t),n("[data-hours]",a),n("[data-minutes]",d),n("[data-seconds]",r)}function M(e){const i=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:h}}function S(e){return e<10?`0${e}`:e}c.addEventListener("click",p);document.addEventListener("DOMContentLoaded",()=>{c.disabled=!0});
//# sourceMappingURL=commonHelpers.js.map
