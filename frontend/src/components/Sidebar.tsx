// frontend/src/components/Sidebar.tsx
import React from 'react';
import { useHistory } from 'react-router-dom';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    const history = useHistory();

    const navigateToContact = () => {
        history.push('/contact');
    };

    const navigateToProfile = () => {
        history.push('/profile');
    };

    return (
        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button onClick={toggleSidebar}>
                {isOpen ? 'Fechar' : 'Abrir'} Sidebar
            </button>
            <nav>
                <ul>
                    <li onClick={navigateToProfile} style={{ cursor: 'pointer' }}>
                        Perfil
                    </li>
                    <li>Recomendações</li>
                    <li>Notificações</li>
                    <li>Meteorologia</li>
                    <li>Histórico</li>
                    <li onClick={navigateToContact} style={{ cursor: 'pointer' }}>
                        Contacto
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;