(function(){
    let langtools = ace.require("ace/ext/language_tools");
    var AceRange = ace.require("ace/range").Range;
    let editor = ace.edit("editor");
    editor.session.setMode("ace/mode/typescript");
    let completer = {
        getCompletions: function(editor, session, pos, prefix, callback){
            console.log("getting completions");
            var completions = window.completionService.getCompletions("userscript.ts", pos)
            console.log(completions);
            callback(null, completions);
        }
    };
    langtools.setCompleters([completer]);
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false
    });

    window.diagnosticsManager = {
        errorMarkersIds : [],
        addDiagnostic: function(d) {
            let startPosition = d.file.getLineAndCharacterOfPosition(d.start);
            let range = new AceRange(startPosition.line, startPosition.character, startPosition.line, startPosition.character+d.length);
            this.errorMarkersIds.push(editor.session.addMarker(range, "ace_underline_error", "text", true));
        },
        clearDiagnostics: function(){
            this.errorMarkersIds.forEach(function(id) {
                editor.session.removeMarker(id);
            });
        }
    };
    window.aceEditor = editor;
})();
