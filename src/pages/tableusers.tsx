import {
  Flex,
  List,
  Grid,
  GridItem,
  ListItem,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Spinner,
  Stack,
  Th,
  Td,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  TableCaption,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';

import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ListUsers() {
  const [loading, setLoading] = useState(false);
  const [faunaData, setFaunaData] = useState([]);
  const [countData, setCountData] = useState(0);
  const [genrerWhiteData, setGenrerWhiteData] = useState(0);
  const [genrerBlackData, setGenrerBlackData] = useState(0);
  const [genrerYellowData, setGenrerYellowData] = useState(0);
  const [elections, setElections] = useState(0);
  const [filiations, setFiliations] = useState(0);

  async function getData() {
    setLoading(true);
    const { data } = await axios.get('/api/getCustomers');
    const newCount = await data.length;

    console.log(newCount);
    setCountData(newCount);
    setFaunaData(data);
    setLoading(false);
  }

  async function getDataGenrer() {
    setLoading(true);
    const { data } = await axios.get('/api/getGenrer');
    const countGenrerWhite = await data.length;
    setGenrerWhiteData(countGenrerWhite);
    setLoading(false);

    console.log('brancos quantidade', countGenrerWhite);
  }
  //@ts-ignore
  const percetualWhiteWomans = Number(
    Math.round((genrerWhiteData * 100) / countData)
  );
  console.log('percentual brancos:', percetualWhiteWomans);

  async function getDataGenrerBlack() {
    setLoading(true);
    const { data } = await axios.get('/api/getGenrerBlack');
    const countGenrerBlack = await data.length;
    setGenrerBlackData(countGenrerBlack);
    setLoading(false);

    console.log('pretas quantidade', countGenrerBlack);
  }

  const percetualBlackWomans = Math.round((genrerBlackData * 100) / countData);
  console.log('percentual pretas:', percetualBlackWomans);

  async function getDataGenrerYellow() {
    setLoading(true);
    const { data } = await axios.get('/api/getGenrerYellow');
    const countGenrerYellow = await data.length;
    setGenrerYellowData(countGenrerYellow);
    setLoading(false);

    console.log('pardas quantidade', countGenrerYellow);
  }

  const percetualYellowWomans = Math.round(
    (genrerYellowData * 100) / countData
  );
  console.log('percentual pardas:', percetualYellowWomans);

  async function getDataElections() {
    setLoading(true);
    const { data } = await axios.get('/api/getElections');
    const countElections = await data.length;
    console.log('quantidade de candidatas:', countElections);
    setElections(countElections);
    console.log('quantidade cadidatas:', countElections);
    setLoading(false);
  }

  const percetualElectionsWomans = Math.round((elections * 100) / countData);
  console.log('percentual cadidatas:', percetualElectionsWomans);

  const sumWomansBlack = percetualYellowWomans + percetualBlackWomans;

  const restPercentual = (sumWomansBlack + percetualWhiteWomans - 100) * -1;
  console.log(restPercentual);

  async function getDataPartido() {
    setLoading(true);
    const { data } = await axios.get('/api/getPartido');
    const countFiliations = await data.length;
    console.log('quantidade de candidatas:', countFiliations);
    setFiliations(countFiliations);
    console.log('quantidade filiadas:', countFiliations);
    setLoading(false);
  }

  const percetualFiliationsWomans = Math.round((filiations * 100) / countData);
  console.log('percentual filiadas:', percetualFiliationsWomans);

  useEffect(() => {
    getData();
    getDataGenrer();
    getDataGenrerBlack();
    getDataGenrerYellow();
    getDataElections();
    getDataPartido();
  }, []);
  //@ts-ignore
  console.log(faunaData);

  const options = {
    labels: ['Brancas', 'Pretas e Pardas', 'Não opinaram'],
    style: {
      colors: ['rgb(255, 255, 255)'],
    },
  };
  const series = [
    percetualWhiteWomans ? percetualWhiteWomans : 0,
    sumWomansBlack ? sumWomansBlack : 0,
    restPercentual ? restPercentual : 0,
  ]; //our data

  return (
    <Flex
      overflowX="scroll"
      bgColor="#690DA6"
      flexDir="column"
      w="100%"
      h="100vh"
    >
      <Flex mt="2rem" flexDir="column" mx="auto">
        <Heading
          fontFamily="Raleway"
          fontWeight="400"
          color="white"
          textAlign={'center'}
        >
          Lista de inscrições para o curso{' '}
          <Text fontWeight="600" p="7px" bgColor="pink.500" color="white">
            {' '}
            Conecta - Mulheres na Política
          </Text>
        </Heading>
        <Flex p="10" mx="auto">
          <div>
            <Text
              borderRadius="10px"
              px="3rem"
              py="1.5rem"
              bgColor="white"
              mt="1rem"
              mx="auto"
              color="white"
              textAlign={'center'}
              boxShadow="2xl"
            >
              <Text color="black" fontSize="38px" fontWeight="bold">
                {loading ? <Spinner /> : countData}
              </Text>{' '}
              <Text
                fontFamily="Raleway"
                fontSize="22px"
                as="span"
                color="black"
              >
                Mulheres cadastradas
              </Text>{' '}
              <Text
                fontFamily="Raleway"
                fontWeight="bold"
                fontSize="22px"
                color="black"
              >
                com sucesso!! ✅
              </Text>
            </Text>
          </div>

          {/* <div>
            <Text
              borderRadius="10px"
              border="1px solid #fff"
              p="1rem"
              mt="2rem"
              mx="auto"
              color="white"
              textAlign={'center'}
            >
              {loading ? (
                <Spinner />
              ) : (
                <Text fontSize="28px" fontWeight="bold">
                  {' '}
                  {`${percetualWhiteWomans}%`}{' '}
                  <Text fontSize="16px" fontWeight={'400'}>
                    <Text>Mulheres brancas </Text>
                  </Text>{' '}
                </Text>
              )}
            </Text>
          </div>

          <div>
            <Text
              borderRadius="10px"
              border="1px solid #fff"
              p="1rem"
              mt="2rem"
              mx="auto"
              color="white"
              textAlign={'center'}
            >
              {loading ? (
                <Spinner />
              ) : (
                <Text fontSize="28px" fontWeight="bold">
                  {' '}
                  {`${percetualBlackWomans}%`}{' '}
                  <Text fontSize="16px" fontWeight={'400'}>
                    <Text>Mulheres negras </Text>
                  </Text>{' '}
                </Text>
              )}
            </Text>
          </div>

          <div>
            <Text
              borderRadius="10px"
              border="1px solid #fff"
              p="1rem"
              mt="2rem"
              mx="auto"
              color="white"
              textAlign={'center'}
            >
              {loading ? (
                <Spinner />
              ) : (
                <Text fontSize="28px" fontWeight="bold">
                  {' '}
                  {`${percetualYellowWomans}%`}{' '}
                  <Text fontSize="16px" fontWeight={'400'}>
                    <Text>Mulheres pardas </Text>
                  </Text>{' '}
                </Text>
              )}
            </Text>
          </div> */}
        </Flex>

        <Grid mt="2rem" mx="auto" gap={10} templateColumns="repeat(3, 1fr)">
          {/* <GridItem>
            <Flex flexDir="column" align="center" justify="center">
              <Text
                mb="1rem"
                color="white"
                fontWeight="600"
                fontFamily="Raleway"
              >
                👱🏻‍♀️ Mulheres brancas
              </Text>
              <CircularProgress
                size="100px"
                value={percetualWhiteWomans}
                color="pink.500"
              >
                <CircularProgressLabel boxShadow="2xl" color="white">
                  {' '}
                  {loading ? <Spinner /> : `${percetualWhiteWomans}%`}{' '}
                </CircularProgressLabel>
              </CircularProgress>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flexDir="column" align="center" justify="center">
              <Text
                mb="1rem"
                color="white"
                fontWeight="600"
                fontFamily="Raleway"
              >
                👱🏿‍♀️ Mulheres pretas e pardas
              </Text>
              <CircularProgress
                size="100px"
                value={sumWomansBlack}
                color="pink.500"
              >
                <CircularProgressLabel color="white">
                  {' '}
                  {loading ? <Spinner /> : `${sumWomansBlack}%`}{' '}
                </CircularProgressLabel>
              </CircularProgress>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex flexDir="column" align="center" justify="center">
              <Text
                mb="1rem"
                color="white"
                fontWeight="600"
                fontFamily="Raleway"
                textAlign="center"
              >
                ❌ Mulheres não opinaram cor
              </Text>
              <CircularProgress
                size="100px"
                value={restPercentual}
                color="pink.500"
              >
                <CircularProgressLabel color="white">
                  {' '}
                  {loading ? <Spinner /> : `${restPercentual}%`}{' '}
                </CircularProgressLabel>
              </CircularProgress>
            </Flex>
          </GridItem> */}
          <GridItem>
            {' '}
            {loading ? (
              <Spinner color="pink.500" />
            ) : (
              <Chart
                options={options}
                series={series}
                type="donut"
                width="380"
              />
            )}{' '}
          </GridItem>

          <GridItem>
            <Flex flexDir="column" align="center" justify="center">
              <Text
                mb="1rem"
                color="white"
                fontWeight="600"
                fontFamily="Raleway"
                textAlign="center"
              >
                👩🏽‍🔧 Mulheres que foram candidatas
              </Text>
              <CircularProgress
                size="100px"
                value={percetualElectionsWomans}
                color="pink.500"
              >
                <CircularProgressLabel color="white">
                  {' '}
                  {loading ? <Spinner /> : `${percetualElectionsWomans}%`}{' '}
                </CircularProgressLabel>
              </CircularProgress>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex flexDir="column" align="center" justify="center">
              <Text
                mb="1rem"
                color="white"
                fontWeight="600"
                fontFamily="Raleway"
                textAlign="center"
              >
                ➡️ Mulheres filiadas
              </Text>
              <CircularProgress
                size="100px"
                value={percetualFiliationsWomans}
                color="pink.500"
              >
                <CircularProgressLabel color="white">
                  {' '}
                  {loading ? <Spinner /> : `${percetualFiliationsWomans}%`}{' '}
                </CircularProgressLabel>
              </CircularProgress>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
      <Flex
        flexDir="column"
        bgColor="#690DA6"
        maxW={1400}
        w="100%"
        h="100%"
        p="2rem"
      >
        <Heading
          mt="2rem"
          fontWeight={'400'}
          fontFamily={'Raleway'}
          color="white"
          mx="auto"
        >
          Lista de inscrições
        </Heading>
        <Flex flexDir="column" align="center" justify="center" mx="auto">
          <Table color="white" mt="2rem" size="sm">
            <Thead color="white">
              <Tr>
                <Th color="white">Nome</Th>
                <Th color="white">Email</Th>
                <Th color="white">WhatsApp</Th>
                <Th color="white">CPF</Th>
                <Th color="white">Onde mora</Th>
                <Th color="white">Bairro</Th>
                <Th color="white">Instagram</Th>
                <Th color="white">Eleições</Th>
                <Th color="white">Ano</Th>
                <Th color="white">Cargo</Th>
                <Th color="white">Partido</Th>
                <Th color="white">Líder comunitária</Th>
                <Th color="white">Organização</Th>
                <Th color="white">Cargo de Org</Th>
                <Th color="white">Filiada</Th>
                <Th color="white">Partido</Th>
                <Th color="white">Raça</Th>
                <Th color="white">Identidade</Th>
              </Tr>
            </Thead>
            {loading ? (
              <Stack py="0.5rem" w="100%" mx="auto">
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height="20px"
                  width="2000px"
                />
              </Stack>
            ) : (
              faunaData.map(user => (
                <Tbody>
                  <Tr color="white">
                    <Td>{user.data.name}</Td>
                    <Td>{user.data.email}</Td>
                    <Td>{user.data.whatsapp}</Td>
                    <Td>{user.data.cpf}</Td>
                    <Td>{user.data.cidade}</Td>
                    <Td>{user.data.bairro}</Td>
                    <Td>{user.data.instagram}</Td>
                    <Td>{user.data.eleicoes}</Td>
                    <Td>
                      {user.data.anodisputado
                        ? user.data.anodisputado
                        : 'Não disputou'}
                    </Td>
                    <Td> {user.data.cargodisputado} </Td>
                    <Td>{user.data.partidodisputado}</Td>
                    <Td>{user.data.lider}</Td>
                    <Td>{user.data.organization}</Td>
                    <Td>{user.data.cargo}</Td>
                    <Td>{user.data.filiada}</Td>
                    <Td>{user.data.partido}</Td>
                    <Td>{user.data.cor}</Td>
                    <Td>{user.data.genero}</Td>
                  </Tr>
                </Tbody>
              ))
            )}
          </Table>
        </Flex>
      </Flex>
    </Flex>
  );
}
