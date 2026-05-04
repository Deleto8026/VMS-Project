package com.example.vms.repository;

import com.example.vms.model.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

// This class connects the backend to the database.
// It is used to run SQL queries on the users table.
@Repository
public class UserRepository {

    private final JdbcTemplate jdbcTemplate; // used to execute SQL queries

    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // This method finds a user using email OR username
    public User findByIdentifier(String identifier) {

        // SQL query to search user in database
        String sql = "SELECT user_id, first_name, last_name, username, email, password, photo, phone, " +
                     "birth_date, address, city, state, zip, bio " +
                     "FROM users " +
                     "WHERE email = ? OR username = ? " +
                     "LIMIT 1";

        // Run query and map result to User object
        List<User> users = jdbcTemplate.query(
            sql,
            (rs, rowNum) -> mapRowToUser(rs),
            identifier, identifier
        );

        // Return first user if found, otherwise null
        return users.isEmpty() ? null : users.get(0);
    }

    // Find user by ID for profile operations
    public User findById(int userId) {
        String sql = "SELECT user_id, first_name, last_name, username, email, password, photo, phone, " +
                     "birth_date, address, city, state, zip, bio " +
                     "FROM users WHERE user_id = ?";

        List<User> users = jdbcTemplate.query(
            sql,
            (rs, rowNum) -> mapRowToUser(rs),
            userId
        );

        return users.isEmpty() ? null : users.get(0);
    }

    // Update profile fields for an existing user
    public int updateProfile(User user) {
        String sql = "UPDATE users SET first_name = ?, last_name = ?, email = ?, photo = ?, phone = ?, " +
                     "birth_date = ?, address = ?, city = ?, state = ?, zip = ?, bio = ? " +
                     "WHERE user_id = ?";
        return jdbcTemplate.update(
            sql,
            user.getFirstName(),
            user.getLastName(),
            user.getEmail(),
            user.getPhoto(),
            user.getPhone(),
            user.getBirthDate(),
            user.getAddress(),
            user.getCity(),
            user.getState(),
            user.getZip(),
            user.getBio(),
            user.getUserId()
        );
    }

    private User mapRowToUser(java.sql.ResultSet rs) throws java.sql.SQLException {
        User user = new User();
        user.setUserId(rs.getInt("user_id"));
        user.setFirstName(rs.getString("first_name"));
        user.setLastName(rs.getString("last_name"));
        user.setUsername(rs.getString("username"));
        user.setEmail(rs.getString("email"));
        user.setPassword(rs.getString("password"));
        user.setPhoto(rs.getString("photo"));
        user.setPhone(rs.getString("phone"));
        user.setBirthDate(rs.getString("birth_date"));
        user.setAddress(rs.getString("address"));
        user.setCity(rs.getString("city"));
        user.setState(rs.getString("state"));
        user.setZip(rs.getString("zip"));
        user.setBio(rs.getString("bio"));
        return user;
    }
}
