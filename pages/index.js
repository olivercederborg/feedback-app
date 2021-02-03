import {
  Box,
  Button,
  Code,
  Flex,
  Heading,
  Icon,
  Link,
  Text
} from '@chakra-ui/react';
import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { InfoIcon } from '@chakra-ui/icons';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>Feedback App</title>
      </Head>
      {/* <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        maxW="100vw"
        height="80vh"
      >
        <Heading>Feedback App</Heading>
        <InfoIcon color="black" w={20} h={20} />
        <Text>
          Current User: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
        )}
      </Flex> */}

      <Flex
        as="header"
        justify="space-between"
        align="center"
        h="auto"
        bg="gray.800"
        color="white"
      >
        <Box as="nav">
          <InfoIcon marginLeft="6" color="white" w={10} h={10} />
          <Link marginLeft="10" paddingY="5">
            Sites
          </Link>
          <Link marginLeft="10" paddingY="5">
            Feedback
          </Link>
        </Box>
        <Box>
          <Link>Account</Link>
          <InfoIcon color="black" w={8} h={8} />
        </Box>
      </Flex>
    </div>
  );
}
