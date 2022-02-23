import {
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  useBreakpointValue,
  Icon,
} from '@chakra-ui/react';
import Image from 'next/image';
import logoNew from '../../../../public/images/conectaAzul.svg';
import { useForm } from 'react-hook-form';
import Reveal from 'react-reveal/Reveal';
import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { TriangleUpIcon, QuestionIcon } from '@chakra-ui/icons';

import { getPrismicClient } from '../../../services/prismic';

export default function TheCourse() {
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
  });

  return (
    <Flex
      pb="5rem"
      bgColor="#E5E5E5"
      w="100%"
      h="100%"
      mx="auto"
      flexDir="column"
    >
      <Flex
        px="3rem"
        flexDir="column"
        mx="auto"
        w="100%"
        h="100%"
        maxW="1100px"
      >
        <Flex
          mt="2rem"
          mx="auto"
          w="100%"
          h="auto"
          align="center"
          justify="center"
        >
          {!isMobile && (
            <Reveal>
              <Image width={249} height={249} src={logoNew} />
            </Reveal>
          )}
          <Reveal>
            <Heading
              fontSize={['28px', '28px', '42px', '50px', '62px']}
              color="#912B78"
              fontWeight="700"
              fontFamily="Raleway"
              textAlign="center"
              maxW="600px"
              mb={['2rem', '2rem', '0', '0']}
              mt={['2rem', '2rem', '0', '0']}
            >
              Curso de liderança
              <Text mx="auto" color="#340B77">
                política da Conecta
              </Text>
            </Heading>
          </Reveal>
        </Flex>

        <Reveal>
          <Text
            color="#666666"
            fontSize={['15px', '15px', '16px', '18px']}
            fontWeight="400"
            fontFamily="Roboto"
            lineHeight="35px"
            textAlign={['left', 'left', 'justify']}
            overflowWrap="break-word"
          >
            <Text mt="3rem">
              {' '}
              A <strong>CONECTA</strong> é uma{' '}
              <strong>ACELERADORA DE MULHERES NA POLÍTICA</strong>, que busca
              contribuir na redução do tempo para se atingir a igualdade
              feminina nos espaços de decisão pública.
            </Text>{' '}
            <Text mt="3rem">
              Somos uma iniciativa suprapartidária, que pretende conectar e
              desenvolver mulheres para que se tornem lideranças políticas
              capazes de gerar impactos positivos na sociedade.
              <Text mt="3rem">
                {' '}
                <strong style={{ fontSize: '25px' }}>Formação</strong>{' '}
              </Text>
            </Text>
          </Text>
        </Reveal>
        <Reveal>
          <List mt="1rem" spacing={3}>
            <ListItem
              color="#666666"
              fontSize={['15px', '15px', '16px', '18px']}
              fontWeight="400"
              fontFamily="Roboto"
              lineHeight="35px"
              textAlign={['left', 'left', 'justify']}
            >
              <ListIcon
                transform="rotate(90deg)"
                as={TriangleUpIcon}
                color="#340B77"
              />
              Todas as idades
            </ListItem>
            <ListItem
              color="#666666"
              fontWeight="400"
              fontFamily="Roboto"
              lineHeight="35px"
              fontSize={['15px', '15px', '16px', '18px']}
            >
              <ListIcon
                transform="rotate(90deg)"
                as={TriangleUpIcon}
                color="#340B77"
              />
              Mulheres que tenham ou não participado de eleições{' '}
            </ListItem>
            <ListItem
              color="#666666"
              fontSize={['15px', '15px', '16px', '18px']}
              fontWeight="400"
              fontFamily="Roboto"
              lineHeight="35px"
            >
              <ListIcon
                transform="rotate(90deg)"
                as={TriangleUpIcon}
                color="#340B77"
              />
              Mulheres que tenham intenção de se candidatar
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem
              color="#666666"
              fontSize={['15px', '15px', '16px', '18px']}
              fontWeight="400"
              fontFamily="Roboto"
              lineHeight="35px"
            >
              <ListIcon
                transform="rotate(90deg)"
                as={TriangleUpIcon}
                color="#340B77"
              />
              Lideranças de movimentos ou organizações sociais
            </ListItem>
            <ListItem
              color="#666666"
              fontSize={['15px', '15px', '16px', '18px']}
              fontWeight="400"
              fontFamily="Roboto"
              lineHeight="35px"
            >
              <ListIcon
                transform="rotate(90deg)"
                as={TriangleUpIcon}
                color="#340B77"
              />
              80% das vagas são destinadas para mulheres de SP
            </ListItem>
            <ListItem
              color="#666666"
              fontSize={['15px', '15px', '16px', '18px']}
              fontWeight="400"
              fontFamily="Roboto"
              lineHeight="35px"
            >
              <ListIcon
                transform="rotate(90deg)"
                as={TriangleUpIcon}
                color="#340B77"
              />
              20% de mulheres de todo o Brasil
            </ListItem>
          </List>
        </Reveal>
        <Text mt="3rem">
          <strong style={{ fontSize: '22px' }}>
            Capacitação em líderança política
          </strong>{' '}
        </Text>
        <List mt="1rem" spacing={3}>
          <ListItem
            color="#666666"
            fontSize={['15px', '15px', '16px', '18px']}
            fontWeight="400"
            fontFamily="Roboto"
            lineHeight="35px"
            textAlign={['left', 'left', 'justify']}
          >
            <ListIcon
              transform="rotate(90deg)"
              as={TriangleUpIcon}
              color="#340B77"
            />
            Lidere pelo propósito
          </ListItem>
          <ListItem
            color="#666666"
            fontWeight="400"
            fontFamily="Roboto"
            lineHeight="35px"
            fontSize={['15px', '15px', '16px', '18px']}
          >
            <ListIcon
              transform="rotate(90deg)"
              as={TriangleUpIcon}
              color="#340B77"
            />
            Navegue no sistema político
          </ListItem>
          <ListItem
            color="#666666"
            fontSize={['15px', '15px', '16px', '18px']}
            fontWeight="400"
            fontFamily="Roboto"
            lineHeight="35px"
          >
            <ListIcon
              transform="rotate(90deg)"
              as={TriangleUpIcon}
              color="#340B77"
            />
            Construa uma campanha vencedora
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem
            color="#666666"
            fontSize={['15px', '15px', '16px', '18px']}
            fontWeight="400"
            fontFamily="Roboto"
            lineHeight="35px"
          >
            <ListIcon
              transform="rotate(90deg)"
              as={TriangleUpIcon}
              color="#340B77"
            />
            Encontre sua voz e seu público
          </ListItem>
          <ListItem
            color="#666666"
            fontSize={['15px', '15px', '16px', '18px']}
            fontWeight="400"
            fontFamily="Roboto"
            lineHeight="35px"
          >
            <ListIcon
              transform="rotate(90deg)"
              as={TriangleUpIcon}
              color="#340B77"
            />
            Entenda os processos parlamentares
          </ListItem>
          <ListItem
            color="#666666"
            fontSize={['15px', '15px', '16px', '18px']}
            fontWeight="400"
            fontFamily="Roboto"
            lineHeight="35px"
          >
            <ListIcon
              transform="rotate(90deg)"
              as={TriangleUpIcon}
              color="#340B77"
            />
            Inove e use dados para tomar decisões
          </ListItem>
          <ListItem
            color="#666666"
            fontSize={['15px', '15px', '16px', '18px']}
            fontWeight="400"
            fontFamily="Roboto"
            lineHeight="35px"
          >
            <ListIcon
              transform="rotate(90deg)"
              as={TriangleUpIcon}
              color="#340B77"
            />
            Mulheres no comando
          </ListItem>
        </List>
      </Flex>

      <Reveal>
        <Text
          color="#666666"
          fontSize={['15px', '15px', '16px', '18px']}
          fontWeight="400"
          fontFamily="Roboto"
          lineHeight="35px"
          mt="3rem"
          overflowWrap="break-word"
          textAlign={['left', 'left', 'justify']}
          maxW={['300px', '400px', '700px', '900px', '1000px']}
          mx="auto"
          border="1px solid #340B77"
          borderRadius="10px"
          p="2rem"
        >
          <Icon color="#340B77" mr="0.5rem" as={QuestionIcon} /> Inscrições
          Gratuitas! De 23/02 a 02/03. A <strong>segunda </strong> turma contará
          com <strong>150 vagas</strong>. Caso queira participar,{' '}
          <strong>preencha o formulário abaixo</strong> e aguarde a conclusão do
          processo de seleção <strong>até 02/03 </strong>por{' '}
          <strong>e-mail</strong>.
        </Text>
      </Reveal>
      <Reveal>
        <Text
          fontSize={['22px', '22px', '32px', '38px']}
          color="#912B78"
          fontWeight="700"
          fontFamily="Raleway"
          textAlign="center"
          maxW={['300px', '300px', '860px']}
          mx="auto"
          lineHeight={['32px', '32px', '52px']}
          mb={['-2rem', '-1rem', '-1rem', '-2rem']}
          mt={['3rem', '5rem', '2rem', '4rem']}
        >
          VAMOS ACELERAR A REPRESENTATIVIDADE{' '}
          <Text color="#340B77">DA MULHER NOS ESPAÇOS DE PODER!</Text>
        </Text>
      </Reveal>
    </Flex>
  );
}
