import * as React from "react";
import {
  Box,
  Kbd,
  Heading,
  Text,
  Code,
  Link,
  Highlight,
} from "@chakra-ui/react";

const { REACT_APP_HOST, REACT_APP_USER } = process.env;

export default function HowTo(): JSX.Element {
  return (
    <Box w={600}>
      <Heading marginBottom={10}>How-to guides</Heading>
      <Heading size="lg" m={5}>
        Command Line
      </Heading>
      <Text align="left">
        Open your Command Line Interface Tool (Terminal is default on MacOS).
      </Text>
      <Text align="left" marginTop={5}>
        Use the Secure Shell Protocol (SSH) to open a conversation with your
        Nodebox.
      </Text>
      <Code>
        ssh {REACT_APP_USER}@{REACT_APP_HOST}.local
      </Code>
      <span> + </span>
      <span>
        <Kbd>Enter</Kbd>
      </span>
      <Text align="left" marginTop={5}>
        See what directory you are in
      </Text>
      <Code>pwd</Code>
      <span> + </span>
      <span>
        <Kbd>Enter</Kbd>
      </span>
      <Text align="left" marginTop={5}>
        Navigate into another directory/folder
      </Text>
      <Code>cd [path]</Code>
      <span> + </span>
      <span>
        <Kbd>Enter</Kbd>
      </span>
      <Heading size="lg" m={5}>
        Connect to Sparrow Wallet
      </Heading>

      <Text align="left">
        {/* eslint-disable-next-line prettier/prettier */}
        Download Sparrow on your laptop/computer (not the nodebox) from the {' '}
        <Link
          color="teal.500"
          href="https://github.com/sparrowwallet/sparrow"
          isExternal
        >
          source code repository
        </Link>
        .
      </Text>
      <Text align="left" marginTop={5}>
        After downloading and opening for the first time, select &apos;Configure
        Server&apos;.
      </Text>
      <Text align="left" marginTop={5}>
        Select server type &apos;Private Electrum&apos;
      </Text>
      <Text align="left" marginTop={5}>
        Type in your nodebox URL. This includes the IP address AND the port
        number. (If you are unsure about the IP address, you could ssh in and
        find it in the welcome text. Alternatively, you could find it through
        your router admin). If you have used the same port as the Ministry of
        Nodes 2022 guide, the port number will be{" "}
        <Highlight
          query="spotlight"
          styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
        >
          50002
        </Highlight>
        .
      </Text>
    </Box>
  );
}
