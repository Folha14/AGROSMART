import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { User, X, Menu, Cloud, AlertTriangle, Flower2, Clock } from 'lucide-react';

const UserProfilePage: React.FC = () => {
    const history = useHistory();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        // Validation
        if (formData.password !== formData.confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        // Here you would typically make an API call to update the user profile
        console.log('Saving user data:', formData);
        alert('Perfil atualizado com sucesso!');
    };

    const navigateTo = (section: string) => {
        setIsMenuOpen(false);
        switch (section) {
            case 'perfil':
                // Already on profile page
                break;
            case 'meteorologia':
                history.push('/dashboard');
                break;
            case 'alertas':
                history.push('/dashboard');
                break;
            case 'plantacao':
                history.push('/dashboard');
                break;
            case 'historico':
                history.push('/dashboard');
                break;
            default:
                break;
        }
    };

    return (
        <div className="min-h-screen bg-stone-100">
            <style jsx>{`
                .hero-gradient {
                    background: linear-gradient(135deg, #166534 0%, #15803d 100%);
                }
                .menu-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 40;
                }
                .sidebar-menu {
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    width: 280px;
                    background: #166534;
                    color: white;
                    z-index: 50;
                    transform: translateX(-100%);
                    transition: transform 0.3s ease;
                }
                .sidebar-menu.open {
                    transform: translateX(0);
                }
                .menu-item {
                    display: flex;
                    align-items: center;
                    padding: 16px 24px;
                    cursor: pointer;
                    transition: background-color 0.2s;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                .menu-item:hover {
                    background-color: rgba(255, 255, 255, 0.1);
                }
                .menu-item svg {
                    margin-right: 12px;
                    width: 20px;
                    height: 20px;
                }
                .profile-avatar {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    background: #e2e8f0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    margin: 0 auto 20px;
                }
                .change-photo-btn {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    background: #166534;
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    font-size: 12px;
                }
                .form-container {
                    max-width: 600px;
                    margin: 0 auto;
                    background: white;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .form-group {
                    margin-bottom: 24px;
                }
                .form-group label {
                    display: block;
                    font-weight: 600;
                    color: #2d3748;
                    margin-bottom: 8px;
                }
                .form-group input {
                    width: 100%;
                    padding: 12px 16px;
                    border: 2px solid #166534;
                    border-radius: 8px;
                    font-size: 16px;
                    transition: border-color 0.2s;
                    box-sizing: border-box;
                }
                .form-group input:focus {
                    outline: none;
                    border-color: #15803d;
                    box-shadow: 0 0 0 3px rgba(22, 101, 52, 0.1);
                }
                .save-btn {
                    background: #166534;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background-color 0.2s;
                    display: block;
                    margin: 0 auto;
                }
                .save-btn:hover {
                    background: #15803d;
                }
            `}</style>

            {/* Header */}
            <header className="hero-gradient text-white">
                <div className="flex justify-between items-center px-6 py-4">
                    <button 
                        onClick={toggleMenu}
                        className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                    
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                            <span className="text-green-800 font-bold text-sm">A</span>
                        </div>
                        <span className="text-xl font-bold">AgroSmart</span>
                    </div>
                </div>
            </header>

            {/* Menu Overlay */}
            {isMenuOpen && (
                <div className="menu-overlay" onClick={toggleMenu}></div>
            )}

            {/* Sidebar Menu */}
            <div className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="p-6 border-b border-white border-opacity-20">
                    <button 
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>
                    
                    <div className="flex items-center space-x-3 mt-8">
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                            <User className="h-6 w-6" />
                        </div>
                        <span className="text-lg font-semibold">Bem-Vindo, User!</span>
                    </div>
                </div>

                <nav className="flex-1">
                    <div 
                        className="menu-item"
                        onClick={() => navigateTo('perfil')}
                    >
                        <User />
                        <span>Perfil</span>
                    </div>
                    
                    <div 
                        className="menu-item"
                        onClick={() => navigateTo('meteorologia')}
                    >
                        <Cloud />
                        <span>Meteorologia</span>
                    </div>
                    
                    <div 
                        className="menu-item"
                        onClick={() => navigateTo('alertas')}
                    >
                        <AlertTriangle />
                        <span>Alertas</span>
                    </div>
                    
                    <div 
                        className="menu-item"
                        onClick={() => navigateTo('plantacao')}
                    >
                        <Flower2 />
                        <span>Plantação</span>
                    </div>
                    
                    <div 
                        className="menu-item"
                        onClick={() => navigateTo('historico')}
                    >
                        <Clock />
                        <span>Histórico</span>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <main className="p-6">
                <div className="form-container">
                    {/* Profile Avatar */}
                    <div className="profile-avatar">
                        <User className="h-12 w-12 text-gray-400" />
                        <button className="change-photo-btn">
                            Change
                        </button>
                    </div>

                    {/* Profile Form */}
                    <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Digite seu nome"
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
                                placeholder="Digite seu email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Digite sua senha"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                placeholder="Confirme sua senha"
                            />
                        </div>

                        <button type="submit" className="save-btn">
                            Save
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default UserProfilePage;