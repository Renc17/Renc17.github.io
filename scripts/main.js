// var help = [
//   "<br>",
//   "whois              Who is Rena?",
//   "projects           View coding projects",
//   "skills             Things I'good at",
//   "experiance         Yeah, I have a little of this too",
//   "education          Academic journey",
//   "social             Display social networks",
//   "contact            Bring it on",
//   "banner             Display the header",
//   "clear              Clear Terminal",
//   "<br>",
// ];

// var banner = [
//   "<br>",
//   "            .*=     =*:",
//   "            .*=     -*:",
//   "**      .***************:        +*",
//   "**     .*******************:     +*",
//   "**    ***********************.   +*",
//   "**    *****+:::=***+:::+*****.   +*",
//   "**    *****+   :***=   =*****.   +*      .---.                      .-----.                 .-.          ",
//   ".:====*****+   :***=   =*****+===:.      : .; :                     `-. .-'                 : :.-.       ",
//   "  ::::*****+   :***=   =*****-:::        :   .' .--. ,-.,-. .--.      : : .--.  .--.   .--. : `'.' .--.  ",
//   "      ******===+****===******.           : :.`.' '_.': ,. :' .; ;     : :`._-.'' .; ; ' .; :: . `.' .; ; ",
//   "      ***********************.           :_;:_;`.__.':_;:_;`.__,_;    :_;`.__.'`.__,_;`._. ;:_;:_;`.__,_;",
//   "      ===+****+=====+****+===.                                                         .-. :             ",
//   "         .****-     -****:                                                             `._.'             ",
//   "         .****-     -****:",
//   "       +**+            -***.",
//   "       ***+            =***.",
//   "<br>",
//   "<span>Welcome to my interactive web terminal</span>",
//   "<span>For a list of available commands, type <span class=\"neonlabel\"> ' help ' </span> .</span>",
//   "<br>",
// ];

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
      loopLines(banner, "ps-5 d-flex", 80);
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

// function enterKey(e) {
//   if (e.keyCode == 181) {
//     document.location.reload(true);
//   }
//   if (pw) {
//     let et = "*";
//     let w = textarea.value.length;
//     command.innerHTML = et.repeat(w);
//     if (textarea.value === password) {
//       pwd = true;
//     }
//     if (pwd && e.keyCode == 13) {
//       loopLines(secret, "color2 margin", 120);
//       command.innerHTML = "";
//       textarea.value = "";
//       pwd = false;
//       pw = false;
//       liner.classList.remove("password");
//     } else if (e.keyCode == 13) {
//       addLine("Wrong password", "error", 0);
//       command.innerHTML = "";
//       textarea.value = "";
//       pw = false;
//       liner.classList.remove("password");
//     }
//   } else {
//     if (e.keyCode == 13) {
//       commands.push(command.innerHTML);
//       git = commands.length;
//       addLine("visitor@fkcodes.com:~$ " + command.innerHTML, "no-animation", 0);
//       commander(command.innerHTML.toLowerCase());
//       command.innerHTML = "";
//       textarea.value = "";
//     }
//     if (e.keyCode == 38 && git != 0) {
//       git -= 1;
//       textarea.value = commands[git];
//       command.innerHTML = textarea.value;
//     }
//     if (e.keyCode == 40 && git != commands.length) {
//       git += 1;
//       if (commands[git] === undefined) {
//         textarea.value = "";
//       } else {
//         textarea.value = commands[git];
//       }
//       command.innerHTML = textarea.value;
//     }
//   }
// }

// function commander(cmd) {
//   switch (cmd.toLowerCase()) {
//     case "help":
//       loopLines(help, "color2 margin", 80);
//       break;
//     case "whois":
//       loopLines(whois, "color2 margin", 80);
//       break;
//     case "whoami":
//       loopLines(whoami, "color2 margin", 80);
//       break;
//     case "video":
//       addLine("Opening YouTube...", "color2", 80);
//       newTab(youtube);
//       break;
//     case "sudo":
//       addLine("Oh no, you're not admin...", "color2", 80);
//       setTimeout(function () {
//         window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
//       }, 1000);
//       break;
//     case "social":
//       loopLines(social, "color2 margin", 80);
//       break;
//     case "secret":
//       liner.classList.add("password");
//       pw = true;
//       break;
//     case "projects":
//       loopLines(projects, "color2 margin", 80);
//       break;
//     case "password":
//       addLine(
//         "<span class=\"inherit\"> Lol! You're joking, right? You're gonna have to try harder than that!😂</span>",
//         "error",
//         100
//       );
//       break;
//     case "history":
//       addLine("<br>", "", 0);
//       loopLines(commands, "color2", 80);
//       addLine("<br>", "command", 80 * commands.length + 50);
//       break;
//     case "email":
//       addLine(
//         'Opening mailto:<a href="mailto:forrest@fkcodes.com">forrest@fkcodes.com</a>...',
//         "color2",
//         80
//       );
//       newTab(email);
//       break;
//     case "clear":
//       setTimeout(function () {
//         terminal.innerHTML = '<a id="before"></a>';
//         before = document.getElementById("before");
//       }, 1);
//       break;
//     case "banner":
//       loopLines(banner, "", 80);
//       break;
//     // socials
//     case "youtube":
//       addLine("Opening YouTube...", "color2", 80);
//       newTab(youtube);
//       break;
//     case "twitter":
//       addLine("Opening Twitter...", "color2", 0);
//       newTab(twitter);
//       break;
//     case "linkedin":
//       addLine("Opening LinkedIn...", "color2", 0);
//       newTab(linkedin);
//       break;
//     case "instagram":
//       addLine("Opening Instagram...", "color2", 0);
//       newTab(instagram);
//       break;
//     case "github":
//       addLine("Opening GitHub...", "color2", 0);
//       newTab(github);
//       break;
//     default:
//       addLine(
//         '<span class="inherit">Command not found. For a list of commands, type <span class="command">\'help\'</span>.</span>',
//         "error",
//         100
//       );
//       break;
//   }
// }

// function newTab(link) {
//   setTimeout(function () {
//     window.open(link, "_blank");
//   }, 500);
// }

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
