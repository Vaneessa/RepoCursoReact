import React from "react";
import "./Container.css";

const ItemListContainer = ({ children , greeting }) => {
    return <div className="custom-container">
        <h2>{ greeting }</h2>
        { children }
        </div>;
};

export default ItemListContainer;