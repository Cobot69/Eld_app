import React, { useEffect } from 'react';
import './Cabbook.css';

const CabBook = () => {
    useEffect(() => {
        generateTimeSlots();
        setMinDate();
    }, []);

    const drivers = [
        // Sample driver data
        { id: 1, name: "Surya Kumar", phone: "+91-9876543201", vehicle: "auto", vehicleNumber: "MH 02 AB 1234", rating: 4.5 },
        { id: 2, name: "MS Dhoni", phone: "+91-9876543202", vehicle: "car", vehicleNumber: "MH 02 CD 5678", rating: 4.8 },
        { id: 3, name: "Virat Kohli", phone: "+91-9876543203", vehicle: "auto", vehicleNumber: "MH 02 EF 9012", rating: 4.3 },
        { id: 4, name: "Rohit Sharma", phone: "+91-9876543204", vehicle: "car", vehicleNumber: "MH 02 GH 3456", rating: 4.7 },
        { id: 5, name: "Mohammed Siraj", phone: "+91-9876543205", vehicle: "auto", vehicleNumber: "MH 02 IJ 7890", rating: 4.6 }
    ];

    const savedAddresses = {
        home: "Focus Mart shirur park, Hubli",
        work: "KLE Technological University, Hubli",
        favorite: "Tolankere Lake & Garden, Vidya Nagar, Hubli"
    };

    let currentStep = 1;
    let selectedVehicle = null;
    let bookingType = 'now';
    let assignedDriver = null;

    const generateTimeSlots = () => {
        const timeSelect = document.getElementById('time');
        for (let i = 0; i < 24; i++) {
            const hour = i.toString().padStart(2, '0');
            const timeValue = `${hour}:00`;
            const option = new Option(timeValue, timeValue);
            timeSelect.add(option);
        }
    };

    const setMinDate = () => {
        const dateInput = document.getElementById('date');
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.value = today;
    };

    const useAddress = (type) => {
        document.getElementById('pickup').value = savedAddresses[type];
    };

    const detectLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const pickup = document.getElementById('pickup');
                pickup.value = `${position.coords.latitude}, ${position.coords.longitude}`;
            }, error => {
                alert('Error detecting location: ' + error.message);
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    const setBookingType = (type) => {
        bookingType = type;
        const scheduleSection = document.getElementById('scheduleSection');
        const btns = document.querySelectorAll('.type-btn');
        
        btns.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        scheduleSection.style.display = type === 'later' ? 'block' : 'none';
    };

    const selectVehicle = (type) => {
        selectedVehicle = type;
        const vehicles = document.querySelectorAll('.vehicle-option');
        vehicles.forEach(v => v.classList.remove('selected'));
        event.currentTarget.classList.add('selected');
    };

    const nextStep = (step) => {
        if (validateCurrentStep()) {
            if (step === 3) {
                assignDriver();
                updateSummary();
            }
            showStep(step);
        }
    };

    const prevStep = (step) => {
        showStep(step);
    };

    const showStep = (step) => {
        currentStep = step;
        document.querySelectorAll('.booking-section').forEach(section => {
            section.style.display = 'none';
        });
        document.querySelectorAll('.step').forEach((s, index) => {
            s.classList.toggle('active', index + 1 <= step);
        });
        
        document.getElementById(getStepId(step)).style.display = 'block';
    };

    const getStepId = (step) => {
        switch(step) {
            case 1: return 'locationSection';
            case 2: return 'vehicleSection';
            case 3: return 'confirmSection';
        }
    };

    const validateCurrentStep = () => {
        switch(currentStep) {
            case 1:
                return validateLocationStep();
            case 2:
                return validateVehicleStep();
            default:
                return true;
        }
    };

    const validateLocationStep = () => {
        const pickup = document.getElementById('pickup').value;
        const dropoff = document.getElementById('dropoff').value;
        
        if (!pickup || !dropoff) {
            alert('Please enter both pickup and drop-off locations');
            return false;
        }
        
        if (bookingType === 'later') {
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            if (!date || !time) {
                alert('Please select both date and time for scheduled booking');
                return false;
            }
        }
        
        return true;
    };

    const validateVehicleStep = () => {
        if (!selectedVehicle) {
            alert('Please select a vehicle type');
            return false;
        }
        return true;
    };

    const assignDriver = () => {
        const availableDrivers = drivers.filter(driver => driver.vehicle === selectedVehicle);
        assignedDriver = availableDrivers[Math.floor(Math.random() * availableDrivers.length)];
    };

    const updateSummary = () => {
        const summaryDetails = document.getElementById('summaryDetails');
        const driverDetails = document.getElementById('driverDetails');
        
        summaryDetails.innerHTML = `
            <p><strong>Pickup:</strong> ${document.getElementById('pickup').value}</p>
            <p><strong>Drop-off:</strong> ${document.getElementById('dropoff').value}</p>
            <p><strong>Vehicle Type:</strong> ${selectedVehicle.toUpperCase()}</p>
            ${bookingType === 'later' ? `
                <p><strong>Date:</strong> ${document.getElementById('date').value}</p>
                <p><strong>Time:</strong> ${document.getElementById('time').value}</p>
            ` : ''}
        `;
        
        driverDetails.innerHTML = `
            <h3>Driver Details</h3>
            <p><strong>Name:</strong> ${assignedDriver.name}</p>
            <p><strong>Vehicle Number:</strong> ${assignedDriver.vehicleNumber}</p>
            <p><strong>Rating:</strong> ${assignedDriver.rating} ⭐</p>
            <p><strong>Contact:</strong> <a href="tel:${assignedDriver.phone}">${assignedDriver.phone}</a></p>
        `;
    };

    const confirmBooking = () => {
        alert('Booking confirmed! Your driver is on the way.');
        window.location.href = 'index.html'; // Redirect to home page
    };

    return (
        <div className="container">
            <header className="header">
                <div className="header-container">
                    <div className="branding">
                        <a href="home.html" className="logo-link">
                            <h1>ElderNet</h1>
                        </a>
                    </div>
                </div>
            </header>

            <div className="booking-card">
                <div className="progress-steps">
                    <div className="step active" id="step1">Location</div>
                    <div className="step" id="step2">Vehicle</div>
                    <div className="step" id="step3">Confirm</div>
                </div>

                <div className="booking-section" id="locationSection">
                    <div className="saved-addresses">
                        <h3>Saved Locations</h3>
                        <div className="address-buttons">
                            <button onClick={() => useAddress('home')}>Home</button>
                            <button onClick={() => useAddress('work')}>Work</button>
                            <button onClick={() => useAddress('favorite')}>Favorite</button>
                        </div>
                    </div>

                    <div className="location-group">
                        <div className="form-group">
                            <label htmlFor="pickup">Pick-Up Location:</label>
                            <input type="text" id="pickup" placeholder="Enter pick-up location" required />
                            <button type="button" className="location-detect" onClick={detectLocation}>Detect Location</button>
                        </div>

                        <div className="form-group">
                            <label htmlFor="dropoff">Drop-Off Location:</label>
                            <input type="text" id="dropoff" placeholder="Enter drop-off location" required />
                        </div>
                    </div>

                    <div className="booking-type">
                        <button className="type-btn active" onClick={() => setBookingType('now')}>Book Now</button>
                        <button className="type-btn" onClick={() => setBookingType('later')}>Schedule Later</button>
                    </div>

                    <div className="schedule" id="scheduleSection">
                        <div className="form-group">
                            <label htmlFor="date">Date:</label>
                            <input type="date" id="date" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="time">Time:</label>
                            <select id="time"></select>
                        </div>
                    </div>

                    <div className="button-group">
                        <button onClick={() => nextStep(2)}>Next</button>
                    </div>
                </div>

                <div className="booking-section" id="vehicleSection" style={{ display: 'none' }}>
                    <h3>Select Vehicle Type</h3>
                    <div className="vehicle-options">
                        <div className="vehicle-option" onClick={() => selectVehicle('auto')}>
                            <h4>Auto</h4>
                        </div>
                        <div className="vehicle-option" onClick={() => selectVehicle('car')}>
                            <h4>Car</h4>
                        </div>
                    </div>
                    <div className="button-group">
                        <button onClick={() => prevStep(1)}>Back</button>
                        <button onClick={() => nextStep(3)}>Next</button>
                    </div>
                </div>

                <div className="booking-section" id="confirmSection" style={{ display: 'none' }}>
                    <h3>Confirm Your Booking</h3>
                    <div id="summaryDetails"></div>
                    <div id="driverDetails"></div>
                    <div className="button-group">
                        <button onClick={() => prevStep(2)}>Back</button>
                        <button onClick={confirmBooking}>Confirm Booking</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CabBook;
