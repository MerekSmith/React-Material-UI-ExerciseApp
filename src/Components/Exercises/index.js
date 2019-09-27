import React from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = {
  Paper: { padding: 20, margin: "10px 0", height: 500, overflowY: "auto" }
};

export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an exercise from the list on the left."
  }
}) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group ? (
            <React.Fragment key={group}>
              <Typography variant='h5' style={{ textTransform: "capitalize" }}>
                {group}
              </Typography>
              <List component='ul'>
                {exercises.map(({ id, title }) => (
                  <ListItem button onClick={() => onSelect(id)}>
                    <ListItemText primary={title} key={id} />
                  </ListItem>
                ))}
              </List>
            </React.Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant='h4'>{title}</Typography>
        <Typography variant='subtitle1' style={{ marginTop: 20 }}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
