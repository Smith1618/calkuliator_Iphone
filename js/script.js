function insert(num) {
    document.form.textvue.value = document.form.textvue.value  + num;
}
function clean() {
    document.form.textvue.value = "";
}
function back(ram) {
    var ram =document.form.textvue.value;
    document.form.textvue.value = ram.substring(0,ram.length-1);
}
function evel() {
    var exp =document.form.textvue.value;
    if (exp) {
        document.form.textvue.value =eval(exp);
    }
}