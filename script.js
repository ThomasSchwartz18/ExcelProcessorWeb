function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByTagName("button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function processData() {
  var inputData = document.getElementById("dataInput").value.trim();
  var outputTextarea = document.getElementById("output");
  outputTextarea.value = "";
  if (inputData) {
    var formattedData = inputData.split(/\s+/).join(";");
    outputTextarea.value = formattedData;
  }
}

function autoProcessData() {
  var inputData = document.getElementById("dataInput").value.trim();
  var outputTextarea = document.getElementById("output");
  outputTextarea.value = "";
  if (inputData) {
    var formattedData = inputData.split(/\s+/).join(";");
    outputTextarea.value = formattedData;
  }
}

function copyToClipboard() {
  var outputTextarea = document.getElementById("output");
  outputTextarea.select();
  document.execCommand("copy");
  alert("Copied to clipboard");
}

// Open default tab
document.getElementById("defaultOpen").click();

// Automatically process data when input changes
document.getElementById("dataInput").addEventListener("input", autoProcessData);
