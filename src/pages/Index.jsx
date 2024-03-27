import React, { useState, useEffect } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Heading } from "@chakra-ui/react";


const transactions = [
  {
    id: 1,
    date: "2023-05-01",
    description: "Grocery shopping",
    amount: -50.25,
  },
  {
    id: 2,
    date: "2023-05-02",
    description: "Salary",
    amount: 2500.0,
  },
  {
    id: 3,
    date: "2023-05-03",
    description: "Rent payment",
    amount: -1200.0,
  },
  {
    id: 4,
    date: "2023-05-04",
    description: "Restaurant dinner",
    amount: -75.5,
  },
];

const Index = () => {
  
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Transactions
      </Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Description</Th>
              <Th isNumeric>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map((transaction) => (
              <Tr key={transaction.id}>
                <Td>{transaction.date}</Td>
                <Td>{transaction.description}</Td>
                <Td isNumeric>{transaction.amount.toFixed(2)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Index;
