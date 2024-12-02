//test object
var test = {
    fname: "yilian",
    lname: "zhang",
    age: 100, 
    display: function(){
        
        console.log("in function");
        return this.fname + " " + this.lname;

    }

};

console.log(test.display());

// hotel registration
var guestgroup = new Array();
$('#submit').click(reservation);
function reservation(){
    var guest={
        name: $('#name').val(),
        checkin: $('#checkin').val(),
        NumOfGuests: $('#num').val(),
        RoomType: $('#room').val()

    };

    alert(guest.name + "Reserve a room");
    guestgroup.push(guest);
    console.log(guestgroup);

}
