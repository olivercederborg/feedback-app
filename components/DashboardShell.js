import React from 'react';
import {
  ChakraProvider,
  Flex,
  Stack,
  Icon,
  Link,
  Avatar,
  Breadcrumb,
  Heading,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Text,
  Button
} from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';

const DashboardShell = ({ children }) => (
  <>
    <Flex
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="whiteAlpha.500"
      p={4}
    >
      <Stack
        spacing={4}
        isInline
        justifyContent="flex-start"
        alignItems="center"
      >
        <CopyIcon />
        <Link>Sites</Link>
        <Link>Feedback</Link>
      </Stack>
      <Stack
        spacing={4}
        isInline
        justifyContent="flex-start"
        alignItems="center"
      >
        <Link>Account</Link>
        <Avatar size="sm" />
      </Stack>
    </Flex>
    <Flex backgroundColor="gray.50" p={8} height="100%">
      <Flex
        maxWidth="800px"
        width="100%"
        // justifyContent="center"
        // alignItems="center"
        ml="auto"
        mr="auto"
        direction="column"
      >
        <Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Breadcrumb>
        <Heading>Sites</Heading>
        {children}
      </Flex>
    </Flex>
  </>
);

export default DashboardShell;
