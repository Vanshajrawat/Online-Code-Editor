
function run() {
  const html = htmlEditor.getValue();
  const css = cssEditor.getValue();
  const js = jsEditor.getValue();

  const output = document.getElementById("output");
  const src = `
    <!DOCTYPE html>
    <html>
    <head><style>${css}</style></head>
    <body>
      ${html}
      <script>${js}<\/script>
    </body>
    </html>
  `;
  output.srcdoc = src;
}



function saveCode() {
    localStorage.setItem("htmlCode", document.getElementById("html-code").value);
    localStorage.setItem("cssCode", document.getElementById("css-code").value);
    localStorage.setItem("jsCode", document.getElementById("js-code").value);
    alert("Code saved!");
    }

    // Restore code from localStorage
    window.onload = () => {
    document.getElementById("html-code").value = localStorage.getItem("htmlCode") || "";
    document.getElementById("css-code").value = localStorage.getItem("cssCode") || "";
    document.getElementById("js-code").value = localStorage.getItem("jsCode") || "";
    run();
};

let htmlEditor = CodeMirror.fromTextArea(document.getElementById("html-code"), {
  mode: "text/html",
  lineNumbers: true,
  theme: "dracula"
});

let cssEditor = CodeMirror.fromTextArea(document.getElementById("css-code"), {
  mode: "css",
  lineNumbers: true,
  theme: "dracula"
});

let jsEditor = CodeMirror.fromTextArea(document.getElementById("js-code"), {
  mode: "javascript",
  lineNumbers: true,
  theme: "dracula"
});

function downloadFiles() {
  const files = [
    { name: 'index.html', content: htmlEditor.getValue() },
    { name: 'style.css', content: cssEditor.getValue() },
    { name: 'script.js', content: jsEditor.getValue() }
  ];
  files.forEach(file => {
    const blob = new Blob([file.content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = file.name;
    a.click();
  });
}

function uploadFiles(event) {
  const files = event.target.files;
  for (const file of files) {
    const reader = new FileReader();
    reader.onload = () => {
      const ext = file.name.split('.').pop();
      if (ext === 'html') htmlEditor.setValue(reader.result);
      else if (ext === 'css') cssEditor.setValue(reader.result);
      else if (ext === 'js') jsEditor.setValue(reader.result);
    };
    reader.readAsText(file);
  }
}


function saveToDatabase() {
  fetch('save.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      username: localStorage.getItem("user") || "guest",
      html: htmlEditor.getValue(),
      css: cssEditor.getValue(),
      js: jsEditor.getValue()
    })
  })
  .then(res => res.text())
  .then(alert);
}



function loadFromDatabase() {
  fetch('load.php?username=' + (localStorage.getItem("user") || "guest"))
    .then(res => res.json())
    .then(data => {
      htmlEditor.setValue(data.html);
      cssEditor.setValue(data.css);
      jsEditor.setValue(data.js);
      run();
    });
}


function saveToDatabase() {
  fetch("save.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      username: localStorage.getItem("user") || "guest",
      html: htmlEditor.getValue(),
      css: cssEditor.getValue(),
      js: jsEditor.getValue()
    })
  }).then(res => res.text()).then(alert);
}

function loadFromDatabase() {
  fetch("load.php?username=" + (localStorage.getItem("user") || "guest"))
    .then(res => res.json())
    .then(data => {
      htmlEditor.setValue(data.html || "");
      cssEditor.setValue(data.css || "");
      jsEditor.setValue(data.js || "");
      run();
    });
}


