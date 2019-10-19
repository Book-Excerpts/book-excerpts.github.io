todayDate = new Date();
date = todayDate.getDate();
month= todayDate.getMonth() +1;
year= todayDate.getYear();
document.write("今天是")
document.write("<br>")
if(navigator.appName == "Netscape")
{
    document.write(1900+year);
    document.write("年");
    document.write(month);
    document.write("月");
    document.write(date);
    document.write("日 ");
}
if(navigator.appVersion.indexOf("MSIE") != -1)
{
document.write(year);
document.write("年");
document.write(month);
document.write("月");
document.write(date);
document.write("日");
}
if (todayDate.getDay() == 5) document.write("星期五")
if (todayDate.getDay() == 6) document.write("星期六")
if (todayDate.getDay() == 0) document.write("星期日")
if (todayDate.getDay() == 1) document.write("星期一")
if (todayDate.getDay() == 2) document.write("星期二")
if (todayDate.getDay() == 3) document.write("星期三")
if (todayDate.getDay() == 4) document.write("星期四")