
console.log("initializing example");
function getSrc(){
    return document.getElementById("source").innerText;
}

function output(o){
    console.log(o);
}

const logPrefix = "TS:";
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

// load scripts

var oReq = new XMLHttpRequest();

oReq.onload = function(e) {
    var response = oReq.responseText; // not responseText
    languageServiceHost.addFile("lib.d.ts", response);
    console.log("base library loaded");

    languageServiceHost.addFile("userscript.ts", getSrc());
    output(languageService.getSemanticDiagnostics("userscript.ts"));
    output(languageService.getEmitOutput("userscript.ts"));

}
oReq.open("GET", "lib/lib.d.ts");
oReq.send();
