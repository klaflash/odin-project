(()=>{"use strict";const e={root:[]},t=t=>{e[t]=[]},o=(t,o,c,n,r,d)=>{const i={};i.project=t,i.title=o,i.description=c,i.dueDate=n,i.time=r,i.priority=d,void 0===e[t]&&(e[t]=[]),e[t].push(i)},c=()=>{for(const t in e){console.log(`${t}: ${e[t]}`);for(const o of e[t])console.log(o.title)}};o("root","Read","Talking to strangers","today","12","high"),o("Workout","Gym","Pull day","today","9","high"),t("School"),o("School","CS373 Hw 1","Review slides and code","friday","11","high"),o("School","CS348 Hw 2","Complete","thursday","11","high"),c(),(()=>{const e=document.querySelector(".project-modal"),o=document.querySelector(".add-project"),n=document.querySelector(".close-button"),r=document.getElementById("project-name"),d=document.querySelector(".create-project-button");function i(){e.classList.toggle("show-modal")}o.addEventListener("click",i),n.addEventListener("click",i),window.addEventListener("click",(function(t){t.target===e&&i()})),d.addEventListener("click",(()=>{t(r.value),c(),i(),r.value=""}))})()})();