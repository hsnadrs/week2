
// (C) 2000 www.CodeLifter.com
// http://www.codelifter.com
// Free for all users, but leave in this  header
// NS4-6,IE4-6
// Fade effect only in IE; degrades gracefully

// =======================================
// set the following variables
// =======================================

// Set slideShowSpeed (milliseconds)
var slideShowSpeed = 5000

// Duration of crossfade (seconds)
var crossFadeDuration = 3

// Specify the image files
var Pic = new Array() // don't touch this
// to add more images, just continue
// the pattern, adding to the array below

Pic[0] = 'http://www.homecleanz.co.uk/1.jpg'
Pic[1] = 'http://www.homecleanz.co.uk/2.jpg'
Pic[2] = 'http://www.homecleanz.co.uk/3.jpg'
Pic[3] = 'http://www.homecleanz.co.uk/4.jpg'
Pic[4] = 'http://www.homecleanz.co.uk/5.jpg'
Pic[5] = 'http://www.homecleanz.co.uk/6.jpg'
Pic[6] = 'http://www.homecleanz.co.uk/7.jpg'

// =======================================
// do not edit anything below this line
// =======================================

var t
var j = 0
var p = Pic.length

var preLoad = new Array()
for (i = 0; i < p; i++){
   preLoad[i] = new Image()
   preLoad[i].src = Pic[i]
}

function runSlideShow(){
   if (document.all){
      document.images.SlideShow.style.filter="blendTrans(duration=2)"
      document.images.SlideShow.style.filter="blendTrans(duration=crossFadeDuration)"
      document.images.SlideShow.filters.blendTrans.Apply()      
   }
   document.images.SlideShow.src = preLoad[j].src
   if (document.all){
      document.images.SlideShow.filters.blendTrans.Play()
   }
   j = j + 1
   if (j > (p-1)) j=0
   t = setTimeout('runSlideShow()', slideShowSpeed)
}


// was inline script

    
    var memorywidth="450px" //scroller width
    var memoryheight="20px" //scroller height
    var memorybgcolor="#FFFFFF" //scroller background
    var memorypadding="2px" //padding applied to the scroller. 0 for non.
    var borderCSS="border: 1px solid black;" //Border CSS, applied to scroller to give border.
    
    var memoryspeed=2 //Scroller speed (larger is faster 1-10)
    var pauseit=0 //Pause scroller onMousever (0=no. 1=yes)?
    
    var persistlastviewedmsg=0 //should scroller's position persist after users navigate away (1=yes, 0=no)?
    var persistmsgbehavior="onload" //set to "onload" or "onclick".
    
    //Specify the scroller's content (don't delete <nobr> tag)
    //Keep all content on ONE line, and backslash any single quotations (ie: that\'s great):
    
    var memorycontent='<nobr><span style="font: bold 13px Verdana">this website cloned by Hasan Alaidaros</span></nobr>'
    
    
    ////NO NEED TO EDIT BELOW THIS LINE////////////
    var combinedcssTable="width:"+(parseInt(memorywidth)+6)+"px;background-color:"+memorybgcolor+";padding:"+memorypadding+";"+borderCSS+";"
    var combinedcss="width:"+memorywidth+";height:"+memoryheight+";"
    
    var divonclick=(persistlastviewedmsg && persistmsgbehavior=="onclick")? 'onClick="savelastmsg()" ' : ''
    memoryspeed=(document.all)? memoryspeed : Math.max(1, memoryspeed-1) //slow speed down by 1 for NS
    var copyspeed=memoryspeed
    var pausespeed=(pauseit==0)? copyspeed: 0
    var iedom=document.all||document.getElementById
    if (iedom)
    document.write('<span id="temp" style="visibility:hidden;position:absolute;top:-100px;left:-10000px">'+memorycontent+'</span>')
    var actualwidth=''
    var memoryscroller
    
    if (window.addEventListener)
    window.addEventListener("load", populatescroller, false)
    else if (window.attachEvent)
    window.attachEvent("onload", populatescroller)
    else if (document.all || document.getElementById)
    window.onload=populatescroller
    
    function populatescroller(){
    memoryscroller=document.getElementById? document.getElementById("memoryscroller") : document.all.memoryscroller
    memoryscroller.style.left=parseInt(memorywidth)+8+"px"
    if (persistlastviewedmsg && get_cookie("lastscrollerpos")!="")
    revivelastmsg()
    memoryscroller.innerHTML=memorycontent
    actualwidth=document.all? temp.offsetWidth : document.getElementById("temp").offsetWidth
    lefttime=setInterval("scrollmarquee()",20)
    }
    
    function get_cookie(Name) {
    var search = Name + "="
    var returnvalue = ""
    if (document.cookie.length > 0) {
    offset = document.cookie.indexOf(search)
    if (offset != -1) {
    offset += search.length
    end = document.cookie.indexOf(";", offset)
    if (end == -1)
    end = document.cookie.length;
    returnvalue=unescape(document.cookie.substring(offset, end))
    }
    }
    return returnvalue;
    }
    
    function savelastmsg(){
    document.cookie="lastscrollerpos="+memoryscroller.style.left
    }
    
    function revivelastmsg(){
    lastscrollerpos=parseInt(get_cookie("lastscrollerpos"))
    memoryscroller.style.left=parseInt(lastscrollerpos)+"px"
    }
    
    if (persistlastviewedmsg && persistmsgbehavior=="onload")
    window.onunload=savelastmsg
    
    function scrollmarquee(){
    if (parseInt(memoryscroller.style.left)>(actualwidth*(-1)+8))
    memoryscroller.style.left=parseInt(memoryscroller.style.left)-copyspeed+"px"
    else
    memoryscroller.style.left=parseInt(memorywidth)+8+"px"
    }
    
    if (iedom){
    with (document){
    document.write('<table border="0" cellspacing="0" cellpadding="0" style="'+combinedcssTable+'"><td>')
    write('<div style="position:relative;overflow:hidden;'+combinedcss+'" onMouseover="copyspeed=pausespeed" onMouseout="copyspeed=memoryspeed">')
    write('<div id="memoryscroller" style="position:absolute;left:0px;top:0px;" '+divonclick+'></div>')
    write('</div>')
    document.write('</td></table>')
    }
    }
    