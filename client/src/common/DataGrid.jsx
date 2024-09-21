import React, { useState, useMemo } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
  IconButton,
  TableCaption,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { ArrowUpDownIcon, ViewIcon } from "@chakra-ui/icons";

const DataGrid = ({ columns, data, caption }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedRowData, setSelectedRowData] = useState(null);

  // Determine which columns to display in the table (first 7 columns)
  const visibleColumns = columns.slice(0, 7);

  // Handle Search
  const filteredData = useMemo(() => {
    if (!searchQuery) return data;

    return data.filter((row) =>
      columns.some((column) =>
        String(row[column.accessor])
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, data, columns]);

  // Handle Sorting
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;

    const sorted = [...filteredData].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [filteredData, sortConfig]);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleOpenModal = (rowData) => {
    setSelectedRowData(rowData);
    onOpen();
  };

  return (
    <Box
      background="#f5f5f5"
      fontFamily="'Varela Round', sans-serif"
      fontSize="13px"
      p="20px"
    >
      <Box className="table-wrapper">
        <Box
          background="#fff"
          p="20px 25px"
          borderRadius="3px"
          boxShadow="0 1px 1px rgba(0,0,0,.05)"
        >
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            mb="20px"
            width={"20%"}
            mr={"-20%"}
          />
          <TableContainer>
            <Table
              variant="striped"
              className="table table-striped table-hover"
              colorScheme="gray"
            >
              {caption && (
                <TableCaption
                  placement="top"
                  fontSize="20px"
                  textAlign={"left"}
                  fontWeight={"bold"}
                >
                  {caption}
                </TableCaption>
              )}
              <Thead>
                <Tr>
                  {visibleColumns.map((column, index) => (
                    <Th bg="#566787" color="white" key={index}>
                      <Box
                        display="flex"
                        alignItems="center"
                        cursor="pointer"
                        onClick={() => handleSort(column.accessor)}
                      >
                        {column.header}
                        <IconButton
                          icon={<ArrowUpDownIcon />}
                          size="xs"
                          ml="2"
                          aria-label="Sort"
                          variant="unstyled"
                          display="inline"
                        />
                      </Box>
                    </Th>
                  ))}
                  <Th bg="#566787" color="white">
                    Actions
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {sortedData.map((row, rowIndex) => (
                  <Tr key={rowIndex}>
                    {visibleColumns.map((column, colIndex) => (
                      <Td key={colIndex}>{row[column.accessor]}</Td>
                    ))}
                    <Td>
                      <IconButton
                        icon={<ViewIcon />}
                        size="md"
                        aria-label="View Details"
                        onClick={() => handleOpenModal(row)}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      {/* Modal to display full row data */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Row Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedRowData && (
              <Flex direction="column">
                {columns.map((column, index) => (
                  <Box key={index} mb="4">
                    <strong>{column.header}:</strong> {selectedRowData[column.accessor]}
                  </Box>
                ))}
              </Flex>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DataGrid;
