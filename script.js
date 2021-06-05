document.getElementById('ok').addEventListener('click',function(){
    alert('OK')
    
})
document.getElementById('cancel').addEventListener('click',function(){
    alert('CANCEL')
    
})
document.getElementById('no').addEventListener('click',function(){
    alert('NO')
    
})
document.getElementById('cancel').addEventListener('mousemove',function(a){
    var x = a.clientX;
    var y = a.clientY;
    console.log('x = '+x+' y = '+y)
})
