
// 模态
function modal(){
   var modal=document.getElementById("mymodal");
   var button=document.getElementById("modal-button");
   modal.style.display="block";
   window.onclick = function(event) {
    if (event.target == modal||event.target == button) {
        modal.style.display="none";
    }
}
}
//顶栏菜单切换
function toggleMenu(){
    var h=document.getElementById("nav");
    if(h.className==""){
        h.className+="response";
        h.style.maxHeight=h.scrollHeight+"px"
    }else{
        h.style.maxHeight=60+"px";
        h.className="";
    }
}


//轮播图
var currentIndex=0;
function ready(){
    var p=document.getElementsByClassName("show-picture");
    var box=document.getElementById("showbox");
    var i;
    for(i=0;i<p.length;i++){
        p[i].style.left=i*85+10+"%";
    }
    box.style.left=0+'%';
}
ready();
//查看上一张图片
function last(){
    var p=document.getElementsByClassName("show-picture");
    var box=document.getElementById("showbox");
    var x;
    if(currentIndex<=0){currentIndex=p.length;}
    x=(currentIndex>0)?-(currentIndex-1)*85:p.length+1;
    box.style.left=x+"%";
    currentIndex--;


}  
//查看下一张图片
function next(){
    var p=document.getElementsByClassName("show-picture");
    var box=document.getElementById("showbox");
    var x=(currentIndex<p.length-1)?-(currentIndex+1)*85:0;
    if(currentIndex>=p.length-1){currentIndex=-1;}
    box.style.left=x+"%";
    currentIndex++;
} 




//轮播图描述文字
// var sIndex=0;
// function ShowTitle(){
//     if(sIndex<0){sIndex+=4}x
//     if(sIndex>index){sIndex=0}
//     con[sIndex].style.visibility="visible";
//     con[sIndex].style.bottom=120+"px";
//     sIndex++;
// }
// function HideTitle(){
//         con[sIndex-1].style.bottom=0;
//         con[sIndex-1].style.visibility="hidden";
// }


//平滑回到顶部
window.onscroll=function hideTotop(){
    var totop=document.getElementById("totop");
    if (document.body.scrollTop>300||document.documentElement.scrollTop>300){
        totop.style.display="block";
    }
    else{
        totop.style.display="none";
    }
}

function toTop(){
    if(document.body.scrollTop){var y=document.body.scrollTop}
    else{var y=document.documentElement.scrollTop}
  var i=1;
  var j=y/30;
  var smoothtop=setInterval(smoothMove,10);
    function smoothMove(){
        if(i<=30){
            document.body.scrollTop-=j;
            document.documentElement.scrollTop-=j;
            i++
        }
        else{i=1;clearInterval(smoothtop)}
        
    }
}



//专题活动
 var record=0;
 var ad=0;
var subj=setInterval(subject,3000);

function subject(){
    var tag=document.getElementsByClassName("ad-tag");
    var con=document.getElementsByClassName("ad-content");
    if(ad>=4){ad=0};
    con[record].style.display="none";
    tag[record].style.backgroundColor="";
    tag[ad].style.backgroundColor="#39b262";
    con[ad].style.display="block";
    record=ad;
    ad++;
} 
function fade(j){
    var j;
    var tag=document.getElementsByClassName("ad-tag");
    var con=document.getElementsByClassName("ad-content");
    var adTag=document.getElementById("adtags");
    clearInterval(subj);
    ad=j;
    con[record].style.display="none";
    tag[record].style.backgroundColor="";
    tag[ad].style.backgroundColor="#39b262";
    con[ad].style.display="block";
    record=ad;
    subj=setInterval(subject,3000)
  }
