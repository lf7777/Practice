document.getElementById('p_1').style.color='blue'

function myFunction(){
    window.close();
    let x = document.forms['myForm']['fname'].value;
    let y = Number(document.forms['myForm']['fage'].value);
    if(x==''){
        alert('必须写入姓名');
        return false;
    }
    if(y%1!=0||y<1||y>130){
        alert('请输入整数数字');
        return false;
    }
}

function myFun(){
    window.history.back()
}
