(function(){
    let langtools = ace.require("ace/ext/language_tools");
    let editor = ace.edit("editor");
    editor.session.setMode("ace/mode/typescript");
    let completer = {
        getCompletions: function(editor, session, pos, prefix, callback){
            console.log("getting completions");
            save();
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
    window.aceEditor = editor;
})();
