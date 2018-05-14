var langtools = ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: false
});
// editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/typescript");
var completer = {
    getCompletions: function(editor, session, pos, prefix, callback){
        callback(null, [{caption:"flow",snippet:"flow", meta: "php function", score: 100}]);
    }
};
langtools.addCompleter(completer);