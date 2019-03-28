document.body.onload = function(){
  setTimeout(function() {
    var preloader = document.getElementById('loader');
    if( !preloader.classList.contains('done') )
    {
      preloader.classList.add('done');
    }
  }, 500)
}

var gn = new GyroNorm();

$(function() {

  boxRollovers();
});

function boxRollovers() {
  if (matchMedia("(min-width: 750px)").matches) {
  $selector = $("div");
  XAngle = 0;
  YAngle = 0;
  Z = -200;

  $selector.on("mousemove", function(e) {
    var $this = $(this);
    var XRel = e.pageX - $this.offset().left;
    var YRel = e.pageY - $this.offset().top;
    var width = $this.width();

    YAngle = -(0.5 - (XRel / width)) * 40;
    XAngle = (0.5 - (YRel / width)) * 40;
    updateView($this.children(".logo"));
  });

  $selector.on("mouseleave", function() {
    oLayer = $(this).children(".logo");
    oLayer.css({
      "transform": "perspective(5000px) translateX(-50%) translateY(-55%) translateZ(-200px) rotateX(0deg) rotateY(0deg)",
      "transition": "all .25s ease 0s",
      "-webkit-transition": "all .25s ease 0s"
    });
    oLayer.find("strong").css({
      "transform": "perspective(5000px) translateX(-50%) translateY(-55%) translateZ(-200px) rotateX(0deg) rotateY(0deg)",
      "transition": "all .25s ease 0s",
      "-webkit-transition": "all .25s ease 0s"
    });
  });
}
}

function updateView(oLayer) {
  oLayer.css({
    "transform": "perspective(5000px) translateX(-50%) translateY(-55%) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)",
    "transition": "none",
    "-webkit-transition": "none"
  });
  oLayer.find("strong").css({
    "transform": "perspective(5000px) translateX(-50%) translateY(-55%) translateZ(" + Z + "px) rotateX(" + (XAngle / 0.66) + "deg) rotateY(" + (YAngle / 0.66) + "deg)",
    "transition": "none",
    "-webkit-transition": "none"
  });
}


$(function() {
  if (matchMedia('all and (orientation: portrait)').matches) {
     gn.init().then(function() {
       gn.start(function(data) {
         console.log(data.do.alpha);
         $('.logo').css({
           "transform": "perspective(5000px) translateX(-50%) translateY(-55%) translateZ(" + (data.do.alpha - 300) + "px) rotateX(" + (data.do.beta - 40) + "deg) rotateY(" + (data.do.gamma * -1) + "deg)",
           "transition": "none",
           "-webkit-transition": "none"
         });
       });
     }).catch(function(e) {});
   }
 })
