function ValidData(e, spn) {
    if (e.value == "") {
        document.getElementById(spn).innerHTML = "Please Enter Data!";
        document.getElementById(spn).style.color = 'red';
    } else {
        document.getElementById(spn).innerHTML = "";
    }
}

function namevalid(e, spnid) {
    var name = /^[a-zA-z]+$/;
    if (name.test(e.value)) {
        document.getElementById(spnid).innerHTML = "";
    } else {
        document.getElementById(spnid).innerHTML = "Please Enter only characters!";
        document.getElementById(spnid).style.color = 'red';
        document.getElementById(spnid).style.fontSize = '1rem';
    }
}

function Emailvalid(e, spnid) {
    var email = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (email.test(e.value)) {
        document.getElementById(spnid).innerHTML = "";
    } else {
        document.getElementById(spnid).innerHTML = "Please Enter Valid Email!";
        document.getElementById(spnid).style.color = 'red';
        document.getElementById(spnid).style.fontSize = '1rem';
    }
}

function phonevalid(e, spnid) {
    var phone = /^[0-9]{10}$/
    if (phone.test(e.value)) {
        document.getElementById(spnid).innerHTML = "";
    } else {
        document.getElementById(spnid).innerHTML = "Please Enter Valid Phone Number!";
        document.getElementById(spnid).style.color = 'red';
        document.getElementById(spnid).style.fontSize = '1rem';
    }
}