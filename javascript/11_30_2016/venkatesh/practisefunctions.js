var addition = function() {
    var x= 1;
    var test = {
        firstName : 'Srikar',
        lastName : 'Sastry',
        rollNumber : 55,
        fight : {
            fullName : 'SrikarSatry',
            rollNumber : 66,
            nikhil : {
                sex: 'male'
            }
        }

    }
    return(test.fight.nikhil.sex);
}


console.log(addition());

(function(){
    var global = 100;
    function addition(){
        var local = 10;

        console.log(global);
        console.log(local);
    }
    addition();
    console.log(global);
    console.log(local);
})();