





































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































const link1 = document.querySelector(".link1");
const body = document.querySelector("body");

const a = document.createElement("a");
a.style.position = "absolute";
a.style.bottom = "10%";
a.style.color = "rgb(43, 12, 6)";
a.style.textDecoration = "none";
a.innerText = "CLICK ME!";
a.setAttribute('target', '_blank');
a.setAttribute('href',"https://www.base64decode.org/MTAxMTAwXzExMTBfMTAxMDEwXzAwMDBfMV8wXzAxMTA=/?MTAxMTAwXzExMTBfMTAxMDEwXzAwMDBfMV8wXzAxMTA=");

const a2 = document.createElement("a");
a2.style.position = "absolute";
a2.style.top = "10%";
a2.style.right = "10px";
a2.style.color = "rgb(65, 65, 2)";
a2.style.textDecoration = "none";
a2.innerText = "CLICK ME!";
a2.setAttribute('target', '_blank');
a2.setAttribute('href',"http://www.unit-conversion.info/texttools/morse-code/#data/55576946969696549323/asdfklawejfakhweldfklHJsdurwherfa/?lookTheOtherWay");

link1.addEventListener("click", () => {
    body.appendChild(a);
});

a.addEventListener("click", () => {
    body.appendChild(a2);
    link1.setAttribute('href', "https://www.invicti.com/blog/web-security/sql-injection-cheat-sheet/");
    link1.style.color = "rgb(252, 218, 218)";
});
