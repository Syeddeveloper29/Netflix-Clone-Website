const upperHeading = document.querySelector('#main-heading-3');
const lowerHeading = document.querySelector('#down-heading-3');


const updateHeading = () => {
    if(window.innerWidth <= 480){
        upperHeading.textContent = `Enter your email to create or restart your membership.`;
        lowerHeading.textContent = `Enter your email to create or restart your membership.`;
    }else{
        upperHeading.textContent = `Ready to watch? Enter your email to create or restart your membership.`
        lowerHeading.textContent = `Ready to watch? Enter your email to create or restart your membership.`
    }
}

window.addEventListener('load', updateHeading);
window.addEventListener('resize', updateHeading);