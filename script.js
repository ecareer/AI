const ls=GEBI("ls")
const rs=GEBI("rs")
const o=GEBI("o")
function ss(sb){$b(sb);$b(o);}
function cs(){$h(ls);$h(rs);$h(o);}
function $h(_o){_o.style.display="none";}
function $b(_o){_o.style.display="block";}
function GEBI(id){return document.getElementById(id);}
function IMA() 
{
    try
    {
        var i=Android.getFromAndroid();
        alert("Try Excecuted "+ i);
    }
    catch
    {
        alert("Catch Excecuted "+ i);
       location.href="https://www.google.com";
    }
}