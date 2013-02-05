function extractPicture() {
	/*var searchFilter = "(\\[\\{.*?\\}\\])";
	var searchPattern = RegExp(searchFilter, "gi");
	var matchs = document.documentElement.innerHTML.match(searchPattern);
	if (matchs && matchs[0]) {
		console.log(matchs[0]);
		var dataObj= $.parseJSON(matchs[0]);//转换为json对象 
		alert(dataObj.length);//输出root的子对象数量 
	}
	*/
	
	var objectArray = new Array();
	var $items = $('.pic-item');
	console.log("item counts: " + $items.length + "\n");
	$items.each(function() {
		var object = new Object();
		$(object).attr('url', $(this).attr('src'));
		$(object).attr('image', $(this).attr('src'));
		$(object).attr('preview', $(this).attr('src'));
		$(object).attr('id', $(this).attr('pid'));
		$(object).attr('title', $(this).find('.pic-intro a').text());
		$(object).attr('referer', document.location.href);
		var width = $(this).find('.poster-link').css('width');
		if (width) {
			$(object).attr('width', width.substr(0, width.length - 2));
		}
		var height = $(this).find('.poster-link').css('height');
		if (height) {
			$(object).attr('height', height.substr(0, height.length - 2));
		}		
		objectArray.push(object);
	});
	console.log(JSON.stringify(objectArray));
	
}

chrome.extension.onRequest.addListener(function(request, sender, response) {
	switch (request.msg) {
		case 'gather_pictures':
			extractPicture();
			break;		
	}
});

