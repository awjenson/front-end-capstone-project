import React from 'react';
import Menu from './Menu';


const menuItems = [
    {
        id: 1,
        title: "Greek Salad",
        description: "Fresh Mediterranean salad with cherry tomatoes, cucumber, red onion, olives, and feta cheese drizzled with olive oil.",
        price: 10.99,
        image: "/greek-salad.jpg",
        category: "Starters"
    },
    {
        id: 2,
        title: "Bruschetta",
        description: "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and extra virgin olive oil.",
        price: 6.99,
        image: "/bruschetta.jpg",
        category: "Starters"
    },
    {
        id: 3,
        title: "Lemon Herb Chicken",
        description: "Grilled chicken breast marinated in Mediterranean herbs and lemon, served with roasted vegetables.",
        price: 24.99,
        image: "/lemon-chicken.jpg",
        category: "Main Courses"
    },
    {
        id: 4,
        title: "Grilled Sea Bass",
        description: "Fresh Mediterranean sea bass grilled to perfection with lemon, herbs, and olive oil.",
        price: 28.99,
        image: "/sea-bass.jpg",
        category: "Main Courses"
    },
    {
        id: 5,
        title: "Pasta Primavera",
        description: "Fresh fettuccine tossed with seasonal vegetables in a light olive oil and herb sauce.",
        price: 19.99,
        image: "/pasta.jpg",
        category: "Main Courses"
    },
    {
        id: 6,
        title: "Mediterranean Pizza",
        description: "Thin crust pizza topped with olives, feta, sun-dried tomatoes, and fresh herbs.",
        price: 18.99,
        image: "/pizza.jpg",
        category: "Main Courses"
    },
    {
        id: 7,
        title: "Baklava",
        description: "Traditional Mediterranean dessert made with layers of filo, honey, and chopped nuts.",
        price: 5.99,
        image: "/baklava.jpg",
        category: "Desserts"
    },
    {
        id: 8,
        title: "Lemon Cake",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: 5.99,
        image: "/lemon-cake.jpg",
        category: "Desserts"
    },
    {
        id: 9,
        title: "House Wine",
        description: "Selection of red or white wine from local Mediterranean vineyards.",
        price: 7.99,
        image: "/wine.jpg",
        category: "Drinks"
    },
    {
        id: 10,
        title: "Turkish Coffee",
        description: "Traditional Turkish coffee served with Turkish delight.",
        price: 4.99,
        image: "/coffee.jpg",
        category: "Drinks"
    }
];

const menuCategories = ['Starters', 'Main Courses', 'Desserts', 'Drinks'];

export default function MenuPage() {
    return (
        <>
            <h1>Our Menu</h1>
            <Menu menuItems={menuItems} categories={menuCategories} />
        </>
    );
}
