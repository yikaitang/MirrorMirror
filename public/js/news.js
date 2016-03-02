var contentList;
var start = 0;
var size = 5;
var showDescription = false;

function pullNews() {
  	$.ajax({
         url: "http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
         type: "GET",
         beforeSend: function(xhr){xhr.setRequestHeader('apikey', 'efec469546701e66a980db91f377026a');},
         success: function(msg) { 
         	msg = JSON.parse(msg);
         	contentList = msg.showapi_res_body.pagebean.contentlist;
		rollingTitle();
			console.log('news pulled');
        }
    });
}

function rollingTitle() {
	if (!contentList) {
		return;
	}
	if (start + size == contentList.length) {
		start = 0;
	}
 	var news = "";
 	for (var i = start; i < start + size; i++) {
 		var content = contentList[i];
 		if (showDescription) {
	      	news += content.title + "- " + content.desc + "<br />";
		} else {
			news += content.title + "<br />";
		}
 	}
 	start += 1;
	
 	$('#news').html(news);
}

// Pull news every 2 minutes
pullNews(false);
setInterval(function () {
   	pullNews(false);
},120*1000);

// Rollover title every 15 seconds;	
setInterval(function () {
   	rollingTitle();
}, 10*1000)
