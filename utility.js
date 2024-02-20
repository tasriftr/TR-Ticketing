let seatCount = 0;
let finalCost = 0;
let seatAvailAble = 40;
for (const seat of seats) {
  seat.addEventListener("click", function (e) {
    seat.style.backgroundColor = "#1DD100";
    seat.style.color = "white";

    const tbody = document.querySelector("tbody");
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${e.target.innerText}</td>
            <td>Economics</td>
            <td>550</td>
        `;
    tbody.appendChild(tr);

    seatCount = seatCount + 1;
    finalCost = finalCost + 550;
    seatAvailAble--;
    seat.disabled = true;
    phoneNumber.disabled = false;

    availableSeat.innerText = seatCount;
    total.innerText = finalCost;
    seatLeft.innerText = seatAvailAble;
    grandTotal.innerText = finalCost;
    const blackTicket = "You are not allowed to buy more than 4 tickets";
    if (seatCount >= 4) {
      for (const seat of seats) {
        seat.disabled = true;
        maxTicket.innerText = blackTicket;
        couponField.disabled = false;
        couponBtn.disabled = false;
      }
    }
  });
}

couponBtn.addEventListener("click", function () {
  const coupon = couponField.value;
  if (coupon === "NEW15" || coupon === "Couple20") {
    if (coupon === "NEW15") {
      const discount = finalCost * 0.15;
      discountContainer.classList.remove("hidden");
      discountText.innerText = discount;
      couponContainer.classList.add("hidden");

      const totalPrice = finalCost - discount;
      grandTotal.innerText = totalPrice;
    }

    if (coupon === "Couple20") {
      const discount = finalCost * 0.2;
      discountContainer.classList.remove("hidden");
      discountText.innerText = discount;
      couponContainer.classList.add("hidden");

      const totalPrice = finalCost - discount;
      grandTotal.innerText = totalPrice;
    }
  } else {
    document.getElementById("invalid").classList.remove("hidden");
  }
});

phoneNumber.addEventListener("input", function () {
  const number = phoneNumber.value;
  if (seatCount > 0 && number.length > 0) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

function refresh() {
  window.location.reload();
}
