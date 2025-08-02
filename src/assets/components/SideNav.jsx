import React from "react";
import "./SideNav.css";

const SideNav = ({ isOpen, onToggle, activeTab, onTabChange }) => {
  const menuItems = [
    {
      id: 'travel',
      label: 'Travel Calendar',
      icon: '📅',
      description: 'View all your travel plans'
    },
    {
      id: 'flights',
      label: 'Flight Bookings',
      icon: '✈️',
      description: 'Search and book flights'
    },
    {
      id: 'hotels',
      label: 'Hotel Bookings',
      icon: '🏨',
      description: 'Find and reserve hotels'
    },
    {
      id: 'activities',
      label: 'Activities & Tours',
      icon: '🎯',
      description: 'Discover exciting activities'
    },
    {
      id: 'gallery',
      label: 'Gallery',
      icon: '🖼️',
      description: 'Explore travel destinations'
    },
    {
      id: 'chat',
      label: 'Live Chat',
      icon: '💬',
      description: 'Chat with travel experts'
    },
    {
      id: 'contact',
      label: 'Contact Us',
      icon: '📞',
      description: 'Get in touch with us'
    },
    {
      id: 'about',
      label: 'About Us',
      icon: 'ℹ️',
      description: 'Learn more about our company'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: '⚙️',
      description: 'Manage your preferences'
    }
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="side-nav-overlay" onClick={onToggle}></div>
      )}

      {/* Toggle Button */}
      <button 
        className={`side-nav-toggle ${isOpen ? 'open' : ''}`}
        onClick={onToggle}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Side Navigation */}
      <nav className={`side-nav ${isOpen ? 'open' : ''}`}>
        <div className="side-nav-header">
          <h3>Travel Booking</h3>
          <button className="close-btn" onClick={onToggle}>
            ×
          </button>
        </div>

        <div className="side-nav-content">
          <ul className="side-nav-menu">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`side-nav-item ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => {
                    onTabChange(item.id);
                    onToggle(); // Close menu on mobile after selection
                  }}
                >
                  <span className="menu-icon">{item.icon}</span>
                  <div className="menu-content">
                    <span className="menu-label">{item.label}</span>
                    <span className="menu-description">{item.description}</span>
                  </div>
                  {activeTab === item.id && (
                    <span className="active-indicator">●</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="side-nav-footer">
          <div className="quick-stats">
            <div className="stat-item">
              <span className="stat-icon">🌟</span>
              <span className="stat-text">Happy Traveling!</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideNav; 