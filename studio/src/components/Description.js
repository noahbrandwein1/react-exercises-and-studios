function RecipeAuthor = () => {
    const authorLink = "https://www.allthingsmamma.com/buffalo-chicken-dip-recipe-perfect-for-the-crock-pot-or-oven/"
    const authorPhoto = "https://allthingsmamma.com/wp-content/uploads/2020/01/Kasey-Schwartz-webprofile.jpg"
    const authorName = "Kasey Schwartz"

    return (
        <div className={StyleSheet.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Author" className={styels.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog name</a>
        </div>
        </div >
    );

}