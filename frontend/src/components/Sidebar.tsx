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

    return (
        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button onClick={toggleSidebar}>
                {isOpen ? 'Fechar' : 'Abrir'} Sidebar
            </button>
            <nav>
                <ul>
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