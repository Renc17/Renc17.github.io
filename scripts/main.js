var before = document.getElementById("before");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");

var git = 0;
var commands = [];

// intialize the terminal
setTimeout(function () {
  newprompt("");
  loopLines(banner, "colored", 80);
  textarea.focus();
}, 100);

window.onload = function () {
  textarea.value = "";
};

window.addEventListener("keyup", enterKey);

function newprompt(text) {
  var prompt = document.createElement("span");
  prompt.innerHTML = "~";

  var div = document.createElement("div");
  var arrow = document.createElement("span");
  arrow.innerHTML = ">";
  arrow.className = "arrow";
  div.appendChild(arrow);

  var cmd = document.createElement("span");
  cmd.style = "margin-left: 5px;";
  cmd.innerHTML = text;
  div.appendChild(cmd);

  addLine(prompt.innerHTML + div.outerHTML, "", 0);
}

function commander(cmd) {
  cmd = cmd.replace(new RegExp(/\r?\n|\r/g), "");
  switch (cmd.toLowerCase()) {
    case "whois":
      loopLines(whois, "ps-5 ", 80);
      break;
    case "help":
      loopLines(help, "ps-5 d-flex", 80);
      break;
    case "projects":
      loopLines(projects, "ps-5 d-flex", 80);
      break;
    case "skills":
      loopLines(skills, "ps-5 d-flex", 80);
      break;
    case "experience":
      loopLines(experiance, "ps-5 d-flex", 80);
      break;
    case "education":
      loopLines(education, "ps-5 d-flex", 80);
      break;
    case "social":
      loopLines(social, "ps-5 d-flex", 80);
      break;
    case "contact":
      loopLines(contact, "ps-5 d-flex", 80);
      break;
    case "banner":
      loopLines(banner, "colored", 80);
      break;
    case "":
      break;
    case "clear":
      break;
    default:
      addLine(
        '<span class="colored">' + cmd + ": Command not found.</span>",
        "error mb-3",
        100
      );
      break;
  }
}

function typeIt(from, e) {
  e = e || window.event;
  var tw = from.value;
  command.innerHTML = tw.replace(/\n/g, "");
}

function enterKey(e) {
  if (e.keyCode == 13) {
    newprompt(textarea.value);
    commander(textarea.value);

    textarea.value = "";
    command.innerHTML = "";
  }
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}
