package org.kajal.mallick.service;

import org.kajal.mallick.dao.UserDetailsDao;
import org.kajal.mallick.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("userDetailsService")
public class UserDetailsServiceImp implements UserDetailsService {

    private UserDetailsDao userDetailsDao;

    @Autowired
    public UserDetailsServiceImp(UserDetailsDao userDetailsDao) {
        this.userDetailsDao = userDetailsDao;
    }

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        User user = userDetailsDao.findUserByUsername(userName);

        org.springframework.security.core.userdetails.User.UserBuilder builder = null;

        if(user != null){
            builder = org.springframework.security.core.userdetails.User.withUsername(userName);
            builder.disabled(!user.isEnabled());
            builder.password(user.getPassword());
            String[] authorities = user.getAuthorities().stream().map(a->a.getAuthority()).toArray(String[]::new);
            builder.authorities(authorities);
        } else{
            throw new UsernameNotFoundException("User not found.");
        }
        return builder.build();
    }
}
