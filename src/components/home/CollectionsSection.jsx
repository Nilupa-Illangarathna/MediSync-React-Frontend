import {Grid, Stack, Typography} from "@mui/material"
import React from "react"
import {items} from "../../values/items"
import ItemCard from "./ItemCard"

const CollectionsSection = () => {
    return (
        <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={4}
            marginY={4}
            width={"100vw"}
        >
            <Typography variant='h3'>Collections</Typography>

            <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='flex-start'
                spacing={4}
                width={"100vw"}
                paddingX={40}
            >
                <Grid container spacing={2}>
                    {items.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <ItemCard
                                image={item.image}
                                inStock={item.inStock}
                                name={item.name}
                                price={item.price}
                                key={item.id}
                                id={item.id}
                            />
                        </Grid>
                    ))}
                </Grid>

            </Stack>
        </Stack>
    )
}

export default CollectionsSection
