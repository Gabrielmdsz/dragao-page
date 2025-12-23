import ImageProf from '@/assets/professor.png';

const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              A direção certa faz qualquer força valer.
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-primary">
              Vem comigo.
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Sou o <span className="font-semibold text-foreground">Cleiton Rodrigo</span>, professor e treinador da Equipe Dragão Vermelho. 
                Aqui, cada aluno é acompanhado de perto seja nas aulas em grupo ou nas sessões personalizadas.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Não existe anonimato: você não é só mais um. Meu compromisso é fazer você evoluir no Muay Thai 
                com técnica, disciplina e respeito ao seu tempo.
              </p>
              
              <div className="bg-card p-6 rounded-lg shadow-card border-l-4 border-primary">
                <p className="text-xl italic text-foreground font-medium">
                  "A energia da equipe é única. Mas o cuidado é individual."
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={ImageProf} 
                  alt="Professor Cleiton Rodrigo com alunos da Equipe Dragão Vermelho"
                  className="w-full h-auto object-cover"
                />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
