"use client"

import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, EffectCoverflow, Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "../styles/global.css"

const items = [
  {
    img: "/Eleventh Hour.png",
    alt: "Logo 1",
    instagramUrl: "https://www.instagram.com/11throastery/",
    category: "ROASTERY",
  },
  { img: "/TP.png", alt: "Logo 2", instagramUrl: "https://www.instagram.com/tempatperaduan/", category: "COFFEE SHOP" },
  { img: "/Njajan.png", alt: "Logo 3", instagramUrl: "https://www.instagram.com/njajan.co/", category: "F&B" },
  {
    img: "/Social Dilemma.png",
    alt: "Logo 4",
    instagramUrl: "https://www.instagram.com/scldilemma/",
    category: "CREATIVE",
  },
  {
    img: "/Langsung Lahap.png",
    alt: "Logo 5",
    instagramUrl: "https://www.instagram.com/l2katering/",
    category: "CATERING",
  },
  { img: "/Jet- Li.png", alt: "Logo 6", instagramUrl: "https://www.instagram.com/taichanjetli/", category: "F&B" },
  {
    img: "/BOC.png",
    alt: "Logo 7",
    instagramUrl: "https://maps.app.goo.gl/aPAsxRJAZ3r5P9Av7",
    category: "COFFEE SHOP",
  },
  { img: "/Pribumie.png", alt: "Logo 8", instagramUrl: "https://www.instagram.com/njajan.co/", category: "F&B" },
  {
    img: "/Rakjat Sipil.png",
    alt: "Logo 9",
    instagramUrl: "https://maps.app.goo.gl/o7SxJGmtkPUBvjZX9",
    category: "COFFEE SHOP",
  },
  { img: "/Wartap.png", alt: "Logo 10", instagramUrl: "https://www.instagram.com/46wartap/", category: "F&B" },
  { img: "/Wrkoplo.png", alt: "Logo 11", instagramUrl: "https://www.instagram.com/wrkoplo/", category: "COFFEE SHOP" },
]

const categoryLabelMap = {
  "F&B": "KEDAI MAKANAN",
  "COFFEE SHOP": "KAFE",
  ROASTERY: "ROASTERY",
  CATERING: "KATERING",
  FASHION: "FASHION",
  CREATIVE: "KREATIF",
  OTHER: "LAINNYA",
}

const categoryColors = {
  "F&B": "from-orange-500 to-red-500",
  "COFFEE SHOP": "from-amber-600 to-yellow-600",
  ROASTERY: "from-amber-700 to-orange-700",
  CATERING: "from-green-500 to-emerald-500",
  FASHION: "from-purple-500 to-pink-500",
  CREATIVE: "from-blue-500 to-indigo-500",
  OTHER: "from-gray-500 to-gray-600",
}

export default function SwiperCarousel() {
  const [slidesPerView, setSlidesPerView] = useState(3)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [swiperInstance, setSwiperInstance] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1)
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(3)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleImageClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  const currentCategory = items[activeIndex]?.category || "F&B"
  const label = categoryLabelMap[currentCategory] || currentCategory
  const categoryColor = categoryColors[currentCategory] || categoryColors["OTHER"]

  const goToSlide = (index) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index)
    }
  }

  if (isLoading) {
    return (
      <div className="bg-gradient-to-b from-black via-neutral-900 to-black text-white px-4 py-16" id="brands">
        <div className="max-w-7xl mx-auto">
          {/* Loading Header */}
          <div className="flex justify-between items-center mb-12">
            <div className="h-8 bg-gray-700 rounded-lg w-48 animate-pulse"></div>
            <div className="h-10 w-10 bg-gray-700 rounded-full animate-pulse"></div>
          </div>

          {/* Loading Category */}
          <div className="flex justify-center mb-8">
            <div className="h-10 bg-gray-700 rounded-full w-32 animate-pulse"></div>
          </div>

          {/* Loading Carousel */}
          <div className="flex justify-center space-x-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-64 h-48 bg-gray-700 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="bg-gradient-to-b from-black via-neutral-900 to-black text-white px-4 py-16 lg:py-24 relative overflow-hidden"
      id="brands"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-400 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-6">
          <div className="text-center sm:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
              Our Brands
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl">
              Discover our diverse portfolio of innovative brands across multiple industries
            </p>
          </div>
          <div className="relative">
            <img
              src="tpg-divbot.png"
              alt="Center Icon"
              className="h-12 md:h-16 lg:h-20 filter drop-shadow-2xl hover:scale-110 transition-all duration-500 animate-pulse"
            />
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-ping"></div>
          </div>
        </div>

        {/* Enhanced Dynamic Category */}
        <div className="flex justify-center mb-12">
          <div className="relative group">
            <div
              className={`px-8 py-4 bg-gradient-to-r ${categoryColor} text-white text-sm md:text-base font-bold rounded-full shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-3xl`}
            >
              <span className="relative z-10 tracking-wider">{label}</span>
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div
              className={`absolute inset-0 bg-gradient-to-r ${categoryColor} rounded-full blur-lg opacity-50 animate-pulse`}
            ></div>
          </div>
        </div>

        {/* Enhanced Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, EffectCoverflow, Autoplay, Pagination]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              renderBullet: (index, className) =>
                `<span class="${className} !bg-white !opacity-50 hover:!opacity-100 !w-3 !h-3 transition-all duration-300"></span>`,
            }}
            loop={true}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={slidesPerView}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 200,
              modifier: 2,
              slideShadows: true,
            }}
            className="mySwiper !pb-16"
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => {
              const realIndex = swiper.realIndex
              setActiveIndex(realIndex)
            }}
            style={{
              "--swiper-navigation-color": "#ffffff",
              "--swiper-navigation-size": "24px",
              "--swiper-pagination-color": "#ffffff",
            }}
          >
            {items.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="relative group cursor-pointer transform transition-all duration-700 hover:scale-105"
                  onClick={() => handleImageClick(item.instagramUrl)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Card Container */}
                  <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl p-6 shadow-2xl overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm">
                      <img
                        src={item.img || "/placeholder.svg"}
                        alt={item.alt}
                        className="w-full h-48 md:h-56 lg:h-64 object-contain p-4 transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                        loading="lazy"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                      {/* Hover Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div
                        className={`px-4 py-2 bg-gradient-to-r ${categoryColors[item.category] || categoryColors["OTHER"]} rounded-full text-xs font-bold text-white text-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500`}
                      >
                        {categoryLabelMap[item.category] || item.category}
                      </div>
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>
                  </div>

                  {/* Floating Particles Effect */}
                  {hoveredIndex === idx && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-ping"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: "2s",
                          }}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
            <svg
              className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
            <svg
              className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Brand Counter */}
        <div className="flex justify-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium">
            <span className="text-white/70">Brand </span>
            <span className="text-white font-bold">{activeIndex + 1}</span>
            <span className="text-white/70"> of </span>
            <span className="text-white font-bold">{items.length}</span>
          </div>
        </div>

        {/* Quick Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-white scale-125 shadow-lg" : "bg-white/30 hover:bg-white/50 hover:scale-110"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          opacity: 1 !important;
        }
        
        .swiper-pagination-bullet-active {
          background: white !important;
          transform: scale(1.2);
        }
        
        .swiper-slide {
          transition: all 0.5s ease;
        }
        
        .swiper-slide-active {
          transform: scale(1.05);
        }
        
        .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.7;
        }
        
        @media (max-width: 640px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
