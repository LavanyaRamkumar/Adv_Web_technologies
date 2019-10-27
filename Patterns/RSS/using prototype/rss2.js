function NewsItem(title,link){
	
	this.anchor=document.createElement("a");
	this.anchor.href=link;
	this.anchor.innerHTML=title;
	
}
function NewsFeed(){
	
	this.feeds=new Array();
	this.xhr=new XMLHttpRequest();
	temp=this;
	this.scrTimer=null;
	
	this.getFeed();	
	this.div=document.getElementById("inner");
	this.div.style.left = window.innerWidth - 5 + "px";
	this.div.onmouseover=this.stopScroll;
	this.div.onmouseout=this.startScroll;
	console.log("gng to display")
	this.scroll();
	
}
NewsFeed.prototype.getFeed=function(){
	this.xhr.onreadystatechange=this.showFeed;
	this.xhr.open("GET","getnews.php",true);
	this.xhr.send();	
}
NewsFeed.prototype.showFeed=function(){
	if(this.readyState==4 && this.status==200){
		var res=this.responseXML;
		console.log(res);
		var root=res.documentElement;
		var itemList=root.getElementsByTagName("item");
		for (var i=0;i<5;i++){
			var title=itemList[i].getElementsByTagName("title")[0].firstChild.nodeValue;			
			var link=itemList[i].getElementsByTagName("link")[0].firstChild.nodeValue;
			console.log(title);
			console.log(link);
			var newsItem=new NewsItem(title,link);
			temp.feeds.push(newsItem);
			console.log(temp.feeds.length);
			
		}
	temp.display();	
	}
}
NewsFeed.prototype.display=function(){
	console.log("displaying")
	console.log(temp.feeds.length);
	
	
	
	for(f in temp.feeds){
		//console.log("hello")
		console.log(temp.feeds[f].anchor);
		temp.div.appendChild(temp.feeds[f].anchor);
		
		temp.div.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;"
		
	}
	
}	
NewsFeed.prototype.scroll=function(){
	
	if(temp.div.offsetLeft+temp.div.offsetWidth<2){
		
		temp.div.style.left=window.innerWidth-5+"px";
	}
	else{
		
		temp.div.style.left=temp.div.offsetLeft -5+"px"
	}
	temp.scrTimer=setTimeout(temp.scroll,50);
	
	
}
function init(){
	
	new NewsFeed();
	
}