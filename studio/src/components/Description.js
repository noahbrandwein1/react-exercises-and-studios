import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor () {
    const authorLink =
        "https://www.allthingsmamma.com/buffalo-chicken-dip-recipe-perfect-for-the-crock-pot-or-oven/";
    const authorPhoto =
        "https://allthingsmamma.com/wp-content/uploads/2020/01/Kasey-Schwartz-webprofile.jpg";
    const authorName = "Kasey Schwartz";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Author" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog name</a>
            </div>
        </div>
    );
};

class RecipeDescription extends React.Component {
    render() {
        <div> 
        <div>
           <h1>Recipe Title</h1>
           <p>Short recipe description</p>
        </div>
        <RecipeAuthor />
     </div>
    }
}

export default RecipeDescription;