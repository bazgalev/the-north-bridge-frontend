function myResponsiveFunc(){
    var nav=document.getElementById("main-nav-list");
    if(nav.className==="main-nav-list"){
        nav.className+=" responsive";
    }else{
        nav.className="main-nav-list";
    }

}