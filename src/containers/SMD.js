import React from 'react';

function SMD(props) {

    // //Array

    // let arr1 = [10,20,30];
    // let arr2 = [40,50];

    // //copy array
    // let arr3 = [...arr1];
    // console.log(arr3);

    // //concat
    // let arr4 = [...arr1, ...arr2];
    // console.log(arr4);

    // //merging
    // let arr5 = [99, ...arr4, 100];
    // console.log(arr5);

    // //destructuring
    // let arr6 = ['amit', 'patel'];

    // let [fname, lname] = arr6;
    // //console.log(arr6[0])
    // console.log(fname)

    //Obj

    let obj1 = {fname:'amit', age:18};
    let obj2 = {fname:'ajay', age:20};

    // //copy
    // let obj3 = {...obj1};
    // console.log(obj3);

    // //concate
    // let obj3 = {...obj1};
    // console.log(obj3);

    // //concate
    // let obj4 = {...obj1, ...obj2};
    // //let obj5 = {...obj1, ...obj2};
    // console.log(obj4);

    // //merging
    // let obj5 = {fname:'amit', age:18, city:'surat'};
    // let obj6 = {fname:'piyush', age:20};
    // let obj7 = {...obj5, ...obj6}
    // console.log(obj7);

    //destructring
    let {fname, age} = obj6;
    //console.log(obj6.fname);
    console.log(fname);




    return (
        <div>
            
        </div>
    );
}

export default SMD;