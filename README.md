# Little Lemon Restaurant Web App

#### Video Demo: https://youtu.be/7h2BQ6ytigk

#### Description:

This web application was built as my final project for CS50's Introduction to Computer Science course. Little Lemon is a fictitious restaurant located in Chicago, IL. The web app was built for Little Lemon to provide its customers with the ability to explore restaurant information, view the menu, create user accounts, and edit table reservations.

### Project Overview

The Little Lemon Restaurant web application is a React-based single-page application (SPA) that provides a seamless user experience for restaurant customers. The project emphasizes responsive design, accessibility, and user-friendly navigation while maintaining a consistent brand identity throughout.

### Technical Stack

- **Frontend Framework**: React
- **Routing**: React Router DOM
- **Testing**: Jest and React Testing Library
- **Styling**: Custom CSS with responsive design
- **State Management**: React Hooks (useState, useReducer, useEffect)
- **Build Tool**: Create React App

### Key Features

1. **Homepage Layout**

- Hero section with call-to-action for reservations
  - Weekly specials highlights
  - Customer testimonials
  - About section with restaurant story

2. **Reservation System**

   - Interactive booking form with date and time selection
   - Guest number specification (1-10 guests)
   - Occasion selection
   - Form validation and submission handling
   - Booking confirmation page
   - Local storage integration for booking data persistence

3. **Menu Page**

- Categorized display of menu items
  - Detailed descriptions and pricing
  - Responsive grid layout
  - Organized sections (Starters, Main Courses, Desserts, Drinks)

4. **About Page**
   - Restaurant history and story
   - Chef profiles (Mario and Adrian)
   - Business hours
   - Location information

### File Structure and Component Details

1. **App.js**

   - Root component
   - Implements React Router for navigation
   - Defines main route structure

2. **Components/**

- **App.js**: Main application component with routing setup
- **AppLayout.js**: Layout wrapper component for consistent page structure
- **HomePage.js**: Home page with hero, highlights, testimonials, and about section
- **Nav.js**: Responsive navigation bar with mobile menu support
- **Footer.js**: Site footer with navigation and social links
- **Hero.js**: Hero section with dynamic content and call-to-action to make a reservation
- **Highlights.js**: Featured menu items with responsive grid layout
- **Testimonials.js**: Customer reviews with responsive card layout
- **About.js**: Restaurant information with image gallery
- **AboutPage.js**: About page component with restaurant information and hours
- **Hours.js**: Operating hours display with responsive layout
- **BookingPage.js**: Main reservations interface
- **BookingForm.js**: Form for creating reservations and a table for viewing existing reservations
- **ConfirmedBookingPage.js**: Confirmed booking page component with reservation details
- **Login.js**: Login form component
- **LoginPage.js**: Login page wrapper with form
- **Register.js**: Registration form component
- **RegisterPage.js**: Registration page wrapper with form
- **Menu.js**: Menu component with item display
- **MenuPage.js**: Menu page wrapper with filtering by menu category
- **OrderOnline.js**: Online ordering interface
- **OrderOnlinePage.js**: Online ordering page wrapper
- **NotFoundPage.js**:
- **NotFound.js**: 404 error page component

3. **Styling**

   - `index.css`: Global styles and variables
   - Component-specific styling sections
   - Responsive design breakpoints
   - Brand color scheme ( #495E57, #F4CE14)

4. **Testing**
   - `BookingForm.test.js`: Form validation tests
   - `LoginPage.test.js`: Authentication tests
   - Integration tests for booking flow

### Design Decisions

1. **Typography**

   - Chose Markazi Text for headings and Karla for body text
   - Ensures readability while maintaining brand identity

2. **Color Scheme**

- Primary colors: #495E57 (sage green) and #F4CE14 (lemon yellow)
  - Creates a Mediterranean atmosphere while ensuring accessibility

3. **Layout**

   - Grid-based design for consistent spacing
   - Responsive breakpoints for mobile-first approach
   - Flexible component structure for easy maintenance

4. **State Management**

   - Used React Hooks instead of Redux for simplicity
   - Implemented useReducer for booking form state
   - Local storage for persistence of booking data

5. **Accessibility**
   - ARIA labels for interactive elements
   - Semantic HTML structure
   - Color contrast compliance
   - Keyboard navigation support

### Future Enhancements

1. **Authentication System**

- User account creation and management
  - Personalized booking history
  - Profile management

2. **Online Ordering**

   - Integration with payment processing
   - Delivery service integration
   - Order tracking system

3. **Additional Features**
   - Newsletter subscription
   - Special events calendar
   - Customer loyalty program
   - Social media integration

### Installation and Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Use `npm start` to run the development server
4. Run `npm test` to execute the test suite

### Conclusion

This project demonstrates proficiency in modern web development practices while creating a practical, user-friendly application for restaurant management. The emphasis on component reusability, clean code structure, and thorough testing ensures a maintainable and scalable solution.
