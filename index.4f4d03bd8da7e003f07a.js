(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var n=a.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&!t;)t=n[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=()=>{const e=document.querySelector("#content"),t=document.createElement("div"),a=document.createElement("p"),n=document.createElement("nav"),i=document.createElement("a"),d=document.createElement("a"),o=document.createElement("a");e.appendChild(t),t.appendChild(a),i.classList.add("homeLink"),d.classList.add("menuLink"),o.classList.add("contactLink"),t.classList.add("header"),a.innerText="Restaurant",a.classList.add("logo"),t.appendChild(n),n.appendChild(i),n.appendChild(d),n.appendChild(o),i.textContent="Home",d.textContent="Menu",o.textContent="Contact"},a=e.p+"images/footerLogo065ad3e5a8a00b5a941e.png",n=e.p+"images/github6d4f8d6e9335a6ad1b70.svg",i=()=>{const e=document.querySelector("#content"),t=document.createElement("footer"),i=document.createElement("p"),d=document.createElement("a"),o=document.createElement("img"),c=document.createElement("img");e.appendChild(t),t.appendChild(i),t.appendChild(d),d.appendChild(o),d.appendChild(c),c.classList.add("github");const r=(new Date).getFullYear();i.innerText=`Copyright © ${r}`,c.src=n,o.src=a,d.href="https://github.com/bkcelebi",d.target="_blank"},d=()=>{const e=document.querySelector("#content"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("p"),i=document.createElement("p");e.appendChild(t),t.appendChild(a),a.appendChild(n),a.appendChild(i),n.innerText="Are you looking for an authentic Pizza Restaurant?",i.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",a.classList.add("hero"),n.classList.add("heading"),t.classList.add("wrapper")},o=()=>{t(),d(),i()},c=e.p+"images/pizza79e587b65187d6cb601a.jpg",r=(e,t,a,n)=>{const i=document.createElement("div"),d=document.createElement("div"),o=document.createElement("img"),c=document.createElement("p"),r=document.createElement("p"),p=document.createElement("p");return i.appendChild(d),i.appendChild(o),d.appendChild(c),d.appendChild(r),d.appendChild(p),i.classList.add("itemWrapper"),d.classList.add("infoWrapper"),o.classList.add("itemImg"),c.classList.add("itemTitle"),r.classList.add("itemDesc"),p.classList.add("itemPrice"),c.innerText=e,r.innerText=t,p.innerText=`$${a}`,o.src=n,i},p=()=>{const e=document.querySelector("#content"),t=document.createElement("div"),a=document.createElement("div");t.classList.add("wrapper"),a.classList.add("pizzaWrapper"),e.appendChild(t),t.appendChild(a),a.appendChild((()=>{const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(r("Pepperoni Pizza","Tomato Sauce, Pepperoni, Mozzarella",9.95,c)),e.appendChild(r("Pepperoni Pizza","Tomato Sauce, Pepperoni, Mozzarella",9.95,c)),e.appendChild(r("Pepperoni Pizza","Tomato Sauce, Pepperoni, Mozzarella",9.95,c)),e.appendChild(r("Pepperoni Pizza","Tomato Sauce, Pepperoni, Mozzarella",9.95,c)),e.appendChild(r("Pepperoni Pizza","Tomato Sauce, Pepperoni, Mozzarella",9.95,c)),e.appendChild(r("Pepperoni Pizza","Tomato Sauce, Pepperoni, Mozzarella",9.95,c)),e.appendChild(r("Pepperoni Pizza","Tomato Sauce, Pepperoni, Mozzarella",9.95,c)),e.appendChild(r("Pepperoni Pizza","Tomato Sauce, Pepperoni, Mozzarella",9.95,c)),e.appendChild(r("Pepperoni Pizza","Tomato Sauce, Pepperoni, Mozzarella",9.95,c)),e.appendChild(r("Pepperoni Pizza","Tomato Sauce, Pepperoni, Mozzarella",9.95,c)),e.appendChild(r("Pepperoni Pizza","Tomato Sauce, Pepperoni, Mozzarella",9.95,c)),e.appendChild(r("Pepperoni Pizza","Tomato Sauce, Pepperoni, Mozzarella",9.95,c)),e.appendChild(r("Pepperoni Pizza","Tomato Sauce, Pepperoni, Mozzarella",9.95,c)),e})())},l=e.p+"images/contacteddec30aec24fd4d7676.png",m=()=>{const e=document.querySelector("#content"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),d=document.createElement("img"),o=document.createElement("p"),c=document.createElement("p");e.appendChild(t),t.appendChild(a),a.appendChild(n),n.appendChild(i),n.appendChild(d),i.appendChild(o),i.appendChild(c),n.classList.add("contact"),i.classList.add("contactInfo"),a.classList.add("contactContainer"),d.classList.add("map"),t.classList.add("wrapper"),d.src=l,o.innerText="Phone: 0123456789",c.innerText="Address: ABC Road, DCE. Dublin"};o();const s=()=>{const e=document.querySelector("#content"),t=document.querySelector(".wrapper"),a=document.querySelector("footer");t&&(e.removeChild(t),e.removeChild(a))},u=document.querySelector(".homeLink"),h=document.querySelector(".menuLink"),z=document.querySelector(".contactLink");u.addEventListener("click",(()=>{s(),d(),i()})),h.addEventListener("click",(()=>{s(),p(),i()})),z.addEventListener("click",(()=>{s(),m(),i()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkEsRUFBUWQsWUFBWWdDLEdBQ3BCQSxFQUFpQmhDLFlBQVlpQyxHQUM3QkEsRUFBUWpDLFlBQVlrQyxHQUNwQkQsRUFBUWpDLFlBQVltQyxHQUNwQkQsRUFBWWxDLFlBQVlvQyxHQUN4QkYsRUFBWWxDLFlBQVlxQyxHQUV4QkosRUFBUWhDLFVBQVVDLElBQUksV0FDdEJnQyxFQUFZakMsVUFBVUMsSUFBSSxlQUMxQjhCLEVBQWlCL0IsVUFBVUMsSUFBSSxvQkFDL0JpQyxFQUFJbEMsVUFBVUMsSUFBSSxPQUNsQlksRUFBUWIsVUFBVUMsSUFBSSxXQUV0QmlDLEVBQUlwRCxJQUFNLEVBQ1ZxRCxFQUFJakMsVUFBWSxvQkFDaEJrQyxFQUFRbEMsVUFBWSxnQ0FBZ0MsRUN2QnRELElBRUEsTUFBTW1DLEVBQVksS0FDaEIsTUFBTS9DLEVBQVlWLFNBQVNXLGNBQWMsWUFDbkNzQixFQUFVakMsU0FBU1csY0FBYyxZQUNqQ2EsRUFBU3hCLFNBQVNXLGNBQWMsVUFFbENzQixJQUNGdkIsRUFBVWdELFlBQVl6QixHQUN0QnZCLEVBQVVnRCxZQUFZbEMsR0FDeEIsRUFHSVIsRUFBV2hCLFNBQVNXLGNBQWMsYUFDbENNLEVBQVdqQixTQUFTVyxjQUFjLGFBQ2xDTyxFQUFjbEIsU0FBU1csY0FBYyxnQkFFM0NLLEVBQVMyQyxpQkFBaUIsU0FBUyxLQUNqQ0YsSUFDQSxJQUNBLEdBQVEsSUFHVnhDLEVBQVMwQyxpQkFBaUIsU0FBUyxLQUNqQ0YsSUFDQSxJQUNBLEdBQVEsSUFHVnZDLEVBQVl5QyxpQkFBaUIsU0FBUyxLQUNwQ0YsSUFDQSxJQUNBLEdBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS9tZW51LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL2hlYWRlci5jc3NcIjtcblxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjb25zdCBtZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgaG9tZUxpbmsuY2xhc3NMaXN0LmFkZChcImhvbWVMaW5rXCIpO1xuICBtZW51TGluay5jbGFzc0xpc3QuYWRkKFwibWVudUxpbmtcIik7XG4gIGNvbnRhY3RMaW5rLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0TGlua1wiKTtcblxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgbG9nby5pbm5lclRleHQgPSBcIlJlc3RhdXJhbnRcIjtcbiAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgbmF2LmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcblxuICBob21lTGluay50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBtZW51TGluay50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBjb250YWN0TGluay50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xuIiwiaW1wb3J0IFwiLi9mb290ZXIuY3NzXCI7XG5pbXBvcnQgRm9vdGVyTG9nbyBmcm9tIFwiLi4vLi4vYXNzZXRzL2Zvb3RlckxvZ28ucG5nXCI7XG5pbXBvcnQgR2l0aHViIGZyb20gXCIuLi8uLi9hc3NldHMvZ2l0aHViLnN2Z1wiO1xuXG5jb25zdCBmb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZm9vdGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgZ2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJMb2dvKTtcbiAgZm9vdGVyTG9nby5hcHBlbmRDaGlsZChsb2dvKTtcbiAgZm9vdGVyTG9nby5hcHBlbmRDaGlsZChnaXRodWIpO1xuXG4gIGdpdGh1Yi5jbGFzc0xpc3QuYWRkKFwiZ2l0aHViXCIpO1xuXG4gIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gIGNvcHlyaWdodC5pbm5lclRleHQgPSBgQ29weXJpZ2h0IMKpICR7dGltZX1gO1xuXG4gIGdpdGh1Yi5zcmMgPSBHaXRodWI7XG4gIGxvZ28uc3JjID0gRm9vdGVyTG9nbztcblxuICBmb290ZXJMb2dvLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9ia2NlbGViaVwiO1xuICBmb290ZXJMb2dvLnRhcmdldCA9IFwiX2JsYW5rXCI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7XG4iLCJpbXBvcnQgXCIuL2hvbWUuY3NzXCI7XG5cbmNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZ3JlZXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVybyk7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoZ3JlZXRpbmcpO1xuXG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gXCJBcmUgeW91IGxvb2tpbmcgZm9yIGFuIGF1dGhlbnRpYyBQaXp6YSBSZXN0YXVyYW50P1wiO1xuICBncmVldGluZy5pbm5lclRleHQgPVxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiO1xuXG4gIGhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIik7XG4gIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob21lO1xuIiwiaW1wb3J0IGhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXJcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyXCI7XG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9wYWdlcy9ob21lL2hvbWVcIjtcblxuY29uc3QgcGFnZUxvYWQgPSAoKSA9PiB7XG4gIGhlYWRlcigpO1xuICBob21lKCk7XG4gIGZvb3RlcigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQ7XG4iLCJpbXBvcnQgXCIuL21lbnUuY3NzXCI7XG5pbXBvcnQgUGl6emEgZnJvbSBcIi4uLy4uL2Fzc2V0cy9waXp6YS5qcGdcIjtcblxuY29uc3QgY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiUGVwcGVyb25pIFBpenphXCIsXG4gICAgICBcIlRvbWF0byBTYXVjZSwgUGVwcGVyb25pLCBNb3p6YXJlbGxhXCIsXG4gICAgICA5Ljk1LFxuICAgICAgUGl6emFcbiAgICApXG4gICk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIlBlcHBlcm9uaSBQaXp6YVwiLFxuICAgICAgXCJUb21hdG8gU2F1Y2UsIFBlcHBlcm9uaSwgTW96emFyZWxsYVwiLFxuICAgICAgOS45NSxcbiAgICAgIFBpenphXG4gICAgKVxuICApO1xuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJQZXBwZXJvbmkgUGl6emFcIixcbiAgICAgIFwiVG9tYXRvIFNhdWNlLCBQZXBwZXJvbmksIE1venphcmVsbGFcIixcbiAgICAgIDkuOTUsXG4gICAgICBQaXp6YVxuICAgIClcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiUGVwcGVyb25pIFBpenphXCIsXG4gICAgICBcIlRvbWF0byBTYXVjZSwgUGVwcGVyb25pLCBNb3p6YXJlbGxhXCIsXG4gICAgICA5Ljk1LFxuICAgICAgUGl6emFcbiAgICApXG4gICk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIlBlcHBlcm9uaSBQaXp6YVwiLFxuICAgICAgXCJUb21hdG8gU2F1Y2UsIFBlcHBlcm9uaSwgTW96emFyZWxsYVwiLFxuICAgICAgOS45NSxcbiAgICAgIFBpenphXG4gICAgKVxuICApO1xuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJQZXBwZXJvbmkgUGl6emFcIixcbiAgICAgIFwiVG9tYXRvIFNhdWNlLCBQZXBwZXJvbmksIE1venphcmVsbGFcIixcbiAgICAgIDkuOTUsXG4gICAgICBQaXp6YVxuICAgIClcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiUGVwcGVyb25pIFBpenphXCIsXG4gICAgICBcIlRvbWF0byBTYXVjZSwgUGVwcGVyb25pLCBNb3p6YXJlbGxhXCIsXG4gICAgICA5Ljk1LFxuICAgICAgUGl6emFcbiAgICApXG4gICk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIlBlcHBlcm9uaSBQaXp6YVwiLFxuICAgICAgXCJUb21hdG8gU2F1Y2UsIFBlcHBlcm9uaSwgTW96emFyZWxsYVwiLFxuICAgICAgOS45NSxcbiAgICAgIFBpenphXG4gICAgKVxuICApO1xuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJQZXBwZXJvbmkgUGl6emFcIixcbiAgICAgIFwiVG9tYXRvIFNhdWNlLCBQZXBwZXJvbmksIE1venphcmVsbGFcIixcbiAgICAgIDkuOTUsXG4gICAgICBQaXp6YVxuICAgIClcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiUGVwcGVyb25pIFBpenphXCIsXG4gICAgICBcIlRvbWF0byBTYXVjZSwgUGVwcGVyb25pLCBNb3p6YXJlbGxhXCIsXG4gICAgICA5Ljk1LFxuICAgICAgUGl6emFcbiAgICApXG4gICk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIlBlcHBlcm9uaSBQaXp6YVwiLFxuICAgICAgXCJUb21hdG8gU2F1Y2UsIFBlcHBlcm9uaSwgTW96emFyZWxsYVwiLFxuICAgICAgOS45NSxcbiAgICAgIFBpenphXG4gICAgKVxuICApO1xuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJQZXBwZXJvbmkgUGl6emFcIixcbiAgICAgIFwiVG9tYXRvIFNhdWNlLCBQZXBwZXJvbmksIE1venphcmVsbGFcIixcbiAgICAgIDkuOTUsXG4gICAgICBQaXp6YVxuICAgIClcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiUGVwcGVyb25pIFBpenphXCIsXG4gICAgICBcIlRvbWF0byBTYXVjZSwgUGVwcGVyb25pLCBNb3p6YXJlbGxhXCIsXG4gICAgICA5Ljk1LFxuICAgICAgUGl6emFcbiAgICApXG4gICk7XG5cbiAgcmV0dXJuIG1lbnU7XG59O1xuXG5jb25zdCBjcmVhdGVNZW51SXRlbSA9ICh0aXRsZSwgZGVzYywgcHJpY2UsIGltZykgPT4ge1xuICBjb25zdCBpdGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBpdGVtV3JhcHBlci5hcHBlbmRDaGlsZChpbmZvV3JhcHBlcik7XG4gIGl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1JbWcpO1xuICBpbmZvV3JhcHBlci5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICBpbmZvV3JhcHBlci5hcHBlbmRDaGlsZChpdGVtRGVzYyk7XG4gIGluZm9XcmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG5cbiAgaXRlbVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIml0ZW1XcmFwcGVyXCIpO1xuICBpbmZvV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaW5mb1dyYXBwZXJcIik7XG4gIGl0ZW1JbWcuY2xhc3NMaXN0LmFkZChcIml0ZW1JbWdcIik7XG4gIGl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKFwiaXRlbVRpdGxlXCIpO1xuICBpdGVtRGVzYy5jbGFzc0xpc3QuYWRkKFwiaXRlbURlc2NcIik7XG4gIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKFwiaXRlbVByaWNlXCIpO1xuXG4gIGl0ZW1UaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcbiAgaXRlbURlc2MuaW5uZXJUZXh0ID0gZGVzYztcbiAgaXRlbVByaWNlLmlubmVyVGV4dCA9IGAkJHtwcmljZX1gO1xuICBpdGVtSW1nLnNyYyA9IGltZztcblxuICByZXR1cm4gaXRlbVdyYXBwZXI7XG59O1xuXG5jb25zdCBtZW51ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwaXp6YVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XG4gIHBpenphV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicGl6emFXcmFwcGVyXCIpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChwaXp6YVdyYXBwZXIpO1xuICBwaXp6YVdyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7XG4iLCJpbXBvcnQgXCIuL2NvbnRhY3QuY3NzXCI7XG5pbXBvcnQgTWFwIGZyb20gXCIuLi8uLi9hc3NldHMvY29udGFjdC5wbmdcIjtcblxuY29uc3QgY29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgdGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xuICBjb250YWN0LmFwcGVuZENoaWxkKG1hcCk7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKHRlbCk7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG4gIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0SW5mb1wiKTtcbiAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdENvbnRhaW5lclwiKTtcbiAgbWFwLmNsYXNzTGlzdC5hZGQoXCJtYXBcIik7XG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XG5cbiAgbWFwLnNyYyA9IE1hcDtcbiAgdGVsLmlubmVyVGV4dCA9IFwiUGhvbmU6IDAxMjM0NTY3ODlcIjtcbiAgYWRkcmVzcy5pbm5lclRleHQgPSBcIkFkZHJlc3M6IEFCQyBSb2FkLCBEQ0UuIER1YmxpblwiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDtcbiIsImltcG9ydCBcIi4vbWFpbi5jc3NcIjtcbmltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9wYWdlTG9hZFwiO1xuaW1wb3J0IGZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXJcIjtcbmltcG9ydCBob21lIGZyb20gXCIuL3BhZ2VzL2hvbWUvaG9tZVwiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vcGFnZXMvbWVudS9tZW51XCI7XG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9wYWdlcy9jb250YWN0L2NvbnRhY3RcIjtcblxucGFnZUxvYWQoKTtcblxuY29uc3QgY2xlYXJQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIik7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XG5cbiAgaWYgKHdyYXBwZXIpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQod3JhcHBlcik7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGZvb3Rlcik7XG4gIH1cbn07XG5cbmNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lTGlua1wiKTtcbmNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51TGlua1wiKTtcbmNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0TGlua1wiKTtcblxuaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xlYXJQYWdlKCk7XG4gIGhvbWUoKTtcbiAgZm9vdGVyKCk7XG59KTtcblxubWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xlYXJQYWdlKCk7XG4gIG1lbnUoKTtcbiAgZm9vdGVyKCk7XG59KTtcblxuY29udGFjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xlYXJQYWdlKCk7XG4gIGNvbnRhY3QoKTtcbiAgZm9vdGVyKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZyIsImdsb2JhbFRoaXMiLCJ0aGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93Iiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiaSIsIkVycm9yIiwicmVwbGFjZSIsInAiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyIiwiY3JlYXRlRWxlbWVudCIsImxvZ28iLCJuYXYiLCJob21lTGluayIsIm1lbnVMaW5rIiwiY29udGFjdExpbmsiLCJhcHBlbmRDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVyVGV4dCIsInRleHRDb250ZW50IiwiZm9vdGVyIiwiY29weXJpZ2h0IiwiZm9vdGVyTG9nbyIsImdpdGh1YiIsInRpbWUiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJocmVmIiwidGFyZ2V0Iiwid3JhcHBlciIsImhlcm8iLCJoZWFkaW5nIiwiZ3JlZXRpbmciLCJjcmVhdGVNZW51SXRlbSIsInRpdGxlIiwiZGVzYyIsInByaWNlIiwiaW1nIiwiaXRlbVdyYXBwZXIiLCJpbmZvV3JhcHBlciIsIml0ZW1JbWciLCJpdGVtVGl0bGUiLCJpdGVtRGVzYyIsIml0ZW1QcmljZSIsInBpenphV3JhcHBlciIsIm1lbnUiLCJjcmVhdGVNZW51IiwiY29udGFjdENvbnRhaW5lciIsImNvbnRhY3QiLCJjb250YWN0SW5mbyIsIm1hcCIsInRlbCIsImFkZHJlc3MiLCJjbGVhclBhZ2UiLCJyZW1vdmVDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9