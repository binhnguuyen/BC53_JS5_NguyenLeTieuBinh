// Bài 1: tính điểm thi
function quanLyTuyenSinh() {
    var areaChoose = document.getElementById("areaChoose").value;
    var targetChoose = document.getElementById("targetChoose").value;
    var firstScore = +document.getElementById("firstScore").value;
    var secondScore = +document.getElementById("secondScore").value;
    var thirdScore = +document.getElementById("thirdScore").value;
    var passScore = +document.getElementById("passScore").value;
    var result1 = document.getElementById("result1");

    var area = ["A", "B", "C", "X"];
    var areaScore = [2, 1, 0.5, 0];
    var target = ["1", "2", "3", "0"];
    var targetScore = [2.5, 1.5, 1, 0];

    var plusScoreArea;
    var plusScoreTarget;
    var totalScore;
    var passFailResult;
    // console.log(areaChoose);

    for (var i = 0; i < area.length; i++) {
        if (areaChoose == area[i]) {
            plusScoreArea = areaScore[i]
        }
        if (targetChoose == target[i]) {
            plusScoreTarget = targetScore[i]
        }
    }

    if (firstScore == 0 || secondScore == 0 || thirdScore == 0) {
        passFailResult = "Chúc mừng bạn đã rớt kỳ thi tuyển sinh vì học kiểu gì không biết nhưng có môn bị hột vịt lộn nha"
    }
    else {
        // Tính tổng điểm
        totalScore = firstScore + secondScore + thirdScore + plusScoreArea + plusScoreTarget;
        if (totalScore >= passScore) {
            passFailResult = "Chúc mừng bạn đã đậu kỳ thi tuyển sinh"
        }
        else {
            passFailResult = "Học hành kiểu thế mà đòi đậu. Rớt nha"
        }
    }

    result1.innerHTML = `
    <div>
        Với đối tượng là ${targetChoose} của khu vực là ${areaChoose} và số điểm 3 môn lần lượt là ${firstScore, secondScore, thirdScore} là tổng điểm là: ${totalScore} điểm
        <br>
        Kết quả: ${passFailResult} 
    </div> 
    `;
}

// Bài 2: tính tiền điện
function calcPowerConsumption() {
    var style = "currency";
    var currenry = "VND";
    var name = document.getElementById("name").value;
    var powerConsumption = +document.getElementById("powerConsumption").value;
    var result2 = document.getElementById("result2");

    var moneyFirst50 = 500;
    var moneyNext50 = 650;
    var moneyNext100 = 850;
    var moneyNext150 = 1100;
    var moneyNext = 1300;
    var totalMoney;

    // Phải xếp độ theo độ ưu tiên từ trên xuống
    // Vì muốn ưu tiên số điện lớn nên xếp từ trên xuống theo thứ tự số điện nhỏ dần
    if (powerConsumption > (50 + 50 + 100 + 150)) {
        totalMoney = moneyFirst50 * 50 + moneyNext50 * 50 + moneyNext100 * 100 + moneyNext150 * 150 + (powerConsumption - 50 - 50 - 100 - 150) * moneyNext;
    }
    else if (powerConsumption > (50 + 50 + 100)) {
        totalMoney = moneyFirst50 * 50 + moneyNext50 * 50 + moneyNext100 * 100 + (powerConsumption - 50 - 50 - 100) * moneyNext150;
    }
    else if (powerConsumption > (50 + 50)) {
        totalMoney = moneyFirst50 * 50 + moneyNext50 * 50 + (powerConsumption - 50 - 50) * moneyNext100;
    }
    else if (powerConsumption > 50) {
        totalMoney = moneyFirst50 * 50 + (powerConsumption - 50) * moneyNext50;
    }
    else if (powerConsumption <= 50) {
        totalMoney = moneyFirst50 * 50;
    }
    else {
        // do nothing
    }

    result2.innerHTML = `
    <div>
        Họ tên: ${name}
        <br>
        Số Kw điện tiêu thụ: ${powerConsumption} Kw
        <br>
        Tiền điện: ${totalMoney.toLocaleString("it-IT", {
        style: style,
        currency: currenry,
    })} 
    </div> 
    `;
}



// Bài 3: tính thuế thu nhập cá nhân
function calcTaxOnPerson() {
    var style = "currency";
    var currenry = "VND";
    var nameTax = document.getElementById("nameTax").value;
    var salaryForYear = +document.getElementById("salaryForYear").value;
    var peopleInFamily = +document.getElementById("peopleInFamily").value;
    var result3 = document.getElementById("result3");

    var salary60 = 60000000;
    var taxPercent5 = 0.05;
    var salary120 = 120000000;
    var taxPercent10 = 0.1;
    var salary210 = 210000000;
    var taxPercent15 = 0.15;
    var salary384 = 384000000;
    var taxPercent20 = 0.2;
    var salary624 = 624000000;
    var taxPercent25 = 0.25;
    var salary960 = 960000000;
    var taxPercent30 = 0.30;
    var taxPercent30 = 0.35;
    var salaryForTax;

    // Phải xếp độ theo độ ưu tiên từ trên xuống
    // Vì muốn ưu tiên số điện lớn nên xếp từ trên xuống theo thứ tự số điện nhỏ dần
    salaryForTax = salaryForYear - 4000000 - 1600000 * peopleInFamily;
    if (salaryForTax > salary960) {
        totalMoney = salary60 * taxPercent5 + (salary120 - salary60) * taxPercent10 + (salary210 - salary120) * taxPercent15 + (salary384 - salary210) * taxPercent20 + (salary624 - salary384) * taxPercent25 + (salary960 - salary624) * taxPercent30 + (salaryForTax - salary960) * taxPercent30;
    }
    else if (salaryForTax > salary624) {
        totalMoney = salary60 * taxPercent5 + (salary120 - salary60) * taxPercent10 + (salary210 - salary120) * taxPercent15 + (salary384 - salary210) * taxPercent20 + (salary624 - salary384) * taxPercent25 + (salaryForTax - salary624) * taxPercent30;
    }
    else if (salaryForTax > salary384) {
        totalMoney = salary60 * taxPercent5 + (salary120 - salary60) * taxPercent10 + (salary210 - salary120) * taxPercent15 + (salary384 - salary210) * taxPercent20 + (salaryForTax - salary384) * taxPercent25;
    }
    else if (salaryForTax > salary210) {
        totalMoney = salary60 * taxPercent5 + (salary120 - salary60) * taxPercent10 + (salary210 - salary120) * taxPercent15 + (salaryForTax - salary210) * taxPercent20;
    }
    else if (salaryForTax > salary120) {
        totalMoney = salary60 * taxPercent5 + (salary120 - salary60) * taxPercent10 + (salaryForTax - salary120) * taxPercent15;
    }
    else if (salaryForTax > salary60) {
        totalMoney = salary60 * taxPercent5 + (salaryForTax - salary60) * taxPercent10;
    }
    else {
        totalMoney = salaryForTax * taxPercent5
    }

    result3.innerHTML = `
    <div>
        Họ tên: ${nameTax}
        <br>
        Thu nhập cá nhân: ${salaryForYear.toLocaleString("it-IT", {
        style: style,
        currency: currenry,
    })}/năm
        <br>
        Thuế thu nhập cá nhân: ${totalMoney.toLocaleString("it-IT", {
        style: style,
        currency: currenry,
    })} 
    </div> 
    `;
}


// Bài 4: tính tiền cáp
function calcCableMoney() {
    var style = "currency";
    var currenry = "USD";
    var typeOfCustomer = document.getElementById("typeOfCustomer").value;
    var customerCode = document.getElementById("customerCode").value;
    var connectChanNum = +document.getElementById("connectChanNum").value;
    var exclusiveChanel = +document.getElementById("exclusiveChanel").value;
    var result4 = document.getElementById("result4");

    var typeOfCustomerToDis;
    var invoiceHandleFee;
    var basicServiceFee;
    var exclusiveChannerHireFee;
    var totalCableMoney;

    if (typeOfCustomer == "Com") {
        typeOfCustomerToDis = "Doanh Nghiệp";
        invoiceHandleFee = 15;
        exclusiveChannerHireFee = 50;
        if (connectChanNum <= 10) {
            basicServiceFee = 75;
        }
        else {
            basicServiceFee = 75 + (connectChanNum - 10) * 5;
        }
    }
    else {
        typeOfCustomerToDis = "Nhà Dân";
        invoiceHandleFee = 4.5;
        basicServiceFee = 20.5;
        exclusiveChannerHireFee = 7.5;
        connectChanNum = 1;
    }

    totalCableMoney = invoiceHandleFee + basicServiceFee + exclusiveChannerHireFee * exclusiveChanel;

    result4.innerHTML = `
    <div>
        Loại khách hàng: ${typeOfCustomerToDis}
        <br>
        Mã khách hàng: ${customerCode}
        <br>
        Số kết nối: ${connectChanNum}
        <br>
        Số kênh cao cấp: ${exclusiveChanel}
        <br>
        Tổng tiền cáp là: ${totalCableMoney.toLocaleString("it-IT", {
        style: style,
        currency: currenry,
    })} 
    </div> 
    `;


}


document.getElementById("typeOfCustomer").addEventListener("change", function () {
    var typeOfCustomer = document.getElementById("typeOfCustomer").value;
    var showConnectChanNum = document.querySelector("#showConnectChanNum");
    if (typeOfCustomer == "Com") {
        // showConnectChanNum.classList.remove("dis-none");
        // showConnectChanNum.classList.add("dis-block");
        // connectChanNum.classList.remove("dis-none");
        // connectChanNum.classList.add("dis-block");
        showConnectChanNum.style.display = "block";

    }
    else {
        // showConnectChanNum.classList.remove("dis-block");
        // showConnectChanNum.classList.add("dis-none");
        // connectChanNum.classList.remove("dis-block");
        // connectChanNum.classList.add("dis-none");
        showConnectChanNum.style.display = "none";
    }

});












