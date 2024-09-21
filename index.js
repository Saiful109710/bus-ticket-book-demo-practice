
const selectedSeatEl = document.getElementById("selected-seat");
const totalBookedEl = document.getElementById("total-booked");
const availableSeatEl = document.getElementById("available-seat");
const noSeat = document.getElementById("no-seat-booked");
const totalPriceEL = document.getElementById("total-price");
const couponFieldEl = document.getElementById("coupon-field");
const couponBtnEl = document.getElementById("coupon-btn");
const grandTotalEl = document.getElementById("grand-total-value")
const phoneNumberEl = document.getElementById("input-phone-number");
const nextBtnEl = document.getElementById("next-btn")


let selectedSeat = [];
let totalPrice = 0;
function handleSelectSeat(event){
    const value = event.innerText;
    if(selectedSeat.includes(value)){
        return alert("seat already booked")
    }else if(selectedSeat.length<4){
        event.classList.add('bg-primary');
    event.classList.add('text-white');

    selectedSeat.push(event.innerText);
    totalBookedEl.innerText = selectedSeat.length;
    const availableSeatValue = parseFloat(availableSeatEl.innerText);
    const newAvailableSeat = availableSeatValue - 1;
    availableSeatEl.innerText = newAvailableSeat
    console.log(selectedSeat)

    noSeat.classList.add('hidden');
    selectedSeatEl.innerHTML += `
        <li class="text-base font-normal flex justify-between">
            <span>${event.innerText}</span>
            <span>Economy</span>
            <span>550</span>
        </li>
    `

    totalPrice+=500;
    totalPriceEL.innerText = totalPrice.toFixed(2);

    if(selectedSeat.length>3){
        couponBtnEl.removeAttribute("disabled");
        couponFieldEl.removeAttribute("disabled");
    }
    }else{
        return alert("maximum seat booked")
    }
    
}

couponBtnEl.addEventListener("click",function(){
   const  couponFieldValue = couponFieldEl.value;
    console.log(couponFieldValue);
    let couponSave = 0;

    if(couponFieldValue !== "NEW50" && couponFieldValue !== "Couple 20"){
        alert("Your Coupon is not valid");
        return;
    }
    if(couponFieldValue === "NEW50" ){
        couponSave = totalPrice * .15
    }else if(couponFieldValue === "Couple 20"){
        couponSave = totalPrice * .20;
    }

    const showCouponPriceEl = document.getElementById("show-coupon-price");
    showCouponPriceEl.innerHTML = `
        <p>Discount</p>
        <p>
            <span>-BDT:</span>
            <span>${couponSave.toFixed(2)}</span>
        </p>
    `

    const grandTotalValue = totalPrice - couponSave;

    grandTotalEl.innerText = grandTotalValue.toFixed(2);

})

phoneNumberEl.addEventListener("input",function(event){
    const inputValue = event.target.value;
    if(inputValue.length >=11){
        nextBtnEl.removeAttribute("disabled");
    }
    
})

document.getElementById("btn-continue").addEventListener("click",function(){
    window.location.reload();
})

