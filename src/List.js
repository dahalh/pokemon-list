import React from "react";

const List = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((listItem) => {
        const { id, title, img, desc } = listItem;
        return (
          <article key={id} className="list-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
              </header>
              <h4 className="item-text">{desc}</h4>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
