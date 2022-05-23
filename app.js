const family = document.getElementById('family');
const special = document.getElementById('special');
const social = document.getElementById('social');
const pic = document.querySelector('img.gathering');
const heading = document.getElementById('heading');
const para = document.getElementById('para');


special.addEventListener('click', (e) => {
    pic.src = './images/homepage/special-events-desktop.jpg';
    heading.innerHTML = 'Special Events';
    para.innerHTML = "Whether it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal.";
    special.classList.add('active');
    if (family.classList.contains('active')) {
        family.classList.remove('active')
    };
    if (social.classList.contains('active')) {
        social.classList.remove('active');
    }
    // console.log(e)
})

family.addEventListener('click', (e) => {
    pic.src = './images/homepage/family-gathering-desktop.jpg';
    heading.innerHTML = 'Family Gathering';
    para.innerHTML = "Family Gathering Special Events Social Events Family Gathering We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.";
    family.classList.add('active');
    if(social.classList.contains('active')) {
        social.classList.remove('active')
    };
    if(special.classList.contains('active')) {
        special.classList.remove('active')
    };

})

social.addEventListener('click', (e) => {
    pic.src = './images/homepage/social-events-desktop.jpg';
    heading.innerHTML = 'Social Events';
    para.innerHTML = "Are you looking to have a larger social? No problem! we're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone.";
    social.classList.add('active');
    if (special.classList.contains('active')) {
        special.classList.remove('active');
    }
    if (family.classList.contains('active')) {
        family.classList.remove('active');
    }
})
