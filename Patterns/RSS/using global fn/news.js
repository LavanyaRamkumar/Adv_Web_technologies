function init()
{
	obj = new News();
	obj.divinner = document.getElementById("inner");
	obj.divinner.style.left = window.innerWidth - 5 + "px";
	
	obj.scroll();
	setTimeout(obj.getNews,5000);
}

function News()
{
	this.getNews = function()
	{
		xhr = new XMLHttpRequest();
		xhr.onreadystatechange = obj.processNews;
		xhr.open("GET", "http://localhost/getnews.php", true);
		xhr.send();
	}
	
	this.processNews = function()
	{
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			root = xhr.responseXML.documentElement;
			
			item = root.getElementsByTagName("item")[0];
			
			//get title and link
			title = item.getElementsByTagName("title")[0];
			link = item.getElementsByTagName("link")[0];
			
			//Create an anchor
			anchor = document.createElement("a");
			anchor.innerHTML = title.firstChild.nodeValue;
			anchor.href = link.firstChild.nodeValue;
			
			obj.divinner.innerHTML = "";
			obj.divinner.appendChild(anchor);
			
		}
	}
	
	this.scroll = function()
	{
		if(obj.divinner.offsetLeft + obj.divinner.offsetWidth < 2)
		{
			obj.divinner.style.left = window.innerWidth - 5 + "px";
		}
		
		else
		{
			obj.divinner.style.left = obj.divinner.offsetLeft - 4 + "px";
		}
		
		setTimeout(obj.scroll, 20);
	}
}