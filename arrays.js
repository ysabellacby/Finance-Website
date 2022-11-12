window.onload = todayfunction;

function todayfunction() {
    var current_datetime = new Date()
    var formatted_date = current_datetime.getDate() + "-" +
        (current_datetime.getMonth() + 1) + "-" +
        current_datetime.getFullYear()

    document.getElementById("date").innerHTML = "Today's Date: " + formatted_date;
}

var clientArray = []; 
var indexvalue = 0; 

function addToArray() {
  var clientList = {firstname, lastname, address, postalcode, phone, email, age, info: [], asset: []};
 
  clientList.firstname = document.getElementById("firstname").value;
  clientList.lastname = document.getElementById("lastname").value;
  clientList.address = document.getElementById("address").value;
  clientList.postalcode = document.getElementById("postalcode").value;
  clientList.num = document.getElementById("phone").value;
  clientList.email = document.getElementById("email").value;
  clientList.age = document.getElementById("age").value;

  var yesorno = document.querySelector("input[name=client]:checked").value;
  var gender = document.querySelector("input[name=gender]:checked").value;
  var ownorrent = document.querySelector("input[name=ownorrent]:checked").value;
  var income = document.getElementById("income").value;
  var phone = document.querySelector("input[name=phone]:checked").value;

  //push items in clientList
  clientList.info.push(phone);
  clientList.info.push(yesorno);
  clientList.info.push(gender);
  clientList.info.push(ownorrent);
  clientList.info.push(income);
 
  if (document.querySelector("input[name=vehicle]:checked")) {
    clientList.asset.push("Vehicle");
  }
  if (document.querySelector("input[name=rrsp]:checked")) {
    clientList.asset.push("RRSP");
  }
  if (document.querySelector("input[name=tfsa]:checked")) {
    clientList.asset.push("TFSA");
  }
  if (document.querySelector("input[name=rrif]:checked")) {
    clientList.asset.push("RRIF");
  }

  clientArray.push(clientList);
  displayList(); 
}

function displayList() {
  
  var clientlist = ""; 
  var displayRadiobuttons = "";

  for (var i = 0; i < clientArray.length; i++) {
    var clientList = {firstname, lastname, address, postalcode, phone, email, age, info: [], asset: []};
    clientList = clientArray[i];
    clientlist = clientList.firstname + " " + clientList.lastname + " " + clientList.address + ", " + clientList.postalcode + ", " +
      clientList.num + ", " + clientList.email + ", " + clientList.age + ", ";

    for (var x = 0; x < clientList.info.length; x++) {
      clientlist += clientList.info[x] + ", ";
    }
    for (var x = 0; x < clientList.asset.length; x++) {
      clientlist += clientList.asset[x] + " ";
    }

    displayRadiobuttons += "&emsp;&emsp;&emsp;<input type=radio name=listitem ";
    displayRadiobuttons += " value=" + i + " ";
    displayRadiobuttons += " onchange=deleteItem(this.value)>";
    displayRadiobuttons += clientlist + "<br>";
  }

  document.getElementById("showlist").innerHTML = "List of Clients<br><br>" + displayRadiobuttons;
}

function deleteItem(i) {
	clientArray.splice(i,1);
	displayList();
	
}