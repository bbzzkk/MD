import React, {useState} from 'react';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import DeleteModal from '@/components/workspace/Main/Documents/Document/DeleteModal';
import CardHeader from '@material-ui/core/CardHeader';



const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 250,
    minWidth: 100,
    width: '150%',
    height: '4%',
    margin: '1%',
    transition: "transform 0.15s ease-in-out"
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
    fontWeight: "550",
    textAlign: 'left',
  },
  pos: {
    marginTop: 10,
    marginBottom: 12,
    verticalAlign: 'middle',
    display: 'inline-flex',
  },
  clock: {
    marginTop: 10,
    marginLeft: 5
  },
  red_btn:{
    color: '#db4646'
  },
  black_btn:{
    color: 'grey'
  },
  icon_button:{
    padding: 0,

  },
  card_action:{
    justifyContent: 'flex-end',
  }
}));

const CreateButton = props => {
  const { owner, createdAt, title } = props;
  const classes = useStyles();
  const [click, setClick] = useState(false);

  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })


  const handleClick =()=>{
    // console.log(click)
    setClick(!click);
  }

  return (
    <Card className={classes.root}
    classes={{root: state.raised ? classes.cardHovered : ""}}
    onMouseOver={()=>setState({raised: true, shadow:1})}
    onMouseOut={()=>setState({raised:false, shadow:0})}
    raised={state.raised} zDepth={state.shadow}>
    <Button style={{width:'100%'}}>
      <CardContent style={{marginLeft:'-30%'}}>
          <Typography className={classes.title}>
            create new documents
        </Typography>
      </CardContent>
      </Button>
    </Card>
  );
};

Document.propTypes = {
  owner: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CreateButton;