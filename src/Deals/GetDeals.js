import axios from "axios";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import SimpleCard from "../SimpleCard/SimpleCard";

const getDealsData = async () => {
  const response = await axios.request("https://bakesaleforgood.com/api/deals");
  return response.data;
};

const getSingleDealsData = async (dealKey) => {
  const response = await axios.request(
    `https://bakesaleforgood.com/api/deals/${dealKey}`
  );
  return response.data;
};

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});


export default function Deals() {
  const classes = useStyles();
  const [info, setInfo] = useState();
  const [details , setDetails] = useState();
  const onClickAction = (data) => {
    getSingleDealsData(data.key).then((res)=> setDetails(res));
  };
  

  let tableData = new Array();

  useEffect(() => {
    getDealsData().then((res) => setInfo(res));
  }, []);

  info?.map((r) => tableData.push(r));
  console.log(tableData);

  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Cause</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData?.map((row, i) => (
                <TableRow key={i} onClick={() => onClickAction(row)}>
                  <TableCell component="th" scope="row">
                    {row.cause.name}
                  </TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} sm={6}>
        <SimpleCard prop={details}/>
      </Grid>
    </Grid>
  );
}
