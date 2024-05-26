<?php
require_once __DIR__ . "/partials/functions.php";

$discs_array = get_data();

// var_dump($discs_array);

if (isset($_POST["action"]) && $_POST["action"] === "toggle-like") {

   $disc_index = $_POST["disc_index"];

   $list = toggle_like($disc_index, $discs_array);

};


send_http_response($discs_array);
