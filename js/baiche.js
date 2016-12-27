//数组forEach方法补丁
Array.prototype.forEach = function(callback){
	var a = 0,
		len = this.length;
	while(a < len){
		callback(this[a], a++, this);
	}
};
//数组map方法补丁
Array.prototype.map = function(callback){
	var a = 0,
		len = this.length,
		result = [];
	while(a < len){
		result.push(callback(this[a], a++, this));
	}
	return result;
};
//封装banner插件
function createBanner(option){
	var data = option.data,
		dataLen = data.length,
		element = document.getElementById(option.element),
		fragment = document.createDocumentFragment(),
		a = 0,
		images = data.map(function(item){
			return fragment.appendChild(createImage(item)); 
		}),
		timer = createTimer();
	function createImage(option){
		var a = document.createElement("a");
		a.href = option.href;
		a.title = option.title;
		a.style.backgroundImage = "url(" + option.url + ")";
		return a;
	}
	function createTimer(){
		return setInterval(function(){
			var _a = a;
			a = a >= dataLen - 1 ? 0 : a + 1;
			images[_a].className = "";
			images[a].className = "current";
		}, 4000);
	}
	function createButton(className){
		var i = document.createElement("i");
		i.className = "icon " + className;
		i.onclick = function(){
			clearInterval(timer);
			timer = createTimer();
			var _a = a;
			if(className === "previous"){
				a = a > 0 ? a - 1 : dataLen - 1;
			}else{
				a = a >= dataLen - 1 ? 0 : a + 1;
			}
			images[_a].className = null;
			images[a].className = "current";
		};
		return i;
	}
	images[a].className = "current";
	//创建左右按钮
	fragment.appendChild(createButton("previous"));
	fragment.appendChild(createButton("next"));
	element.appendChild(fragment);
}
var bannerData = [
	{
		title : "广告",
		href : "/ad",
		url : "./image/banner1.jpg"
	},
	{
		title : "大风车",
		href : "/dfc",
		url : "./image/banner2.jpg"
	},
	{
		title : "车牛",
		href : "/cn",
		url : "./image/banner3.jpg"
	}
];
createBanner({
	element : "banner",
	data : bannerData
});
//车展览
function createBox(option){
	var a = document.createElement("a");
	a.style.backgroundImage = "url(" + option.bigUrl + ")";
	a.href = option.href;
	a.innerHTML = "<h2>" + option.title + "</h2>"
				+ "<p>" + option.label + "</p>"
				+ "<img src=\"" + option.smallUrl + "\" />";
	return a;
}
var exhibitionData = [
	{
		href : "/a",
		bigUrl : "./image/exhibition.jpg",
		smallUrl : "./image/650D5.png",
		title : "豪车不止BBA",
		label : "德系三架马车，是时候退位让贤啦"
	},
	{
		href : "/a",
		bigUrl : "./image/FD800B.jpg",
		smallUrl : "./image/748E.png",
		title : "百年大厂杰作",
		label : "时间在流逝，品质永流传！"
	},
	{
		href : "/a",
		bigUrl : "./image/84145.jpg",
		smallUrl : "./image/F058.png",
		title : "便宜才是王道",
		label : "谁说便宜没好车？"
	},
	{
		href : "/a",
		bigUrl : "./image/1A40C.jpg",
		smallUrl : "./image/B1C0FB.png",
		title : "驾校毕业生",
		label : "那些年，我们练过的普桑和捷达。"
	},
	{
		href : "/a",
		bigUrl : "./image/45AE47.jpg",
		smallUrl : "./image/2BF2D.png",
		title : "明星也抠门",
		label : "明星都买二手车了你还等什么"
	},
	{
		href : "/a",
		bigUrl : "./image/FD800B.jpg",
		smallUrl : "./image/E4D.png",
		title : "全能的大玩具",
		label : "越野帮手、四驱利器"
	}
];
var fragment = document.createDocumentFragment();
exhibitionData.forEach(function(item){
	fragment.appendChild(createBox(item));
});
document.getElementById("exhibition").appendChild(fragment);
document.getElementById("top").onclick = function(){
	scrollTo(0, 0);
};
var topNav = document.getElementById("topNav"),
	topNavClassName = topNav.className;
onscroll = function(){
	topNav.className = topNavClassName + (scrollY >= 50 ? " fixed" : " normal");
};