<?php
header("Access-Control-Allow-Origin: *");
class action{

    var $con;
    function __construct(){

    $this->con = mysqli_connect('localhost','root','','ionic') or die(mysqli_connect_error());

    }


    function login($username,$password){
        
        //check if user exist in database
        $exist = $this->con->query("Select * from users where username='$username' and password='$password'");
        if($exist->num_rows>0){
            echo "login";
        }else {
            strlen($this->con->error)>0 ? print $this->con->error :print "User Not Found";
        }
    }
    
    function getDetail($username){
        
        //check if user exist in database
        $exist = $this->con->query("Select * from users where username='$username'");
        if($exist->num_rows>0){
            echo json_encode($exist->fetch_array(MYSQLI_ASSOC));
        }else {
            strlen($this->con->error)>0 ? print $this->con->error :print "User Not Found";
        }
    }

    function signup($name,$username,$password){
        $name = $this->con->real_escape_string($name);
        $username = $this->con->real_escape_string($username);
        $password = $this->con->real_escape_string($password);

        if($name=='' || $username=='' || $password==''){
            echo json_encode('Please Provide All Requested Information');
        }else{
        //check if username exist
        $exist = $this->con->query("Select * from users where username='$username'");
        if($exist->num_rows>0){
            echo json_encode($username." Already Taken");
        }else {
            $insert=$this->con->query("insert into users (name,username,password) values ('$name','$username','$password')");
            if($insert){
                echo json_encode($username. " Added To DB");
            }else {
                echo json_encode($this->con->error);
            }
        }
    }
}


}
?>