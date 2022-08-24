//Truy cap cac o input
const valiName = document.getElementById("name1");
const valiNumber = document.getElementById("number1");
const valiTime = document.getElementById('time1');
const valiHour = document.getElementById("numhour1");
const valiPlayer = document.getElementById("numplay1");
const valiTeam = document.getElementById("numteam1");

//Hàm setError để sửa dữ liệu bên html khi dữ liệu nhập sai 
function setError(id, error, text) {
    let you = document.getElementById(id);
    you.classList.add("error")
    document.getElementById(error).textContent = text;
}


//function giúp kiểm tra sdt
function isPhone(number) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}


//Validate các dữ liệu trong ô input
function validateOrder() {
    let nameValue = valiName.value;
    let numberValue = valiNumber.value;
    let timeValue = valiTime.value;
    let hourValue = valiHour.value;
    let playerValue = valiPlayer.value;
    let teamValue = valiTeam.value;

    //Dữ liệu boolean để xét xem có submit được hay k 
    let isCheckOrder = true;

    //Kiểm tra tên người đặt sân
    if (nameValue == "") {
        setError('name1', "nameError", "Please fill out your name.");
        isCheckOrder = false;
    } else {
        valiName.classList.remove('error');
        document.getElementById('nameError').textContent = "";
    }

    //Kiểm tra sđt
    if (numberValue == '') {
        setError('number1', 'sdtError', 'SDT không được để trống');
        isCheck = false;
    } else if (!isPhone(numberValue)) {
        setError('number1', 'sdtError', 'SDT không đúng định dạng');
        isCheck = false;
    } else {
        valiNumber.classList.remove('error');
        document.getElementById('sdtError').textContent = "";
    }

    //Kiểm tra khung giờ
    if (timeValue == "") {
        setError('time1', "timeError", "Please choose the time");
        isCheckOrder = false;

    } else {
        valiTime.classList.remove('error');
        document.getElementById('timeError').textContent = "";
    }

    //Kiểm tra số giờ 
    if (hourValue == "") {
        setError('numhour1', "numhourError", "Please fill out your hour");
        isCheckOrder = false;
    } else if (isNaN(hourValue)) {
        setError('numhour1', "numhourError", "This is not valid");
        isCheckOrder = false;
    } else {
        valiHour.classList.remove('error');
        document.getElementById('numhourError').textContent = "";
    }

    //Kiểm tra số người chơi
    if (playerValue == "") {
        setError('numplay1', "numplayerError", "Please fill out your team player");
        isCheckOrder = false;
    } else if (isNaN(playerValue)) {
        setError('numplay1', "numplayerError", "This is not valid");
        isCheckOrder = false;
    } else {
        valiPlayer.classList.remove('error');
        document.getElementById('numplayerError').textContent = "";
    }

    //Kiểm tra số đội
    if (teamValue == "") {
        setError('numteam1', "numteamError", "Please fill out your team ");
        isCheckOrder = false;
    } else if (isNaN(teamValue)) {
        setError('numteam1', "numteamError", "This is not valid");
        isCheckOrder = false;
    } else {
        valiTeam.classList.remove('error');
        document.getElementById('numteamError').textContent = "";
    }

    if (isCheckOrder) {
        alert("Chuc mung ban da nhap du thong tin can thiet");
    }

    return isCheckOrder;
}

function totalMoney() {
    if (valiTime.value == "06-16") {
        document.getElementById("totalmoney").innerText = '300000';

    } else if (valiTime.value == "16-17") {
        document.getElementById("totalmoney").innerText = '600000';
    } else if (valiTime.value == "17-20") {
        document.getElementById("totalmoney").innerText = '800000';
    } else if (valiTime.value == "20-22") {
        document.getElementById("totalmoney").innerText = '400000';
    }
}



function checkPlus1() {
    let checkThis = document.getElementById("includeY1");
    let kquaMoi = document.getElementById("totalmoney").textContent;
    const x = new Number(kquaMoi);

    if (checkThis.checked) {
        let kquaMoi1 = x + 300000;
        let kquaMoi2 = kquaMoi1.toString(10);
        console.log(kquaMoi2);
        document.getElementById("totalmoney").innerText = kquaMoi2;
    } else {
        let kquaMoi3 = x - 300000;
        let kquaMoi4 = kquaMoi3.toString(10);
        document.getElementById("totalmoney").innerText = kquaMoi4;
    }
}

function checkPlus2() {
    let checkThis = document.getElementById("includeY2");
    let kquaMoi = document.getElementById("totalmoney").textContent;
    const y = new Number(kquaMoi);
    if (checkThis.checked) {
        let kquaMoi1 = y + 200000;
        document.getElementById("totalmoney").textContent = kquaMoi1;
    } else {
        let kquaMoi3 = y - 200000;
        let kquaMoi4 = kquaMoi3.toString(10);
        document.getElementById("totalmoney").innerText = kquaMoi4;
    }
}