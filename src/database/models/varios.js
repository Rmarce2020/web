module.exports = (sequelize, DataTypes) => {
    let alias = "varios";
    let cols  = {
        id: {type:DataTypes.BIGINT(10).UNSIGNED, 
            primaryKey: true, 
            allowNull: false,
            autoIncrement:true
            },

        articulo: { type: DataTypes.STRING(255),
                allowNull: false
            },

        rubro:{ type: DataTypes.STRING(255),
            allowNull: false
        },

        
}
    let config = {
        timestamps: true,
        createdAt:  'created_at',
        updatedAt: 'updated_at',
        deletesAt: false
    }

    const varios = sequelize.define(alias,cols,config);

    return varios;
}