package com.example.vms.controller;

import com.example.vms.model.Event;
import com.example.vms.repository.EventRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/events")
public class EventController 
{
    private final EventRepository eventRepository;

    public EventController(EventRepository eventRepository) 
    {
        this.eventRepository = eventRepository;
    }

    // Get all events
    @GetMapping
    public ResponseEntity<?> getAllEvents() 
    {
        try 
        {
            List<Event> events = eventRepository.findAllEvents();
            return ResponseEntity.ok(events);
        } 
        catch (Exception e) 
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Error fetching events: " + e.getMessage()));
        }
    }

    // Get a specific event by ID
    @GetMapping("/{eventId}")
    public ResponseEntity<?> getEventById(@PathVariable int eventId) 
    {
        try 
        {
            Event event = eventRepository.findById(eventId);
            if (event == null) 
            {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Map.of("message", "Event not found."));
            }
            return ResponseEntity.ok(event);
        } 
        catch (Exception e) 
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Error fetching event: " + e.getMessage()));
        }
    }

    // Register user for an event
    @PostMapping("/{eventId}/register")
    public ResponseEntity<?> registerForEvent(@PathVariable int eventId, HttpSession session) 
    {
        Integer userId = getUserIdFromSession(session);
        if (userId == null) 
        {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "User is not authenticated."));
        }

        try 
        {
            // Check if user is already registered
            if (eventRepository.isUserRegistered(eventId, userId)) 
            {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(Map.of("message", "User is already registered for this event."));
            }

            int result = eventRepository.registerUserForEvent(eventId, userId);
            if (result > 0) 
            {
                return ResponseEntity.ok(Map.of("message", "Successfully registered for the event."));
            } 
            else 
            {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(Map.of("message", "Failed to register for the event."));
            }
        } 
        catch (Exception e) 
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Error registering for event: " + e.getMessage()));
        }
    }

    // Get all events registered by the current user
    @GetMapping("/registered")
    public ResponseEntity<?> getRegisteredEvents(HttpSession session) 
    {
        Integer userId = getUserIdFromSession(session);
        if (userId == null) 
        {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "User is not authenticated."));
        }

        try 
        {
            List<Event> events = eventRepository.getRegisteredEvents(userId);
            return ResponseEntity.ok(Map.of("events", events));
        } 
        catch (Exception e) 
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Error fetching registered events: " + e.getMessage()));
        }
    }

    // Get only the event IDs for the current user (used for the account display page)
    @GetMapping("/registered-ids")
    public ResponseEntity<?> getRegisteredEventIds(HttpSession session) 
    {
        Integer userId = getUserIdFromSession(session);
        if (userId == null) 
        {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "User is not authenticated."));
        }

        try 
        {
            List<Integer> eventIds = eventRepository.getRegisteredEventIds(userId);
            return ResponseEntity.ok(Map.of("eventIds", eventIds));
        } 
        catch (Exception e) 
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Error fetching registered event IDs: " + e.getMessage()));
        }
    }

    // Helper method to get user ID from session
    private Integer getUserIdFromSession(HttpSession session) 
    {
        Object userId = session.getAttribute("userId");
        return userId instanceof Integer ? (Integer) userId : null;
    }
}
