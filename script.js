const foods = [
  {
    name: "ผัดไทยกุ้งสด",
    desc: "เส้นจี่ผัดกับซอสรสเข้มข้น กุ้งสดตัวโต ถั่วงอก กุยช่าย และถั่วบดคลุกเคล้า รสชาติกลมกล่อม เปรี้ยวหวานเค็ม",
    price: "THB 99",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
  },
  {
    name: "ต้มยำกุ้งน้ำข้น",
    desc: "ต้มยำรสจัดจ้าน หอมสมุนไพรไทย กุ้งสด มะนาว พริกขี้หนู นมสดเข้มข้น กลมกล่อมทั้งเผ็ดและเปรี้ยว",
    price: "THB 149",
    image: "https://images.unsplash.com/photo-1602917841864-156e2de9863a?w=600&q=80",
  },
  {
    name: "แกงเขียวหวานไก่",
    desc: "แกงเขียวหวานหอมกะทิ เนื้อไก่นุ่ม มะเขือพวง ใบโหระพา รสชาติเข้มข้น อร่อยเข้มกินกับข้าวสวยร้อนๆ",
    price: "THB 119",
    image: "https://images.unsplash.com/photo-1591494681086-d070d7183ff6?w=600&q=80",
  },
  {
    name: "ส้มตำไทยปูปลาร้า",
    desc: "ส้มตำรสแซ่บ มะละกอสด มะเขือเทศ ถั่วฝักยาว ปูเค็มและปลาร้า รสจัดจ้านถูกใจคนชอบเผ็ด",
    price: "THB 69",
    image: "https://images.unsplash.com/photo-1564517979973-62c5c2c4e3c9?w=600&q=80",
  },
  {
    name: "ข้าวเหนียวมะม่วง",
    desc: "มะม่วงสุกหวานหอม เสิร์ฟกับข้าวเหนียวนึ่งราดกะทิข้น มันอร่อยลงตัว เป็นของหวานยอดนิยม",
    price: "THB 89",
    image: "https://images.unsplash.com/photo-1559335996-5e6299e9a2ca?w=600&q=80",
  },
];

const foodImage = document.getElementById("foodImage");
const foodName = document.getElementById("foodName");
const foodDesc = document.getElementById("foodDesc");
const foodPrice = document.getElementById("foodPrice");
const pickBtn = document.getElementById("pickBtn");

function pickRandom() {
  const food = foods[Math.floor(Math.random() * foods.length)];
  foodImage.src = food.image;
  foodImage.alt = food.name;
  foodName.textContent = food.name;
  foodDesc.textContent = food.desc;
  foodPrice.textContent = food.price;
}

pickBtn.addEventListener("click", pickRandom);
pickRandom();