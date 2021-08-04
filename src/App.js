import "./App.css";
import { useEffect, useState } from "react";
import GetDeals from "./Deals/GetDeals";
import Search from "./Search/Search";
import { AppBar, Tab, Tabs, TabPanel } from "@material-ui/core";

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const viewPage = (value) => {
    switch(value) {
      case 0 : return <> <GetDeals/>  </>
      case 1:  return <> <Search/> </>
    }
  }

  useEffect(()=>{
    viewPage(value);
  },[value]);


  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Summary View" value={0} />
          <Tab label="Search" value={1}/>
        </Tabs>
      </AppBar>
      <div>
        <br/>
      {viewPage(value)}
      </div>
      
    </div>
  );
}

export default App;
