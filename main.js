let home = document.querySelector(".home");
let btns = document.querySelectorAll(".btn");

function showTaomlar(taomlar) {
  taomlar.forEach((taom) => {
    let box = document.createElement("div");
    box.classList.add("box");

    box.innerHTML = ` 
        <div class="box_item">
            <img class="img" src="${taom.rasm}" alt="${taom.nom}" />
            <div class="right">
                <div class="right_top">
                    <h4>${taom.nom}</h4>
                    <p>${taom.narx} so'm</p>
                </div>
                <p class="matn">${taom.matn.substring(0, 100) + "..."}</p>
                <div class="tur">${taom.tur}</div>
            </div>
        </div>`;

    home.append(box);
  });
}
showTaomlar(taomlar);

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    home.innerHTML = "";
    if (btn.classList.contains("btn")) {
      document.querySelector(".active").classList.remove("active");
      let num = +btn.dataset.num;
      btns[num].classList.add("active");
    }
    let category = btn.dataset.tur;
    if (category === "hammasi") {
      showTaomlar(taomlar);
    } else {
      let filteredTaomlar = taomlar.filter((tam) => tam.tur === category);
      showTaomlar(filteredTaomlar);
    }
  });
});
