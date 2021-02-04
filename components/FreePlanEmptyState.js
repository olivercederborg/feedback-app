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

import DashboardShell from '@/components/DashboardShell';

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box width="100%" backgroundColor="white" borderRadius="8px" p={8} mt={4}>
      <Heading as="h2" size="lg" mb="2">
        Get feedback on your site instantly.
      </Heading>
      <Text>Start today, then grow with us.</Text>
      <Button variant="solid" size="md" mt={4}>
        Upgrade to Starter
      </Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;
