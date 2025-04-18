function getParameter() {
    let url = new URL(window.location.href);
    let param = url.searchParams.get('param'); // default null
    console.log(param);

    let urlParams = new URLSearchParams(window.location.search);
    let param2 = urlParams.get('param2');  // default null
    console.log(param2);
}

function setFormat(number) {
    return new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(number);
}

function previewImg(img, view) {
    // HTML Code
    // <label for="inputimg">
    //     <input type="file" id="inputimg" accept="image/*" style="display: none;" onchange="previewImg(this.files[0],'viewimg')">
    //     <img id="viewimg" src="./photos/null.jpeg" alt="your image" width="300" height="300" style="object-fit: cover;" />
    // </label>

    let viewimg = document.getElementById(view);
    // if (img) viewimg.src = URL.createObjectURL(img);
    // else viewimg.src = "./photos/null.jpeg";
    viewimg.src = img ? URL.createObjectURL(img) : "./photos/null.jpeg";
}

function getImgContent(img) {
    // Get Image Content for Fetch API
    let type = img.type;
    let name = img.name;
    let reader = new FileReader();
    if (img != undefined) {
        reader.readAsDataURL(img);
        reader.onload = () => {
            let rawLog = reader.result.split(',')[1];
        };
    }
}

function uniqueArray(arr){
    return [...new Set(arr)];
}

function distinctArray(){
    const years = [2016, 2017, 2017, 2016, 2019, 2018, 2019];
    const distinctYears = [...new Set(years)];
    console.log(distinctYears);
}

function sortArray(){
    const points = [40, 100, 1, 5, 25, 10];
    document.getElementById("demo1").innerHTML = points;
    
    points.sort((a, b)=> {return b - a});
    document.getElementById("demo2").innerHTML = points;
}



// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
