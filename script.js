var plus = document.getElementsByClassName("PLUS");
var minus = document.getElementsByClassName("MINUS");
var remove = document.getElementsByClassName("REMOVE");
var like = document.getElementsByClassName("fa-heart");

for (let i of plus) {
  i.addEventListener("click", (e) => {
    var parent = e.target.parentNode;
    var price =
      e.target.parentNode.parentNode.querySelector(".price").innerHTML;
    var amount = e.target.parentNode.parentNode.querySelector(".Amount");
    var total = document.getElementsByClassName("Amount");
    var total_price = 0;

    parent.querySelector("span").innerHTML =
      parseInt(parent.querySelector("span").innerHTML) + 1;
    amount.innerHTML =
      "$" +
      parseInt(price.substring(1, price.length)) *
        parseInt(parent.querySelector("span").innerHTML);

    for (let i of total) {
      total_price += parseInt(i.innerHTML.substring(1, i.length));
    }
    document.querySelector(".total").innerHTML = "$" + total_price;
  });
}

for (let y of minus) {
  y.addEventListener("click", (e) => {
    var parent = e.target.parentNode;
    var price =
      e.target.parentNode.parentNode.querySelector(".price").innerHTML;
    var amount = e.target.parentNode.parentNode.querySelector(".Amount");
    var total = document.getElementsByClassName("Amount");
    var total_price = 0;
    if (parseInt(parent.querySelector("span").innerHTML) > 0) {
      parent.querySelector("span").innerHTML =
        parseInt(parent.querySelector("span").innerHTML) - 1;
      amount.innerHTML =
        "$" +
        parseInt(price.substring(1, price.length)) *
          parseInt(parent.querySelector("span").innerHTML);

      for (let i of total) {
        total_price += parseInt(i.innerHTML.substring(1, i.length));
      }
      document.querySelector(".total").innerHTML = "$" + total_price;
    }
  });
}

for (let k of remove) {
  k.addEventListener("click", (e) => {
    var parent = e.target.parentNode.parentNode;
    console.log(parent);
    parent.parentNode.removeChild(parent);
    console.log(parent.parentNode);
    var total = document.getElementsByClassName("Amount");
    var total_price = 0;
    for (let i of total) {
      total_price += parseInt(i.innerHTML.substring(1, i.length));
    }
    document.querySelector(".total").innerHTML = "$" + total_price;
  });
}

for (let h of like) {
  // var count = 1;

  h.addEventListener("click", (e) => {
    if (h.classList.contains("LIKE")) {
      h.classList.add("far");
      h.classList.remove("fas");
      h.classList.remove("LIKE");
    } else {
      h.classList.remove("far");
      h.classList.add("fas");
      h.classList.add("LIKE");
    }
    // if (count % 2 != 0) {
    //   h.style.color = "red";
    // } else {
    //   h.style.color = "rgb(139, 134, 134)";
    // }
    // count += 1;
  });
}
