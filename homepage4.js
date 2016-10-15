

function Change() {
	
	//if (var quote%2=0)
	document.getElementById("quote").innerHTML = '<div id="quote2"><h4> There is no honorable way to kill,<br> no gentle way to destroy. <br> There is nothing good in war except its ending. </h4><h2> -Abraham Lincoln </h2><h4>in The Savage Curtain <br> Note: This is a quote many attribute to the real Lincoln <br> but he only ever said it in TOS! </h4> <img src="https://c1.staticflickr.com/5/4056/4285597742_e2b62ab487.jpg" height=275px> </div>';
   //if (var quote%2=0) //how to add ' in innerHTML?
	  // {document.getElementById("quote").innerHTML = "quote2";}
   //var quote=var quote+1
   
};
function Change2() { //back
	
	
	document.getElementById("quote2").innerHTML = '<h4>Logic is a little tweeting bird chirping in a meadow. <br> Logic is a wreath of pretty flowers which smell BAD. <br></h4><h2>-Spock</h2><h4>trying to confuse an android in I, Mudd </h4><img src="http://i.imgur.com/wbdVfwA.gif">';
  
};






//window.onload = function() {
          // alert("The page has loaded");
    //};
 
    //function sayHello(message){
            alert(message);
    //}

	//this function gets over-ridden when used within JQuery Mobile HTML
	function changeBackground(color) {
        //document.body.style.background = color;
		document.getElementById("p2").style.color = color;
	}
	
	var pic_tracker = 'c';
	function changeImage() {
		if(pic_tracker == 'c'){		
			document.getElementById("picHolder").src = 'php.jpg';
			pic_tracker = 'p';
        }
        else {
			document.getElementById("picHolder").src = 'css.jpg';
			pic_tracker ='c';
		}		
	}
	
	function addContent(idName) {  //for webseries
		document.getElementById(idName).innerHTML = ' <p> Both webseries are continuations of The Original Series. <br> I highly recommend both of them. </p> <a href="http://www.startrekcontinues.com/episodes.html"  target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/en/9/97/Star_Trek_Continues_Opening_Title_Card.png" height=100px width=150px</a> <a href="http://www.startrekphase2.de/en/new_voyages.php"  target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/it/thumb/0/03/Star_Trek_NV.JPG/280px-Star_Trek_NV.JPG" height="100px" width="150px" </a> <!--<p> I highly recommend both of them.</p>-->' ;
		//why appearing as link above?
	}

function addContent2 (blah) {  //for memory alpha
		document.getElementById(blah).innerHTML = '<p> Click to go to Memory Alpha. (TOS or TNG) </p> <a href="http://en.memory-alpha.wikia.com/wiki/Star_Trek:_The_Next_Generation" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Jean-Luc_Picard_2.jpg" alt="tng" width="200" height="180" id="tng"></a> <p> The Next Generation </p> <a href="http://en.memory-alpha.wikia.com/wiki/Star_Trek:_The_Original_Series" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Leonard_Nimoy_William_Shatner_Star_Trek_1968.JPG" alt="tos" width="200" height="220" id="tos"></a> <p> The Orginal Series</p> ';
		
	}

