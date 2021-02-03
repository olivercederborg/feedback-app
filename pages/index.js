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

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>Feedback App</title>
      </Head>

      {auth.user ? (
        <Flex
          as="header"
          justify="space-between"
          align="center"
          h="100px"
          bg="blackAlpha.100"
          color="gray.700"
          paddingX="5"
        >
          <Box as="nav" display="flex" alignItems="center">
            {/* <InfoIcon color="gray.700" w={10} h={10} /> */}
            <Text fontSize="2xl" fontWeight="700">
              Logo
            </Text>
            <Link marginLeft="10" paddingY="5">
              Sites
            </Link>
            <Link marginLeft="10" paddingY="5">
              Feedback
            </Link>
          </Box>
          <Flex align="center" color="gray.700">
            {auth.user ? (
              <Flex direction="row" align="center" alignContent="center">
                <Button
                  colorScheme="gray"
                  color="gray.700"
                  variant="ghost"
                  marginRight="5"
                  // _hover={{ color: 'black', variant: 'ghost' }}
                  onClick={(e) => auth.signout()}
                >
                  Sign Out
                </Button>
                <Link display="flex" alignItems="center">
                  {/* <Text marginRight="5">Account</Text> */}
                  <Box boxSize="50px">
                    <Image rounded="full" src={auth.user.photoUrl} alt="" />
                  </Box>
                </Link>
              </Flex>
            ) : (
              <Button color="black" onClick={(e) => auth.signinWithGitHub()}>
                Sign In With GitHub
              </Button>
            )}
          </Flex>
        </Flex>
      ) : (
        <Flex
          as="main"
          direction="column"
          align="center"
          justify="center"
          maxW="100vw"
          height="80vh"
        >
          <Flex direction="column" alignItems="center" width="100vw">
            <Heading as="h1">Feedback App</Heading>
            <Text marginTop="5" fontSize="6" fontWeight="600">
              Welcome to the app.
            </Text>
            <Flex direction="column" alignItems="center" marginTop="14">
              <Text>Sign in with the following options.</Text>
              <Flex>
                <Button
                  colorScheme="blackAlpha"
                  bg="blackAlpha.900"
                  marginTop="5"
                  color="white"
                  onClick={(e) => auth.signinWithGitHub()}
                  marginX="2"
                  paddingX="5"
                >
                  <Icon as={GrGithub} marginRight="2" w="5" h="5" />
                  GitHub
                </Button>
                <Button
                  marginTop="5"
                  color="black"
                  onClick={(e) => auth.signinWithGitHub()}
                  marginX="2"
                  paddingX="5"
                  disabled
                >
                  <Icon as={GrGoogle} marginRight="2" w="5" h="5" />
                  Google
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </div>
  );
}
