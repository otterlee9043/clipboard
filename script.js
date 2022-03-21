const rtfText = readTextFile("./rtffile");
const htmlText = readTextFile("./html");

function handlePasteEvent(event) {
  let clipboardData, pastedData;
  clipboardData = event.clipboardData;
  console.log(clipboardData.items[0]);
  //console.log(clipboardData.items[0].getAsFile((f) => console.log(f)));
  console.log(clipboardData.items[0].getAsString((s) => console.log(s)));
}

document.addEventListener("paste", handlePasteEvent);

//console.log(rtfText);

const box = document.getElementById("box");
const code = document.querySelector("code");
box.addEventListener("click", () => {
  box.innerHTML = htmlText;
});

code.addEventListener("click", (e) => {
  e.clipboardData.setData("text/html", e.target.innerHTML);
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
      console.log("Something went wrong", err);
    });
}
