const model = (sequelize, DataTypes) => {
    return sequelize.define('Certificates', {
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
        owner: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        public: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        enable: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
}

const attribute = {
    all: ["uuid", "name", "public", "enable"],
    public: ["uuid", "name"],
    protected: ["uuid", "name", "public", "enable"]
}

export {model, attribute};