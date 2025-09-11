"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Play, Clock, Eye, ThumbsUp } from "lucide-react"
import { useState } from "react"

export function VideoGallerySection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const videos = [
    {
      id: "video1",
      title: "How We Make Perfect Chai",
      titleMr: "आम्ही परफेक्ट चहा कसा बनवतो",
      description: "Step-by-step process of making our signature chai with traditional methods",
      descriptionMr: "पारंपरिक पद्धतीने आमचा सिग्नेचर चहा बनवण्याची चरणबद्ध प्रक्रिया",
      thumbnail: "/tea-making-process-in-traditional-indian-kitchen.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "5:32",
      views: 15420,
      likes: 892,
      category: "Tea Making",
    },
    {
      id: "video2",
      title: "Franchise Success Story - Mumbai",
      titleMr: "फ्रँचायझी यशाची कहाणी - मुंबई",
      description: "Meet Rajesh Patil, our successful franchise partner from Mumbai",
      descriptionMr: "मुंबईतील आमचे यशस्वी फ्रँचायझी पार्टनर राजेश पाटील यांना भेटा",
      thumbnail: "/successful-tea-shop-franchise-owner-testimonial.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "3:45",
      views: 8750,
      likes: 456,
      category: "Success Stories",
    },
    {
      id: "video3",
      title: "Behind the Scenes - Tea Shop Setup",
      titleMr: "पडद्यामागे - चहा दुकान सेटअप",
      description: "Complete setup process of a new franchise outlet from start to finish",
      descriptionMr: "नवीन फ्रँचायझी आउटलेटची सुरुवातीपासून शेवटपर्यंतची संपूर्ण सेटअप प्रक्रिया",
      thumbnail: "/tea-shop-interior-setup-and-decoration-process.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "8:15",
      views: 12300,
      likes: 678,
      category: "Setup Process",
    },
    {
      id: "video4",
      title: "Customer Reviews & Testimonials",
      titleMr: "ग्राहक पुनरावलोकने आणि प्रशंसापत्रे",
      description: "Hear what our customers say about their experience with Shree Madhur",
      descriptionMr: "श्री मधुरसोबतच्या त्यांच्या अनुभवाबद्दल आमचे ग्राहक काय म्हणतात ते ऐका",
      thumbnail: "/happy-customers-enjoying-tea-testimonials.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "4:20",
      views: 9850,
      likes: 523,
      category: "Testimonials",
    },
    {
      id: "video5",
      title: "Traditional Spice Preparation",
      titleMr: "पारंपरिक मसाला तयारी",
      description: "Learn about the traditional spices and ingredients we use in our teas",
      descriptionMr: "आमच्या चहामध्ये आम्ही वापरत असलेले पारंपरिक मसाले आणि घटकांबद्दल जाणून घ्या",
      thumbnail: "/traditional-indian-spices-preparation-for-tea.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "6:10",
      views: 7200,
      likes: 389,
      category: "Tea Making",
    },
    {
      id: "video6",
      title: "Grand Opening - Pune Outlet",
      titleMr: "भव्य उद्घाटन - पुणे आउटलेट",
      description: "Highlights from the grand opening of our newest franchise in Pune",
      descriptionMr: "पुण्यातील आमच्या नवीनतम फ्रँचायझीच्या भव्य उद्घाटनातील मुख्य आकर्षणे",
      thumbnail: "/tea-shop-grand-opening-celebration-with-crowd.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "2:55",
      views: 5600,
      likes: 298,
      category: "Events",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
            <span className="block font-display text-2xl text-primary mb-2">व्हिडिओ गॅलरी</span>
            Video Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Watch our tea-making process, success stories, and behind-the-scenes moments from our franchise partners
            across India.
          </p>
        </div>

        {/* Featured Video */}
        {selectedVideo && (
          <div className="mb-16 max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={videos.find((v) => v.id === selectedVideo)?.videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                  title="Featured Video"
                />
              </div>
              <CardContent className="p-6">
                {(() => {
                  const video = videos.find((v) => v.id === selectedVideo)
                  return video ? (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">{video.title}</h3>
                        <p className="text-sm text-primary font-display">{video.titleMr}</p>
                        <p className="text-muted-foreground">{video.description}</p>
                        <p className="text-sm text-primary font-display">{video.descriptionMr}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {video.views.toLocaleString()} views
                          </span>
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="w-4 h-4" />
                            {video.likes.toLocaleString()} likes
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {video.duration}
                          </span>
                        </div>

                        <Badge>{video.category}</Badge>
                      </div>
                    </div>
                  ) : null
                })()}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Video Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video) => (
                <CarouselItem key={video.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="relative aspect-video overflow-hidden" onClick={() => setSelectedVideo(video.id)}>
                      {/* Thumbnail */}
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <Badge className="absolute bottom-3 right-3 bg-black/70 text-white">
                        <Clock className="w-3 h-3 mr-1" />
                        {video.duration}
                      </Badge>

                      {/* Category Badge */}
                      <Badge className="absolute top-3 left-3">{video.category}</Badge>
                    </div>

                    <CardContent className="p-4 space-y-3">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-xs text-primary font-display line-clamp-1">{video.titleMr}</p>
                        <p className="text-xs text-muted-foreground line-clamp-2">{video.description}</p>
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {video.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-3 h-3" />
                          {video.likes.toLocaleString()}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more videos? Subscribe to our YouTube channel for the latest updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Play className="w-4 h-4 mr-2" />
              Subscribe on YouTube
            </Button>
            <Button variant="outline" size="lg">
              View All Videos
            </Button>
          </div>
        </div>

        {/* Video Stats */}
        <div className="mt-16 bg-card rounded-lg p-8 max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Videos</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">100K+</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">5K+</div>
              <div className="text-sm text-muted-foreground">Subscribers</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Hours of Content</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
