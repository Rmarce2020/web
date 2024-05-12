module.exports = (sequelize, DataTypes) => {
    let alias = "plantas";
    let cols  = {
        id: {type:DataTypes.BIGINT(10).UNSIGNED, 
            primaryKey: true, 
            allowNull: false,
            autoIncrement:true
            },

        planta: { type: DataTypes.STRING(500),
                allowNull: false
            },

        familia:{ type: DataTypes.STRING(500),
            allowNull: false
        },

        ubicacion: { type: DataTypes.STRING(500),
            allowNull: false
        },

        stock:  {type: DataTypes.BIGINT(10)},
        allowNull: false
        
}
    let config = {
        timestamps: true,
        createdAt:  'created_at',
        updatedAt: 'updated_at',
        deletesAt: false
    }

    const plantas = sequelize.define(alias,cols,config);

    plantas.associate = function(models){
        plantas.belongsTo(models.varios,{
            as: "varios",
            foreignKey:'id'
        });
}
    return plantas;
}