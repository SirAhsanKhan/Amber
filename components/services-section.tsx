import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      title: "Visa Consultation",
      description:
        "Expert guidance through the complex visa application process with personalized support for each country's requirements.",
      icon: "🛂",
    },
    {
      title: "University Placement",
      description:
        "Find the perfect university match based on your academic goals, budget, and career aspirations across 150+ countries.",
      icon: "🎓",
    },
    {
      title: "Pre-Departure Guidance",
      description:
        "Comprehensive preparation including accommodation, travel arrangements, and cultural orientation for your new journey.",
      icon: "✈️",
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive support at every step of your international education journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-card">
              <CardHeader className="pb-4">
                <div className="text-6xl mb-4">{service.icon}</div>
                <CardTitle className="text-2xl font-bold text-primary mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-card-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">Ready to take the next step in your educational journey?</p>
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  )
}
