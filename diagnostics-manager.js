(function () {
    var AceRange = ace.require("ace/range").Range;
    const consoleElement = document.getElementById("console");
    const warning_include = document.querySelector("#warning-and-errors-link").import;
    const warning_template = warning_include.querySelector(".warning");
    const error_template = warning_include.querySelector(".error");
    window.diagnosticsManager = {
        errorMarkersIds: [],
        addDiagnostic: function (d) {
            console.debug("adding diagnostics");
            let startPosition = d.file.getLineAndCharacterOfPosition(d.start);
            let range = new AceRange(startPosition.line, startPosition.character, startPosition.line, startPosition.character + d.length);
            this.errorMarkersIds.push(window.aceEditor.session.addMarker(range, "ace_underline_error", "text", true));
            var errorElement = null;
            if(d.category==1)
                errorElement = error_template.cloneNode(true);
            else
                errorElement = warning_template.cloneNode(true);
            errorElement.querySelector("span").innerText = d.messageText;
            consoleElement.appendChild(errorElement);
        },
        clearDiagnostics: function () {
            this.errorMarkersIds.forEach(function (id) {
                window.aceEditor.session.removeMarker(id);
            });
            consoleElement.innerHTML = "";
        }
    };
})();