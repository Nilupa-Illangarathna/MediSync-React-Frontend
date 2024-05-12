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
