/*
 * @Descripttion: 
 * @version: 
 * @Author: 笑佛弥勒
 * @Date: 2019-08-12 17:24:57
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2019-08-19 18:34:44
 */
import { Application } from 'egg';

export default function(app: Application) {
    let { validator } = app;
    let reg = /1\d{10}/
    /**
     * @Descripttion: 手机校验
     * @Author: 笑佛弥勒
     * @param {value} 传入手机号 
     * @return: 
     */
    validator.addRule('mobile', (value) => {
        if (reg.test(value)) {
            throw "请填写正确的手机号码";
        }
    })
    /**
     * @Descripttion: 商户添加校验
     * @Author: 笑佛弥勒
     * @param {value} 商户信息
     * @return: 
     */
    validator.addRule('addMerchants', (params) => {
        if (params.name.trim().length === 0) {
            throw "请填写商户名"
        } else if (params.address.trim().length === 0) {
            throw "请填写商户地址"
        } else if (reg.test(params.mobile)) {
            throw "请填写正确的手机号码"
        } else if (params.synopsis.trim().length === 0) {
            throw "请填写商铺简介"
        } else if (params.slogan.trim().length === 0) {
            throw "请填写商铺标语"
        } else if (params.category.trim().length === 0) {
            throw "请选择商铺分类"
        } else if (Number(params.ship_price) != 0 && !Number(params.ship_price)) {
            throw "请填写配送费"
        } else if (Number(params.send_price) != 0 && !Number(params.send_price)) {
            throw "请填写起送价"
        } else if (params.start_time.trim().length === 0) {
            throw "请选择开始营业时间"
        } else if (params.end_time.trim().length === 0) {
            throw "请选择结束营业时间"
        } else if (params.shop_avatar.trim().length === 0) {
            throw "请上传商铺头像"
        } else if (params.business_license.trim().length === 0) {
            throw "请上传营业执照"
        } else if (params.catering_license.trim().length === 0) {
            throw "请上传餐饮许可证"
        } else if (params.longitude.trim().length === 0 || params.latitude.trim().length === 0 ) {
            throw "经纬度错误"
        }
    })
}