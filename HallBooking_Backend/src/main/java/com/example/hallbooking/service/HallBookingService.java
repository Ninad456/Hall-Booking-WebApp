package com.example.hallbooking.service;

import com.example.hallbooking.entity.HallBooking;
import com.example.hallbooking.repository.HallBookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HallBookingService {

    @Autowired
    private HallBookingRepository repository;

    public List<HallBooking> getAllBookings() {
        return repository.findAll();
    }

    public HallBooking saveBooking(HallBooking booking) {
        return repository.save(booking);
    }

    public HallBooking updateBooking(HallBooking booking) {
        return repository.save(booking);
    }

    public void deleteBooking(int bookingId) {
        repository.deleteById(bookingId);
    }
}