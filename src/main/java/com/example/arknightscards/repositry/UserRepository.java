package com.example.arknightscards.repositry;

import com.example.arknightscards.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/***
 * 操作user表  crud    api接口   <key 实体类的类型,value 实体类的主键></>
 *
 * findAll()  findById()  findByName  findBYNameandPassword
 *
 * 值类型    引用类型
 * byte,short,int,long,float ,double        Object
 */
public interface UserRepository  extends JpaRepository<User,Long> {

    /***
     * 根据用户名查询用户记录
     * @param username 用户名
     * @return User
     */
    User findByUsername(String username);


    /***
     * 根据用户名和密码查询用户信息
     * @param username 用户名
     * @param password 密码
     * @return User
     */
    User findByUsernameAndPassword(String username,String password);

}
