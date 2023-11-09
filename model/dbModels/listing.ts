import { DataTypes, TINYINT } from "sequelize";
import DB from "../../db/conection";
import User from "./user";

const Listing = DB.define('Listing',{
    listing_id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.TEXT
    },
    address:{
        type: DataTypes.STRING
    },
    regular_price:{
        type:DataTypes.DECIMAL(13,3)
    },
    discounted_price:{
        type: DataTypes.DECIMAL(13,3)
    },
    bathrooms:{
        type: DataTypes.INTEGER
    },
    bedrooms:{
        type: DataTypes.INTEGER
    },
    furnished:{
        type: TINYINT
    },
    parking:{
        type: DataTypes.INTEGER
    },
    property_type:{
        type:DataTypes.STRING
    },
    offer:{
        type: DataTypes.TINYINT
    },

      user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
    }
}

});

Listing.belongsTo(User,{ foreignKey:'user_id', as: 'user' })


export default Listing;