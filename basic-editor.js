(function(){
    let langtools = ace.require("ace/ext/language_tools");
    var AceRange = ace.require("ace/range").Range;
    let editor = ace.edit("editor");
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false
    });
    editor.session.setMode("ace/mode/typescript");
    let completer = {
        getCompletions: function(editor, session, pos, prefix, callback){
            callback(null, [{caption:"flow",snippet:"flow", meta: "php function", score: 100}]);
        }
    };
    langtools.addCompleter(completer);

    window.diagnosticsManager = {
        errorMarkers : [],
        addDiagnostic: function(d) {
            let startPosition = d.file.getLineAndCharacterOfPosition(d.start);
            let range = new AceRange(startPosition.line, startPosition.character, startPosition.line, startPosition.character+d.length);
            this.errorMarkers.push(editor.session.addMarker(range, "ace_underline_error", "text", true));
        },
        clearDiagnostics: function(){
            this.errorMarkers.forEach(function(marker) {
                editor.session.removeMarker(marker);
            });
        }
    };
    window.aceEditor = editor;
})();
