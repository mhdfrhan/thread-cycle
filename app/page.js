import HomeBanner from "@/components/ui/HomeBanner";
import InfiniteText from "@/components/ui/InfiniteText";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import ProductCard from "@/components/ui/product-card";
import { UpcomingEvents } from "@/app/section/UpcomingEvents";
import Image from "next/image";
import About from "./section/About";

export const metadata = {
  title: "Home | ThreadCycle",
}

const Home = () => {
  const steps = [
    {
      id: 1,
      title: "Bagikan Lemari Pakaian Anda",
      description: "Upload pakaian yang tidak lagi digunakan. Dapatkan poin berdasarkan kondisi dan merek.",
      icon: "📸"
    },
    {
      id: 2,
      title: "Hubungkan & Bertukar",
      description: "Jelajahi koleksi, beli langsung atau tukar dengan poin dari pakaian yang Anda unggah.",
      icon: "🔄"
    },
    {
      id: 3,
      title: "Kirim & Terima",
      description: "Kirim dengan kemasan ramah lingkungan. Lacak pengiriman Anda secara real-time.",
      icon: "📦"
    },
    {
      id: 4,
      title: "Menciptakan Dampak",
      description: "Pantau dampak lingkungan Anda dan dapatkan reward saat mencapai milestone.",
      icon: "🌱"
    }
  ];

  const popularProducts = [
    {
      id: 1,
      title: "Jeans Biru",
      price: 250000,
      category: "Celana Pria",
      image: "/img/products/1.png"
    },
    {
      id: 2,
      title: "Kaos Hitam",
      price: 150000,
      category: "Kaos Pria",
      image: "/img/products/2.png"
    },
    {
      id: 3,
      title: "Kaos Putih",
      price: 150000,
      category: "Kaos Pria",
      image: "/img/products/3.png"
    },
    {
      id: 4,
      title: "Sepatu Sneakers",
      price: 500000,
      category: "Sepatu Pria",
      image: "/img/products/4.png"
    },
    {
      id: 5,
      title: "Jeans Biru Wanita",
      price: 150000,
      category: "Celana Wanita",
      image: "/img/products/9.png"
    },

    {
      id: 6,
      title: "Kemeja Hijau",
      price: 200000,
      category: "Kemeja Pria",
      image: "/img/products/5.png"
    },
    {
      id: 7,
      title: "Kemeja Putih",
      price: 200000,
      category: "Kemeja Wanita",
      image: "/img/products/6.png"
    },
    {
      id: 8,
      title: "Sneakers Hitam",
      price: 500000,
      category: "Sepatu Pria",
      image: "/img/products/7.png"
    },
  ];

  const testimonials = [
    {
      quote:
        "ThreadCycle benar-benar mengubah cara saya melihat pakaian bekas. Dulu saya ragu untuk membeli pakaian preloved, tetapi setelah mencobanya, saya sadar bahwa banyak pakaian berkualitas tinggi yang masih layak pakai dengan harga yang jauh lebih terjangkau. Saya juga menyadari bahwa dengan membeli pakaian second-hand, saya ikut membantu mengurangi limbah tekstil yang semakin meningkat setiap tahunnya. Sekarang, saya selalu cek ThreadCycle dulu sebelum membeli pakaian baru!",
      name: "Andi Pratama",
      designation: "Pengguna Setia ThreadCycle",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Saya senang bisa menemukan platform yang memungkinkan saya menukar pakaian dengan orang lain. Banyak pakaian saya yang masih bagus tetapi sudah tidak saya pakai lagi karena ukuran yang tidak pas atau perubahan selera. Daripada membuangnya atau membiarkannya menumpuk di lemari, saya bisa menukarnya dengan pakaian lain yang lebih sesuai dengan kebutuhan saya. Ini adalah solusi praktis dan hemat, serta membantu mengurangi limbah fashion yang semakin mengkhawatirkan.",
      name: "Nadia Putri",
      designation: "Pecinta Fashion Berkelanjutan",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Saya sudah lama mencari cara untuk menghemat pengeluaran tetapi tetap bisa tampil stylish. Dengan ThreadCycle, saya bisa mendapatkan pakaian branded dengan harga yang jauh lebih murah dibandingkan membeli baru. Selain itu, saya juga bisa menjual pakaian lama saya yang masih layak pakai dan mendapatkan penghasilan tambahan. Semua transaksi di platform ini juga aman dan mudah dilakukan, jadi saya tidak khawatir tertipu atau kecewa dengan kualitas barang yang saya beli.",
      name: "Rizky Saputra",
      designation: "Pelanggan Marketplace ThreadCycle",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "ThreadCycle membantu saya menjual pakaian lama tanpa ribet. Saya sering membeli pakaian, tetapi beberapa di antaranya hanya saya pakai sekali atau dua kali. Daripada menumpuk, saya bisa menjualnya di sini dan uang hasil penjualan bisa saya gunakan untuk membeli pakaian lain yang lebih saya butuhkan. Yang saya suka dari platform ini adalah komunitasnya yang sangat mendukung, serta fitur-fitur yang membuat jual-beli semakin mudah dan nyaman.",
      name: "Rahmat Hidayat",
      designation: "Penjual Aktif di ThreadCycle",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Dulu saya sering membeli pakaian baru tanpa pikir panjang, tetapi sekarang saya lebih memilih membeli pakaian preloved di ThreadCycle. Selain lebih hemat, saya juga merasa bangga karena bisa ikut mendukung gaya hidup yang lebih ramah lingkungan. Saya belajar banyak tentang pentingnya fashion berkelanjutan dan bagaimana industri tekstil sangat berpengaruh terhadap lingkungan kita. Dengan memilih pakaian second-hand, saya merasa bisa berkontribusi dalam mengurangi limbah tekstil dan menciptakan perubahan kecil yang berarti.",
      name: "Farhan Maulana",
      designation: "Fashion Enthusiast",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const featuredItems = [
    {
      id: 1,
      name: "Koleksi Musim Panas",
      description: "Temukan koleksi pakaian musim panas terbaik dengan harga spesial",
      image: "https://images.pexels.com/photos/27045937/pexels-photo-27045937/free-photo-of-young-woman-wearing-floral-clothing-and-eyewear-sitting-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Musiman"
    },
    {
      id: 2,
      name: "Brand Premium",
      description: "Pilihan pakaian branded berkualitas dengan harga terjangkau",
      image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Premium"
    },
    {
      id: 3,
      name: "Vintage Picks",
      description: "Koleksi pakaian vintage pilihan dengan gaya klasik",
      image: "https://images.pexels.com/photos/6068960/pexels-photo-6068960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Vintage"
    }
  ];

  return (
    <>
      <div>
        <InfiniteText />
      </div>
      <section className="relative overflow-hidden pb-16">
        <HomeBanner />
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <About />
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* <HowItWorksSection /> */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-center">Bagaimana ThreadCycle Bekerja</h2>
          <p className="text-sm sm:text-lg text-neutral-400 max-w-2xl mx-auto">
            Bergabunglah dengan revolusi fashion berkelanjutan dalam 4 langkah sederhana
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <CardSpotlight key={step.id} className={`relative`}>
              <div className="size-16 z-20 relative flex items-center justify-center rounded-full bg-orange-600/20 text-4xl mb-4">
                {step.icon}
              </div>
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                {step.title}
              </p>
              <div className="text-neutral-200 mt-4 relative z-20">
                {step.description}
              </div>
            </CardSpotlight>
          ))}
        </div>
      </section>

      <section className="py-16 bg-neutral-100 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-800 dark:text-white mb-4 flex justify-center items-center text-center">
              <span className="text-orange-500">
                <svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="48" y1="80" x2="208" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="48" y1="176" x2="208" y2="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
              </span>
              <span>Produk Populer</span>
              <span className="text-orange-500">
                <svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="48" y1="80" x2="208" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="48" y1="176" x2="208" y2="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
              </span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-y-8">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-800 dark:text-white mb-4 flex justify-center items-center text-center">
              <span className="text-orange-500">
                <svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                  <line x1="48" y1="80" x2="208" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                  <line x1="48" y1="176" x2="208" y2="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                </svg>
              </span>
              <span className="mx-4">Koleksi Unggulan</span>
              <span className="text-orange-500">
                <svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                  <line x1="48" y1="80" x2="208" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                  <line x1="48" y1="176" x2="208" y2="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                </svg>
              </span>
            </h2>
            <p className="text-sm sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Koleksi terbaik yang dipilih khusus untuk Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative h-[400px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                    <span className="inline-flex items-center rounded-full bg-orange-600/20 px-3 py-1 text-sm text-orange-400 backdrop-blur-sm w-fit mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-neutral-200 text-sm mb-4">
                      {item.description}
                    </p>
                    <button className="bg-white text-neutral-900 hover:bg-orange-500 hover:text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 w-fit">
                      Lihat Koleksi
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div>
          {/* <video className="w-full rounded-xl" autoPlay loop muted>
              <source src="/video/bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          <div className="relative overflow-hidden rounded-2xl">
            <video className="w-full rounded-2xl" autoPlay loop muted preload="none">
              <source src="/video/bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black via-black/60 to-transparent"></div>
            <div className="hidden lg:block lg:absolute lg:bottom-8 lg:left-8">
              <div className="max-w-2xl mx-auto text-left text-white">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">Bergabunglah dengan ThreadCycle</h2>
                <p className="text-sm sm:text-lg max-w-lg mb-8">
                  Temukan pakaian bekas berkualitas dengan harga terjangkau. Dapatkan poin dengan mengunggah pakaian Anda dan tukar dengan pakaian lain yang Anda inginkan.
                </p>
                <button className="px-6 py-3 bg-orange-600 text-white font-medium rounded-full hover:bg-orange-700 transition-all duration-300">Mulai Sekarang</button>
              </div>
            </div>
          </div>
          <div className="lg:hidden mt-4">
              <div className="max-w-2xl mx-auto text-left text-white">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">Bergabunglah dengan ThreadCycle</h2>
                <p className="text-sm sm:text-lg max-w-lg mb-8">
                  Temukan pakaian bekas berkualitas dengan harga terjangkau. Dapatkan poin dengan mengunggah pakaian Anda dan tukar dengan pakaian lain yang Anda inginkan.
                </p>
                <button className="px-6 py-3 bg-orange-600 text-white font-medium rounded-full hover:bg-orange-700 transition-all duration-300">Mulai Sekarang</button>
              </div>
            </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div>
          <div className="max-w-sm mx-auto lg:max-w-none py-12">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-800 dark:text-white mb-4 flex justify-center items-center text-center">
              <span className="text-orange-500">
                <svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="48" y1="80" x2="208" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="48" y1="176" x2="208" y2="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
              </span>
              <span>Galeri Produk</span>
              <span className="text-orange-500">
                <svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="48" y1="80" x2="208" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="48" y1="176" x2="208" y2="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
              </span>
            </h1>
            <p className="text-sm sm:text-lg text-neutral-400 max-w-2xl mx-auto text-center mb-8">
              Jelajahi koleksi produk yang tersedia di ThreadCycle dan temukan pakaian bekas berkualitas dengan harga yang terjangkau.
            </p>

            <div className="flex flex-wrap -mx-2 lg:-mx-4 -mb-8 items-center">
              <div className="w-full sm:w-3/12 px-2 lg:px-4 mb-4 lg:mb-8">
                <img className="block rounded-xl w-full" src="/img/products/3.png" alt="" />
              </div>
              <div className="w-full sm:w-6/12 px-2 lg:px-4 mb-4 lg:mb-8">
                <div className="flex flex-wrap -mx-2 md:-mx-4 mb-4 lg:mb-8">
                  <div className="w-2/3 px-2 lg:px-4">
                    <img className="block rounded-xl w-full" src="/img/products/6.png" alt="" />
                  </div>
                  <div className="w-1/3 px-2 lg:px-4 self-end">
                    <img className="block rounded-xl w-full" src="/img/products/5.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-2 md:-mx-4">
                  <div className="w-1/3 px-2 lg:px-4">
                    <img className="block rounded-xl w-full" src="/img/products/1.png" alt="" />
                  </div>
                  <div className="w-2/3 px-2 lg:px-4">
                    <img className="block rounded-xl w-full" src="/img/products/2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-3/12 px-2 lg:px-4 mb-4 lg:mb-8">
                <img className="rounded-xl w-full bg-coolGray-100" src="/img/products/4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-800 dark:text-white mb-4 flex justify-center items-center text-center">
            <span className="text-orange-500">
              <svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="48" y1="80" x2="208" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="48" y1="176" x2="208" y2="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
            </span>
            <span>Apa Kata Mereka?</span>
            <span className="text-orange-500">
              <svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="48" y1="80" x2="208" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="48" y1="176" x2="208" y2="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
            </span>
          </h1>
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </section>

      <section>
        <UpcomingEvents />
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-800 dark:text-white mb-4 flex justify-center items-center text-center">
            Download Aplikasi ThreadCycle
          </h1>
          <p className="text-sm sm:text-lg text-neutral-400 max-w-2xl mx-auto text-center mb-8">
            Dapatkan pengalaman berbelanja yang lebih mudah dan nyaman dengan aplikasi ThreadCycle
          </p>
        </div>

        <div>
          <Image src={"/img/application-mockup.png"} alt="Application Mockup" width={800} height={400} className="mx-auto max-w-60" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <Image src="/img/app-store.svg" alt="App Store" width={150} height={60} />
          </div>
          <div className="flex flex-col items-center">
            <Image src="/img/playstore.svg" alt="Google Play" width={150} height={60} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;