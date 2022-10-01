function RandomImage()
	{
	    var var1=Math.floor(Math.random()*6)+1;
            var var2=Math.floor(Math.random()*6)+1;
            
	    var p1="images/"+var1+".png";
            var p2="images/"+var2+".png";
            
            var list=document.querySelectorAll("img");
            list[0].setAttribute("src",p1)
            list[1].setAttribute("src",p2)
		
            if(var1>var2){
                document.querySelector("h1").innerHTML="Player-1 Wins"
            }
            else if(var2>var1){
                document.querySelector("h1").innerHTML="Player-2 Wins"
            }
            else{
                document.querySelector("h1").innerHTML="Match Draw"
            }	
	}