export const predictDisease = async (selectedSymptoms, setPredictedDisease) => {
    if (selectedSymptoms.length === 0) {
        return;
    }

    const response = await fetch(
        "http://127.0.0.1:8000/predictDiseaseFromSymptoms",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({symptoms: selectedSymptoms.join(",")}),
        }
    );

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const prediction = await response.json();
    setPredictedDisease(prediction.predicted_disease);
};

export const recommendDoctorUsingSymptoms = async (
    selectedSymptoms,
    setRecommendedDoctor
) => {
    if (selectedSymptoms.length === 0) {
        return;
    }

    const response = await fetch(
        "http://127.0.0.1:8000/recommendDoctor/symptoms",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({symptoms: selectedSymptoms.join(",")}),
        }
    );

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const recommendation = await response.json();

    setRecommendedDoctor(recommendation.doctor);
};

export const recommendDoctorUsingDisease = async (
    selectedDisease,
    setRecommendedDoctorFromDisease
) => {
    if (selectedDisease.length === 0) {
        return;
    }

    const response = await fetch(
        "http://127.0.0.1:8000/recommendDoctor/disease",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({disease: selectedDisease}),
        }
    );

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const recommendation = await response.json();

    setRecommendedDoctorFromDisease(recommendation.doctor);
};
