import React from 'react';

export function BottomNav({ activeTab, setActiveTab }) {

  const navItems = [
    {
      id: 'home',
      label: 'Início',
      icon: '🏠'
    },
    {
      id: 'receitas',
      label: 'Receitas',
      icon: '🍲'
    },
    {
      id: 'favoritos',
      label: 'Favoritos',
      icon: '❤️'
    },
    {
      id: 'compras',
      label: 'Compras',
      icon: '🛒'
    },
    {
      id: 'planejamento',
      label: 'Agenda',
      icon: '📅'
    }
  ];

  const navStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px 0',
    boxShadow: '0 -4px 12px rgba(0,0,0,0.05)',
    borderTop: '1px solid rgba(0,0,0,0.04)',
    zIndex: 1000
  };

  return (
    <nav style={navStyle}>
      {navItems.map((item) => {

        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              fontSize: '11px',
              fontFamily: 'Poppins, sans-serif',
              color: isActive ? '#2D5A27' : '#666666',
              fontWeight: isActive ? '600' : '400',
              gap: '4px',
              flex: 1
            }}
          >
            <span style={{ fontSize: '20px' }}>
              {item.icon}
            </span>

            <span>
              {item.label}
            </span>

          </button>
        );

      })}
    </nav>
  );
}
