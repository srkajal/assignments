package org.kajal.mallick.entities;

import javax.persistence.*;

@Entity
@Table(name = "authorities")
public class Authorities {

    private String authority;
    private User user;

    @Id
    @Column(name = "authority")
    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    @ManyToOne
    @JoinColumn(name = "user_name")
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
