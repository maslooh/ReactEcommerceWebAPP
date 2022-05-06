import React, { createElement } from 'react';
import {Link} from "react-router-dom"
export function ProductItem({ hit, components }) {
  return (
      <a href={`/products/${hit.id}`} className="aa-ItemLink">
          <div className="aa-ItemContent">
              <img
                  className="align-top"
                    src={hit.img}
                    alt={hit.name}
                    width="70"
                    height="70"
                  />
              <div className="aa-ItemContentBody">
                  <div className="aa-ItemContentTitle">
                    {components.Highlight({
                      hit: hit,
                      attribute: 'name',
                    })}
                  </div>
                  <div className="aa-ItemContentDescription">
                    {components.Snippet({
                      hit: hit,
                      attribute: 'details',
                    })}
                  </div>
                </div>
      </div>
    </a>
  );
}
