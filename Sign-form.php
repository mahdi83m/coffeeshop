<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Style.css">
    <title>log in</title>
</head>
<body>
    <nav>
        <div class="f-d-nav">
            <img src="Image/Logo.png" alt="" class="img-h">
            <ul class="h-fs">
                <a href="Home.html" class="tx-a"><li class="h-fs-i li-m">Home</li></a>
                <a href="Index.html" class="tx-a"><li class="h-fs-i li-m">Menu</li></a>
                <a href="Log-form.php" class="tx-a"><li class="h-fs-i li-m">Login</li></a>
            </ul>
        </div>
    </nav>
    <div class="form-center">
        <form action="#" class="form" method="post">
            <caption><img src="Image/Logo.png" alt="" class="image-nav"></caption>
            <fieldset>
                <legend>Phone Number</legend>
                <input class="input-log" type="tel" name="phone-add" id="phone-add">
            </fieldset>
            <fieldset>
                <legend class="field-focuse">User Name</legend>
                <input class="input-log" type="text" name="user-add" id="user-add">
            </fieldset>
            <fieldset>
                <legend>Password</legend>
                <input class="input-log" type="password" name="password-add" id="password-add">
            </fieldset>
            <button type="submit" class="log-btn">login</button>
            <a href="Log-form.html" class="a-log-text">Already have account? Login!</a>
        </form>
    </div>
</body>
</html>
<?php 

@ $phone=$_POST['phone-add'];
@ $pass=$_POST['password-add'];
@ $user=$_POST['user-add'];


$db = @mysqli_connect("localhost", "root", "");
if(!$db)
{
echo 'Error : Cannot connect to MySQL server.';
exit;
}
mysqli_select_db($db,'commodity');
$query = "INSERT INTO `t_karbar`(`username`, `password`, `phone`) VALUES ('$user','$pass','$phone')";

$qry = mysqli_query( $db,$query);
echo "<script>alert('User Added To Site');
       window.location.href='Log-form.php'; </script>";
exit;

?>