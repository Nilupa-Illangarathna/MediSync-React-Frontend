import React, {useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom"
import {items} from "../../values/items"
import {Button, Chip, Stack, Typography} from "@mui/material"
import {colors} from "../../utils"
import {GrFormNextLink} from "react-icons/gr"
import {FaCartPlus} from "react-icons/fa"

const ProductPage = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        // Convert productId to a number since it's a string from the URL params
        const id = parseInt(productId, 10)
        // Find the product in the items array
        const foundProduct = items.find((item) => item.id === id)
        // Set the product state
        setProduct(foundProduct)
    }, [productId]) // Dependency array includes productId to rerun the effect if the URL parameter changes

    if (product == null) return <Typography>No Product Found</Typography>

    return (
        <Stack
            direction='column'
            justifyContent='center'
            alignItems='flex-start'
            spacing={2}
            padding={4}
        >
            <Typography variant='h3'>{product.name}</Typography>

            <Stack
                direction='row'
                justifyContent='flex-start'
                alignItems='flex-end'
                spacing={2}
            >
                <img width={"50%"} src={product.image} alt='' srcset=''/>
                <Stack
                    direction='column'
                    justifyContent='flex-end'
                    alignItems='flex-start'
                    spacing={2}
                >
                    <Typography
                        sx={{
                            backgroundColor: colors.sectionGrey,
                            padding: 2,
                            borderRadius: 6,
                            color: "white",
                        }}
                        variant='h3'
                    >
                        $ {product.price}
                    </Typography>
                    <Typography variant='h5'>{product.description}</Typography>
                </Stack>
            </Stack>
            <Stack spacing={2} direction={"row"}>
                <Button
                    onClick={() => {
                        navigate(`/tryOn/${productId}`)
                    }}
                    variant='contained'
                    endIcon={<GrFormNextLink/>}
                >
                    Get to service
                </Button>
                {product.inStock ? (
                    <Button variant='contained' endIcon={<FaCartPlus/>}>
                        {product.buttontext}
                    </Button>
                ) : (
                    <Chip label='Out of Stock' color='error'/>
                )}
            </Stack>
        </Stack>
    )
}

export default ProductPage
