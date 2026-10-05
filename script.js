/* =========================================================
   DWI SWARNORAJ JEWELLERS
   MAIN JAVASCRIPT
========================================================= */


"use strict";


/* =========================================================
   SHOP SETTINGS
   এখানে দোকানের তথ্য সহজে পরিবর্তন করতে পারবেন
========================================================= */

const SITE_CONFIG = {

  storeName: "দ্বি স্বর্নরাজ জুয়েলার্স",

  tagline: "স্বর্ণে সৌন্দর্য, গহনায় ঐতিহ্য",

  topbar:
    "বিশ্বাস, সৌন্দর্য ও ঐতিহ্যের সঙ্গে স্বর্ণালংকার",

  phone:
    "+880 1000-000000",

  whatsapp:
    "8801000000000",

  facebook:
    "#",

  heroEyebrow:
    "দ্বি স্বর্নরাজ জুয়েলার্স",

  heroTitle:
    "আপনার সৌন্দর্যে স্বর্ণের ছোঁয়া",

  heroDescription:
    "রুচিশীল ডিজাইন, ঐতিহ্যবাহী সৌন্দর্য এবং আপনার পছন্দের স্বর্ণালংকারের সুন্দর সংগ্রহ।",

  productsTitle:
    "আমাদের স্বর্ণালংকার",

  productsDescription:
    "প্রতিটি বিভাগের আলাদা সংগ্রহ থেকে আপনার পছন্দের গহনা বেছে নিন।",

  aboutTitle:
    "সৌন্দর্য ও বিশ্বাসের সঙ্গে আপনার পাশে",

  aboutText:
    "দ্বি স্বর্নরাজ জুয়েলার্সে আমরা রুচিশীল ও আকর্ষণীয় স্বর্ণালংকারের সংগ্রহ উপস্থাপন করতে চাই। নাকফুল থেকে শুরু করে আংটি, কানের দুল, বালা, নূপুর, লকেট ও চেইন—প্রতিটি বিভাগে রয়েছে বিভিন্ন ডিজাইনের পণ্য।",

  contactTitle:
    "আপনার পছন্দের গহনা সম্পর্কে জানতে যোগাযোগ করুন",

  contactText:
    "কোনো পণ্য সম্পর্কে বিস্তারিত জানতে বা অর্ডারের জন্য আমাদের সঙ্গে যোগাযোগ করতে পারেন।",

  footer:
    "© 2026 দ্বি স্বর্নরাজ জুয়েলার্স — সর্বস্বত্ব সংরক্ষিত।"

};


/* =========================================================
   CATEGORY ORDER
========================================================= */

const CATEGORY_ORDER = [
  "নাকফুল",
  "আংটি",
  "কানের দুল",
  "হাতের বালা",
  "নূপুর",
  "চুড়ি",
  "লকেট",
  "চেইন"
];


/* =========================================================
   PRODUCT DATA
   নতুন product যোগ করতে এখানে শুধু নতুন object যোগ করবেন।
========================================================= */

const products = [

  /* ---------- নাকফুল ---------- */

  {
    id: "nakful-01",
    category: "নাকফুল",
    name: "ক্লাসিক নাকফুল",
    weight: "প্রায় ১.০–১.৫ গ্রাম",
    description:
      "ছোট ও রুচিশীল ডিজাইনের নাকফুল। দৈনন্দিন ব্যবহারের জন্য উপযোগী।",
    images: [
      "images/ring/ring-1.webp",
      "images/ring/ring-2.webp",
      "images/ring/ring-3.webp"
    ]
  },

  {
    id: "nakful-02",
    category: "নাকফুল",
    name: "ফ্লোরাল নাকফুল",
    weight: "প্রায় ১.৫–২.৫ গ্রাম",
    description:
      "ফুলের অনুপ্রেরণায় তৈরি আকর্ষণীয় ডিজাইনের নাকফুল।",
    images: [
      "images/nakful-2.jpg",
      "images/nakful-2-side.jpg",
      "images/nakful-2-back.jpg"
    ]
  },


  /* ---------- আংটি ---------- */

  {
    id: "ring-01",
    category: "আংটি",
    name: "ক্লাসিক গোল্ড রিং",
    weight: "প্রায় ২.৫–৪.০ গ্রাম",
    description:
      "সিম্পল ও এলিগ্যান্ট ডিজাইনের আংটি। বিভিন্ন অনুষ্ঠানে পরার উপযোগী।",
    images: [
      "images/ring.jpg",
      "images/ring-side.jpg",
      "images/ring-top.jpg"
    ]
  },

  {
    id: "ring-02",
    category: "আংটি",
    name: "ফ্লোরাল রিং",
    weight: "প্রায় ৩.০–৫.০ গ্রাম",
    description:
      "ফুলের আকৃতির সুন্দর ডিজাইনের একটি আকর্ষণীয় আংটি।",
    images: [
      "images/ring-2.jpg",
      "images/ring-2-side.jpg",
      "images/ring-2-top.jpg"
    ]
  },


  /* ---------- কানের দুল ---------- */

  {
    id: "earring-01",
    category: "কানের দুল",
    name: "গোল্ড ইয়াররিং",
    weight: "প্রায় ৩.০–৫.০ গ্রাম",
    description:
      "সৌন্দর্য ও সরলতার সমন্বয়ে তৈরি কানের দুল।",
    images: [
      "images/earring.jpg",
      "images/earring-side.jpg",
      "images/earring-back.jpg"
    ]
  },

  {
    id: "earring-02",
    category: "কানের দুল",
    name: "ঝুমকা ডিজাইন",
    weight: "প্রায় ৪.০–৭.০ গ্রাম",
    description:
      "ঐতিহ্যবাহী ঝুমকা অনুপ্রাণিত ডিজাইনের সুন্দর কানের দুল।",
    images: [
      "images/earring-2.jpg",
      "images/earring-2-side.jpg",
      "images/earring-2-back.jpg"
    ]
  },


  /* ---------- হাতের বালা ---------- */

  {
    id: "bangle-01",
    category: "হাতের বালা",
    name: "ক্লাসিক গোল্ড বালা",
    weight: "প্রায় ৮–১২ গ্রাম",
    description:
      "পরিপাটি ও ক্লাসিক ডিজাইনের হাতের বালা।",
    images: [
      "images/bangle.jpg",
      "images/bangle-side.jpg",
      "images/bangle-detail.jpg"
    ]
  },

  {
    id: "bangle-02",
    category: "হাতের বালা",
    name: "ডিজাইনার বালা",
    weight: "প্রায় ১০–১৫ গ্রাম",
    description:
      "অলংকারপ্রেমীদের জন্য সুন্দর ও আকর্ষণীয় ডিজাইনের বালা।",
    images: [
      "images/bangle-2.jpg",
      "images/bangle-2-side.jpg",
      "images/bangle-2-detail.jpg"
    ]
  },


  /* ---------- নূপুর ---------- */

  {
    id: "anklet-01",
    category: "নূপুর",
    name: "ক্লাসিক নূপুর",
    weight: "প্রায় ১৫–২৫ গ্রাম",
    description:
      "ঐতিহ্যবাহী নকশার সুন্দর নূপুর।",
    images: [
      "images/anklet.jpg",
      "images/anklet-side.jpg",
      "images/anklet-detail.jpg"
    ]
  },

  {
    id: "anklet-02",
    category: "নূপুর",
    name: "ডিজাইনার নূপুর",
    weight: "প্রায় ২০–৩০ গ্রাম",
    description:
      "আকর্ষণীয় ডিজাইনের নূপুর, বিশেষ অনুষ্ঠানের জন্য উপযোগী।",
    images: [
      "images/anklet-2.jpg",
      "images/anklet-2-side.jpg",
      "images/anklet-2-detail.jpg"
    ]
  },


  /* ---------- চুড়ি ---------- */

  {
    id: "bangle-03",
    category: "চুড়ি",
    name: "সিম্পল গোল্ড চুড়ি",
    weight: "প্রায় ৫–৮ গ্রাম",
    description:
      "দৈনন্দিন ব্যবহারের জন্য সুন্দর ও সিম্পল চুড়ি।",
    images: [
      "images/churi.jpg",
      "images/churi-side.jpg",
      "images/churi-detail.jpg"
    ]
  },

  {
    id: "bangle-04",
    category: "চুড়ি",
    name: "ডিজাইন চুড়ি",
    weight: "প্রায় ৮–১২ গ্রাম",
    description:
      "নকশাযুক্ত সুন্দর চুড়ি, বিভিন্ন অনুষ্ঠানে পরার উপযোগী।",
    images: [
      "images/churi-2.jpg",
      "images/churi-2-side.jpg",
      "images/churi-2-detail.jpg"
    ]
  },


  /* ---------- লকেট ---------- */

  {
    id: "pendant-01",
    category: "লকেট",
    name: "হার্ট লকেট",
    weight: "প্রায় ২–৪ গ্রাম",
    description:
      "সুন্দর হার্ট আকৃতির লকেট। উপহার দেওয়ার জন্যও দারুণ।",
    images: [
      "images/locket.jpg",
      "images/locket-side.jpg",
      "images/locket-back.jpg"
    ]
  },

  {
    id: "pendant-02",
    category: "লকেট",
    name: "ফ্লোরাল লকেট",
    weight: "প্রায় ৩–৫ গ্রাম",
    description:
      "ফুলের অনুপ্রেরণায় তৈরি রুচিশীল লকেট।",
    images: [
      "images/locket-2.jpg",
      "images/locket-2-side.jpg",
      "images/locket-2-back.jpg"
    ]
  },


  /* ---------- চেইন ---------- */

  {
    id: "chain-01",
    category: "চেইন",
    name: "ক্লাসিক গোল্ড চেইন",
    weight: "প্রায় ৮–১৫ গ্রাম",
    description:
      "সিম্পল ও রুচিশীল ডিজাইনের গোল্ড চেইন।",
    images: [
      "images/chain.jpg",
      "images/chain-side.jpg",
      "images/chain-detail.jpg"
    ]
  },

  {
    id: "chain-02",
    category: "চেইন",
    name: "ডিজাইনার চেইন",
    weight: "প্রায় ১২–২০ গ্রাম",
    description:
      "বিশেষ অনুষ্ঠানের জন্য আকর্ষণীয় ডিজাইনের চেইন।",
    images: [
      "images/chain-2.jpg",
      "images/chain-2-side.jpg",
      "images/chain-2-detail.jpg"
    ]
  }

];


/* =========================================================
   DOM
========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];


/* =========================================================
   GENERAL SETTINGS
========================================================= */

function applySiteConfig() {

  $$("[data-store-name]").forEach(
    el => el.textContent = SITE_CONFIG.storeName
  );

  $$("[data-store-tagline]").forEach(
    el => el.textContent = SITE_CONFIG.tagline
  );

  $$("[data-topbar]").forEach(
    el => el.textContent = SITE_CONFIG.topbar
  );

  $$("[data-phone]").forEach(
    el => el.textContent = SITE_CONFIG.phone
  );

  $$("[data-hero-eyebrow]").forEach(
    el => el.textContent = SITE_CONFIG.heroEyebrow
  );

  $$("[data-hero-title]").forEach(
    el => el.textContent = SITE_CONFIG.heroTitle
  );

  $$("[data-hero-description]").forEach(
    el => el.textContent = SITE_CONFIG.heroDescription
  );

  $$("[data-products-title]").forEach(
    el => el.textContent = SITE_CONFIG.productsTitle
  );

  $$("[data-products-description]").forEach(
    el => el.textContent = SITE_CONFIG.productsDescription
  );

  $$("[data-about-title]").forEach(
    el => el.textContent = SITE_CONFIG.aboutTitle
  );

  $$("[data-about-text]").forEach(
    el => el.textContent = SITE_CONFIG.aboutText
  );

  $$("[data-contact-title]").forEach(
    el => el.textContent = SITE_CONFIG.contactTitle
  );

  $$("[data-contact-text]").forEach(
    el => el.textContent = SITE_CONFIG.contactText
  );

  $$("[data-footer]").forEach(
    el => el.textContent = SITE_CONFIG.footer
  );


  $$('a[href^="tel:"]').forEach(link => {

    link.href =
      `tel:${SITE_CONFIG.phone.replace(/[^\d+]/g, "")}`;

  });


  const facebookButton = $("#facebookButton");

  if (facebookButton) {
    facebookButton.href = SITE_CONFIG.facebook;
  }

}


/* =========================================================
   PLACEHOLDER IMAGE
   ছবি না থাকলেও website ভাঙবে না।
========================================================= */

function placeholderImage(text = "Jewellery") {

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg"
         width="800"
         height="800"
         viewBox="0 0 800 800">

      <rect width="800" height="800" fill="#f3ede2"/>

      <circle
        cx="400"
        cy="360"
        r="120"
        fill="none"
        stroke="#b58a3c"
        stroke-width="8"
      />

      <circle
        cx="400"
        cy="360"
        r="30"
        fill="#b58a3c"
      />

      <text
        x="400"
        y="560"
        text-anchor="middle"
        font-family="Arial"
        font-size="34"
        fill="#806025">
        ${text}
      </text>

    </svg>
  `;

  return "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(svg);
}


function setupImageFallback(img, label = "Jewellery") {

  if (!img) return;

  img.addEventListener("error", function () {

    if (this.dataset.fallbackApplied) return;

    this.dataset.fallbackApplied = "true";

    this.src = placeholderImage(label);

  });

}


/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(product) {

  const card = document.createElement("article");

  card.className = "product-card";

  card.dataset.productId = product.id;


  const image = document.createElement("img");

  image.className = "product-image";

  image.src = product.images[0];

  image.alt = product.name;

  setupImageFallback(image, product.category);


  const imageWrap = document.createElement("div");

  imageWrap.className = "product-image-wrap";

  imageWrap.appendChild(image);


  const info = document.createElement("div");

  info.className = "product-info";


  const category = document.createElement("span");

  category.className = "product-category";

  category.textContent = product.category;


  const title = document.createElement("h4");

  title.textContent = product.name;


  const weight = document.createElement("p");

  weight.className = "product-weight";

  weight.textContent = product.weight;


  const button = document.createElement("button");

  button.className = "details-button";

  button.type = "button";

  button.textContent = "বিস্তারিত দেখুন";


  button.addEventListener("click", () => {

    openProduct(product.id);

  });


  info.append(
    category,
    title,
    weight,
    button
  );


  card.append(
    imageWrap,
    info
  );


  return card;
}


/* =========================================================
   CATEGORY SECTIONS
========================================================= */

function createCategorySection(category) {

  const section = document.createElement("section");

  section.className = "category-section";

  section.id = `category-${category}`;


  const header = document.createElement("div");

  header.className = "category-section-header";


  const titleWrap = document.createElement("div");

  titleWrap.className = "category-section-title";


  const label = document.createElement("span");

  label.className = "category-label";

  label.textContent = "COLLECTION";


  const title = document.createElement("h3");

  title.textContent = category;


  titleWrap.append(
    label,
    title
  );


  const categoryProducts =
    products.filter(
      product => product.category === category
    );


  const viewAll = document.createElement("button");

  viewAll.className = "category-view-all";

  viewAll.type = "button";

  viewAll.textContent = "সব দেখুন";


  const grid = document.createElement("div");

  grid.className = "category-product-grid";


  const MAX_INITIAL = 4;

  let expanded = false;


  function renderProducts() {

    grid.innerHTML = "";

    const visibleProducts =
      expanded
        ? categoryProducts
        : categoryProducts.slice(0, MAX_INITIAL);


    visibleProducts.forEach(product => {

      grid.appendChild(
        createProductCard(product)
      );

    });


    viewAll.style.display =
      categoryProducts.length > MAX_INITIAL
        ? "block"
        : "none";


    viewAll.textContent =
      expanded
        ? "কম দেখুন"
        : "সব দেখুন";

  }


  viewAll.addEventListener("click", () => {

    expanded = !expanded;

    renderProducts();

  });


  header.append(
    titleWrap,
    viewAll
  );


  section.append(
    header,
    grid
  );


  renderProducts();


  return section;
}


/* =========================================================
   RENDER ALL CATEGORIES
========================================================= */

function renderCategorySections() {

  const container = $("#categorySections");

  if (!container) return;

  container.innerHTML = "";


  CATEGORY_ORDER.forEach(category => {

    const section =
      createCategorySection(category);

    container.appendChild(section);

  });

}


/* =========================================================
   CATEGORY PILLS
========================================================= */

function renderCategoryPills() {

  const container = $("#categoryPills");

  if (!container) return;

  container.innerHTML = "";


  CATEGORY_ORDER.forEach(category => {

    const button = document.createElement("button");

    button.className = "category-pill";

    button.type = "button";

    button.textContent = category;


    button.addEventListener("click", () => {

      const target =
        document.getElementById(
          `category-${category}`
        );

      if (target) {

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });


    container.appendChild(button);

  });

}


/* =========================================================
   PRODUCT MODAL
========================================================= */

let currentProduct = null;
let currentImageIndex = 0;


function openProduct(productId) {

  const product =
    products.find(
      item => item.id === productId
    );

  if (!product) return;


  currentProduct = product;

  currentImageIndex = 0;


  const modal = $("#productModal");

  if (!modal) return;


  $("#modalTitle").textContent =
    product.name;

  $("#modalCategory").textContent =
    product.category;

  $("#modalWeight").textContent =
    product.weight;

  $("#modalDescription").textContent =
    product.description;


  renderModalImages();


  const message =
    `আসসালামু আলাইকুম। আমি "${product.name}" সম্পর্কে জানতে চাই। আনুমানিক ওজন: ${product.weight}`;

  const whatsappUrl =
    `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;


  $("#modalWhatsapp").href = whatsappUrl;


  modal.classList.add("show");

  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

}


function closeProductModal() {

  const modal = $("#productModal");

  if (!modal) return;

  modal.classList.remove("show");

  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

}


/* =========================================================
   MODAL IMAGES
========================================================= */

function renderModalImages() {

  if (!currentProduct) return;


  const mainImage =
    $("#modalMainImage");

  const thumbs =
    $("#modalThumbs");


  const images =
    currentProduct.images || [];


  const imageSrc =
    images[currentImageIndex] ||
    images[0];


  mainImage.src = imageSrc;

  mainImage.alt = currentProduct.name;

  mainImage.dataset.fallbackApplied = "";


  setupImageFallback(
    mainImage,
    currentProduct.category
  );


  thumbs.innerHTML = "";


  images.forEach((src, index) => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.className =
      "modal-thumb" +
      (index === currentImageIndex
        ? " active"
        : "");


    const img =
      document.createElement("img");

    img.src = src;

    img.alt =
      `${currentProduct.name} view ${index + 1}`;


    setupImageFallback(
      img,
      currentProduct.category
    );


    button.appendChild(img);


    button.addEventListener("click", () => {

      currentImageIndex = index;

      renderModalImages();

    });


    thumbs.appendChild(button);

  });

}


/* =========================================================
   MODAL NEXT / PREVIOUS
========================================================= */

function showNextProductImage() {

  if (!currentProduct) return;

  const total =
    currentProduct.images.length;

  currentImageIndex =
    (currentImageIndex + 1) % total;

  renderModalImages();

}


function showPreviousProductImage() {

  if (!currentProduct) return;

  const total =
    currentProduct.images.length;

  currentImageIndex =
    (currentImageIndex - 1 + total) % total;

  renderModalImages();

}


/* =========================================================
   HERO SLIDER
========================================================= */

let heroIndex = 0;
let heroTimer = null;


function initHeroSlider() {

  const slides =
    $$(".hero-slide");

  const dotsContainer =
    $("#heroDots");


  if (!slides.length) return;


  slides.forEach((slide, index) => {

    const dot =
      document.createElement("button");

    dot.className =
      "hero-dot" +
      (index === 0 ? " active" : "");

    dot.type = "button";

    dot.setAttribute(
      "aria-label",
      `Slide ${index + 1}`
    );


    dot.addEventListener("click", () => {

      showHeroSlide(index);

    });


    dotsContainer.appendChild(dot);


    const image =
      slide.querySelector("img");

    setupImageFallback(
      image,
      "Jewellery"
    );

  });


  function showHeroSlide(index) {

    heroIndex =
      (index + slides.length) %
      slides.length;


    slides.forEach(
      (slide, i) => {

        slide.classList.toggle(
          "active",
          i === heroIndex
        );

      }
    );


    $$(".hero-dot").forEach(
      (dot, i) => {

        dot.classList.toggle(
          "active",
          i === heroIndex
        );

      }
    );

  }


  $("#heroPrev")?.addEventListener(
    "click",
    () => showHeroSlide(heroIndex - 1)
  );


  $("#heroNext")?.addEventListener(
    "click",
    () => showHeroSlide(heroIndex + 1)
  );


  heroTimer =
    setInterval(
      () => showHeroSlide(heroIndex + 1),
      5500
    );


  const hero =
    $("#heroSlider");


  hero?.addEventListener(
    "mouseenter",
    () => clearInterval(heroTimer)
  );


  hero?.addEventListener(
    "mouseleave",
    () => {

      heroTimer =
        setInterval(
          () => showHeroSlide(heroIndex + 1),
          5500
        );

    }
  );

}


/* =========================================================
   MOBILE MENU
========================================================= */

function initMobileMenu() {

  const button = $("#menuButton");
  const menu = $("#mobileMenu");

  if (!button || !menu) return;


  button.addEventListener("click", () => {

    const isOpen =
      menu.classList.toggle("show");

    button.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  $$("#mobileMenu a").forEach(link => {

    link.addEventListener("click", () => {

      menu.classList.remove("show");

      button.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* =========================================================
   SEARCH
========================================================= */

function initSearch() {

  const searchButton =
    $("#searchButton");

  const searchPanel =
    $("#searchPanel");

  const searchClose =
    $("#searchClose");

  const input =
    $("#searchInput");

  const submit =
    $("#searchSubmit");

  const results =
    $("#searchResults");


  if (!searchButton || !searchPanel) return;


  function openSearch() {

    searchPanel.classList.add("show");

    document.body.classList.add("search-open");

    setTimeout(
      () => input?.focus(),
      100
    );

  }


  function closeSearch() {

    searchPanel.classList.remove("show");

    document.body.classList.remove("search-open");

  }


  function searchProducts() {

    const query =
      input.value.trim().toLowerCase();


    results.innerHTML = "";


    if (!query) {

      results.innerHTML =
        `<p style="color:#766d64;margin-top:18px;">
          গহনার নাম বা ক্যাটাগরি লিখে খুঁজুন।
        </p>`;

      return;

    }


    const matched =
      products.filter(product => {

        const text =
          [
            product.name,
            product.category,
            product.weight
          ]
          .join(" ")
          .toLowerCase();


        return text.includes(query);

      });


    if (!matched.length) {

      results.innerHTML =
        `<p style="color:#766d64;margin-top:18px;">
          দুঃখিত, কোনো পণ্য পাওয়া যায়নি।
        </p>`;

      return;

    }


    matched.forEach(product => {

      const item =
        document.createElement("button");

      item.type = "button";

      item.className =
        "search-result";

      item.innerHTML = `
        <img
          src="${product.images[0]}"
          alt="${product.name}"
        >

        <div>
          <strong>${product.name}</strong>
          <small>
            ${product.category} · ${product.weight}
          </small>
        </div>
      `;


      const img =
        item.querySelector("img");

      setupImageFallback(
        img,
        product.category
      );


      item.addEventListener("click", () => {

        closeSearch();

        openProduct(product.id);

      });


      results.appendChild(item);

    });

  }


  searchButton.addEventListener(
    "click",
    openSearch
  );


  searchClose?.addEventListener(
    "click",
    closeSearch
  );


  submit?.addEventListener(
    "click",
    searchProducts
  );


  input?.addEventListener(
    "keydown",
    event => {

      if (event.key === "Enter") {

        searchProducts();

      }

    }
  );


  searchPanel.addEventListener(
    "click",
    event => {

      if (
        event.target === searchPanel
      ) {

        closeSearch();

      }

    }
  );

}


/* =========================================================
   ZOOM VIEWER
========================================================= */

let zoomLevel = 1;


function initZoom() {

  const overlay =
    $("#zoomOverlay");

  const image =
    $("#zoomImage");


  function openZoom() {

    if (!currentProduct) return;


    image.src =
      currentProduct.images[currentImageIndex];

    image.alt =
      currentProduct.name;


    setupImageFallback(
      image,
      currentProduct.category
    );


    zoomLevel = 1;

    updateZoom();


    overlay.classList.add("show");

  }


  function closeZoom() {

    overlay.classList.remove("show");

  }


  function updateZoom() {

    image.style.transform =
      `scale(${zoomLevel})`;

    $("#zoomReset").textContent =
      `${Math.round(zoomLevel * 100)}%`;

  }


  $("#openZoom")?.addEventListener(
    "click",
    openZoom
  );


  $("#zoomClose")?.addEventListener(
    "click",
    closeZoom
  );


  $("#zoomIn")?.addEventListener(
    "click",
    () => {

      zoomLevel =
        Math.min(
          3,
          zoomLevel + 0.25
        );

      updateZoom();

    }
  );


  $("#zoomOut")?.addEventListener(
    "click",
    () => {

      zoomLevel =
        Math.max(
          0.5,
          zoomLevel - 0.25
        );

      updateZoom();

    }
  );


  $("#zoomReset")?.addEventListener(
    "click",
    () => {

      zoomLevel = 1;

      updateZoom();

    }
  );


  overlay?.addEventListener(
    "click",
    event => {

      if (event.target === overlay) {

        closeZoom();

      }

    }
  );


  image?.addEventListener(
    "wheel",
    event => {

      event.preventDefault();

      zoomLevel +=
        event.deltaY < 0
          ? 0.1
          : -0.1;

      zoomLevel =
        Math.max(
          0.5,
          Math.min(3, zoomLevel)
        );

      updateZoom();

    },
    { passive: false }
  );

}


/* =========================================================
   MODAL EVENTS
========================================================= */

function initModal() {

  $("#closeModal")?.addEventListener(
    "click",
    closeProductModal
  );


  $(".modal-backdrop")?.addEventListener(
    "click",
    closeProductModal
  );


  $("#modalNext")?.addEventListener(
    "click",
    showNextProductImage
  );


  $("#modalPrev")?.addEventListener(
    "click",
    showPreviousProductImage
  );

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

function initKeyboardControls() {

  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {

        closeProductModal();

        $("#searchPanel")
          ?.classList.remove("show");

        $("#zoomOverlay")
          ?.classList.remove("show");

        document.body.classList.remove(
          "modal-open",
          "search-open"
        );

      }


      if (
        $("#productModal")?.classList.contains("show")
      ) {

        if (event.key === "ArrowRight") {

          showNextProductImage();

        }


        if (event.key === "ArrowLeft") {

          showPreviousProductImage();

        }

      }

    }
  );

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function initActiveNavigation() {

  const sections = $$(
    "main section[id]"
  );

  const navLinks =
    $$(".desktop-nav a");


  if (!sections.length) return;


  window.addEventListener(
    "scroll",
    () => {

      let current = "home";


      sections.forEach(section => {

        const top =
          section.offsetTop - 150;


        if (
          window.scrollY >= top
        ) {

          current = section.id;

        }

      });


      navLinks.forEach(link => {

        link.classList.toggle(
          "active",
          link.getAttribute("href") ===
            `#${current}`
        );

      });

    },
    { passive: true }
  );

}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    applySiteConfig();

    renderCategorySections();

    renderCategoryPills();

    initHeroSlider();

    initMobileMenu();

    initSearch();

    initZoom();

    initModal();

    initKeyboardControls();

    initActiveNavigation();

  }
);