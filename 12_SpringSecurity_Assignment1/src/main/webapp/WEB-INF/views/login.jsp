<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
  <%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
    <!DOCTYPE html>
    <html>

    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
      <style type="text/css">
        .error {
          color: red;
        }

        table {
          width: 50%;
          border-collapse: collapse;
          border-spacing: 0px;
        }
      </style>
      <title>Login</title>
    </head>

    <body>
      <h2>${message}</h2>
      <div align="center">
      <h4 align="center">Login Form</h4>
      <form action='<spring:url value="/loginAction"/>' method="post">
        <table border="0">
          <tr>
            <td>Username</td>
            <td>
              <input type="text" name="username">
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input type="password" name="password">
            </td>
          </tr>
          <tr>
            <td></td>
            <td align="left">
              <button type="submit">Login</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <a href="register">Register</a>
            </td>
          </tr>
        </table>
      </form>
      <br/>
      </div>
      
    </body>

    </html>