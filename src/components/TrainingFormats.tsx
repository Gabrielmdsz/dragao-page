import { Users, User, Clock, Target, Calendar, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TrainingFormats = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Do seu jeito. No seu ritmo. Com o seu foco.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Aulas em Grupo */}
          <Card className="shadow-card border-2 hover:border-primary transition-smooth">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <Badge variant="secondary" className="text-sm">Grupo</Badge>
              </div>
              <CardTitle className="text-2xl md:text-3xl">Aulas em Grupo</CardTitle>
              <CardDescription className="text-lg font-medium text-foreground/70">
                Energia coletiva, evolução constante
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Para quem é:
                </h4>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✔</span>
                    <span>Iniciantes e intermediários e Avançados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✔</span>
                    <span>Quem gosta de treinar com outras pessoas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✔</span>
                    <span>Quer manter a constância com horários fixos</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Como funciona:
                </h4>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Grupos pequenos, com atenção individual</li>
                  <li>• Ritmo adaptado ao nível de cada aluno</li>
                  <li>• Treinos que combinam técnica, resistência e disciplina</li>
                  <li>• Clima de equipe, motivação e amizade</li>
                </ul>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Horários disponíveis:
                </h4>
                <div className="space-y-2 text-foreground/80">
                  <p>🕐 <strong>Segunda a Sexta:</strong> 08h | 14h | 19h</p>
                </div>
              </div>
              
              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                <p className="italic text-foreground/90">
                  "Você não entra sozinho no ringue – entra com a força da equipe."
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Aulas Personalizadas */}
          <Card className="shadow-card border-2 hover:border-accent transition-smooth">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-accent/10 p-3 rounded-full">
                  <User className="w-8 h-8 text-accent" />
                </div>
                <Badge variant="secondary" className="text-sm">Individual</Badge>
              </div>
              <CardTitle className="text-2xl md:text-3xl">Aulas Personalizadas</CardTitle>
              <CardDescription className="text-lg font-medium text-foreground/70">
                Um treino só pra você
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" />
                  Para quem é:
                </h4>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✔</span>
                    <span>Iniciantes que preferem privacidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✔</span>
                    <span>Atletas que desejam performance e evolução rápida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✔</span>
                    <span>Horários flexíveis para rotinas corridas</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  Como funciona:
                </h4>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Sessões 100% individuais com o Professor Cleiton Rodrigo</li>
                  <li>• Treinos moldados para seu condicionamento e metas</li>
                  <li>• Foco técnico, físico e mental, com progressão personalizada</li>
                  <li>• Voltado para emagrecimento, preparação para lutas, ganho de performance ou bem-estar</li>
                </ul>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  Agendamento:
                </h4>
                <div className="space-y-2 text-foreground/80">
                  <p>📆 Treinos de Segunda a Sábado</p>
                  <p>📱 Flexibilidade total – combinamos os melhores dias e horários com você</p>
                </div>
              </div>
              
              <div className="bg-accent/5 p-4 rounded-lg border-l-4 border-accent">
                <p className="italic text-foreground/90">
                  "Aqui, cada soco, cada passo e cada avanço é só seu. E eu estarei ao seu lado."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              🎯 Quer sentir a diferença de verdade?
            </h3>
            <p className="text-lg text-foreground/80 mb-6">
              Agende agora sua aula experimental gratuita – em grupo ou personalizada.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToContact}
              className="text-lg px-10 py-6 h-auto"
            >
              📲 Quero fazer uma aula gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingFormats;
