window.requestAnimFrame = (function(){
  return window.requestAnimationFrame       ||
         function( callback ){
             window.setTimeout(callback, 1000 / 60);
         };
})();

(function clock() {
         var hour = document.getElementById("hour"),
             min = document.getElementById("min"),
             sec = document.getElementById("sec");
  
     (function loop(){
         requestAnimFrame(loop);
         draw();
     })();
     function draw(){
         var now = new Date(),
             then = new Date(now.getDate(),0,0,0),
             diffInMil = (now.getTime() - then.getTime()),
             h = (diffInMil/(1000*60*60)),
             m = (h*60),
             s = (m*60);
       
         sec.style.transform = "rotate("+ (s * 6) + "deg)";
         hour.style.transform = "rotate("+ (h * 30 + (h / 2)) + "deg)";
         min.style.transform = "rotate("+ (m * 6) + "deg)";
     }
})();