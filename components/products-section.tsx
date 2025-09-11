"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ShoppingCart, Heart, Star, Coffee, Milk, Droplets, Cookie } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Special Desi Chai",
      nameMr: "स्पेशल देसी चहा",
      category: "Hot Tea",
      price: "₹15",
      description: "Traditional Indian tea with perfect blend of spices",
      descriptionMr: "मसाल्यांचे परिपूर्ण मिश्रण असलेला पारंपरिक भारतीय चहा",
      icon: Coffee,
      rating: 4.8,
      popular: true,
      ingredients: ["Tea Leaves", "Milk", "Sugar", "Cardamom", "Ginger"],
    },
    {
      id: 2,
      name: "Jaggery Tea",
      nameMr: "गुळाचा चहा",
      category: "Hot Tea",
      price: "₹18",
      description: "Healthy tea sweetened with natural jaggery",
      descriptionMr: "नैसर्गिक गुळाने गोड केलेला आरोग्यदायी चहा",
      icon: Coffee,
      rating: 4.6,
      popular: false,
      ingredients: ["Tea Leaves", "Milk", "Jaggery", "Cardamom"],
    },
    {
      id: 3,
      name: "Black Tea",
      nameMr: "काळा चहा",
      category: "Hot Tea",
      price: "₹12",
      description: "Pure black tea for the purists",
      descriptionMr: "शुद्धतावाद्यांसाठी शुद्ध काळा चहा",
      icon: Coffee,
      rating: 4.4,
      popular: false,
      ingredients: ["Premium Tea Leaves", "Sugar (Optional)"],
    },
    {
      id: 4,
      name: "Green Tea",
      nameMr: "ग्रीन टी",
      category: "Hot Tea",
      price: "₹20",
      description: "Antioxidant-rich green tea for wellness",
      descriptionMr: "आरोग्यासाठी अँटिऑक्सिडंटने भरपूर ग्रीन टी",
      icon: Coffee,
      rating: 4.7,
      popular: true,
      ingredients: ["Green Tea Leaves", "Honey (Optional)"],
    },
    {
      id: 5,
      name: "Lemon Tea",
      nameMr: "लिंबू चहा",
      category: "Hot Tea",
      price: "₹16",
      description: "Refreshing tea with fresh lemon twist",
      descriptionMr: "ताज्या लिंबाच्या चवीसह ताजेतवाने चहा",
      icon: Coffee,
      rating: 4.5,
      popular: false,
      ingredients: ["Tea Leaves", "Fresh Lemon", "Sugar", "Mint"],
    },
    {
      id: 6,
      name: "Ginger Tea",
      nameMr: "आले चहा",
      category: "Hot Tea",
      price: "₹17",
      description: "Warming ginger tea perfect for cold days",
      descriptionMr: "थंड दिवसांसाठी योग्य गरम आले चहा",
      icon: Coffee,
      rating: 4.6,
      popular: false,
      ingredients: ["Tea Leaves", "Fresh Ginger", "Milk", "Sugar"],
    },
    {
      id: 7,
      name: "Kesar Badam Milk",
      nameMr: "केसर बदाम दूध",
      category: "Hot Drinks",
      price: "₹25",
      description: "Royal saffron almond milk drink",
      descriptionMr: "राजसी केसर बदाम दुधाचे पेय",
      icon: Milk,
      rating: 4.9,
      popular: true,
      ingredients: ["Milk", "Almonds", "Saffron", "Sugar", "Cardamom"],
    },
    {
      id: 8,
      name: "Cold Badam Milk",
      nameMr: "थंड बदाम दूध",
      category: "Cold Drinks",
      price: "₹22",
      description: "Chilled almond milk for hot summer days",
      descriptionMr: "उन्हाळ्याच्या गरम दिवसांसाठी थंड बदाम दूध",
      icon: Milk,
      rating: 4.7,
      popular: false,
      ingredients: ["Chilled Milk", "Almonds", "Sugar", "Ice"],
    },
    {
      id: 9,
      name: "Sugarless Tea",
      nameMr: "साखरेशिवाय चहा",
      category: "Hot Tea",
      price: "₹14",
      description: "Healthy tea without added sugar",
      descriptionMr: "साखर न घालता आरोग्यदायी चहा",
      icon: Coffee,
      rating: 4.3,
      popular: false,
      ingredients: ["Tea Leaves", "Milk", "Natural Sweeteners"],
    },
    {
      id: 10,
      name: "Filter Coffee",
      nameMr: "फिल्टर कॉफी",
      category: "Hot Drinks",
      price: "₹18",
      description: "South Indian style filter coffee",
      descriptionMr: "दक्षिण भारतीय शैलीतील फिल्टर कॉफी",
      icon: Coffee,
      rating: 4.8,
      popular: true,
      ingredients: ["Coffee Powder", "Milk", "Sugar"],
    },
    {
      id: 11,
      name: "Cold Coffee",
      nameMr: "कोल्ड कॉफी",
      category: "Cold Drinks",
      price: "₹30",
      description: "Creamy iced coffee with whipped cream",
      descriptionMr: "व्हिप्ड क्रीमसह मलाईदार बर्फाची कॉफी",
      icon: Coffee,
      rating: 4.9,
      popular: true,
      ingredients: ["Coffee", "Milk", "Ice Cream", "Sugar", "Whipped Cream"],
    },
    {
      id: 12,
      name: "Lemon Mint Sharbat",
      nameMr: "लिंबू पुदीना शर्बत",
      category: "Cold Drinks",
      price: "₹20",
      description: "Refreshing lemon mint cooler",
      descriptionMr: "ताजेतवाने लिंबू पुदीना कूलर",
      icon: Droplets,
      rating: 4.6,
      popular: false,
      ingredients: ["Fresh Lemon", "Mint Leaves", "Sugar", "Ice", "Salt"],
    },
    {
      id: 13,
      name: "Kokam Sharbat",
      nameMr: "कोकम शर्बत",
      category: "Cold Drinks",
      price: "₹22",
      description: "Traditional Maharashtrian kokam drink",
      descriptionMr: "पारंपरिक महाराष्ट्रीयन कोकम पेय",
      icon: Droplets,
      rating: 4.5,
      popular: false,
      ingredients: ["Kokam", "Sugar", "Black Salt", "Cumin", "Ice"],
    },
    {
      id: 14,
      name: "Biscuits",
      nameMr: "बिस्कीट",
      category: "Snacks",
      price: "₹10",
      description: "Crispy tea-time biscuits",
      descriptionMr: "चहाच्या वेळेसाठी कुरकुरीत बिस्कीट",
      icon: Cookie,
      rating: 4.2,
      popular: false,
      ingredients: ["Wheat Flour", "Sugar", "Butter", "Baking Powder"],
    },
    {
      id: 15,
      name: "Seasonal Specials",
      nameMr: "हंगामी विशेष",
      category: "Special",
      price: "₹25",
      description: "Limited time seasonal flavors",
      descriptionMr: "मर्यादित काळासाठी हंगामी चव",
      icon: Star,
      rating: 4.8,
      popular: true,
      ingredients: ["Seasonal Ingredients", "Special Spices"],
    },
  ]

  const categories = ["All", "Hot Tea", "Hot Drinks", "Cold Drinks", "Snacks", "Special"]

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cart, setCart] = useState<number[]>([])
  const [favorites, setFavorites] = useState<number[]>([])

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  const addToCart = (productId: number) => {
    setCart((prev) => [...prev, productId])
  }

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
            <span className="block font-display text-2xl text-primary mb-2">आमची उत्पादने</span>
            Premium Quali-TEA Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our carefully curated selection of premium teas, refreshing beverages, and delicious snacks. Each
            product is crafted with love and authentic ingredients.
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

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden relative"
            >
              {/* Popular Badge */}
              {product.popular && (
                <Badge className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground">Popular</Badge>
              )}

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-3 right-3 z-10 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors"
              >
                <Heart
                  className={`w-4 h-4 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"}`}
                />
              </button>

              <div className="aspect-square bg-gradient-to-br from-card to-accent/20 flex items-center justify-center relative">
                {/* Product Icon */}
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-10 h-10 text-primary" />
                </div>

                {/* Category Badge */}
                <Badge className="absolute bottom-3 right-3 text-xs">{product.category}</Badge>
              </div>

              <CardContent className="p-4 space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-accent text-accent" />
                      <span className="text-xs text-muted-foreground">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-primary font-display">{product.nameMr}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-accent">{product.price}</span>
                  <Button size="sm" onClick={() => addToCart(product.id)} className="text-xs">
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-lg border">
              <ShoppingCart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{cart.length} items in cart</span>
              <Button size="sm" variant="outline">
                View Cart
              </Button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see our complete menu? Visit our store or contact us for bulk orders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">View Full Menu</Button>
            <Button variant="outline" size="lg">
              Bulk Order Enquiry
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
