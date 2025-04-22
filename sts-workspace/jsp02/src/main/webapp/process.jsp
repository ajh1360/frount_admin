<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인 화면</title>
</head>
<%
	// 클라이언트에서 넘어오는 데이터는 모두 String타입으로 넘어옴 
	String myId = request.getParameter("myId");
	String passwd = request.getParameter("passwd");
	String str = "";
	
	if(myId.equals("admin") && passwd.equals("1234")){
		str="로그인";
	}else {
		str="로그인 실패";
	}
	
	//페이지 이동
	RequestDispatcher disp = request.getRequestDispatcher("/result.jsp"); // 다른 페이지로 이동함 
	request.setAttribute("str", str); // response는 요청한 대상한테 되돌아간다. 서버의 데이터를 보존하지 않고 이동만한다 
	disp.forward(request, response); // requests 데이터를 보존하고 페이지를 이동시킴 
	
%>
<body>



</body>
</html>