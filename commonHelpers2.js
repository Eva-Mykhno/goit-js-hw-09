import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},a=document.querySelector(".feedback-form"),o=document.querySelector("input"),l=document.querySelector("textarea");a.addEventListener("input",s);a.addEventListener("submit",m);function s(){e.email=o.value.trim(),e.message=l.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))}function n(){const t=JSON.parse(localStorage.getItem("feedback-form-state"));t!==null&&(e.email=t.email,e.message=t.message,o.value=e.email,l.value=e.message)}function m(t){t.preventDefault(),o.value===""||l.value===""?alert("Fill please all fields"):(console.log(e),localStorage.removeItem("feedback-form-state"),a.reset())}window.addEventListener("load",n);
//# sourceMappingURL=commonHelpers2.js.map
