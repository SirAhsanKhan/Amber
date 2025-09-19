import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder-o7hz5.png')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Transform Your Future – Study Abroad in <span className="text-accent">150+ Countries</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty leading-relaxed max-w-3xl mx-auto">
            Your journey to global education starts here. We are your trusted partner in making dreams come true through
            world-class education opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-4 text-lg"
            >
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 text-lg bg-transparent"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">150+</div>
              <div className="text-primary-foreground/90">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">10,000+</div>
              <div className="text-primary-foreground/90">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-primary-foreground/90">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
