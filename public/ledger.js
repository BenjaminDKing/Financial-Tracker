var n = 0


$(".enterButton").click(function(){
  date = $("#dateInput").val();
  amount = $("#amountInput").val();
  category = $("#categoryInput").val();
  description = $("#descInput").val();
  n++;

  if (category == "income"){
    $("#transactions").append(
      `<tr><th scope="row">${n}</th><td>${date}</td><td class="income">${amount}</td><td></td><td>${description}</td><td><button type="button" id="${n}delbtn" class="btn-sm btn-danger">Delete</button></td></tr>`
    );
  }

  else if (category == "expense") {
    $("#transactions").append(
      `<tr><th scope="row">${n}</th><td>${date}</td><td></td><td class="expense">${amount}</td><td>${description}</td><td><button type="button" id="${n}delbtn" class="btn-sm btn-danger">Delete</button></td></tr>`
    );
  }

  calcBalance();
})

$("tbody").on('click', '.btn-danger', function(){
    thisrow = this.closest("tr");
    thisrow.remove();

    calcBalance();
})

function calcBalance(){
  var totalIncome = 0;
  var totalExpense = 0;

  $(".income").each(function(){
    var num = parseInt($(this).text())
    totalIncome += num;
  })
  $(".expense").each(function(){
    var num = parseInt($(this).text())
    totalExpense += num;
  })

  console.log(totalIncome);
  $("#balance").text(totalIncome - totalExpense);
}
