const model = (sequelize, DataTypes) => {
    return sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        enable: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
}

const attribute = {
    all: ["uuid", "username", "email", "password", "enable"],
    public: ["uuid", "username", "enable"],
    protected: ["uuid", "username", "email", "enable"]
}

export {model, attribute};