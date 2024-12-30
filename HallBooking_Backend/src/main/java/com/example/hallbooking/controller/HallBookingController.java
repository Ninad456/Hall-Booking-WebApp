package com.example.hallbooking.controller;

import com.example.hallbooking.entity.HallBooking;
import com.example.hallbooking.service.HallBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class HallBookingController {

    @Autowired
    private HallBookingService service;

    @GetMapping
    public List<HallBooking> getAllBookings() {
        return service.getAllBookings();
    }

    @PostMapping
    public HallBooking saveBooking(@RequestBody HallBooking booking) {
        return service.saveBooking(booking);
    }

    @PutMapping
    public HallBooking updateBooking(@RequestBody HallBooking booking) {
        return service.updateBooking(booking);
    }

    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable int id) {
        service.deleteBooking(id);
    }
}