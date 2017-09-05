<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>WinLane.gg</title>

<script src="http://code.jquery.com/jquery-1.10.2.js"
	type="text/javascript"></script>
<script src="Stats.js" type="text/javascript"></script>

<style type="text/css">
		.floatbreak {
			clear:both;
		}

		body {
			padding:0;
			margin:0;
			font-family:"Avenir";
			/*color:#D7D1D1;*/
			color:#DFEBF6;
			/* background-color:#EEE8F6; */
		}
		
		#header {
			background-color:#535353;
			width:100vw;
			height:8vh;
			min-width:1000px;
			min-height:48px;
			box-shadow: 2px 2px 1px #888888;
		}
		
		#title {
			float:left;
			font-size:1.75em;
			width:9%;
			height:80%;
			margin-left:15px;
			margin-top:7px;
			font-family:"Futura";
		}
		
		#title:hover {
			cursor:pointer;
		}
		
		#search {
			width:15%;
			font-size:0.8em;
			float:right;
			margin-top:10px;
			margin-right:3px;
			border-radius:3px;
			border-style:none;
			padding:3px;
			font-family:"Avenir";
		}
		
		#enter {
			float:right;
			width:5%;
			height:50%;
			margin-right:30px;
			margin-top:10px;
			border-radius:3px;
			border-style:none;
			font-family:"Avenir";
			font-size:0.8em;
		}
		
		#search:focus {
			outline:none;
		}
		
		

		.half {
			width:100vw;
			height:46h;
			min-width:1000px;
			min-height:276px;
			float:left;
			background-color:#EDF1F2;
		}

		#top {
			/* background-color: #80A1C1; */
			
		}

		#bot {
			/*background-color:#C18080;*/
			
			
		}

		.menu {
			width:13vw;
			height:46vh;
			min-width:130px;
			min-height:276px;
			float:left;
			z-index:50;
		}

		.menuitem {
			width:100%;
			height:20%;
			position:relative;
			text-align: center;
			line-height:55.2px;
			font-size:0.725em;
			color:#FFFFFF;
		}
		
		.menuitem:hover {
			/* background-color:#A63A8C; */
			background-color:#676F75;
		}

		.itembackground {
			/* background-color: #A63A8C; */
			background-color:#676F75;
			width:13%;
			height:9.2%;
			min-width:130px;
			min-height:55.2px;
		}

		#blueback1 {
			position:absolute;
		}
		#blueback2 {
			position:absolute;
			opacity:0.6;
		}
		#blueback3 {
			position:absolute;
			opacity:0.6;
		}
		#blueback4 {
			position:absolute;
			opacity:0.6;
		}
		#blueback5 {
			position:absolute;
			opacity:0.6;
		}

		#redback1 {
			position:absolute;
		}
		#redback2 {
			position:absolute;
			opacity:0.6;
		}
		#redback3 {
			position:absolute;
			opacity:0.6;
		}
		#redback4 {
			position:absolute;
			opacity:0.6;
		}
		#redback5 {
			position:absolute;
			opacity:0.6;
		}

		.menuitem img {
			width:38px;
			height:38px;
			margin-top:1.25vh;
			margin-left:1vh;
			float:left;
			border-radius:22.5px;

		}
		
		.card {
			float:left;
			width:86%;
			margin-top:5px;
			margin-left:7px;
			border-radius:8px;
			box-shadow: 2px 2px 1px #888888;
			background-color:#FFFFFF;
			
		}
		
		#bluecard {
		background: #6599D5; 
  background: -webkit-linear-gradient(left top, #6599D5, #DAECF5); 
  background: -o-linear-gradient(bottom right, #6599D5, #DAECF5); 
  background: -moz-linear-gradient(bottom right, #6599D5, #DAECF5); 
  background: linear-gradient(to bottom right, #94C3FF, #42639E);
		}
		
		#redcard {
			background: #E6A08F; 
  			background: -webkit-linear-gradient(left top, #FF9494, #DCDF60); 
 			background: -o-linear-gradient(bottom right, #E6A08F, #CE3232);
  			background: -moz-linear-gradient(bottom right, #E6A08F, #CE3232);
			background: linear-gradient(to bottom right, #FF9494, #9E4242);  
		}

		.champview {
			height:100%;
			width:18vw;
			min-width:180px;
			/* min-height:276px; */
			float:left;
		}

		.champimg {
			/* background-color: red; */
			width:8.5vw;
			height:19vh;
			min-width:85px;
			min-height:104.88px;
			float:left;
		}

		.champimg img {
			/* width:6vw;
			height:6vw; */
			width:62.5px;
			height:62.5px;
			border-radius: 36.25px;
			border-style:solid;
			border-width:5px;
			border-color:#DFEBF6;
			margin-left:2vw;
			margin-top:20px;
		}

		.namesumms {
			/*background-color:orange;*/
			float:left;
			width:9.5vw;
			height:19vh;
			min-width:95px;
			min-height:104.88px;
		}

		.champname {
			font-size:1.1em;
			float:left;
			margin-top:20px;
			margin-left:0.75vw;
		}

		.summAimg {
			width:28px;
			height:28px;
			border-radius: 14px;
			/*border-style:solid;
			border-width:0.35vw;
			border-color:#DFEBF6;*/
			margin-left:0.75vw;
		}

		.summBimg {
			width:28px;
			height:28px;
			border-radius: 14px;
			/*border-style:solid;
			border-width:0.35vw;
			border-color:#DFEBF6;*/
		}

		.rankdiv {
			float:left;
			height:27vh;
			width:100%;
			min-height:149.04px;
			text-align: center;
		}

		.rankdiv img {
			width:100px;
		}

		.rank {
			font-size:1.1em;

		}

		.divider {
			float:left;
			height:41.4vh;
			width:0.15vw;
			min-width:1.5px;
			min-height:228.528px;
			margin-top:15px;
			background-color:#DFEBF6;
		}

		.statview {
			height:100%;
			width:67.5vw;
			min-width:675px;
			min-height:250px;
			float:left;
		}
		
		.statheader {
			/*background-color: orange;*/
			width:100%;
			height:15%;
			min-height:41.4px;
			text-align:center;
			line-height:41.4px;
			font-size:1.5em;
		}

		.statpresent {
			/* background-color:yellow; */
			width:100%;
			height:85%;
		}
		
		#bluestatpresent {
			visibility:visible;
		}
		
		#bluesearchfail {
			position:absolute;
			visibility:hidden;
			margin-left:10%;
		}
		
		#redstatpresent {
			visibility:visible;
		}
		
		#redsearchfail {
			position:absolute;
			visibility:hidden;
			margin-left:10%;
		}
		

		.statpresent table{
			margin-left:2vw;
			font-size:1em;
			width:75%;
			height:90%;
			/* min-width:500px; */
			float:left;
		}

		.statpresent img {
			width:100%;
			
		}
		
	.tooltip {
			float:left;
		    width:6%
		    
		} 
		
		.tooltip .tooltiptext {
		    visibility: hidden;
		    width: 120px;
		    background-color: black;
		    color: #fff;
		    text-align: center;
		    border-radius: 6px;
		    padding: 5px 0;
		
		    /* Position the tooltip */
		    position:absolute;
		    z-index: 100;
		    margin-top:-37px;
    			margin-left: -80px;
		}
		
		.tooltip:hover .tooltiptext {
		    visibility: visible;
		}
		.label {
			/*background-color: orange;*/
			/*width:8vw;*/
			/*height:4vh;*/
		}
		.info {
			/*background-color: yellow;*/
			/*width:18.3475vw;*/
			/*height:4vh;*/
		}

		.outerbar {
			background-color:#D8D8D8;
			width:11vw;
			height:3vh;
			min-width:110px;
			min-height:16.56px;
			float:left;
			margin-right:0.3vw;
		}
		.innerbar {
			/*background-color:#3DE251;*/
			background-color: #EEC600;
			height:100%;
		}
	</style> 
</head>
<body>

	<div id="container">
		<div id="header">
			<div id="title">WINLANE</div>
			<button id="enter">Enter</button>
			<form>
				<input type="text" id="search" placeholder="Enter Summoner"/>
			</form>
			
			
		</div>
		
		
		
		
		<div class="half" id="top">
		<div class="menu">
					
				<div class="itembackground" id="blueback1"></div>
				<div class="menuitem" id="menu1">
					<img src="images/champions/Ashe.png" id="menuimg1">
					<span id="summ1name">Summoner 1</span>
				</div>

				<div class="itembackground" id="blueback2">
				</div>
				<div class="menuitem" id="menu2">
					<img src="images/champions/Ashe.png" id="menuimg2"/>
					<span id="summ2name">Summoner 2</span>
				</div>

				<div class="itembackground" id="blueback3">
				</div>
				<div class="menuitem" id="menu3">
					<img src="images/champions/Ashe.png" id="menuimg3"/>
					<span id="summ3name">Summoner 3</span>
				</div>

				<div class="itembackground" id="blueback4">
				</div>
				<div class="menuitem" id="menu4">
					<img src="images/champions/Ashe.png" id="menuimg4"/>
					<span id="summ4name">Summoner 4</span>
				</div>

				<div class="itembackground" id="blueback5">
				</div>
				<div class="menuitem" id="menu5">
					<img src="images/champions/Ashe.png" id="menuimg5"/>
					<span id="summ5name">Summoner 5</span>
				</div>

					
		</div>
			<div class="card" id="bluecard">
				<div class="champview" id="bluechamp">
					<div class="champimg">
						<img src="images/champions/Ashe.png" id="mainchampimgblue"/>
					</div>
					<div class="namesumms">
						<span class="champname" id="bluechampname">ASHE</span>
						<div class="floatbreak"></div>
						<img src="images/summoners/Flash.png" class="summAimg" id="bluesummA"/>
						<img src="images/summoners/Flash.png" class="summBimg" id="bluesummB"/>
					</div>
					<div class="rankdiv">
						<img src="images/ranks/Gold.png" id="bluerankimg"/>
						<div class="floatbreak"></div>
						<span class="rank" id="bluerank">GOLD V</span>
					</div>
				</div>
				<div class="divider"></div>
				<div class="statview" id="bluestat">
					<div class="statheader">
						<span id="bluerole">TOP</span>
					</div>
					<div class="statpresent" id ="bluestatpresent">
						<table>
							<tr>
								<td class="label" id="bluelabel11">WinRate</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="bluebar11"></div></div>
									<span id="bluestat11">50%</span>
								</td>
								<td class="label" id="bluelabel12">Solo Kills</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="bluebar12"></div></div>
									<span id="bluestat12">2</span>
								</td>
							</tr>
	
							<tr>
								<td class="label" id="bluelabel21">KDA</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="bluebar21"></div></div>
									<span id="bluestat21">50%</span>
								</td>
								<td class="label" id="bluelabel22">Solo Deaths</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="bluebar22"></div></div>
									<span id="bluestat22">2</span>
								</td>
							</tr>
	
							<tr>
								<td class="label" id="bluelabel31">KP</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="bluebar31"></div></div>
									<span id="bluestat31">50%</span>
								</td>
								<td class="label" id="bluelabel32">Mid Ganks</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="bluebar32"></div></div>
									<span id="bluestat32">2</span>
								</td>
							</tr>
	
							<tr>
								<td class="label" id="bluelabel41">CS/min</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="bluebar41"></div></div>
									<span id="bluestat41">50%</span>
								</td>
								<td class="label" id="bluelabel42">Bot Ganks</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="bluebar42"></div></div>
									<span id="bluestat42">2</span>
								</td>
							</tr>
	
							<tr>
								<td class="label" id="bluelabel51">CSD@15</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="bluebar51"></div></div>
									<span id="bluestat51">50%</span>
								</td>
								<td class="label" id="bluelabel52">First Turret</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="bluebar52"></div></div>
									<span id="bluestat52">2</span>
								</td>
							</tr>
	
							<tr>
								<td class="label" id="bluelabel61">GoldD@15</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="bluebar61"></div></div>
									<span id="bluestat61">50%</span>
								</td>
								<td class="label" id="bluelabel62"></td>
								<td class="info" id="blueempty62">
									<div class="outerbar"><div class="innerbar" id="bluebar62"></div></div>
									<span id="bluestat62">2</span>
								</td>
							</tr>
	
							<tr>
								<td class="label" id="bluelabel71">DMG%</td>
								<td class="info" id="blueempty71">
									<div class="outerbar"><div class="innerbar" id="bluebar71"></div></div>
									<span id="bluestat71">50%</span>
								</td>
								<td class="label" id="bluelabel72"></td>
								<td class="info" id="blueempty72">
									<div class="outerbar"><div class="innerbar" id="bluebar72"></div></div>
									<span id="bluestat72">2</span>
								</td>
							</tr>
						</table>
						<div class="tooltip">
							<img src="images/badges/PotentialCarry.svg" id="bluebadge1" />
							<span class="tooltiptext" id="bluetool1">Tooltip text</span>
						</div>
						<div class="tooltip">
							<img src="images/badges/PotentialCarry.svg" id="bluebadge2" />
							<span class="tooltiptext" id="bluetool2">Tooltip text</span>
						</div>
						<div class="tooltip">
							<img src="images/badges/PotentialCarry.svg" id="bluebadge3" />
							<span class="tooltiptext" id="bluetool3">Tooltip text</span>
						</div>
						<div class="tooltip">
							<img src="images/badges/PotentialCarry.svg" id="bluebadge4" />
							<span class="tooltiptext" id="bluetool4">Tooltip text</span>
						</div>
						<div class="tooltip">
							<img src="images/badges/PotentialCarry.svg" id="bluebadge5" />
							<span class="tooltiptext" id="bluetool5">Tooltip text</span>
						</div>
						<div class="tooltip">
							<img src="images/badges/PotentialCarry.svg" id="bluebadge6" />
							<span class="tooltiptext" id="bluetool6">Tooltip text</span>
						</div>
						<div class="tooltip">
							<img src="images/badges/PotentialCarry.svg" id="bluebadge7" />
							<span class="tooltiptext" id="bluetool7">Tooltip text</span>
						</div>
						<div class="tooltip">
							<img src="images/badges/PotentialCarry.svg" id="bluebadge8" />
							<span class="tooltiptext" id="bluetool8">Tooltip text</span>
						</div>
						
					</div>
					<div id="bluesearchfail">data not found... :'(</div>
				</div>
			</div>
		</div>







		
		
		
		<div class="half" id="bot">
			<div class="menu">
				<div class="itembackground" id="redback1">
				</div>
				<div class="menuitem" id="menu6">
					<img src="images/champions/Ashe.png" id="menuimg6"/>
					<span id="summ6name">Summoner 6</span>
				</div>

				<div class="itembackground" id="redback2">
				</div>
				<div class="menuitem" id="menu7">
					<img src="images/champions/Ashe.png" id="menuimg7"/>
					<span id="summ7name">Summoner 7</span>
				</div>

				<div class="itembackground" id="redback3">
				</div>
				<div class="menuitem" id="menu8">
					<img src="images/champions/Ashe.png" id="menuimg8"/>
					<span id="summ8name">Summoner 8</span>
				</div>

				<div class="itembackground" id="redback4">
				</div>
				<div class="menuitem" id="menu9">
					<img src="images/champions/Ashe.png" id="menuimg9"/>
					<span id="summ9name">Summoner 9</span>
				</div>

				<div class="itembackground" id="redback5">
				</div>
				<div class="menuitem" id="menu10">
					<img src="images/champions/Ashe.png" id="menuimg10"/>
					<span id="summ10name">Summoner 10</span>
				</div>
			</div>
			<div class="card" id="redcard">
				<div class="champview" id="redchamp">
					<div class="champimg">
						<img src="images/champions/Ashe.png" id="mainchampimgred"/>
					</div>
					<div class="namesumms">
						<span class="champname" id="redchampname">ASHE</span>
						<div class="floatbreak"></div>
						<img src="images/summoners/Flash.png" class="summAimg" id="redsummA"/>
						<img src="images/summoners/Flash.png" class="summBimg" id= "redsummB"/>
					</div>
					<div class="rankdiv">
						<img src="images/ranks/Gold.png" id="redrankimg"/>
							<div class="floatbreak"></div>
						<span class="rank" id="redrank">GOLD V</span>
					</div>
				</div>
				<div class="divider"></div>
				<div class="statview" id="redstat">
					<div class="statheader">
						<span id="redrole">TOP</span>
					</div>
					<div class="statpresent" id ="redstatpresent">
						<table>
							<tr>
								<td class="label" id="redlabel11">WinRate</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="redbar11"></div></div>
									<span id="redstat11">50%</span>
								</td>
								<td class="label" id="redlabel12">Solo Kills</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="redbar12"></div></div>
									<span id="redstat12">2</span>
								</td>
							</tr>
	
							<tr>
								<td class="label" id="redlabel21">KDA</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="redbar21"></div></div>
									<span id="redstat21">50%</span>
								</td>
								<td class="label" id="redlabel22">Solo Deaths</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="redbar22"></div></div>
									<span id="redstat22">2</span>
								</td>
							</tr>
	
							<tr>
								<td class="label" id="redlabel31">KP</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="redbar31"></div></div>
									<span id="redstat31">50%</span>
								</td>
								<td class="label" id="redlabel32">Mid Ganks</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="redbar32"></div></div>
									<span id="redstat32">2</span>
								</td>
							</tr>
	
							<tr>
								<td class="label" id="redlabel41">CS/min</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="redbar41"></div></div>
									<span id="redstat41">50%</span>
								</td>
								<td class="label" id="redlabel42">Bot Ganks</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="redbar42"></div></div>
									<span id="redstat42">2</span>
								</td>
							</tr>
	
							<tr>
								<td class="label" id="redlabel51">CSD@15</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="redbar51"></div></div>
									<span id="redstat51">50%</span>
								</td>
								<td class="label" id="redlabel52">First Turret</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="redbar52"></div></div>
									<span id="redstat52">2</span>
								</td>
							</tr>
	
							<tr>
								<td class="label" id="redlabel61">GoldD@15</td>
								<td class="info">
									<div class="outerbar"><div class="innerbar" id="redbar61"></div></div>
									<span id="redstat61">50%</span>
								</td>
								<td class="label" id="redlabel62"></td>
								<td class="info" id="redempty62">
									<div class="outerbar"><div class="innerbar" id="redbar62"></div></div>
									<span id="redstat62">2</span>
								</td>
							</tr>
	
							<tr>
								<td class="label" id="redlabel71">DMG%</td>
								<td class="info" id="redempty71">
									<div class="outerbar"><div class="innerbar" id="redbar71"></div></div>
									<span id="redstat71">50%</span>
								</td>
								<td class="label" id="redlabel72"></td>
								<td class="info" id="redempty72">
									<div class="outerbar"><div class="innerbar" id="redbar72"></div></div>
									<span id="redstat72">2</span>
								</td>
							</tr>
						</table>
						<div class="tooltip">
							<img src="images/badges/PotentialCarry.svg" id="redbadge1" />
							<span class="tooltiptext" id="redtool1">Tooltip text</span>
						</div>
						<div class="tooltip">
							<img src="images/badges/PotentialCarry.svg" id="redbadge2" />
							<span class="tooltiptext" id="redtool2">Tooltip text</span>
						</div>
						<div class="tooltip">
							<img src="images/badges/PotentialCarry.svg" id="redbadge3" />
							<span class="tooltiptext" id="redtool3">Tooltip text</span>
						</div>
						<div class="tooltip">
							<img src="images/badges/PotentialCarry.svg" id="redbadge4" />
							<span class="tooltiptext" id="redtool4">Tooltip text</span>
						</div>
						<div class="tooltip">
							<img src="images/badges/PotentialCarry.svg" id="redbadge5" />
							<span class="tooltiptext" id="redtool5">Tooltip text</span>
						</div>
						<div class="tooltip">
							<img src="images/badges/PotentialCarry.svg" id="redbadge6" />
							<span class="tooltiptext" id="redtool6">Tooltip text</span>
						</div>
						<div class="tooltip">
							<img src="images/badges/PotentialCarry.svg" id="redbadge7" />
							<span class="tooltiptext" id="redtool7">Tooltip text</span>
						</div>
						<div class="tooltip">
							<img src="images/badges/PotentialCarry.svg" id="redbadge8" />
							<span class="tooltiptext" id="redtool8">Tooltip text</span>
						</div>
						
					</div>
					<div id="redsearchfail">data not found... :'(</div>
				</div>

			</div>
			</div>
			
	</div>
</body>
</html>