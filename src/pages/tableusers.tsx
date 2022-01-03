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
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ListUsers() {
  const [faunaData, setFaunaData] = useState([]);
  const [countData, setCountData] = useState(0);

  async function getData() {
    const { data } = await axios.get('/api/getCustomers');
    const newCount = await data.length;
    console.log(newCount);
    setCountData(newCount);
    setFaunaData(data);
  }

  useEffect(() => {
    getData();
  }, []);
  //@ts-ignore
  console.log(faunaData);

  return (
    <Flex
      overflowX="scroll"
      bgColor="#690DA6"
      flexDir="column"
      w="100%"
      h="100vh"
    >
      <Flex
        flexDir="column"
        bgColor="#690DA6"
        maxW={1400}
        w="100%"
        h="100%"
        p="2rem"
      >
        <Heading color="white" textAlign={'center'}>
          Listagem cadastral para o curso{' '}
          <Text color="white"> Conecta - Mulheres na política</Text>
        </Heading>
        <Text
          borderRadius="10px"
          border="1px solid #fff"
          p="1rem"
          mt="2rem"
          mx="auto"
          color="white"
          textAlign={'center'}
        >
          <Text fontSize="28px" fontWeight="bold">
            {countData}
          </Text>{' '}
          Mulheres cadastradas <Text>com sucesso! ✅</Text>
        </Text>
        <Flex align="center" justify="center" mx="auto">
          <Table color="white" mt="2rem" size="sm">
            <Thead>
              <Tr>
                <Th color="white">Nome</Th>
                <Th color="white">Email</Th>
                <Th color="white">WhatsApp</Th>
                <Th color="white">CPF</Th>
                <Th color="white">Nascimento</Th>
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
            {faunaData.map(user => (
              <Tbody>
                <Tr>
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
            ))}
          </Table>
        </Flex>
      </Flex>
    </Flex>
  );
}
