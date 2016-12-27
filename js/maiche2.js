//第一个
//获取顶部导航的ID名,通过声明变量将这个结果保存起来
//声明顶部的样式的class名等于声明的变量名
//定义顶部导航的类名等于顶部的类名加上判断后的类名,fixed或者是normal.
//定义鼠标的滚动为一个方法
var topNav = document.getElementById("topNav"),
	topNavClassName = topNav.className;
	onscroll = function(){
		topNav.className = topNavClassName + (document.documentElement/*相当于html*/.scrollTop || scrollY >= 50 ? " fixed" : " normal");
	};

//第二个
//定义鼠标点击top这个id的时候所触发的点击事件,点击回到滚动条上0,0的位置
	document.getElementById("top").onclick=function(){
	scroll(0,0);
}


// IE8及以下浏览器不支持
//数组forEach方法补丁
Array.prototype.forEach = function(callback){
	var a = 0,
		len = this.length;
	while(a < len){
		callback(this[a], a++, this);
	}
};
//数组map方法;补丁
Array.prototype.map = function(callback){
	var a = 0,
		len = this.length,
		result = [];
	while(a < len){
		result.push(callback(this[a], a++, this));
	}
	return result;
};
//数组filter方法补丁
Array.prototype.filter = function(callback){
	var a = -1,
		len = this.length,
		result = [];
	while(++a < len){
		callback(this[a], a, this) && result.push(this[a]);
	}
	return result;
};




//添加右侧24条车子的编辑
//创建一个方法,将html右侧页面中需要的标签通过js中的dom节点的方式添加进去
//然后将右侧页面中需要的数据用数组的方式输入,可从原网站扒数据,也可自己查看网页元素,手动输入
function createBox(option){
	var box = document.createElement("div");//创建一个空的div
	box.className = "box";//设置div的class标签名为box
	box.style.backgroundImage = "url(" + option.url + ")";//设置div的背景为一张插入的背景图片
	box.innerHTML = [//往class名为box里面添加内容,将子元素添加进去,已数组的形式添加进去,逗号就相当于+号,也是拼接符,然后最后再用数组的join属性方法转换成字符串
		"<div class=\"detail\">",
		"<a href=\"",
		option.id,
		"\">",
		option.title,
		"</a>",
		"<p class=\"price\">",
		"￥",
		option.price,
		"万</p>",
		"<p class=\"content\">",
		function(){//使用方法来转换时间,匿名函数自执行来获得返回的值
			var date = new Date(option.lisenceTime);//将下面遍历得到的时间戳当做属性传入Date方法,获取得到时间,用变量存起来
			return [
				date.getFullYear(),//获取到刚刚存储的时间的年份
				"/",
				date.getMonth() + 1//因为月份在js里面是从0开始的 0 一月 1二月 。。。 11 十二月,所以要想获得准确的月份需要加1
			].join("");//最后返回的值被join方法转换成字符串的形式输出
		}(),//匿名函数自执行
		"上牌 | ",
		option.kilometer,
		"万公里 | ",
		option.province,
		"</p>",
		"<div class=\"mark\">",
		"<em>",
		["商家", "实名"][option.isPersonal],//商家认证或是实名认证通过数组下标的形式来判断
		"认证</em>",
		"</div>",
		"</div>",
		["", "<i class=\"sold\">已售</i>"][option.isSold],//?
	].join("");
	return box;
}

//创建出来以后就是类似于如下的结构
// <div class="box">
// 	<div class="detail">
// 		<a href=""></a>
// 		<p class="price"></p>
// 		<p class="content"></p>
// 		<div class="mark">
// 			<em></em>
// 		</div>
// 		<i class="sold"></i>	
// 	</div>
// </div>


var carData = eval(([{ 

					 "title":"福特 2013款 翼虎 1.6L GTDi 两驱舒适型",
					 "url":"http://f.souche.com/5902aeb738faa21e0b6dd22080fea3b7.png?imageView2/1/w/240/h/160",
					 "price":"13.6",
					 "lisenceTime":1377964800000,
					 "kilometer":"3.81",
					 "province":"浙江",
					 "isPersonal":1,
					 "isSold":0,
					 "id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=udBqUnsfao"
				},
				{
					"title":"别克 2010款 昂科雷 3.6L 精英版",
					"url":"http://img.souche.com/20161129/jpg/d7e6c229cd2a9db9b8badc66ecc234a9.jpg",
					"price":"18.8",
					"lisenceTime":1293811200000,
					"kilometer":"12.00",
					"province":"浙江",
					"isPersonal":0,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=c80e86eff4434f55999268409f39c62d"
				},
				{
					"title":"2013款 宝马Z4 sDrive20i领先型",
					"url":"http://img.souche.com/files/default/d827a4b2d9cd6b9740bf741922083dca.png@1e_240w_160h_1c_0i_1o_90Q_1x.jpg",
					"price":"31.5",
					"lisenceTime":1372608000000,
					"kilometer":"6.00",
					"province":"浙江",
					"isPersonal":0,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=d23260938f9345639bdff8d8f58ec84d"
				},
				{
					"title":"雪佛兰 2009款 科鲁兹 1.6L SL AT",
					"url":"http://img.souche.com/files/default/8e893f51d6bd3011c985457dd674c1b8.png",
					"price":"6.3",
					"lisenceTime":1285862400000,
					"kilometer":"9.00",
					"province":"浙江",
					"isPersonal":0,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=4938e7dbb6574316af857eb4d53fa10c"
				},
				{
					"title":"保时捷 2017款 Macan Macan 2.0T",
					"url":"http://f.souche.com/df1fbcd5adf79e3746849258fd43f3e9.png?imageView2/1/w/240/h/160",
					"price":"63.5",
					"lisenceTime":1464710400000,
					"kilometer":"0.69",
					"province":"浙江",
					"isPersonal":1,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=MtKJ3rKTw1"
				},
				{
					"title":"别克 2013款 凯越 1.5L 自动经典型",
					"url":"http://img.souche.com/20161129/jpg/2eb9a154383685fe4923a77e05b7960a.jpg",
					"price":"5.98",
					"lisenceTime":1385827200000,
					"kilometer":"5.80",
					"province":"浙江",
					"isPersonal":0,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=855b0351e1d349d88f5387f30d2f95fb"
				},
				{
					"title":"别克 2010款 凯越 1.6 自动 LE 智能加装版",
					"url":"http://f.souche.com/81d5017769ffe1dee264c1a2cbf6c47b.jpg?imageView2/1/w/240/h/160",
					"price":"4.28",
					"lisenceTime":1254326400000,
					"kilometer":"9.00",
					"province":"浙江",
					"isPersonal":1,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=ujoWGXN5Yr"
				},
				{
					"title":"2015款 奥迪Q7 40 TFSI 尊藏型",
					"url":"http://f.souche.com/e30ae1b7fba54af4f597f4ad3d30002c.png?imageView2/1/w/240/h/160",
					"price":"61.8",
					"lisenceTime":1438358400000,
					"kilometer":"2.31",
					"province":"浙江",
					"isPersonal":1,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=YQcjSihoZc"
				},
				{
					"title":"路虎 2016款 发现神行 2.0T S",
					"url":"http://f.souche.com/77abb7bc7851292be625efce0a9b6543.png?imageView2/1/w/240/h/160",
					"price":"48",
					"lisenceTime":1427817600000,
					"kilometer":"3.16",
					"province":"浙江",
					"isPersonal":1,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=5iDpmx3ckC"
				},
				{
					"title":"2015款 北京现代ix35 2.0L 自动两驱智能型 国V",
					"url":"http://img.souche.com/20161129/JPG/64423d9c5cc12847140b98d61594de7c.JPG",
					"price":"13.98",
					"lisenceTime":1443628800000,
					"kilometer":"3.85",
					"province":"浙江",
					"isPersonal":0,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=e78f601f897c4b32a0032ecc9faa5e69"
				},
				{
					"title":"2014款 奥迪A6L 30 FSI 豪华型",
					"url":"http://f.souche.com/4795b407d33772cc52d05c4919fd13dd.png?imageView2/1/w/240/h/160",
					"price":"33.5",
					"lisenceTime":1417363200000,
					"kilometer":"3.30",
					"province":"浙江",
					"isPersonal":1,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=7dBoeyvwmd"
				},
				{
					"title":"路虎 2015款 揽胜极光 2.0T 五门锐动版",
					"url":"http://img.souche.com/20161129/JPG/fbc7eb69cb82a6a2df8533fab4c5d041.JPG",
					"price":"39.8",
					"lisenceTime":1427817600000,
					"kilometer":"1.10",
					"province":"浙江",
					"isPersonal":0,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=5934ac0e68064aeeb269a1be4c8681d9"
				},
				{
					"title":"2011款 奔驰SLK级 SLK 200 时尚型",
					"url":"http://img.souche.com/files/default/4485fd058b9d6ed5a7cbe6999c5c0e4c.jpg",
					"price":"32.8",
					"lisenceTime":1377964800000,
					"kilometer":"2.00",
					"province":"浙江",
					"isPersonal":0,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=936457a317d74b61bbd4b91f24b3e14c"
				},
				{
					"title":"2012款 奔驰S级 S 350 L Grand Edition",
					"url":"http://img.souche.com/20160924/JPG/f4003158ad8aec8dfc7c6c71c1c9c497.JPG",
					"price":"66.8",
					"lisenceTime":1359648000000,
					"kilometer":"8.60",
					"province":"浙江",
					"isPersonal":0,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=f0337ba573be48098e844cdf56ca0373"
				},
				{
					"title":"2011款 奔驰SLK级 SLK 200 时尚型",
					"url":"http://f.souche.com/d63bf736bf3f866747c513d4039e5d19.jpg?imageView2/1/w/240/h/160",
					"price":"32.8",
					"lisenceTime":1377964800000,
					"kilometer":"2.00",
					"province":"浙江",
					"isPersonal":1,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=GgKdE6xvNM"
				},
				{
					"title":"2014款 捷豹XF XF 2.0T 豪华版",
					"url":"http://img.souche.com/20160916/JPG/451bac21002bf8cb2950fc6aa5d47143.JPG",
					"price":"32.98",
					"lisenceTime":1391184000000,
					"kilometer":"8.32",
					"province":"浙江",
					"isPersonal":0,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=82e6fe6a0309492dadbf2e56b15e715e"
				},
				{
					"title":"日产 2015款 天籁 2.5L XL-NAVI Tech欧冠智享版",
					"url":"http://img.souche.com/20161129/jpg/6e47a25b6f89a6d43445d409afd1d4af.jpg",
					"price":"17.8",
					"lisenceTime":1438358400000,"kilometer":"2.40",
					"province":"浙江",
					"isPersonal":0,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=1d826cd7a45b4358a46426983115addc"
				},
				{
					"title":"现代 2010款 悦动 1.6L 自动 GLS",
					"url":"http://f.souche.com/e1c3f3efa6396cc89a29652fced69b8d.png?imageView2/1/w/240/h/160",
					"price":"4.5","lisenceTime":1254326400000,
					"kilometer":"13.82",
					"province":"浙江",
					"isPersonal":1,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=epTOJZcuoB"
				},
				{
					"title":"丰田 2013款 卡罗拉 特装版 1.8L 无级变速至酷版GL-i",
					"url":"http://f.souche.com/7d6c16abd2eaabe73841bd45eeb4106d.png?imageView2/1/w/240/h/160",
					"price":"10.5",
					"lisenceTime":1388505600000,
					"kilometer":"2.25",
					"province":"浙江",
					"isPersonal":1,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=P7qN6qcyB6"
				},
				{
					"title":"福特 2013款 翼搏 1.5L 手动舒适型",
					"url":"http://f.souche.com/45ea02e2640f1f28bd06ac3b2c9379db.png?imageView2/1/w/240/h/160",
					"price":"6.6",
					"lisenceTime":1388505600000,
					"kilometer":"5.00",
					"province":"浙江",
					"isPersonal":1,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=RGLTFzHk7N"
				},
				{
					"title":"2012款 奥迪Q5 2.0TFSI 技术型",
					"url":"https://res.souche.com/images/fed/zhanwei.png",
					"price":"25.8",
					"lisenceTime":1338480000000,
					"kilometer":"6.50",
					"province":"浙江",
					"isPersonal":0,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=37e7621751e144a28fb1b997180241e7"
				},
				{
					"title":"别克 2006款 凯越 LX 1.6 手动 基本版",
					"url":"https://res.souche.com/images/fed/zhanwei.png",
					"price":"1.8",
					"lisenceTime":1138723200000,
					"kilometer":"10.00",
					"province":"浙江",
					"isPersonal":0,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=bb89d905f6e841e9b3f8ac695d77a285"
				},
				{
					"title":"马自达 2010款 睿翼 2.0L 自动豪华版",
					"url":"https://res.souche.com/images/fed/zhanwei.png",
					"price":"9.8",
					"lisenceTime":1296489600000,
					"kilometer":"6.82",
					"province":"浙江",
					"isPersonal":1,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=L4kQbcbbKj"
				},
				{
					"title":"现代 2014款 索纳塔八 2.4L 自动豪华版 国IV",
					"url":"https://res.souche.com/images/fed/zhanwei.png",
					"price":"14.8",
					"lisenceTime":1425139200000,
					"kilometer":"2.10",
					"province":"浙江",
					"isPersonal":1,
					"isSold":0,
					"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=AUUld1nWvN"
				}]));
var renderCars = function(){
	var container = document.getElementById("cars");
	return function(data){
		container.innerText = "";
		var carFragment = document.createDocumentFragment();
		data.forEach(function(item){
			carFragment.appendChild(createBox(item));
		});
		container.appendChild(carFragment);
	};
}();
renderCars(carData);


// var container = document.getElementById("cars");
// var carFragment = document.createDocumentFragment();
// 	carData.forEach(function(item){
// 		carFragment.appendChild(createBox(item));
// 	});
//     container.appendChild(carFragment);



var filterSetting = [
	{
		title : "里程",
		options : [
			{
				name : "1万公里以内",
				value : 1
			},
			{
				name : "3万公里以内",
				value : 3
			},
			{
				name : "5万公里以内",
				value : 5
			},
			{
				name : "8万公里以内",
				value : 8
			}
		]
	},
	{
		title : "变速箱",
		options : [
			{
				name : "MT-手动",
				value : 1
			},
			{
				name : "AT-自动",
				value : 2
			}
		]
	},
	{
		title : "排量",
		options : [
			{
				name : "1.0L以下",
				value : "1.0"
			},
			{
				name : "1.1L-1.6L",
				value : "1.1"
			},
			{
				name : "1.6L-2.0L",
				value : "1.6"
			},
			{
				name : "2.0L-2.5L",
				value : "2.0"
			},
			{
				name : "2.5L-3.0L",
				value : "2.5"
			},
			{
				name : "3.0L-4.0L",
				value : "3.0"
			},
			{
				name : "4.0L以上",
				value : "4.0"
			}
		]
	},
	{
		title : "排放标准",
		options : [
			{
				name : "国二及以上",
				value : 1
			},
			{
				name : "国三及以上",
				value : 2
			},
			{
				name : "国四及以上",
				value : 3
			}
		]
	},
	{
		title : "国别",
		options : [
			{
				name : "德国",
				value : "101"
			},
			{
				name : "日本",
				value : "308"
			},
			{
				name : "美国",
				value : "123"
			},
			{
				name : "韩国",
				value : "212"
			},
			{
				name : "中国",
				value : "095"
			}
		]
	},
	{
		title : "价格",
		options : [
			{
				name : "5万元以下",
				value : "0-5"
			},
			{
				name : "5-10万元间",
				value : "5-10"
			},
			{
				name : "10-20万元间",
				value : "10-20"
			},
			{
				name : "20-50万元间",
				value : "20-50"
			},
			{
				name : "50万元以上",
				value : "50-5000"
			}
		]
	}
];
function createSelect(option){//创建左侧筛选表格标签
	var container = document.createElement("div"),//创建div标签
		title = document.createElement("h2"),//创建h2标签
		select = document.createElement("div"),//创建div标签
		placeholder = document.createElement("span"),//创建span标签
		icon = document.createElement("i"),//创建i标签
		ul = function(){
			var ul = document.createElement("ul");//创建一个ul标签
			option.options.forEach(function(item){//对filterSetting下面的options属性进行遍历
				var li = document.createElement("li");//创建一个li标签
				li.innerText = item.name;//li的文本内容就等于options属性下的name属性的值
				li.onclick = function(){//?
					renderCars(carData.filter(function(_item){
						return option.filterFunc(_item, item.value);
					}));
					placeholder.innerText = item.name;
				};
				ul.appendChild(li);//往ul里面添加好遍历后的li属性
			});
			var _default = document.createElement("li");//创建内容文本为无限的li标签
			_default.innerText = "不限";//创建文本内容为无限
			_default.onclick = function(){
				renderCars(carData);//创建点击事件,当点击无无限时,显示所有carData的数据
				placeholder.innerText = "请选择" + option.title;//设置选择框里的默认值是filterSetting的options属性下的title属性
			};
			ul.appendChild(_default);//把最后一个li标签添加到ul里面
			return ul;//返回ul的值
		}(),
		status = 0;//?
	container.className = "row";//第一个div标签的class名为row
	placeholder.innerText = "请选择" + option.title;//设置除最后一个无限的li外,其他li的默认值为filterSetting的options属性下的title属性
	icon.className = "icon2 down";//设置i标签的class名为icon2和down
	select.onclick = function(){//?
		select.className = ["select ", ["normal", "current"][status]].join("");
		status ^= 1;//?
	};
	title.innerText = option.title;//获取到遍历后的filterSetting中的title属性
	select.className = "select normal";//第二个div的默认class类名是select和normal
	select.appendChild(placeholder);//往第二个div里面添加span标签
	select.appendChild(icon);//往第二个div里面添加i标签
	select.appendChild(ul);//往第二个div里面添加ul标签
	container.appendChild(title);//往第一个div里面添加h2标签
	container.appendChild(select);//往第一个div里面添加第二个div
	return container;//最后返回整体的div
}

//创建出来以后就是类似于如下的结构
// <div class="row">
// 	<div class="select normal">
// 	<span></span>
// 	<i class="icon2 down"></i>
// 	<ul>
// 		<li></li>
// 		<li></li>
// 		.
// 		.
// 		.
// 		<li>无限</li>
// 		</ul>
// 	</div>
// 	<h2></h2>
// </div>






var filterFragment = document.createDocumentFragment(),//创建一个碎片管理
	//解耦
	filterFunc = [
		function(item, value){
			return item.kilometer < value;
		},,,,,
		function(item, value){
			var a = value.split("-");
			return +item.price > a[0] && +item.price < a[1];
		}
	];
	// filterFunc[0]
filterSetting.forEach(function(item, index){//对filterSetting这个数组的集合进行遍历,item(数组中的每个元素),index(数组的索引)
	item.filterFunc = filterFunc[index];
	filterFragment.appendChild(createSelect(item));
});
document.getElementById("bottom").appendChild(filterFragment);//把碎片添加到最大的那个div里面






//第372行,创建数据后,遍历数组的所有数据,为什么要是这样的函数的写法,下面注释所写的为常见的遍历方法,这个实例中为什么还要再套一个function
//第542行,添加的那个关于li的点击事件方法是怎么运作的
//第559行,第563行,什么是位运算,关于第二个div的那个方法是什么原理
//页面中总共有两个由js向页面中添加标签的地方,第一个用的是添加好外面的大的div,然后用innerHTML的方式添加里面的子元素,第二处则是用常见创建标签的方法来添加,什么时候该用什么方法,如何辨别
//第二处添加div里面添加子元素的时候,h2标签明明是在后面添加的,为什么反而跑到有些添加已经添加标签的前面
//第601处的方法是什么运作原理
//