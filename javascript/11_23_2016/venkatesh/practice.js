var Raghu = {
        firstName : 'Raghu',
        lastName : 'Nandan',
        rollNumber : 55,
        Nikhil : {
                firstName : 'Nikhil',
                lastName : 'Ananthula',
                rollNumber : 66,
                Venkatesh : {
                        firstName : 'Venkatesh',
                        lastName : 'Pennera',
                        rollNumber : 77
                }
        }
}

console.log(Raghu);

var x = {
    firstName: 'Venkatesh',
    rollNumber: 55,
    isPresant: false,
    y : {
        lastName : 'Pennera',
        rollNumber: 66,
        z : {
            fullName : 'Pennera Venkatesh',
            rollNumber : 77
        }
    }
}

x.y.z['rollNumber']= 555555;

var y = {
    firstName: 'Nikhil',
    rollNumber: 555
}
y['firstName'] = 'Text';
y.rollNumber = 6666;
console.log(x);

x.y.lastName = 'Yadav';
x.rollNumber = 666;


console.log(x);
console.log(y);