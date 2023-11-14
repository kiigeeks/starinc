// profile menu on navbar
const menuProfile = document.querySelector('#menu-profile')

const showMenu = () => {
    menuProfile.classList.toggle('hidden')
};


// navbar fixed on all page
window.onscroll = () => {
    const header = document.querySelector('nav')
    const fixedNav = header.offsetTop
    const toTop = document.querySelector('#to-top')
    const toDown = document.querySelector('#to-down')

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
        header.classList.remove('hidden')
        toTop.classList.remove('hidden')
        toDown !== null && toDown.classList.add('hidden')
    }else{
        header.classList.remove('navbar-fixed')
        header.classList.add('hidden')
        toTop.classList.add('hidden')
        toDown !== null && toDown.classList.remove('hidden')
        menuProfile.classList.add('hidden')
    }
}


// hamburger menu on mobile view
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
});

window.addEventListener('click', (e) => {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

// modal search on navbar
const modalSearch = document.querySelector('#modal-search')
const inputSearch = document.querySelector('#keyword')
const buttonSearch = document.querySelector('#button-search')

const showModal = () => {
    modalSearch.classList.remove('hidden')
    document.body.style.overflow = 'hidden'
};

modalSearch?.addEventListener('click', (e) => {
    if(e.target !== inputSearch && e.target !== buttonSearch) {
        document.body.style.overflow = 'auto'
        modalSearch.classList.add('hidden')
    }
})


// footer on all page
let activeMenu = 1
const arrow1 = document.querySelector('#arrow1')
const arrow2 = document.querySelector('#arrow2')
const arrow3 = document.querySelector('#arrow3')
const arrow4 = document.querySelector('#arrow4')
const menu1 = document.querySelector('#menu1')
const menu2 = document.querySelector('#menu2')
const menu3 = document.querySelector('#menu3')
const menu4 = document.querySelector('#menu4')

const changeFooter = (index) => {
    if(activeMenu === 1) {
        arrow1.classList.toggle('rotate-180')
        menu1.classList.toggle('hidden')
    } else if(activeMenu === 2) {
        arrow2.classList.toggle('rotate-180')
        menu2.classList.toggle('hidden')
    } else if (activeMenu === 3) {
        arrow3.classList.toggle('rotate-180')
        menu3.classList.toggle('hidden')
    } else if (activeMenu === 4) {
        arrow4.classList.toggle('rotate-180')
        menu4.classList.toggle('hidden')
    }
    activeMenu = index
}

arrow1?.addEventListener('click', () => {
    arrow1.classList.toggle('rotate-180')
    menu1.classList.toggle('hidden')
    changeFooter(1)
})

arrow2?.addEventListener('click', () => {
    arrow2.classList.toggle('rotate-180')
    menu2.classList.toggle('hidden')
    changeFooter(2)
})

arrow3?.addEventListener('click', () => {
    arrow3.classList.toggle('rotate-180')
    menu3.classList.toggle('hidden')
    changeFooter(3)
})

arrow4?.addEventListener('click', () => {
    arrow4.classList.toggle('rotate-180')
    menu4.classList.toggle('hidden')
    changeFooter(4)
})


// carousel image on shop page
const carousel = [...document.querySelectorAll('#home img')]

let carouselImageIndex = 0;

const changeCarousel = () => {
    carousel[carouselImageIndex]?.classList.toggle('opacity-100')
    if(carouselImageIndex >= carousel.length - 1) {
        carouselImageIndex = 0;
    } else {
        carouselImageIndex++;
    }
    carousel[carouselImageIndex]?.classList.toggle('opacity-100')
}

setInterval(() => {
    changeCarousel()
}, 3000)


// slider testimonials on index page
const slider = document.querySelector('#slider')
const slides = document.querySelectorAll(".slide")
let currentIndex = 0
let treshold = 0

if (window.screen.width >= 1024) {
    treshold = 6
} else {
    treshold = 2
}

document.addEventListener("DOMContentLoaded", () => {
    if (slides.length > treshold) {
        slider.classList.remove('justify-center')
        slider.classList.add('justify-start')
        showSlide(currentIndex)
    } else {
        slider && slider.classList.remove('justify-start')
        slider && slider.classList.add('justify-center')
    }
});

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${10 * (i - index * slides.length)}%)`
  })
}

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length
    slides.length > treshold && showSlide(currentIndex)
}

const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length
    slides.length > treshold && showSlide(currentIndex)
}

setInterval(nextSlide, 3000)


// faq cards on faq page
const faqCards = document.querySelectorAll('.card-faq')

let cardFaqActiveIndex = 0

faqCards?.forEach((card, index) => {
    card.addEventListener('click', () => {
        card.querySelector('.card-faq-content').classList.toggle('hidden')
        card.querySelector('.card-faq-icon').classList.toggle('rotate-180')
        
        if (cardFaqActiveIndex !== index ) {
            faqCards[cardFaqActiveIndex].querySelector('.card-faq-content').classList.add('hidden')
            faqCards[cardFaqActiveIndex].querySelector('.card-faq-icon').classList.add('rotate-180')
        }

        cardFaqActiveIndex = index;
    })
})


// search content on faq page
const searchInput = document.getElementById('keyword-faq')

searchInput?.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase()
    
    faqCards.forEach((card) => {
      const cardText = card.textContent.toLowerCase()
      
      if (cardText.includes(searchText)) {
        card.style.display = 'block'
      } else {
        card.style.display = 'none'
      }
    })
})


// form input password on, register, login, dahsboard page
const visiblePasswords = document.querySelectorAll('.visible-password')
const unvisiblePasswords = document.querySelectorAll('.unvisible-password')
const inputPasswords = document.querySelectorAll('.input-password')

visiblePasswords?.forEach((viewPassword, index) => {
    viewPassword.addEventListener('click', () => {
        viewPassword.classList.toggle('hidden')
        unvisiblePasswords[index].classList.toggle('hidden')
        inputPasswords[index].type === 'password' ? inputPasswords[index].type = 'text' : inputPasswords[index].type = 'password'
    })
})

unvisiblePasswords?.forEach((hiddenPassword, index) => {
    hiddenPassword.addEventListener('click', () => {
        hiddenPassword.classList.toggle('hidden')
        visiblePasswords[index].classList.toggle('hidden')
        inputPasswords[index].type === 'password' ? inputPasswords[index].type = 'text' : inputPasswords[index].type = 'password'
    })
})


// preview input file (upload photo profile) on dashboard page
const image = document.querySelector('#photo-profile')
const imgPreview = document.querySelector('.photo-preview')

const previewPhoto = () => {
    const blob = URL.createObjectURL(image.files[0])
    imgPreview.src = blob;
    imgPreview.parentNode.classList.toggle('hidden')
}

const removePreview = document.querySelector('.remove-preview')
removePreview?.addEventListener('click', () => {
    image.value = ''
    imgPreview.src = ''
    imgPreview.parentNode.classList.toggle('hidden')
});


// modal add address & list address on payment page
const modalAdd = document.querySelector('#modal-add');
const modalList = document.querySelector('#modal-list');
const formAddress = document.querySelector('#form-address');
const listContainer = document.querySelector('#list-container');
const closeModalAdd = document.getElementById('close-modal-add')
const closeModalList = document.getElementById('close-modal-list')

const addModal = () => {
    window.scrollTo(0, 0);
    modalList?.classList.add('hidden')
    modalAdd.classList.remove('hidden')
    document.body.style.overflow = 'hidden'
};

const addressModal = () => {
    window.scrollTo(0, 0);
    modalAdd.classList.add('hidden')
    modalList.classList.remove('hidden')
    document.body.style.overflow = 'hidden'
};

modalAdd?.addEventListener('click', (e) => {
    if(!formAddress.contains(e.target)){
        document.body.style.overflow = 'auto'
        modalAdd.classList.add('hidden')
    }
})

modalList?.addEventListener('click', (e) => {
    if(!listContainer.contains(e.target)){
        document.body.style.overflow = 'auto'
        modalList.classList.add('hidden')
    }
})

closeModalAdd?.addEventListener('click', (e) => {
    document.body.style.overflow = 'auto'
    modalAdd.classList.add('hidden')
})

closeModalList?.addEventListener('click', (e) => {
    document.body.style.overflow = 'auto'
    modalList.classList.add('hidden')
})


// dashboard menu list on dashboard page
const menus = document.querySelectorAll('.button-dashboard')
const dashboardContents = document.querySelectorAll('.dashboard-content')

menus[0]?.classList.add('bg-gradient-primary')
menus[0]?.classList.remove('bg-gradient-forth')
dashboardContents[0]?.classList.remove('hidden')

let buttonDashboardActive = 0

menus?.forEach((menuDashboard, index) => {
    menuDashboard.addEventListener('click', () => {
        menuDashboard.classList.add('bg-gradient-primary')
        menuDashboard.classList.remove('bg-gradient-forth')
        dashboardContents[index].classList.remove('hidden')

        if (buttonDashboardActive !== index ) {
            menus[buttonDashboardActive].classList.remove('bg-gradient-primary')
            menus[buttonDashboardActive].classList.add('bg-gradient-forth')
            dashboardContents[buttonDashboardActive].classList.add('hidden')
        }

        buttonDashboardActive = index
    })
})


// slider recomend product on product page
const recomendProducts = document.querySelectorAll("#recomend-container a")
const recomendProduct = document.querySelector("#recomend-container")
recomendProducts?.length > 5 && recomendProduct.classList.toggle("lg:justify-center")


// slider thumbnail gallery product on product page
const galleryProducts = document.querySelectorAll("#gallery-container div")
const galleryProduct = document.querySelector("#gallery-container")
galleryProducts?.length > 5 && galleryProduct.classList.toggle("md:justify-center")


// set preview product on product page
const thumbnailProducts = document.querySelectorAll('.gallery-product')
const PreviewProducts = document.querySelector('.preview-product')

thumbnailProducts[0]?.parentNode.classList.remove('border-gray-200')
thumbnailProducts[0]?.parentNode.classList.remove('hover:border-gray-400')
thumbnailProducts[0]?.parentNode.classList.add('border-pinkPrimary')

let thumbnailActive = 0

thumbnailProducts?.forEach((preview, index) => {
    preview.addEventListener('click', () => {
        PreviewProducts.src = preview.currentSrc
        preview.parentNode.classList.remove('border-gray-200')
        preview.parentNode.classList.remove('hover:border-gray-400')
        preview.parentNode.classList.add('border-pinkPrimary')

        if (thumbnailActive !== index ) {
            thumbnailProducts[thumbnailActive].parentNode.classList.remove('border-pinkPrimary')
            thumbnailProducts[thumbnailActive].parentNode.classList.add('border-gray-300')
            thumbnailProducts[thumbnailActive].parentNode.classList.add('hover:border-gray-400')
        }

        thumbnailActive = index
    })
})


// detail content on product page
const detailMenus = document.querySelectorAll('.button-product')
const productContents = document.querySelectorAll('.content-product')

let menuDetailActive = 0

detailMenus?.forEach((menuDetail, index) => {
    menuDetail.addEventListener('click', () => {
        menuDetail.classList.add('border-pinkPrimary')
        menuDetail.classList.remove('border-gray-300')
        productContents[index].classList.remove('hidden')

        if (menuDetailActive !== index ) {
            detailMenus[menuDetailActive].classList.remove('border-pinkPrimary')
            detailMenus[menuDetailActive].classList.add('border-gray-300')
            productContents[menuDetailActive].classList.add('hidden')
        }

        menuDetailActive = index
    })
})


// modal edit profile on dashboard page
const modalProfile = document.querySelector('#modal-edit-profile');
const formProfile = document.querySelector('#form-profile');
const closeModalEdit = document.querySelector('#close-modal-edit')

const showEditProfile = () => {
    window.scrollTo(0, 0)
    modalProfile.classList.remove('hidden')
    document.body.style.overflow = 'hidden'
}

modalProfile?.addEventListener('click', (e) => {
    if(!formProfile.contains(e.target)){
        document.body.style.overflow = 'auto'
        modalProfile.classList.add('hidden')
    }
})

closeModalEdit?.addEventListener('click', (e) => {
    document.body.style.overflow = 'auto'
    modalProfile.classList.add('hidden')
})


// menu list addres on dashboard page
const cardAddress = document.querySelectorAll('.card-address')
const menuAddress = document.querySelectorAll('.menu-address')

let addressActive = 0

cardAddress?.forEach((address, index) => {
    address.addEventListener('click', () => {
        menuAddress[index].classList.toggle('hidden')
        if (addressActive !== index ) {
            menuAddress[addressActive].classList.add('hidden')
        }
        addressActive = index
    })
})


// modal cancel on transaction page
const modalCancel = document.querySelector('#modal-cancel')
const formCancel = document.querySelector('#form-cancel')
const closeModalCancel = document.querySelector('#close-modal-cancel')

const showModalCancel = () => {
    window.scrollTo(0, 0)
    modalCancel.classList.remove('hidden')
    document.body.style.overflow = 'hidden'
}

modalCancel?.addEventListener('click', (e) => {
    if(!formCancel.contains(e.target)){
        document.body.style.overflow = 'auto'
        modalCancel.classList.add('hidden')
    }
})

closeModalCancel?.addEventListener('click', (e) => {
    document.body.style.overflow = 'auto'
    modalCancel.classList.add('hidden')
})


// manipulate chat center box with message box on chat page
const centerBox = document.getElementById('center-chat')
const messageBox = document.getElementById('message-chat')
const cardCenters = document.querySelectorAll('.card-center');

cardCenters?.forEach((cardCenter, index) => {
    cardCenter.addEventListener('click', () => {
        if (window.screen.width < 768) {
            centerBox.classList.toggle('hidden')
            messageBox.classList.toggle('hidden')
            console.log("hit");
        } 
    })
})

const backToCenter = () => {
    centerBox.classList.toggle('hidden')
    messageBox.classList.toggle('hidden')
}

// search center on chat page
const searchCenter = document.getElementById('keyword-center')
const centerCards = document.querySelectorAll('.card-center')

searchCenter?.addEventListener('input', () => {
    const searchText = searchCenter.value.toLowerCase()
    
    centerCards.forEach((card) => {
      const cardText = card.textContent.toLowerCase()
      
      if (cardText.includes(searchText)) {
        card.style.display = 'block'
      } else {
        card.style.display = 'none'
      }
    })
})

// playlist video
const videoPlayer = document.getElementById('videoPlayer')
const videoSources = document.querySelectorAll('.video-player')

let currentSourceIndex = 0

videoPlayer?.addEventListener('ended', function() {
    if (currentSourceIndex < videoSources.length - 1) {
        currentSourceIndex++;
        videoPlayer.src = videoSources[currentSourceIndex].getAttribute('src');
        videoPlayer.load();
        videoPlayer.play();
    } else {
        currentSourceIndex = 0;
        videoPlayer.src = videoSources[currentSourceIndex].getAttribute('src');
        videoPlayer.load();
        videoPlayer.play();
    }
});


// slider card product on index page
const wrapperProduct = document.getElementById('wrapperProduct')
const cardProductHome = document.querySelectorAll(".card-product-home")
let tresholdCard = 0

if (window.screen.width >= 1024 && window.screen.width < 1500) {
    tresholdCard = 4
} else if (window.screen.width >= 1500 && window.screen.width < 1800) {
    tresholdCard = 5
} else if (window.screen.width >= 1800  && window.screen.width < 2000) {
    tresholdCard = 6
} else if (window.screen.width >= 2000) {
    tresholdCard = 7
}

document.addEventListener("DOMContentLoaded", () => {
    if (cardProductHome.length > tresholdCard) {
        wrapperProduct && wrapperProduct.classList.remove('md:justify-center')
        wrapperProduct && wrapperProduct.classList.add('md:justify-start')
    } else {
        wrapperProduct && wrapperProduct.classList.add('md:justify-center')
        wrapperProduct && wrapperProduct.classList.remove('md:justify-start')
    }
});

// untuk scroll mouse
// wrapperProduct.addEventListener('wheel', function(e) {
//     const race = 40;
//     if (e.deltaY > 0)
//         wrapperProduct.scrollLeft += race;
//     else
//         wrapperProduct.scrollLeft -= race;
// 	e.preventDefault();
// });

let isDown = false;
let startX;
let scrollLeft;

wrapperProduct.addEventListener('mousedown', (e) => {
    isDown = true;
    wrapperProduct.classList.add('active');
    startX = e.pageX - wrapperProduct.offsetLeft;
    scrollLeft = wrapperProduct.scrollLeft;
});

wrapperProduct.addEventListener('mouseleave', () => {
    isDown = false;
    wrapperProduct.classList.remove('active');
});

wrapperProduct.addEventListener('mouseup', () => {
    isDown = false;
    wrapperProduct.classList.remove('active');
});
wrapperProduct.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - wrapperProduct.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    wrapperProduct.scrollLeft = scrollLeft - walk;
});