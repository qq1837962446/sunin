// 轮播图
{
    let imgs=document.querySelectorAll(".imgs-box li");
    let da=document.querySelector(".luobo-neikuan");
    let dian=document.querySelectorAll(".lunbo-box li");
    let n=0;
    let dom=function (value,index) {
        n++;
        if(n===imgs.length){
            n=0
        }
        imgs.forEach(function (val,ios) {
            val.classList.remove("active");
            dian[ios].classList.remove("active")
        });
        imgs[n].classList.add("active");
        dian[n].classList.add("active")
    };
    let sj=setInterval(dom,2000);
    da.onmouseover=function () {
        clearInterval(sj);
    };
    da.onmouseout=function () {
        sj=setInterval(dom,2000);
    };
    let prev=document.querySelector(".prev");
    let next=document.querySelector(".next");
    prev.onclick=function () {
        console.log(1);
        n--;
        if(n===-1){
            n=imgs.length-1
        }
        imgs.forEach(function (val,i) {
            val.classList.remove("active");
            dian[i].classList.remove("active")
        });
        imgs[n].classList.add("active");
        dian[n].classList.add("active")
    };
    next.onclick=function () {
        dom()
    };
    dian.forEach(function (val,ion) {
        val.onclick=function () {
            dian.forEach(function (a,b) {
                a.classList.remove("active");
                imgs[b].classList.remove("active");
            });
            val.classList.add("active");
            imgs[ion].classList.add("active");
        }
    })
}
//导航
{
    let dao=document.querySelectorAll(".aside-nr li");
    let topbar = document.querySelector(".topbar");
    let lists=document.querySelectorAll(".lists");
    let flag=true;
    let out=true;
    let mun=true;
    let hs=document.documentElement.clientHeight;
    window.onscroll=function () {
        let hc=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
        lists.forEach(function (val,index) {
            if(hc>500){
                if(out){
                    out=false
                }
                animate(topbar,{top:0},100,function () {
                    mun=true
                })
            }else {
                if(mun){
                    mun=false
                }
                animate(topbar,{top:-50},100,function () {
                    out=true;
                })
            }
            if(hc>=val.offsetTop - hs+100){
                if(!flag){
                    return
                }
                dao.forEach(function(a,b){
                  a.classList.remove("active")
                });
                dao[index].classList.add("active")
            }
        })
    };
    dao.forEach(function (valve,index) {
        valve.onclick=function () {
            flag=false;
            let t=lists[index].offsetTop;
            this.classList.remove("active");
            animate(document.body,{scrollTop:t},100);
            animate(document.documentElement,{scrollTop:t},100,
            function () {
                flag=true;
            })
        }
    });
    let ding=document.querySelector(".aside-di-1");
    ding.onclick=function () {
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0})
    };

}