<?php

/**
 * Function: read data from file and return an array.
 * @return array
 */
function get_data() {
   
  $discs_json_string = file_get_contents("./dischi.json"); // json string

  return json_decode($discs_json_string, true); // array

};


/**
 * Function: send HTTP response of $data variable. 
 * @param array $data
 * 
 * @return [type]
 */
function send_http_response($data) {

   $data_response = [
     "results" => $data,
     "success" => true
   ];
 
   $data_json = json_encode($data_response); // json string
 
   header("Content-Type: application/json");
 
   // Invio la risposta
   echo $data_json;
 }