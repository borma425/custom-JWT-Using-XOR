Encrypt json data using Xor in javascript and decrypt in php

Use :
![image](https://user-images.githubusercontent.com/42983220/139194518-13fa5c6d-124c-435d-a440-947e6555306f.png)

```
<script >

let jsonData = `

{
"name":"John",
"age":14
}

`;

let test = start.xor_encrypt_header(jsonData);

console.log( test );


</script>


```

Output :

``` 

{LS0tLS1COiBEb250IFRyeSBJbSBZZWhpYS0tLS0tLVRfdUZqZwwJ: 'LS0tLS1COiBEb250IFRyeSBJbSBZZWhpYS0tLS0tLWVfCl1SUQwJ', 
LS0tLS1COiBEb250IFRyeSBJbSBZZWhpYS0tLS0tLW9lV14=: 'LS0tLS1COiBEb250IFRyeSBJbSBZZWhpYS0tLS0tLXtmYg8='}


```
