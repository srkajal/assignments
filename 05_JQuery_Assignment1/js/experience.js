$(document).ready(function () {
    $("#addExperienceId").click(function () {
        var hireDate = $("#hireDate").val();
        var endDate = $("#endDate").val();
        var employeer = $("#employeer").val();
        var noOfPreviousEmployeer = $("#noOfPreviousEmployeer").text();
        var ttExperience = $("#ttExperience").text();
        var months = monthDiff(hireDate, endDate);
        var previousHireDate = $("#previousHireDate" + noOfPreviousEmployeer).text();
        var newNoOfPreviousEmployeer = parseInt(noOfPreviousEmployeer, 10) + 1;
        var flag1 = validation(endDate, hireDate, "Hire date should not be greater than end date");
        var flag2 = validation(previousHireDate, endDate, "Previous Work Experience - " + noOfPreviousEmployeer + " Hire date should be greater than Previous Work Experience - " + newNoOfPreviousEmployeer + " end date");

        if (flag1 && flag2) {
            $("#div1").append('<div class="col-sm-6" id="preExpDiv' + newNoOfPreviousEmployeer + '"><div class="panel panel-info"><div class="panel-heading">Previous Work Experience - ' + newNoOfPreviousEmployeer + '</div><div class="panel-body"><div class="row"><div class="col-xs-4 text-primary">Hire Date</div><div class="col-xs-1">:</div><div class="col-xs-7 text-secondary" id="previousHireDate' + newNoOfPreviousEmployeer + '">' + hireDate + '</div></div><div class="row"><div class="col-xs-4 text-primary">End Date</div><div class="col-xs-1">:</div><div class="col-xs-7 text-secondary" id="previousEndDate' + newNoOfPreviousEmployeer + '">' + endDate + '</div></div><div class="row"><div class="col-xs-4 text-primary">Employeer</div><div class="col-xs-1">:</div><div class="col-xs-7 text-secondary">' + employeer + '</div></div></div></div></div>');
            $("#ttExperience").text(parseInt(ttExperience, 10) + months);
            $("#noOfPreviousEmployeer").text(newNoOfPreviousEmployeer);
        }
    });
});

$(document).ready(function () {
    $("#removeExperienceId").click(function () {
        var element1 = document.getElementById("div1");
        var noOfPreviousEmployeer = $("#noOfPreviousEmployeer").text();
        var newNoOfPreviousEmployeer = parseInt(noOfPreviousEmployeer, 10);
        var previousHiredate = $("#previousHireDate" + noOfPreviousEmployeer).text();
        var previousEndDate = $("#previousEndDate" + noOfPreviousEmployeer).text();
        var ttExperience = $("#ttExperience").text();

        var months = monthDiff(previousHiredate, previousEndDate);
        if (newNoOfPreviousEmployeer > 1) {
            $("#div1").children().last().remove();
            $("#noOfPreviousEmployeer").text(newNoOfPreviousEmployeer - 1);
            $("#ttExperience").text(parseInt(ttExperience, 10) - months);
        } else {
            alert("No of Previous employee should not be lass than 1");
        }
    });
});

function monthDiff(d1, d2) {
    var d4 = new Date(d2);
    var d3 = new Date(d1);

    var diff = (d4.getTime() - d3.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7 * 4);
    return Math.abs(Math.floor(diff));
}

function validation(d5, d6, message) {
    var d7 = new Date(d5);
    var d8 = new Date(d6);

    day = d7.getDate();
    month = d7.getMonth() + 1;
    year = d7.getFullYear();
    alert([day, month, year].join('/'));

    if (d7.getTime() < d8.getTime()) {
        alert(message);
        return false;
    }

    return true;
}