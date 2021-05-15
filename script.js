function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var year = new Date().getFullYear()+parseInt(years);

    if (principal.value == "") {
    	alert("Please enter principal amount")
    } else {
    	document.getElementById("result").innerHTML = "If you deposit " + principal + "<br/> at an interest rate of " + rate + "% <br/>You will receive an amount of "+ interest + "<br/> in the year " + year;
    }
}
function updateRate() {
    	//reads the rate value slided by the user and updates the rate reading.
    	var rateval = document.getElementById("rate").value;
    	document.getElementById("rate_val").innerHTML = rateval;
    }


//document.getElementById("result").innerHTML = "If you deposit " + principal + "<br/> at an interest rate of " + rate + "% <br/>You will receive an amount of "+ interest + "<br/> in the year " + year;