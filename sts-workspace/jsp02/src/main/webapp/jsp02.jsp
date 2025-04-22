<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<%
	String str = "안녕하세요";
	// %=str% 서버에서 클라이언트로 코드를 넘겨줌 
%>
<body>
<div style="color:red;font-size:1.2rem"><%=str%></div>

</body>
</html>