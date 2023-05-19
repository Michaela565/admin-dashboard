STARS = document.querySelectorAll(".star");
EYES = document.querySelectorAll(".eye");




function changeIcon(e) {
    switch (e.currentTarget.className) {
        case 'star':
            e.target.src = "svgs/star.svg";
            e.currentTarget.classList.add("changed");
            break;
        case 'eye':
            e.target.src = "svgs/eye.svg";
            e.currentTarget.classList.add("changed");
            break;
        case 'star changed':
            e.target.src = "svgs/star-outline.svg";
            e.currentTarget.classList.remove("changed");
            break;
        case 'eye changed':
            e.target.src = "svgs/eye-outline.svg";
            e.currentTarget.classList.remove("changed");
            break;
        default:
            break;
    }
}

function addEventListener(queries) {
    queries.forEach(query => {
        query.addEventListener('click', changeIcon);
    });
}

function main(){
    addEventListener(STARS);
    addEventListener(EYES);
}

main();