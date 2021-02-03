import Head from 'next/head';
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text
} from '@chakra-ui/react';
import { GrGithub, GrGoogle } from 'react-icons/gr';

import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
    return 'Loading...';
  }
  return <EmptyState />;
};
export default Dashboard;
