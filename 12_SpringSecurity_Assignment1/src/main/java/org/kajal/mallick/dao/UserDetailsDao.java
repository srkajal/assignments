package org.kajal.mallick.dao;

import org.kajal.mallick.entities.Authorities;
import org.kajal.mallick.entities.User;

import java.util.List;

public interface UserDetailsDao {
    User findUserByUsername(String username);
    void saveUse(User user);
}
