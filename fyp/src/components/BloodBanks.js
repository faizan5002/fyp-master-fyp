import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";

const BloodBanks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bloodBanks, setBloodBanks] = useState([
    {
      name: "Pakistan Red Crescent Society Blood Bank",
      contactNumber: "051-9271978",
      email: "info@redcrescent.org.pk",
      address: "80-C, Adamjee Road, Saddar, Rawalpindi",
    },
    {
      name: "Shifa Blood and Marrow Transplant Unit",
      contactNumber: "051-8464211",
      email: "info@shifa.com",
      address: "H-8/4, Islamabad",
    },
    {
      name: "Armed Forces Institute of Transfusion (AFIT)",
      contactNumber: "051-9271002",
      email: "info@afit.com",
      address: "Murree Road, Rawalpindi",
    },
    {
      name: "PIMS Hospital Blood Bank",
      contactNumber: "051-9261170",
      email: "info@pims.com",
      address: "PIMS Hospital, G-8/3, Islamabad",
    },
    {
      name: "Rawalpindi Institute of Urology and Transplant (RIUT)",
      contactNumber: "051-9271002",
      email: "info@riut.com",
      address: "Tipu Road, Rawalpindi",
    },
    {
      name: "Fatimid Foundation",
      contactNumber: "042-35831071",
      email: "info@fatimid.org.pk",
      address: "393-A, Punjab Society, Lahore",
    },
    {
      name: "Sundas Foundation",
      contactNumber: "042-35870201",
      email: "info@sundas.org.pk",
      address: "9-C, Model Town, Lahore",
    },
    {
      name: "Agha Khan University Hospital Blood Bank",
      contactNumber: "042-111-911-911",
      email: "N/A",
      address: "Stadium Road, Karachi",
    },

    // Multan Blood Banks
    {
      name: "Fatimid Foundation",
      contactNumber: "061-4543622",
      email: "info@fatimid.org.pk",
      address: "60-B, Industrial Estate, Multan",
    },
    {
      name: "Sundas Foundation",
      contactNumber: "061-4582525",
      email: "info@sundas.org.pk",
      address: "14-B, Industrial Estate, Multan",
    },
    {
      name: "Blood Bank of Nishtar Hospital",
      contactNumber: "061-9200235",
      email: "N/A",
      address: "Nishtar Hospital, Multan",
    },

    // Gujranwala Blood Banks
    {
      name: "Sundas Foundation",
      contactNumber: "055-3258112",
      email: "info@sundas.org.pk",
      address: "Opposite Civil Lines Police Station, Civil Lines, Gujranwala",
    },
    {
      name: "Al-Mustafa Blood Bank",
      contactNumber: "055-3254005",
      email: "N/A",
      address: "Gulzar Colony, Gujranwala",
    },
    {
      name: "Blood Bank of District Headquarters Hospital",
      contactNumber: "055-9200867",
      email: "N/A",
      address: "GT Road, Gujranwala",
    },
    {
      name: "District Headquarters (DHQ) Hospital Blood Bank",
      contactNumber: "051-9280104",
      email: "N/A",
      address: "Circular Road, Dera Ismail Khan",
    },
    {
      name: "Indus Hospital Blood Center",
      contactNumber: "021-35112709",
      email: "info@indushospital.org.pk",
      address: "Korangi Crossing, Karachi",
    },
    {
      name: "Hussaini Blood Bank",
      contactNumber: "021-32227323",
      email: "N/A",
      address: "Numaish Chowrangi, M.A. Jinnah Road, Karachi",
    },

    // Faisalabad Blood Banks
    {
      name: "Allied Hospital Blood Bank",
      contactNumber: "041-9210080",
      email: "N/A",
      address: "Allied Hospital, Faisalabad",
    },
    {
      name: "Fatimid Foundation",
      contactNumber: "041-2604011",
      email: "info@fatimid.org.pk",
      address: "Abdullahpur, Faisalabad",
    },

    // Wah Cantt Blood Banks
    {
      name: "Combined Military Hospital (CMH) Blood Bank",
      contactNumber: "051-905521047",
      email: "N/A",
      address: "CMH Road, Wah Cantt",
    },

  ]);


    // Add more blood banks as needed

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBloodBanks = bloodBanks.filter((bloodBank) =>
    bloodBank.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="body-bg">
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="srch-h">Search by City</Form.Label>
            <Form.Control
              className="srch-br"
              type="text"
              placeholder="Enter city name"
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
        <Table striped bordered hover>
          <thead className="form-bg">
            <tr className="form-tr">
              <th>Blood Bank </th>
              <th>Contact</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {filteredBloodBanks.map((bloodBank, index) => (
              <tr key={index}>
                <td>{bloodBank.name}</td>
                <td>{bloodBank.contactNumber}</td>
                <td>{bloodBank.email}</td>
                <td>{bloodBank.address}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default BloodBanks;
