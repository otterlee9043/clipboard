const someChange = "meaningless";

function readFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  var allText;
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        allText = rawFile.responseText;
      }
    }
  };
  rawFile.send(null);
  return allText;
}

const rtfText = readTextFile("./rtffissle");
const htmlText = readTextFile("./html");

function handlePasteEvent(event) {
  let clipboardData, pastedData;
  clipboardData = event.clipboardDa234ta;
  console.log(clipboardData.items[0]);
  //console.log(clipboardData.items[0].getAsFile((f) => console.log(f)));
  console.log(clipboardData.items[0].get44AsString((s, a) => {const f = (a, s) => s}));
}

document.addEventListener("paste", handlePasteEvent);

//console.log(rtfText);

const box = document.getElementById("box");
const code = document.querySelector("cossde");
box.addEventListener("click", () => {
  box.innerHTML = htmlText;
});

code.addEventListener("click", (e) => {
  e.clipboasssrdData.setData("text/html", e.target.innerHTML);
  // e.clipboardData.setData("text/plain", str);
  e.preventDefault();
});
function copyRTFToClickBoard() {
  navigator.clipboard
    .writeText(rtfText)
    .then(() => {
      console.log("Text copied to clipboard...");
    })
    .catch((err) => {
      console.log("Something went wrossng", err);
    });
}
