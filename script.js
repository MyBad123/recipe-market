// work with checkbox in block9
let checkboxStatus = 0;
document.querySelector('.block9-form-checkbox-checkbox').onclick = () => {
    if (checkboxStatus === 0) {
        document.querySelector('.block9-form-checkbox-checkbox-img').classList.remove('block9-form-checkbox-checkbox-img-none');
        checkboxStatus = 1;
    }
    else {
        document.querySelector('.block9-form-checkbox-checkbox-img').classList.add('block9-form-checkbox-checkbox-img-none');
        checkboxStatus = 0;
    }
}

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
        if (arr[i] === "block8-slider-right-slider-left-bottom-elem-active") {
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

document.querySelector('.block8-slider-right-slider-right-img').onclick = () => {
    let elems = document.querySelectorAll('.block8-slider-right-slider-left-bottom-elem');
    
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
        '<div class="block8-withpicture-left"><img src="./img/phone.svg" alt="" class="block8-withpicture-left-phone"><div class="block8-withpicture-left-graphs"><div class="block8-withpicture-left-graphs-top"><div class="block8-withpicture-left-graphs-top-stat"><h3 class="block8-withpicture-left-graphs-top-stat-maintext">E-grocery market size</h3><p class="block8-withpicture-left-graphs-top-stat-secondstat">And tendentions</p><img src="./img/stat.svg" alt="stat" class="block8-withpicture-left-graphs-top-stat-pic"></div><div class="block8-withpicture-left-graphs-top-social"><img src="./img/instvk.svg" alt="instvk" class="block8-withpicture-left-graphs-top-social-pic"><h3 class="block8-withpicture-left-graphs-top-social-maintext">Monetize</h3><p class="block8-withpicture-left-graphs-top-social-secondtext">your social network</p></div></div><div class="block8-withpicture-left-graphs-bottom"><div class="block8-withpicture-left-statcircle"><h3 class="block8-withpicture-left-statcircle-maintext">Increased Conversion</h3><p class="block8-withpicture-left-statcircle-secondtext">For bloggers</p><div class="block8-withpicture-left-statcircle-container"><h3 class="block8-withpicture-left-statcircle-container-maintext">Increased Conversion</h3><p class="block8-withpicture-left-statcircle-container-secondtext">For bloggers</p></div><img src="./img/statcircle.svg" alt="statcircle" class="block8-secondtext-withpicture-left-statcircle-pic"></div></div></div></div><div class="block8-withpicture-right"><h2 class="block8-withpicture-right-maintext">1 Technology</h2><p class="block8-withpicture-right-secondtext">If you want to earn more than 50,000 ARS per month on your content - join our platform.</p><p class="block8-withpicture-right-secondtext">If you want to earn more than 50,000 ARS per month on your content - join our platform for authors of unique recipes.</p></div>',
        '<div class="block8-withpicture-left"><img src="./img/phone.svg" alt="" class="block8-withpicture-left-phone"><div class="block8-withpicture-left-graphs"><div class="block8-withpicture-left-graphs-top"><div class="block8-withpicture-left-graphs-top-stat"><h3 class="block8-withpicture-left-graphs-top-stat-maintext">E-grocery market size</h3><p class="block8-withpicture-left-graphs-top-stat-secondstat">And tendentions</p><img src="./img/stat.svg" alt="stat" class="block8-withpicture-left-graphs-top-stat-pic"></div><div class="block8-withpicture-left-graphs-top-social"><img src="./img/instvk.svg" alt="instvk" class="block8-withpicture-left-graphs-top-social-pic"><h3 class="block8-withpicture-left-graphs-top-social-maintext">Monetize</h3><p class="block8-withpicture-left-graphs-top-social-secondtext">your social network</p></div></div><div class="block8-withpicture-left-graphs-bottom"><div class="block8-withpicture-left-statcircle"><h3 class="block8-withpicture-left-statcircle-maintext">Increased Conversion</h3><p class="block8-withpicture-left-statcircle-secondtext">For bloggers</p><div class="block8-withpicture-left-statcircle-container"><h3 class="block8-withpicture-left-statcircle-container-maintext">Increased Conversion</h3><p class="block8-withpicture-left-statcircle-container-secondtext">For bloggers</p></div><img src="./img/statcircle.svg" alt="statcircle" class="block8-secondtext-withpicture-left-statcircle-pic"></div></div></div></div><div class="block8-withpicture-right"><h2 class="block8-withpicture-right-maintext">2 Technology</h2><p class="block8-withpicture-right-secondtext">If you want to earn more than 50,000 ARS per month on your content - join our platform.</p><p class="block8-withpicture-right-secondtext">If you want to earn more than 50,000 ARS per month on your content - join our platform for authors of unique recipes.</p></div>',
        '<div class="block8-withpicture-left"><img src="./img/phone.svg" alt="" class="block8-withpicture-left-phone"><div class="block8-withpicture-left-graphs"><div class="block8-withpicture-left-graphs-top"><div class="block8-withpicture-left-graphs-top-stat"><h3 class="block8-withpicture-left-graphs-top-stat-maintext">E-grocery market size</h3><p class="block8-withpicture-left-graphs-top-stat-secondstat">And tendentions</p><img src="./img/stat.svg" alt="stat" class="block8-withpicture-left-graphs-top-stat-pic"></div><div class="block8-withpicture-left-graphs-top-social"><img src="./img/instvk.svg" alt="instvk" class="block8-withpicture-left-graphs-top-social-pic"><h3 class="block8-withpicture-left-graphs-top-social-maintext">Monetize</h3><p class="block8-withpicture-left-graphs-top-social-secondtext">your social network</p></div></div><div class="block8-withpicture-left-graphs-bottom"><div class="block8-withpicture-left-statcircle"><h3 class="block8-withpicture-left-statcircle-maintext">Increased Conversion</h3><p class="block8-withpicture-left-statcircle-secondtext">For bloggers</p><div class="block8-withpicture-left-statcircle-container"><h3 class="block8-withpicture-left-statcircle-container-maintext">Increased Conversion</h3><p class="block8-withpicture-left-statcircle-container-secondtext">For bloggers</p></div><img src="./img/statcircle.svg" alt="statcircle" class="block8-secondtext-withpicture-left-statcircle-pic"></div></div></div></div><div class="block8-withpicture-right"><h2 class="block8-withpicture-right-maintext">3 Technology</h2><p class="block8-withpicture-right-secondtext">If you want to earn more than 50,000 ARS per month on your content - join our platform.</p><p class="block8-withpicture-right-secondtext">If you want to earn more than 50,000 ARS per month on your content - join our platform for authors of unique recipes.</p></div>',
        '<div class="block8-withpicture-left"><img src="./img/phone.svg" alt="" class="block8-withpicture-left-phone"><div class="block8-withpicture-left-graphs"><div class="block8-withpicture-left-graphs-top"><div class="block8-withpicture-left-graphs-top-stat"><h3 class="block8-withpicture-left-graphs-top-stat-maintext">E-grocery market size</h3><p class="block8-withpicture-left-graphs-top-stat-secondstat">And tendentions</p><img src="./img/stat.svg" alt="stat" class="block8-withpicture-left-graphs-top-stat-pic"></div><div class="block8-withpicture-left-graphs-top-social"><img src="./img/instvk.svg" alt="instvk" class="block8-withpicture-left-graphs-top-social-pic"><h3 class="block8-withpicture-left-graphs-top-social-maintext">Monetize</h3><p class="block8-withpicture-left-graphs-top-social-secondtext">your social network</p></div></div><div class="block8-withpicture-left-graphs-bottom"><div class="block8-withpicture-left-statcircle"><h3 class="block8-withpicture-left-statcircle-maintext">Increased Conversion</h3><p class="block8-withpicture-left-statcircle-secondtext">For bloggers</p><div class="block8-withpicture-left-statcircle-container"><h3 class="block8-withpicture-left-statcircle-container-maintext">Increased Conversion</h3><p class="block8-withpicture-left-statcircle-container-secondtext">For bloggers</p></div><img src="./img/statcircle.svg" alt="statcircle" class="block8-secondtext-withpicture-left-statcircle-pic"></div></div></div></div><div class="block8-withpicture-right"><h2 class="block8-withpicture-right-maintext">4 Technology</h2><p class="block8-withpicture-right-secondtext">If you want to earn more than 50,000 ARS per month on your content - join our platform.</p><p class="block8-withpicture-right-secondtext">If you want to earn more than 50,000 ARS per month on your content - join our platform for authors of unique recipes.</p></div>',
        '<div class="block8-withpicture-left"><img src="./img/phone.svg" alt="" class="block8-withpicture-left-phone"><div class="block8-withpicture-left-graphs"><div class="block8-withpicture-left-graphs-top"><div class="block8-withpicture-left-graphs-top-stat"><h3 class="block8-withpicture-left-graphs-top-stat-maintext">E-grocery market size</h3><p class="block8-withpicture-left-graphs-top-stat-secondstat">And tendentions</p><img src="./img/stat.svg" alt="stat" class="block8-withpicture-left-graphs-top-stat-pic"></div><div class="block8-withpicture-left-graphs-top-social"><img src="./img/instvk.svg" alt="instvk" class="block8-withpicture-left-graphs-top-social-pic"><h3 class="block8-withpicture-left-graphs-top-social-maintext">Monetize</h3><p class="block8-withpicture-left-graphs-top-social-secondtext">your social network</p></div></div><div class="block8-withpicture-left-graphs-bottom"><div class="block8-withpicture-left-statcircle"><h3 class="block8-withpicture-left-statcircle-maintext">Increased Conversion</h3><p class="block8-withpicture-left-statcircle-secondtext">For bloggers</p><div class="block8-withpicture-left-statcircle-container"><h3 class="block8-withpicture-left-statcircle-container-maintext">Increased Conversion</h3><p class="block8-withpicture-left-statcircle-container-secondtext">For bloggers</p></div><img src="./img/statcircle.svg" alt="statcircle" class="block8-secondtext-withpicture-left-statcircle-pic"></div></div></div></div><div class="block8-withpicture-right"><h2 class="block8-withpicture-right-maintext">5 Technology</h2><p class="block8-withpicture-right-secondtext">If you want to earn more than 50,000 ARS per month on your content - join our platform.</p><p class="block8-withpicture-right-secondtext">If you want to earn more than 50,000 ARS per month on your content - join our platform for authors of unique recipes.</p></div>',
    ];

    // make new active elem
    elems[newData.oldElem].classList.remove('block8-slider-right-slider-left-bottom-elem-active');
    elems[newData.newIndex].classList.add('block8-slider-right-slider-left-bottom-elem-active');

    // to paste new content
    document.querySelector('.block8-withpicture').innerHTML = newUI[newData.newIndex];
}
