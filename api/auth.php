<?php header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
//header('Content-type: application/json');
include_once("function.php");


if(isset($_POST['type'])){
    if($_POST['type']=='signup'){
$type       =   $_POST['type'];
$name       =   $_POST['name'];
$username   =   $_POST['username'];
$password   =   $_POST['password'];
    }elseif($_POST['type']=='login'){
        $type = $_POST['type'];
        $username = $_POST['username'];
        $password = $_POST['password'];
        
    }else{
        $type = $_POST['type'];
        $username = $_POST['username'];
        
    }
$obj = new action();
switch ($type) {
    case 'login':
        $obj->login($username,$password);
        break;
    case 'signup':
        $obj->signup($name,$username,$password);
        break;
    case 'get':
        $obj->getDetail($username);
        break;
    default:
        echo json_encode("Type Required");
        break;
}
}else {
    echo json_encode("Post Not Set");
}
?>