let items = [
    {
      title: "This was our pact",
      quantity: 0,
      dollars: 7,
      cents: 49,
    },
    {
      title: "The famous five",
      quantity: 0,
      dollars: 4,
      cents: 59,
    },
    // ... (similar entries for other items)
  ];
  
  let cartValue = document.getElementById("cart-value");
  let cartButton = document.getElementById("cart");
  let addBtn = document.getElementsByClassName("button");
  
  function updateCart() {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
      count += items[i].quantity;
    }
    cartValue.innerHTML = count;
  }
  
  for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].onclick = () => {
      items[i].quantity++;
      updateCart();
    };
  }
  
  let totalDollars = 0;
  let totalCents = 0;
  
  function updatePrice() {
    let totalPriceCents = 0;
    for (let i = 0; i < items.length; i++) {
      totalPriceCents +=
        items[i].quantity * (items[i].dollars * 100 + items[i].cents);
    }
    totalDollars = Math.floor(totalPriceCents / 100);
    totalCents = totalPriceCents % 100;
  }
  
  cartButton.onclick = () => {
    updatePrice();
    for (let i = 0; i < items.length; i++) {
      if (items[i].quantity !== 0) {
        console.log(
          "Item title: " + items[i].title +
          " - Quantity: " + items[i].quantity
        );
      }
    }
    console.log("The total amount is " + totalDollars + "$ and " + totalCents + " cents");
  };
  