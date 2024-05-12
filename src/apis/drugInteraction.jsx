export const checkDDI = async (drugA, drugB, setInteraction) => {
  if (drugA.length === 0 || drugB.length === 0) {
    return;
  }

  const response = await fetch("http://localhost:8000/ddi_checker", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ drugA, drugB }),
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const interaction_level = await response.json();
  setInteraction(interaction_level.interaction_level);
};

export const getDrugsList = async (setDrugA_list, setDrugB_list) => {
  const response = await fetch("http://localhost:8000/drugs_list", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const drugLists = await response.json();

  setDrugA_list(drugLists.drugA_list);
  setDrugB_list(drugLists.drugB_list);
};
