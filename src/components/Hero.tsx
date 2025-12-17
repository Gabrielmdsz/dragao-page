import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-muaythai.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Já pensou em se sentir mais forte, confiante e focado?
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-foreground/90">
            Vem treinar com a gente.
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Na <span className="font-semibold text-primary-foreground">Equipe Dragão Vermelho</span>, o treino vai além da luta: é transformação de corpo e mente.
            Com aulas conduzidas pessoalmente pelo Professor Cleiton Rodrigo, você vai descobrir o poder do Muay Thai 
            em um ambiente acolhedor, respeitoso e sem pressa no seu ritmo, do seu jeito.
          </p>
          
          <div className="pt-4">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-10 py-6 h-auto"
            >
              👉 Agende sua aula experimental gratuita
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
