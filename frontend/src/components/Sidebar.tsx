import React from 'react';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
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
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;