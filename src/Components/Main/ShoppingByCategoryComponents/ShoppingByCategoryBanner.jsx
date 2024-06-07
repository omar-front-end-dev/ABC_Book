import { Box } from "@mui/material"
import bannerImage from "../../../../public/images/banner/banner-1.jpg"
import { useTheme } from "@emotion/react"

export const ShoppingByCategoryBanner = () => {
    const theme = useTheme()
  return (
    <Box sx={{pb: theme.palette.sectionPaddingY.main}}>
      <img style={{width: "100%", }} src={bannerImage} alt="banner image" />
    </Box>
  )
}
