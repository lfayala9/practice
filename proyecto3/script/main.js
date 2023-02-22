function getDateHour() {
    var hora = new Date()
    var hrs = hora.getHours();
    var min = hora.getMinutes();
    var hoy = new Date();
    var m = new Array();
    var d = new Array()
    var an= hoy.getYear();
    m[0]="January";  m[1]="February";  m[2]="March";
    m[3]="April";   m[4]="May";  m[5]="June";
    m[6]="July";    m[7]="August";   m[8]="September";
    m[9]="October";   m[10]="November"; m[11]="December";
    document.write("TIME: "+hrs+":"+min+ " " + "  DATE: ");            
    document.write(m[hoy.getMonth()]);
    document.write("  ");
    document.write(hoy.getDate());
    document.write(" ");
}

function dragMe(){
    dragElement(document.getElementById("dragDiv"));
    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt + "Header")) {
        document.getElementById(elmnt + "Header").onmousedown = dragMouseDown;
            } else {
            elmnt.onmousedown = dragMouseDown;
        }                     
        function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        }                     
        function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
        function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        }
    }
}