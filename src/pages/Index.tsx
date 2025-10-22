import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const biographyEvents = [
    {
      year: "1799",
      title: "Рождение",
      description: "Александр Сергеевич Пушкин родился 6 июня в Москве в дворянской семье."
    },
    {
      year: "1811-1817",
      title: "Царскосельский лицей",
      description: "Учился в привилегированном лицее, где начал писать свои первые стихи."
    },
    {
      year: "1820",
      title: "Южная ссылка",
      description: "За вольнолюбивые стихи был отправлен в ссылку на юг России."
    },
    {
      year: "1831",
      title: "Женитьба",
      description: "Женился на красавице Наталье Гончаровой."
    },
    {
      year: "1837",
      title: "Дуэль",
      description: "Погиб на дуэли с Дантесом, защищая честь своей жены."
    }
  ];

  const facts = [
    {
      icon: "Feather",
      title: "Первое стихотворение в 8 лет",
      description: "Пушкин написал свое первое стихотворение на французском языке, когда ему было всего 8 лет!"
    },
    {
      icon: "BookOpen",
      title: "Огромная библиотека",
      description: "В его личной библиотеке было больше 3500 книг на 14 языках."
    },
    {
      icon: "Award",
      title: "Основатель русского литературного языка",
      description: "Пушкина называют создателем современного русского литературного языка."
    },
    {
      icon: "Heart",
      title: "113 любовных стихов",
      description: "Поэт написал стихи более чем 100 женщинам, которые его вдохновляли."
    },
    {
      icon: "Scroll",
      title: "Самый известный поэт России",
      description: "Его произведения переведены на 100+ языков мира."
    },
    {
      icon: "Landmark",
      title: "Памятники по всему миру",
      description: "Памятники Пушкину установлены в 40+ странах мира!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-200/50 shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Feather" className="text-primary" size={28} />
              <h1 className="text-2xl font-bold text-secondary">ПУШКИН</h1>
            </div>
            <div className="flex gap-6">
              <a href="#biography" className="text-secondary hover:text-primary transition-colors font-semibold">
                Биография
              </a>
              <a href="#facts" className="text-secondary hover:text-primary transition-colors font-semibold">
                Факты
              </a>
            </div>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-slate-700 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEzIDAgNiAyLjY4NyA2IDZzLTIuNjg3IDYtNiA2LTYtMi42ODctNi02IDIuNjg3LTYgNi02ek0yMCAzNGMzLjMxMyAwIDYgMi42ODcgNiA2cy0yLjY4NyA2LTYgNi02LTIuNjg3LTYtNiAyLjY4Ny02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Александр Сергеевич
                <span className="block text-primary">Пушкин</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Величайший русский поэт, драматург и прозаик, основоположник современного русского литературного языка
              </p>
              <div className="flex gap-4 text-sm">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-primary font-bold">1799-1837</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-amber-200">⭐ Золотой век поэзии</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/e15ce59c-3897-4442-b291-91a1c8c48d28/files/9bf97271-627d-4980-9ab5-dda004061111.jpg"
                alt="Портрет А.С. Пушкина"
                className="relative rounded-3xl shadow-2xl border-4 border-white/20 w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="biography" className="py-20 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="BookOpen" className="text-primary" size={20} />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Жизненный путь</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Биография поэта</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Краткая хронология основных событий жизни великого русского поэта
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {biographyEvents.map((event, index) => (
            <div 
              key={index}
              className="group relative flex gap-6 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                  <Icon name="Scroll" size={24} />
                </div>
                {index < biographyEvents.length - 1 && (
                  <div className="w-1 flex-1 bg-gradient-to-b from-primary/50 to-transparent mt-2"></div>
                )}
              </div>
              
              <Card className="flex-1 p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-primary/20 group-hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl font-bold text-primary">{event.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">{event.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section id="facts" className="py-20 bg-gradient-to-br from-slate-50 to-amber-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Icon name="Sparkles" className="text-primary" size={20} />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Удивительное</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Интересные факты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Необычные и малоизвестные истории о великом поэте
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {facts.map((fact, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary/30 group hover:-translate-y-2 animate-scale-in bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name={fact.icon as any} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3 leading-snug">{fact.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{fact.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Feather" className="text-primary" size={32} />
            <h3 className="text-2xl font-bold">ПУШКИН</h3>
          </div>
          <p className="text-slate-300 mb-6 max-w-md mx-auto">
            Образовательный проект о жизни и творчестве великого русского поэта
          </p>
          <div className="text-sm text-slate-400">
            © 2024 Биография А.С. Пушкина
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
