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

    // Save verification code for a user
    public void saveVerificationCode(String email, String code) {
        String sql = "UPDATE users SET verification_code = ? WHERE email = ?";
        jdbcTemplate.update(sql, code, email);
    }

    // Get verification code for a user
    public String getVerificationCode(String email) {
        String sql = "SELECT verification_code FROM users WHERE email = ?";
        List<String> results = jdbcTemplate.query(
            sql,
            (rs, rowNum) -> rs.getString("verification_code"),
            email
        );
        return results.isEmpty() ? null : results.get(0);
    }

    // Clear verification code after successful verification
    public void clearVerificationCode(String email) {
        String sql = "UPDATE users SET verification_code = NULL WHERE email = ?";
        jdbcTemplate.update(sql, email);
    }

    // Insert new user into database
    public void save(User user) {
        String sql = "INSERT INTO users (first_name, last_name, username, email, password) " +
                    "VALUES (?, ?, ?, ?, ?)";

        jdbcTemplate.update(
            sql,
            user.getFirstName(),
            user.getLastName(),
            user.getUsername(),
            user.getEmail(),
            user.getPassword()
        );
    }
}
