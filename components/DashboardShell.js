import React from 'react';
import NextLink from 'next/link';
import { Flex, Stack, Link, Avatar, Button } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="whiteAlpha.500"
        py={4}
        px={8}
      >
        <Stack
          spacing={4}
          isInline
          justifyContent="flex-start"
          alignItems="center"
        >
          <NextLink href="/" passHref>
            <Link>
              <Avatar size="sm" />
            </Link>
          </NextLink>
          <NextLink href="/dashboard" passHref>
            <Link>Sites</Link>
          </NextLink>
          <NextLink href="/feedback" passHref>
            <Link>Feedback</Link>
          </NextLink>
        </Stack>
        <Stack
          spacing={4}
          isInline
          justifyContent="flex-start"
          alignItems="center"
        >
          {user && (
            <Button
              onClick={() => signout()}
              fontWeight="medium"
              maxW="200px"
              variant="solid"
              size="sm"
            >
              Log Out
            </Button>
          )}
          <Avatar size="sm" src={user?.photoUrl} />
        </Stack>
      </Flex>
      <Flex backgroundColor="gray.50" p={8} height="100vh">
        <Flex
          maxWidth="1200px"
          width="100%"
          ml="auto"
          mr="auto"
          direction="column"
        >
          {children}
        </Flex>
      </Flex>
    </>
  );
};

export default DashboardShell;
