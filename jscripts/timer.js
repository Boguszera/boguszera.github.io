function refresh() {

    var date = new Date();

    var day = date.getDate();

    var months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    var month = months[date.getMonth()];

    var hour = date.getHours();
    if (hour < 10) hour = "0" + hour;

    var minute = date.getMinutes();
    if (minute < 10) minute = "0" + minute;

    var seconds = date.getSeconds();
    if (seconds < 10) seconds = "0" + seconds;

    var day_week = ["Poniedziałek,", "Wtorek,", "Środa,", "Czwartek,", "Piątek,", "Sobota,", "Niedziela,"]
    var week = day_week[date.getDay() - 1];

    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + seconds;
    document.getElementById("date").innerHTML = week + " " + day + " " + month;
    setTimeout("refresh(),1000");

}