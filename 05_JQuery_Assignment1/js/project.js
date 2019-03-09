$(document).ready(function () {
    $("#saveProjectId").click(function () {
        var projectId = $("#projectId").val();
        var projectName = $("#projectName").val();
        var StartDate = $("#startDateProj").val();
        var endDate = $("#endDateProj").val();

        var divProjectHid = $("#divProjectHid").val();
        var newDivProjectHid = parseInt(divProjectHid, 10) + 1;
       
        var flag1 = validation(endDate, StartDate, "Hire date should not be greater than end date");

        if (flag1) {
            $("#divProject").append('<div class="col-sm-6"> <div class="panel panel-info"> <div class="panel-heading">Project - ' + newDivProjectHid + '</div> <div class="panel-body">  <div class="row"> <div class="col-xs-4 text-primary">Project Id</div> <div class="col-xs-1">:</div> <div class="col-xs-7 text-secondary">' + projectId + '</div> </div> <div class="row"> <div class="col-xs-4 text-primary">Project Name</div> <div class="col-xs-1">:</div> <div class="col-xs-7 text-secondary">' + projectName + '</div> </div> <div class="row"> <div class="col-xs-4 text-primary">Start Date</div> <div class="col-xs-1">:</div> <div class="col-xs-7 text-secondary">' + StartDate + '</div> </div> <div class="row"> <div class="col-xs-4 text-primary">End Date</div> <div class="col-xs-1">:</div> <div class="col-xs-7 text-secondary">' + endDate + '</div> </div> </div> </div> </div>');
            $("#divProjectHid").val(newDivProjectHid);
        }
    });
});

$(document).ready(function () {
    $("#removeProjectId")
        .click(function () {
            var divProjectHid = $("#divProjectHid").val();
            var divProjectHidNumber = parseInt(divProjectHid, 10);

            if (divProjectHidNumber > 1) {
                $("#divProject").children().last().remove();
                $("#divProjectHid").val(divProjectHidNumber - 1);
            } else {
                alert("No of Project should not be less than 1");
            }
        });
});

$(document).ready(function () {
    $("#addAssignmentId").click(function () {
        var customerId = $("#customerId").val();
        var customerName = $("#customerName").val();
        var projectLocation = $("#projectLocation").val();
        var StartDate = $("#startDateAss").val();
        var endDate = $("#endDateAss").val();
        var divAssignmentHid = $("#divAssignmentHid").val();
        var newDivAssignmentHid = parseInt(divAssignmentHid, 10) + 1;

        var flag1 = validation(endDate, StartDate, "Hire date should not be greater than end date");

        if (flag1) {
            $("#divAssignment").append('<div class="col-sm-6"> <div class="panel panel-info"> <div class="panel-heading">Assignment - ' + newDivAssignmentHid + '</div> <div class="panel-body">  <div class="row"> <div class="col-xs-4 text-primary">Customer Id</div> <div class="col-xs-1">:</div> <div class="col-xs-7 text-secondary">' + customerId + '</div> </div> <div class="row"> <div class="col-xs-4 text-primary">Customer Name</div> <div class="col-xs-1">:</div> <div class="col-xs-7 text-secondary">' + customerName + '</div> </div> <div class="row"> <div class="col-xs-4 text-primary">Assignment Start Date</div> <div class="col-xs-1">:</div> <div class="col-xs-7 text-secondary">' + StartDate + '</div> </div> <div class="row"> <div class="col-xs-4 text-primary">Assignment End Date</div> <div class="col-xs-1">:</div> <div class="col-xs-7 text-secondary">' + endDate + '</div> </div> <div class="row"> <div class="col-xs-4 text-primary">Project Location</div> <div class="col-xs-1">:</div> <div class="col-xs-7 text-secondary">' + projectLocation + '</div> </div> </div> </div>');
            $("#divAssignmentHid").val(newDivAssignmentHid);
        }
    });
});

$(document).ready(function () {
    $("#removeAssignmentId").click(
        function () {
            var divAssignmentHid = $("#divAssignmentHid").val();
            var divAssignmentHidNumber = parseInt(divAssignmentHid, 10);

            if (divAssignmentHidNumber > 1) {
                $("#divAssignment").children().last().remove();
                $("#divAssignmentHid").val(divAssignmentHidNumber - 1);
            } else {
                alert("No of Assignment should not be less than 1");
            }
        }
    );
});

function monthDiff(d1, d2) {
    var d4 = dateByString(d2);
    var d3 = dateByString(d1);

    var diff = (d4.getTime() - d3.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7 * 4);
    return Math.abs(Math.floor(diff));
}

function validation(d5, d6, message) {
    var d7 = new Date(d5);
    var d8 = new Date(d6);

    /* day = d7.getDate();
    month = d7.getMonth() + 1;
    year = d7.getFullYear();
    alert([day, month, year].join('/')); */

    if (d7.getTime() < d8.getTime()) {
        alert(message);
        return false;
    }
    return true;
}