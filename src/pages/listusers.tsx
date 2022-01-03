import {
  Flex,
  List,
  Grid,
  GridItem,
  ListItem,
  Heading,
  Text,
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
    <Flex flexDir="column" maxW={1400} mx="auto" w="100%" h="100%" p="2rem">
      <Heading textAlign={'center'}>
        Listagem cadastral para o curso{' '}
        <Text> Conecta - Mulheres na política</Text>
      </Heading>
      <Text
        borderRadius="10px"
        border="1px solid #000"
        p="1rem"
        mt="2rem"
        mx="auto"
      >
        Inscrições: <strong>{countData}</strong> mulheres cadastradas com
        sucesso! ✅
      </Text>
      <Flex align="center" justify="center" mx="auto">
        <Grid
          mt="2rem"
          w="100%"
          mx="auto"
          gap={20}
          templateColumns={'repeat(3, 1fr)'}
        >
          {faunaData.map(user => (
            <GridItem mx="auto">
              <List mt="2rem">
                <ListItem>
                  {' '}
                  <strong>Nome:</strong> {user.data.name}{' '}
                </ListItem>
                <ListItem>
                  {' '}
                  <strong>Email:</strong> {user.data.email}{' '}
                </ListItem>
                <ListItem>
                  {' '}
                  <strong>WhatsApp:</strong> {user.data.whatsapp}{' '}
                </ListItem>
                <ListItem>
                  {' '}
                  <strong>CPF:</strong> {user.data.cpf}{' '}
                </ListItem>
                <ListItem>
                  {' '}
                  <strong>Nascimento:</strong> {user.data.cidade}{' '}
                </ListItem>
                <ListItem>
                  {' '}
                  <strong>Bairro:</strong> {user.data.bairro}{' '}
                </ListItem>
                <ListItem>
                  {' '}
                  <strong>Instagram:</strong> {user.data.instagram}{' '}
                </ListItem>
                <ListItem>
                  {' '}
                  <strong>Eleições:</strong> {user.data.eleicoes}{' '}
                </ListItem>
                <ListItem>
                  {' '}
                  <strong>Ano:</strong>{' '}
                  {user.data.anodisputado
                    ? user.data.anodisputado
                    : 'Não disputou'}{' '}
                </ListItem>
                <ListItem>
                  {' '}
                  <strong>Cargo:</strong> {user.data.cargodisputado}{' '}
                </ListItem>
                <ListItem>
                  {' '}
                  <strong>Partido:</strong> {user.data.partidodisputado}{' '}
                </ListItem>
                <ListItem>
                  {' '}
                  <strong>Líder comunitária:</strong> {user.data.lider}{' '}
                </ListItem>
                <ListItem>
                  {' '}
                  <strong>Organização:</strong> {user.data.organization}{' '}
                </ListItem>
                <ListItem>
                  {' '}
                  <strong>Cargo de Org:</strong> {user.data.cargo}{' '}
                </ListItem>
                <ListItem>
                  {' '}
                  <strong>Filiada:</strong> {user.data.filiada}{' '}
                </ListItem>
                <ListItem>
                  {' '}
                  <strong>Partido:</strong> {user.data.partido}{' '}
                </ListItem>
                <ListItem>
                  {' '}
                  <strong>Raça:</strong> {user.data.cor}{' '}
                </ListItem>
                <ListItem>
                  {' '}
                  <strong>Identidade:</strong> {user.data.genero}{' '}
                </ListItem>
              </List>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
}
