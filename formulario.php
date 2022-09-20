<?php
  $user_name = htmlspecialchars ($ _POST ['user_name']);
  $user_mail = htmlspecialchars ($ _POST ['user_mail']);
  $user_message = htmlspecialchars ($ _POST ['user_message']);

  echo $user_name, '', $user_mail, '', $user_message;
?>