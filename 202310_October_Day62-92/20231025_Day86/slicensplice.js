function frankenSplice(arr1, arr2, n) {
    //  You are given two arrays and an index.
    console.log("Array 1 is: " + arr1);
    console.log("Array 2 is: " + arr2);
    console.log("Index is: " + n);
    //  Copy each element of the first array into the second array, in order.
    let arrayToChange = arr2.slice();
    console.log(" The copy to work with is: " + arrayToChange);

    //  Begin inserting elements at index n of the second array.
    for (let i = 0; i < arr1.length; i++){
        arrayToChange.splice(n, 0, arr1[i]);
        n++;
    }
    console.log("The resulting array is: " + arrayToChange);
    //  Return the resulting array. The input arrays should remain the same after the function runs.


  return arrayToChange;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);