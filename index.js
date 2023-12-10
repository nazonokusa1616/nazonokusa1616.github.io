var yobi = new Array("日","月","火","水","木","金","土");
var today = new Date();
var week = today.getDay();

var a = 1
//document.writeln( yobi[week] + "曜日です。");

function func1(){
    window.alert("you clicked lionfish " + yobi[week] + " " + a);
    if(a == 0){
        var tate = document.getElementById("tatejima");
        tate.innerHTML = "文章の変更";
    }
}
function func_daisuisou(){
    a = 0;
}

function change_img(){
    document.getElementById("mainimg").src = "./img/IMG_0646.JPG";
    var caption = document.getElementById("maintitle");
    var mes = document.getElementById("mainmes");
    caption.innerHTML = "キャプションの変更";
    mes.innerHTML = "文章の変更";
}

function checkStr(){
  var str = document.getElementById("dat").value;
  if (str=="3344"){
    window.location.href = "./museum.html";
  } else {
    alert("NG");
  }
}
