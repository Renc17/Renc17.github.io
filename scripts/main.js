var before = "";
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");

var git = 0;
var commands = [];

// intialize the terminal
setTimeout(function () {
  addlog();
  before = document.getElementById("before");
  newprompt("", "");
  loopLines(banner, "ps-5 colored", 80);
  textarea.focus();
}, 100);

window.onload = function () {
  textarea.value = "";
};

window.addEventListener("keyup", enterKey);

function newprompt(text, style) {
  var prompt = document.createElement("span");
  prompt.innerHTML = "~";

  var div = document.createElement("div");
  var arrow = document.createElement("span");
  arrow.innerHTML = ">";
  arrow.className = "arrow " + style;
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
      newprompt(textarea.value, "");
      loopLines(whois, "ps-5 ", 80);
      break;
    case "help":
      newprompt(textarea.value, "");
      loopLines(help, "ps-5 d-flex", 80);
      break;
    case "projects":
      newprompt(textarea.value, "");
      loopLines(projects, "ps-5 d-flex", 80);
      break;
    case "skills":
      newprompt(textarea.value, "");
      loopLines(skills, "ps-5 d-flex", 80);
      break;
    case "experience":
      newprompt(textarea.value, "");
      loopLines(experiance, "ps-5 d-flex", 80);
      break;
    case "education":
      newprompt(textarea.value, "");
      loopLines(education, "ps-5 d-flex", 80);
      break;
    case "social":
      newprompt(textarea.value, "");
      loopLines(social, "ps-5 d-flex", 80);
      break;
    case "contact":
      newprompt(textarea.value, "");
      loopLines(contact, "ps-5 d-flex", 80);
      break;
    case "banner":
      newprompt(textarea.value, "");
      loopLines(banner, "ps-5 colored", 80);
      break;
    case "":
      newprompt(textarea.value, "");
      break;
    case "clear":
      clear();
      break;
    default:
      newprompt(textarea.value, "error-arrow");
      addLine(
        '<span class="colored">' + cmd + ": Command not found.</span>",
        "mb-3",
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
    console.log("dfkh");
    commander(textarea.value);

    textarea.value = "";
    command.innerHTML = "";
  }
}

function addLine(text, style, time) {
  setTimeout(function () {
    var next = document.createElement("div");
    next.innerHTML = text;
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

function clear() {
  var logs = document.getElementById("log");
  logs.remove();

  addlog();

  before = document.getElementById("before");
  command = document.getElementById("typer");
  textarea = document.getElementById("texter");
}

function addlog() {
  var div = document.createElement("div");
  div.id = "log";
  div.className = "ascii-art";
  var a = document.createElement("a");
  a.id = "before";
  div.appendChild(a);

  var prompt = document.getElementById("prompt");
  prompt.parentNode.insertBefore(div, prompt);
}
