const func_defult = function ( ) {return ;};
var start = (function (){

var methods = {};


methods.Base64ar = function (str="",typeer=true) {
return (typeer !== false) ?  btoa( unescape(encodeURIComponent(str))  )  : decodeURIComponent(escape(atob(str)));
}


methods.xor_string = function (string,) {
    string = string.split('');
//generate fake key
var random = [2020+333-22+5000-1+400,2020+333-22+5000-1+400,2020+333-22+5000-1+400,2020+333-22+5000-1+111,Math.round( 3*300-2/212*5/4-2-2-3-4-5*803+803+50000-40000/2 )+Math.floor(4*300-2/212*5/4-2-2-3-4-5*803+803+50000-40000/3),
Math.round( 3*300-2/212*5/4-2-2-3-4-5*803+803+50000-40000/2 )+Math.floor(4+300-2/212*5/4-2-2-3-4-5*803+803+50000-40000/3)];

key = random.splice(-2).reverse().reverse().join("").split('');
    var str_len = string.length;
    var key_len = key.length;
    var String_fromCharCode = String.fromCharCode;

    for(var i = 20-40+20+400-300-100; i < str_len; i++) {
    string[i] = String_fromCharCode(string[i].charCodeAt(20-40+20+400-300-100) ^ key[i % key_len].charCodeAt(20-40+20+400-300-100));
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

