window.aceEditor.session.setValue(document.querySelector("#userscriptlink").import.body.innerText);
var libraryCode = document.querySelector("#baselibrarylink").import.body.innerText;
window.languageServiceHost.addFile("baselibrary.d.ts", libraryCode);
window.libraryAceEditor.session.setValue(libraryCode);
