import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Office",
    "Dining Room",
    "Children's Room",
    "Living Room",
    "Bedroom",
    "Kitchen",
    "Bathroom",
    "Others",
  ];

  const portfolioItems = [
    {
      title: "Modern Minimalist Kitchen Design",
      category: "Kitchen",
      images: [
        "https://i.pinimg.com/736x/46/4e/9e/464e9e8f05e53281a01584395c67024e.jpg",
        "https://i.pinimg.com/736x/82/15/07/8215072116e6720408a12e3cf3c4099b.jpg",
        "https://i.pinimg.com/736x/d1/13/e1/d113e1d9d8a371da6e33603a0869bfb4.jpg",
        "https://i.pinimg.com/736x/c9/7e/b9/c97eb93dd20cd4fb30dae7f84643e9da.jpg",
      ],
      gallery: [
        "https://i.pinimg.com/736x/f3/c3/97/f3c397ae1bb673f6c922fa2eae4a5d87.jpg",
        "https://i.pinimg.com/736x/54/bb/05/54bb05e99bd91f68b938fbc9027df5d9.jpg",
        "https://i.pinimg.com/736x/d1/59/e9/d159e9b70c5d871f9a85c32bc25ce3a5.jpg",
        "https://i.pinimg.com/736x/c4/08/08/c40808a989a9abc24470c8a446e776e1.jpg",
      ],
    },
    {
      title: "Luxury Living Room Interior",
      category: "Living Room",
      images: [
        "https://i.pinimg.com/736x/af/01/bd/af01bddb705257d6babb1df1605c1035.jpg",
        "https://i.pinimg.com/736x/ba/d4/02/bad40200b3ead7f7f0a5aa1ddc50c49b.jpg",
        "https://i.pinimg.com/736x/66/0d/f6/660df693d934272a58cffce3e3074da4.jpg",
        "https://i.pinimg.com/736x/a2/ad/7a/a2ad7a69b5a36225a775e39360ca747f.jpg",
      ],
      gallery: [
        "https://i.pinimg.com/736x/5b/f9/bf/5bf9bf96f859dcb4241b9a330cbe5cca.jpg",
        "https://i.pinimg.com/736x/ff/41/1d/ff411d66836ea2f1b5ab8a4c7eb63af5.jpg",
        "https://i.pinimg.com/736x/b7/7f/80/b77f80efacb74cdc29284c91eac019a6.jpg",
        "https://i.pinimg.com/736x/ee/a9/60/eea960656410af2a73b008575291106d.jpg",
      ],
    },
    {
      title: "Elegant Master Bedroom Decor",
      category: "Bedroom",
      images: [
        "https://i.pinimg.com/736x/35/d1/3e/35d13e35d3920a6851dab1a2367d7c2a.jpg",
        "https://i.pinimg.com/736x/24/91/be/2491be75712abe0666a4d7e7e0969d64.jpg",
        "https://i.pinimg.com/736x/9b/d9/95/9bd9950300aa259ad3a8cdba04cfe481.jpg",
        "https://i.pinimg.com/736x/14/7d/72/147d7214e20ba3e73de762b06018a042.jpg",
      ],
      gallery: [
        "https://i.pinimg.com/736x/56/a8/b6/56a8b65777f26fbd5c00b15dbaf672a1.jpg",
        "https://i.pinimg.com/736x/e7/73/96/e77396ff0e0a3d2c72778d71bab40bf7.jpg",
        "https://i.pinimg.com/736x/12/ff/6c/12ff6c175e02ffd1fc5104a16a9ba190.jpg",
        "https://i.pinimg.com/736x/4f/c6/2c/4fc62cfab2a5d2cc3bdd5a584e08e2ce.jpg",
      ],
    },
    {
      title: "Stylish Dining Room Setup",
      category: "Dining Room",
      images: [
        "https://i.pinimg.com/736x/22/e9/22/22e922640c7450433cb3a61d41e8655c.jpg",
        "https://i.pinimg.com/736x/8d/9e/98/8d9e9826d84381be85c34f7d897e5a3b.jpg",
        "https://i.pinimg.com/736x/e0/54/c5/e054c5b7934d33bfb4b3cfc692b71fa1.jpg",
        "https://i.pinimg.com/736x/bd/ca/6d/bdca6d86661a99270060d4c6194bcb23.jpg",
      ],
      gallery: [
        "https://i.pinimg.com/736x/04/a0/89/04a089a0690395f9ecfd141288db4723.jpg",
        "https://i.pinimg.com/736x/81/69/8d/81698d50d950d3d50981ad4c152b16b9.jpg",
        "https://i.pinimg.com/736x/95/37/cb/9537cb3b74185e8b4c52f748caa79e7a.jpg",
        "https://i.pinimg.com/736x/61/e7/c7/61e7c705552481fbdd5a2213727e3fec.jpg",
      ],
    },
    {
      title: "Luxurious Bathroom Interiors",
      category: "Bathroom",
      images: [
        "https://i.pinimg.com/736x/b2/ab/79/b2ab79dd9819477b1c4ccdf7d4430c2f.jpg",
        "https://i.pinimg.com/736x/1e/0f/f3/1e0ff3f227c96c026387311bee6f708e.jpg",
        "https://i.pinimg.com/736x/92/cb/0d/92cb0d844c836a68ea8cc0a299906208.jpg",
        "https://i.pinimg.com/736x/ff/db/9e/ffdb9e675856170957494e80e9cf1dfa.jpg",
      ],
      gallery: [
        "https://i.pinimg.com/736x/f9/fd/93/f9fd93bcb30f193dd9f842e6826e323f.jpg",
        "https://i.pinimg.com/736x/19/02/8c/19028ce049a0e40075a243f7f84f005d.jpg",
        "https://i.pinimg.com/736x/7b/45/6d/7b456d1012280aac3fcb1b31b099dd9f.jpg",
        "https://i.pinimg.com/736x/04/85/0e/04850e4bfddc96ea79217b70a07a79e3.jpg",
      ],
    },
    {
      title: "Unique & Custom Designs",
      category: "Others",
      images: [
        "https://i.pinimg.com/736x/72/41/43/724143e17343eaf709a29c15ef3dd75d.jpg",
        "https://i.pinimg.com/736x/7a/58/10/7a581082a85652349c028d99f2da39b3.jpg",
        "https://i.pinimg.com/736x/1f/b4/21/1fb421794a4a7609d52ac6cf29485f39.jpg",
        "https://i.pinimg.com/736x/b7/8d/e9/b78de9907dd20ddc661e1e02050bb538.jpg",
      ],
      gallery: [
        "https://i.pinimg.com/736x/3a/cb/e7/3acbe723db5832006469be6191e5faf5.jpg",
        "https://i.pinimg.com/736x/6b/52/45/6b52455a85f11b86bf9aa152adbde22a.jpg",
        "https://i.pinimg.com/736x/1d/d9/55/1dd955376cf6f89283f5ee8778a54ccc.jpg",
        "https://i.pinimg.com/736x/ad/f4/a1/adf4a12a149549fdf9ef210a3e1d3f7f.jpg",
      ],
    },
    {
      title: "Productive Office Workspace Setup",
      category: "Office",
      images: [
        "https://i.pinimg.com/736x/81/5e/23/815e23a343d7cde05f467503368a7657.jpg",
        "https://i.pinimg.com/736x/8f/0e/4f/8f0e4f9981072781cce5804c433400eb.jpg",
        "https://i.pinimg.com/736x/61/87/93/6187936e1c248e7aeb2ecafdb118c627.jpg",
        "https://i.pinimg.com/736x/ab/52/fc/ab52fc3be352828517d419cdf1e25a6d.jpg",
      ],
      gallery: [
        "https://i.pinimg.com/736x/72/a7/de/72a7de1f644a314fa8d0eea1fb72c7d7.jpg",
        "https://i.pinimg.com/736x/3f/27/a0/3f27a0e9b488526f4cb4161a51580835.jpg",
        "https://i.pinimg.com/736x/27/f2/42/27f242ee07b4ffe00600b57f3ae97b3e.jpg",
        "https://i.pinimg.com/736x/40/2a/b6/402ab660bba64a8880c64d5cc8d17821.jpg",
      ],
    },
    {
      title: "Creative Children's Room Design",
      category: "Children's Room",
      images: [
        "https://i.pinimg.com/736x/28/65/d7/2865d76e5baf793aea4abec7b68a65ef.jpg",
        "https://i.pinimg.com/736x/05/ab/5c/05ab5cc39e78436b0a78804653dec72a.jpg",
        "https://i.pinimg.com/736x/c2/af/cf/c2afcf9c50935e4e4436a8591a21e742.jpg",
        "https://i.pinimg.com/736x/53/25/3e/53253eb3bfe9834410cdee74f270c077.jpg",
      ],
      gallery: [
        "https://i.pinimg.com/736x/ac/78/8a/ac788a6e424db82e8c495d69976e7f1e.jpg",
        "https://i.pinimg.com/736x/24/09/80/2409803e74c7651ee5b205ade44d4aa3.jpg",
        "https://i.pinimg.com/736x/bc/08/9d/bc089ddb0f16cb48600ceb6900c1ac0b.jpg",
        "https://i.pinimg.com/736x/57/5c/3e/575c3e4d35ac65a6c7ff6c40d3f2bd14.jpg",
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f8f6f2] text-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Category Filter Buttons - Enhanced Responsive Layout */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 overflow-x-auto">
          <div className="w-full flex justify-center flex-wrap gap-2 sm:gap-3 px-1 py-2">
            {categories.map((category, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-full font-semibold transition-all duration-300 border shadow-sm hover:shadow-md whitespace-nowrap
                ${
                  selectedCategory === category
                    ? "bg-[#D9B382] text-white border-transparent"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-[#f0e7dc]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Sections */}
        <AnimatePresence>
          {portfolioItems
            .filter(
              (item) =>
                selectedCategory === "All" || item.category === selectedCategory
            )
            .map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10 sm:mb-16 md:mb-20"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-[#8B5E3C] px-2">
                  {item.title}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <ImageCarousel images={item.images} />
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    {item.gallery.map((img, i) => (
                      <div
                        key={i}
                        className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300"
                      >
                        <img
                          src={img}
                          alt="Gallery"
                          className="w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] xl:h-[220px] object-cover rounded-lg sm:rounded-xl"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Carousel for Main Image Section - Enhanced for Responsiveness
const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] xl:h-[400px] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg">
      <motion.img
        key={index}
        src={images[index]}
        alt="Carousel"
        className="w-full h-full object-cover"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 rounded-lg sm:rounded-xl lg:rounded-2xl pointer-events-none" />

      {/* Navigation Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
              index === i ? "bg-white scale-110" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
