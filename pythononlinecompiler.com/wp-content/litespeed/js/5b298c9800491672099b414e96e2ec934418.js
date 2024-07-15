var editor=ace.edit("js_txt2");var demoCode=`from turtle import *
import turtle
import time
import math

ws = turtle.Screen()
ws.bgcolor("black")
ws.setup(width=500, height=500)
ws.tracer(0)
tur = turtle.Turtle()
tur.hideturtle()
tur.speed(0)
tur.pensize(3)
def draw_clock(hour, min, second, tur):
    tur.up()
    tur.goto(0, 210)
    tur.setheading(180)
    tur.color("red")
    tur.pendown()
    tur.circle(210)
    tur.up()
    tur.goto(0, 0)
    tur.setheading(90)
    for _ in range(12):
        tur.fd(190)
        tur.pendown()
        tur.fd(20)
        tur.penup()
        tur.goto(0, 0)
        tur.rt(30)
   
    clockhands = [("yellow", 80, 12), ("green", 150, 60), ("blue", 110, 60)]
    timeset = (hour, min, second)
    for hand in clockhands:
        timepart = timeset[clockhands.index(hand)]
        angle = (float(timepart) / hand[2])*360
        tur.penup()
        tur.goto(0, 0)
        tur.color(hand[0])
        tur.setheading(90)
        tur.rt(angle)
        tur.pendown()
        tur.fd(hand[1])
while True:
    hour = int(time.strftime("%I"))
    min = int(time.strftime("%M"))
    second = int(time.strftime("%S"))
    draw_clock(hour, min, second, tur)
    ws.update()
    time.sleep(1)
    tur.clear()
#window.mainloop()`;editor.getSession().setValue(demoCode);function escapeRegExp(string){return string.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
document.getElementById("sidebarbutton").addEventListener("click",function(){var elem=document.getElementById("sidebarbutton");elem.classList.toggle("show");if(!elem.classList.contains("show")){openNav()}else{closeNav2()}});function openNav(){document.getElementById("mySidebar").style.width="250px"}
function closeNav2(){document.getElementById("mySidebar").style.width="0"}
function closeNav(){document.getElementById("mySidebar").style.width="0";var elem=document.getElementById("sidebarbutton");elem.classList.toggle("show")}
editor.getSession().selection.on('changeCursor',function(e){document.getElementById("mySidebar").style.width="0";var elem=document.getElementById("sidebarbutton");elem.classList.add("show")});function replaceAll(str,find,replace){return str.replace(new RegExp(escapeRegExp(find),'g'),replace)}
editor.getSession().setMode("ace/mode/python");editor.setOptions({autoScrollEditorIntoView:!0,copyWithEmptySelection:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0,useWrapMode:!0,});var text=editor.getSession().getValue();var range=editor.selectAll();text=replaceAll(text,"Ã¢â‚¬Å“",'"');text=replaceAll(text,"Ã¢â‚¬Â",'"');editor.getSession().setValue(text);window.addEventListener('load',()=>{const button=document.querySelector('#clear');button.addEventListener('click',()=>{editor.getSession().setValue("")})});var textElement=editor.getSession().getValue();var copyButton=document.getElementById("copy");var copyText=(e)=>{editor.selectAll();navigator.clipboard.writeText(editor.getSession().getValue());e.target.setAttribute("tooltip","Copied! Ã¢Å“â€¦")};const resetTooltip=(e)=>{e.target.setAttribute("tooltip","Copy to clipboard")};if(typeof(copyButton)!='undefined'&&copyButton!=null){copyButton.addEventListener("click",(e)=>copyText(e));copyButton.addEventListener("mouseover",(e)=>resetTooltip(e))}
window.addEventListener('load',()=>{const button=document.querySelector('#clear2');if(typeof(button)!='undefined'&&button!=null){button.addEventListener('click',()=>{document.querySelector('#output').value=""})}});function getFile(){document.getElementById("upfile").click()}
function sub(e){var file=e.target.files[0];if(!file){return}
var reader=new FileReader();reader.onload=function(e){var contents=e.target.result;displayContents(contents)};reader.readAsText(file)}
function displayContents(contents){var element=document.getElementById('file-content');editor.getSession().setValue(contents)}
document.getElementById("upfile").addEventListener("change",function(e){sub(e)})
document.getElementById("open_file").addEventListener("click",function(){getFile()})
function download(content,mimeType,filename){content=editor.getSession().getValue();mimeType=".py";filename="python-code.py";const a=document.createElement('a')
const blob=new Blob([content],{type:mimeType})
const url=URL.createObjectURL(blob)
a.setAttribute('href',url)
a.setAttribute('download',filename)
a.click()}
document.querySelector("#undo").addEventListener('click',function(){editor.undo()})
document.querySelector("#redo").addEventListener('click',function(){editor.redo()})
document.getElementById("save_file").addEventListener("click",function(){var text=editor.getSession().getValue();var filename="Python.py";download(filename,text)},!1);function unminifyjs($id){var codejs=document.getElementById($id).value;if(isJs(codejs)){code=js_beautify(codejs);codejs.value=code}else{document.getElementById("alertjavascript").innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong> Please Enter Valid JavaScript Format!</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">Ãƒâ€”</span>
            </button>
          </div>`;setTimeout(function(){var al=document.querySelectorAll("#alertjavascript .alert")[0];if(al){al.remove()}},5000)}}
jQuery(document).ready(function(){var minLines=1;var startingValue='';for(var i=1;i<minLines;i++){startingValue+='\n'}});function copyFunction(){var copyText=document.getElementById("js_txt2");copyText.select();copyText.setSelectionRange(0,99999999999999999999);editor.selectAll();navigator.clipboard.writeText(editor.getSession().getValue())}
function clearField(){editor.getSession().setValue("")};var inputarray=[];function clearOutput(){var input=editor.getSession().getValue();var output=document.getElementById("output");var lastRow=null;if(input){var len=output.innerHTML.split("<br>").length;lastRow=output.innerHTML.split("<br>")[len-1].split("<")[0]}
output.innerHTML="";if(input){output.innerHTML=lastRow;output.appendChild(input);input.focus()}}
function outf(text){var mypre=document.getElementById("output");mypre.innerHTML=mypre.innerHTML+text}
function inputf(prompt){return new Promise(function(resolve,reject){})}
function builtinRead(x){if(Sk.builtinFiles===undefined||Sk.builtinFiles.files[x]===undefined)
throw "File not found: '"+x+"'";return Sk.builtinFiles.files[x]}
function cck(name,value,days){localStorage.setItem(name,value);return!1;var expires="";if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toUTCString()}document.cookie=name+"="+(value||"")+expires+"; path=/"}
function gck(name){return localStorage.getItem(name);var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length)}return null}
function eck(name){document.cookie=name+'=; Path=/; Expires=Thu, 30 Jan 1950 00:00:01 GMT;'}
var pocck="POC";function validatePython(){var code_=editor.getSession().getValue();if(code_==""){if(code_.includes("plt.show()")||code_.includes("pyplot.show()")){code_=code_.replace("plt.show()","plt.show()plt.savefig('myimg.jpg')");code_=code_.replace("pyplot.show()","plt.show()pyplot.savefig('myimg.jpg')")}
document.getElementById("alertjavascript").innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong> Please Enter Valid Code</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">Ãƒâ€”</span>
            </button>
          </div>`;setTimeout(function(){var al=document.querySelectorAll("#alertjavascript .alert")[0];if(al){al.remove()}},5000)}
var poc=gck(pocck);if(poc){var ckc=poc;var myArr=JSON.parse(ckc);myArr.push(code_);cck(pocck,JSON.stringify(myArr),1)}else{var myArray=[];myArray[0]=code_;console.log(JSON.stringify(myArray));cck(pocck,JSON.stringify(myArray),1)}
if(code_.includes("from turtle import *")||code_.includes("import turtle")){document.getElementById("output").style.display="none";document.getElementById("mycanvas").style.display="block";var outputElem=document.getElementById("outputElem");if(typeof(outputElem)!='undefined'&&outputElem!=null){outputElem.remove();document.getElementById('inputarea').value=""}
code_=code_.replace();var prog=code_;var mypre=document.getElementById("output");mypre.innerHTML='';Sk.pre="output";Sk.configure({inputfun:inputf,inputfunTakesPrompt:!0,output:outf,read:builtinRead});(Sk.TurtleGraphics||(Sk.TurtleGraphics={})).target='mycanvas';var myPromise=Sk.misceval.asyncToPromise(function(){return Sk.importMainWithBody("<stdin>",!1,prog,!0)});myPromise.then(function(mod){},function(err){console.log(err.toString())})}else{var source_code=code_;if(source_code.indexOf('input(')>-1){var elem=document.querySelectorAll(".pyinputdiv");for(var i=0;i<elem.length;i++){elem[i].remove()}
inputarray=[];var inputElem=source_code.split("input(");console.log(inputElem);var c=0;for(var i=1;i<inputElem.length;i++){var inputElem2=inputElem[i].split(")")[0];console.log(inputElem2);console.log(i);var a2=[];a2.text=inputElem2;a2.input="";a2.status="false";inputarray.push(a2);inputarray[c]=a2;c++}
console.log(inputarray);inputcreat();return!1}else{var outputElem=document.getElementById("outputElem");if(typeof(outputElem)!='undefined'&&outputElem!=null){outputElem.remove();document.getElementById('inputarea').value=""}}}}
function inputcreat(){if(inputarray.length!=0){var cel=document.querySelectorAll(".pyoutputinput");for(var i=0;i<cel.length;i++){cel[i].style.pointerEvents="none"}
var ct=!0;for(var i=0;i<inputarray.length;i++){var array_=inputarray[i];if(array_.status=="false"){ct=!1;var a2=[];a2.text=array_.text;a2.input="";a2.status="true";inputarray[i]=a2;console.log(array_);createTextBox(array_.text);break}}
console.log(inputarray);if(ct){}}else{}}
function createTextBox($val){var createTextBox=document.createElement("div");createTextBox.setAttribute("class","pyinputdiv");var x=document.createElement("INPUT");x.setAttribute("type","text");x.setAttribute("value","");x.setAttribute("class","pyoutputinput");var x2=document.createElement("LABEL");x2.innerHTML=$val;createTextBox.appendChild(x2);createTextBox.appendChild(x);document.getElementById("output").style.display="block";document.getElementById("mycanvas").style.display="none";document.getElementById("output").innerHTML="";var outputElem=document.getElementById('outputElem');if(outputElem!=null){}
if(typeof(outputElem)!='undefined'&&outputElem!=null){var list=document.getElementById("outputElem");list.appendChild(createTextBox)}else{var outputElem=document.createElement("div");outputElem.setAttribute("class","outputElem");outputElem.setAttribute("id","outputElem");var list=document.getElementById("output");list.parentNode.insertBefore(outputElem,list);var list=document.getElementById("outputElem");list.appendChild(createTextBox)}
x.focus();x.addEventListener("keyup",function(event){if(event.key==="Enter"){inputcreat();x.blur()}})}
var compileCodes=!0;function compileCode(){compileCodes=!1;document.getElementById("updt").setAttribute("disabled",!0);var textarea=document.getElementById('inputarea');var str=editor.getSession().getValue();var elem=document.querySelectorAll(".pyoutputinput");for(var i=0;i<elem.length;i++){textarea.value+=elem[i].value+"\n";str=str.replace(/input\(([^)]+)\)/s,'"'+elem[i].value+'"')}
var run_data={source:str,lang:"python",input:document.getElementById('inputarea').value,};var code_=editor.getSession().getValue();if(code_.includes("plt.show()")||code_.includes("pyplot.show()")){code_=code_.replace("plt.show()","plt.show()plt.savefig('myimg.jpg')");code_=code_.replace("pyplot.show()","plt.show()pyplot.savefig('myimg.jpg')")}
document.getElementById("output").style.display="block";document.getElementById("mycanvas").style.display="none";var element=document.getElementById('htmlpage2');if(typeof(element)!='undefined'&&element!=null){element.remove()}
var xhttp=new XMLHttpRequest();document.getElementById("my_loader").style.display="block";xhttp.onreadystatechange=function(){if(this.readyState==4&&this.status==200){console.log(this.responseText);document.getElementById("updt").removeAttribute("disabled");compileCodes=!0;if(code_.includes("plt.show()")||code_.includes("pyplot.show()")){var xhttp2=new XMLHttpRequest();xhttp2.onreadystatechange=function(){var iframe=document.getElementById("output");if(this.readyState==4&&this.status==200){var url="data:text/html;charset=base64,";var vHTML=this.responseText;url+=vHTML;var ifrm=document.createElement("iframe");ifrm.setAttribute("src","http://google.com/");ifrm.setAttribute("id","htmlpage2");ifrm.setAttribute("class",iframe.classList);ifrm.setAttribute("style",iframe.getAttribute("style"));var element=document.getElementById('htmlpage2');if(typeof(element)!='undefined'&&element!=null){element.remove()}
iframe.parentNode.insertBefore(ifrm,iframe.nextSibling);var vPage=document.getElementById("htmlpage2");vPage.src=url;iframe.style.display="none";document.getElementById("my_loader").style.display="none";document.getElementById("htmlpage2").style.display="block"}};xhttp2.open("POST","https://dev.increaserev.com/python_validator/myimg",!0);xhttp2.setRequestHeader("Content-type","application/x-www-form-urlencoded");xhttp2.send("")}else{var b=this.responseText;var a=b.replace(/\\r\\n/g,"<br />");a=a.replace(/home\/justcompilers\/java_compiler\//g,"<br />");var pt=0;var outputElem=document.getElementById("outputElem");if(typeof(outputElem)!='undefined'&&outputElem!=null){pt=outputElem.offsetHeight}
console.log(pt);document.getElementById("output").innerHTML=a;document.getElementById("output").style.paddingTop=pt+"px";document.getElementById("my_loader").style.display="none"}}else{}};xhttp.open("POST","https://execute.pythonvalidator.com/run2/",!0);xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");var abc="Python";xhttp.send("source="+encodeURIComponent(str)+"&lang="+abc+"&input="+document.getElementById('inputarea').value)}
function compileCode2(){compileCodes=!1;document.getElementById("updt").setAttribute("disabled",!0);var textarea=document.getElementById('inputarea');var str=editor.getSession().getValue();var elem=document.querySelectorAll(".pyoutputinput");for(var i=0;i<elem.length;i++){textarea.value+=elem[i].value+"\n";str=str.replace(/input\(([^)]+)\)/s,'"'+elem[i].value+'"')}
var run_data={source:str,lang:"python",input:document.getElementById('inputarea').value,};var code_=editor.getSession().getValue();if(code_.includes("plt.show()")||code_.includes("pyplot.show()")){code_=code_.replace("plt.show()","plt.show()plt.savefig('myimg.jpg')");code_=code_.replace("pyplot.show()","plt.show()pyplot.savefig('myimg.jpg')")}
document.getElementById("output").style.display="block";document.getElementById("mycanvas").style.display="none";var element=document.getElementById('htmlpage2');if(typeof(element)!='undefined'&&element!=null){element.remove()}
var xhttp=new XMLHttpRequest();document.getElementById("my_loader").style.display="block";xhttp.onreadystatechange=function(){if(this.readyState==4&&this.status==200){console.log(this.responseText);document.getElementById("updt").removeAttribute("disabled");compileCodes=!0;if(code_.includes("plt.show()")||code_.includes("pyplot.show()")){var xhttp2=new XMLHttpRequest();xhttp2.onreadystatechange=function(){var iframe=document.getElementById("output");if(this.readyState==4&&this.status==200){var url="data:text/html;charset=base64,";var vHTML=this.responseText;url+=vHTML;var ifrm=document.createElement("iframe");ifrm.setAttribute("src","http://google.com/");ifrm.setAttribute("id","htmlpage2");ifrm.setAttribute("class",iframe.classList);ifrm.setAttribute("style",iframe.getAttribute("style"));var element=document.getElementById('htmlpage2');if(typeof(element)!='undefined'&&element!=null){element.remove()}
iframe.parentNode.insertBefore(ifrm,iframe.nextSibling);var vPage=document.getElementById("htmlpage2");vPage.src=url;iframe.style.display="none";document.getElementById("my_loader").style.display="none";document.getElementById("htmlpage2").style.display="block"}};xhttp2.open("POST","https://dev.increaserev.com/python_validator/myimg",!0);xhttp2.setRequestHeader("Content-type","application/x-www-form-urlencoded");xhttp2.send("")}else{var b=this.responseText;var a=b.replace(/\\r\\n/g,"<br />");var pt=0;var outputElem=document.getElementById("outputElem");if(typeof(outputElem)!='undefined'&&outputElem!=null){pt=outputElem.offsetHeight}
console.log(pt);document.getElementById("output").innerHTML=a;document.getElementById("output").style.paddingTop=pt+"px";document.getElementById("my_loader").style.display="none"}}};xhttp.open("POST","https://dev.increaserev.com/java_compiler/run/",!0);xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");var abc="Python";xhttp.send("source="+encodeURIComponent(str)+"&lang="+abc+"&input="+document.getElementById('inputarea').value)}
jQuery(function(){jQuery('[data-toggle="tooltip"]').tooltip()});var element=document.getElementById('save_file');if(typeof(element)!='undefined'&&element!=null){element.addEventListener("click",function(){save_code_modal()})}
var element=document.getElementById('updt');if(typeof(element)!='undefined'&&element!=null){element.addEventListener("click",function(){validatePython()})}
validatePython();function fresetCompiler(){editor.getSession().setValue(demoCode)}
var resetCompiler=document.getElementById('resetCompiler');if(typeof(resetCompiler)!='undefined'&&resetCompiler!=null){resetCompiler.addEventListener("click",function(){fresetCompiler()})}
function py_fullscreen_open(){var elem=document.getElementById("mymain");if(elem.requestFullscreen){elem.requestFullscreen()}else if(elem.webkitRequestFullscreen){elem.webkitRequestFullscreen()}else if(elem.msRequestFullscreen){elem.msRequestFullscreen()}}
function py_fullscreen_close(){var elem=document.getElementById("mymain");if(document.exitFullscreen){document.exitFullscreen()}else if(document.webkitExitFullscreen){document.webkitExitFullscreen()}else if(document.msExitFullscreen){document.msExitFullscreen()}}
function ffullscreenbutton(){var elem=document.getElementById("mymain");elem.classList.toggle("fullscreenactive");if(!elem.classList.contains("fullscreenactive")){}else{}}
var fullscreenbutton=document.getElementById('fullscreenbutton');if(typeof(fullscreenbutton)!='undefined'&&fullscreenbutton!=null){fullscreenbutton.addEventListener("click",function(){ffullscreenbutton()})}
var fullscreenbutton2=document.getElementById('fullscreenbutton2');if(typeof(fullscreenbutton2)!='undefined'&&fullscreenbutton2!=null){fullscreenbutton2.addEventListener("click",function(){ffullscreenbutton()})}
var cursel=2;document.addEventListener("keydown",e=>{if(e.key=="F11"){e.preventDefault();ffullscreenbutton()}
if(e.keyCode==79&&e.ctrlKey==!0){e.preventDefault();getFile()}
if(e.keyCode==83&&e.ctrlKey==!0){e.preventDefault();var text=editor.getSession().getValue();var filename="Python.py";download(filename,text)}
if(e.keyCode==90&&e.ctrlKey==!0){e.preventDefault();editor.undo()}
if(e.keyCode==89&&e.ctrlKey==!0){e.preventDefault();editor.redo()}
if(e.keyCode==67&&e.ctrlKey==!0&&e.shiftKey==!0){e.preventDefault();editor.selectAll();navigator.clipboard.writeText(editor.getSession().getValue())}
if(e.keyCode==46){e.preventDefault();editor.getSession().setValue("")}
if(e.keyCode==83&&e.altKey==!0){e.preventDefault();document.getElementById("share-icon").click()}
if(e.keyCode==82&&e.ctrlKey==!0&&e.shiftKey==!1){e.preventDefault();document.getElementById("resetCompiler").click()}
if(e.keyCode==116&&e.ctrlKey==!1){e.preventDefault();validatePython()}
if(e.keyCode==107&&e.ctrlKey==!0){e.preventDefault();if(cursel>=5){cursel=5;document.getElementById("fontSize").selectedIndex=5}else{cursel=cursel+1;document.getElementById("fontSize").selectedIndex=cursel}
console.log(cursel);ffontSize()}
if(e.keyCode==109&&e.ctrlKey==!0){e.preventDefault();if(cursel<=0){cursel=0;document.getElementById("fontSize").selectedIndex=0}else{cursel=cursel-1;document.getElementById("fontSize").selectedIndex=cursel}
console.log(cursel);ffontSize()}
if(e.keyCode==1029){e.preventDefault();if(cursel>=4){cursel=4;document.getElementById("fontSize").selectedIndex=4}else{cursel=cursel+1;document.getElementById("fontSize").selectedIndex=cursel}}});function ffontSize(){var val=document.getElementById("fontSize").value;console.log(val);editor.setFontSize(val);document.getElementById("js_txt2").style.fontSize=val+"px !important";document.getElementById("js_txt2").style.fontSize=val+"px"}
var fontSize=document.getElementById('fontSize');if(typeof(fontSize)!='undefined'&&fontSize!=null){fontSize.addEventListener("change",function(){ffontSize()})}
function gH(){var poc=gck(pocck);if(poc){var ckc=poc;var myArr=JSON.parse(ckc);myArr.reverse();var mytabs="";var mycons="";var cc1=1;for(var i=0;i<5;i++){if(myArr[i]){var ac="";var ac2="";if(i==0){ac="active";ac2="show active"}
mytabs+='<li class="nav-item" role="presentation"><button class="btn-lg nav-link '+ac+'" id="exm_'+i+'" data-bs-toggle="tab" data-bs-target="#exms_'+i+'" type="button" role="tab" aria-controls="home" aria-selected="true">Compile History '+cc1+'</button></li>';mycons+='<div class="tab-pane fade '+ac2+'" id="exms_'+i+'" role="tabpanel" aria-labelledby="home-tab"><div class="codeH"><pre>'+myArr[i]+'</pre></div></div>';cc1++}}
document.getElementById("myTab").innerHTML=mytabs;document.getElementById("myTabContent").innerHTML=mycons}}
var gHf_=document.getElementById('gH_');if(typeof(gHf_)!='undefined'){gHf_.addEventListener("click",function(){gH()})}
function hComp(){var elem=document.querySelector(".tab-pane.fade.active.show pre").innerHTML;editor.getSession().setValue(elem);validatePython();document.getElementById("mypopupClose").click()}
;