
public class CurrentGame {
	String name1, name2, name3, name4, name5, name6, name7, name8, name9, name10;
	long aid1, aid2, aid3, aid4, aid5, aid6, aid7, aid8, aid9, aid10;
	long id1, id2, id3, id4, id5, id6, id7, id8, id9, id10;
	int champ1, champ2, champ3, champ4, champ5, champ6, champ7, champ8, champ9, champ10;
	String summA1, summB1, summA2, summB2, summA3, summB3, summA4, summB4, summA5, summB5, summA6, summB6, 
		summA7, summB7, summA8, summB8, summA9, summB9, summA10, summB10;
	
	public CurrentGame() {
		name1 = ""; name2 = ""; name3 = ""; name4 = ""; name5 = ""; name6 = ""; name7 = ""; name8 = ""; 
			name9 = ""; name10 = "";
		
		aid1 = 0; aid2 = 0; aid3 = 0; aid4 = 0; aid5 = 0; aid6 = 0; aid7 = 0; aid8 = 0; aid9 = 0; aid10 = 0;
		
		
		id1 = 0;
		id2 = 0;
		id3 = 0;
		id4 = 0;
		id5 = 0;
		id6 = 0;
		id7 = 0;
		id8 = 0;
		id9 = 0;
		id10 = 0;
		
		champ1 = 0;
		champ2 = 0;
		champ3 = 0;
		champ4 = 0;
		champ5 = 0;
		champ6 = 0;
		champ7 = 0;
		champ8 = 0;
		champ9 = 0;
		champ10 = 0;
		
		summA1 = ""; summB1 = ""; summA2 = ""; summB2 = ""; summA3 = ""; summB3 = ""; summA4 = ""; summB4 = ""; summA5 = ""; summB5 = ""; summA6 = ""; summB6 = ""; 
		summA7 = ""; summB7 = ""; summA8 = ""; summB8 = ""; summA9 = ""; summB9 = ""; summA10 = ""; summB10 = ""; 
	}
	
	public void set(int num, String name, long aid, long id, int champ, String summA, String summB) {
		if (num == 1) {
			name1 = name;
			aid1 = aid;
			id1 = id;
			champ1 = champ;
			summA1 = summA;
			summB1 = summB;
		} else if (num == 2) {
			name2 = name;
			aid2 = aid;
			id2 = id;
			champ2 = champ;
			summA2 = summA;
			summB2 = summB;
		} else if (num == 3) {
			name3 = name;
			aid3 = aid;
			id3 = id;
			champ3 = champ;
			summA3 = summA;
			summB3 = summB;
		} else if (num == 4) {
			name4 = name;
			aid4 = aid;
			id4 = id;
			champ4 = champ;
			summA4 = summA;
			summB4 = summB;
		} else if (num == 5) {
			name5 = name;
			aid5 = aid;
			id5 = id;
			champ5 = champ;
			summA5 = summA;
			summB5 = summB;
		} else if (num == 6) {
			name6 = name;
			aid6 = aid;
			id6 = id;
			champ6 = champ;
			summA6 = summA;
			summB6 = summB;
		} else if (num == 7) {
			name7 = name;
			aid7 = aid;
			id7 = id;
			champ7 = champ;
			summA7 = summA;
			summB7 = summB;
		} else if (num == 8) {
			name8 = name;
			aid8 = aid;
			id8 = id;
			champ8 = champ;
			summA8 = summA;
			summB8 = summB;
		} else if (num == 9) {
			name9 = name;
			aid9 = aid;
			id9 = id;
			champ9 = champ;
			summA9 = summA;
			summB9 = summB;
		} else if (num == 10) {
			name10 = name;
			aid10 = aid;
			id10 = id;
			champ10 = champ;
			summA10 = summA;
			summB10 = summB;
		}
	}
	
	public String getName(int num) {
		String result = "";
		if (num == 1) {
			result = name1;
		} else if (num == 2) {
			result = name2;
		} else if (num == 3) {
			result = name3;
		} else if (num == 4) {
			result = name4;
		} else if (num == 5) {
			result = name5;
		} else if (num == 6) {
			result = name6;
		} else if (num == 7) {
			result = name7;
		} else if (num == 8) {
			result = name8;
		} else if (num == 9) {
			result = name9;
		} else if (num == 10) {
			result = name10;
		}
		return result;
	}
	
	public long getAccountId(int num) {
		long result = 0;
		if (num == 1) {
			result = aid1;
		} else if (num == 2) {
			result = aid2;
		} else if (num == 3) {
			result = aid3;
		} else if (num == 4) {
			result = aid4;
		} else if (num == 5) {
			result = aid5;
		} else if (num == 6) {
			result = aid6;
		} else if (num == 7) {
			result = aid7;
		} else if (num == 8) {
			result = aid8;
		} else if (num == 9) {
			result = aid9;
		} else if (num == 10) {
			result = aid10;
		}
		return result;
	}
	
	public long getId(int num) {
		long result = 0;
		if (num == 1) {
			result = id1;
		} else if (num == 2) {
			result = id2;
		} else if (num == 3) {
			result = id3;
		} else if (num == 4) {
			result = id4;
		} else if (num == 5) {
			result = id5;
		} else if (num == 6) {
			result = id6;
		} else if (num == 7) {
			result = id7;
		} else if (num == 8) {
			result = id8;
		} else if (num == 9) {
			result = id9;
		} else if (num == 10) {
			result = id10;
		}
		return result;
	}
	
	public String getSummoner1(int num) {
		String result = "na";
		if (num == 1) {
			result = summA1;
		} else if (num == 2) {
			result = summA2;
		} else if (num == 3) {
			result = summA3;
		} else if (num == 4) {
			result = summA4;
		} else if (num == 5) {
			result = summA5;
		} else if (num == 6) {
			result = summA6;
		} else if (num == 7) {
			result = summA7;
		} else if (num == 8) {
			result = summA8;
		} else if (num == 9) {
			result = summA9;
		} else if (num == 10) {
			result = summA10;
		}
		return result;
	}
	
	public int getChamp(int num) {
		int result = 0;
		if (num == 1) {
			result = champ1;
		} else if (num == 2) {
			result = champ2;
		} else if (num == 3) {
			result = champ3;
		} else if (num == 4) {
			result = champ4;
		} else if (num == 5) {
			result = champ5;
		} else if (num == 6) {
			result = champ6;
		} else if (num == 7) {
			result = champ7;
		} else if (num == 8) {
			result = champ8;
		} else if (num == 9) {
			result = champ9;
		} else if (num == 10) {
			result = champ10;
		}
		return result;
	}
	
	public String getSummoner2(int num) {
		String result = "na";
		if (num == 1) {
			result = summB1;
		} else if (num == 2) {
			result = summB2;
		} else if (num == 3) {
			result = summB3;
		} else if (num == 4) {
			result = summB4;
		} else if (num == 5) {
			result = summB5;
		} else if (num == 6) {
			result = summB6;
		} else if (num == 7) {
			result = summB7;
		} else if (num == 8) {
			result = summB8;
		} else if (num == 9) {
			result = summB9;
		} else if (num == 10) {
			result = summB10;
		}
		return result;
	}
	
	public void print() {
		System.out.println("1: " + id1 + ", " + champ1);
		System.out.println("2: " + id2 + ", " + champ2);
		System.out.println("3: " + id3 + ", " + champ3);
		System.out.println("4: " + id4 + ", " + champ4);
		System.out.println("5: " + id5 + ", " + champ5);
		System.out.println("6: " + id6 + ", " + champ6);
		System.out.println("7: " + id7 + ", " + champ7);
		System.out.println("8: " + id8 + ", " + champ8);
		System.out.println("9: " + id9 + ", " + champ9);
		System.out.println("10: " + id10 + ", " + champ10);
	}
}
