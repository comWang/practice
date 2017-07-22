
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
var leftDis=[];
var p=document.getElementsByClassName("show-picture");
var box=document.getElementById("showbox");
var index=p.length-1;
window.onload=function ready(){
    var i=0;
    for(i=0;i<=index;i++){
        if(i==index){
            leftDis[index]=-75;
            p[i].style.left=leftDis[index]+"%";
        }
        else{
            leftDis[i]=i*85+10;
            p[i].style.left=leftDis[i]+"%";
        }
    }

}
box.onmouseover=function(){clearInterval(t)};
box.onmouseout=function(){t=setInterval(slide,5000);}
var t=setInterval(slide,5000);
//查看上一张图片
function last(){
    var i;
    for(i=0;i<=index;i++){
        if(leftDis[i]>=(index-1)*85+10){leftDis[i]=-160}
          leftDis[i]+=85;
          p[i].style.left=leftDis[i]+"%";
    }
}  
//查看下一张图片
function next(){
    var i;
    for(i=0;i<=index;i++){
          if(leftDis[i]<-75){leftDis[i]=(index-1)*85+10}
          leftDis[i]-=85;
          p[i].style.left=leftDis[i]+"%";
    }
} 

//图片自动轮播,默认5秒切换一次
function slide(){
    var i=0;
   var j=1;
   //过渡动画的帧数(必须是10的整数倍),越大效果越细腻,建议30~60 
   var count=40;
   var a=setInterval(animation,10);
   //实现图片切换特效
    function animation(){
        if(j<=count){
            for(i=0;i<=index;i++){
                if(leftDis[i]<-75){leftDis[i]=85*(index-1)+10}
               p[i].style.left=leftDis[i]-j*j*85/count/count+"%"; 
            }
           j++;
        }
        else{
            for(i=0;i<=index;i++){
                leftDis[i]-=85;
                p[i].style.left=leftDis[i];
            }
            j=1;
            clearInterval(a);
        }
    }
}


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

//显示二维码
function closeInfo(){
    var block=document.getElementById("info-block");
    var content=document.getElementById("info-content");
    var adTags=document.getElementById("adtags");
    block.style.width=0;
    content.style.marginLeft=0;
    adTags.style.visibility="visible";
}
function info(infoIndex){
    var infoIndex=0;
    var i=0;
    var atten=document.getElementsByClassName("attention");
    var block=document.getElementById("info-block");
    var content=document.getElementById("info-content");
    var adTags=document.getElementById("adtags");
    for(i;i<=2;i++){
       atten[i].style.display="none"
    }
    i=0;
    adTags.style.visibility="hidden";
    atten[infoIndex].style.display="block";
    block.style.width=260+"px";
    content.style.marginLeft=260+"px";
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