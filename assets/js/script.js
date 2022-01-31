let loc = "assets/images/";
const arr = document.getElementsByClassName("thumbnail");
console.log(arr);
let index = 0;
arr[0].classList.add("active");
for(let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', function() {
        arr[index].classList.remove("active");
        index = i;
        document.getElementById("image").src = loc + arr[i].id;
        arr[i].classList.add("active");
    });
}
function prev() {
    arr[index].classList.remove("active");
    if(index == 0) {
        index = arr.length-1;
    } else {
        index--;
    }
    document.getElementById("image").src = loc + arr[index].id;
    arr[index].classList.add("active");
    // console.log(arr[index].id);
    // arr[index].style.display = "none";
}
function next() {
    arr[index].classList.remove("active");
    index++;
    if(index == arr.length) {
        index = 0;
    }
    document.getElementById("image").src = loc + arr[index].id;
    arr[index].classList.add("active");
    // document.getElementById("image").src = "assets/images/2.jpg";
    // console.log(arr[index].id);
}