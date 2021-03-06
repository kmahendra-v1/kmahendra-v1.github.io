
(function($) {
  "use strict";

  // Refresh on browser resize
  $(window).bind('resize', function(e)
  {
    if (window.RT) 
      clearTimeout(window.RT);
    window.RT = setTimeout(function()
    {
      this.location.reload(false); /* false to get page from cache */
    }, 200);
  });
  
})(jQuery);

// Determine if the device a mobile
function IsMobile() { 
  var isMobile = false; //initiate as false
  // device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) 
  { 
    isMobile = true;
  }
  return isMobile;
}

// Generate random number based on current value of index and images array
function NextIndex(index, backgrounds) {  
  index = index % backgrounds.length;      
  return index;
}

// Get random X co-ordinate
function GetRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get width for current screen
function GetWidth() {
  return Math.max(
    document.documentElement["clientWidth"],
    document.body["scrollWidth"],
    document.documentElement["scrollWidth"],
    document.body["offsetWidth"],
    document.documentElement["offsetWidth"]
  );
}

// Get height for current screen
function GetHeight() {
  return Math.max(
    document.documentElement["clientHeight"],
    document.body["scrollHeight"],
    document.documentElement["scrollHeight"],
    document.body["offsetHeight"],
    document.documentElement["offsetHeight"]
  );
}

// Set X coordinate for the dynamic images effect based on screen width
function SetX(currentWidth) {
  if (currentWidth >= 992 && currentWidth <= 1024 ) {
    return GetRandomInt(10,15);    
  }
  else if (currentWidth >= 1024 && currentWidth <= 1250 ) {
    return GetRandomInt(10,150);    
  }
  else if (currentWidth >= 1250) {
    return GetRandomInt(10,300);
  }
}

// Change and display images and positions dynamically
;(function(window,document) {
  var backgrounds = new Array(
      'img/sketches/emma-watson-02.jpg',      
      'img/sketches/john-wick.jpg',
      'img/sketches/gal-gadot.jpg',
      'img/sketches/batman-arkham-city.jpg',
      'img/sketches/elsa.jpg',
      'img/sketches/super-saiyan-goku.jpg',
      'img/sketches/jennifer-lawrence-02.jpg',
      'img/sketches/joker.jpg',
      'img/sketches/arms-of-an-assassin.jpg',
      'img/sketches/cr7.jpg',
      'img/sketches/olivia-wilde-02.jpg',
      'img/sketches/lion-king.jpg'
      );

  var index = 0;
  var isMobileDevice = IsMobile();
  var screenWidth = GetWidth();
  var screenHeight = GetHeight();
  
  var makeDiv = function() {
    var imgHeight = 0;
    var imgWidth = 0;
    var randomNbr = NextIndex(index++, backgrounds);
    var img = new Image();

    img.onload = function() {
      imgHeight = img.naturalHeight;
      imgWidth = img.naturalWidth;

      if (!isMobileDevice && screenWidth >= 992 && screenHeight >= 700) {
        $newdiv = $('<div/>').css({            
          'width': imgWidth,
          'height': imgHeight,
          'opacity': 0.9,
          'background-repeat':'no-repeat',
          'background-image': 'url(' + img.src +')'
        });

        // var posx = (Math.random() * ($(document).width() - imgWidth)).toFixed();
        var posx = 0, posy = 0;
        posx = SetX(screenWidth);
        posy = (Math.random() * ($(document).height() - imgHeight)).toFixed();

        $newdiv.css({
          'position': 'absolute',
          'left': posx + 'px',
          'top': posy + 'px',
          'display': 'none'
        }).appendTo('body').fadeIn(300).delay(2000).fadeOut(300, function() {
          $(this).remove();
          makeDiv();
        });
      }
      //console.log(randomNbr + "       " + "height-" + imgHeight + "    " + "width-" + imgWidth);
    };

    img.src = backgrounds[randomNbr];
  };
  window.addEventListener('load',makeDiv);
})(window,document);
