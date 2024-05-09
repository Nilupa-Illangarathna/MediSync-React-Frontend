import { Stack, Typography } from "@mui/material"
import React from "react"
import { MdPerson, MdLocalHospital, MdAssignment } from "react-icons/md"

const HowItWorksSection = () => {
  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={4}
      marginY={4}
      width={"100vw"}
    >
      <Typography variant='h3'>How Does MediSync Work ?</Typography>

      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='flex-start'
        spacing={4}
        width={"100vw"}
        paddingX={40}
      >
        {/* First box */}
        <Stack justifyContent={"center"} alignItems='center'>
          <MdPerson size={48} /> {/* React icon */}
          <Typography textAlign='center' variant='h6'>
            Patients or doctors register and create their accounts
          </Typography>
        </Stack>

        {/* Second box */}
        <Stack alignItems='center'>
          <MdLocalHospital size={48} /> {/* React icon */}
          <Typography textAlign='center' variant='h6'>
            Doctors manage patient appointments and medical records
          </Typography>
        </Stack>

        {/* Third box */}
        <Stack alignItems='center'>
          <MdAssignment size={48} /> {/* React icon */}
          <Typography textAlign='center' variant='h6'>
            Patients access medical reports and communicate with doctors securely
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default HowItWorksSection
