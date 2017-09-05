

public class AvgPreTwentyStat {
	double sk;
	double sd;
	double csd;
	double xpd;
	double gd;
	double topk;
	double midk;
	double botk;
	double topg;
	double midg;
	double botg;
	double firstg;
	double firstt;
	double drag;
	double firstd;
	double rift;
	double firstr;
	
	public AvgPreTwentyStat(double sk, double sd, double csd, double xpd, double gd, double topk, double midk, double botk, double topg, 
			double midg, double botg, double firstg, double firstt, double drag, double firstd, double rift, double firstr) {
		this.sk = round1(sk);
		this.sd = round1(sd);
		this.csd = round1(csd);
		this.xpd = round1(xpd);
		this.gd = round1(gd);
		this.topk = round1(topk);
		this.midk = round1(midk);
		this.botk = round1(botk); 
		this.topg = round1(topg);
		this.midg = round1(midg);
		this.botg = round1(botg);
		this.firstg = time(firstg);
		this.firstt = percentage(firstt);
		this.drag = time(drag);
		this.firstd = percentage(firstd);
		this.rift = time(rift);
		this.firstr = percentage(firstr);
	}
	
	public double round1(double x) {
		return Math.round(x * 10.0) / 10.0;
	}
	
	public double percentage(double x) {
		return Math.round(x * 100);
	}
	
	public double time(double x) {
		double y = x / 60.0 / 1000.0;
		return Math.round(y * 100.0) / 100.0;
	}
	
	public void print() {
		System.out.println("Avg Solo Kills: " + sk);
		System.out.println("Avg Solo Deaths: " + sd);
		System.out.println("Avg CS Diff: " + csd);
		System.out.println("Avg XP Diff: " + xpd);
		System.out.println("Avg Gold Diff: " + gd);
		System.out.println("Avg Kills Contributed off Top Ganks: " + topk);
		System.out.println("Avg Kills Contributed off Mid Ganks: " + midk);
		System.out.println("Avg Kills Contributed off Bot Ganks: " + botk);
		System.out.println("Avg Top Ganks: " + topg);
		System.out.println("Avg Mid Ganks: " + midg);
		System.out.println("Avg Bot Ganks: " + botg);
		System.out.println("Avg First Gank Time: " + firstg);
		System.out.println("First Turret of Lane %: " + firstt);
		System.out.println("Avg First Drag Time: " + drag);
		System.out.println("First Drag %: " + firstd);
		System.out.println("Avg First Rift Time: " + rift);
		System.out.println("First Rift %: " + firstr);
		
	}
}
