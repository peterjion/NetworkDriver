//创建轮播图
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
var topNav = document.getElementById("topNav"),
	topNavClassName = topNav.className;
onscroll = function(){
	topNav.className = topNavClassName + (document.documentElement.scrollTop || scrollY >= 50 ? " fixed" : " normal");
};