export const getAvailableAppointmentsBySpeciality = async (
  doctorSpeciality,
  setAppointments
) => {
  if (doctorSpeciality.length === 0) {
    return;
  }

  const response = await fetch(
    "http://localhost:3000/get-available-appointments",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ specialty: doctorSpeciality }),
    }
  );

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const appointments = await response.json();

  setAppointments(appointments.data);
};

export const bookAppointment = async (
  patientEmail,
  patientId,
  appointmentId,
  setBookedAppointmentId
) => {
  const response = await fetch("http://localhost:3000/book-appointment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ patientEmail, patientId, appointmentId }),
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  if (data.message === "Appointment booked successfully") {
    setBookedAppointmentId(appointmentId);
  }

  return data.message;
};
