<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JSP01</title>
</head>
<%
	String str = "안녕하세요";
	/*
	내장객체
	jsp개발중 필수적으로 사용해야하는 객체를 미리 선언해둔것
	1.request -> 요청 객체
	2.response -> 응답 객체
	3.applicationContext -> app 정보 객체
	4.seesion -> session 객체
	5.out -> print 객체 -> html document에 출력 
	*/
	out.print(str);
	
	out.print("<div style='color:red; font-size:20px;'>안녕하세요</div>");

%>
<body>

</body>
</html>