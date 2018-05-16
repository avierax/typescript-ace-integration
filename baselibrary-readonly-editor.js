(function(){
    let langtools = ace.require("ace/ext/language_tools");
    var AceRange = ace.require("ace/range").Range;
    let editor = ace.edit("editor(userlibrary.d.ts)");
    editor.session.setMode("ace/mode/typescript");
    editor.setReadOnly(true);

    window.libraryAceEditor = editor;
})();
