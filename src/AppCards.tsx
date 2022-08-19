import * as React from "react";
import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Link,
  Button,
  ButtonGroup,
  Badge,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const {
  REACT_APP_HOST,
  REACT_APP_MEMPOOL_PORT,
  REACT_APP_RTL_PORT,
} = process.env;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function Feature({
  title,
  status,
  desc,
  appLink = undefined,
  githubLink,
  guide = undefined,
  ...rest
}: {
  title: string;
  desc: string;
  status: string;
  appLink: string | undefined;
  githubLink: string;
  guide: string | undefined;
}) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Flex>
        <Heading fontSize="xl">{title}</Heading>
        <Spacer />
        <Badge
          variant="solid"
          colorScheme={status === "active" ? "green" : "red"}
        >
          {status}
        </Badge>
      </Flex>
      <Text mt={4} align="left">
        {desc}
      </Text>
      <ButtonGroup p={5} spacing="1rem">
        <Button isDisabled={!appLink} colorScheme="teal">
          {appLink ? (
            <Link href={appLink} isExternal>
              Open App <ExternalLinkIcon mx="2px" />
            </Link>
          ) : (
            "No app"
          )}
        </Button>

        <Button>
          <Link href={githubLink} isExternal>
            View Code <ExternalLinkIcon mx="2px" />
          </Link>
        </Button>
        <Button isDisabled={!guide} colorScheme="teal">
          {guide ? (
            <Link href={guide} isExternal>
              Tutorial <ExternalLinkIcon mx="2px" />
            </Link>
          ) : (
            "No tutorial available"
          )}
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default function AppCards() {
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Feature
        title="The Mempool Open Source Project"
        desc="Mempool is the fully-featured mempool visualizer, explorer, and API service running on your nodebox. 
  
        It is an open-source project developed and operated for the benefit of the Bitcoin community, with a focus on the emerging transaction fee market that is evolving Bitcoin into a multi-layer ecosystem."
        status="active"
        appLink={`http://${REACT_APP_HOST}.local:${REACT_APP_MEMPOOL_PORT}`}
        githubLink="https://github.com/mempool/mempool"
        guide="https://www.youtube.com/watch?v=I2SzBqcsXaE"
      />
      <Feature
        title="Ride The Lightning"
        desc="RTL is a full function, device agnostic, web user interface to help manage lightning node operations. RTL is available on LND, CoreLightning and Eclair implementations."
        status="active"
        githubLink="https://github.com/Ride-The-Lightning/RTL"
        appLink={`http://${REACT_APP_HOST}.local:${REACT_APP_RTL_PORT}`}
        guide="https://www.youtube.com/watch?v=T0UYZOChn3M&t=317s"
      />
      <Feature
        title="Sparrow"
        desc="Sparrow is a Bitcoin wallet for those who value financial self sovereignty. Sparrow’s emphasis is on security, privacy and usability. Sparrow does not hide information from you - on the contrary it attempts to provide as much detail as possible about your transactions and UTXOs, but in a way that is manageable and usable."
        status="external only"
        githubLink="https://github.com/sparrowwallet/sparrow"
        appLink=""
        guide="https://www.youtube.com/watch?v=9dcXXz1CHV8"
      />
      <Feature
        title="Fulcrum Server"
        desc="A fast & nimble SPV server for Bitcoin Cash, Bitcoin BTC, and Litecoin. This is what the wallet client will talk to, rather than bitcoin daemon itself."
        status="active"
        githubLink="https://github.com/cculianu/Fulcrum"
        appLink=""
        guide="https://www.youtube.com/watch?v=SpQRrbJt7cg&t=455s"
      />
      <Feature
        title="Samurai Wallet"
        desc="A popular and effective android Bitcoin privacy wallet. Keep your identity masked and your transaction private."
        status="external only"
        githubLink="https://github.com/Samourai-Wallet"
        appLink="external"
        guide="https://www.youtube.com/watch?v=cKTThYKsiEo"
      />
    </SimpleGrid>
  );
}
