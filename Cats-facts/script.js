const btn = document.querySelector("#btn");
const pa = document.querySelector("#pa");
let allFacts = "";
(async function getNews() {
  const result = await fetch("https://catfact.ninja/facts");
  const facts = await result.json();
  facts.data.forEach((val, idx) => {
    allFacts += `<br>${idx + 1} : ${val.fact}<br>`;
  });
})();

btn.addEventListener("click", () => {
  pa.innerHTML += allFacts;
});
