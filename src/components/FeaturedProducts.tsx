
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Smart Watch Pro",
    description: "Track your fitness, receive notifications, and more with our advanced smart watch.",
    imageSrc: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "299.99"
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    description: "Immersive sound quality with noise cancellation and long battery life.",
    imageSrc: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "149.99"
  },
  {
    id: 3,
    name: "Ultra HD Drone",
    description: "Capture stunning aerial footage with our easy-to-fly drone and 4K camera.",
    imageSrc: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "699.99"
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-tech-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-dark-blue">Featured Products</h2>
          <p className="mt-4 text-lg text-gray-600">Discover our latest and most popular electronic gadgets</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.imageSrc} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription className="text-lg font-medium text-tech-blue">
                  ${product.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{product.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-tech-blue hover:bg-tech-dark-blue">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-light-blue">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
