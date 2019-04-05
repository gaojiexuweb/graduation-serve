/*
Navicat MySQL Data Transfer

Source Server         : datasql
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : x

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2019-04-06 00:13:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `order`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(16) NOT NULL AUTO_INCREMENT COMMENT '自增长',
  `orderNumber` varchar(128) DEFAULT NULL COMMENT '订单编号',
  `consignee` varchar(128) DEFAULT NULL COMMENT '收货人',
  `contact` varchar(128) DEFAULT NULL COMMENT '联系方式',
  `shippingAddress` varchar(128) DEFAULT NULL COMMENT '发货地址',
  `receivingAddress` varchar(128) DEFAULT NULL COMMENT '收货地址',
  `orderTime` datetime DEFAULT NULL COMMENT '下单时间',
  `orderMoney` int(128) DEFAULT NULL COMMENT '金额',
  `lineArrangementId` int(16) NOT NULL COMMENT '线路id',
  `lineArrangement` varchar(128) DEFAULT NULL COMMENT '线路安排',
  `vehicleNumber` varchar(128) DEFAULT NULL COMMENT '车辆编号',
  `responsible` varchar(128) DEFAULT NULL COMMENT '负责人',
  `servicePhone` varchar(128) DEFAULT NULL COMMENT '客服号码',
  `pickNumber` varchar(128) DEFAULT NULL COMMENT '取件号',
  `status` int(16) unsigned zerofill NOT NULL COMMENT '订单状态',
  `deleteStatus` int(16) unsigned zerofill NOT NULL COMMENT '删除状态 0显示  1删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('1', '001', '张三', '18261197882', '常州市武进区江苏理工学院北院八角楼餐厅后面', '江苏理工学院25栋', '2019-03-20 10:58:37', '8', '2', '', 'v-001', '颜建宸', '18261195771', '2131', '0000000000000000', '0000000000000000');
INSERT INTO `order` VALUES ('2', '002', '李四', '18291109887', '常州市武进区江苏理工学院北院八角楼餐厅后面', '江苏理工学院12栋', '2019-03-21 10:58:43', '2', '1', '', 'v-004', '颜建宸', '18261195771', '1111', '0000000000000000', '0000000000000000');
INSERT INTO `order` VALUES ('3', '003', '王五', '18290098721', '常州市武进区江苏理工学院北院八角楼餐厅后面', '江苏理工学院体育馆', '2019-03-18 10:58:48', '7', '23', '', 'v-003', '颜建宸', '1827383638', '324', '0000000000000000', '0000000000000000');
INSERT INTO `order` VALUES ('4', '004', '曹六', '18291109882', '常州市武进区江苏理工学院北院八角楼餐厅后面', '江苏理工学院体育馆', '2019-03-15 11:33:36', '4', '3', '范围三', 'v-004', '工作员三', '18293302292', '3476', '0000000000000000', '0000000000000000');
INSERT INTO `order` VALUES ('5', '005', '周七', '18291109882', '常州市武进区江苏理工学院北院八角楼餐厅后面', '江苏理工学院27栋', '2019-03-22 11:52:02', '6', '3', '范围三', 'v-003', '工作员二', '19289932232', '0393', '0000000000000000', '0000000000000000');
INSERT INTO `order` VALUES ('6', null, '徐高杰', '1829304843', '常州市武进区江苏理工学院北院八角楼餐厅后面', '江苏理工学院59栋', '2019-03-29 00:00:00', null, '0', null, 'v-16457', null, null, null, '0000000000000000', '0000000000000000');
INSERT INTO `order` VALUES ('7', null, '徐高杰', '123414121', '常州市武进区江苏理工学院北院八角楼餐厅后面', '江苏理工学院60栋', '2019-03-29 00:00:00', null, '0', null, 'v-84752', null, null, null, '0000000000000000', '0000000000000000');
INSERT INTO `order` VALUES ('8', null, '213', '123', '常州市武进区江苏理工学院北院八角楼餐厅后面', '江苏理工学院25栋', '2019-03-29 00:00:00', null, '0', null, null, null, null, null, '0000000000000000', '0000000000000000');
INSERT INTO `order` VALUES ('9', 'v-43313', '闫建新', '1224324324', '常州市武进区江苏理工学院北院八角楼餐厅后面', '江苏理工学院体育馆', '2019-03-29 00:00:00', null, '0', null, null, null, null, null, '0000000000000000', '0000000000000000');
INSERT INTO `order` VALUES ('10', 'v-80850', '张萨达', '13221', '常州市武进区江苏理工学院北院八角楼餐厅后面', '江苏理工学院35栋', '2019-03-29 00:00:00', null, '0', null, null, null, null, null, '0000000000000000', '0000000000000000');
INSERT INTO `order` VALUES ('11', 'v-21070', '演示', '13221', '常州市武进区江苏理工学院北院八角楼餐厅后面', '江苏理工学院61栋', '2019-03-29 00:00:00', '6', '1', null, 'v-001', '颜建宸', '18293302992', '1234', '0000000000000001', '0000000000000000');
INSERT INTO `order` VALUES ('12', 'v-94948', '颜建长', '120983082731', '常州市武进区江苏理工学院北院八角楼餐厅后面', '江苏理工学院58栋', '2019-03-29 00:00:00', '4', '2', null, 'v-002', '颜建宸', '18261195771', 'w1312', '0000000000000000', '0000000000000000');
INSERT INTO `order` VALUES ('13', 'v-29448', '王丹宇', '1287932917', '常州市武进区江苏理工学院北院八角楼餐厅后面', '江苏理工学院59栋', '2019-03-30 00:00:00', '8', '2', null, 'v-002', '颜建宸', '18293302992', '3213', '0000000000000000', '0000000000000000');
INSERT INTO `order` VALUES ('14', 'v-00312', '任永强', '2912938192', '常州市武进区江苏理工学院北院八角楼餐厅后面', '江苏理工学院25栋', '2019-03-30 00:00:00', '6', '1', null, 'v-002', '徐高杰', '18261195771', '3244', '0000000000000000', '0000000000000000');
INSERT INTO `order` VALUES ('15', 'v-8291', '汤大伟', '18293712', '常州市武进区江苏理工学院北院八角楼餐厅后面', '江苏理工学院25栋', '2019-04-05 00:00:00', '8', '2', null, 'v-002', '颜建宸', '18293302992', '2145', '0000000000000000', '0000000000000000');
INSERT INTO `order` VALUES ('16', '213141', '徐高杰', '18261195771', '江苏理工学院', '江苏理工学院图书馆', '2019-04-05 00:00:00', '6', '2', null, 'v-002', '颜建宸', '18293302992', '3531', '0000000000000001', '0000000000000000');

-- ----------------------------
-- Table structure for `price`
-- ----------------------------
DROP TABLE IF EXISTS `price`;
CREATE TABLE `price` (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `lineArrangementId` int(16) NOT NULL,
  `lineArrangement` varchar(128) DEFAULT NULL COMMENT '线路安排',
  `largeMoney` int(16) DEFAULT NULL COMMENT '大件价格',
  `smallMoney` int(16) DEFAULT NULL COMMENT '小件价格',
  `deleteStatus` int(16) unsigned zerofill NOT NULL COMMENT '删除状态  0显示  1删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of price
-- ----------------------------
INSERT INTO `price` VALUES ('1', '1', '范围一', '6', '4', '0000000000000000');
INSERT INTO `price` VALUES ('2', '2', '范围二', '8', '6', '0000000000000001');
INSERT INTO `price` VALUES ('3', '3', '范围三', '10', '8', '0000000000000001');
INSERT INTO `price` VALUES ('23', '0', '范围四', '18', '14', '0000000000000000');
INSERT INTO `price` VALUES ('24', '0', '范围五', '12', '10', '0000000000000000');

-- ----------------------------
-- Table structure for `user_login`
-- ----------------------------
DROP TABLE IF EXISTS `user_login`;
CREATE TABLE `user_login` (
  `user_id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(16) NOT NULL,
  `user_password` varchar(16) NOT NULL,
  `user_sex` varchar(128) DEFAULT NULL COMMENT '性别',
  `user_phone` varchar(128) DEFAULT NULL COMMENT '电话',
  `user_age` int(16) DEFAULT NULL COMMENT '年龄',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_login
-- ----------------------------
INSERT INTO `user_login` VALUES ('1', 'xgj', '123456', '男', '123', '12');
INSERT INTO `user_login` VALUES ('2', 'xugaojie', '123456', '男', '18261195771', '22');
INSERT INTO `user_login` VALUES ('15', '123', '123', '女', '123', '12');
INSERT INTO `user_login` VALUES ('16', 'qwe', '123', '男', '214143213', '22');
INSERT INTO `user_login` VALUES ('17', 'qwe', 'qwe', '男', '214143213', '22');
INSERT INTO `user_login` VALUES ('18', '徐高杰', '123', null, null, null);

-- ----------------------------
-- Table structure for `vehicle_configuration`
-- ----------------------------
DROP TABLE IF EXISTS `vehicle_configuration`;
CREATE TABLE `vehicle_configuration` (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `vehicleType` varchar(128) DEFAULT NULL COMMENT '车辆型号',
  `vehicleNumber` varchar(128) DEFAULT NULL COMMENT '车辆编号',
  `largeNumber` int(16) DEFAULT NULL COMMENT '大件格数',
  `smallNumber` int(16) DEFAULT NULL COMMENT '小件格数',
  `color` varchar(128) DEFAULT NULL COMMENT '颜色',
  `length` int(16) DEFAULT NULL COMMENT '长度',
  `width` int(16) DEFAULT NULL COMMENT '宽度',
  `height` int(16) DEFAULT NULL COMMENT '高度',
  `deleteStatus` int(16) unsigned zerofill NOT NULL COMMENT '删除状态 0显示 1删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vehicle_configuration
-- ----------------------------
INSERT INTO `vehicle_configuration` VALUES ('1', 'T-01', '0003', '15', '35', '红色', '165', '125', '120', '0000000000000000');
INSERT INTO `vehicle_configuration` VALUES ('2', 'T-01', '0012', '20', '20', '黑色', '160', '110', '115', '0000000000000000');
INSERT INTO `vehicle_configuration` VALUES ('3', 'T-02', '0015', '30', '20', '白色', '135', '110', '105', '0000000000000000');
INSERT INTO `vehicle_configuration` VALUES ('4', 'T-03', '0017', '40', '20', '黑色', '140', '120', '110', '0000000000000000');

-- ----------------------------
-- Table structure for `vehicle_information`
-- ----------------------------
DROP TABLE IF EXISTS `vehicle_information`;
CREATE TABLE `vehicle_information` (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `vehicleNumber` varchar(128) DEFAULT NULL COMMENT '车辆编号',
  `responsible` varchar(128) DEFAULT NULL COMMENT '负责人',
  `lineArrangementId` int(16) NOT NULL,
  `lineArrangement` varchar(128) DEFAULT NULL COMMENT '线路安排',
  `servicePhone` varchar(128) DEFAULT NULL COMMENT '客服电话',
  `status` varchar(128) DEFAULT NULL COMMENT '状态',
  `largeNumber` int(16) DEFAULT NULL COMMENT '大件格数',
  `smallNumber` int(16) DEFAULT NULL COMMENT '小件格数',
  `deleteStatus` int(16) unsigned zerofill NOT NULL COMMENT '删除状态 0显示 1删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vehicle_information
-- ----------------------------
INSERT INTO `vehicle_information` VALUES ('1', 'v-001', '徐高杰', '2', '', '18261195771', '进行中', '15', '35', '0000000000000000');
INSERT INTO `vehicle_information` VALUES ('2', 'v-002', '颜建宸', '24', '', '18293302992', '进行中', '20', '30', '0000000000000000');
INSERT INTO `vehicle_information` VALUES ('3', 'v-003', '工作员三', '3', '', '19283283921', '维修中', '10', '40', '0000000000000000');
INSERT INTO `vehicle_information` VALUES ('4', 'v-004', '汤大伟', '2', null, '1827383638', '休息中', '30', '20', '0000000000000000');
INSERT INTO `vehicle_information` VALUES ('5', 'v-001', '任永强', '2', null, '19283273891', '休息中', '30', '10', '0000000000000000');
INSERT INTO `vehicle_information` VALUES ('6', 'v-02', 'dqw', '3', null, '12321314', '休息中', '6', '4', '0000000000000000');
