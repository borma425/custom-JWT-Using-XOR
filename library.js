const func_defult = function ( ) {return ;};
var start = (function (){

var methods = {};


methods.Base64ar = function (str="",typeer=true) {
return (typeer !== false) ?  btoa( unescape(encodeURIComponent(str))  )  : decodeURIComponent(escape(atob(str)));
}


methods.xor_string = function (string) {
    string = string.split('');
//generate fake key
key = 6232061424;
    var str_len = string.length;
    var key_len = key.length;
    var String_fromCharCode = String.fromCharCode;

    for(var i = 0 ; i < str_len; i++) {
    string[i] = String_fromCharCode(string[i].charCodeAt(0) ^ key[i % key_len].charCodeAt(0));
    }

    return string.join('');
}


methods.xor_encode = function (str) {
    let res = '-----B: Dont Try Im Yehia------'+methods.xor_string(methods.Base64ar(str,true));
    return methods.Base64ar(res,true);

}


methods.xor_encrypt_header =  function (jsonData) {


    let selectJson = JSON.parse(jsonData);
    var json_arr = {};
    
    Object.keys(selectJson).forEach(function(key) {
    
    let Keyname = key;
    let Keyvalue = selectJson[key];
    
    json_arr[      methods.xor_encode(Keyname)    ] =  methods.xor_encode(Keyvalue);
    
    
    
    });
    

    return JSON.parse( JSON.stringify(json_arr) ) ;

}



return methods;


}());

