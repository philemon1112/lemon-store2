import React from 'react';
import ShopMen from './../../assets/shopMens.jpg';
import './styles.scss';

import ShopWomen from './../../assets/shopWomens.jpg';

const Directory = props => {
    return(
        <div className="directory">
            <div className="wrap">
            <div className="item"
                style = {{
                    backgroundImage: `url(${ShopWomen})`
                }}
            >
                <a>
                    Shop Women
                </a>
            </div>
            <div className="item"
                style = {{
                    backgroundImage: `url(${ShopMen})`
                }}
            >
                <a>
                    Shop Mens
                </a>
            </div>
            </div>
        </div>
    );
};

export default Directory;