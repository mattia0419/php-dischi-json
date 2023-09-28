<?php

$json_dischi = file_get_contents('../data/dischi.json');

$dischi = json_decode($json_dischi);

header('Content-Type: application/json');

echo json_encode($dischi);