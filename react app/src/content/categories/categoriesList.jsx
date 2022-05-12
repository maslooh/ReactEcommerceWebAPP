import categoriesCRUD from './categoryDataModel'
import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom'
import { Skeleton } from 'antd';
function CategoriesList() {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        categoriesCRUD.getAllCategories()
        .then((res) => res.json())
            .then(data => {
                setList(data)
                setLoading(false)
            })
    }, [])
    if (loading) {
        return (
            <div class="row row-cols-1 row-cols-md-2 g-4">
                {[1,2].map(n => {
                    return (
                        <div class="col">
                            <div class="card text-white">
                                <div class="card-body catCard">
                                        <Skeleton class="card-title" active/>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
        )
    }
    return (
        <div class="row row-cols-1 row-cols-md-2 g-4">
                {list.map(cat => {
                    return (
                        <div class="col">
                           <Link class="card text-white" to={cat.id}>
                                <img src={cat.picture} class="catCard card-img" alt="..."/>
                                <div class="card-img-overlay">
                                        <h5 class="card-title" style={{color:"white"}}>{cat.name}</h5>
                                    <p class="card-text">{cat.description }</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
        </div>
    )
}
export default CategoriesList