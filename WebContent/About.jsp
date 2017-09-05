<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>WinLane.gg</title>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="About.js" type="text/javascript"></script>
<style type="text/css">
	
	html, body {
		font-family:"Avenir";
		color:#F4F8FF;
		margin:0;
		padding:0;
		 text-shadow: 1px 1px #313233;
	}
	#background {
			position: fixed;
  			left: 0;
  			top: 0;
 			 z-index: -1;
 			 width:100vw;
 			 height:100vh;
			background-image:url("images/wallpapers/Ashe.jpg");
			background-size: cover;
			/* -webkit-filter: blur(3px) grayscale(50%);;
  -moz-filter: blur(3px) grayscale(75%);
  -o-filter: blur(3px) grayscale(75%);
  -ms-filter: blur(3px) grayscale(75%);
  filter: blur(3px) grayscale(75%); */
		}
	
	#container {
		margin-left: 3vw;
		margin-right:3vw;
		margin-bottom:5vh;
	}
	
	button {
		float:left;
		font-family:"Avenir";
		width:100px;
		height:30px;
		font-size:0.8em;
	}
	#title {
		text-align:center;
	}
	img {
		width:60px;
	}
	
	#stats td {
		height:40px;
	}
	#badges td {
		width:33vw;
	}
</style>
</head>
<body>
	<div id="background"></div>
	<div id="container">
		<div id="header">
			<button id="home">Home</button>
			<h1 id="title">ABOUT</h1>
		</div>
		<div id="what">
			<h3>What is WinLane.gg?</h3>
			<p>A revolutionary new pregame tool meant to help players adjust their gameplan heading 
			into their solo queue matches. For the most part, players know how to win once they get 
			advantages. The problem, then, is getting to this point. WinLane.gg provides advanced 
			statistics specifically tailored towards early game and laning phase. This information 
			can imply things about certain players’ behaviors during this time, such as how aggressive 
			they are in lane or whether the jungler tends to camp or not. Users can then adjust their 
			playstyle, whether that means playing safe and farmer from afar or warding early for 
			potential jungle invades. In today’s meta, it’s not enough for players to choose the 
			correct runes, item builds, and ability orders. It’s time for players to become adaptive 
			in their actual playstyles. WinLane -> GG</p>
		</div>
		<div id="stats">
			<h3>Stats</h3>
			<table>
				<tr>
					<td>KDA (Kills/Deaths/ Assists)</td>
					<td>Sum of total kills and assists divided by total number of deaths. </td>
				</tr>
				<tr>
					<td>KP (Kill Participation)</td>
					<td>Percentage of your team’s kills that you contribute to.</td>
				</tr>
				<tr>
					<td>CS/min (Creep Score per minute)</td>
					<td>Average number of minions you kill per minute. </td>
				</tr>
				<tr>
					<td>CSD@15 (Creep Score Difference at 15 minutes)</td>
					<td>Average difference in minions kills compared to your lane opponent</td>
				</tr>
				<tr>
					<td>GoldD@15 (Gold Difference at 15 minutes)</td>
					<td>Average difference in gold compared to your lane opponent</td>
				</tr>
				<tr>
					<td>DMG% (Damage Percentage)</td>
					<td>Percentage of your team’s damage that you contribute to.</td>
				</tr>
				<tr>
					<td>Solo Kills</td>
					<td>Average number of times you kill your lane opponent without help during the first 20 minutes of the game</td>
				</tr>
				<tr>
					<td>Solo Deaths</td>
					<td>Average number of times your lane opponent kills you without help during the first 20 minutes of the game</td>
				</tr>
				<tr>
					<td>Ganks</td>
					<td>Average number of times you successfully gank another lane (successful in this case means that the gank results in kill(s))</td>
				</tr>
				<tr>
					<td>First Gank</td>
					<td>Average time of first successful gank</td>
				</tr>
				<tr>
					<td>First Turret</td>
					<td>Percentage of games where the enemy's turret in your lane falls before yours does</td>
				</tr>
				<tr>
					<td>First Drag</td>
					<td>Percentage of games where your team gets the first dragon (within the first 20 minutes)</td>
				</tr>
				<tr>
					<td>First Rift</td>
					<td>Percentage of games where your team gets the rift herald</td>
				</tr>
			</table>
		</div>
		<div id="badges">
			<h3>Badges</h3>
			<table>
				<tr>
					<td><img src="images/badges/OldMcDonald.svg"/></td>
					<td>Old McDonald</td>
					<td>Jungler that tends to prioritize farming over ganking</td>
				</tr>
				<tr>
					<td><img src="images/badges/SneakySneaky.svg"/></td>
					<td>Sneaky Sneaky</td>
					<td>Jungler that could potentially invade enemy jungle</td>
				</tr>
				<tr>
					<td><img src="images/badges/DontGetThisSnowballRolling.svg"/></td>
					<td>Don't Get This Snowball Rolling</td>
					<td>Laner who tries to abuse his lane opponent and snowball early</td>
				</tr>
				<tr>
					<td><img src="images/badges/TrustTheProcess.svg"/></td>
					<td>Trust the Process</td>
					<td>Laner who plays passively, focusing on farming and scaling</td>
				</tr>
				<tr>
					<td><img src="images/badges/ObjectiveBased.svg"/></td>
					<td>Objective Based</td>
					<td>Jungler that places a priority on first dragon and rift herald </td>
				</tr>
				<tr>
					<td><img src="images/badges/Roamer.svg"/></td>
					<td>Roamer</td>
					<td>Laner who is a total team player and constantly looks to roam for his team</td>
				</tr>
				<tr>
					<td><img src="images/badges/Stroller.svg"/></td>
					<td>Stroller</td>
					<td>Laner that tends to gank other lanes frequently</td>
				</tr>
				<tr>
					<td><img src="images/badges/NoChill.svg"/></td>
					<td>No Chill</td>
					<td>Player that is super aggressive in lane</td>
				</tr>
				<tr>
					<td><img src="images/badges/1v9.svg"/></td>
					<td>1v9</td>
					<td>Legendary player that puts his team on his back and carries in terms of kills and damage</td>
				</tr>
				<tr>
					<td><img src="images/badges/PotentialCarry.svg"/></td>
					<td>Potential Carry </td>
					<td>Good player that is a big threat</td>
				</tr>
				<tr>
					<td><img src="images/badges/CSGod.svg"/></td>
					<td>CS God</td>
					<td>CS is at the level of a professional player</td>
				</tr>
				<tr>
					<td><img src="images/badges/CSAngel.svg"/></td>
					<td>CS Angel</td>
					<td>Above average level of CSing skill</td>
				</tr>
				<tr>
					<td><img src="images/badges/KindaBooty.svg"/></td>
					<td>Feeder</td>
					<td>Garbage Player</td>
				</tr>
				<tr>
					<td><img src="images/badges/KindaBooty.svg"/></td>
					<td>Kinda Booty</td>
					<td>Not a very good player</td>
				</tr>
				<tr>
					<td><img src="images/badges/EagleScout.svg"/></td>
					<td>Eagle Scout</td>
					<td>Jungler that has the tendency of camping a single lane</td>
				</tr>
			</table>
		</div>
	</div>
</body>
</html>