<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>메인화면</title>
</head>
<body>
	<form action="./process.jsp" method="get">
	<input type='text' id="myId" name="myId"><br>
	<input type='text' id="passwd" name="passwd">
	<!-- 데이터는 중복 가능한 name으로 전송함 id는 개발할때 식별용 -->
	<div>
		<button type="submit">전송</button>
	</div>
	
	</form>
</body>
</html>