<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>결과창</title>
</head>
<%
	// getAttribute 는 값이 object로 반환되기때문에 형변환 필요
	String str = (String)request.getAttribute("str");
	// ${param.} getParameter에서 꺼낼때 
%>
<body>
	<div>
		<span>${str}</span>

	</div>
</body>
</html>