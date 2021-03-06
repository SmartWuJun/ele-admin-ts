/*
 * @Descripttion: 食品model层
 * @version: 
 * @Author: 笑佛弥勒
 * @Date: 2019-08-22 20:10:27
 * @LastEditors  : 笑佛弥勒
 * @LastEditTime : 2020-02-05 18:12:38
 */
import { Application } from "egg";

export default function (app: Application) {
    const { STRING, DECIMAL, BIGINT, INTEGER } = app.Sequelize;
    const Food = app.model.define(
        "food",
        {
          id: {
            type: BIGINT,
            primaryKey: true,
            autoIncrement: true
          },
          name: STRING(255),
          introduce: STRING(255),
          category: STRING(50),
          image: STRING(50),
          shop_id: BIGINT,
          rate: INTEGER,
          price: DECIMAL,
          package_price: DECIMAL,
          mon_sale: BIGINT,
          score: STRING(10),
          is_delete: STRING(10)
        },
        {
          freezeTableName: false,
          tableName: "food",
          timestamps: false
        }
    )
    return class extends Food {
      static async findFoodByPage(page: number, pageSize: number) {
        return await this.findAndCountAll({
          offset: (page - 1) * pageSize,
          limit: pageSize,
          where: {
            is_delete: 0
          }
        });
      }
    }
}