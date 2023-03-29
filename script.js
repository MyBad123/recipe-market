// work with checkbox in block9
/*
let checkboxStatus = 0;
document.querySelector('.checkbox').onclick = () => {
    if (checkboxStatus === 0) {
        document.querySelector('.checkbox-img').classList.remove('checkbox-img-none');
        checkboxStatus = 1;
    }
    else {
        document.querySelector('.checkbox-img').classList.add('checkbox-img-none');
        checkboxStatus = 0;
    }
}
*/

// work with slider
function getNewActive(arr, elems, index) {
    // make index for new active
    let lentElems = elems.length - 1;
    
    let newIndex;
    if (index === lentElems) {
        newIndex = 0;
    } 
    else {
        newIndex = index;
        newIndex++;
    }

    // elem is active or no
    let isActive = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "element-left-bottom-elem-active") {
            isActive = true;
            break;
        }
    }

    return {
        isActive: isActive,
        newIndex: newIndex,
        oldElem: index
    }
}

document.querySelector('.element-right-img').onclick = () => {
    let elems = document.querySelectorAll('.element-left-bottom-elem');
    
    // get data for new item
    let newData;
    for (let i = 0; i < elems.length; i++) {
        newData = getNewActive(elems[i].classList, elems, i);
        if (newData.isActive === true) {
            break;
        }
    }

    // init elem for getting new ui
    let newUI = [
        '<span class="result-name">lol1</span>',
        '<span class="result-name">lol2</span>',
        '<span class="result-name">lol3</span>',
        '<span class="result-name">lol4</span>',
        '<span class="result-name">lol5</span>'
    ];

    // make new active elem
    elems[newData.oldElem].classList.remove('element-left-bottom-elem-active');
    elems[newData.newIndex].classList.add('element-left-bottom-elem-active');

    // to paste new content
    document.querySelector('.result-name').innerHTML = newUI[newData.newIndex];
}
