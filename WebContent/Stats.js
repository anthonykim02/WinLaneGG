
		var cgString = localStorage.getItem("CurrentGame");
		
		var obj = jQuery.parseJSON(cgString);
		
		var p1Name = obj.Participant1.Name;
		var p1Champion = obj.Participant1.Champion;
		var p1ProbRole = obj.Participant1.ProbRole;
		var p1Rank = obj.Participant1.Rank;
		var p1Summ1 = obj.Participant1.Summoner1;
		var p1Summ2 = obj.Participant1.Summoner2;
		var wl1, kda1, kp1, dmin1, dp1, csmin1, csdiff1, gdiff1, xpdiff1, sk1, sd1, tk1, mk1, bk1, tg1, mg1, bg1, ganktime1, firstt1, dragtime1, firstd1, rifttime1, firstr1, badges1;
		var fail1 = true;
		
		var p2Name = obj.Participant2.Name;
		var p2Champion = obj.Participant2.Champion;
		var p2ProbRole = obj.Participant2.ProbRole;
		var p2Rank = obj.Participant2.Rank;
		var p2Summ1 = obj.Participant2.Summoner1;
		var p2Summ2 = obj.Participant2.Summoner2;
		var wl2, kda2, kp2, dmin2, dp2, csmin2, csdiff2, gdiff2, xpdiff2, sk2, sd2, tk2, mk2, bk2, tg2, mg2, bg2, ganktime2, firstt2, dragtime2, firstd2, rifttime2, firstr2, badges2;
		var fail2 = true;
		
		var p3Name = obj.Participant3.Name;
		var p3Champion = obj.Participant3.Champion;
		var p3ProbRole = obj.Participant3.ProbRole;
		var p3Rank = obj.Participant3.Rank;
		var p3Summ1 = obj.Participant3.Summoner1;
		var p3Summ2 = obj.Participant3.Summoner2;
		var wl3, kda3, kp3, dmin3, dp3, csmin3, csdiff3, gdiff3, xpdiff3, sk3, sd3, tk3, mk3, bk3, tg3, mg3, bg3, ganktime3, firstt3, dragtime3, firstd3, rifttime3, firstr3, badges3;
		var fail3 = true;
		
		
		var p4Name = obj.Participant4.Name;
		var p4Champion = obj.Participant4.Champion;
		var p4ProbRole = obj.Participant4.ProbRole;
		var p4Rank = obj.Participant4.Rank;
		var p4Summ1 = obj.Participant4.Summoner1;
		var p4Summ2 = obj.Participant4.Summoner2;
		var wl4, kda4, kp4, dmin4, dp4, csmin4, csdiff4, gdiff4, xpdiff4, sk4, sd4, tk4, mk4, bk4, tg4, mg4, bg4, ganktime4, firstt4, dragtime4, firstd4, rifttime4, firstr4, badges4;
		var fail4 = true;
		
		
		var p5Name = obj.Participant5.Name;
		var p5Champion = obj.Participant5.Champion;
		var p5ProbRole = obj.Participant5.ProbRole;
		var p5Rank = obj.Participant5.Rank;
		var p5Summ1 = obj.Participant5.Summoner1;
		var p5Summ2 = obj.Participant5.Summoner2;
		var wl5, kda5, kp5, dmin5, dp5, csmin5, csdiff5, gdiff5, xpdiff5, sk5, sd5, tk5, mk5, bk5, tg5, mg5, bg5, ganktime5, firstt5, dragtime5, firstd5, rifttime5, firstr5, badges5;
		var fail5 = true;
		
		
		var p6Name = obj.Participant6.Name;
		var p6Champion = obj.Participant6.Champion;
		var p6ProbRole = obj.Participant6.ProbRole;
		var p6Rank = obj.Participant6.Rank;
		var p6Summ1 = obj.Participant6.Summoner1;
		var p6Summ2 = obj.Participant6.Summoner2;
		var wl6, kda6, kp6, dmin6, dp6, csmin6, csdiff6, gdiff6, xpdiff6, sk6, sd6, tk6, mk6, bk6, tg6, mg6, bg6, ganktime6, firstt6, dragtime6, firstd6, rifttime6, firstr6, badges6;
		var fail6 = true;
		
		
		var p7Name = obj.Participant7.Name;
		var p7Champion = obj.Participant7.Champion;
		var p7ProbRole = obj.Participant7.ProbRole;
		var p7Rank = obj.Participant7.Rank;
		var p7Summ1 = obj.Participant7.Summoner1;
		var p7Summ2 = obj.Participant7.Summoner2;
		var wl7, kda7, kp7, dmin7, dp7, csmin7, csdiff7, gdiff7, xpdiff7, sk7, sd7, tk7, mk7, bk7, tg7, mg7, bg7, ganktime7, firstt7, dragtime7, firstd7, rifttime7, firstr7, badges7;
		var fail7 = true;
		
		
		var p8Name = obj.Participant8.Name;
		var p8Champion = obj.Participant8.Champion;
		var p8ProbRole = obj.Participant8.ProbRole;
		var p8Rank = obj.Participant8.Rank;
		var p8Summ1 = obj.Participant8.Summoner1;
		var p8Summ2 = obj.Participant8.Summoner2;
		var wl8, kda8, kp8, dmin8, dp8, csmin8, csdiff8, gdiff8, xpdiff8, sk8, sd8, tk8, mk8, bk8, tg8, mg8, bg8, ganktime8, firstt8, dragtime8, firstd8, rifttime8, firstr8, badges8;
		var fail8 = true;
		
		
		var p9Name = obj.Participant9.Name;
		var p9Champion = obj.Participant9.Champion;
		var p9ProbRole = obj.Participant9.ProbRole;
		var p9Rank = obj.Participant9.Rank;
		var p9Summ1 = obj.Participant9.Summoner1;
		var p9Summ2 = obj.Participant9.Summoner2;
		var wl9, kda9, kp9, dmin9, dp9, csmin9, csdiff9, gdiff9, xpdiff9, sk9, sd9, tk9, mk9, bk9, tg9, mg9, bg9, ganktime9, firstt9, dragtime9, firstd9, rifttime9, firstr9, badges9;
		var fail9 = true;
		
		
		var p10Name = obj.Participant10.Name;
		var p10Champion = obj.Participant10.Champion;
		var p10ProbRole = obj.Participant10.ProbRole;
		var p10Rank = obj.Participant10.Rank;
		var p10Summ1 = obj.Participant10.Summoner1;
		var p10Summ2 = obj.Participant10.Summoner2;
		var wl10, kda10, kp10, dmin10, dp10, csmin10, csdiff10, gdiff10, xpdiff10, sk10, sd10, tk10, mk10, bk10, tg10, mg10, bg10, ganktime10, firstt10, dragtime10, firstd10, rifttime10, firstr10, badges10;
		var fail10 = true;
		
		
		// keeps track of menu items selected
		var blueclicked;
		var redclicked;
		
		$(document).ready(function() {
			
			// set summoner names on menu
			$("#summ1name").html(p1Name);
			$("#summ2name").html(p2Name);
			$("#summ3name").html(p3Name);
			$("#summ4name").html(p4Name);
			$("#summ5name").html(p5Name);
			$("#summ6name").html(p6Name);
			$("#summ7name").html(p7Name);
			$("#summ8name").html(p8Name);
			$("#summ9name").html(p9Name);
			$("#summ10name").html(p10Name);
			
			// set champ images on the menu
			$("#menuimg1").attr("src","images/champions/" + setChampImg(p1Champion) + ".png");
			$("#menuimg2").attr("src","images/champions/" + setChampImg(p2Champion) + ".png");
			$("#menuimg3").attr("src","images/champions/" + setChampImg(p3Champion) + ".png");
			$("#menuimg4").attr("src","images/champions/" + setChampImg(p4Champion) + ".png");
			$("#menuimg5").attr("src","images/champions/" + setChampImg(p5Champion) + ".png");
			$("#menuimg6").attr("src","images/champions/" + setChampImg(p6Champion) + ".png");
			$("#menuimg7").attr("src","images/champions/" + setChampImg(p7Champion) + ".png");
			$("#menuimg8").attr("src","images/champions/" + setChampImg(p8Champion) + ".png");
			$("#menuimg9").attr("src","images/champions/" + setChampImg(p9Champion) + ".png");
			$("#menuimg10").attr("src","images/champions/" + setChampImg(p10Champion) + ".png");
			
			// update champ view
			
			updateChamp(p1Champion, p1Rank, p1Summ1, p1Summ2, p1ProbRole, "blue");
			updateChamp(p6Champion, p6Rank, p6Summ1, p6Summ2, p6ProbRole, "red");
			blueclicked = $("#blueback1");
			redclicked = $("#redback1");
			
			// call search
			roleServlet(p1ProbRole, 1);
			roleServlet(p6ProbRole, 6);
//			roleServlet(p3ProbRole, 3);
//			roleServlet(6);
		
			$("#title").click(function() {
				 window.location.href = "index.html";
			});
			
			$("#menu1").click(function() {
				blueclicked.css("opacity", "0.6");
				$("#blueback1").css("opacity", "1");
				blueclicked = $("#blueback1");
				updateChamp(p1Champion, p1Rank, p1Summ1, p1Summ2, p1ProbRole, "blue");
				update1(p1ProbRole);
				});
			$("#menu2").click(function() {
				blueclicked.css("opacity", "0.6");
				$("#blueback2").css("opacity", "1");
				blueclicked = $("#blueback2");
				updateChamp(p2Champion, p2Rank, p2Summ1, p2Summ2, p2ProbRole, "blue");
				update2(p2ProbRole);
				});
			$("#menu3").click(function() {
				blueclicked.css("opacity", "0.6");
				$("#blueback3").css("opacity", "1");
				blueclicked = $("#blueback3");
				updateChamp(p3Champion, p3Rank, p3Summ1, p3Summ2, p3ProbRole, "blue");
				update3(p3ProbRole);
				});
			$("#menu4").click(function() {
				blueclicked.css("opacity", "0.6");
				$("#blueback4").css("opacity", "1");
				blueclicked = $("#blueback4");
				updateChamp(p4Champion, p4Rank, p4Summ1, p4Summ2, p4ProbRole, "blue");
				update4(p4ProbRole);
				});
			$("#menu5").click(function() {
				blueclicked.css("opacity", "0.6");
				$("#blueback5").css("opacity", "1");
				blueclicked = $("#blueback5");
				updateChamp(p5Champion, p5Rank, p5Summ1, p5Summ2, p5ProbRole, "blue");
				update5(p5ProbRole);
				});
			$("#menu6").click(function() {
				redclicked.css("opacity", "0.6");
				$("#redback1").css("opacity", "1");
				redclicked = $("#redback1");
				updateChamp(p6Champion, p6Rank, p6Summ1, p6Summ2, p6ProbRole, "red");
				update6(p6ProbRole);
				});
			$("#menu7").click(function() {
				redclicked.css("opacity", "0.6");
				$("#redback2").css("opacity", "1");
				redclicked = $("#redback2");
				updateChamp(p7Champion, p7Rank, p7Summ1, p7Summ2, p7ProbRole, "red");
				update7(p7ProbRole);
				});
			$("#menu8").click(function() {
				redclicked.css("opacity", "0.6");
				$("#redback3").css("opacity", "1");
				redclicked = $("#redback3");
				updateChamp(p8Champion, p8Rank, p8Summ1, p8Summ2, p8ProbRole, "red");
				update8(p8ProbRole);
				});
			$("#menu9").click(function() {
				redclicked.css("opacity", "0.6");
				$("#redback4").css("opacity", "1");
				redclicked = $("#redback4");
				updateChamp(p9Champion, p9Rank, p9Summ1, p9Summ2, p9ProbRole, "red");
				update9(p9ProbRole);
				});
			$("#menu10").click(function() {
				redclicked.css("opacity", "0.6");
				$("#redback5").css("opacity", "1");
				redclicked = $("#redback5");
				updateChamp(p10Champion, p10Rank, p10Summ1, p10Summ2, p10ProbRole, "red");
				update10(p10ProbRole);
				});
			
			
			
			
			$("#enter").click(function() {
				var name = $("#search").val();
		         $.post(
		             "GetUserServlet", 
		             {userName : name}, //meaasge you want to send
		             function(result) {
		//             $('#somediv').html(result); //message you want to show
		            	 
		            	 // store current game locally, open next webpage
		            	 localStorage.setItem("CurrentGame", result);
		            	 window.location.href = "Stats.jsp";
		         });
			});
			
		     });
		
		function updateChamp(champion, rank, summ1, summ2, role, side) {
			if (side == "blue") {
				$("#mainchampimgblue").attr("src","images/champions/" + setChampImg(champion) + ".png");
				$("#bluechampname").html(champion);
				$("#bluesummA").attr("src","images/summoners/" + summ1 + ".png");
				$("#bluesummB").attr("src","images/summoners/" + summ2+ ".png");
				$("#bluerank").html(rank);
				$("#bluerankimg").attr("src","images/ranks/" + setRankImg(rank) + ".png");
				$("#bluerole").html(role.toUpperCase());
			} else if (side == "red") {
				$("#mainchampimgred").attr("src","images/champions/" + setChampImg(champion) + ".png");
				$("#redchampname").html(champion);
				$("#redsummA").attr("src","images/summoners/" + summ1 + ".png");
				$("#redsummB").attr("src","images/summoners/" + summ2 + ".png");
				$("#redrank").html(rank);
				$("#redrankimg").attr("src","images/ranks/" + setRankImg(rank) + ".png");
				$("#redrole").html(role.toUpperCase());
			}
		}
		
		function setChampImg(name) {
			if (name == "Aurelion Sol") {
				return "AurelionSol";
			} else if (name == "Cho'Gath") { 
				return "Chogath";
			} else if (name == "Dr. Mundo") { // checked
				return "DrMundo";
			} else if (name == "Jarvan IV") {
				return "JarvanIV";
			} else if (name == "Kha'Zix") {
				return "Khazix";
			} else if (name == "Kog'Maw") { 
				return "KogMaw";
			} else if (name == "Lee Sin") {
				return "LeeSin";
			} else if (name == "Rek'Sai") {
				return "RekSai";
			} else if (name == "Master Yi"){
				return "MasterYi";
			} else if (name == "Miss Fortune") {
				return "MissFortune";
			} else if (name == "Tahm Kench") {
				return "TahmKench";
			} else if (name == "Twisted Fate") {
				return "TwistedFate";
			} else if (name == "Vel'Koz") {
				return "Velkoz";
			} else if (name == "Xin Zhao") { // checked
				return "XinZhao";
			} else {
				return name;
			}
		}
		
		function setRankImg(rank) {
			var first = rank.charAt(0);
			if (first == "B") {
				return "Bronze";
			} else if (first == "S") {
				return "Silver";
			} else if (first == "G") {
				return "Gold";
			} else if (first == "P") {
				return "Platinum";
			} else if (first == "D") {
				return "Diamond";
			} else if (first == "M") {
				return "Master";
			} else if (first == "C") {
				return "Challenger";
			} else if (first == "U") {
				return "Unranked";
			}
		}
		
		function roleServlet(role, num) {
	         $.post(
	             "GetUserServlet", 
	             {role : role, num : num}, //message you want to send
	             function(result) {
	             alert(result);
	             if (result.trim() == "SearchFail") {
	            	 	if (num == 1) {
	            	 		fail1 = true;
	            	 	} else if (num == 2) {
	            	 		fail2 = true;
	            	 	} else if (num == 3) {
	            	 		fail3 = true;
	            	 	} else if (num == 4) {
	            	 		fail4 = true;
	            	 	} else if (num == 5) {
	            	 		fail5 = true;
	            	 	} else if (num == 6) {
	            	 		fail6 = true;
	            	 	} else if (num == 7) {
	            	 		fail7 = true;
	            	 	} else if (num == 8) {
	            	 		fail8 = true;
	            	 	} else if (num == 9) {
	            	 		fail9 = true;
	            	 	} else if (num == 10) {
	            	 		fail10 = true;
	            	 	}
	             } else {
	            	 	var o = jQuery.parseJSON(result);
		             if (num == 1) {
		            	 	wl1 = o.WL;
		            	 	kda1 = o.KDA;
		            	 	kp1 = o.KP;
		            	 	dmin1 = o.DMGmin;
		             	dp1 = o.DMGP;
		             	csmin1 = o.CSmin;
		             	csdiff1 = o.CSdiff;
		             	gdiff1 = o.GoldDiff;
		             	xpdiff1 = o.XPdiff;
		             	ejgcs1 = o.eJGCS;
		             	sk1 = o.SoloKills;
		             	sd1 = o.SoloDeaths;
		             	tk1 = o.TopKills;
		             	mk1 = o.MidKills;
		             	bk1 = o.BotKills;
		             	tg1 = o.TopGanks;
		             	mg1 = o.MidGanks;
		             	bg1 = o.BotGanks;
		             	ganktime1 = o.FirstGankTime;
		             	firstt1 = o.FirstTurret;
		             	dragtime1 = o.FirstDragTime;
		             	firstd1 = o.FirstDrag;
		             	rifttime1 = o.FirstRiftTime;
		             	firstr1 = o.FirstRift;
		             	badges1 = o.Badges;
		             	
		             	// only update right after servlet call for summoners 1 and 6
		             	update1(role);
		             	
		             	
		             } else if (num == 2) {
		            	 	wl2 = o.WL;
		            	 	kda2 = o.KDA;
		            	 	kp2 = o.KP;
		            	 	dmin2 = o.DMGmin;
		             	dp2 = o.DMGP;
		             	csmin2 = o.CSmin;
		             	csdiff2 = o.CSdiff;
		             	gdiff2 = o.GoldDiff;
		             	xpdiff2 = o.XPdiff;
		             	ejgcs2 = o.eJGCS;
		             	sk2 = o.SoloKills;
		             	sd2 = o.SoloDeaths;
		             	tk2 = o.TopKills;
		             	mk2 = o.MidKills;
		             	bk2 = o.BotKills;
		             	tg2 = o.TopGanks;
		             	mg2 = o.MidGanks;
		             	bg2 = o.BotGanks;
		             	ganktime2 = o.FirstGankTime;
		             	firstt2 = o.FirstTurret;
		             	dragtime2 = o.FirstDragTime;
		             	firstd2 = o.FirstDrag;
		             	rifttime2 = o.FirstRiftTime;
		             	firstr2 = o.FirstRift;
		             	badges2 = o.Badges;
		             } else if (num == 3) {
		            	 	wl3 = o.WL;
		            	 	kda3 = o.KDA;
		            	 	kp3 = o.KP;
		            	 	dmin3 = o.DMGmin;
		             	dp3 = o.DMGP;
		             	csmin3 = o.CSmin;
		             	csdiff3 = o.CSdiff;
		             	gdiff3 = o.GoldDiff;
		             	xpdiff3 = o.XPdiff;
		             	ejgcs3 = o.eJGCS;
		             	sk3 = o.SoloKills;
		             	sd3 = o.SoloDeaths;
		             	tk3 = o.TopKills;
		             	mk3 = o.MidKills;
		             	bk3 = o.BotKills;
		             	tg3 = o.TopGanks;
		             	mg3 = o.MidGanks;
		             	bg3 = o.BotGanks;
		             	ganktime3 = o.FirstGankTime;
		             	firstt3 = o.FirstTurret;
		             	dragtime3 = o.FirstDragTime;
		             	firstd3 = o.FirstDrag;
		             	rifttime3 = o.FirstRiftTime;
		             	firstr3 = o.FirstRift;
		             	badges3 = o.Badges;
		             } else if (num == 4) {
		            	 	wl4 = o.WL;
		            	 	kda4 = o.KDA;
		            	 	kp4 = o.KP;
		            	 	dmin4 = o.DMGmin;
		             	dp4 = o.DMGP;
		             	csmin4 = o.CSmin;
		             	csdiff4 = o.CSdiff;
		             	gdiff4 = o.GoldDiff;
		             	xpdiff4 = o.XPdiff;
		             	ejgcs4 = o.eJGCS;
		             	sk4 = o.SoloKills;
		             	sd4 = o.SoloDeaths;
		             	tk4 = o.TopKills;
		             	mk4 = o.MidKills;
		             	bk4 = o.BotKills;
		             	tg4 = o.TopGanks;
		             	mg4 = o.MidGanks;
		             	bg4 = o.BotGanks;
		             	ganktime4 = o.FirstGankTime;
		             	firstt4 = o.FirstTurret;
		             	dragtime4 = o.FirstDragTime;
		             	firstd4 = o.FirstDrag;
		             	rifttime4 = o.FirstRiftTime;
		             	firstr4 = o.FirstRift;
		             	badges4 = o.Badges;
		             } else if (num == 5) {
		            	 	wl5 = o.WL;
		            	 	kda5 = o.KDA;
		            	 	kp5 = o.KP;
		            	 	dmin5 = o.DMGmin;
		             	dp5 = o.DMGP;
		             	csmin5 = o.CSmin;
		             	csdiff5 = o.CSdiff;
		             	gdiff5 = o.GoldDiff;
		             	xpdiff5 = o.XPdiff;
		             	ejgcs5 = o.eJGCS;
		             	sk5 = o.SoloKills;
		             	sd5 = o.SoloDeaths;
		             	tk5 = o.TopKills;
		             	mk5 = o.MidKills;
		             	bk5 = o.BotKills;
		             	tg5 = o.TopGanks;
		             	mg5 = o.MidGanks;
		             	bg5 = o.BotGanks;
		             	ganktime5 = o.FirstGankTime;
		             	firstt5 = o.FirstTurret;
		             	dragtime5 = o.FirstDragTime;
		             	firstd5 = o.FirstDrag;
		             	rifttime5 = o.FirstRiftTime;
		             	firstr5 = o.FirstRift;
		             	badges5 = o.Badges;
		             } else if (num == 6) {
		            	 	wl6 = o.WL;
		            	 	kda6 = o.KDA;
		            	 	kp6 = o.KP;
		            	 	dmin6 = o.DMGmin;
		             	dp6 = o.DMGP;
		             	csmin6 = o.CSmin;
		             	csdiff6 = o.CSdiff;
		             	gdiff6 = o.GoldDiff;
		             	xpdiff6 = o.XPdiff;
		             	ejgcs6 = o.eJGCS;
		             	sk6 = o.SoloKills;
		             	sd6 = o.SoloDeaths;
		             	tk6 = o.TopKills;
		             	mk6 = o.MidKills;
		             	bk6 = o.BotKills;
		             	tg6 = o.TopGanks;
		             	mg6 = o.MidGanks;
		             	bg6 = o.BotGanks;
		             	ganktime6 = o.FirstGankTime;
		             	firstt6 = o.FirstTurret;
		             	dragtime6 = o.FirstDragTime;
		             	firstd6 = o.FirstDrag;
		             	rifttime6 = o.FirstRiftTime;
		             	firstr6 = o.FirstRift;
		             	badges6 = o.Badges;
		             	
		             	update6(role);
		             	
		             } else if (num == 7) {
		            	 	wl7 = o.WL;
		            	 	kda7 = o.KDA;
		            	 	kp7 = o.KP;
		            	 	dmin7 = o.DMGmin;
		             	dp7 = o.DMGP;
		             	csmin7 = o.CSmin;
		             	csdiff7 = o.CSdiff;
		             	gdiff7 = o.GoldDiff;
		             	xpdiff7 = o.XPdiff;
		             	ejgcs7 = o.eJGCS;
		             	sk7 = o.SoloKills;
		             	sd7 = o.SoloDeaths;
		             	tk7 = o.TopKills;
		             	mk7 = o.MidKills;
		             	bk7 = o.BotKills;
		             	tg7 = o.TopGanks;
		             	mg7 = o.MidGanks;
		             	bg7 = o.BotGanks;
		             	ganktime7 = o.FirstGankTime;
		             	firstt7 = o.FirstTurret;
		             	dragtime7 = o.FirstDragTime;
		             	firstd7 = o.FirstDrag;
		             	rifttime7 = o.FirstRiftTime;
		             	firstr7 = o.FirstRift;
		             	badges7 = o.Badges;
		             } else if (num == 8) {
		            	 	wl8 = o.WL;
		            	 	kda8 = o.KDA;
		            	 	kp8 = o.KP;
		            	 	dmin8 = o.DMGmin;
		             	dp8 = o.DMGP;
		             	csmin8 = o.CSmin;
		             	csdiff8 = o.CSdiff;
		             	gdiff8 = o.GoldDiff;
		             	xpdiff8 = o.XPdiff;
		             	ejgcs8 = o.eJGCS;
		             	sk8 = o.SoloKills;
		             	sd8 = o.SoloDeaths;
		             	tk8 = o.TopKills;
		             	mk8 = o.MidKills;
		             	bk8 = o.BotKills;
		             	tg8 = o.TopGanks;
		             	mg8 = o.MidGanks;
		             	bg8 = o.BotGanks;
		             	ganktime8 = o.FirstGankTime;
		             	firstt8 = o.FirstTurret;
		             	dragtime8 = o.FirstDragTime;
		             	firstd8 = o.FirstDrag;
		             	rifttime8 = o.FirstRiftTime;
		             	firstr8 = o.FirstRift;
		             	badges8 = o.Badges;
		             } else if (num == 9) {
		            	 	wl9 = o.WL;
		            	 	kda9 = o.KDA;
		            	 	kp9 = o.KP;
		            	 	dmin9 = o.DMGmin;
		             	dp9 = o.DMGP;
		             	csmin9 = o.CSmin;
		             	csdiff9 = o.CSdiff;
		             	gdiff9 = o.GoldDiff;
		             	xpdiff9 = o.XPdiff;
		             	ejgcs9 = o.eJGCS;
		             	sk9 = o.SoloKills;
		             	sd9 = o.SoloDeaths;
		             	tk9 = o.TopKills;
		             	mk9 = o.MidKills;
		             	bk9 = o.BotKills;
		             	tg9 = o.TopGanks;
		             	mg9 = o.MidGanks;
		             	bg9 = o.BotGanks;
		             	ganktime9 = o.FirstGankTime;
		             	firstt9 = o.FirstTurret;
		             	dragtime9 = o.FirstDragTime;
		             	firstd9 = o.FirstDrag;
		             	rifttime9 = o.FirstRiftTime;
		             	firstr9 = o.FirstRift;
		             	badges9 = o.Badges;
		             } else if (num == 10) {
		            	 	wl10 = o.WL;
		            	 	kda10 = o.KDA;
		            	 	kp10 = o.KP;
		            	 	dmin10 = o.DMGmin;
		             	dp10 = o.DMGP;
		             	csmin10 = o.CSmin;
		             	csdiff10 = o.CSdiff;
		             	gdiff10 = o.GoldDiff;
		             	xpdiff10 = o.XPdiff;
		             	ejgcs10 = o.eJGCS;
		             	sk10 = o.SoloKills;
		             	sd10 = o.SoloDeaths;
		             	tk10 = o.TopKills;
		             	mk10 = o.MidKills;
		             	bk10 = o.BotKills;
		             	tg10 = o.TopGanks;
		             	mg10 = o.MidGanks;
		             	bg10 = o.BotGanks;
		             	ganktime10 = o.FirstGankTime;
		             	firstt10 = o.FirstTurret;
		             	dragtime10 = o.FirstDragTime;
		             	firstd10 = o.FirstDrag;
		             	rifttime10 = o.FirstRiftTime;
		             	firstr10 = o.FirstRift;
		             	badges10 = o.Badges;
		             }
		             
	             }
	             
	             
	             
	         });
		}
		
		function update1(r) {
			if (fail1) {
				$("#bluesearchfail").css("visibility", "visible");
				$("#bluestatpresent").css("visibility", "hidden");
			} else {
				$("#bluesearchfail").css("visibility", "hidden");
				$("#bluestatpresent").css("visibility", "visible");
			}
			if (r == "top") {
         		updateBlueTop(wl1, kda1, kp1, csmin1, csdiff1, gdiff1, dp1, sk1, sd1, mg1, bg1, firstt1);
         	} else if (r == "jungle") {
         		updateBlueJungle(wl1, kda1, kp1, ejgcs1, gdiff1, dp1, tg1, mg1, bg1, ganktime1, firstd1, firstr1);
         	} else if (r == "mid") {
         		updateBlueMid(wl1, kda1, kp1, csmin1, csdiff1, gdiff1, dp1, sk1, sd1, tg1, bg1, firstt1);
         	} else if (r == "bot") {
         		updateBlueBot(wl1, kda1, kp1, csmin1, csdiff1, gdiff1, dp1, sk1, sd1, tg1, mg1, firstt1);
         	} else if (r == "supp") {
         		updateBlueSupp(wl1, kda1, kp1, csmin1, csdiff1, gdiff1, dp1, sk1, sd1, tg1, mg1, firstt1);
         	}	
			updateBlueBadges(badges1);
		}
		
		function update2(r) {
			if (fail2) {
				$("#bluesearchfail").css("visibility", "visible");
				$("#bluestatpresent").css("visibility", "hidden");
			} else {
				$("#bluesearchfail").css("visibility", "hidden");
				$("#bluestatpresent").css("visibility", "visible");
			}
			if (r == "top") {
         		updateBlueTop(wl2, kda2, kp2, csmin2, csdiff2, gdiff2, dp2, sk2, sd2, mg2, bg2, firstt2);
         	} else if (r == "jungle") {
         		updateBlueJungle(wl2, kda2, kp2, ejgcs2, gdiff2, dp2, tg2, mg2, bg2, ganktime2, firstd2, firstr2);
         	} else if (r == "mid") {
         		updateBlueMid(wl2, kda2, kp2, csmin2, csdiff2, gdiff2, dp2, sk2, sd2, tg2, bg2, firstt2);
         	} else if (r == "bot") {
         		updateBlueBot(wl2, kda2, kp2, csmin2, csdiff2, gdiff2, dp2, sk2, sd2, tg2, mg2, firstt2);
         	} else if (r == "supp") {
         		updateBlueSupp(wl2, kda2, kp2, csmin2, csdiff2, gdiff2, dp2, sk2, sd2, tg2, mg2, firstt2);
         	}
			updateBlueBadges(badges2);
		}
		
		function update3(r) {
			if (fail3) {
				$("#bluesearchfail").css("visibility", "visible");
				$("#bluestatpresent").css("visibility", "hidden");
			} else {
				$("#bluesearchfail").css("visibility", "hidden");
				$("#bluestatpresent").css("visibility", "visible");
			}
			if (r == "top") {
         		updateBlueTop(wl3, kda3, kp3, csmin3, csdiff3, gdiff3, dp3, sk3, sd3, mg3, bg3, firstt3);
         	} else if (r == "jungle") {
         		updateBlueJungle(wl3, kda3, kp3, ejgcs3, gdiff3, dp3, tg3, mg3, bg3, ganktime3, firstd3, firstr3);
         	} else if (r == "mid") {
         		updateBlueMid(wl3, kda3, kp3, csmin3, csdiff3, gdiff3, dp3, sk3, sd3, tg3, bg3, firstt3);
         	} else if (r == "bot") {
         		updateBlueBot(wl3, kda3, kp3, csmin3, csdiff3, gdiff3, dp3, sk3, sd3, tg3, mg3, firstt3);
         	} else if (r == "supp") {
         		updateBlueSupp(wl3, kda3, kp3, csmin3, csdiff3, gdiff3, dp3, sk3, sd3, tg3, mg3, firstt3);
         	}
			updateBlueBadges(badges3);
		}
		
		function update4(r) {
			if (fail4) {
				$("#bluesearchfail").css("visibility", "visible");
				$("#bluestatpresent").css("visibility", "hidden");
			} else {
				$("#bluesearchfail").css("visibility", "hidden");
				$("#bluestatpresent").css("visibility", "visible");
			}
			if (r == "top") {
         		updateBlueTop(wl4, kda4, kp4, csmin4, csdiff4, gdiff4, dp4, sk4, sd4, mg4, bg4, firstt4);
         	} else if (r == "jungle") {
         		updateBlueJungle(wl4, kda4, kp4, ejgcs4, gdiff4, dp4, tg4, mg4, bg4, ganktime4, firstd4, firstr4);
         	} else if (r == "mid") {
         		updateBlueMid(wl4, kda4, kp4, csmin4, csdiff4, gdiff4, dp4, sk4, sd4, tg4, bg4, firstt4);
         	} else if (r == "bot") {
         		updateBlueBot(wl4, kda4, kp4, csmin4, csdiff4, gdiff4, dp4, sk4, sd4, tg4, mg4, firstt4);
         	} else if (r == "supp") {
         		updateBlueSupp(wl4, kda4, kp4, csmin4, csdiff4, gdiff4, dp4, sk4, sd4, tg4, mg4, firstt4);
         	}
			updateBlueBadges(badges4);
		}
		
		function update5(r) {
			if (fail5) {
				$("#bluesearchfail").css("visibility", "visible");
				$("#bluestatpresent").css("visibility", "hidden");
			} else {
				$("#bluesearchfail").css("visibility", "hidden");
				$("#bluestatpresent").css("visibility", "visible");
			}
			if (r == "top") {
         		updateBlueTop(wl5, kda5, kp5, csmin5, csdiff5, gdiff5, dp5, sk5, sd5, mg5, bg5, firstt5);
         	} else if (r == "jungle") {
         		updateBlueJungle(wl5, kda5, kp5, ejgcs5, gdiff5, dp5, tg5, mg5, bg5, ganktime5, firstd5, firstr5);
         	} else if (r == "mid") {
         		updateBlueMid(wl5, kda5, kp5, csmin5, csdiff5, gdiff5, dp5, sk5, sd5, tg5, bg5, firstt5);
         	} else if (r == "bot") {
         		updateBlueBot(wl5, kda5, kp5, csmin5, csdiff5, gdiff5, dp5, sk5, sd5, tg5, mg5, firstt5);
         	} else if (r == "supp") {
         		updateBlueSupp(wl5, kda5, kp5, csmin5, csdiff5, gdiff5, dp5, sk5, sd5, tg5, mg5, firstt5);
         	}
			updateBlueBadges(badges5);
		}
		
		function update6(r) {
			if (fail6) {
				$("#redsearchfail").css("visibility", "visible");
				$("#redstatpresent").css("visibility", "hidden");
			} else {
				$("#redsearchfail").css("visibility", "hidden");
				$("#redstatpresent").css("visibility", "visible");
			}
			if (r == "top") {
         		updateRedTop(wl6, kda6, kp6, csmin6, csdiff6, gdiff6, dp6, sk6, sd6, mg6, bg6, firstt6);
         	} else if (r == "jungle") {
         		updateRedJungle(wl6, kda6, kp6, ejgcs6, gdiff6, dp6, tg6, mg6, bg6, ganktime6, firstd6, firstr6);
         	} else if (r == "mid") {
         		updateRedMid(wl6, kda6, kp6, csmin6, csdiff6, gdiff6, dp6, sk6, sd6, tg6, bg6, firstt6);
         	} else if (r == "bot") {
         		updateRedBot(wl6, kda6, kp6, csmin6, csdiff6, gdiff6, dp6, sk6, sd6, tg6, mg6, firstt6);
         	} else if (r == "supp") {
         		updateRedSupp(wl6, kda6, kp6, csmin6, csdiff6, gdiff6, dp6, sk6, sd6, tg6, mg6, firstt6);
         	}
			updateRedBadges(badges6);
		}
		function update7(r) {
			if (fail7) {
				$("#redsearchfail").css("visibility", "visible");
				$("#redstatpresent").css("visibility", "hidden");
			} else {
				$("#redsearchfail").css("visibility", "hidden");
				$("#redstatpresent").css("visibility", "visible");
			}
			if (r == "top") {
         		updateRedTop(wl7, kda7, kp7, csmin7, csdiff7, gdiff7, dp7, sk7, sd7, mg7, bg7, firstt7);
         	} else if (r == "jungle") {
         		updateRedJungle(wl7, kda7, kp7, ejgcs7, gdiff7, dp7, tg7, mg7, bg7, ganktime7, firstd7, firstr7);
         	} else if (r == "mid") {
         		updateRedMid(wl7, kda7, kp7, csmin7, csdiff7, gdiff7, dp7, sk7, sd7, tg7, bg7, firstt7);
         	} else if (r == "bot") {
         		updateRedBot(wl7, kda7, kp7, csmin7, csdiff7, gdiff7, dp7, sk7, sd7, tg7, mg7, firstt7);
         	} else if (r == "supp") {
         		updateRedSupp(wl7, kda7, kp7, csmin7, csdiff7, gdiff7, dp7, sk7, sd7, tg7, mg7, firstt7);
         	}
			updateRedBadges(badges7);
		}
		
		function update8(r) {
			if (fail8) {
				$("#redsearchfail").css("visibility", "visible");
				$("#redstatpresent").css("visibility", "hidden");
			} else {
				$("#redsearchfail").css("visibility", "hidden");
				$("#redstatpresent").css("visibility", "visible");
			}
			if (r == "top") {
         		updateRedTop(wl8, kda8, kp8, csmin8, csdiff8, gdiff8, dp8, sk8, sd8, mg8, bg8, firstt8);
         	} else if (r == "jungle") {
         		updateRedJungle(wl8, kda8, kp8, ejgcs8, gdiff8, dp8, tg8, mg8, bg8, ganktime8, firstd8, firstr8);
         	} else if (r == "mid") {
         		updateRedMid(wl8, kda8, kp8, csmin8, csdiff8, gdiff8, dp8, sk8, sd8, tg8, bg8, firstt8);
         	} else if (r == "bot") {
         		updateRedBot(wl8, kda8, kp8, csmin8, csdiff8, gdiff8, dp8, sk8, sd8, tg8, mg8, firstt8);
         	} else if (r == "supp") {
         		updateRedSupp(wl8, kda8, kp8, csmin8, csdiff8, gdiff8, dp8, sk8, sd8, tg8, mg8, firstt8);
         	}
			updateRedBadges(badges8);
		}
		
		function update9(r) {
			if (fail9) {
				$("#redsearchfail").css("visibility", "visible");
				$("#redstatpresent").css("visibility", "hidden");
			} else {
				$("#redsearchfail").css("visibility", "hidden");
				$("#redstatpresent").css("visibility", "visible");
			}
			if (r == "top") {
         		updateRedTop(wl9, kda9, kp9, csmin9, csdiff9, gdiff9, dp9, sk9, sd9, mg9, bg9, firstt9);
         	} else if (r == "jungle") {
         		updateRedJungle(wl9, kda9, kp9, ejgcs9, gdiff9, dp9, tg9, mg9, bg9, ganktime9, firstd9, firstr9);
         	} else if (r == "mid") {
         		updateRedMid(wl9, kda9, kp9, csmin9, csdiff9, gdiff9, dp9, sk9, sd9, tg9, bg9, firstt9);
         	} else if (r == "bot") {
         		updateRedBot(wl9, kda9, kp9, csmin9, csdiff9, gdiff9, dp9, sk9, sd9, tg9, mg9, firstt9);
         	} else if (r == "supp") {
         		updateRedSupp(wl9, kda9, kp9, csmin9, csdiff9, gdiff9, dp9, sk9, sd9, tg9, mg9, firstt9);
         	}
			updateRedBadges(badges9);
		}
		
		function update10(r) {
			if (fail10) {
				$("#redsearchfail").css("visibility", "visible");
				$("#redstatpresent").css("visibility", "hidden");
			} else {
				$("#redsearchfail").css("visibility", "hidden");
				$("#redstatpresent").css("visibility", "visible");
			}
			if (r == "top") {
         		updateRedTop(wl10, kda10, kp10, csmin10, csdiff10, gdiff10, dp10, sk10, sd10, mg10, bg10, firstt10);
         	} else if (r == "jungle") {
         		updateRedJungle(wl10, kda10, kp10, ejgcs10, gdiff10, dp10, tg10, mg10, bg10, ganktime10, firstd10, firstr10);
         	} else if (r == "mid") {
         		updateRedMid(wl10, kda10, kp10, csmin10, csdiff10, gdiff10, dp10, sk10, sd10, tg10, bg10, firstt10);
         	} else if (r == "bot") {
         		updateRedBot(wl10, kda10, kp10, csmin10, csdiff10, gdiff10, dp10, sk10, sd10, tg10, mg10, firstt10);
         	} else if (r == "supp") {
         		updateRedSupp(wl10, kda10, kp10, csmin10, csdiff10, gdiff10, dp10, sk10, sd10, tg10, mg10, firstt10);
         	}
			updateRedBadges(badges10);
		}
		
		function updateBlueTop(wl, kda, kp, csmin, csdiff, gdiff, dp, sk, sd, mg, bg, firstt) {
			
			// winrate
			$("#bluestat11").html(wl);
			getPercentage($("#bluebar11"), 0, 80, wl - 10, false);
			
			// solokill
			$("#bluelabel12").html("Solo Kills");
			$("#bluestat12").html(sk);
			getPercentage($("#bluebar12"), 0, 2.5, sk, false);
			
         	// kda
         	$("#bluestat21").html(kda);
         	getPercentage($("#bluebar21"), 0, 4, kda, false);
         	
         	// solodeath
         	$("#bluelabel22").html("Solo Deaths");
         	$("#bluestat22").html(sd);
         	getPercentage($("#bluebar22"), 0, 2.5, sd, true);
         	
         	// kp
         	$("#bluestat31").html(kp);
         	getPercentage($("#bluebar31"), 0, 70, kp - 10, false);
         	
         	// mid gank
         	$("#bluelabel32").html("Mid Ganks");
         	$("#bluestat32").html(mg); // depends what role
         	getPercentage($("#bluebar32"), 0, 2, mg, false);
         	
         	// csmin
         	$("#bluelabel41").html("CS/min");
         	$("#bluestat41").html(csmin);
         	getPercentage($("#bluebar41"), 0, 9, csmin - 1, false);
         	
         	// bot gank
         	$("#bluelabel42").html("Bot Ganks");
         	$("#bluestat42").html(bg); // depends what role
         	getPercentage($("#bluebar42"), 0, 2, bg, false);
         	
         	// cs diff
         	$("#bluelabel51").html("CSD@15");
         	$("#bluestat51").html(csdiff);
         	getPercentage($("#bluebar51"), 0, 50, csdiff + 25, false);
         	
         	// first turret
         	$("#bluelabel52").html("First Turret");
         	$("#bluestat52").html(firstt);
         	getPercentage($("#bluebar52"), 0, 100, firstt, false);
         	
         	// gold diff
         	$("#bluelabel61").html("GoldDiff@15");
         	$("#bluestat61").html(gdiff);
         	getPercentage($("#bluebar61"), 0, 2000, gdiff + 1000, false);
         	
         	// empty 62
         	$("#bluelabel62").html("");
         	$("#blueempty62").hide();
         	
         	// dmg %, restore 71
         	$("#bluelabel71").html("DMG%");
         	$("#blueempty71").show();
         	$("#bluestat71").html(dp);
         	getPercentage($("#bluebar71"), 0, 30, dp - 5, false);
         	
         	// empty 72
         	$("#bluelabel72").html("");
         	$("#blueempty72").hide();
		}
		
		function updateBlueJungle(wl, kda, kp, ejgcs, gdiff, dp, tg, mg, bg, ganktime, firstd, firstr) {
			// winrate
			$("#bluestat11").html(wl);
			getPercentage($("#bluebar11"), 0, 80, wl - 10, false);
			
			// top ganks
			$("#bluelabel12").html("Top Ganks");
			$("#bluestat12").html(tg);
			getPercentage($("#bluebar12"), 0, 3, tg, false);
			
         	// kda
         	$("#bluestat21").html(kda);
         	getPercentage($("#bluebar21"), 0, 4, kda, false);
         	
         	// mid ganks
         	$("#bluelabel22").html("Mid Ganks");
         	$("#bluestat22").html(mg);
         	getPercentage($("#bluebar22"), 0, 3, mg, false);
         	
         	// kp
         	$("#bluestat31").html(kp);
         	getPercentage($("#bluebar31"), 0, 70, kp - 10, false);
         	
         	// bot ganks
         	$("#bluelabel32").html("Bot Ganks");
         	$("#bluestat32").html(bg); // depends what role
         	getPercentage($("#bluebar32"), 0, 3, bg, false);
         	
         	// enemy jg cs
         	$("#bluelabel41").html("eJgCS/min");
         	$("#bluestat41").html(ejgcs);
         	getPercentage($("#bluebar41"), 0, 5, ejgcs, false);
         	
         	// first gank time
         	$("#bluelabel42").html("First Gank");
         	$("#bluestat42").html(ganktime); // depends what role
         	getPercentage($("#bluebar42"), 0, 9, ganktime - 1, true);
         	
         	// gold diff
         	$("#bluelabel51").html("GoldD@15");
         	$("#bluestat51").html(gdiff);
         	getPercentage($("#bluebar51"), 0, 2000, gdiff + 1000, false);
         	
         	// first drag %
         	$("#bluelabel52").html("First Drag");
         	$("#bluestat52").html(firstd);
         	getPercentage($("#bluebar52"), 0, 100, firstd, false);
         	
         	// dmg%
         	$("#bluelabel61").html("DMG%");
         	$("#bluestat61").html(dp);
         	getPercentage($("#bluebar61"), 0, 30, dp - 5, false);
         	
         	// rift %, restore 62
         	$("#bluelabel62").html("Rift");
         	$("#blueempty62").show();
         	$("#bluestat62").html(firstr);
         	getPercentage($("#bluebar62"), 0, 100, firstr, false);
         	
         	// empty 71
         	$("#bluelabel71").html("");
         	$("#blueempty71").hide();
         	
         	// empty 72
         	$("#bluelabel72").html("");
         	$("#blueempty72").hide();
		}
		
		function updateBlueMid(wl, kda, kp, csmin, csdiff, gdiff, dp, sk, sd, tg, bg, firstt) {
			// winrate
			$("#bluestat11").html(wl);
			getPercentage($("#bluebar11"), 0, 80, wl - 10, false);
			
			// solokill
			$("#bluelabel12").html("Solo Kills");
			$("#bluestat12").html(sk);
			getPercentage($("#bluebar12"), 0, 2.5, sk, false);
			
         	// kda
         	$("#bluestat21").html(kda);
         	getPercentage($("#bluebar21"), 0, 4, kda, false);
         	
         	// solodeath
         	$("#bluelabel22").html("Solo Deaths");
         	$("#bluestat22").html(sd);
         	getPercentage($("#bluebar22"), 0, 2.5, sd, true);
         	
         	// kp
         	$("#bluestat31").html(kp);
         	getPercentage($("#bluebar31"), 0, 70, kp - 10, false);
         	
         	// top gank
         	$("#bluelabel32").html("Top Ganks");
         	$("#bluestat32").html(tg); // depends what role
         	getPercentage($("#bluebar32"), 0, 2, tg, false);
         	
         	// csmin
         	$("#bluelabel41").html("CS/min");
         	$("#bluestat41").html(csmin);
         	getPercentage($("#bluebar41"), 0, 9, csmin - 1, false);
         	
         	// bot gank
         	$("#bluelabel42").html("Bot Ganks");
         	$("#bluestat42").html(bg); // depends what role
         	getPercentage($("#bluebar42"), 0, 2, bg, false);
         	
         	// cs diff
         	$("#bluelabel51").html("CSD@15");
         	$("#bluestat51").html(csdiff);
         	getPercentage($("#bluebar51"), 0, 50, csdiff + 25, false);
         	
         	// first turret
         	$("#bluelabel52").html("First Turret");
         	$("#bluestat52").html(firstt);
         	getPercentage($("#bluebar52"), 0, 100, firstt, false);
         	
         	// gold diff
         	$("#bluelabel61").html("GoldDiff@15");
         	$("#bluestat61").html(gdiff);
         	getPercentage($("#bluebar61"), 0, 2000, gdiff + 1000, false);
         	
         	// empty 62
         	$("#bluelabel62").html("");
         	$("#blueempty62").hide();
         	
         	// dmg %, restore 71
         	$("#bluelabel71").html("DMG%");
         	$("#blueempty71").show();
         	$("#bluestat71").html(dp);
         	getPercentage($("#bluebar71"), 0, 30, dp - 5, false);
         	
         	// empty 72
         	$("#bluelabel72").html("");
         	$("#blueempty72").hide();
		}
		
		function updateBlueBot(wl, kda, kp, csmin, csdiff, gdiff, dp, sk, sd, tg, mg, firstt) {
			// winrate
			$("#bluestat11").html(wl);
			getPercentage($("#bluebar11"), 0, 80, wl - 10, false);
			
			// solokill
			$("#bluelabel12").html("Solo Kills");
			$("#bluestat12").html(sk);
			getPercentage($("#bluebar12"), 0, 2.5, sk, false);
			
         	// kda
         	$("#bluestat21").html(kda);
         	getPercentage($("#bluebar21"), 0, 4, kda, false);
         	
         	// solodeath
         	$("#bluelabel22").html("Solo Deaths");
         	$("#bluestat22").html(sd);
         	getPercentage($("#bluebar22"), 0, 2.5, sd, true);
         	
         	// kp
         	$("#bluestat31").html(kp);
         	getPercentage($("#bluebar31"), 0, 70, kp - 10, false);
         	
         	// top gank
         	$("#bluelabel32").html("Top Ganks");
         	$("#bluestat32").html(tg); // depends what role
         	getPercentage($("#bluebar32"), 0, 2, tg, false);
         	
         	// csmin
         	$("#bluelabel41").html("CS/min");
         	$("#bluestat41").html(csmin);
         	getPercentage($("#bluebar41"), 0, 9, csmin - 1, false);
         	
         	// mid gank
         	$("#bluelabel42").html("Mid Ganks");
         	$("#bluestat42").html(mg); // depends what role
         	getPercentage($("#bluebar42"), 0, 2, mg, false);
         	
         	// cs diff
         	$("#bluelabel51").html("CSD@15");
         	$("#bluestat51").html(csdiff);
         	getPercentage($("#bluebar51"), 0, 50, csdiff + 25, false);
         	
         	// first turret
         	$("#bluelabel52").html("First Turret");
         	$("#bluestat52").html(firstt);
         	getPercentage($("#bluebar52"), 0, 100, firstt, false);
         	
         	// gold diff
         	$("#bluelabel61").html("GoldDiff@15");
         	$("#bluestat61").html(gdiff);
         	getPercentage($("#bluebar61"), 0, 2000, gdiff + 1000, false);
         	
         	// empty 62
         	$("#bluelabel62").html("");
         	$("#blueempty62").hide();
         	
         	// dmg %, restore 71
         	$("#bluelabel71").html("DMG%");
         	$("#blueempty71").show();
         	$("#bluestat71").html(dp);
         	getPercentage($("#bluebar71"), 0, 30, dp - 5, false);
         	
         	// empty 72
         	$("#bluelabel72").html("");
         	$("#blueempty72").hide();
		}
		
		function updateBlueSupp(wl, kda, kp, csmin, csdiff, gdiff, dp, sk, sd, tg, mg, firstt) {
			// winrate
			$("#bluestat11").html(wl);
			getPercentage($("#bluebar11"), 0, 80, wl - 10, false);
			
			// solokill
			$("#bluelabel12").html("Solo Kills");
			$("#bluestat12").html(sk);
			getPercentage($("#bluebar12"), 0, 2.5, sk, false);
			
         	// kda
         	$("#bluestat21").html(kda);
         	getPercentage($("#bluebar21"), 0, 4, kda, false);
         	
         	// solodeath
         	$("#bluelabel22").html("Solo Deaths");
         	$("#bluestat22").html(sd);
         	getPercentage($("#bluebar22"), 0, 2.5, sd, true);
         	
         	// kp
         	$("#bluestat31").html(kp);
         	getPercentage($("#bluebar31"), 0, 70, kp - 10, false);
         	
         	// top gank
         	$("#bluelabel32").html("Top Ganks");
         	$("#bluestat32").html(tg); // depends what role
         	getPercentage($("#bluebar32"), 0, 2, tg, false);
         	
         	// csmin
         	$("#bluelabel41").html("CS/min");
         	$("#bluestat41").html(csmin);
         	getPercentage($("#bluebar41"), 0, 9, csmin - 1, false);
         	
         	// mid gank
         	$("#bluelabel42").html("Mid Ganks");
         	$("#bluestat42").html(mg); // depends what role
         	getPercentage($("#bluebar42"), 0, 2, mg, false);
         	
         	// cs diff
         	$("#bluelabel51").html("CSD@15");
         	$("#bluestat51").html(csdiff);
         	getPercentage($("#bluebar51"), 0, 50, csdiff + 25, false);
         	
         	// first turret
         	$("#bluelabel52").html("First Turret");
         	$("#bluestat52").html(firstt);
         	getPercentage($("#bluebar52"), 0, 100, firstt, false);
         	
         	// gold diff
         	$("#bluelabel61").html("GoldDiff@15");
         	$("#bluestat61").html(gdiff);
         	getPercentage($("#bluebar61"), 0, 2000, gdiff + 1000, false);
         	
         	// empty 62
         	$("#bluelabel62").html("");
         	$("#blueempty62").hide();
         	
         	// dmg %, restore 71
         	$("#bluelabel71").html("DMG%");
         	$("#blueempty71").show();
         	$("#bluestat71").html(dp);
         	getPercentage($("#bluebar71"), 0, 30, dp - 5, false);
         	
         	// empty 72
         	$("#bluelabel72").html("");
         	$("#blueempty72").hide();
		}
		
		
		function updateRedTop(wl, kda, kp, csmin, csdiff, gdiff, dp, sk, sd, mg, bg, firstt) {
			
			// winrate
			$("#redstat11").html(wl);
			getPercentage($("#redbar11"), 0, 80, wl - 10, false);
			
			// solokill
			$("#redlabel12").html("Solo Kills");
			$("#redstat12").html(sk);
			getPercentage($("#redbar12"), 0, 2.5, sk, false);
			
         	// kda
         	$("#redstat21").html(kda);
         	getPercentage($("#redbar21"), 0, 4, kda, false);
         	
         	// solodeath
         	$("#redlabel22").html("Solo Deaths");
         	$("#redstat22").html(sd);
         	getPercentage($("#redbar22"), 0, 2.5, sd, true);
         	
         	// kp
         	$("#redstat31").html(kp);
         	getPercentage($("#redbar31"), 0, 70, kp - 10, false);
         	
         	// mid gank
         	$("#redlabel32").html("Mid Ganks");
         	$("#redstat32").html(mg); // depends what role
         	getPercentage($("#redbar32"), 0, 2, mg, false);
         	
         	// csmin
         	$("#redlabel41").html("CS/min");
         	$("#redstat41").html(csmin);
         	getPercentage($("#redbar41"), 0, 9, csmin - 1, false);
         	
         	// bot gank
         	$("#redlabel42").html("Bot Ganks");
         	$("#redstat42").html(bg); // depends what role
         	getPercentage($("#redbar42"), 0, 2, bg, false);
         	
         	// cs diff
         	$("#redlabel51").html("CSD@15");
         	$("#redstat51").html(csdiff);
         	getPercentage($("#redbar51"), 0, 50, csdiff + 25, false);
         	
         	// first turret
         	$("#redlabel52").html("First Turret");
         	$("#redstat52").html(firstt);
         	getPercentage($("#redbar52"), 0, 100, firstt, false);
         	
         	// gold diff
         	$("#redlabel61").html("GoldDiff@15");
         	$("#redstat61").html(gdiff);
         	getPercentage($("#redbar61"), 0, 2000, gdiff + 1000, false);
         	
         	// empty 62
         	$("#redlabel62").html("");
         	$("#redempty62").hide();
         	
         	// dmg %, restore 71
         	$("#redlabel71").html("DMG%");
         	$("#redempty71").show();
         	$("#redstat71").html(dp);
         	getPercentage($("#redbar71"), 0, 30, dp - 5, false);
         	
         	// empty 72
         	$("#redlabel72").html("");
         	$("#redempty72").hide();
		}
		
		function updateRedJungle(wl, kda, kp, ejgcs, gdiff, dp, tg, mg, bg, ganktime, firstd, firstr) {
			// winrate
			$("#redstat11").html(wl);
			getPercentage($("#redbar11"), 0, 80, wl - 10, false);
			
			// top ganks
			$("#redlabel12").html("Top Ganks");
			$("#redstat12").html(tg);
			getPercentage($("#redbar12"), 0, 3, tg, false);
			
         	// kda
         	$("#redstat21").html(kda);
         	getPercentage($("#redbar21"), 0, 4, kda, false);
         	
         	// mid ganks
         	$("#redlabel22").html("Mid Ganks");
         	$("#redstat22").html(mg);
         	getPercentage($("#redbar22"), 0, 3, mg, false);
         	
         	// kp
         	$("#redstat31").html(kp);
         	getPercentage($("#redbar31"), 0, 70, kp - 10, false);
         	
         	// bot ganks
         	$("#redlabel32").html("Bot Ganks");
         	$("#redstat32").html(bg); // depends what role
         	getPercentage($("#redbar32"), 0, 3, bg, false);
         	
         	// enemy jg cs
         	$("#redlabel41").html("eJgCS/min");
         	$("#redstat41").html(ejgcs);
         	getPercentage($("#redbar41"), 0, 5, ejgcs, false);
         	
         	// first gank time
         	$("#redlabel42").html("First Gank");
         	$("#redstat42").html(ganktime); // depends what role
         	getPercentage($("#redbar42"), 0, 9, ganktime - 1, true);
         	
         	// gold diff
         	$("#redlabel51").html("GoldD@15");
         	$("#redstat51").html(gdiff);
         	getPercentage($("#redbar51"), 0, 2000, gdiff + 1000, false);
         	
         	// first drag %
         	$("#redlabel52").html("First Drag");
         	$("#redstat52").html(firstd);
         	getPercentage($("#redbar52"), 0, 100, firstd, false);
         	
         	// dmg%
         	$("#redlabel61").html("DMG%");
         	$("#redstat61").html(dp);
         	getPercentage($("#redbar61"), 0, 30, dp - 5, false);
         	
         	// rift %, restore 62
         	$("#redlabel62").html("Rift");
         	$("#redempty62").show();
         	$("#redstat62").html(firstr);
         	getPercentage($("#redbar62"), 0, 100, firstr, false);
         	
         	// empty 71
         	$("#redlabel71").html("");
         	$("#redempty71").hide();
         	
         	// empty 72
         	$("#redlabel72").html("");
         	$("#redempty72").hide();
		}
		
		function updateRedMid(wl, kda, kp, csmin, csdiff, gdiff, dp, sk, sd, tg, bg, firstt) {
			// winrate
			$("#redstat11").html(wl);
			getPercentage($("#redbar11"), 0, 80, wl - 10, false);
			
			// solokill
			$("#redlabel12").html("Solo Kills");
			$("#redstat12").html(sk);
			getPercentage($("#redbar12"), 0, 2.5, sk, false);
			
         	// kda
         	$("#redstat21").html(kda);
         	getPercentage($("#redbar21"), 0, 4, kda, false);
         	
         	// solodeath
         	$("#redlabel22").html("Solo Deaths");
         	$("#redstat22").html(sd);
         	getPercentage($("#redbar22"), 0, 2.5, sd, true);
         	
         	// kp
         	$("#redstat31").html(kp);
         	getPercentage($("#redbar31"), 0, 70, kp - 10, false);
         	
         	// top gank
         	$("#redlabel32").html("Top Ganks");
         	$("#redstat32").html(tg); // depends what role
         	getPercentage($("#redbar32"), 0, 2, tg, false);
         	
         	// csmin
         	$("#redlabel41").html("CS/min");
         	$("#redstat41").html(csmin);
         	getPercentage($("#redbar41"), 0, 9, csmin - 1, false);
         	
         	// bot gank
         	$("#redlabel42").html("Bot Ganks");
         	$("#redstat42").html(bg); // depends what role
         	getPercentage($("#redbar42"), 0, 2, bg, false);
         	
         	// cs diff
         	$("#redlabel51").html("CSD@15");
         	$("#redstat51").html(csdiff);
         	getPercentage($("#redbar51"), 0, 50, csdiff + 25, false);
         	
         	// first turret
         	$("#redlabel52").html("First Turret");
         	$("#redstat52").html(firstt);
         	getPercentage($("#redbar52"), 0, 100, firstt, false);
         	
         	// gold diff
         	$("#redlabel61").html("GoldDiff@15");
         	$("#redstat61").html(gdiff);
         	getPercentage($("#redbar61"), 0, 2000, gdiff + 1000, false);
         	
         	// empty 62
         	$("#redlabel62").html("");
         	$("#redempty62").hide();
         	
         	// dmg %, restore 71
         	$("#redlabel71").html("DMG%");
         	$("#redempty71").show();
         	$("#redstat71").html(dp);
         	getPercentage($("#redbar71"), 0, 30, dp - 5, false);
         	
         	// empty 72
         	$("#redlabel72").html("");
         	$("#redempty72").hide();
		}
		
		function updateRedBot(wl, kda, kp, csmin, csdiff, gdiff, dp, sk, sd, tg, mg, firstt) {
			// winrate
			$("#redstat11").html(wl);
			getPercentage($("#redbar11"), 0, 80, wl - 10, false);
			
			// solokill
			$("#redlabel12").html("Solo Kills");
			$("#redstat12").html(sk);
			getPercentage($("#redbar12"), 0, 2.5, sk, false);
			
         	// kda
         	$("#redstat21").html(kda);
         	getPercentage($("#redbar21"), 0, 4, kda, false);
         	
         	// solodeath
         	$("#redlabel22").html("Solo Deaths");
         	$("#redstat22").html(sd);
         	getPercentage($("#redbar22"), 0, 2.5, sd, true);
         	
         	// kp
         	$("#redstat31").html(kp);
         	getPercentage($("#redbar31"), 0, 70, kp - 10, false);
         	
         	// top gank
         	$("#redlabel32").html("Top Ganks");
         	$("#redstat32").html(tg); // depends what role
         	getPercentage($("#redbar32"), 0, 2, tg, false);
         	
         	// csmin
         	$("#redlabel41").html("CS/min");
         	$("#redstat41").html(csmin);
         	getPercentage($("#redbar41"), 0, 9, csmin - 1, false);
         	
         	// mid gank
         	$("#redlabel42").html("Mid Ganks");
         	$("#redstat42").html(mg); // depends what role
         	getPercentage($("#redbar42"), 0, 2, mg, false);
         	
         	// cs diff
         	$("#redlabel51").html("CSD@15");
         	$("#redstat51").html(csdiff);
         	getPercentage($("#redbar51"), 0, 50, csdiff + 25, false);
         	
         	// first turret
         	$("#redlabel52").html("First Turret");
         	$("#redstat52").html(firstt);
         	getPercentage($("#redbar52"), 0, 100, firstt, false);
         	
         	// gold diff
         	$("#redlabel61").html("GoldDiff@15");
         	$("#redstat61").html(gdiff);
         	getPercentage($("#redbar61"), 0, 2000, gdiff + 1000, false);
         	
         	// empty 62
         	$("#redlabel62").html("");
         	$("#redempty62").hide();
         	
         	// dmg %, restore 71
         	$("#redlabel71").html("DMG%");
         	$("#redempty71").show();
         	$("#redstat71").html(dp);
         	getPercentage($("#redbar71"), 0, 30, dp - 5, false);
         	
         	// empty 72
         	$("#redlabel72").html("");
         	$("#redempty72").hide();
		}
		
		function updateRedSupp(wl, kda, kp, csmin, csdiff, gdiff, dp, sk, sd, tg, mg, firstt) {
			// winrate
			$("#redstat11").html(wl);
			getPercentage($("#redbar11"), 0, 80, wl - 10, false);
			
			// solokill
			$("#redlabel12").html("Solo Kills");
			$("#redstat12").html(sk);
			getPercentage($("#redbar12"), 0, 2.5, sk, false);
			
         	// kda
         	$("#redstat21").html(kda);
         	getPercentage($("#redbar21"), 0, 4, kda, false);
         	
         	// solodeath
         	$("#redlabel22").html("Solo Deaths");
         	$("#redstat22").html(sd);
         	getPercentage($("#redbar22"), 0, 2.5, sd, true);
         	
         	// kp
         	$("#redstat31").html(kp);
         	getPercentage($("#redbar31"), 0, 70, kp - 10, false);
         	
         	// top gank
         	$("#redlabel32").html("Top Ganks");
         	$("#redstat32").html(tg); // depends what role
         	getPercentage($("#redbar32"), 0, 2, tg, false);
         	
         	// csmin
         	$("#redlabel41").html("CS/min");
         	$("#redstat41").html(csmin);
         	getPercentage($("#redbar41"), 0, 9, csmin - 1, false);
         	
         	// mid gank
         	$("#redlabel42").html("Mid Ganks");
         	$("#redstat42").html(mg); // depends what role
         	getPercentage($("#redbar42"), 0, 2, mg, false);
         	
         	// cs diff
         	$("#redlabel51").html("CSD@15");
         	$("#redstat51").html(csdiff);
         	getPercentage($("#redbar51"), 0, 50, csdiff + 25, false);
         	
         	// first turret
         	$("#redlabel52").html("First Turret");
         	$("#redstat52").html(firstt);
         	getPercentage($("#redbar52"), 0, 100, firstt, false);
         	
         	// gold diff
         	$("#redlabel61").html("GoldDiff@15");
         	$("#redstat61").html(gdiff);
         	getPercentage($("#redbar61"), 0, 2000, gdiff + 1000, false);
         	
         	// empty 62
         	$("#redlabel62").html("");
         	$("#redempty62").hide();
         	
         	// dmg %, restore 71
         	$("#redlabel71").html("DMG%");
         	$("#redempty71").show();
         	$("#redstat71").html(dp);
         	getPercentage($("#redbar71"), 0, 30, dp - 5, false);
         	
         	// empty 72
         	$("#redlabel72").html("");
         	$("#redempty72").hide();
		}
		
		function getPercentage(element, low, high, actual, opposite) {
			
			if (actual > high) {
				actual = high;
			} else if (actual < low) {
				actual = low;
			}
			
			var total = high - low;
			var result = (actual / total) * 100;
			if (opposite) {
				result = 100 - result;
			}
			
			element.css("width", result.toString() + "%");
			if (result > 40 && result < 60) {
				element.css("background-color", "#EEC600");
			} else if (result <= 40) {
				element.css("background-color", "#DF3F0F");
			} else {
				element.css("background-color", "#01C90B");
			}
			
		}
		
		
		function updateBlueBadges(badges) {
			var badgeui = [$("#bluebadge1"), $("#bluebadge2"), $("#bluebadge3"), $("#bluebadge4"), $("#bluebadge5"), $("#bluebadge6"), $("#bluebadge7"), $("#bluebadge8")];
			var notes = [$("#bluetool1"), $("#bluetool2"), $("#bluetool3"), $("#bluetool4"), $("#bluetool5"), $("#bluetool6"), $("#bluetool7"), $("#bluetool8")];
			for (i = 0; i < badgeui.length; i++) {
				badgeui[i].hide();
			}
			for (i = 0; i < badges.length; i++) {
				badgeui[i].attr("src", "images/badges/" + badges[i] + ".svg");
				notes[i].html(badges[i]);
				badgeui[i].show();
			}
			
		}
		
		function updateRedBadges(badges) {
			var badgeui = [$("#redbadge1"), $("#redbadge2"), $("#redbadge3"), $("#redbadge4"), $("#redbadge5"), $("#redbadge6"), $("#redbadge7"), $("#redbadge8")];
			var notes = [$("#redtool1"), $("#redtool2"), $("#redtool3"), $("#redtool4"), $("#redtool5"), $("#redtool6"), $("#redtool7"), $("#redtool8")];
			for (i = 0; i < badgeui.length; i++) {
				badgeui[i].hide();
			}
			for (i = 0; i < badges.length; i++) {
				badgeui[i].attr("src", "images/badges/" + badges[i] + ".svg");
				notes[i].html(badges[i]);
				badgeui[i].show();
			}
			
		}
		
		
		
		