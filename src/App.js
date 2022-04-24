import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import "./App.css";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, Button, Card, CardContent, Typography } from "@material-ui/core";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function App() {
  const territories = [
    {
      territoryID: "01581",
      territoryDescription: "Westboro",
      regionID: "1",
    },
    {
      territoryID: "01730",
      territoryDescription: "Bedford",
      regionID: "9",
    },
    {
      territoryID: "01833",
      territoryDescription: "Georgetow",
      regionID: "2",
    },
    {
      territoryID: "02116",
      territoryDescription: "Boston",
      regionID: "1",
    },
    {
      territoryID: "02139",
      territoryDescription: "Cambridge",
      regionID: "3",
    },
    {
      territoryID: "02184",
      territoryDescription: "Braintree",
      regionID: "1",
    },
    {
      territoryID: "02903",
      territoryDescription: "Providence",
      regionID: "3",
    },
    {
      territoryID: "03049",
      territoryDescription: "Hollis",
      regionID: "2",
    },
    {
      territoryID: "03801",
      territoryDescription: "Portsmouth",
      regionID: "1",
    },
    {
      territoryID: "06897",
      territoryDescription: "Wilton",
      regionID: "2",
    },
    {
      territoryID: "07960",
      territoryDescription: "Morristown",
      regionID: "1",
    },
    {
      territoryID: "08837",
      territoryDescription: "Edison",
      regionID: "3",
    },
    {
      territoryID: "14450",
      territoryDescription: "Fairport",
      regionID: "1",
    },
    {
      territoryID: "19428",
      territoryDescription: "Philadelphia",
      regionID: "3",
    },
    
  ];
  const [result, setResult] = useState("");
  const [query, setQuiery] = useState("");

  const handleChange = (event) => {
    setQuiery(event.target.value);
  };
  return (
    <>
      <div className="background">
        <div className="App">
          <Typography gutterBottom variant="h3" align="center">
            ATLAN - APP
          </Typography>
          <Grid>
            <Card
              style={{ maxWidth: 700, padding: "20px 5px", margin: "0 auto" }}
            >
              <CardContent>
                <Typography gutterBottom variant="h7">
                  Select Queries and get data.
                </Typography>

                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <FormControl sx={{ minWidth: 545 }} label="Query">
                        <Select
                          value={query}
                          onChange={handleChange}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value=""></MenuItem>
                          <MenuItem value={10}>
                            select* from territories
                          </MenuItem>
                          <MenuItem value={20}>
                            select territoryID from territories
                          </MenuItem>
                          <MenuItem value={30}>
                            select territoryDescription from territories
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid className="button">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          setResult(query);
                          console.log(result);
                        }}
                      >
                        Submit
                      </Button>
                    </Grid>

                    <br />
                    <br />
                    <h2>Results will be display here</h2>
                    <Grid>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 550 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              {result === 10 ? (
                                <>
                                  <TableCell align="center">
                                    <h3> territoryID </h3>
                                  </TableCell>
                                  <TableCell align="center">
                                   <h3> territoryDescription </h3>
                                  </TableCell>
                                  <TableCell align="center"> <h3>regionID</h3></TableCell>
                                </>
                              ) : (
                                <>
                                  {result === 20 ? (
                                    <>
                                      <TableCell align="center">
                                        <h3> territoryID </h3>
                                      </TableCell>
                                    </>
                                  ) : (
                                    <>
                                      {result === 30 ? (
                                        <>
                                          <TableCell align="center">
                                            <h3> territoryDescription </h3>
                                          </TableCell>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {territories.map((row) => (
                              <TableRow
                                key={row.name}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                {result === 10 ? (
                                  <>
                                    <TableCell
                                      component="th"
                                      scope="row"
                                      align="center"
                                    >
                                      {row.territoryID}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.territoryDescription}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.regionID}
                                    </TableCell>
                                  </>
                                ) : (
                                  <>
                                    {result === 20 ? (
                                      <>
                                        <TableCell
                                          component="th"
                                          scope="row"
                                          align="center"
                                        >
                                          {row.territoryID}
                                        </TableCell>
                                      </>
                                    ) : (
                                      <>
                                        {result === 30 ? (
                                          <>
                                            <TableCell align="center">
                                              {row.territoryDescription}
                                            </TableCell>
                                          </>
                                        ) : (
                                          <></>
                                        )}
                                      </>
                                    )}
                                  </>
                                )}
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </div>
    </>
  );
}
