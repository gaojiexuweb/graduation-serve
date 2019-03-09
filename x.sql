#设置客户端语言
SET NAMES UTF8;
#放弃数据库(如果存在)x
DROP DATABASE IF EXISTS x;
#创建数据库x
CREATE DATABASE x CHARSET=UTF8;
#进入数据库
USE x;
#创建用户登录表
CREATE TABLE user_login(
  user_id TINYINT PRIMARY KEY AUTO_INCREMENT,
  user_name VARCHAR(16) NOT NULL,
  user_password VARCHAR(16) NOT NULL
);
#插入数据
INSERT INTO user_login VALUES('xugaojie','123456');

