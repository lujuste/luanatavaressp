import type { NextPage } from 'next';

import { Flex, Text, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import Head from 'next/head';
import conectaLogo from '../../public/images/conecta-trans.svg';
import FormArea from '../pages/conecta/FormArea';
import MiniFooter from '../pages/conecta/MiniFooter';
import TheCourse from '../pages/conecta/TheCourse';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Conecta - Mulheres na política - Home </title>
        <meta
          name="description"
          content="Rede de Mulheres Brasileiras Líderes pela Política"
        />
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          content="Rede de Mulheres Brasileiras Líderes pela Política"
          key="ogtitle"
        />
        +{' '}
        <meta
          property="og:description"
          content="A partir da intenção de criar um curso para formar lideranças femininas que desejam participar ativamente da política para mudar o Brasil"
          key="ogdesc"
        />
        <meta
          property="og:url"
          content={'https://www.luanatavaressp.com.br'}
          key="ogurl"
        />
        <meta
          property="og:site_name"
          content="Mulheres na política"
          key="ogsitename"
        />
        <meta
          property="og:image"
          content="https://luanatavaressp.com.br/images/conecta-Logo.png"
          key="ogimage"
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta name="twitter:card" content="Legal Design" key="twcard" />
        <meta name="twitter:creator" content="Bits Academy" key="twhandle" />
      </Head>
      <>
        <Flex
          boxShadow="dark-lg"
          w="100%"
          h="15vh"
          justify="center"
          align="center"
          mx="auto"
        >
          <Image
            src={conectaLogo}
            width={292}
            height={108}
            quality={100}
            priority
          />
        </Flex>
        <Flex
          w="100%"
          h="85vh"
          mx="auto"
          bgImage="url('/images/bgPage.png')"
          bgRepeat="no-repeat"
          bgSize="cover"
          flexDir="column"
          p="3rem"
          justify="center"
        >
          <Flex
            flexDir="column"
            w="100%"
            mx="auto"
            maxW="1400"
            justify="space-around"
            h="auto"
            align="center"
          >
            <Text
              color="white"
              fontSize={['20px', '20px', '30px']}
              fontWeight="400"
              fontFamily="Public Sans"
              mx="auto"
            >
              <span className="wave">👋</span> Olá, seja bem-vinda!{' '}
            </Text>
            <Heading
              fontSize={['28px', '32px', '42px', '64px']}
              fontWeight="600"
              color="white"
              fontFamily="Public Sans"
              textAlign="center"
              maxW={['700px']}
              mx="auto"
              mt="2rem"
              lineHeight={['45px', '45px', '70px', '80px', '92px']}
            >
              Lugar de mulher é onde ela quiser,{' '}
              <Text as="span" px={['2', '2', '2rem']} bgColor={['#912B78']}>
                inclusive na política!
              </Text>
            </Heading>
          </Flex>
        </Flex>
        <TheCourse />
        <FormArea />
        <MiniFooter />
      </>
    </>
  );
};

export default Home;
