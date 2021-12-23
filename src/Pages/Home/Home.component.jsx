import React, { Fragment, useState, useEffect } from "react";
import { getRequest } from "../../Utils/Axios/AxiosIntance";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout/Layout.component";
import Container from "../../Components/Commons/Container.styled";
import { Header, ContainerCards, ButtonContainer } from "./Home.styled";

export default function Home() {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);

  const handleIncrement = () => {
    setPage(page + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  console.log(page);
  useEffect(async () => {
    const dataResults = await getRequest(`list?page=${page}`);
    setData(dataResults.data.items);
  }, [page]);

  return !data.length ? (
    <h1>Loading</h1>
  ) : (
    <Layout>
      <Container>
        <Header>The most wanted</Header>
        <ContainerCards>
          {data.map((item, i) => {
            return (
              <Card
                key={i}
                imagen={item.images[0].thumb}
                title={item.title}
                warningMessage={item.warning_message}
                description={item.description}
                alias={item.aliases?.[0]}
              />
            );
          })}
        </ContainerCards>
        <ButtonContainer>
          <button onClick={handleIncrement}> Next Page </button>
          Page {page}
        </ButtonContainer>
      </Container>
    </Layout>
  );
}
