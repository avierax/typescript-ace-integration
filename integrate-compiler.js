

function getSrc(){
    return window.aceEditor.getSession().doc.getValue();
}

function output(o){
    console.log(o);
}
const logPrefix = "TS";
var languageServiceHost = {
    files : {},

    log : function(msg) {
        return console.log(logPrefix+msg);
    },
    trace: function(msg) {
        console.log(logPrefix+" [TRACE] "+msg);
    },
    error: function(msg) {
        console.error(logPrefix+msg);
    },
    getCompilationSettings:  function() {
        return ts.getDefaultCompilerOptions;
    },
    getScriptIsOpen: function(_) {
        return true;
    },
    getCurrentDirectory : function () {
        return "";
    },
    getDefaultLibFileName : function() {
        return "lib.d.ts";
    },
    getScriptVersion : function(filename) {
        return this.files[filename].version.toString();
    },
    getScriptSnapshot : function(filename) {
        console.info("getting snapshot for "+filename);
        if(this.files[filename]===undefined) {
            console.info("no snapshot present for file "+filename);
            return undefined;
        }
        return this.files[filename].file;
    },
    getScriptFileNames : function() {
        const names = [];
        for(let f in this.files){
            names.push(f);
        }
        return names;
    },
    addFile: function(filename, body) {
        let previousVersion = 0;
        if(this.files[filename])
            previousVersion = this.files[filename].version;
        this.files[filename] = {
            version : previousVersion+1,
            file: ts.ScriptSnapshot.fromString(body)
        };
        return this.files[filename];
    }
};

var languageService = ts.createLanguageService(languageServiceHost, ts.createDocumentRegistry());


function initializeCompiler(continuation){

    var oReq = new XMLHttpRequest();
    oReq.onload = function(e) {
        var response = oReq.responseText; // not responseText
        languageServiceHost.addFile("lib/lib.d.ts", response);
        console.log("base library loaded");

        languageServiceHost.addFile("userscript.ts", getSrc());
        continuation();

    }
    oReq.open("GET", "lib/lib.d.ts");
    oReq.send();
}

function save(){
    languageServiceHost.addFile("userscript.ts", getSrc());
}

function compile(){
    console.log("compiling...");
    let diagnostics = languageService.getSemanticDiagnostics("userscript.ts");
    window.diagnosticsManager.clearDiagnostics();
    for(var index in diagnostics){
        let diagnostic = diagnostics[index];
        console.log(diagnostic);
        window.diagnosticsManager.addDiagnostic(diagnostic);
    }
    output(languageService.getEmitOutput("userscript.ts"));
}

function saveAndCompile(){
    save();
    compile();
}

window.completionService = {
    getCompletions: function(filename, pos){
        let position = languageService.getSourceFile(filename).getPositionOfLineAndCharacter(pos.row, pos.column);
        let completions = languageService.getCompletionsAtPosition(filename, position, {includeCompletionsForModuleExports: true});
        return completions.entries.map(function(c){
            return {
                caption: c.name,
                snippet: c.name,
                meta: c.kind,
                score: 100
            }
        });
    }
};

initializeCompiler(()=>saveAndCompile());

let btn = document.getElementById('btn-compile');
btn.addEventListener("click", ()=>saveAndCompile());
