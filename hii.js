// Show or hide the Back to Top button based on scroll position
window.onscroll = function () {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block"; // Show the button
    } else {
        backToTopBtn.style.display = "none"; // Hide the button
    }
};

// Smooth scroll to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
    // Translation Data
const translations = {
  en: {
      heroTitle: "Your Trusted Partner in Quality Bricks",
      heroDescription: "Building a Stronger Tomorrow with High-Quality Bricks",
      aboutUs: "About Us",
      aboutText: "At Asha Bricks Industries, we produce high-quality bricks for construction projects of all sizes.",
      servicesTitle: "Our Services",
      service1Title: "High-Quality Bricks",
      service1Text: "We manufacture and supply bricks that meet the highest standards of quality and durability.",
      service2Title: "Customized Orders",
      service2Text: "We offer customized brick sizes and designs according to your specific requirements.",
      service3Title: "On-Time Delivery",
      service3Text: "We ensure timely delivery of orders, no matter how big or small the project is."
  },
  hi: {
      heroTitle: "गुणवत्ता ईंटों में आपका भरोसेमंद साथी",
      heroDescription: "उच्च गुणवत्ता वाली ईंटों के साथ एक मजबूत कल का निर्माण करें",
      aboutUs: "हमारे बारे में",
      aboutText: "आशा ब्रिक्स इंडस्ट्रीज में, हम सभी आकारों के निर्माण परियोजनाओं के लिए उच्च गुणवत्ता वाली ईंटें बनाते हैं।",
      servicesTitle: "हमारी सेवाएं",
      service1Title: "उच्च गुणवत्ता वाली ईंटें",
      service1Text: "हम उच्चतम गुणवत्ता और टिकाऊपन के मानकों को पूरा करने वाली ईंटों का निर्माण और आपूर्ति करते हैं।",
      service2Title: "अनुकूलित ऑर्डर",
      service2Text: "हम आपकी विशेष आवश्यकताओं के अनुसार अनुकूलित ईंट के आकार और डिज़ाइन प्रदान करते हैं।",
      service3Title: "समय पर वितरण",
      service3Text: "हम ऑर्डर के समय पर वितरण सुनिश्चित करते हैं, चाहे प्रोजेक्ट बड़ा हो या छोटा।"
  }
};


// Function to change language
function changeLanguage(lang) {
    const elementsToUpdate = {
      heroTitle: document.querySelector('#hero h1'),
      heroDescription: document.querySelector('#hero p'),
      aboutUs: document.querySelector('#about h2'),
      aboutText: document.querySelector('#about p'),
      servicesTitle: document.querySelector('#services h2'),
      service1Title: document.querySelector('#service-card1 h3'),
      service1Text: document.querySelector('#service-card1 p'),
      service2Title: document.querySelector('#service-card2 h3'),
      service2Text: document.querySelector('#service-card2 p'),
      service3Title: document.querySelector('#service-card3 h3'),
      service3Text: document.querySelector('#service-card3 p')
    };

    Object.keys(elementsToUpdate).forEach((key) => {
        if (elementsToUpdate[key]) {
            elementsToUpdate[key].textContent = translations[lang][key];
        }
    });
}

// Event Listener for Language Switcher
document.getElementById('languageSwitcher').addEventListener('change', (event) => {
    changeLanguage(event.target.value);
});

function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imgElement.src; // Use the source of the clicked image
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
// Detect if the user is on a mobile device
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent);
}

// Block access for mobile devices
function enforceDesktopMode() {
    const warning = document.getElementById("mobile-warning");
    const mainContent = document.getElementById("main-content");

    if (isMobileDevice()) {
        // Show the warning overlay and hide the main content
        warning.style.display = "block";
        mainContent.style.display = "none";
    } else {
        // Allow access for desktop users
        warning.style.display = "none";
        mainContent.style.display = "block";
    }
}

// Run the check when the page loads
document.addEventListener("DOMContentLoaded", enforceDesktopMode);
window.addEventListener('load', () => {
  gsap.from('.content', { 
    y: 50, 
    opacity: 0, 
    duration: 1, 
    ease: 'power3.out' 
  });
});

