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
    <nav class="animate__animated animate__flipInX">
        <div class="f-d-nav">
            <img src="Image/Logo.png" alt="" class="img-h">
            <ul class="h-fs">
                <a href="index.html" class="tx-a">
                    <li class="h-fs-i li-m">Home</li>
                </a>
                <a href="Menu.html" class="tx-a">
                    <li class="h-fs-i li-m">Menu</li>
                </a>
                <a href="Log-form.php" class="tx-a">
                    <li class="h-fs-i li-m">Login</li>
                </a>
            </ul>
        </div>
    </nav>
    <div class="form-center">
        <form action="#" class="form" method="post">
            <caption><img src="Image/Logo.png" alt="" class="image-nav"></caption>
            <fieldset>
                <legend class="field-focuse">
                    User Name
                </legend>
                <input class="input-log" type="text" name="user-add" id="user-add">
            </fieldset>
            <fieldset>
                <legend>Password</legend>
                <input class="input-log" type="password" name="password-add" id="password-add">
            </fieldset>
            <button type="submit" class="log-btn">login</button>
            <a href="Sign-form.html" class="a-log-text">don't have account? Sign Up!</a>
        </form>
    </div>
</body>

</html>
<?php
session_start();
@$user = $_POST['user-add'];
@$pass = $_POST['password-add'];
if (isset($user)) {

    $db = mysqli_connect("localhost", "root", "");
    if (!$db) {
        echo 'Error : Cannot connect to MySQL server.';
        exit;
    }
    mysqli_select_db($db, 'commodity');
    $query = "SELECT * FROM t_karbar WHERE username='$user' and password='$pass'";
    $result = mysqli_query($db, $query);
    $num = mysqli_num_rows($result);
    if ($num == 0) {


        echo "<script>alert('Name & Password Incorrect !');
			window.location.href='Log.php'; </script>";

        exit;
    }
    $row = mysqli_fetch_row($result);
    $kb = $row[1] . ' ' . $row[2];
    $_SESSION['karbar'] = $kb;
    echo "<script>alert('" . $kb . " Login In ! ');
		window.location.href='index.html'; </script>";
} else
    exit;
?>