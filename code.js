function binarySearch(list = [], element) {

    index = -1;
    start = 0;
    end = list.length-1;
    
    for (i = 0; i < Math.floor(list.length / 2) + 2; i++){
        pivot = Math.floor((end + start)/2)
        //console.log(element, list, list[pivot], i); // uncomment if you wish to see how the algorithm is doing in runtime
        if (list[pivot] == element) {
            index = pivot;
            repeatCheck = false;
            while (repeatCheck == false){ // Testing for repeats and changing the index to the first occurance of our element
                if  (list[pivot - 1] == element) {
                    index = pivot - 1;
                    pivot = pivot - 1;
                }
                else {
                    repeatCheck = true;
                }
            }
            return index;
        }
        else if (list[pivot] > element) {
            end = pivot; 
        }
        else if (list[pivot] < element) { 
            start = pivot; 
        }
    }
    return index;
}


// This was my first attempt, I was making a new array everytime to find the element, but that would change the index of the element so I tossed it.

//while (elementExist == true){
        //let halfIndex = Math.floor(newList.length / 2);
        //console.log(element, newList, halfIndex); // Prints the element were looking for, the current list, and the index guess
        //if (newList[halfIndex] == element){ // Testing if the index is equal to the element we're finding
            //index = halfIndex;
            //elementExist == false;
            //return halfIndex;
        //}
        //else if (newList[halfIndex] > element){ // Testing if the element is less than the index 
            //newList = newList.slice(0, halfIndex); // Changes the list to look at the bottom half 
        //}
        //else if (newList[halfIndex] < element){ // Testing if the element is larger than the index
            //newList = newList.slice(halfIndex, newList.length); // changes the list to look at the upper half
        //}
    //