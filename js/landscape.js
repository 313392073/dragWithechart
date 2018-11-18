var width = document.documentElement.clientWidth;
var height =  document.documentElement.clientHeight;

	if( width < height ){
		$print =  $('#print');
		$print.width(height);
		$print.height(width);
		$print.css('top',  (height-width)/2 );
		$print.css('left',  0-(height-width)/2 );
		$print.css('transform' , 'rotate(90deg)');
		$print.css('transform-origin' , '50% 50%');
	}
		
	var evt = "onorientationchange" in window ? "orientationchange" : "resize";
	window.addEventListener(evt, function() {
		var width = document.documentElement.clientWidth;
		var height =  document.documentElement.clientHeight;
		console.log(height)
		$print =  $('#print');
		if( width > height ){
			$print.width(width);
			$print.height(height);
			$print.css('top',  0 );
			$print.css('left',  0 );
			$print.css('transform' , 'none');
			$print.css('transform-origin' , '50% 50%');
		}else{
			$print.width(height);
			$print.height(width);
			$print.css('top',  (height-width)/2 );
			$print.css('left',  0-(height-width)/2 );
			$print.css('transform' , 'rotate(90deg)');
			$print.css('transform-origin' , '50% 50%');
		}
	}, false);
	
	//左侧菜单展开与折叠方法	
  $('.switch').click(function(){
  	var parent=$(this).parent('.layout-left');
  	if(parent.hasClass("close")){
  		parent.removeClass("close");
  	}else{
  		parent.addClass("close");
  	}
  })    