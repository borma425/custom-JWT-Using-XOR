<?php

function xor_string($string, $key) {
    $str_len = strlen($string);
    $key_len = strlen($key);

    for($i = 0; $i < $str_len; $i++) {
        $string[$i] = $string[$i] ^ $key[$i % $key_len];
    }

    return $string;
}

function xor_decode($str="") {

global $decryptKey;

return base64_decode(xor_string(str_replace("-----B: Dont Try Im Yehia------", "", base64_decode(      $str            )),$decryptKey))   ;

}

$encoder ='{
    "LS0tLS1COiBEb250IFRyeSBJbSBZZWhpYS0tLS0tLVRfdUZqZwwJ": "LS0tLS1COiBEb250IFRyeSBJbSBZZWhpYS0tLS0tLWVfCl1SUQwJ",
    "LS0tLS1COiBEb250IFRyeSBJbSBZZWhpYS0tLS0tLW9lV14=": "LS0tLS1COiBEb250IFRyeSBJbSBZZWhpYS0tLS0tLXtmYg8="
}';

$decryptKey = "6232061424";
$mainJson = array();


foreach(json_decode($encoder) as $key => $val) {

    $keyName = xor_decode($key);

    $keyalue = xor_decode($val);

    $mainJson[$keyName] = $keyalue;

}


echo $mainJson["name"]; // john
