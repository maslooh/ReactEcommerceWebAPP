import categoriesCRUD from './dataModel'
import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom'

function CategoriesList() {
    const [list, setList] = useState([])
    useEffect(()=>{
        categoriesCRUD.getAllCategories()
        .then((res) => res.json())
            .then(data => setList(data))
    })
    return (
        <div class="row row-cols-1 row-cols-md-2 g-4">
                {list.map(cat => {
                    return (
                        <div class="col">
                           <Link class="card text-white" to={cat.id}>
                                <img src={cat.picture} class="catCard card-img" alt="..."/>
                                <div class="card-img-overlay">
                                        <h5 class="card-title">{cat.name}</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
        </div>
    )
}
export default CategoriesList