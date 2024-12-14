import { image } from "framer-motion/client"
import { BsHandbag } from "react-icons/bs"
import { CiBag1, CiSearch, CiUser } from "react-icons/ci"
import { FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt, FaPinterest, FaRegUser, FaTwitter } from "react-icons/fa"
import { IoIosSearch } from "react-icons/io"
import { MdFavoriteBorder, MdLocationOn } from "react-icons/md"

export const listServer = [
    {
        text: "FAQ",
        link: "/faq"
    },
    {
        text: "About Us",
        link: "/aboutus"
    },
    {
        text: "shipping",
        link: "/shipping"
    },
    {
        text: "privacy policy",
        link: "/privacypolicy"
    },
    {
        text: "Contact",
        link: "/contact"
    },

]

export const listExtras = [
    {
        text: "Search",
        link: "/search"
    },
    {
        text: "News",
        link: "/news"
    },
    {
        text: "wishlist",
        link: "/wishlist"
    },
    {
        text: "All collections",
        link: "/collections"
    },
    {
        text: "All products",
        link: "/collections/products"
    },

]

export const listContact = [
    {
        text: "Palestain",
        icon: <MdLocationOn />,
        link: ""
    },
    {
        text: "+970597532729",
        icon: <FaPhoneAlt />,
        link: ""
    },
    {
        text: "mohameddeveloping2004@gmail.com",
        icon: <FaEnvelope />,
        link: ""
    },


]

export const listButton = [
    {
        text: "Polos",
        link: "/collections"
    },
    {
        text: "Skirts",
        link: "/collections"
    },
    {
        text: "Trousers",
        link: "/collections"
    },
    {
        text: "Overalls",
        link: "/collections"
    },
    {
        text: "Denim",
        link: "/collections"
    },
    {
        text: "Mittens",
        link: "/collections"
    },
    {
        text: "Coat",
        link: "/collections"
    },
    {
        text: "Sweater",
        link: "/collections"
    },
    {
        text: "T-Shirt",
        link: "/collections"
    },
    {
        text: "Jeans",
        link: "/collections"
    },
    {
        text: "Socks",
        link: "/collections"
    },
    {
        text: "Shorts",
        link: "/collections"
    },
    {
        text: "Singlet",
        link: "/collections"
    },
    {
        text: "Tracksuit",
        link: "/collections"
    },
    {
        text: "Diaper",
        link: "/collections"
    },
    {
        text: "Jacket",
        link: "/collections"
    },
    {
        text: "Baby Apron",
        link: "/collections"
    },
    {
        text: "Socks",
        link: "/collections"
    },
    {
        text: "Beanie",
        link: "/collections"
    },
]

export const listnavbar = [
    {
        text: "home",
        list: null,
        link: "/",
    },
    {
        text: "Toys",
        list: [
            "Baby Rattles",
            "Musical Toys",
            "Soft Toys",
            "Bath Toys",
        ],
        link: "/collections/baby rattles"
    },
    {
        text: "Shop",
        list: [
            {
                title: "board games",
                items: [
                    "bath toys",
                    "musical toys",
                    "soft toys",
                    "baby rattles",
                ],
                image: "/images/header/header%20div-1%20(1)%20img.avif",
            },
            {
                title: "electronics toys",
                items: [
                    "soft toys",
                    "bath toys",
                    "baby rattles",
                    "musical toys",
                ],

                image: "/images/header/header%20div-1%20(2)%20img.jpg",
            },
            {
                title: "kids puzzle",
                items: [
                    "Baby Rattles",
                    "musical toys",
                    "soft toys",
                    "bath toys",
                ],
                image: "/images/header/header%20div-1%20(3)%20img.jpg",
            },
            {
                title: "puzzle game",
                items: [
                    "musical toys",
                    "soft toys",
                    "baby rattles",
                    "bath toys",
                ],
                image: "/images/header/header%20div-1%20(4)%20img.jpg",
            },
        ],
        link: "/collections/Products",

    },
    {
        text: "Barth Toys",
        list: null,
        link: "/collections/bath toys",
    },
    {
        text: "Soft Toys",
        list: null,
        link: "/collections/Soft Toys",

    },
    {
        text: "Blods",
        list: [
            {
                id: 1,
                title: "Donec placerat, dolor ac tristique",
                desc: `Phasellus ex est, vehicula et ante id, dapibus dictum eros. Nunc molestie euismod pretium. Nunc feugiat arcu et condimentum porttitor. In dapibus, sapien sed hendrerit fringilla, odio quam dictum lacus, ut porta odio erat eget augue. Nunc felis dolor, elementum eget risus nec, faucibus dictum nulla. Aliquam erat volutpat. Maecenas vestibulum feugiat sollicitudin. Nunc aliquet nunc vitae magna elementum, eget interdum orci faucibus. Donec placerat, dolor ac tristique maximus, risus sapien feugiat mi, nec sodales velit odio vel sapien. Etiam vel lobortis quam, nec consequat mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque nec nibh vitae magna tincidunt ullamcorper. Aenean libero magna, suscipit suscipit condimentum eu, laoreet non lorem. Nunc imperdiet vel sapien in luctus. Morbi ultricies sed purus in posuere.`,
                image: '/images/1_533x.webp'
            },
            {
                id: 2,
                title: "Etiam vel volutpat sem",
                desc: `Donec ante est, varius id arcu ac, venenatis vehicula purus. Suspendisse rhoncus massa at euismod viverra. Nam rutrum tortor quis tellus auctor, ac fringilla lorem fringilla. Duis nisl magna, aliquet a nibh vitae, vulputate molestie mauris. Morbi eget pulvinar dui. Sed id elit non dolor mollis hendrerit. Fusce dapibus nibh at eros cursus, at molestie mauris molestie. Vestibulum dignissim tempus lacus id euismod. Etiam vel volutpat sem, sed suscipit mauris. In id felis at odio tincidunt vehicula at vitae risus. Proin euismod dolor non libero semper ornare. Mauris pharetra porta leo, a finibus lectus fringilla eget. Morbi nisi nisi, porttitor vel blandit non, interdum maximus odio. Ut feugiat odio leo, sit amet porta ex porttitor sit amet. Donec viverra a quam a eleifend.`,
                image: '/images/2 (1).webp'
            },
            {
                id: 3,
                title: "Vivamus ante ante, tempor nec",
                desc: `Nulla facilisi. Maecenas eleifend laoreet est a pharetra. Aliquam erat volutpat. Etiam vitae tincidunt mauris, eu blandit mi. Suspendisse nulla massa, pulvinar at suscipit sed, vestibulum sed nisl. Nunc tincidunt, elit vitae dictum placerat, lacus nunc eleifend ante, eu bibendum mi lacus eu sem. Proin vitae dapibus augue, eu malesuada odio. Sed et velit lobortis sem imperdiet luctus sagittis id metus. Maecenas non metus lectus. Etiam vitae turpis dui. Ut ultrices, neque nec semper eleifend, mauris metus commodo purus, blandit blandit nibh purus quis lectus. Aenean sodales leo sed eros rutrum luctus. Donec tincidunt tincidunt feugiat. Integer orci purus, hendrerit nec euismod placerat, aliquet sed dui. Vivamus ante ante, tempor nec enim imperdiet, vehicula eleifend felis.`,
                image: '/images/3 (1).webp'
            },
            {
                id: 4,
                title: "Etiam neque velit, congue",
                desc: `Suspendisse lacus felis, finibus non enim sed, volutpat fringilla libero. Mauris id scelerisque magna, quis gravida justo. Aliquam ut ullamcorper diam. Sed lobortis ligula vitae consectetur consequat. Mauris at dolor in quam tempor euismod sit amet nec mi. Morbi ullamcorper velit nec tellus facilisis posuere. Nunc quam mi, rutrum id dignissim non, eleifend ut augue. Nulla pellentesque pellentesque cursus. Curabitur nulla urna, fermentum non suscipit nec, semper a velit. Aliquam metus eros, suscipit ut lectus quis, sodales aliquet metus. Proin at massa vitae tellus volutpat molestie eu sed urna. Etiam neque velit, congue et nisl at, venenatis hendrerit magna. Cras sed imperdiet quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
                image: '/images/4.webp'
            },
            {
                id: 5,
                title: "Morbi convallis condimentum sem",
                desc: `Quisque egestas, mauris sed fringilla tristique, nibh odio eleifend lectus, at efficitur enim nunc sed arcu. Vestibulum et nisi et neque luctus sollicitudin vitae non libero. Proin imperdiet non mauris ac porttitor. Donec mollis mi eu tincidunt pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam et massa nec purus ullamcorper vestibulum. Vestibulum nec suscipit tellus. Morbi convallis condimentum sem, vel dictum est fermentum quis. Integer id finibus elit, ultrices facilisis eros. Duis eget lectus quis tellus luctus dictum. Proin eros sapien, sagittis sed risus id, maximus porttitor lectus. Nulla commodo, arcu id aliquam efficitur, dolor velit auctor enim, nec imperdiet mi lorem a elit. Etiam lacinia, augue vitae pretium convallis, lectus nisl interdum sem, at molestie sem tellus non diam.`,
                image: '/images/5.webp'
            },
            {
                id: 6,
                title: "Nullam cursus mauris faucibus",
                desc: `Ut blandit orci vitae erat tincidunt sollicitudin. Nam luctus posuere sapien vitae tempor. Quisque non pulvinar nisl. Duis nec augue efficitur, faucibus diam eget, vulputate lorem. Donec ex est, rutrum accumsan elit et, tincidunt sodales ante. Fusce tempor vulputate elit eu fringilla. Nullam cursus mauris faucibus ipsum scelerisque lobortis. Suspendisse efficitur risus a lorem porttitor sodales. Aliquam scelerisque varius lacus ut pharetra. Donec placerat elit sit amet nisl luctus, vel tempor lacus accumsan. Nunc cursus, mauris id porta iaculis, felis lectus porttitor nibh, eget ornare neque enim feugiat dui. Integer tempus rutrum urna, a tristique enim malesuada vitae. Vestibulum ac lobortis metus. Sed luctus, sapien vel luctus cursus, ante justo lacinia dui, sed elementum erat augue sollicitudin risus. Suspendisse porttitor cursus velit, quis porta dolor accumsan ac. Praesent molestie vitae diam tincidunt molestie.\nNunc non sapien nec magna varius aliquet id malesuada neque. Phasellus tempor lacus nec leo congue, in vehicula ipsum luctus. Suspendisse rhoncus vel tortor ac efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sit amet lacus tempor leo facilisis vestibulum. Phasellus nec faucibus neque. Donec vehicula sem odio, eget tristique sapien luctus nec.`,
                image: '/images/6.webp'
            },

        ],
        link: "/news",

    },
]

export const SocialContent = [
    {
        icon: <FaTwitter />,
        link: ""
    },
    {
        icon: <FaFacebookF />,
        link: "https://www.facebook.com/profile.php?id=100042162248638"
    },
    {
        icon: <FaPinterest />,
        link: ""
    },
    {
        icon: <FaInstagram />,
        link: "https://www.instagram.com/ii8i8j/"
    },
]
export const FavirateContent = [
    {
        icon: <IoIosSearch />,
        link: ""
    },
    {
        icon: <MdFavoriteBorder />,
        link: ""
    },
    {
        icon: <FaRegUser />,
        link: ""
    },
    {
        icon: <BsHandbag />,
        link: ""
    },
]


export const sliderContain = [
    {
        backgrounImage: "/images/sec1/backgroundsec1(1.).webp",
        text: "Sale Upto 40%",
        title: "Shop Best Home Accessories For Your Children",
        descrption: ` Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type.`,

    },
    {
        backgrounImage: "/images/sec1/backgroundsec1(2.).webp",
        text: "Sale Upto 40%",
        title: "Shop Best Home Accessories For Your Children",
        descrption: ` Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type.`,

    },
    {
        backgrounImage: "/images/sec1/backgroundsec1(3.).webp",
        text: "Sale Upto 40%",
        title: "Shop Best Home Accessories For Your Children",
        descrption: ` Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type.`,

    },

]

export const cardList = [
    {
        title: "Free Shipping",
        desc: "Free shipping on all order",
        image: "/images/1.1.webp",
    },
    {

        title: "FREE RETURN",
        desc: "money back guarantee",
        image: "/images/1.2.png",
    },
    {
        title: "24/7 SUPPORT",
        desc: "We support online 24 hrs",
        image: "/images/1.3.png",
    },
    {
        title: "RECIEVE GIFT CARD",
        desc: "all over oder $50",
        image: "/images/1.4.png",
    },
]

export const listimage = [
    {
        image: "/images/11.webp",
        link: "/",
    },
    {
        image: "/images/12.webp",
        link: "/",
    },
    {
        image: "/images/13.webp",
        link: "/",
    },
    {
        image: "/images/brand2_225x150.png",
        link: "/",
    },
    {
        image: "/images/15.webp",
        link: "/",
    },
    {
        image: "/images/brand8_225x150.png",
        link: "/",
    },
    {
        image: "/images/17.webp",
        link: "/",
    },
]

export const userInf = [
    {
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        image: "/images/testi1_80x80.webp",
        name: "ms. bella",
        work: "developer"
    },
    {
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        image: "/images/testi2_80x80.webp",
        name: "mr. jhon deo",
        work: "developer"
    },
    {
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        image: "/images/testi3_80x80.webp",
        name: "larry kinda",
        work: "developer"
    },

]

export const listQustion = [

    {
        title: "What Is Shopify And How Does It Work?",
        anser: ["Shopify is a complete commerce platform that lets you start, grow, and manage a business.",
            "Create and customize an online store", "Sell in multiple places, including web, mobile, social media, online marketplaces, brick-and-mortar locations, and pop-up shops"
        ]
    },
    {
        title: "Can I Use My Own Domain Name With Shopify?",
        anser: ["Yes, you can use your own domain name with Shopify. If you have an existing domain name, you can connect it to Shopify from your store’s admin"
        ]
    },
    {
        title: "In What Countries Can I Use Shopify?",
        anser: ["You can use Shopify in nearly every country in the world."
        ]
    },
    {
        title: "What Happens When I Receive An Order?",
        anser: ["Depending on your preferences, you’ll receive an email, mobile app notification, or RSS notification every time your receive an order."
        ]
    },
    {
        title: "What Currencies Does Shopify Work With?",
        anser: ["You can sell and accept payments in many currencies, depending on what payment provider (also known as third party payment processors or payment gateways) you use."
        ]
    },
]

export const listCollections = [
    {
        image: "/images/collections/22_500x.webp",
        text: "bath toys ",
    },
    {
        image: "/images/collections/26_500x.webp",
        text: "Baby Rattles",
    },

    {
        image: "/images/collections/22_500x.webp",
        text: "bestseller",
    },

    {
        image: "/images/collections/26_500x.webp",
        text: "featured",
    },
    {
        image: "/images/collections/22_500x.webp",
        text: "latest",
    },

    {
        image: "/images/collections/26_500x.webp",
        text: "musical toys",
    },
    {
        image: "/images/collections/22_500x.webp",
        text: "soft toys",
    },
    {
        image: "/images/collections/1.webp",
        text: "special",
    },
    {
        image: "/images/collections/22_500x.webp",
        text: "toprated",
    },
]
export const products = [
    {
        id: 1,
        sale: false,
        image: "/images/1/1.webp",
        name: "Mastela 5 In 1 Rocker & Bassinet",
        details: ["Sed libero metus, tempus sit amet facilisis eget, porttitor eget nisl. Nullam commodo, diam ut gravida viverra, turpis nulla suscipit velit, ac pulvinar arcu justo sit amet ligula. Integer commodo pretium augue, et tempus dui varius ac. Vivamus pellentesque ex id tempus sagittis. Vestibulum non hendrerit erat. Maecenas maximus magna venenatis sollicitudin placerat. Cras justo nibh, gravida vel auctor nec, aliquet efficitur felis. In sapien tortor, sollicitudin in gravida commodo, vehicula vitae enim. Aliquam et elit commodo lorem malesuada semper sed vitae magna.", "In pretium iaculis risus nec aliquam. Duis ac ipsum justo. Cras nec lectus a massa tincidunt molestie ut vitae lacus. Sed eu massa eget lectus dictum tincidunt vitae vel lectus. Mauris fermentum posuere tempus. Nunc in feugiat mi. Proin facilisis lorem quis varius aliquet. Fusce sollicitudin eget dolor at sodales. Etiam non lacinia diam. Aliquam a orci rutrum, tristique augue et, efficitur lacus. Aenean orci arcu, consectetur vitae efficitur sit amet, aliquet ac nisl. Morbi luctus ac tortor sit amet facilisis. Nulla aliquam quis est eu venenatis."],
        price: 900,
        colors: [
            { color: "blue", src: "/images/1/1.webp", stock: 14 },
            { color: "orange", src: "/images/1/2.webp", stock: 12 },
            { color: "green", src: "/images/1/4.webp", stock: 12 },
        ],
        images: ["/images/1/1.webp", "/images/1/4.webp", "/images/1/2.webp"]
        // , "/images/1/6.webp"
        // , "/images/1/5.webp"
    },
    {
        id: 2,
        sale: true,
        image: "/images/2/1.webp",
        name: "Babyhug Bear Face Rattle Cum",
        details: ["Praesent suscipit quis ante sit amet mollis. Pellentesque nec fermentum lacus. Donec a tellus metus. Fusce eu mollis velit. Maecenas eu gravida ex. Praesent vitae auctor ligula. Morbi eget ipsum nisi. Maecenas feugiat lacinia nunc at laoreet. Integer efficitur, tellus ac pellentesque accumsan, diam diam rhoncus ante, ut molestie est tortor id tortor. Quisque vitae rutrum metus.", "Nam lacinia tempor urna in sodales. Suspendisse mollis nisl dictum velit dignissim pulvinar. Quisque ex ipsum, feugiat eu pulvinar eu, facilisis eget risus. Sed auctor dolor in ante facilisis, non mollis quam dictum. Fusce sit amet ipsum tellus. Morbi sit amet nulla at justo gravida volutpat id sed orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed non augue erat. Curabitur et fringilla ex. Nullam libero magna, bibendum viverra vehicula et, euismod sit amet velit. Cras rhoncus massa hendrerit, interdum ipsum sed, pulvinar libero. Mauris non convallis lacus. Nulla nisl tortor, euismod at tristique ac, convallis lobortis purus. Morbi eu arcu tincidunt, ullamcorper tellus nec, euismod lectus."],
        price: 300,
        originalPrice: 400,
        colors: [
            { color: "yellow", src: "/images/2/1.webp", stock: 15 },
            { color: "gray", src: "/images/2/2.webp", stock: 20 },

        ],
        images: ["/images/2/1.webp", "/images/2/2.webp", "/images/4/1.webp"],
    },
    {
        id: 3,
        sale: true,
        image: "/images/1/3.webp",
        name: "Skylofts Rabbit LED Night Lamp Plug",
        details: ["Sed libero metus, tempus sit amet facilisis eget, porttitor eget nisl. Nullam commodo, diam ut gravida viverra, turpis nulla suscipit velit, ac pulvinar arcu justo sit amet ligula. Integer commodo pretium augue, et tempus dui varius ac. Vivamus pellentesque ex id tempus sagittis. Vestibulum non hendrerit erat. Maecenas maximus magna venenatis sollicitudin placerat. Cras justo nibh, gravida vel auctor nec, aliquet efficitur felis. In sapien tortor, sollicitudin in gravida commodo, vehicula vitae enim. Aliquam et elit commodo lorem malesuada semper sed vitae magna."],
        price: 800,
        originalPrice: 900,
        colors: [
            { stock: 21 }
        ],
        images: ["/images/1/3.webp", "/images/2.webp"],
    },
    {
        id: 4,
        sale: true,
        image: "/images/3/1.webp",
        name: "Dimpy Stuff Teddy Bear Soft Toy With Bow Cream",
        details: ["Nunc at turpis a est aliquam semper id eu massa. Integer rutrum bibendum neque non fringilla. Praesent at ex vestibulum dolor accumsan convallis in et mauris. Proin augue massa, rhoncus dictum lectus eu, dapibus scelerisque turpis. In sodales urna vel varius aliquam. Nunc ut justo vitae nulla volutpat blandit. Maecenas quis ex in purus pulvinar dictum eget non dui. Pellentesque finibus tellus id scelerisque laoreet. Etiam sed faucibus magna, sit amet suscipit lacus. Vivamus eleifend sed purus sit amet tempor. Morbi condimentum ornare tempus."],
        price: 300,
        originalPrice: 700,
        colors: [
            { color: "red", src: "/images/3/1.webp", stock: 21 },
            { color: "black", src: "/images/3/2.webp", stock: 16 },
            { color: "orange", src: "/images/3/3.webp", stock: 13 },
        ],
        images: ["/images/3/1.webp", "/images/3/3.webp", "/images/3/2.webp"],
    },
    {
        id: 5,
        sale: false,
        image: "/images/5/1.webp",
        name: "Stuffysoft Teddy Bear Soft Toy Brown",
        details: ["Sed dictum, libero a mattis venenatis, nibh ligula elementum quam, ut lobortis quam massa non neque. Integer ac aliquam arcu. Nam vel lacus mollis, malesuada magna in, aliquet velit. Integer semper eget sem semper consectetur. Cras pretium non quam et suscipit. Sed bibendum metus nec mi feugiat, vitae faucibus nisl mollis. Aliquam justo ipsum, feugiat ac felis sed, molestie facilisis augue. Quisque consequat mi et mauris dignissim mollis. Suspendisse potenti. Morbi rutrum arcu non risus mollis hendrerit. Maecenas vehicula tortor at luctus dictum. Nullam convallis sollicitudin sagittis. In lorem dolor, egestas vitae faucibus eget, porta non libero.",
            "Integer vitae dolor sed diam sollicitudin ultricies id mollis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc maximus sodales mattis. Aenean a lectus a ligula fermentum dapibus in ut tellus. Vivamus vulputate diam non massa sollicitudin, quis malesuada sapien eleifend. Suspendisse finibus odio sapien, a porta diam varius vel. Sed commodo magna libero, non bibendum sapien hendrerit eget. Etiam pharetra ligula nisl, a placerat ligula laoreet eu. Nullam sit amet scelerisque lectus. Donec vulputate ultricies nunc vitae molestie. Maecenas consectetur nulla tortor, a imperdiet tortor vestibulum eu."
        ],
        price: 900,
        colors: [
            { color: "blue", src: "/images/5/1.webp", stock: 14 },
            { color: "black", src: "/images/5/2.webp", stock: 12 },
            { color: "pink", src: "/images/5/3.webp", stock: 12 },
            { color: "orange", src: "/images/5/4.webp", stock: 12 },
        ],
        images: ["/images/16/1.webp", "/images/16/2.webp", "/images/16/3.webp", "/images/16/4.webp", "/images/16/5.webp"],
    },
    {
        id: 6,
        sale: true,
        image: "/images/7.webp",
        name: "Intellibaby Wobbly Mice Level 4 - Multicolor",
        details: ["Phasellus iaculis mattis ligula, sit amet accumsan lectus dictum faucibus. Nullam et tellus nec lorem porta venenatis non quis mi. Morbi porta neque sem, vel sodales sem tincidunt sit amet. Phasellus vel ex ac nunc sodales commodo. Morbi finibus viverra mauris, vel cursus metus posuere vel. Duis vel neque id libero semper euismod eu id urna. Praesent efficitur tincidunt risus. Cras quis ornare mauris. Suspendisse volutpat consequat mi, ut consequat neque mollis non. Morbi efficitur facilisis mauris id porttitor. Integer finibus consequat tellus, id accumsan diam pharetra id. Cras tempor vestibulum erat."],
        price: 80,
        originalPrice: 200,
        colors: [
            { stock: 15 },
        ],
    },
    {
        id: 7,
        sale: false,
        image: "/images/21_823x.webp",
        name: "Babyhug Plush Teddy Bear Soft Toy Cream",
        details: ["Ut nec tortor et tellus aliquet mollis. Phasellus posuere neque et urna scelerisque rutrum eget non nisl. Nulla laoreet, nibh quis aliquam eleifend, tortor enim pretium augue, id iaculis nunc velit vitae erat. Morbi hendrerit lectus dui, non commodo quam laoreet eget. Curabitur at odio bibendum, hendrerit arcu ac, dapibus enim. Vivamus porta condimentum leo quis lacinia. Pellentesque vel accumsan nibh, sed condimentum libero. Integer nec libero vel enim volutpat convallis. Nulla a lectus porta, porttitor turpis eu, finibus nibh. Donec vehicula vel dolor ornare venenatis. Vestibulum posuere auctor volutpat. Praesent hendrerit leo eget egestas tincidunt. Phasellus eu neque tellus. Pellentesque ut placerat metus. Mauris molestie auctor odio vitae interdum. "],
        price: 900,
        // originalPrice: 90,
        colors: [
            { color: "gray", src: "/images/21_823x.webp", stock: 14 },
            { color: "white", src: "/images/12_9984f0e1-35fd-4ed2-97c8-dfe090cc1653_823x.webp", stock: 11 },
            { color: "blue", src: "/images/15_823x.webp", stock: 13 },
        ],
        images: ["/images/6/1.webp", "/images/6/2.webp", "/images/6/3.webp", "/images/6/4.webp"],
    },
    {
        id: 8,
        sale: true,
        image: "/images/6_493x.webp",
        name: "Funzoo Angel Bear Flower Teddy Soft Toy",
        details: ["Quisque ut enim in arcu convallis feugiat vel id ipsum. Mauris nec magna elit. Aliquam quis lacus tincidunt, rhoncus justo in, bibendum dolor. Suspendisse felis velit, convallis id felis ut, volutpat tincidunt elit. Nulla facilisi. Aenean felis urna, placerat a eleifend et, tristique ut felis. Nullam et sem mattis, imperdiet risus vitae, facilisis eros. Proin vehicula tortor sit amet pretium molestie. Sed vel pulvinar dui, ac fermentum ex. Phasellus et molestie ipsum, vel bibendum mauris. Mauris finibus congue posuere. Integer porttitor posuere sem id rhoncus. Phasellus rutrum metus dui, sed porta risus vehicula at. Pellentesque pellentesque quam et risus auctor varius.",
            "Suspendisse potenti. Mauris at hendrerit sem, eu eleifend lectus. In eget sapien sit amet arcu mollis tempus ornare vel ligula. Aliquam consequat venenatis luctus. Curabitur in placerat leo, ut porttitor velit. Nunc ut luctus lorem. Phasellus dictum orci sed dui suscipit gravida. Praesent tristique semper pharetra. Etiam fringilla nisl urna, ornare malesuada libero feugiat quis. Phasellus metus turpis, suscipit lobortis tincidunt et, cursus eget tortor. Praesent vulputate, orci euismod varius tincidunt, felis elit blandit urna, id mollis nulla eros ut felis. Mauris luctus, lacus eget ultrices viverra, dui nisl laoreet nulla, eget suscipit lacus nibh non enim."
        ],
        price: 600,
        originalPrice: 800,
        colors: [
            { color: "orange", src: "/images/15/4.webp", stock: 0 },
            { color: "blue", src: "/images/15/2.webp", stock: 0 },
            { color: "black", src: "/images/6_493x.webp", stock: 11 },
        ],
        images: ["/images/15/1.webp", "/images/15/2.webp", "/images/15/3.webp", "/images/15/4.webp", "/images/15/5.webp"],
    },
    {
        id: 9,
        sale: false,
        image: "/images/1.webp",
        name: "FunBlast Rechargeable LED Table Lamp",
        details: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend, odio in laoreet porttitor, erat ligula dapibus velit, quis tristique enim nisl eget arcu. In hac habitasse platea dictumst. Duis a facilisis urna. Praesent facilisis turpis ac tortor laoreet, non lobortis lacus fermentum. Fusce et venenatis urna. Sed a velit vel ligula vulputate aliquam. Aliquam quis velit id lorem ornare consequat. Proin maximus augue et odio pulvinar, non dignissim sapien mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper est sagittis eleifend rhoncus. Morbi condimentum risus eu pulvinar aliquam. Donec eu interdum quam. Morbi tempus feugiat leo eget volutpat. Quisque augue orci, porttitor at ex id, lobortis congue dolor. Curabitur vitae sapien sapien. Proin ornare lobortis sapien vel tristique.",
            "Nam aliquam rhoncus arcu, at placerat tortor. Proin non laoreet mi, ut pharetra nisl. Donec porta risus interdum interdum molestie. Curabitur pellentesque ex vel rutrum convallis. Donec elementum egestas nulla at faucibus. Integer interdum libero nec lobortis viverra. Duis fermentum nunc erat, at egestas lectus facilisis vitae. Praesent enim urna, laoreet eget auctor vitae, aliquam ac leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Aenean in elit neque. Sed aliquet, augue non interdum vehicula, risus ante feugiat nunc, sed congue tortor urna a justo. Proin cursus euismod aliquet. Proin at auctor justo. Fusce pellentesque a dui eu pulvinar. Sed quis massa ligula. In hac habitasse platea dictumst. Maecenas tincidunt augue enim, in hendrerit nulla mattis sed. Donec mollis ipsum a elit efficitur, id fringilla mi pellentesque."
        ],
        price: 500,
        originalPrice: 900,
        colors: [
            { stock: 17 },
        ],
        images: ["/images/1.webp", "/images/2.jpg"],
    },
    {
        id: 10,
        sale: true,
        image: "/images/14/1.webp",
        name: "Little Genius Steel Kitchen Set With Wooden Container",
        details: ["Suspendisse quis lorem sem. Morbi finibus ligula erat, at molestie tortor euismod ut. Nulla aliquet ut dui vitae mollis. Aliquam a diam lacinia, aliquet mi sed, accumsan velit. Morbi eget neque risus. In sodales velit in nibh sagittis, ac fermentum dolor cursus. Vestibulum commodo magna nec eros lobortis faucibus. Maecenas iaculis pulvinar elementum. Pellentesque pulvinar viverra neque, at consectetur nisl tempor nec. Sed ut tincidunt magna, sed suscipit erat. Curabitur dignissim quam at tellus volutpat, eu tempor odio euismod. Fusce vel consectetur magna, quis tempus mauris.",
            "Donec finibus tempor quam, at fringilla sem vulputate sed. Curabitur erat odio, mollis at vulputate scelerisque, hendrerit hendrerit mauris. Curabitur commodo mollis tristique. Aenean suscipit nisi a dui semper, at tincidunt nibh laoreet. Morbi sit amet odio vulputate, cursus dui sagittis, sodales nunc. Phasellus pulvinar orci eget dolor euismod, ac efficitur quam ultricies. Aenean aliquet justo vitae enim laoreet, vel imperdiet neque condimentum. In non porttitor nibh. Ut nec aliquet dolor, ac auctor lorem. Proin hendrerit ullamcorper diam, a dignissim nisl. Pellentesque molestie rutrum lectus a mattis.",
            "Ut non maximus orci, porta vehicula urna. Donec neque massa, interdum et ex eu, facilisis vestibulum nulla. Quisque cursus in nunc in bibendum. Morbi lobortis aliquet justo ut ultrices. Sed sit amet ligula eget neque luctus maximus. Sed turpis sem, accumsan a felis maximus, hendrerit dictum nisi. Sed facilisis, sapien et tristique dapibus, ex metus accumsan purus, nec luctus nisl sem ut purus. Cras ullamcorper interdum nisl, eget elementum tellus malesuada sit amet. Sed in malesuada sem. Pellentesque justo nisl, dignissim vitae posuere ultrices, pharetra vel risus. Aliquam erat volutpat. Nulla quis sem ultricies lectus mattis ultrices. Sed pulvinar nunc a neque tincidunt tincidunt. Duis at quam et nunc sodales lacinia. Sed tincidunt tristique luctus. Etiam metus metus, molestie in viverra a, rutrum quis purus."
        ],
        price: 40,
        originalPrice: 90,
        colors: [
            { color: "green", src: "/images/14/1.webp", stock: 0 },
            { color: "gray", src: "/images/21_823x.webp", stock: 0 },
            { color: "yellow", src: "/images/3/3.webp", stock: 11 },
        ],
        images: ["/images/14/1.webp", "/images/21_823x.webp", "/images/3/3.webp", "/images/14/2.webp"],
    },
];

export const listdown =
    [
        {
            src: "/images/5/1.webp",
            color: "yellow"
        },
        {
            src: "/images/5/2.webp",
            color: "red"
        },
        {
            src: "/images/5/3.webp",
            color: "orange"
        },
        {
            src: "/images/5/4.webp",
            color: "black"
        },

    ]


export const NewsList =
    [
        {
            id: 1,
            title: "Donec placerat, dolor ac tristique",
            desc: `Phasellus ex est, vehicula et ante id, dapibus dictum eros. Nunc molestie euismod pretium. Nunc feugiat arcu et condimentum porttitor. In dapibus, sapien sed hendrerit fringilla, odio quam dictum lacus, ut porta odio erat eget augue. Nunc felis dolor, elementum eget risus nec, faucibus dictum nulla. Aliquam erat volutpat. Maecenas vestibulum feugiat sollicitudin. Nunc aliquet nunc vitae magna elementum, eget interdum orci faucibus. Donec placerat, dolor ac tristique maximus, risus sapien feugiat mi, nec sodales velit odio vel sapien. Etiam vel lobortis quam, nec consequat mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque nec nibh vitae magna tincidunt ullamcorper. Aenean libero magna, suscipit suscipit condimentum eu, laoreet non lorem. Nunc imperdiet vel sapien in luctus. Morbi ultricies sed purus in posuere.`,
            image: '/images/1_533x.webp'
        },
        {
            id: 2,
            title: "Etiam vel volutpat sem",
            desc: `Donec ante est, varius id arcu ac, venenatis vehicula purus. Suspendisse rhoncus massa at euismod viverra. Nam rutrum tortor quis tellus auctor, ac fringilla lorem fringilla. Duis nisl magna, aliquet a nibh vitae, vulputate molestie mauris. Morbi eget pulvinar dui. Sed id elit non dolor mollis hendrerit. Fusce dapibus nibh at eros cursus, at molestie mauris molestie. Vestibulum dignissim tempus lacus id euismod. Etiam vel volutpat sem, sed suscipit mauris. In id felis at odio tincidunt vehicula at vitae risus. Proin euismod dolor non libero semper ornare. Mauris pharetra porta leo, a finibus lectus fringilla eget. Morbi nisi nisi, porttitor vel blandit non, interdum maximus odio. Ut feugiat odio leo, sit amet porta ex porttitor sit amet. Donec viverra a quam a eleifend.`,
            image: '/images/2 (1).webp'
        },
        {
            id: 3,
            title: "Vivamus ante ante, tempor nec",
            desc: `Nulla facilisi. Maecenas eleifend laoreet est a pharetra. Aliquam erat volutpat. Etiam vitae tincidunt mauris, eu blandit mi. Suspendisse nulla massa, pulvinar at suscipit sed, vestibulum sed nisl. Nunc tincidunt, elit vitae dictum placerat, lacus nunc eleifend ante, eu bibendum mi lacus eu sem. Proin vitae dapibus augue, eu malesuada odio. Sed et velit lobortis sem imperdiet luctus sagittis id metus. Maecenas non metus lectus. Etiam vitae turpis dui. Ut ultrices, neque nec semper eleifend, mauris metus commodo purus, blandit blandit nibh purus quis lectus. Aenean sodales leo sed eros rutrum luctus. Donec tincidunt tincidunt feugiat. Integer orci purus, hendrerit nec euismod placerat, aliquet sed dui. Vivamus ante ante, tempor nec enim imperdiet, vehicula eleifend felis.`,
            image: '/images/3 (1).webp'
        },
        {
            id: 4,
            title: "Etiam neque velit, congue",
            desc: `Suspendisse lacus felis, finibus non enim sed, volutpat fringilla libero. Mauris id scelerisque magna, quis gravida justo. Aliquam ut ullamcorper diam. Sed lobortis ligula vitae consectetur consequat. Mauris at dolor in quam tempor euismod sit amet nec mi. Morbi ullamcorper velit nec tellus facilisis posuere. Nunc quam mi, rutrum id dignissim non, eleifend ut augue. Nulla pellentesque pellentesque cursus. Curabitur nulla urna, fermentum non suscipit nec, semper a velit. Aliquam metus eros, suscipit ut lectus quis, sodales aliquet metus. Proin at massa vitae tellus volutpat molestie eu sed urna. Etiam neque velit, congue et nisl at, venenatis hendrerit magna. Cras sed imperdiet quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
            image: '/images/4.webp'
        },
        {
            id: 5,
            title: "Morbi convallis condimentum sem",
            desc: `Quisque egestas, mauris sed fringilla tristique, nibh odio eleifend lectus, at efficitur enim nunc sed arcu. Vestibulum et nisi et neque luctus sollicitudin vitae non libero. Proin imperdiet non mauris ac porttitor. Donec mollis mi eu tincidunt pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam et massa nec purus ullamcorper vestibulum. Vestibulum nec suscipit tellus. Morbi convallis condimentum sem, vel dictum est fermentum quis. Integer id finibus elit, ultrices facilisis eros. Duis eget lectus quis tellus luctus dictum. Proin eros sapien, sagittis sed risus id, maximus porttitor lectus. Nulla commodo, arcu id aliquam efficitur, dolor velit auctor enim, nec imperdiet mi lorem a elit. Etiam lacinia, augue vitae pretium convallis, lectus nisl interdum sem, at molestie sem tellus non diam.`,
            image: '/images/5.webp'
        },
        {
            id: 6,
            title: "Nullam cursus mauris faucibus",
            desc: `Ut blandit orci vitae erat tincidunt sollicitudin. Nam luctus posuere sapien vitae tempor. Quisque non pulvinar nisl. Duis nec augue efficitur, faucibus diam eget, vulputate lorem. Donec ex est, rutrum accumsan elit et, tincidunt sodales ante. Fusce tempor vulputate elit eu fringilla. Nullam cursus mauris faucibus ipsum scelerisque lobortis. Suspendisse efficitur risus a lorem porttitor sodales. Aliquam scelerisque varius lacus ut pharetra. Donec placerat elit sit amet nisl luctus, vel tempor lacus accumsan. Nunc cursus, mauris id porta iaculis, felis lectus porttitor nibh, eget ornare neque enim feugiat dui. Integer tempus rutrum urna, a tristique enim malesuada vitae. Vestibulum ac lobortis metus. Sed luctus, sapien vel luctus cursus, ante justo lacinia dui, sed elementum erat augue sollicitudin risus. Suspendisse porttitor cursus velit, quis porta dolor accumsan ac. Praesent molestie vitae diam tincidunt molestie.\nNunc non sapien nec magna varius aliquet id malesuada neque. Phasellus tempor lacus nec leo congue, in vehicula ipsum luctus. Suspendisse rhoncus vel tortor ac efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sit amet lacus tempor leo facilisis vestibulum. Phasellus nec faucibus neque. Donec vehicula sem odio, eget tristique sapien luctus nec.`,
            image: '/images/6.webp'
        },

    ]