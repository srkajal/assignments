<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
        <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
            <!DOCTYPE html>
            <html>

            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
                <title>Register Page</title>
                <style type="text/css">
                    .error {
                        color: red;
                    }

                    table {
                        width: 50%;
                        border-collapse: collapse;
                        border-spacing: 0px;
                    }

                    .beta table td {
                        border: 1px solid #565454;
                        padding: 20px;
                    }
                </style>

            </head>

            <body>
                <div align="center">
                    <table class="beta">
                        <tr>
                            <td>
                                <div>
                                    <h2>Registration Form</h2>
                                    <form:form action="addUser" method="post" modelAttribute="registerDto">
                                        <table>
                                            <tr>
                                                <td>User Name</td>
                                                <td>
                                                    <form:input path="userName" />
                                                    <br />
                                                    <form:errors path="userName" cssClass="error" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Password</td>
                                                <td>
                                                    <form:password path="password" />
                                                    <br />
                                                    <form:errors path="password" cssClass="error" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Role</td>
                                                <td>
                                                    <form:select path="role">
                                                        <form:option value="NONE" label="select" />
                                                        <form:option value="ROLE_PRINCIPAL" label="PRINCIPAL" />
                                                        <form:option value="ROLE_LIBRARIAN" label="LIBRARIAN" />
                                                    </form:select>
                                                    <br />
                                                    <form:errors path="password" cssClass="error" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">
                                                    <button type="submit">Submit</button>
                                                </td>
                                            </tr>
                                        </table>
                                    </form:form>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>

            </body>

            </html>