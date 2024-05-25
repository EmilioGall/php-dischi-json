<?php
require_once __DIR__ . "/partials/functions.php";

$discs_array = get_data();

// var_dump($discs_array);


send_http_response($discs_array);