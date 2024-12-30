package com.example.hallbooking.repository;

import com.example.hallbooking.entity.HallBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HallBookingRepository extends JpaRepository<HallBooking, Integer> {
}