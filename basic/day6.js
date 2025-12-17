<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Student Registration</title>

<style>
body{
    margin:0;
    padding:0;
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(120deg,#667eea,#764ba2);
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
}

.container{
    background:#fff;
    width:420px;
    padding:30px;
    border-radius:12px;
    box-shadow:0 15px 35px rgba(0,0,0,0.2);
}

.container h2{
    text-align:center;
    margin-bottom:25px;
    color:#333;
}

input, select{
    width:100%;
    padding:12px;
    margin:10px 0;
    border-radius:8px;
    border:1px solid #ccc;
    font-size:15px;
}

input:focus, select:focus{
    outline:none;
    border-color:#667eea;
}

button{
    width:100%;
    padding:12px;
    margin-top:15px;
    border:none;
    background:#667eea;
    color:white;
    font-size:16px;
    border-radius:8px;
    cursor:pointer;
    transition:0.3s;
}

button:hover{
    background:#5a67d8;
}

.footer{
    text-align:center;
    margin-top:15px;
    font-size:14px;
}

.footer a{
    text-decoration:none;
    color:#667eea;
}
</style>
</head>

<body>

<div class="container">
    <h2>Student Registration</h2>

    <form action="success.html">
        <input type="text" placeholder="Full Name" required>
        <input type="email" placeholder="Email Address" required>
        <input type="number" placeholder="Mobile Number" required>
        <select required>
            <option value="">Select Course</option>
            <option>B.Tech</option>
            <option>BCA</option>
            <option>MCA</option>
            <option>M.Tech</option>
        </select>
        <input type="password" placeholder="Password" required>
        <button type="submit">Register</button>
    </form>

    <div class="footer">
        Already registered? <a href="#">Login</a>
    </div>
</div>

</body>
</html>
