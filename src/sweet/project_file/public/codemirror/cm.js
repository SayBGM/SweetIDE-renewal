var editor = CodeMirror.fromTextArea(document.getElementById("codeEditorCPP"), {
    lineNumbers: true,
    matchBrackets: true,
    lineWrapping: true,
    smartIndent: true,
    theme: "mbo",
    indentUnit: 4,
    mode: "text/x-c++src"
});

/*
var textarea = document.getElementById('CodeEditor');

var editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true,
    lineWrapping: true,
    smartIndent: true,
    theme: "mbo",
    val: textarea.value,
    indentUnit: 4,
    mode: "text/x-c++src"
});
*/

/*
static download(){
    var element = document.createElement('a');
    var data = editor.getValue(); //must be fixed

    alert(data);

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data.value));
    element.setAttribute('download', 'test.js');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
*/