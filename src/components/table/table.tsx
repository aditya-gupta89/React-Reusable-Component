import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import { Avatar, Pagination, SxProps, Theme, Typography } from "@mui/material";

export interface HeadCell {
  value: string;
  label: string;
  isSorted: boolean;
  action?: string;
}

interface TableProps {
  headCells: HeadCell[];
  dataRows: any[];
  order: string;
  orderBy: string;
  tablePageNo: number;
  tableRowTotalCount: number;
  tableRowPerPage?: number;
  tableStyle?: SxProps<Theme>;
  headStyle?: SxProps<Theme>;
  bodyStyle?: SxProps<Theme>;
  rowStyle?: SxProps<Theme>;
  rowCellStyle?: SxProps<Theme>;
  headCellStyle?: SxProps<Theme>;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
  setTablePageNo: any;
  handleTableAction?: any;
}

interface TableHeadProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  order: any;
  orderBy: string;
  headCells: HeadCell[];
  headStyle?: SxProps<Theme>;
  headCellStyle?: SxProps<Theme>;
}

function CustomTableHead(props: TableHeadProps) {
  const { order, orderBy, onRequestSort, headCells, headStyle, headCellStyle } =
    props;

  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead sx={headStyle}>
      <TableRow sx={{ backgroundColor: "#4C4C4C1A" }}>
        {headCells.map((headCell: HeadCell) => {
          return (
            <TableCell
              key={headCell.value}
              align="left"
              sortDirection={orderBy === headCell.value ? order : false}
              sx={{ ...headCellStyle, fontWeight: "600", borderBottom: "none" }}
            >
              {headCell.isSorted ? (
                <TableSortLabel
                  active={orderBy === headCell.value}
                  direction={orderBy === headCell.value ? order : "asc"}
                  onClick={createSortHandler(headCell.value)}
                >
                  {headCell.label}
                  {orderBy === headCell.value ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === "desc"
                        ? "sorted descending"
                        : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
              ) : (
                headCell.label
              )}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}

const AdminTable: React.FC<TableProps> = ({
  dataRows,
  headCells,
  order = "",
  orderBy = "",
  tablePageNo,
  setOrder,
  setOrderBy,
  setTablePageNo,
  tableRowPerPage = 10,
  tableRowTotalCount = 0,
  handleTableAction = (event: any) => {},
  bodyStyle,
  headCellStyle,
  headStyle,
  rowCellStyle,
  rowStyle,
  tableStyle,
}) => {
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: "428px", overflow: "scroll" }}>
        <Table sx={tableStyle}>
          <CustomTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            headCells={headCells}
            headCellStyle={headCellStyle}
            headStyle={headStyle}
          />
          <TableBody sx={bodyStyle}>
            {dataRows.map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  key={row.name}
                  sx={{
                    cursor: "pointer",
                    backgroundColor: index % 2 === 0 ? "white" : "#F2F2F280 ",
                    ...rowStyle,
                  }}
                >
                  {headCells.map((headCell: HeadCell) => {
                    if (headCell.action === "status") {
                      return (
                        <TableCell
                          component="th"
                          id={labelId}
                          sx={{ borderBottom: "none", ...rowCellStyle }}
                          scope="row"
                          padding="none"
                        >
                          {row[headCell.value] ? (
                            <Box
                              sx={{
                                width: "90px",
                                height: "28px",
                                background:
                                  "#DAF5E8 0% 0% no-repeat padding-box",
                                borderRadius: "14px",
                                display: "flex",
                                alignItems: "center",
                                gap: " 0.3rem",
                                justifyContent: "center",
                              }}
                            >
                              <Box
                                sx={{
                                  width: "8px",
                                  height: "8px",
                                  borderRadius: "50%",
                                  background:
                                    "#399A6F 0% 0% no-repeat padding-box",
                                }}
                              />
                              <Typography
                                sx={{ fontSize: "14px", color: "#399A6F" }}
                              >
                                Active
                              </Typography>
                            </Box>
                          ) : (
                            <Box
                              sx={{
                                width: "90px",
                                height: "28px",
                                background:
                                  "#FFEDED 0% 0% no-repeat padding-box",
                                borderRadius: "14px",
                                display: "flex",
                                alignItems: "center",
                                gap: " 0.3rem",
                                justifyContent: "center",
                              }}
                            >
                              <Box
                                sx={{
                                  width: "8px",
                                  height: "8px",
                                  borderRadius: "50%",
                                  background:
                                    "#FF3939 0% 0% no-repeat padding-box",
                                }}
                              />
                              <Typography
                                sx={{ fontSize: "14px", color: "#FF3939" }}
                              >
                                Inactive
                              </Typography>
                            </Box>
                          )}
                        </TableCell>
                      );
                    }
                    if (headCell.action === "action")
                      return (
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          sx={{ borderBottom: "none" }}
                          padding="none"
                        >
                          <ModeOutlinedIcon onClick={handleTableAction} />
                        </TableCell>
                      );
                    if (headCell.action === "name")
                      return (
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          sx={{
                            borderBottom: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: ".5rem",
                          }}
                          padding="none"
                        >
                          <Avatar
                            alt="Travis Howard"
                            src={
                              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                            }
                          />
                          {row[headCell.value]}
                        </TableCell>
                      );
                    else
                      return (
                        <TableCell
                          component="th"
                          id={labelId}
                          sx={{ borderBottom: "none" }}
                          scope="row"
                          padding="none"
                        >
                          {row[headCell.value]}
                        </TableCell>
                      );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ marginTop: "1rem", gap: "1rem", flexDirection: "column" }}
      >
        <Box sx={{ border: "1px solid #1A1A1A4D" }} />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>
            {`Showing ${
              tablePageNo === 1 ? 1 : tableRowPerPage * (tablePageNo - 1) + 1
            } to ${tableRowPerPage * tablePageNo} of ${tableRowTotalCount}`}
          </Typography>
          <Pagination
            count={tableRowTotalCount && tableRowTotalCount / tableRowPerPage}
            onChange={(event, value) => setTablePageNo(value)}
            variant="outlined"
            shape="rounded"
            sx={{
              backgroundColor: "#F3F3F3 0% 0% no-repeat padding-box",
              "& .css-b2hnro-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
                {
                  backgroundColor: "#D51A39CC",
                  color: "white",
                },
              "&.css-wjh20t-MuiPagination-ul": {
                background: "#F3F3F3 0% 0% no-repeat padding-box",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(AdminTable);
