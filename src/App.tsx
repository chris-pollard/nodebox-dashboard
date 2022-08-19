import * as React from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Flex,
  Spacer,
  Heading,
  extendTheme,
} from "@chakra-ui/react";
import AppCards from "./AppCards";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import HowTo from "./HowTo";

const theme = extendTheme({
  components: {
    Code: {
      baseStyle: {
        fontSize: "20px",
        margin: "1rem 0",
      },
    },
  },
});

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid h="100vh" templateRows="1fr 8fr">
          <Flex>
            <Box marginLeft={2}>
              <Heading>Nodebox</Heading>
            </Box>
            <Spacer />
            <ColorModeSwitcher />
          </Flex>

          <Tabs colorScheme="teal" p="0 10%" overflow="scroll" h="100%">
            <TabList>
              <Tab>Apps</Tab>
              <Tab>Bitcoin Node Status</Tab>
              <Tab>How To</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <AppCards />
              </TabPanel>
              <TabPanel>
                <Text>Coming soon...</Text>
              </TabPanel>
              <TabPanel>
                <HowTo />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
