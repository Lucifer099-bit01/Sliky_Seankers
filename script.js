console.log("connected");

let coverimg = document.querySelector("#cover");
let img1 = document.getElementById("1");
let img2 = document.getElementById("2");
let img3 = document.getElementById("3");
let img4 = document.getElementById("4");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let gallery = document.querySelector(".photo-gallery");
let img_slider = document.querySelector(".img-slider");
let close = document.querySelector(".close");
let count = document.querySelector("#counter");
let adder = document.querySelector("#add");
let subtract = document.querySelector("#sub");
let negative = document.querySelector("#neg-counter");
let cartcount = document.querySelector("#cartItem");
let counter = 0;
let cart = document.querySelector("#cart");
let cartbox = document.querySelector(".cart-box");
let close_cart = document.querySelector(".cartclose");
let addToCart = document.querySelector(".addcart");
let empty = document.querySelector(".empty");
let finalcart = document.querySelector(".finalcart");
let calculate = document.querySelector("#calulate");
let totalcart = document.querySelector("#total");
let clearcart = document.querySelector(".clear-cart");
let Checkout = document.querySelector(".CheckOut");
let toastbox = document.getElementById("toastBox");



function imgSelector() {
    img1.addEventListener("click", () => {
        coverimg.src = "images/image-product-1.jpg";
    })

    img2.addEventListener("click", () => {
        coverimg.src = "images/image-product-2.jpg";
    })

    img3.addEventListener("click", () => {
        coverimg.src = "images/image-product-3.jpg";
    })

    img4.addEventListener("click", () => {
        coverimg.src = "images/image-product-4.jpg";
    })
}
imgSelector();


prev.addEventListener("click", () => {
    img_slider.scrollLeft -= 400;
})

next.addEventListener("click", () => {
    img_slider.scrollLeft += 400;
})

close.addEventListener("click", () => {
    prev.style.display = "none";
    next.style.display = "none";
    gallery.style.display = "none";
    img_slider.style.display = "none";
    close.style.display = "none";
})

coverimg.addEventListener("click", () => {
    prev.style.display = "flex";
    next.style.display = "flex";
    gallery.style.display = "flex";
    img_slider.style.display = "flex";
    close.style.display = "flex";
})

adder.addEventListener("click", () => {
    counter++;
    count.innerHTML = counter;
    negative.style.display = "none";
    cartcount.innerHTML = counter;
    
})

subtract.addEventListener("click", () => {
    if (count.innerHTML === '0') {
        negative.style.display = "block"
        
    }
    else {
        counter--;
        count.innerHTML = counter;
        cartcount.innerHTML = counter;
    }

})

cart.addEventListener("click", () => {
    cartbox.style.display = "block"
})

close_cart.addEventListener("click", () => {
    cartbox.style.display ="none"
})

function showToast(){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> Order Placed Successfully`;
    toastbox.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    },6000)
}

addToCart.addEventListener("click", () => {
    if (count.innerHTML === '0') {
        negative.style.display = "block";
        cartcount.style.display = "none";
    }
    else{
        finalcart.style.display = "flex";

        empty.style.display = "none";

        calculate.innerHTML = `$125.00 x ${counter}`;
        
        totalcart.innerHTML  = `$${125.00*counter}`;

        Checkout.style.display = "block";

        cartcount.style.display = "block";

    }
})

clearcart.addEventListener("click", () => {

    count.innerHTML = '0';

    if(count.innerHTML === '0'){
        cartcount.style.display = "none";
    }

    finalcart.style.display = "none";

    empty.style.display = "flex";

    Checkout.style.display = "none";
    
})

Checkout.addEventListener("click", () => {
    showToast();
    finalcart.style.display = "none";
    Checkout.style.display = "none";
    empty.style.display = "flex";
    cartcount.style.display = "none";
    count.innerHTML = '0';
})


