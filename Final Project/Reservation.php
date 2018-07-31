<?php
include_once 'db.php'; 

if(isset($_POST['btn_MakeReservation']))
{
	$full_name = $_POST['fullname'];
	$email = $_POST['email'];
	$phone_number = $_POST['PhoneNumber'];
	$No_Of_Persons = $_POST['NoOfPersons'];
	$date = $_POST['date'];
	$message = $_POST['message'];



	mysqli_query($conn,"insert into Reservation(Name, Email, PhoneNumber, NoOfPerson, Date, Message) values ('$full_name','$email','$phone_number','$No_Of_Persons','$date','$message')") or die(mysqli_error()); 

echo "<p align=center>Data Added Successfully.</p>"; 

} 


?>