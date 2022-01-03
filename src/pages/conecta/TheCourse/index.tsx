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

import { TriangleUpIcon, QuestionIcon } from '@chakra-ui/icons';

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
              fontFamily="Public Sans"
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
            A democracia só será realmente forte no momento em que nos vermos
            representados nela - homens, mulheres, negras, negros, ricos,
            pobres, e assim por diante. Desenvolver habilidades em liderança e
            apoiar mulheres dispostas a participar da democracia de forma
            competitiva é extremamente importante para mudar esse cenário.{' '}
            <Text mt="3rem">
              {' '}
              A <strong>CONECTA</strong> é uma{' '}
              <strong>ACELERADORA DE MULHERES NA POLÍTICA</strong>, que nasceu
              com a missão de contribuir para a redução do tempo para se atingir
              a igualdade feminina nos espaços de decisão pública. Uma
              iniciativa suprapartidária, criada a várias mãos com muito
              carinho, que pretende conectar e desenvolver mulheres para se
              tornarem lideranças políticas capazes de gerar impactos positivos
              na sociedade.{' '}
            </Text>{' '}
            <Text mt="3rem">
              As participantes selecionadas terão acesso a um curso prático de
              30 horas em liderança política, incluindo tópicos como cultura
              política, marketing digital e gestão pública totalmente gratuito,
              além de mentoria e uma rede de apoio na segunda fase, caso sejam
              aprovadas no curso. As aulas da primeira turma vão de 22 de
              janeiro a 12 de março de 2022.{' '}
              <Text mt="3rem">
                As sessões acontecem todo sábado com duração de 4 horas, sendo 5
                sessões on-line e a última presencial em São Paulo. Estão
                convidadas a participar da primeira turma, mulheres do ESTADO DE
                SP com o seguinte perfil:
              </Text>
            </Text>
          </Text>
        </Reveal>
        <Reveal>
          <List mt="3rem" spacing={3}>
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
              Que já tenham ou não participado de eleições
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
              Que sejam dirigentes ou coordenadoras de movimentos sociais ou
              comunitários
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
              O critério de diversidade regional e racial terão peso na seleção
              de mulheres
            </ListItem>
          </List>
        </Reveal>
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
          <Icon color="#340B77" mr="0.5rem" as={QuestionIcon} /> A{' '}
          <strong>primeira </strong> turma contará com{' '}
          <strong>150 vagas</strong>. Caso queira participar,{' '}
          <strong>preencha o formulário abaixo</strong> e aguarde a conclusão do
          processo de seleção <strong>até 11/01 </strong>por{' '}
          <strong>e-mail</strong>.
        </Text>
      </Reveal>
      <Reveal>
        <Text
          fontSize={['22px', '22px', '32px', '38px']}
          color="#912B78"
          fontWeight="700"
          fontFamily="Public Sans"
          textAlign="center"
          maxW={['300px', '300px', '860px']}
          mx="auto"
          lineHeight={['32px', '32px', '52px']}
          mb={['-2rem', '2rem', '0', 0]}
          mt={['3rem', '2rem', '0', '5rem']}
        >
          VAMOS ACELERAR A REPRESENTATIVIDADE{' '}
          <Text color="#340B77" as="span">
            DA MULHER NOS ESPAÇOS DE PODER!
          </Text>
        </Text>
      </Reveal>
    </Flex>
  );
}
