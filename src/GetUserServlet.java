import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.apache.commons.lang.StringEscapeUtils;



@WebServlet("/GetUserServlet")
public class GetUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	StatFinder sf;


//	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//

//		
////		
//		// call to same servlet but from stats page, not home (here you will use the already created statfinder)
//		if (request.getParameter("role") != null && request.getParameter("num") != null) {
////			try {
////				String role = request.getParameter("role").trim();
////				String num = request.getParameter("num").trim();
////				String result = sf.searchCurrentGame(role, Integer.parseInt(num));
////				response.setContentType("text/plain");
////				response.getWriter().write(result);
////			} catch (Exception e) {
////				System.out.println("ERROR SEARCHING FOR STATS!!");
////				System.out.println(e);
////			}
//			System.out.println("javascript did somethin");
//		}
//		
//	}
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
	        throws ServletException, IOException {
	    doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
	        throws ServletException, IOException {
//	    String text = "<br>Message from servlet<br>"; //message you will recieve 
//	    String name = request.getParameter("name");
//	    PrintWriter out = response.getWriter();
//	    System.out.println(text + name);
//	    out.println(text + name);
		
		System.out.println("making this page");
		// two types of requests: one for current game info, the other for stats
		if (request.getParameter("userName") != null) {
			String userName = request.getParameter("userName");
			System.out.println("servlet: " + userName);
			
			sf = new StatFinder(userName);
			String result = sf.getResult();
			System.out.println(result);
//				response.setContentType("text/plain");
//				response.getWriter().write(result);
		    PrintWriter out = response.getWriter();
		    out.println(result);
		    System.out.println(result);
			
		} else if (request.getParameter("role") != null && request.getParameter("num") != null) {
			System.out.println("THIS SHIT WORKS!");
			String role = request.getParameter("role");
			int num = Integer.parseInt(request.getParameter("num"));
			
			String result = sf.searchCurrentGame(role, num);
			PrintWriter out = response.getWriter();
		    out.println(result);
			
		}
		
	}
	

}