<?php

$json_dischi = file_get_contents('../data/dischi.json');

var_dump($json_dischi);

var_dump(json_decode($json_dischi));