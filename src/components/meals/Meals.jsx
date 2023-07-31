import React from "react";
import { product } from "./MealsProduct";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { IconButton } from "../../assets";

export const Meals = () => {
  return (
    <>
      <Wrapper>
        <Container>
          {product.map((item) => (
            <>
              <ContainerItems key={item.id}>
                <FirstContainer>
                  <h2>{item.product}</h2>
                  <i>{item.title}</i>
                  <h3>{item.price}</h3>
                </FirstContainer>
                <SecondContainer>
                  <Input />
                  <Button
                    width="99px"
                    height="41px"
                    bgColor=" #8A2B06"
                    color="#fff"
                    fontSize="14px"
                    fontWeight="700"
                    hvColor="#7E2A0A"
                    actColor="#993108"
                    borderRadius="20px"
                  >
                    <IconButton /> <AddButton>Add</AddButton>
                  </Button>
                </SecondContainer>
              </ContainerItems>
              <Line></Line>
            </>
          ))}
        </Container>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
const Container = styled.div`
  width: 1039px;
  height: 564px;
  background: #ffffff;
  border-radius: 16px;
  padding: 40px;
`;
const ContainerItems = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 17.2px 0 0 0;
`;

const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  Button {
    margin-top: 12px;
  }
  Input {
    margin-left: 20px;
  }
`;
const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  h2 {
    font-weight: 600;
    font-size: 18px;
    color: #222222;
  }
  i {
    font-weight: 400;
    font-size: 16px;
    color: #222222;
  }
  h3 {
    font-weight: 700;
    font-size: 20px;
    color: #ad5502;
  }
`;
const Line = styled.span`
  display: inline-block;
  width: 959px;
  height: 1px;
  box-shadow: 0px 6px 12px rgba(36, 36, 36, 0.08);
  border: 1px solid #d6d6d6;
`;
const AddButton = styled.span`
  margin-left: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
`;
