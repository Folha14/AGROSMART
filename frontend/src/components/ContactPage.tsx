import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulação de envio - substitua pela sua lógica de API
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <button onClick={goBack} className="back-button">
          ← Voltar
        </button>
        <h1>Contacte-nos</h1>
        <p>Tem questões sobre o AgroSmart? Estamos aqui para ajudar!</p>
      </header>

      <div className="contact-container">
        <div className="contact-form-section">
          <div className="form-card">
            <h2>Envie-nos uma Mensagem</h2>
            
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Mensagem Enviada!</h3>
                <p>Obrigado pelo seu contacto. Responderemos em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="O seu nome"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="seuemail@exemplo.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+351 912 345 678"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Assunto</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="demo">Demonstração do Produto</option>
                      <option value="pricing">Informações sobre Preços</option>
                      <option value="support">Suporte Técnico</option>
                      <option value="partnership">Parcerias</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Descreva como podemos ajudar..."
                  />
                </div>

                <button type="submit" className="submit-button" disabled={isLoading}>
                  {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="contact-info-section">
          <div className="info-card">
            <h3>Informações de Contacto</h3>
            
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>contacto@agrosmart.pt</p>
                <p>suporte@agrosmart.pt</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Telefone</h4>
                <p>+351 234 567 890</p>
                <p>+351 912 345 678</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Morada</h4>
                <p>Rua da Inovação, 123<br />3810-193 Aveiro<br />Portugal</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <div>
                <h4>Horário</h4>
                <p>Segunda a Sexta: 9h00 - 18h00<br />Sábado: 9h00 - 13h00<br />Domingo: Fechado</p>
              </div>
            </div>
          </div>

          <div className="faq-card">
            <h3>Perguntas Frequentes</h3>
            
            <div className="faq-item">
              <h4>Como funciona o AgroSmart?</h4>
              <p>O AgroSmart combina sensores IoT, dados meteorológicos e IA para fornecer informações precisas sobre as suas culturas.</p>
            </div>

            <div className="faq-item">
              <h4>Existe um período de teste gratuito?</h4>
              <p>Sim, oferecemos 30 dias de teste gratuito para conhecer todas as funcionalidades da plataforma.</p>
            </div>

            <div className="faq-item">
              <h4>Que tipo de culturas são suportadas?</h4>
              <p>Suportamos uma vasta gama de culturas, desde cereais a hortícolas, fruteiras e vinhas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;