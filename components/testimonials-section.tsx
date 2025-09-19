import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "Canada",
      university: "University of Toronto",
      quote:
        "Amber Education made my dream of studying in Canada a reality. Their guidance through the visa process was exceptional!",
      image: "/smiling-student.png",
    },
    {
      name: "Raj Patel",
      country: "Australia",
      university: "University of Melbourne",
      quote:
        "The team at Amber Education provided personalized support that helped me secure admission to my dream university.",
      image: "/placeholder-hxezg.png",
    },
    {
      name: "Maria Garcia",
      country: "United Kingdom",
      university: "Oxford University",
      quote: "From application to arrival, Amber Education was with me every step of the way. Highly recommended!",
      image: "/placeholder-p3wff.png",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Student <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear from students who achieved their dreams with our guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-card-foreground text-lg">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.university}</p>
                    <p className="text-primary text-sm font-medium">{testimonial.country}</p>
                  </div>
                </div>
                <blockquote className="text-card-foreground italic leading-relaxed">"{testimonial.quote}"</blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">Join thousands of successful students worldwide</p>
          <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            Read More Stories
          </button>
        </div>
      </div>
    </section>
  )
}
