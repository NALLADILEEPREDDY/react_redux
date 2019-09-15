import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../_actions/postActions';
import {Link} from 'react-router-dom';

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  function handleFirstPageButtonClick(event) {
    onChangePage(event, 0);
  }

  function handleBackButtonClick(event) {
    onChangePage(event, page - 1);
  }

  function handleNextButtonClick(event) {
    onChangePage(event, page + 1);
  }

  function handleLastPageButtonClick(event) {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


class  PostDisplay extends Component {
    constructor(props) {
      super(props)
    this.state = {
         page:0,
         rowsPerPage:5
      }
     this.handleChangePage = this.handleChangePage.bind(this); 
     this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
     this.emptyRows = this.emptyRows.bind(this);
     this.handleDelete = this.handleDelete.bind(this);

    }
   

emptyRows() {
 return(this.state.rowsPerPage -
     Math.min(this.state.rowsPerPage, this.props.posts.length - 
        this.state.page * this.state.rowsPerPage));
}

 handleChangePage(event, newPage) {
    this.setState({page : newPage});
  }

  handleChangeRowsPerPage(event) {
    this.setState(
        {rowsPerPage : parseInt(event.target.value,10),
        page: 0}
    )
    
  }
  handleDelete(id) {
    console.log(`modify Data`)
    console.log(id)
    this.props.deletePost(id)
    this.props.history.push('/');
  }
  componentDidMount() {
      console.log(`mounted`)
      this.props.fetchPost();
  } 

  shouldComponentUpdate(nextProps, nextState) {
      console.log(`i am in update mode`)
      console.log(nextProps.newPost)
      this.props.posts.unshift(nextProps.newPost)
      return true
  }
  /*componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }*/
  
  


   
render() {
    const classes = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: 'auto',
  },
}));

    return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table}>
           <TableHead style={{backgroundColor:'lightBlue', textTransform: 'uppercase'}}>
            <TableRow>
              <TableCell >Id</TableCell>
              <TableCell align='right'>Title</TableCell>
              <TableCell align="right">Body</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.posts.slice(this.state.page * this.state.rowsPerPage, 
            this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map(post => (
              <TableRow key={post.id}>
                <TableCell  scope="row">
                  <Link to={'/' + post.id} 
                    style={{ textDecoration: 'none', color: 'inherit' }}>
                    {post.id}
                  </Link>
                </TableCell>
                <TableCell align="right">{post.title}</TableCell>
                <TableCell align="right">{post.body}</TableCell>
                <TableCell align="right">
                <Button 
                  type='submit' 
                  onClick = {this.handleDelete.bind(this,post.id)}
                  value={post.id}
                  style={{backgroundColor:'orange'}}>
                  Delete</Button>
                </TableCell>
              </TableRow>
            ))}

            {this.emptyRows > 0 && (
              <TableRow style={{ height: 48 * this.emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={3}
                count={this.props.posts.length}
                rowsPerPage={this.state.rowsPerPage}
                page={this.state.page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </Paper>
  );
}
}

PostDisplay.propTypes = {
    fetchPost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
  };
const mapStateToProps = () => state => ({
    posts : state.posts.posts,
    newPost : state.posts.post,
})

export default  connect(mapStateToProps, {fetchPost,deletePost})(PostDisplay)