document.getElementById("js_txt2").innerHTML='\&lt;html lang=\&quot;en-US\&quot;\&gt;\n  \&lt;head\&gt;\n    \&lt;meta charset=\&quot;utf-8\&quot; /\&gt;\n    \&lt;meta name=\&quot;viewport\&quot; content=\&quot;width=device-width\&quot; /\&gt;\n    \&lt;title\&gt;HTML Compiler\&lt;/title\&gt;\n  \&lt;/head\&gt;\n  \&lt;body\&gt;\n      \&lt;h1\&gt;HTML Compiler\&lt;/h1\&gt;\n    \&lt;img src=\&quot;images/image.jpg\&quot; alt=\&quot;HTML Compiler\&quot; /\&gt;\n  \&lt;/body\&gt;\n\&lt;/html\&gt;';var editor=ace.edit("js_txt2");editor.setTheme("ace/theme/monokai");editor.getSession().setMode("ace/mode/php");editor.setShowPrintMargin(!1);editor.setOptions({autoScrollEditorIntoView:!0,copyWithEmptySelection:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0,useWrapMode:!0,});let status_=!0;setTimeout(function(){status_=!1},1000*40);function execute___(code_){code_=editor.getValue();var content=editor.getSession().getValue();var iframe=document.getElementById('output');console.log(iframe)
iframe=(iframe.contentWindow)?iframe.contentWindow:(iframe.contentDocument.document)?iframe.contentDocument.document:iframe.contentDocument;iframe.document.open();iframe.document.write("");iframe.document.write(content);iframe.document.close()}
var button=document.getElementById('clear');button.addEventListener('click',()=>{editor.getSession().setValue("")});var textElement=editor.getSession().getValue();var copyButton=document.getElementById("copy2");var copyText=(e)=>{editor.selectAll();navigator.clipboard.writeText(editor.getSession().getValue());e.target.setAttribute("tooltip","Copied! ✅")};const resetTooltip=(e)=>{e.target.setAttribute("tooltip","Copy to clipboard")};copyButton.addEventListener("click",(e)=>copyText(e));copyButton.addEventListener("mouseover",(e)=>resetTooltip(e));window.addEventListener('load',()=>{const button=document.querySelector('#clear2');button.addEventListener('click',()=>{})});function getFile(){document.getElementById("upfile").click()}
function sub(obj){var file=document.getElementById("upfile").files[0];if(file){var reader=new FileReader();reader.readAsText(file,"UTF-8");reader.onload=function(evt){editor.getSession().setValue(evt.target.result)}
reader.onerror=function(evt){editor.getSession().setValue("error reading file")}}}
document.getElementById("upfile").addEventListener("change",function(){sub()})
document.getElementById("open_file").addEventListener("click",function(){getFile()})
document.querySelector("#undo").addEventListener('click',function(){editor.undo()})
document.querySelector("#redo").addEventListener('click',function(){editor.redo()})
function download(file,text){var element=document.createElement("a");element.setAttribute("href","data:text/plain;charset=utf-8, "+encodeURIComponent(text));element.setAttribute("download",file);document.body.appendChild(element);element.click();document.body.removeChild(element)}
document.getElementById("save_file").addEventListener("click",function(){var text=editor.getSession().getValue();var filename="php-code.php";download(filename,text)},!1);function unminifyjs($id){var codejs=document.getElementById($id).value;if(isJs(codejs)){code=js_beautify(codejs);codejs.value=code}else{document.getElementById("alertjavascript").innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong> Please Enter Valid JavaScript Format!</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>`;setTimeout(function(){var al=document.querySelectorAll("#alertjavascript .alert")[0];if(al){al.remove()}},5000)}}
jQuery(document).ready(function(){var minLines=1;var startingValue='';for(var i=1;i<minLines;i++){startingValue+='\n'}});function copyFunction(){var copyText=document.getElementById("js_txt2");copyText.select();copyText.setSelectionRange(0,99999999999999999999);editor.selectAll();navigator.clipboard.writeText(editor.getSession().getValue())}
function clearField(){editor.getSession().setValue("")};function download(filename="minifyall_JS.txt"){var text=editor.getSession().getValue();var element=document.createElement('a');element.setAttribute('href','data:text/plain;charset=utf-8, '+encodeURIComponent(text));element.setAttribute('download',filename);document.body.appendChild(element);element.click()}
function validateJava(){var code_=editor.getSession().getValue();if(code_==""){document.getElementById("alertjavascript").innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong> Please Enter Valid Code</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>`;setTimeout(function(){var al=document.querySelectorAll("#alertjavascript .alert")[0];if(al){al.remove()}},5000)}
var xhttp=new XMLHttpRequest();document.getElementById("my_loader").style.display="block";xhttp.onreadystatechange=function(){if(this.readyState==4&&this.status==200){console.log(this.responseText);document.getElementById("my_loader").style.display="none"}};xhttp.open("POST","https://dev.increaserev.com/java_compiler/javacode",!0);xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xhttp.send("codearea="+encodeURIComponent(code_))}
jQuery(function(){jQuery('[data-toggle="tooltip"]').tooltip()})
var element=document.getElementById('save_file');if(typeof(element)!='undefined'&&element!=null){element.addEventListener("click",function(){save_code_modal()})}
var element=document.getElementById('updt');if(typeof(element)!='undefined'&&element!=null){element.addEventListener("click",function(){execute___()})}
;