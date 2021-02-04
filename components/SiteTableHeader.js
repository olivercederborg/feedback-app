import React from 'react';
import {
  Flex,
  Breadcrumb,
  Heading,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react';

import AddSiteModal from './AddSiteModal';

const SiteTableHeader = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink color="gray.700" fontSize="sm">
          Sites
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex mb={6} justifyContent="space-between">
      <Heading>My sites</Heading>
      <AddSiteModal>Add Site</AddSiteModal>
    </Flex>
  </>
);

export default SiteTableHeader;
