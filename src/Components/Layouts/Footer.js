import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

function Footer({ muscles, category, onSelect }) {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) => {
    onSelect(index === 0 ? "" : muscles[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor='primary'
        textColor='primary'
        onChange={onIndexSelect}
        aria-label='disabled tabs example'
        centered
      >
        <Tab label='All' />
        {muscles.map((group, index) => {
          return <Tab label={group} key={index} />;
        })}
      </Tabs>
    </Paper>
  );
}

export default Footer;
