<?php

require("class.phpmailer.php");
require("class.pop3.php");


if($_POST){
	$name=$_POST['cname'];
	$mobile=$_POST['cmobile'];
	$email=$_POST['cemail'];

       
//Third Party
       $to=$email;
       $mailer = new PHPMailer();
       $mailer->IsSMTP();
       $mailer->SMTPSecure ='ssl';
       $mailer->Host ='santhosh.sk1243gmail.com';
       $mailer->Port =465;
       $mailer->SMTPAuth =TRUE;
       $mailer->Username ='';  
       $mailer->Password ='';  
       $mailer->From ='';
       $mailer->FromName =''; 
       $mailer->IsHTML(true); 
       $email_subject="Thank you for your interest";      
       $email_body="
or
       <p>Dear $name,<br/><br/>
       Thanks for visiting and your valuable enquiry.<br> 
       We will contact you soon!!
       </p>


       ";

       $mailer->Body =$email_body;
       $mailer->Subject =$email_subject;
       $mailer->AddAddress($email);
       $mailer->Send();

 //Admin
       
       
       $mailer1 = new PHPMailer();
       $mailer1->IsSMTP();
       $mailer1->SMTPSecure ='ssl';
       $mailer1->Host ='';
       $mailer1->Port =465;
       $mailer1->SMTPAuth =TRUE;
       $mailer1->Username ='';  
       $mailer1->Password =''; 				
       $mailer1->From =$email;
       $mailer1->FromName =$name; 
       $mailer1->IsHTML(true);   

       $email_subject="Enquiry from ";     
       $email_body="
       $name has enquired from the. 

       Name : $cname
       Mobile : $cmobile
       Email : $cemail



       Thanks
       
       ";


       $mailer1->Body =nl2br($email_body);
       $mailer1->Subject =$email_subject;

//TO
$to_admin="";
       

       $recipients_to1=explode(",",$to_admin);
       foreach($recipients_to1 as $email1)
       {
       	$mailer1->AddAddress($email1);
       }


//Cc


//$cc_address="";

//$cc_address1="hondamagnum@gmail.com";




//$mailer1->AddCC($cc_address);
// $mailer1->AddCC($cc_address1);

//bcc

       $bcc_address = "";
       $mailer1->AddBCC($bcc_address);

       if(!$mailer1->Send())
       {
       	echo "Message was not sent<br/ >";
       	echo "Mailer Error: " .$mailer1->ErrorInfo;
       }
       else
       { 



       }

   }

   ?>
