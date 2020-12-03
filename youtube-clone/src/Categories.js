import React from 'react';
import './Categories.css';

function Categories() {
    return (
        <div className="categories">
            <section className="category-section">
                <button className="category active">All</button>
                <button className="category">HTML5</button>
                <button className="category">CSS3</button>
                <button className="category">Bootstrap</button>
                <button className="category">Responsive Design</button>
                <button className="category">UX Design</button>
                <button className="category">JavaScript</button>
                <button className="category">ES6</button>
                <button className="category">Typescript</button>
                <button className="category">React</button>
            </section>
        </div>
    )
}

export default Categories;