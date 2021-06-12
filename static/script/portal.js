const getEl = (id) => {
    return document.getElementById(id);
}
const getURL = 'http://localhost:3000/work'
getEl('yourname').innerHTML = localStorage.getItem('username');

let dateOut = getEl('dateandtime');

const clock = () => {
    let date = new Date();
    let h = addZero(date.getHours());
    let m = addZero(date.getMinutes());
    let s = addZero(date.getSeconds());
    let year = addZero(date.getFullYear());
    let month = addZero(date.getMonth() + 1);
    let day = addZero(date.getDate());

    let time = h + ":" + m + ":" + s;
    dateandtime.innerText = day + "/" + month + "/" + year + " || " + time;
    setTimeout(clock, 1000);
}

const addZero = (input) => {
    return input = (input < 10) ? "0" + input : input;
}

clock();


const apiCalls = (url, method) => {

}



const waiting = () => {
    let portalout = getEl('portalout');
    apiCalls(getURL, 'GET');
}

const completed = () => {

}

const create = () => {

}

const needwork = () => {

}