insert into users(user_name,password,enabled)
	values('ram','$2a$10$zs3We2mVtwXVcwwR0dcd7.z6RPasuW3pW4M59eLvvJZuGHC0EWxYW',true);
insert into authorities(user_name,authority) 
	values('ram','ROLE_LIBRARIAN');
	
insert into users(user_name,password,enabled)
	values('kamal','$2a$10$to4vWN5eS6i7L5/8y9ZTseM/KOJ/0msrHpGmpB8VuIhY8yTIyH9xC',true);
insert into authorities(user_name,authority) 
	values('kamal','ROLE_PRINCIPAL');
	
ram:admin@123
kamal:user@123