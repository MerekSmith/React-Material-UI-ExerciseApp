import React, { Component } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core/";
import { Add as AddIcon, Category } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  FormControl: {
    width: "500px"
  }
});

class Create extends Component {
  state = {
    open: false,
    exercise: {
      title: "",
      description: "",
      muscles: ""
    }
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: value
      }
    });
  };

  handleSubmit = () => {
    // TODO: validate

    const { exercise } = this.state;

    this.props.onCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, "-")
    });

    this.setState({
      open: false,
      exercise: {
        title: "",
        description: "",
        muscles: ""
      }
    });
  };

  render() {
    const {
        open,
        exercise: { title, description, muscles }
      } = this.state,
      { classes, muscles: categories } = this.props;
    // console.log(classes);

    return (
      <React.Fragment>
        <Fab aria-label='add' mini onClick={this.handleToggle}>
          <AddIcon />
        </Fab>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
            <form>
              <TextField
                label='Title'
                value={title}
                onChange={this.handleChange("title")}
                margin='normal'
                classeName={classes.FormControl}
                style={{ width: 500 }}
              />
              <br />
              <FormControl
                classeName={classes.FormControl}
                style={{ width: 500 }}
              >
                <InputLabel htmlFor='muscles'>Muscles</InputLabel>
                <Select value={muscles} onChange={this.handleChange("muscles")}>
                  {categories.map(category => (
                    <MenuItem value={category} key={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br />
              <TextField
                multiline
                rows='4'
                label='Description'
                value={description}
                onChange={this.handleChange("description")}
                margin='normal'
                classeName={classes.FormControl}
                style={{ width: 500 }}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button color='primary' variant='raise' onClick={this.handleSubmit}>
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Create);
