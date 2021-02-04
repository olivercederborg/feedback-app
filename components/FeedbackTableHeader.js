import React from 'react';
import {
  Flex,
  Breadcrumb,
  Heading,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react';

const FeedbackTableHeader = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink color="gray.700" fontSize="sm">
          Feedback
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex mb={6} justifyContent="space-between">
      <Heading>My Feedback</Heading>
    </Flex>
  </>
);

export default FeedbackTableHeader;
