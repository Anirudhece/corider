import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

function Loader() {
  return (
    <Box padding="16" boxShadow="lg" bg="white">
      <SkeletonCircle size="12" />
      <SkeletonText mt="4" noOfLines={10} spacing="5" skeletonHeight="3" />
    </Box>
  );
}

export default Loader;
