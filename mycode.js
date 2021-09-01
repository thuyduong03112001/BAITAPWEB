function show() {
    var tour = document.getElementsByTagName('input')[0].value;
    var name = document.getElementsByTagName('input')[1].value;
    var phone = document.getElementsByTagName('input')[2].value;
    var travels = document.getElementsByTagName('input')[3].value;
    var myWindow = window.open("Answer Customer", "", "width=1024px, height = 800px");
    myWindow.document.write("<h2> Welcome to book a tour in our company. Please check your booking information: </h2>");
    myWindow.document.write("<p> Enter Tour: " + tour + "</p>");
    myWindow.document.write("<p> Enter Your Name: " + name + "</p>");
    myWindow.document.write("<p> Enter Your Phone: " + phone + "</p>");
    myWindow.document.write("<p> Enter Number of Travelers: " + travels + "</p>");
}