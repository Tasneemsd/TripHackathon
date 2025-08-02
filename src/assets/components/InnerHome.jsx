import React, { useState, useEffect } from "react";
import "./InnerHome.css";

const InnerHome = ({ currentUser, onLogout, onProfileClick, onTabChange, activeTab }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState("");

  // Update time and greeting
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      const hour = now.getHours();
      if (hour < 12) setGreeting("Good Morning");
      else if (hour < 17) setGreeting("Good Afternoon");
      else setGreeting("Good Evening");
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const handleTabChange = (tabId) => {
    onTabChange(tabId);
    setIsSideNavOpen(false);
  };

  const quickStats = [
    {
      icon: "✈️",
      label: "Total Flights",
      value: "12",
      color: "#667eea"
    },
    {
      icon: "🏨",
      label: "Hotel Bookings",
      value: "8",
      color: "#764ba2"
    },
    {
      icon: "🎯",
      label: "Activities",
      value: "15",
      color: "#f093fb"
    },
    {
      icon: "👥",
      label: "Tour Guides",
      value: "6",
      color: "#4facfe"
    }
  ];

  const recentBookings = [
    {
      type: "Flight",
      destination: "Mumbai → Delhi",
      date: "Dec 15, 2024",
      status: "Confirmed",
      icon: "✈️"
    },
    {
      type: "Hotel",
      destination: "Taj Palace, Mumbai",
      date: "Dec 15-18, 2024",
      status: "Booked",
      icon: "🏨"
    },
    {
      type: "Activity",
      destination: "Elephant Safari, Jaipur",
      date: "Dec 16, 2024",
      status: "Scheduled",
      icon: "🎯"
    }
  ];

  const upcomingTrips = [
    {
      destination: "Mumbai, India",
      dates: "Dec 15-18, 2024",
      type: "Business Trip",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
    },
    {
      destination: "Bali, Indonesia",
      dates: "Jan 10-15, 2025",
      type: "Vacation",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400"
    }
  ];

  return (
    <div className="inner-home">
      {/* Background Image with Overlay */}
      <div className="inner-home-bg">
        <div className="bg-overlay"></div>
      </div>

      {/* Side Navigation Toggle */}
      <button 
        className={`side-nav-toggle ${isSideNavOpen ? 'open' : ''}`}
        onClick={toggleSideNav}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Side Navigation */}
      <nav className={`side-nav ${isSideNavOpen ? 'open' : ''}`}>
        <div className="side-nav-header">
          <h3>TravelEase Pro</h3>
          <button className="close-btn" onClick={toggleSideNav}>×</button>
        </div>

        <div className="side-nav-content">
          <ul className="side-nav-menu">
            <li>
              <button
                className={`side-nav-item ${activeTab === 'travel' ? 'active' : ''}`}
                onClick={() => handleTabChange('travel')}
              >
                <span className="menu-icon">📅</span>
                <div className="menu-content">
                  <span className="menu-label">Travel Calendar</span>
                  <span className="menu-description">View all your travel plans</span>
                </div>
                {activeTab === 'travel' && <span className="active-indicator">●</span>}
              </button>
            </li>
            <li>
              <button
                className={`side-nav-item ${activeTab === 'flights' ? 'active' : ''}`}
                onClick={() => handleTabChange('flights')}
              >
                <span className="menu-icon">✈️</span>
                <div className="menu-content">
                  <span className="menu-label">Flight Bookings</span>
                  <span className="menu-description">Search and book flights</span>
                </div>
                {activeTab === 'flights' && <span className="active-indicator">●</span>}
              </button>
            </li>
            <li>
              <button
                className={`side-nav-item ${activeTab === 'hotels' ? 'active' : ''}`}
                onClick={() => handleTabChange('hotels')}
              >
                <span className="menu-icon">🏨</span>
                <div className="menu-content">
                  <span className="menu-label">Hotel Bookings</span>
                  <span className="menu-description">Find and reserve hotels</span>
                </div>
                {activeTab === 'hotels' && <span className="active-indicator">●</span>}
              </button>
            </li>
            <li>
              <button
                className={`side-nav-item ${activeTab === 'guides' ? 'active' : ''}`}
                onClick={() => handleTabChange('guides')}
              >
                <span className="menu-icon">👥</span>
                <div className="menu-content">
                  <span className="menu-label">Tour Guides</span>
                  <span className="menu-description">Book local tour guides</span>
                </div>
                {activeTab === 'guides' && <span className="active-indicator">●</span>}
              </button>
            </li>
            <li>
              <button
                className={`side-nav-item ${activeTab === 'activities' ? 'active' : ''}`}
                onClick={() => handleTabChange('activities')}
              >
                <span className="menu-icon">🎯</span>
                <div className="menu-content">
                  <span className="menu-label">Activities & Tours</span>
                  <span className="menu-description">Discover exciting activities</span>
                </div>
                {activeTab === 'activities' && <span className="active-indicator">●</span>}
              </button>
            </li>
            <li>
              <button
                className={`side-nav-item ${activeTab === 'payments' ? 'active' : ''}`}
                onClick={() => handleTabChange('payments')}
              >
                <span className="menu-icon">💳</span>
                <div className="menu-content">
                  <span className="menu-label">Payments</span>
                  <span className="menu-description">Secure payment processing</span>
                </div>
                {activeTab === 'payments' && <span className="active-indicator">●</span>}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Overlay */}
      {isSideNavOpen && (
        <div className="side-nav-overlay" onClick={toggleSideNav}></div>
      )}

      {/* Top Navigation */}
      <header className="top-nav">
        <div className="nav-content">
          <div className="nav-left">
            <h1 className="app-title">
              <span className="title-main">TravelEase</span>
              <span className="title-pro">Pro</span>
            </h1>
          </div>
          <div className="nav-right">
            <div className="user-welcome">
              <span className="greeting">{greeting}, {currentUser.name}!</span>
              <span className="current-time">{currentTime.toLocaleTimeString()}</span>
            </div>
            <div className="profile-menu">
              <button className="profile-toggle" onClick={onProfileClick}>
                <div className="profile-avatar">
                  <img src={currentUser.avatar} alt={currentUser.name} />
                  <div className="online-indicator"></div>
                </div>
                <div className="profile-info">
                  <span className="profile-name">{currentUser.name}</span>
                  <span className="profile-status">Online</span>
                </div>
                <span className="dropdown-arrow">▼</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="inner-home-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h2 className="hero-title">
              <span className="title-line">Welcome to Your</span>
              <span className="title-highlight">Travel Dashboard</span>
            </h2>
            <p className="hero-subtitle">
              Plan, book, and manage your journeys with ease. Your next adventure awaits!
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => handleTabChange('flights')}>
                Book Flight
              </button>
              <button className="btn-secondary" onClick={() => handleTabChange('hotels')}>
                Find Hotels
              </button>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="stats-section">
          <h3 className="section-title">Your Travel Overview</h3>
          <div className="stats-grid">
            {quickStats.map((stat, index) => (
              <div key={index} className="stat-card" style={{'--stat-color': stat.color}}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-content">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Bookings & Upcoming Trips */}
        <section className="dashboard-grid">
          {/* Recent Bookings */}
          <div className="dashboard-card">
            <h3 className="card-title">Recent Bookings</h3>
            <div className="bookings-list">
              {recentBookings.map((booking, index) => (
                <div key={index} className="booking-item">
                  <div className="booking-icon">{booking.icon}</div>
                  <div className="booking-details">
                    <span className="booking-type">{booking.type}</span>
                    <span className="booking-destination">{booking.destination}</span>
                    <span className="booking-date">{booking.date}</span>
                  </div>
                  <span className={`booking-status ${booking.status.toLowerCase()}`}>
                    {booking.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Trips */}
          <div className="dashboard-card">
            <h3 className="card-title">Upcoming Trips</h3>
            <div className="trips-list">
              {upcomingTrips.map((trip, index) => (
                <div key={index} className="trip-item">
                  <div className="trip-image">
                    <img src={trip.image} alt={trip.destination} />
                  </div>
                  <div className="trip-details">
                    <span className="trip-destination">{trip.destination}</span>
                    <span className="trip-dates">{trip.dates}</span>
                    <span className="trip-type">{trip.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="quick-actions">
          <h3 className="section-title">Quick Actions</h3>
          <div className="actions-grid">
            <button className="action-card" onClick={() => handleTabChange('travel')}>
              <span className="action-icon">📅</span>
              <span className="action-label">View Calendar</span>
            </button>
            <button className="action-card" onClick={() => handleTabChange('flights')}>
              <span className="action-icon">✈️</span>
              <span className="action-label">Book Flight</span>
            </button>
            <button className="action-card" onClick={() => handleTabChange('hotels')}>
              <span className="action-icon">🏨</span>
              <span className="action-label">Find Hotel</span>
            </button>
            <button className="action-card" onClick={() => handleTabChange('activities')}>
              <span className="action-icon">🎯</span>
              <span className="action-label">Explore Activities</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InnerHome; 