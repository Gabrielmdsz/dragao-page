import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lucas M.",
      text: "Comecei sem saber nada e hoje o Muay Thai virou parte da minha vida. O Cleiton é um professor que realmente se importa."
    },
    {
      name: "Camila R.",
      text: "A aula personalizada mudou meu condicionamento e minha autoestima. Recomendo de olhos fechados!"
    },
    {
      name: "João F.",
      text: "Ambiente acolhedor, respeitoso, sem julgamentos. Me senti em casa desde o primeiro dia."
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Quem treina aqui, sente a diferença.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-smooth">
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-primary mb-4" />
                <p className="text-lg text-foreground/80 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-foreground">
                  – {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-hero p-12 rounded-2xl max-w-3xl mx-auto shadow-glow">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Você não precisa estar pronto.
            </h3>
            <h4 className="text-2xl md:text-3xl font-semibold text-primary/90 mb-6">
              Só precisa começar.
            </h4>
            <p className="text-lg text-primary/80 mb-8 leading-relaxed">
              Agende sua aula experimental gratuita e venha sentir a energia da Equipe Dragão Vermelho.
              <br />
              É o primeiro passo para uma nova versão de você.
            </p>
            <a href="https://wa.me/5581984060944?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20os%20planos%20de%20aulas%20de%20luta.
">
            <Button 
              variant="accent" 
              size="lg"
              onClick={scrollToContact}
              className="w-full md:w-auto max-w-full whitespace-normal text-base md:text-lg px-4 md:px-10 py-6 h-auto m-auto flex items-center justify-center gap-2"

            >
              ✅ Quero fazer uma aula experimental
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
