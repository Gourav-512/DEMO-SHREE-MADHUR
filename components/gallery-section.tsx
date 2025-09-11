"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Camera, Play, X, ChevronLeft, ChevronRight, Download, Share2, Heart, Eye } from "lucide-react"
import { useState } from "react"

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [favorites, setFavorites] = useState<number[]>([])

  const categories = ["All", "Shop Interior", "Tea Making", "Events", "Franchise Partners", "Products"]

  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "Shop Interior",
      title: "Modern Tea Shop Interior",
      titleMr: "आधुनिक चहा दुकान इंटीरियर",
      description: "Beautifully designed tea shop with traditional and modern elements",
      descriptionMr: "पारंपरिक आणि आधुनिक घटकांसह सुंदर डिझाइन केलेली चहा दुकान",
      url: "/modern-tea-shop-interior-with-traditional-elements.jpg",
      views: 1250,
      likes: 89,
    },
    {
      id: 2,
      type: "image",
      category: "Tea Making",
      title: "Traditional Tea Preparation",
      titleMr: "पारंपरिक चहा तयारी",
      description: "Master chef preparing authentic Indian chai with traditional methods",
      descriptionMr: "पारंपरिक पद्धतीने अस्सल भारतीय चहा तयार करणारे मास्टर शेफ",
      url: "/traditional-indian-tea-preparation-with-spices-and.jpg",
      views: 2100,
      likes: 156,
    },
    {
      id: 3,
      type: "video",
      category: "Tea Making",
      title: "Chai Making Process",
      titleMr: "चहा बनवण्याची प्रक्रिया",
      description: "Step-by-step process of making perfect chai",
      descriptionMr: "परफेक्ट चहा बनवण्याची चरणबद्ध प्रक्रिया",
      url: "/tea-making-process-video-thumbnail.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: 3500,
      likes: 245,
    },
    {
      id: 4,
      type: "image",
      category: "Products",
      title: "Premium Tea Collection",
      titleMr: "प्रीमियम चहा कलेक्शन",
      description: "Our signature tea blends and premium ingredients",
      descriptionMr: "आमचे सिग्नेचर चहा मिश्रण आणि प्रीमियम घटक",
      url: "/premium-tea-collection-with-various-tea-types-and-.jpg",
      views: 1800,
      likes: 134,
    },
    {
      id: 5,
      type: "image",
      category: "Events",
      title: "Grand Opening Celebration",
      titleMr: "भव्य उद्घाटन समारंभ",
      description: "Celebrating the opening of our new franchise outlet",
      descriptionMr: "आमच्या नवीन फ्रँचायझी आउटलेटच्या उद्घाटनाचा उत्सव",
      url: "/tea-shop-grand-opening-celebration-with-people-and.jpg",
      views: 950,
      likes: 78,
    },
    {
      id: 6,
      type: "image",
      category: "Franchise Partners",
      title: "Successful Franchise Partner",
      titleMr: "यशस्वी फ्रँचायझी पार्टनर",
      description: "Meet our successful franchise partner from Mumbai",
      descriptionMr: "मुंबईतील आमच्या यशस्वी फ्रँचायझी पार्टनरला भेटा",
      url: "/successful-tea-shop-franchise-owner-with-their-out.jpg",
      views: 1400,
      likes: 102,
    },
    {
      id: 7,
      type: "video",
      category: "Franchise Partners",
      title: "Partner Success Story",
      titleMr: "पार्टनर यशाची कहाणी",
      description: "Hear from our franchise partner about their journey",
      descriptionMr: "आमच्या फ्रँचायझी पार्टनरकडून त्यांच्या प्रवासाबद्दल ऐका",
      url: "/franchise-partner-testimonial-video-thumbnail.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: 2800,
      likes: 198,
    },
    {
      id: 8,
      type: "image",
      category: "Shop Interior",
      title: "Cozy Seating Area",
      titleMr: "आरामदायक बसण्याची जागा",
      description: "Comfortable seating arrangement for customers",
      descriptionMr: "ग्राहकांसाठी आरामदायक बसण्याची व्यवस्था",
      url: "/cozy-tea-shop-seating-area-with-traditional-indian.jpg",
      views: 1100,
      likes: 85,
    },
    {
      id: 9,
      type: "image",
      category: "Products",
      title: "Fresh Ingredients",
      titleMr: "ताजे घटक",
      description: "Fresh spices and ingredients used in our teas",
      descriptionMr: "आमच्या चहामध्ये वापरले जाणारे ताजे मसाले आणि घटक",
      url: "/fresh-tea-ingredients-spices-cardamom-ginger.jpg",
      views: 1600,
      likes: 112,
    },
  ]

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const toggleFavorite = (itemId: number) => {
    setFavorites((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredItems[newIndex].id)
  }

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
            <span className="block font-display text-2xl text-primary mb-2">गॅलरी</span>
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our beautiful tea shops, authentic tea-making process, and memorable moments with our franchise
            partners and customers.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Image/Video Thumbnail */}
                <img
                  src={item.url || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Type Badge */}
                <Badge className="absolute top-3 left-3 z-10">
                  {item.type === "video" ? (
                    <>
                      <Play className="w-3 h-3 mr-1" /> Video
                    </>
                  ) : (
                    <>
                      <Camera className="w-3 h-3 mr-1" /> Photo
                    </>
                  )}
                </Badge>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-3 right-3 z-10 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart
                    className={`w-4 h-4 ${favorites.includes(item.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"}`}
                  />
                </button>

                {/* View Button */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      onClick={() => setSelectedImage(item.id)}
                      className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        {item.type === "video" ? (
                          <Play className="w-6 h-6 text-primary-foreground" />
                        ) : (
                          <Eye className="w-6 h-6 text-primary-foreground" />
                        )}
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0">
                    <div className="relative">
                      {/* Close Button */}
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>

                      {/* Navigation Buttons */}
                      <button
                        onClick={() => navigateImage("prev")}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => navigateImage("next")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Media Content */}
                      {item.type === "video" ? (
                        <div className="aspect-video">
                          <iframe src={item.videoUrl} className="w-full h-full" allowFullScreen title={item.title} />
                        </div>
                      ) : (
                        <img
                          src={item.url || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-auto max-h-[80vh] object-contain"
                        />
                      )}

                      {/* Media Info */}
                      <div className="p-6 bg-background">
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                          <p className="text-sm text-primary font-display">{item.titleMr}</p>
                          <p className="text-muted-foreground">{item.description}</p>
                          <p className="text-sm text-primary font-display">{item.descriptionMr}</p>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {item.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {item.likes}
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Share2 className="w-4 h-4 mr-1" />
                              Share
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Stats Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {item.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    {item.likes}
                  </span>
                </div>
              </div>

              <CardContent className="p-4 space-y-2">
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground text-sm line-clamp-1">{item.title}</h3>
                  <p className="text-xs text-primary font-display line-clamp-1">{item.titleMr}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {item.views}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Images
          </Button>
        </div>

        {/* Gallery Stats */}
        <div className="mt-16 bg-card rounded-lg p-8 max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Photos</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Videos</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Outlets Featured</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
