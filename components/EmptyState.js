import React from 'react';
import { Heading, Text, Button, Flex } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';

import DashboardShell from '@/components/DashboardShell';

const EmptyState = () => (
  <DashboardShell>
    <Flex
      direction="column"
      justify="center"
      align="center"
      width="100%"
      backgroundColor="white"
      borderRadius="8px"
      p={16}
      mt={4}
    >
      <Heading as="h2" size="md">
        You haven't added any sites.
      </Heading>
      <Text>Welcome! Let's get started.</Text>
      <Button fontWeight="medium" maxW="200px" variant="solid" size="md" mt={4}>
        Add Your First Site
      </Button>
    </Flex>
  </DashboardShell>
);

export default EmptyState;
