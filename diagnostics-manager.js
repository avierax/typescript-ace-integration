(function () {
    var AceRange = ace.require("ace/range").Range;
    window.diagnosticsManager = {
        errorMarkersIds: [],
        addDiagnostic: function (d) {
            console.debug("adding diagnostics");
            let startPosition = d.file.getLineAndCharacterOfPosition(d.start);
            let range = new AceRange(startPosition.line, startPosition.character, startPosition.line, startPosition.character + d.length);
            this.errorMarkersIds.push(window.aceEditor.session.addMarker(range, "ace_underline_error", "text", true));
        },
        clearDiagnostics: function () {
            this.errorMarkersIds.forEach(function (id) {
                window.aceEditor.session.removeMarker(id);
            });
        }
    };
})();