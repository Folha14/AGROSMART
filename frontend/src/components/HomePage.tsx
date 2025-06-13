import React from 'react';
import { useHistory } from 'react-router-dom';
import { Cloud, AlertTriangle, Flower2, Clock, Users, BarChart3, Smartphone, Leaf } from 'lucide-react';

const HomePage: React.FC = () => {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push('/');
  };

  const handleContactClick = () => {
    history.push('/contact');
  };

  return (
    <div className="min-h-screen bg-stone-100">
      <style jsx>{`
        .hero-gradient {
          background: linear-gradient(135deg, #166534 0%, #15803d 100%);
        }
        .feature-card {
          transition: transform 0.3s ease;
        }
        .feature-card:hover {
          transform: scale(1.05);
        }
        .nav-link {
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: #166534;
        }
        .btn-primary {
          background: #166534;
          transition: background 0.2s ease;
        }
        .btn-primary:hover {
          background: #15803d;
        }
        .btn-secondary {
          background: white;
          color: #166534;
          transition: background 0.2s ease;
        }
        .btn-secondary:hover {
          background: #f0fdf4;
        }
      `}</style>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Leaf className="h-8 w-8 text-green-800" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-600 rounded-full"></div>
              </div>
              <span className="text-2xl font-bold text-green-800">AgroSmart</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="nav-link text-green-700 hover:text-green-800 font-medium">Início</a>
              <a href="#features" className="nav-link text-gray-600 hover:text-green-800 font-medium">Funcionalidades</a>
              <a href="#about" className="nav-link text-gray-600 hover:text-green-800 font-medium">Sobre</a>
              <button onClick={handleContactClick} className="nav-link text-gray-600 hover:text-green-800 font-medium bg-transparent border-none cursor-pointer">Contacto</button>
            </nav>
            <button onClick={handleLoginClick} className="btn-primary text-white px-4 py-2 rounded-lg font-medium border-none cursor-pointer">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Agricultura Inteligente para o Futuro
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Gerencie suas culturas com tecnologia avançada. Monitore condições meteorológicas, 
                receba alertas personalizados e otimize sua produção agrícola.
              </p>
              <button onClick={handleLoginClick} className="btn-secondary px-8 py-4 rounded-lg font-semibold border-none cursor-pointer">
                Começar Agora
              </button>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <Cloud className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">Meteorologia</span>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <AlertTriangle className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">Alertas</span>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <Flower2 className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">Plantação</span>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <Clock className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">Histórico</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades Principais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma plataforma completa para gestão agrícola moderna, 
              combinando dados meteorológicos em tempo real com ferramentas intuitivas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Meteorologia</h3>
              <p className="text-gray-600">
                Previsões precisas e dados meteorológicos em tempo real para suas culturas.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Alertas Inteligentes</h3>
              <p className="text-gray-600">
                Notificações personalizadas sobre condições adversas e oportunidades.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flower2 className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gestão de Plantação</h3>
              <p className="text-gray-600">
                Acompanhe o ciclo de vida das suas culturas e otimize o rendimento.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Histórico Detalhado</h3>
              <p className="text-gray-600">
                Analise dados históricos para tomar decisões mais informadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Tecnologia ao Serviço da Agricultura
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                O AgroSmart combina sensores IoT, inteligência artificial e análise de dados 
                para revolucionar a forma como gere as suas culturas. Tome decisões baseadas 
                em dados precisos e aumente a produtividade da sua exploração agrícola.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Monitorização em tempo real</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Previsões meteorológicas precisas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Alertas personalizados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Interface intuitiva e mobile</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="hero-gradient rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <BarChart3 className="h-12 w-12 mx-auto mb-2" />
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm opacity-90">Precisão</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <Users className="h-12 w-12 mx-auto mb-2" />
                    <div className="text-2xl font-bold">5000+</div>
                    <div className="text-sm opacity-90">Utilizadores</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <Smartphone className="h-12 w-12 mx-auto mb-2" />
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm opacity-90">Monitorização</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <Leaf className="h-12 w-12 mx-auto mb-2" />
                    <div className="text-2xl font-bold">30%</div>
                    <div className="text-sm opacity-90">+ Produção</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Revolucionar a Sua Agricultura?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Junte-se a milhares de agricultores que já utilizam o AgroSmart 
            para otimizar as suas colheitas e aumentar a produtividade.
          </p>
          <div className="flex gap-4 justify-center">
            <button onClick={handleContactClick} className="btn-secondary px-8 py-4 rounded-lg font-semibold border-none cursor-pointer">
              Contacte-nos
            </button>
            <button onClick={handleLoginClick} className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold border-none cursor-pointer hover:bg-green-700">
              Começar Agora
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold">AgroSmart</span>
              </div>
              <p className="text-gray-400 text-sm">
                Tecnologia avançada para agricultura inteligente e sustentável.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><button onClick={handleContactClick} className="hover:text-white transition-colors bg-transparent border-none text-gray-400 text-sm p-0 cursor-pointer">Contacto</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Centro de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Estado do Sistema</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 AgroSmart. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;