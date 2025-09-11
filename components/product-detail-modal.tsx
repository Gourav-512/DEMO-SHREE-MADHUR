"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Heart, ShoppingCart, Clock, Users } from "lucide-react"

interface Product {
  id: number
  name: string
  nameMr: string
  category: string
  price: string
  description: string
  descriptionMr: string
  rating: number
  popular: boolean
  ingredients: string[]
}

interface ProductDetailModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
  onAddToCart: (productId: number) => void
  onToggleFavorite: (productId: number) => void
  isFavorite: boolean
}

export function ProductDetailModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
}: ProductDetailModalProps) {
  if (!product) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">
            <span className="block">{product.name}</span>
            <span className="block text-lg font-display text-primary">{product.nameMr}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="aspect-square bg-gradient-to-br from-card to-accent/20 rounded-lg flex items-center justify-center">
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-4xl">🫖</span>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant={product.popular ? "default" : "outline"}>{product.category}</Badge>
              {product.popular && <Badge className="bg-accent text-accent-foreground">Popular</Badge>}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.rating}/5)</span>
            </div>

            <div className="space-y-2">
              <p className="text-muted-foreground">{product.description}</p>
              <p className="text-primary font-display text-sm">{product.descriptionMr}</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Ingredients:</h4>
              <div className="flex flex-wrap gap-1">
                {product.ingredients.map((ingredient, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <span className="text-2xl font-bold text-accent">{product.price}</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => onToggleFavorite(product.id)}>
                  <Heart className={`w-4 h-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
                <Button onClick={() => onAddToCart(product.id)}>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>5-7 mins</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>Serves 1</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
