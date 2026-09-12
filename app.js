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

function showHome() {
  const home = document.getElementById("home");
  const servicePage = document.getElementById("servicePage");

  if (home) home.style.display = "";
  if (servicePage) servicePage.style.display = "none";

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function openService(serviceName) {
  const service = services[serviceName];

  if (!service) return;

  const home = document.getElementById("home");
  const servicePage = document.getElementById("servicePage");
  const serviceTitle = document.getElementById("serviceTitle");
  const productsContainer = document.getElementById("products");

  if (home) home.style.display = "none";
  if (servicePage) servicePage.style.display = "";

  if (serviceTitle) {
    serviceTitle.textContent = service.icon + " " + service.title;
  }

  if (productsContainer) {
    productsContainer.innerHTML = "";

    service.products.forEach(function (product) {
      const card = document.createElement("div");

      card.className = "product";

      card.innerHTML = `
        <div class="product-name">${product}</div>

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

  const serviceSearchInput =
    document.getElementById("serviceSearchInput");

  if (serviceSearchInput) {
    serviceSearchInput.value = "";
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function openAC() {
  openService("ac");
}

function openPlumbing() {
  openService("plumbing");
}

function openElectricity() {
  openService("electricity");
}

function openCleaning() {
  openService("cleaning");
}

function openMoving() {
  openService("moving");
}

function openPestControl() {
  openService("pestcontrol");
}

function selectProduct(productName) {
  const selectedProduct =
    document.getElementById("selectedProduct");

  if (selectedProduct) {
    selectedProduct.textContent = productName;
  }
}

function searchProducts() {
  const mainSearch =
    document.getElementById("searchInput");

  const serviceSearch =
    document.getElementById("serviceSearchInput");

  let searchText = "";

  if (
    serviceSearch &&
    serviceSearch.offsetParent !== null
  ) {
    searchText = serviceSearch.value;
  } else if (mainSearch) {
    searchText = mainSearch.value;
  }

  searchText =
    searchText.trim().toLowerCase();

  const servicePage =
    document.getElementById("servicePage");

  if (
    servicePage &&
    servicePage.style.display !== "none"
  ) {
    const products =
      document.querySelectorAll(".product");

    products.forEach(function (product) {
      const text =
        product.textContent.toLowerCase();

      product.style.display =
        text.includes(searchText)
          ? ""
          : "none";
    });

    return;
  }

  if (!searchText) return;

  const matchingService =
    Object.keys(services).find(function (key) {
      const service = services[key];

      const serviceText =
        (
          service.title +
          " " +
          service.products.join(" ")
        ).toLowerCase();

      return serviceText.includes(searchText);
    });

  if (matchingService) {
    openService(matchingService);

    setTimeout(function () {
      const serviceSearchInput =
        document.getElementById(
          "serviceSearchInput"
        );

      if (serviceSearchInput) {
        serviceSearchInput.value =
          searchText;

        searchProducts();
      }
    }, 50);
  }
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    const searchInput =
      document.getElementById("searchInput");

    if (searchInput) {
      searchInput.addEventListener(
        "keydown",
        function (event) {
          if (event.key === "Enter") {
            searchProducts();
          }
        }
      );
    }

    const serviceSearchInput =
      document.getElementById(
        "serviceSearchInput"
      );

    if (serviceSearchInput) {
      serviceSearchInput.addEventListener(
        "input",
        searchProducts
      );
    }
  }
);

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
