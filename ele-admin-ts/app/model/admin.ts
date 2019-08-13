/*
 * @Descripttion:
 * @version:
 * @Author: 笑佛弥勒
 * @Date: 2019-08-06 15:17:07
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2019-08-13 20:31:53
 */
import { Application } from "egg";

export default function(app: Application) {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Admin = app.model.define(
    "admin",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      avatar: STRING(255),
      user_name: STRING(255),
      mobile: STRING(50),
      registe_time: DATE(6),
      permissions: STRING(10),
      created_at: DATE(6),
      updated_at: DATE(6),
      password: STRING(255)
    },
    {
      freezeTableName: false,
      tableName: "admins",
      timestamps: false
    }
  );
  return class extends Admin {
    static async updateAvatar(url: string, mobile: string) {
        console.log('!!!!!!!!!')
        return await this.update({avatar: url},{where: {mobile: mobile}})
    }
    static async findByIdMobile(mobile: string) {
      return await this.findOne({
        where: { mobile: mobile }
      });
    }
  };
}
