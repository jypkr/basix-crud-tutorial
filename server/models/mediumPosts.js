module.exports = (sequelize, DataTypes) => {

    const mediumPosts = sequelize.define("mediumPosts", {
        title: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        author_link: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_link: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    return mediumPosts;
};