import { FlexBox, Box, FullScreen, Progress } from "spectacle"

export const SlideShowTemplate = () => {

    return <FlexBox
        justifyContent="space-between"
        position="absolute"
        bottom={0}
        width={1}
        >
            <Box padding="0 1em">
                <FullScreen color={'#84BD00'} />
            </Box>
            <Box padding="1em">
                <Progress color={'#84BD00'} />
            </Box>
        </FlexBox>
}