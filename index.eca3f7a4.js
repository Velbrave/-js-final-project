var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire58cb;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire58cb=r);var o=r("9vN2i"),i=r("6ZrOe"),d=r("byv5z"),a=r("2wGo8"),c=r("8Obb9"),l=r("1W6ce");const f=new(0,o.default),u=new(0,a.default),s=new(0,l.default);function g(e){!function(e){"Add to"===e.currentTarget.children[0].textContent?e.currentTarget.children[0].textContent="Remove":e.currentTarget.children[0].textContent="Add to";e.currentTarget.children[1].classList.toggle("icon-heart-not-active")}(e),s.toggleDrink(e.currentTarget.id)}function v(e){"Add to favorite"===e.target.textContent?e.target.textContent="Remove from favorite":e.target.textContent="Add to favorite",s.toggleDrink(d.currentModalID);const t=document.querySelector(`[id="${d.currentModalID}"]`);s.isInStorage(d.currentModalID)?(t.children[0].textContent="Add to",t.children[1].classList.toggle("icon-heart-not-active")):(t.children[0].textContent="Remove",t.children[1].classList.toggle("icon-heart-not-active"))}c.default.modalAddDrink.addEventListener("click",v),c.default.modalAddIngredient.addEventListener("click",(function(e){"Add to favorite"===e.target.textContent?e.target.textContent="Remove from favorite":e.target.textContent="Add to favorite";s.toggleIngredient(d.currentIngredientModal)})),async function(){const e=u.itemsPerPage();for(let t=0;t<e;t++){const e=await f.random();c.default.mainCocktailsList.insertAdjacentHTML("beforeend",(0,i.default)(e));const t=c.default.iconHeart.innerHTML,n=document.querySelector(`[id="${e.idDrink}"]`);n.addEventListener("click",g),(0,d.listenLearnMoreBtns)(e);n.children[1].innerHTML=t}}();
//# sourceMappingURL=index.eca3f7a4.js.map
