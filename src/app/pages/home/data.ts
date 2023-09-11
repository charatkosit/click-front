import { sliderOpt } from 'src/app/shared/data';

export const introSlider = {
    ...sliderOpt,
    dots: true,
    nav: false,
    loop: false
}

export const brandSlider = {
    ...sliderOpt,
    nav: false,
    dots: true,
    margin: 20,
    autoplay: false,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 5
        },
        1200: {
            items: 6
        },
        1600: {
            items: 6,
            dots: false,
            nav: true
        }
    }
}

export const serviceSlider = {
    ...sliderOpt,
    dots: true,
    nav: false,
    autoplay: false,
    loop: false,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4,
            dots: false
        }
    }
}

export const categoriesSlider = {
    ...sliderOpt,
    nav: false,
    dots: true,
    margin: 20,
    autoplay: false,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 5
        },
        1200: {
            items: 6,
            dots: false
        }
    }
}

export const productSlider = {
    ...sliderOpt,
    nav: false,
    dots: false,
    margin: 20,
    autoplay: false,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5,
            dots: true
        },
        1600: {
            items: 5,
            nav: true,
            dots: true
        }
    }
}

export const bannerSlider = {
    ...sliderOpt,
    nav: false,
    dots: true,
    margin: 20,
    autoplay: false,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3,
            dots: false
        }
    }
}

export const testimonialSlider = {
    ...sliderOpt,
    nav: false,
    dots: true,
    margin: 20,
    autoplay: false,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2,
            dots: false
        }
    }
}

export const blogSlider = {
    ...sliderOpt,
    nav: false,
    dots: true,
    margin: 20,
    autoplay: false,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 3,
            dots: false
        }
    }
}