import java.io.*;
import java.math.BigInteger;
import java.net.*;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

import org.json.*;

public class StatFinder {
	
	// link to the riot api; should be used for every get request
	String apiurl = "https://na1.api.riotgames.com/lol/";
	
	// key to use the api, may need to reuse (DO NOT use this for final product)
	String apiKey = "RGAPI-bcec62be-3171-408d-a8ff-afcc28319528";
	

	// ***LANE COORDINATES FOR EACH RECTANGLE***
	// xtl, ytl, xtr, ytr, xbl, ybl, xbr, ybr (constants)
	// blue side top (two for extended lane)
	static locationCalculator blueTopMain = new locationCalculator(0, 14881, 3500, 14881, 0, 9400, 3500, 9400);
	static locationCalculator blueTopExtend = new locationCalculator(0, 14881, 1800, 14881, 0, 5900, 1800, 5900);
	
	// red side top (two)
	static locationCalculator redTopMain = new locationCalculator(0, 14881, 5200, 14881, 0, 11100, 5200, 11100);
	static locationCalculator redTopExtend = new locationCalculator(0, 14881, 8600, 14881, 0, 13100, 8600, 13100);
	
	// mid
	static locationCalculator mid = new locationCalculator(6769, 9909, 9739, 6939, 4930, 8070, 7900, 5100);
	
	// blue side bot (two)
	static locationCalculator blueBotMain = new locationCalculator(9650, 3850, 14820, 3850, 9650, 0, 14820, 0);
	static locationCalculator blueBotExtend = new locationCalculator(5900, 1800, 14820, 1800, 5900, 0, 14820, 0);
	
	// red side bot (two)
	static locationCalculator redBotMain = new locationCalculator(11300, 5600, 14820, 5600, 11300, 0, 14820, 0);
	static locationCalculator redBotExtend = new locationCalculator(13000, 9000, 14820, 9000, 13000, 0, 14820, 0);
				
	Map<Integer, String> champs;
	Map<String, String> champRoles;
	
	CurrentGame current;
	
	
	String name;
	String result="";
	
	public StatFinder(String name) {
		this.name = name;
		
		createChampList();
		createChampRoles();
		
		current = getCurrentGame(name);
		JSONObject obj = new JSONObject();
		for (int i = 1; i < 11; i++) {
			JSONObject participant = new JSONObject();
			
			String champ = getChampById(current.getChamp(i));
			boolean hasSmite = false;
			if (current.getSummoner1(i).equals("Smite") || current.getSummoner2(i).equals("Smite")) {
				hasSmite = true;
			}
			
			try {
				// make this string html friendly
				participant.put("Name", current.getName(i));
				participant.put("Champion", champ);
				participant.put("ProbRole", getChampRoleByName(champ, hasSmite));
				participant.put("Summoner1", current.getSummoner1(i));
				participant.put("Summoner2", current.getSummoner2(i));
				participant.put("Rank", getRankById(current.getId(i)));
				obj.put("Participant" + Integer.toString(i), participant);
				
				this.result = obj.toString();
			} catch (Exception e) {
				System.out.println(e);
			}
			
		}
		
		
	
		
		
	}
	
	// *********************************************************************************************
	// MARK: MAKE HTML GET REQUESTS
	// *********************************************************************************************
		
	// get request from riot api, returns json in string format
	public String getHTML(String urlToRead) throws Exception {
		StringBuilder result = new StringBuilder();
		URL url = new URL(urlToRead);
		HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		conn.setRequestMethod("GET");
		BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		String line;
		while ((line = rd.readLine()) != null) {
		    result.append(line);
		}
		rd.close();
		return result.toString();
	}
	
	// *********************************************************************************************
	// MARK: MATCH INFO THAT DOES NOT INVOLVE SPECIFIC TIMES
	// *********************************************************************************************
	

	// return json string with match details (does NOT have time)
	public JSONObject getMatchById(BigInteger matchId) throws Exception{
		String link = apiurl 
				+ "match/v3/matches/" + matchId
				+ "?api_key=" + apiKey;
		
		String match = getHTML(link);
		return new JSONObject(match);
	}
	
	// get summoner spell based on spell id given
	public String getSpellById(int id) throws Exception {
		String summ = "";
		if (id == 1) {
			summ = "Cleanse";
		} else if (id == 3) {
			summ = "Exhaust";
		} else if (id == 4) {
			summ = "Flash";
		} else if (id == 6) {
			summ = "Ghost";
		} else if (id == 7) {
			summ = "Heal";
		} else if (id == 11) {
			summ = "Smite";
		} else if (id == 12) {
			summ = "Teleport";
		} else if (id == 13) {
			summ = "Clarity";
		} else if (id == 14) {
			summ = "Ignite";
		} else if (id == 21) {
			summ = "Barrier";
		} else {
			summ = "Other";
		}
		return summ;
	}
	
	public void createChampList() {
		champs = new HashMap<Integer, String>();
		champs.put(266, "Aatrox");
		champs.put(103, "Ahri");
		champs.put(84, "Akali");
		champs.put(12, "Alistar");
		champs.put(32, "Amumu");
		champs.put(34, "Anivia");
		champs.put(1, "Annie");
		champs.put(22, "Ashe");
		champs.put(136, "Aurelion Sol");
		champs.put(268, "Azir");
		champs.put(432, "Bard");
		champs.put(53, "Blitzcrank");
		champs.put(63, "Brand");
		champs.put(201, "Braum");
		champs.put(51, "Caitlyn");
		champs.put(164, "Camille");
		champs.put(69, "Cassiopeia");
		champs.put(31, "Cho'Gath");
		champs.put(42, "Corki");
		champs.put(122, "Darius");
		champs.put(131, "Diana");
		champs.put(36, "Dr. Mundo");
		champs.put(119, "Draven");
		champs.put(245, "Ekko");
		champs.put(60, "Elise");
		champs.put(28, "Evelynn");
		champs.put(81, "Ezreal");
		champs.put(9, "FiddleSticks");
		champs.put(114, "Fiora");
		champs.put(105, "Fizz");
		champs.put(3, "Galio");
		champs.put(41, "Gangplank");
		champs.put(86, "Garen");
		champs.put(150, "Gnar");
		champs.put(79, "Gragas");
		champs.put(104, "Graves");
		champs.put(120, "Hecarim");
		champs.put(74, "Heimerdinger");
		champs.put(420, "Illaoi");
		champs.put(39, "Irelia");
		champs.put(427, "Ivern");
		champs.put(40, "Janna");
		champs.put(59, "Jarvan IV");
		champs.put(24, "Jax");
		champs.put(126, "Jayce");
		champs.put(202, "Jhin");
		champs.put(222, "Jinx");
		champs.put(429, "Kalista");
		champs.put(43, "Karma");
		champs.put(30, "Karthus");
		champs.put(38, "Kassadin");
		champs.put(55, "Katarina");
		champs.put(10, "Kayle");
		champs.put(141, "Kayn");
		champs.put(85, "Kennen");
		champs.put(121, "Kha'Zix");
		champs.put(203,"Kindred");
		champs.put(240, "Kled");
		champs.put(96, "Kog'Maw");
		champs.put(7, "Leblanc");
		champs.put(64, "Lee Sin");
		champs.put(89, "Leona");
		champs.put(127, "Lissandra");
		champs.put(236, "Lucian");
		champs.put(117, "Lulu");
		champs.put(99, "Lux");
		champs.put(54, "Malphite");
		champs.put(90, "Malzahar");
		champs.put(57, "Maokai");
		champs.put(11, "Master Yi");
		champs.put(21, "Miss Fortune");
		champs.put(82, "Mordekaiser");
		champs.put(25, "Morgana");
		champs.put(267, "Nami");
		champs.put(75, "Nasus");
		champs.put(111, "Nautilus");
		champs.put(76, "Nidalee");
		champs.put(56, "Nocturne");
		champs.put(20, "Nunu");
		champs.put(2, "Olaf");
		champs.put(61, "Orianna");
		champs.put(80, "Pantheon");
		champs.put(78, "Poppy");
		champs.put(133, "Quinn");
		champs.put(497, "Rakan");
		champs.put(33, "Rammus");
		champs.put(421, "Rek'Sai");
		champs.put(58, "Renekton");
		champs.put(107, "Rengar");
		champs.put(92, "Riven");
		champs.put(68, "Rumble");
		champs.put(13, "Ryze");
		champs.put(113, "Sejuani");
		champs.put(35, "Shaco");
		champs.put(98, "Shen");
		champs.put(102, "Shyvana");
		champs.put(27, "Singed");
		champs.put(14, "Sion");
		champs.put(15, "Sivir");
		champs.put(72, "Skarner");
		champs.put(37, "Sona");
		champs.put(16, "Soraka");
		champs.put(50, "Swain");
		champs.put(134, "Syndra");
		champs.put(223, "Tahm Kench");
		champs.put(163, "Taliyah");
		champs.put(91, "Talon");
		champs.put(44, "Taric");
		champs.put(17, "Teemo");
		champs.put(412, "Thresh");
		champs.put(18, "Tristana");
		champs.put(48, "Trundle");
		champs.put(23, "Tryndamere");
		champs.put(4, "Twisted Fate");
		champs.put(29, "Twitch");
		champs.put(77, "Udyr");
		champs.put(6, "Urgot");
		champs.put(110, "Varus");
		champs.put(67, "Vayne");
		champs.put(45, "Veigar");
		champs.put(161, "Vel'Koz");
		champs.put(254, "Vi");
		champs.put(112, "Viktor");
		champs.put(8, "Vladimir");
		champs.put(106, "Volibear");
		champs.put(19, "Warwick");
		champs.put(62,"Wukong");
		champs.put(498,"Xayah");
		champs.put(101,"Xerath");
		champs.put(5,"Xin Zhao");
		champs.put(157,"Yasuo");
		champs.put(83,"Yorick");
		champs.put(154,"Zac");
		champs.put(238,"Zed");
		champs.put(115,"Ziggs");
		champs.put(26,"Zilean");
		champs.put(143,"Zyra");

	}
	
	public String getChampById(int id) {
		return champs.get(id);
	}
	
	public void createChampRoles() {
		champRoles = new HashMap<String, String>();
		champRoles.put("Aatrox", "top");
		champRoles.put("Ahri", "mid");
		champRoles.put("Akali", "mid");
		champRoles.put("Alistar", "supp");
		champRoles.put("Amumu", "jungle");
		champRoles.put("Anivia", "mid");
		champRoles.put("Annie", "mid");
		champRoles.put("Ashe", "bot");
		champRoles.put("Aurelion Sol", "mid");
		champRoles.put("Azir", "mid");
		champRoles.put("Bard", "supp");
		champRoles.put("Blitzcrank", "supp");
		champRoles.put("Brand", "mid");
		champRoles.put("Braum", "supp");
		champRoles.put("Caitlyn", "bot");
		champRoles.put("Camille", "top");
		champRoles.put("Cassiopeia", "mid");
		champRoles.put("Cho'Gath", "jungle");
		champRoles.put("Corki", "mid");
		champRoles.put("Darius", "top");
		champRoles.put("Diana", "mid");
		champRoles.put("Dr. Mundo", "top");
		champRoles.put("Draven", "bot");
		champRoles.put("Ekko", "mid");
		champRoles.put("Elise", "jungle");
		champRoles.put("Evelynn", "jungle");
		champRoles.put("Ezreal", "bot");
		champRoles.put("FiddleSticks", "jungle");
		champRoles.put("Fiora", "top");
		champRoles.put("Fizz", "mid");
		champRoles.put("Galio", "top");
		champRoles.put("Gangplank", "top");
		champRoles.put("Garen", "top");
		champRoles.put("Gnar", "top");
		champRoles.put("Gragas", "jungle");
		champRoles.put("Graves", "jungle");
		champRoles.put("Hecarim", "jungle");
		champRoles.put("Heimerdinger", "top");
		champRoles.put("Illaoi", "top");
		champRoles.put("Irelia", "top");
		champRoles.put("Ivern", "jungle");
		champRoles.put("Janna", "supp");
		champRoles.put("Jarvan IV", "jungle");
		champRoles.put("Jax", "top");
		champRoles.put("Jayce", "top");
		champRoles.put("Jhin", "bot");
		champRoles.put("Jinx", "bot");
		champRoles.put("Kalista", "bot");
		champRoles.put("Karma", "supp");
		champRoles.put("Karthus", "mid");
		champRoles.put("Kassadin", "mid");
		champRoles.put("Katarina", "mid");
		champRoles.put("Kayle", "top");
		champRoles.put("Kayn", "jungle");
		champRoles.put("Kennen", "top");
		champRoles.put("Kha'Zix", "jungle");
		champRoles.put("Kindred", "jungle");
		champRoles.put("Kled", "top");
		champRoles.put("Kog'Maw", "bot");
		champRoles.put("Leblanc", "mid");
		champRoles.put("Lee Sin", "jungle");
		champRoles.put("Leona", "supp");
		champRoles.put("Lissandra", "mid");
		champRoles.put("Lucian", "bot");
		champRoles.put("Lulu", "supp");
		champRoles.put("Lux", "supp");
		champRoles.put("Malphite", "top");
		champRoles.put("Malzahar", "mid");
		champRoles.put("Maokai", "jungle");
		champRoles.put("Master Yi", "jungle");
		champRoles.put("Miss Fortune", "bot");
		champRoles.put("Mordekaiser", "top");
		champRoles.put("Morgana", "supp");
		champRoles.put("Nami", "supp");
		champRoles.put("Nasus", "top");
		champRoles.put("Nautilus", "supp");
		champRoles.put("Nidalee", "jungle");
		champRoles.put("Nocturne", "jungle");
		champRoles.put("Nunu", "jungle");
		champRoles.put("Olaf", "jungle");
		champRoles.put("Orianna", "mid");
		champRoles.put("Pantheon", "top");
		champRoles.put("Poppy", "jungle");
		champRoles.put("Quinn", "top");
		champRoles.put("Rakan", "supp");
		champRoles.put("Rammus", "jungle");
		champRoles.put("Rek'Sai", "jungle");
		champRoles.put("Renekton", "top");
		champRoles.put("Rengar", "jungle");
		champRoles.put("Riven", "top");
		champRoles.put("Rumble", "top");
		champRoles.put("Ryze", "mid");
		champRoles.put("Sejuani", "jungle");
		champRoles.put("Shaco", "jungle");
		champRoles.put("Shen", "top");
		champRoles.put("Shyvana", "jungle");
		champRoles.put("Singed", "top");
		champRoles.put("Sion", "top");
		champRoles.put("Sivir", "bot");
		champRoles.put("Skarner", "jungle");
		champRoles.put("Sona", "supp");
		champRoles.put("Soraka", "supp");
		champRoles.put("Swain", "top");
		champRoles.put("Syndra", "mid");
		champRoles.put("Tahm Kench", "supp");
		champRoles.put("Taliyah", "mid");
		champRoles.put("Talon", "mid");
		champRoles.put("Taric", "supp");
		champRoles.put("Teemo", "top");
		champRoles.put("Thresh", "supp");
		champRoles.put("Tristana", "bot");
		champRoles.put("Trundle", "top");
		champRoles.put("Tryndamere", "jungle");
		champRoles.put("Twisted Fate", "mid");
		champRoles.put("Twitch", "bot");
		champRoles.put("Udyr", "jungle");
		champRoles.put("Urgot", "top");
		champRoles.put("Varus", "bot");
		champRoles.put("Vayne", "bot");
		champRoles.put("Veigar", "mid");
		champRoles.put("Vel'Koz", "mid");
		champRoles.put("Vi", "jungle");
		champRoles.put("Viktor", "mid");
		champRoles.put("Vladimir", "mid");
		champRoles.put("Volibear", "jungle");
		champRoles.put("Warwick", "jungle");
		champRoles.put("Wukong", "top");
		champRoles.put("Xayah", "bot");
		champRoles.put("Xerath", "mid");
		champRoles.put("Xin Zhao", "jungle");
		champRoles.put("Yasuo", "top");
		champRoles.put("Yorick", "top");
		champRoles.put("Zac", "jungle");
		champRoles.put("Zed", "mid");
		champRoles.put("Ziggs", "mid");
		champRoles.put("Zilean", "supp");
		champRoles.put("Zyra", "supp");
		// alernate roles for junglers w/ no smite
		champRoles.put("AmumuAlt", "top");
		champRoles.put("Cho'GathAlt", "top");
		champRoles.put("EliseAlt", "mid");
		champRoles.put("EvelynnAlt", "mid");
		champRoles.put("FiddleSticksAlt", "mid");
		champRoles.put("GragasAlt", "top");
		champRoles.put("GravesAlt", "top");
		champRoles.put("HecarimAlt", "top");
		champRoles.put("IvernAlt", "top");
		champRoles.put("Jarvan IVAlt", "top");
		champRoles.put("KaynAlt", "top");
		champRoles.put("Kha'ZixAlt", "top");
		champRoles.put("KindredAlt", "bot");
		champRoles.put("Lee SinAlt", "top");
		champRoles.put("MaokaiAlt", "top");
		champRoles.put("Master YiAlt", "top");
		champRoles.put("NidaleeAlt", "mid");
		champRoles.put("NocturneAlt", "top");
		champRoles.put("NunuAlt", "top");
		champRoles.put("OlafAlt", "top");
		champRoles.put("PoppyAlt", "top");
		champRoles.put("RammusAlt", "top");
		champRoles.put("Rek'SaiAlt", "top");
		champRoles.put("RengarAlt", "top");
		champRoles.put("SejuaniAlt", "top");
		champRoles.put("ShacoAlt", "top");
		champRoles.put("ShyvanaAlt", "top");
		champRoles.put("SkarnerAlt", "top");
		champRoles.put("TryndamereAlt", "top");
		champRoles.put("UdyrAlt", "top");
		champRoles.put("ViAlt", "top");
		champRoles.put("VolibearAlt", "top");
		champRoles.put("WarwickAlt", "top");
		champRoles.put("Xin ZhaoAlt", "top");
		champRoles.put("ZacAlt", "top");
		
		
	}
	
	public String getChampRoleByName(String name, boolean hasSmite) {
		
		if (champRoles.get(name).equals("jungle") && !hasSmite) {
			return champRoles.get(name+"Alt");
		} else if (!champRoles.get(name).equals("jungle") && hasSmite) {
			return "jungle";
		}
		return champRoles.get(name);
	}
	
	public Account getAccountById(long id) throws Exception{
		String link = apiurl 
				+ "summoner/v3/summoners/" + id
				+ "?api_key=" + apiKey;
		// if it doesn't work include /by-account/
		String html = getHTML(link);
		JSONObject obj = new JSONObject(html);
		String name = obj.getString("name");
		long accountId = obj.getLong("accountId");
		return new Account(name, accountId);
	}
	
	public String getRankById(long id) throws Exception{
		String link = apiurl 
				+ "league/v3/positions/by-summoner/" + id
				+ "?api_key=" + apiKey;

		// for some reason the api to get one's current rank/league returns an array
		String html = getHTML(link);
		JSONArray obj = new JSONArray(html);
		
		if (obj.length() == 0) {
			return "UNRANKED";
		}
		
		// first item in array is solo queue, second item is flex (just use one for now)
		JSONObject sq = obj.getJSONObject(0);
		String rank = sq.getString("tier");
		String tier = sq.getString("rank");
		
		return rank + " " + tier;
	}
	
	// find participant ids, team ids, roles of all participants to create player object
	// all player objects used to create and then return match object
	public Match createPlayers(JSONObject obj, int champId) throws Exception {
		JSONArray participants = obj.getJSONArray("participants");
		int pLength = participants.length();
		
		Player[] allPlayers = new Player[pLength];
		String[] spell1 = new String[pLength];
		String[] spell2 = new String[pLength];
		int playerTeam = 0;
		
		for (int i=0; i < pLength; i++) {
			
			JSONObject participant = participants.getJSONObject(i);
			int teamId = participant.getInt("teamId");
			int pId = participant.getInt("participantId");
			int championId = participant.getInt("championId");
			
			int sId1 = participant.getInt("spell1Id");
			int sId2 = participant.getInt("spell2Id");
			String s1 = getSpellById(sId1);
			String s2 = getSpellById(sId2);
			spell1[i] = s1;
			spell2[i] = s2;
			
			
			// roles: SOLO, NONE, DUO_CARRY, DUO_SUPPORT
			// lanes: TOP, JUNGLE, MIDDLE, BOTTOM
			JSONObject timeline = participant.getJSONObject("timeline");
			String role = timeline.getString("role");
			String lane = timeline.getString("lane");
			
			// single string that represents role (not split into role and lane)
			String actualRole = "";
			if (role.equals("DUO_CARRY")) {
				if (lane.equals("BOTTOM")) {
					actualRole = "bot";
				} else if (lane.equals("MIDDLE")) {
					if (s1.equals("Smite") || s2.equals("Smite")) {
						actualRole = "jungle";
					} else if (!s1.equals("Smite") && !s2.equals("Smite")) {
						actualRole = "mid";
					}
				} else if (lane.equals("TOP")) {
					if (s1.equals("Smite") || s2.equals("Smite")) {
						actualRole = "jungle";
					} else if (!s1.equals("Smite") && !s2.equals("Smite")) {
						actualRole = "top";
					}
				}
				
			} else if (role.equals("DUO_SUPPORT")) {
				if (lane.equals("BOTTOM")) {
					actualRole = "supp";
				} else if (lane.equals("MIDDLE")) {
					if (s1.equals("Smite") || s2.equals("Smite")) {
						actualRole = "jungle";
					} else if (!s1.equals("Smite") && !s2.equals("Smite")) {
						actualRole = "mid";
					}
				} else if (lane.equals("TOP")) {
					if (s1.equals("Smite") || s2.equals("Smite")) {
						actualRole = "jungle";
					} else if (!s1.equals("Smite") && !s2.equals("Smite")) {
						actualRole = "top";
					}
				}
			} else if (lane.equals("MIDDLE")) {
				actualRole = "mid";
			} else {
				actualRole = lane.toLowerCase();
			}
			
			// create player object and set its variables
			Player p = new Player(pId, teamId, actualRole);
			
			if (championId == champId) {
				p.isPlayer = true;
				playerTeam = teamId;
			} else {
				p.isPlayer = false;
			}
			
			allPlayers[i] = p;
		}
		
		// set boolean values for whether or not player is on the same team as main player
		for (int i = 0; i < allPlayers.length; i++) {
			Player p = allPlayers[i];
			if (p.team == playerTeam) {
				p.onPlayerTeam = true;
			} else {
				p.onPlayerTeam = false;
			}
		}
		
		// create match object using player array
		Match m = new Match(allPlayers, spell1, spell2);
		
		return m;
	}
	
	// calculate standard statistics and add them to linked lists within standardstat object
	public void addStandard(JSONObject obj, Match m, StandardStat ss) throws Exception{
		int pId = m.getMainPlayer().pId;
		
		JSONArray participants = obj.getJSONArray("participants");
		JSONObject participant = participants.getJSONObject(pId - 1);
		JSONObject stats = participant.getJSONObject("stats");
		JSONObject timeline = participant.getJSONObject("timeline");
		
		long gameDuration = obj.getLong("gameDuration");
		int teamId = participant.getInt("teamId");
		
		// ***WIN/LOSS***
		boolean wl = stats.getBoolean("win");
		
		// ***KDA***
		int kills = stats.getInt("kills");
		int assists = stats.getInt("assists");
		int deaths = stats.getInt("deaths");
		
		// ***KILL PARTICIPATION***
		// first get total kill/dmg values for entire team (damage used for later)
		int totalKills = 0;
		long totalDamage = 0;
		for (int i = 0; i < participants.length(); i++) {
			JSONObject p = participants.getJSONObject(i);
			if (p.getInt("teamId")  == teamId) {
				JSONObject pStat = p.getJSONObject("stats");
				totalKills += pStat.getInt("kills");
				totalDamage += pStat.getInt("totalDamageDealtToChampions");
			}
		}
		double kp = (double) (kills + assists) / (double) totalKills;
		double minutes = (double) gameDuration / 60.0;
		
		
		// ***CS/MIN***
		int totalcs = stats.getInt("totalMinionsKilled") + stats.getInt("neutralMinionsKilled");
		double cspm = (double) totalcs / minutes;
		
		// ***DAMAGE/MIN***
		long dmg = stats.getLong("totalDamageDealtToChampions");
		double dpm = (double) dmg / minutes;
		
		// ***DAMAGE %***
		double dp = (double) dmg / (double) totalDamage;
		
		// ***ENEMY JG CS/MIN***
		double enemyjg = stats.getInt("neutralMinionsKilledEnemyJungle") / minutes;
		
		
		// add to list of standard stats for that champion
		ss.add(kills, deaths, assists, cspm, wl, dpm, dp, kp, enemyjg);
	}
	
	// *********************************************************************************************
	// MARK: COORDINATE CHECKING HELPER FUNCTIONS
	// *********************************************************************************************
	
	public boolean checkTop(int x, int y) {
		boolean btm = blueTopMain.basicIsInside(x, y);
		boolean bte = blueTopExtend.basicIsInside(x, y);
		boolean rtm = redTopMain.basicIsInside(x, y);
		boolean rte = redTopExtend.basicIsInside(x, y);
		
		if (btm || bte || rtm || rte) {
			return true;
		}
		
		return false;
	}
	
	public boolean checkJungle(int x, int y) {
		return !checkTop(x, y) && !checkMid(x, y) && !checkBot(x, y);
	}
	
	public boolean checkMid(int x, int y) {
		return mid.complexIsInside(x, y);
	}
	
	public boolean checkBot(int x, int y) {
		boolean bbm = blueBotMain.basicIsInside(x, y);
		boolean bbe = blueBotExtend.basicIsInside(x, y);
		boolean rbm = redBotMain.basicIsInside(x, y);
		boolean rbe = redBotExtend.basicIsInside(x, y);
		
		if (bbm || bbe || rbm || rbe) {
			return true;
		}
		
		return false;
	}
	
	
	// *********************************************************************************************
	// MARK: MATCH INFO INVOLVING TIME
	// *********************************************************************************************
	
	public JSONObject getTimeline(BigInteger matchId) throws Exception {
		String link = apiurl 
				+ "match/v3/timelines/by-match/" + matchId
				+ "?api_key=" + apiKey;
		String timeline = getHTML(link);
		return new JSONObject(timeline);
	}

	
	// returns array length 2 with values 1 or 0 based on if solo kill/death happened 
	// (based on killer, victim, and LOCATION of the kill)
	public int[] soloKill(Match m, int killerId, int victimId, JSONArray assists, int locationx, int locationy) throws Exception{
		
		Player player = m.getMainPlayer();
		
		boolean correctLocation = false;
		
		// first make sure that kill occurred within player's lane
		if (player.role.equals("top")) {
			correctLocation = checkTop(locationx, locationy);
		} else if (player.role.equals("jungle")) {
			correctLocation = checkJungle(locationx, locationy);
		} else if (player.role.equals("mid")) {
			correctLocation = checkMid(locationx, locationy);
		} else {
			correctLocation = checkBot(locationx, locationy);
		}
		
		
		// num solo kills
		int wasSK = 0;
		int wasSD = 0;
		
		if (correctLocation) {
			Player companion = null;
			Player oppositePlayer = m.getOppositePlayer(player);
			Player oppositePlayer2 = null;
			
			boolean botCheck = false;
			
			// bot lane can kill either bot or support and still call it "solo kill"
			if (player.role.equals("bot") || player.role.equals("supp")) {
				companion = m.getCompanionPlayer(player);
				oppositePlayer2 = m.getCompanionPlayer(oppositePlayer);
				botCheck = true;
			}
			
			int numAssists = assists.length();
			
			
			// first check if the main player is a bot laner or not
			if (botCheck) {
				
				// victim is bot laner
				if (victimId == oppositePlayer.pId || victimId == oppositePlayer2.pId) {
					
					// killer is player 
					if (killerId == player.pId) {
						
						// either no assists or whoever got the assist is other bot laner
						if (numAssists == 0 || (numAssists == 1 && assists.getInt(0) == companion.pId)) {
							wasSK++;
						}
						
					// killer is companion
					} else if (killerId == companion.pId) {
						
						// main player got the only assist
						if (numAssists == 1 && assists.getInt(0) == player.pId) {
							wasSK++;
						}
					}
					
				} 
				
				
				// switch killer and victim id requirements for solo death
				if (victimId == player.pId) {
					
					//killer can be either of the bot laners on enemy team
					if (killerId == oppositePlayer.pId) {
						
						// either no assits or other bot laner gets the assist
						if (numAssists == 0 || (numAssists == 1 && assists.getInt(0) == oppositePlayer2.pId)) {
							wasSD++;
						} 
					} else if (killerId == oppositePlayer.pId) {
						if (numAssists == 0 || (numAssists == 1 && assists.getInt(0) == oppositePlayer.pId)) {
							wasSD++;
						} 
					}
				}
			
			// if not bot laner all you need to check is that victim was opposite laner and there were 0 assists
			} else {
				if (numAssists == 0 && killerId == player.pId) {
					if (victimId == oppositePlayer.pId) {
						wasSK++;
					}
				}
				
				// switch killer and victim id requirements for solo death
				if (numAssists == 0 && killerId == oppositePlayer.pId) {
					if (victimId == player.pId) {
						wasSD++;
					}
				}
			}
		}
		
		int[] result = new int[2];
		result[0] = wasSK;
		result[1] = wasSD;
		
		return result;
	}
	
	public int gank(Match m, int killerId, JSONArray assists, int locationx, int locationy) throws Exception {
		
		// 1 if top, 2 if mid, 3 if bot
		int wasGank = 0;
		
		Player player = m.getMainPlayer();
		
		boolean checkLocation = false;
		
		boolean bot = checkBot(locationx, locationy);
		boolean top = checkTop(locationx, locationy);
		boolean mid = checkMid(locationx, locationy);
		
		// make sure location was a lane, not the same lane as laner
		if (player.role.equals("top")) {
			checkLocation = bot || mid; 
		} else if (player.role.equals("jungle")) {
			checkLocation = bot || top || mid;
		} else if (player.role.equals("mid")) {
			checkLocation = bot || top;
		} else {
			checkLocation = top || mid;
		}
		
		if (checkLocation) {			
			
			if (killerId == player.pId) {
				
				// set this value only if gank was valid
				if (bot) {
					wasGank = 3;
				} else if (mid) {
					wasGank = 2;
				} else if (top) {
					wasGank = 1;
				}
				return wasGank;
			} else {
				for (int i = 0; i < assists.length(); i++) {
					int a = assists.getInt(i);
					if (a == player.pId) {
						
						// set this value only if gank was valid
						if (bot) {
							wasGank = 3;
						} else if (mid) {
							wasGank = 2;
						} else if (top) {
							wasGank = 1;
						}
						return wasGank;
					}
				}
			}
		}

		return wasGank;
	}
	
	public String whoGotFirstTower(Match m, int teamId, String lane) throws Exception{
		
		String result = "";
		
		Player player = m.getMainPlayer();
		
		// check if tower is same lane as laner
		boolean topTurret = player.role.equals("top") && lane.equals("TOP_LANE");
		boolean midTurret = player.role.equals("mid") && lane.equals("MID_LANE");
		boolean botTurret = (player.role.equals("bot") || player.role.equals("supp")) && lane.equals("BOT_LANE");
		
		if (topTurret || midTurret || botTurret) {
			
			// check which team got the first tower
			if (teamId != player.team) {
				result = "player";
			} else {
				result = "enemy";
			}
		}
		
		return result;
	}

	public void addPreTwentyStats(JSONObject timeline, Match m, PreTwentyStat pts) throws Exception {
		
		JSONArray frames = timeline.getJSONArray("frames");
		int numFrames = frames.length();
		
		// timeline: time of latest event; index: frame #
		int index = 0;
		JSONObject frameobj = frames.getJSONObject(index);
		long timestamp = frameobj.getLong("timestamp");
		
		Player player = m.getMainPlayer();
		
		
		// STATS TO CALCULATE
		
		// solo
		int numSoloKills = 0;
		int numSoloDeaths = 0;
		
		// @15 stats
		int csDiff = 0;
		int xpDiff = 0;
		int goldDiff = 0;
		
		// ganks
		int numMidKills = 0;
		int numTopKills = 0;
		int numBotKills = 0;
		int numMidGanks = 0;
		int numTopGanks = 0;
		int numBotGanks = 0;
		long firstGankTime = 0;
		boolean ganked = false; // checks for whether or not player has made a successful gank yet
		String laneOfLastKill = ""; // this is used to help check multiple kill were multiple ganks or not
		long timeOfLastGank = 0; // time last gank occurred
		long gankTimeThreshold = 0; // based on above, add 12 seconds; before this time is reached, any additional kills are counted as part of same gank
		
		
		// jungle monsters
		long riftHerald = 0;
		boolean firstRift = false;
		long dragon = 0;
		boolean firstDragInGame = false;
		boolean gotFirstDrag = false;
		
		// tower 
		boolean firstTower = false;
		boolean opponentGotTower = false;
		
		
		// timestamp is based on milliseconds; 20 min = 1,200,000 ms (add half a minute for sake of accuracy)
		// make sure timestamp begins at ~1min 30 or so to not include early game invades (unrelated to laning)
		while (timestamp < 1230000) {
			JSONArray events = frameobj.getJSONArray("events");
			// check events for a champion kill
			for (int i = 0; i < events.length(); i++) {
				
				JSONObject event = events.getJSONObject(i);
				String type = event.getString("type");
				
				if (type.equals("CHAMPION_KILL")) {
					
					
					// kill participants (kill, assist, death)
					JSONArray assists = event.getJSONArray("assistingParticipantIds");
					
					int killerId = event.getInt("killerId");
					int victimId = event.getInt("victimId");
					
					JSONObject position = event.getJSONObject("position");
					int locationx = position.getInt("x");
					int locationy = position.getInt("y");
					
					int[] kd = soloKill(m, killerId, victimId, assists, locationx, locationy);
					numSoloKills += kd[0];
					numSoloDeaths += kd[1];
					
					int g = gank(m, killerId, assists, locationx, locationy);
					
					// if gank was yours AND successful record the time of the gank
					if (g != 0) {
						timeOfLastGank = event.getLong("timestamp");
						
						// check if this was your first successful gank
						if (!ganked) {
							firstGankTime = timeOfLastGank;
							ganked = true;
						}
						
					}
					
					// increase appropriate lane counter
					if (g == 1) {
						numTopKills++;
						
						// check if kill was separate gank based on time; also check based on lane ganked
						if (timeOfLastGank > gankTimeThreshold || !laneOfLastKill.equals("top")) {
							numTopGanks++;
						}
						
						gankTimeThreshold = timeOfLastGank + 14000; // 14000 because 14 seconds (10 sec min death timer + extra leeway for tp)
						laneOfLastKill = "top";
						
					} else if (g == 2) {
						numMidKills++;
						
						// check if kill was separate gank based on time; also check based on lane ganked
						if (timeOfLastGank > gankTimeThreshold || !laneOfLastKill.equals("mid")) {
							numMidGanks++;
						}
						
						gankTimeThreshold = timeOfLastGank + 12000; // 12000 because 12 seconds (10 sec min death timer + extra leeway for tp)
						laneOfLastKill = "mid";
						
					} else if (g == 3) {
						numBotKills++;
						
						// check if kill was separate gank based on time; also check based on lane ganked
						if (timeOfLastGank > gankTimeThreshold || !laneOfLastKill.equals("bot")) {
							numBotGanks++;
						}
						
						gankTimeThreshold = timeOfLastGank + 12000; // 12000 because 12 seconds (10 sec min death timer + extra leeway for tp)
						laneOfLastKill = "bot";
						
					}
					
						
				}
				
				// only need to check this if player is a jungler
				if (player.role.equals("jungle")) {
					if (type.equals("ELITE_MONSTER_KILL")) {
						
						String monsterType = event.getString("monsterType"); 
						int killerId = event.getInt("killerId");
						Player killer = m.getPlayer(killerId);

						// check monster type and whether the first drag has been recorded or not
						if (monsterType.equals("RIFTHERALD")) {
							if (killer.onPlayerTeam) {
								riftHerald = event.getLong("timestamp");
								firstRift = true;
							}
						} else if ((monsterType.equals("DRAGON")) && !firstDragInGame) {
							if (killer.onPlayerTeam) {
								dragon = event.getLong("timestamp");
								gotFirstDrag = true;
							}
							firstDragInGame = true;
						}
					}
				
				// only check first tower for laner
				} else {
					
					// building kill occurs, lane both opponent and player have not gotten tower yet, tower destroyed is an outer turret
					if (type.equals("BUILDING_KILL") && !opponentGotTower && !firstTower && event.getString("towerType").equals("OUTER_TURRET")) {
						
						int killerId = event.getInt("killerId");
						JSONArray assists = event.getJSONArray("assistingParticipantIds");
						int towerTeam = event.getInt("teamId");
						
						String towerKiller = whoGotFirstTower(m, towerTeam, event.getString("laneType"));
						
						if (towerKiller.equals("player")) {
							firstTower = true;
						} else if (towerKiller.equals("enemy")) {
							opponentGotTower = true;
						} 
						// if neither than not a relevant tower kill
					}
				}
				
			}
			
			
			// specific check for 15 minute mark to check for diff @15 stats (will only happen once)
			if (timestamp >= 900000 && timestamp < 930000) {
				JSONObject participantFrames = frameobj.getJSONObject("participantFrames");
				
				// player's stats
				JSONObject playerFrame = participantFrames.getJSONObject(Integer.toString(player.pId));
				int playerCS = playerFrame.getInt("minionsKilled");
				int playerXP = playerFrame.getInt("xp");
				int playerGold = playerFrame.getInt("totalGold");
				
				// opponent's stats
				Player opp = m.getOppositePlayer(player);
				JSONObject oppFrame = participantFrames.getJSONObject(Integer.toString(opp.pId));
				int oppCS = oppFrame.getInt("minionsKilled");
				int oppXP = oppFrame.getInt("xp");
				int oppGold = oppFrame.getInt("totalGold");
				
				csDiff = playerCS - oppCS;
				xpDiff = playerXP - oppXP;
				goldDiff = playerGold - oppGold;
			}
			
			index++;
			// some games may not go to 20 minutes
			if (index < numFrames) {
				frameobj = frames.getJSONObject(index);
				timestamp = frameobj.getLong("timestamp");
			
			// in the case where game ends before 20 minutes, just get the latest difference values
			} else {
				
				// same code as above when getting difference stats, only difference is that the assumption is the time is 15-20 min
				JSONObject participantFrames = frameobj.getJSONObject("participantFrames");
				
				// player's stats
				JSONObject playerFrame = participantFrames.getJSONObject(Integer.toString(player.pId));
				int playerCS = playerFrame.getInt("minionsKilled");
				int playerXP = playerFrame.getInt("xp");
				int playerGold = playerFrame.getInt("totalGold");
				
				// opponent's stats
				Player opp = m.getOppositePlayer(player);
				JSONObject oppFrame = participantFrames.getJSONObject(Integer.toString(opp.pId));
				int oppCS = oppFrame.getInt("minionsKilled");
				int oppXP = oppFrame.getInt("xp");
				int oppGold = oppFrame.getInt("totalGold");
				
				csDiff = playerCS - oppCS;
				xpDiff = playerXP - oppXP;
				goldDiff = playerGold - oppGold;
				
				timestamp = 1230000;
			}
			
		}
		
		pts.add(numSoloKills, numSoloDeaths, csDiff, xpDiff, goldDiff, numTopKills, numMidKills, numBotKills, numTopGanks, numMidGanks, numBotGanks, firstGankTime, firstTower, dragon, gotFirstDrag, riftHerald, firstRift);
	}
	
	// *********************************************************************************************
	// MARK: INITIAL POINT OF STAT SEARCH
	// ********************************************************************************************

	// use result of this function as parameters to search function
	// takes summoner name, get parameters to search and then runs search
	public CurrentGame getCurrentGame(String summonerName) {
		
		
		CurrentGame cg = new CurrentGame();
		
		
		
		// get id of summoner
		try {
			// get rid of spaces and replace with %20
			String nameURL = URLEncoder.encode(summonerName, "UTF-8");
			String newURL = nameURL.replaceAll(Pattern.quote("+"), "%20");
			
			String idRequest = "https://na1.api.riotgames.com/lol/summoner/v3/summoners/"
					+ "by-name/" + newURL
					+ "?api_key=" + apiKey;
			String s = getHTML(idRequest);
			JSONObject sobj = new JSONObject(s);
			long playerId = sobj.getLong("id");
			
			try {
				// use id to get current game
				String gameRequest = "https://na1.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/"
						+ playerId
						+ "?api_key=" + apiKey;
				String g = getHTML(gameRequest);
				JSONObject gobj = new JSONObject(g);
				JSONArray participants = gobj.getJSONArray("participants");
				
//				CurrentGame cg = new CurrentGame();
				
				for (int i = 0; i < participants.length(); i++) {
					 JSONObject participant = participants.getJSONObject(i);
					 
					 long sid = participant.getLong("summonerId");
					 Account a = getAccountById(sid);
					 
					 
					 int champ = participant.getInt("championId");
					 int s1 = participant.getInt("spell1Id");
					 int s2 = participant.getInt("spell2Id");
					 String summ1 = getSpellById(s1);
					 String summ2 = getSpellById(s2);
					 
					 cg.set(i+1, a.name, a.accountId, sid, champ, summ1, summ2);
				}
			} catch (Exception e) {
				this.result = "NotInGame";
				System.out.println(e);
			}
		} catch (Exception e) {
			this.result = "DoesNotExist";
			System.out.println(e);
		}
		
		
		
		
		return cg;
		
		
	}
	
	
	// find statistics on games as a certain champion on certain role
	public JSONObject search(long accountId, int champNum, int season, String role, int playerNum) throws Exception {
		
		String matchRequest = "https://na1.api.riotgames.com/lol/match/v3/matchlists/"
				+ "by-account/" + accountId
//				+ "?queue=440"	// 420 is the queueid for solo queue
				+ "?season=" + season 
				+ "&champion=" + champNum
				+ "&api_key=" + apiKey;
		String result = getHTML(matchRequest);
		JSONObject obj = new JSONObject(result);
		JSONArray matchlist = obj.getJSONArray("matches");
		int numMatches = matchlist.length();
		System.out.println(numMatches);
		
		// after you get the matchlist, iterate through the matches; only go deeper
		// if the role is correct
		
		StandardStat ss = new StandardStat();
		PreTwentyStat pts = new PreTwentyStat();
		
		int matchesToCheck = 10;

		int numGamesOnRole = 0;
		int numInvalidRolesAssigned = 0;
		int numRemakes = 0;
		int numGamesInsufficientPlayers = 0;
		
		for (int i = 0; i < numMatches; i++) {
			System.out.println(i);
			long id = matchlist.getJSONObject(i).getLong("gameId");
			BigInteger matchId = new BigInteger(Long.toString(id));
			JSONObject matchobj = getMatchById(matchId);
			int matchDuration = matchobj.getInt("gameDuration");
			
			Match m = createPlayers(matchobj, champNum);
			
			boolean validRoles = m.validRoles();
			// things to check: roles assigned properly, game is not a remake, player is in the right role, 10 players total
			if (validRoles && matchDuration >= 900 && m.playerRightRole(role) && m.numPlayers() == 10) {
				
				addStandard(matchobj, m, ss);
				
				JSONObject t = getTimeline(matchId);
				addPreTwentyStats(t, m, pts);
				
				numGamesOnRole++;
				
			} else if (m.numPlayers() != 10) {
				numGamesInsufficientPlayers++;
			} else if (!(matchDuration >= 900)){
				numRemakes++;
			} else if (!validRoles){
				numInvalidRolesAssigned++;
			} 
			
			// check length of lists in stats, if they are at desired num 
			if (matchesToCheck == ss.size() || matchesToCheck == pts.size()) {
				break;
			}
			
		}
		
		System.out.println("Num Games on Role: " + numGamesOnRole);
		System.out.println("Num Invalid Roles: " + numInvalidRolesAssigned);
		System.out.println("Num Remakes: " + numRemakes);
		System.out.println("Num <10 Players: " + numGamesInsufficientPlayers);
		
		AvgStandardStat ass = ss.findAverage();
//		ass.print();
		
		AvgPreTwentyStat apts = pts.findAverage();
//		apts.print();
		
		return constructJSON(ass, apts, playerNum, role);
	}
	
	
	// constructs json object for only ONE of the players in the game (must do this for each player to create full obj)
	public JSONObject constructJSON(AvgStandardStat ass, AvgPreTwentyStat apts, int playerNum, String role) throws Exception {
		
		JSONObject obj = new JSONObject();
		obj.put("Name", current.getName(playerNum));
		obj.put("Rank", getRankById(current.getId(playerNum)));
		obj.put("Summoner1", current.getSummoner1(playerNum));
		obj.put("Summoner2", current.getSummoner2(playerNum));
		obj.put("Probable Role", getChampById(current.getChamp(playerNum)));
		obj.put("KDA", ass.kda);
		obj.put("CSmin", ass.csmin);
		obj.put("WL", ass.wl);
		obj.put("DMGmin", ass.dmin);
		obj.put("DMGP", ass.dmgP);
		obj.put("KP", ass.kp);
		obj.put("eJGCS", ass.enemyjg);
		obj.put("SoloKills", apts.sk);
		obj.put("SoloDeaths", apts.sd);
		obj.put("CSdiff", apts.csd);
		obj.put("XPdiff", apts.xpd);
		obj.put("GoldDiff", apts.gd);
		obj.put("TopKills", apts.topk);
		obj.put("MidKills", apts.midk);
		obj.put("BotKills", apts.botk);
		obj.put("TopGanks", apts.topg);
		obj.put("MidGanks", apts.midg);
		obj.put("BotGanks", apts.botg);
		obj.put("FirstGankTime", apts.firstg);
		obj.put("FirstTurret", apts.firstt);
		obj.put("FirstDragTime", apts.drag);
		obj.put("FirstDrag", apts.firstd);
		obj.put("FirstRift", apts.firstr);
		obj.put("FirstRiftTime", apts.rift);
		
		findBadges(ass, apts, obj, role);
		return obj;
	}
	
	public String searchCurrentGame(String role, int playerNum) {
		
		try {
			JSONObject obj = search(current.getAccountId(playerNum), current.getChamp(playerNum), 9, role, playerNum);
			return obj.toString();
		} catch (Exception e) {
			System.out.println(e);
			return "SearchFail";
		}
		
		
	}
	
	// badges
	public void findBadges(AvgStandardStat ass, AvgPreTwentyStat apts, JSONObject obj, String role) throws Exception {
		JSONArray a = new JSONArray();
		double totalganks = apts.topg + apts.midg + apts.botg;
		if (totalganks <= 0.8 && apts.csd >= 5 && role.equals("jungle")) {
			a.put("OldMcDonald");
		}
		
		// unfinished, enemy jg cs should be per min or @15
		if (ass.enemyjg >= 5.0 && apts.sk >= 0.2 && role.equals("jungle")) {
			a.put("SneakySneaky");
		}
		
		// unfinished, specific values
		if (apts.sk - apts.sd >= 2.25 && apts.gd >= 1200 && apts.xpd >= 100 && !role.equals("jungle")) {
			a.put("DontGetThisSnowballRolling");
		}
		
		if (apts.firstd + apts.firstr >= 90 && role.equals("jungle")) {
			a.put("ObjectiveBased");
		}
		
		if (role.equals("jungle") && totalganks >= 2.25) {
			if (totalganks >= 3.25) {
				a.put("GiftOrFearThisJungler");
			} else {
				a.put("MayGankYourLane");
			}
		}
		
		if ((!role.equals("jungle") && totalganks >= 1)) {
			if (totalganks >= 1.75) {
				a.put("Roamer");
			} else {
				a.put("Stroller");
			}
		} 
		
		if (!role.equals("jungle") && apts.sk >= 2 && apts.sd >= 1.5) {
			a.put("NoChill");
		}
		
		if (!role.equals("jungle") && apts.sk <= 0.8 && apts.sd <= 0.8 && ass.csmin >= 5.25) {
			a.put("TrustTheProcess");
		}
		
		if (ass.kp >= 50 && ass.kda >= 2.35 && ass.dmgP >= 22.5) {
			if (ass.kp >= 55 && ass.kda >= 3 && ass.dmgP >= 30) {
				a.put("1v9");
			} else {
				a.put("PotentialCarry");
			}
		}
		
		if (ass.csmin >= 7) {
			if (ass.csmin >= 8) {
				a.put("CSGod");
			} else {
				a.put("CSAngel");
			}
		}
		
		if (ass.kda <= 1.75 && apts.sd >= 2.3 && apts.sk <= 0.8) {
			if (ass.kda <= 1.2 && apts.sd >= 3.2 && apts.sk <= 0.35) {
				a.put("FEEDER");
			} else {
				a.put("KindaBooty");
			}
		}
		
		if (apts.topg >= 2 || apts.midg >= 2 || apts.botg >= 2) {
			a.put("EagleScout");
		}
		
		// cheeser
//		if ()
		
		obj.put("Badges", a);
		
	}
	
	



	public String getResult() {
		return result;
	}


}
