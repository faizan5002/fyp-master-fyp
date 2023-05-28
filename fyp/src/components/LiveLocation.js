
import React, { useState, useEffect } from "react";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function LiveLocation() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("https://blood-bank-backend-iaqf.onrender.com/api/v1/donors");
      setUsers(res.data);
      setIsLoaded(true);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const map = L.map("map").setView([0, 0], 2);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
      }).addTo(map);

      const infoWindow = L.popup();

      users.forEach((user) => {
        const markerIcon = L.icon({
          iconUrl: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",
          iconSize: [40, 40],
          iconAnchor: [20, 40],
          popupAnchor: [0, -40],
        });

        const marker = L.marker([user.latitude, user.longitude], {
          icon: markerIcon,
        }).addTo(map);

        marker.bindPopup(`
          <div>
            <p>Name: ${user.name}</p>
            <p>Phone Number: ${user.phone}</p>
            <p>City: ${user.city}</p>
            <p>Blood Type: ${user.bloodGroup}</p>
          </div>
        `);

        marker.on("click", () => {
          infoWindow.setContent(`
            <div>
              <p>Name: ${user.name}</p>
              <p>Phone Number: ${user.phone}</p>
              <p>City: ${user.city}</p>
              <p>Blood Type: ${user.bloodGroup}</p>
            </div>
          `);

          infoWindow.setLatLng(marker.getLatLng());
          infoWindow.openOn(map);
        });
      });

      return () => {
        map.remove();
      };
    }
  }, [isLoaded, users]);

  return (
    <div>
      {isLoaded ? (
        <div id="map" style={{ height: "100vh" }}></div>
      ) : (
        <p>Loading...</p>
      )}
      <p>List of Donors:</p>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} ({user.bloodType})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LiveLocation;














































