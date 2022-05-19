let params = (new URL(document.location)).searchParams;
let name = params.get("dataId");
console.log(name);
let row= document.createElement("div")

let body=document.querySelector("body")

fetch(`https://jsonplaceholder.typicode.com/users/${name}`)
  .then((res) => res.json())
  .then((dat) => {

    row.innerHTML=`<div class="containers">
    <div class="rows d-flex">
        <div class="col-lg-4 images">
            <img class="w-75" src="assets/img/1_org_zoom.jpeg" alt="">
        </div>
        <div class="col-lg-4 content">
            <div class="title">
                <h3>${dat.name}</h3>
            </div>
            <div class="icon-text d-flex justify-content-between ">
                <div class="icon w-25  d-flex justify-content-around  mt-4">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="text mt-3">
                    <span>(No reviews yet) Write a Review</span>
                </div>
            </div>
            <div class="price mt-4">
                <span>${dat.id}230.00</span>
            </div>
            <div class="iconimg mt-4">
                <i class="fa-regular fa-image"></i> Size Chart
            </div>
    
            <div class="info d-flex justify-content-between mt-3 ">
                <div class="product-info">
                    <ul>
                        <li>Username:${dat.username}</li>
                        <li>Email: ${dat.email}</li>
                        <li>Weight</li>
                        <li>Shipping</li>
                    </ul>
                </div>
                <div class="shop-info">
                    <ul>
                        <li>Common Good</li>
                        <li>CGLD</li>
                        <li>1.00 KGS</li>
                        <li>Calculated at Checkout</li>
                    </ul>
                </div>
            </div>
            <div class="inputnum">
                Qualty
                <input class="form-control  border border-info" type="number" min="1" placeholder="1">
            </div>
    
            <div class="buttons mt-4">
                <button class="btn btn-warning btn1">Add To Cart</button>
                <button class="btn btn-outline-info">Add To Wish List</button>
            </div>
        </div>
    </div>
    </div>`
   
  })
  body.append(row)

 