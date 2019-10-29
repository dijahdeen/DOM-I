const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//  const Contact = document.querySelectorAll('.contact');
//  Contact.forEach(contacts => {console.log(contacts);
//   contacts.style.color = 'black';
// })

var nav_ = document.querySelectorAll('a');
for (var i = 0; i < nav_.length; i++) {
  nav_[i].textContent = siteContent.nav['nav-item-' + (i + 1)]
}

var cta_text = document.querySelector('.cta-text h1');
cta_text.textContent = siteContent.cta['h1'];

var cta_button = document.querySelector('.cta-text button');
cta_button.textContent = siteContent.cta['button'];

cta_img = document.getElementById('cta-img')
cta_img.src = siteContent.cta['img-src']

var FeaturesContent = document.querySelector('.text-content h4');
FeaturesContent.textContent = siteContent["main-content"]['features-h4'];

var FeaturesContenttxt = document.querySelector('.text-content p');
FeaturesContenttxt.textContent = siteContent["main-content"]['features-content'];

var AbtContent = document.querySelector('.top-content div:last-child h4');
AbtContent.textContent = siteContent["main-content"]['about-h4'];

var AbtContenttxt = document.querySelector('.top-content div:last-child p');
AbtContenttxt.textContent = siteContent["main-content"]['about-content'];

var midpic = document.getElementById("middle-img");
midpic.setAttribute('src', siteContent["main-content"]["middle-img-src"])

var ServContent = document.querySelector('.bottom-content div:first-child h4');
ServContent.textContent = siteContent["main-content"]['services-h4'];

var ServContenttxt = document.querySelector('.bottom-content div:first-child p');
ServContenttxt.textContent = siteContent["main-content"]['services-content'];

var prodContent = document.querySelector('.bottom-content :nth-child(2) h4');
prodContent.textContent = siteContent["main-content"]['product-h4'];

var prodContenttxt = document.querySelector('.bottom-content :nth-child(2) p');
prodContenttxt.textContent = siteContent["main-content"]['product-content'];

var visionContent = document.querySelector('.bottom-content :last-child h4');
visionContent.textContent = siteContent["main-content"]['vision-h4'];

var prodContenttxt = document.querySelector('.bottom-content :last-child p');
prodContenttxt.textContent = siteContent["main-content"]['product-content'];

obj_contact = siteContent.contact // Create Contact Object from values provided
var html_cont = document.querySelectorAll('.contact')[0]; console.log(html_cont)
html_cont.querySelectorAll('h4')[0].innerHTML = obj_contact['contact-h4'];
delete obj_contact['contact-h4']

var i = 0;
for (var key in obj_contact) {
  html_cont.querySelectorAll('p')[i].innerHTML = obj_contact[key];
  console.log(i + ' ' + key + ' ' + obj_contact[key]);
  i += 1;
}





// const newContent = document.createElement("contact");

// newContent.textContent = siteContent.contact['contact-h4'] + siteContent.contact.address 

// const parentElement = document.querySelector('body');

// parentElement.append(newContent)
