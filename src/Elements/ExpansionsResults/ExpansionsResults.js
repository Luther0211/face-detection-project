import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./ExpansionsResults.css"
const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: '#FFFFFF'
  },
});

const SimpleExpansionPanel = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <ExpansionPanel className="EXPANSION">

            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className="TEXTCOLOR" />}>
                <Typography className={classes.heading}>
                    Age
                </Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails className="DETAILS">
                {/* <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography> */}
                {props.AGE}
            </ExpansionPanelDetails>

        </ExpansionPanel>
      
        <ExpansionPanel className="EXPANSION">

            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className="TEXTCOLOR" />}>
                <Typography className={classes.heading}>
                    Gender
                </Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails className="DETAILS">
                {/* <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography> */}
                {props.GENDER}
            </ExpansionPanelDetails>

        </ExpansionPanel>
      
        <ExpansionPanel className="EXPANSION">

            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className="TEXTCOLOR" />}>
                <Typography className={classes.heading}>
                    Multicultural Appereance
                </Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails className="DETAILS">
                {/* <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography> */}
                {props.MULTI}
            </ExpansionPanelDetails>

        </ExpansionPanel>
      
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);