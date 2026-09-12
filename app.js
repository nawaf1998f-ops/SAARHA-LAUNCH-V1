// ========================================
// سعرها - apps.js
// ========================================

// بيانات الخدمات
const services = {
  ac: {
    title: "المكيفات",
    icon: "❄️",
    products: [
      "تنظيف مكيف سبليت",
      "صيانة مكيف سبليت",
      "تركيب مكيف سبليت",
      "فك وتركيب مكيف",
      "تعبئة فريون",
      "صيانة مكيف شباك"
    ]
  },

  plumbing: {
    title: "السباكة",
    icon: "🚿",
    products: [
      "إصلاح تسريب مياه",
      "تركيب خلاط",
      "تغيير سيفون",
      "تسليك مجاري",
      "تركيب سخان",
      "صيانة مضخة مياه"
    ]
  },

  electricity: {
    title: "الكهرباء",
    icon: "⚡",
    products: [
      "إصلاح عطل كهربائي",
      "تركيب أفياش",
      "تركيب إنارة",
      "تغيير قاطع كهرباء",
      "تمديد كهرباء",
      "فحص أعطال الكهرباء"
    ]
  },

  cleaning: {
    title: "التنظيف",
    icon: "🧹",
    products: [
      "تنظيف منزل",
      "تنظيف شقة",
      "تنظيف مجلس",
      "تنظيف كنب",
      "تنظيف سجاد",
      "تنظيف بعد التشطيب"
    ]
  },

  moving: {
    title: "نقل العفش",
    icon: "🚚",
    products: [
      "نقل أثاث",
      "فك وتركيب أثاث",
      "تغليف أثاث",
      "نقل داخل المدينة",
      "تحميل وتنزيل",
      "تركيب غرف نوم"
    ]
  },

  pestcontrol: {
    title: "مكافحة الحشرات",
    icon: "🐜",
    products: [
      "مكافحة الصراصير",
      "مكافحة النمل",
      "مكافحة البق",
      "مكافحة الفئران",
      "رش المنزل",
      "مكافحة الحشرات العامة"
    ]
  }
};


// ========================================
// الرجوع للرئيسية
// ========================================

function showHome() {
  const home = document.getElementById("home");
  const servicePage = document.getElementById("servicePage");

  if (home) {
    home.style.display = "";
  }

  if (servicePage) {
    servicePage.style.display = "none";
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ========================================
// فتح أي خدمة
// ========================================

function openService(serviceName) {
  const service = services[serviceName];

  if (!service) {
    console.log("الخدمة غير موجودة:", serviceName);
    return;
  }

  const home = document.getElementById("home");
  const servicePage = document.getElementById("servicePage");
  const serviceTitle = document.getElementById("serviceTitle");
  const productsContainer = document.getElementById("products");

  if (home) {
    home.style.display = "none";
  }

  if (servicePage) {
    servicePage.style.display = "";
  }

  if (serviceTitle) {
    serviceTitle.textContent =
      service.icon + " " + service.title;
  }

  if (productsContainer) {
    productsContainer.innerHTML = "";

    service.products.forEach(function(product) {

      const card = document.createElement("div");

      card.className = "product";

      card.setAttribute(
        "data-search",
        product.toLowerCase()
      );

      card.innerHTML = `
        <div class="product-name">
          ${product}
        </div>

        <button
          type="button"
          class="price-button"
          onclick="selectProduct('${product}')"
        >
          اعرف سعرها
        </button>
      `;

      productsContainer.appendChild(card);
    });
  }

  const searchInput =
    document.getElementById("searchInput");

  if (searchInput) {
    searchInput.value = "";
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ========================================
// المكيفات
// ========================================

function openAC() {
  openService("ac");
}


// ========================================
// السباكة
// ========================================

function openPlumbing() {
  openService("plumbing");
}


// ========================================
// الكهرباء
// ========================================

function openElectricity() {
  openService("electricity");
}


// ========================================
// التنظيف
// ========================================

function openCleaning() {
  openService("cleaning");
}


// ========================================
// نقل العفش
// ========================================

function openMoving() {
  openService("moving");
}


// ========================================
// مكافحة الحشرات
// ========================================

function openPestControl() {
  openService("pestcontrol");
}


// ========================================
// اختيار الخدمة
// ========================================

function selectProduct(productName) {

  const selectedProduct =
    document.getElementById("selectedProduct");

  if (selectedProduct) {
    selectedProduct.textContent = productName;
  }

  console.log(
    "الخدمة المختارة:",
    productName
  );
}


// ========================================
// البحث
// ========================================

function searchProducts() {

  const input =
    document.getElementById("searchInput");

  if (!input) {
    return;
  }

  const searchText =
    input.value
      .trim()
      .toLowerCase();

  const products =
    document.querySelectorAll(".product");

  products.forEach(function(product) {

    const text =
      product.textContent
        .trim()
        .toLowerCase();

    if (text.includes(searchText)) {

      product.style.display = "";

    } else {

      product.style.display = "none";

    }

  });
}


// ========================================
// تشغيل البحث أثناء الكتابة
// ========================================

document.addEventListener(
  "DOMContentLoaded",
  function() {

    const searchInput =
      document.getElementById("searchInput");

    if (searchInput) {

      searchInput.addEventListener(
        "input",
        searchProducts
      );

    }

  }
);


// ========================================
// ربط الوظائف بالموقع
// ========================================

window.showHome = showHome;

window.openService = openService;

window.openAC = openAC;

window.openPlumbing = openPlumbing;

window.openElectricity = openElectricity;

window.openCleaning = openCleaning;

window.openMoving = openMoving;

window.openPestControl = openPestControl;

window.searchProducts = searchProducts;

window.selectProduct = selectProduct;
