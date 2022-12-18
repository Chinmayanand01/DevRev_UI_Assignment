import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'antd/dist/antd.css';
// import './index.css';
 import {Button,notification } from "antd"
import BookComponent from "./books.component";

// const Search = Input.Search;
// const InputGroup = Input.Group;
// const Option = Select.Option;
const defaultDataSource=[{
  key: '1',
  bookName: "Man's search for meaning",
  isbn: 9788971460108,
  author:"Viktor Frankl",
  publishedDate:"10-10-2001",
  availableItems: 7,
  category: "Philosophy"
}, {
  key: '2',
  bookName: 'Wings of Fire: An Autobiography 1st Edition',
  author:"Dr.A. P. J. Abdul Kalam",
  isbn: 9788173154195,
  publishedDate:"10-11-2002",
  availableItems: 8,
  category: "Autobiography"
}, {
  key: '3',
  bookName: 'A Century is not Enough: My Roller-coaster Ride to Success',
  author:"Sourav Ganguly",
  isbn: 9789386228567,
  publishedDate:"11-08-2001",
  availableItems: 6,
  category: "Autobiography"
}, {
  key: '4',
  bookName: 'The Another World',
  author:"JAMES JONES",
  isbn: 9780385333641,
  publishedDate:"07-07-2003",
  availableItems: 2,
  category: "Historical Fiction"
}, {
  key: '5',
  bookName: 'React Design Patterns and Best Practices',
  author:"Richard Dawkins",
  isbn: 9780593061732,
  publishedDate:"01-10-2008",
  availableItems: 1,
  category: "Programming"
},{
  key: '6',
  bookName: "The Seven Wonders",
  isbn: 9788971460118,
  author:"Viktor Frankl",
  publishedDate:"15-01-2010",
  availableItems: 7,
  category: "Philosophy"
}, {
  key: '7',
  bookName: 'Ignited Minds',
  author:"Dr.A. P. J. Abdul Kalam",
  isbn: 9788173154295,
  publishedDate:"04-06-2009",
  availableItems: 8,
  category: "Philosophy"
}, {
  key: '8',
  bookName: 'Playing It My Way',
  author:"Sachin Tendulkar",
  isbn: 9781473612569,
  publishedDate:"29-04-2006",
  availableItems: 6,
  category: "Autobiography"
}, {
  key: '9',
  bookName: 'From Here to Eternity',
  author:"JAMES JONES",
  isbn: 9780385333691,
  publishedDate:"10-05-2011",
  availableItems: 2,
  category: "Historical Fiction"
}, {
  key: '10',
  bookName: 'The Greatest Show on Earth: The Evidence for Evolution',
  author:"Richard Dawkins",
  isbn: 9780593061733,
  publishedDate:"25-02-2004",
  availableItems: 1,
  category: "Science"
},{
  key: '11',
  bookName: "Pumps For Chemical Processing",
  isbn: 9587771460108,
  author:"Viktor Frankl",
  publishedDate:"15-12-2015",
  availableItems: 7,
  category: "Engineering"
}, {
  key: '12',
  bookName: 'India 2020',
  author:"Dr.A. P. J. Abdul Kalam",
  isbn: 9788173154225,
  publishedDate:"02-06-2012",
  availableItems: 8,
  category: "Vision"
}, {
  key: '13',
  bookName: 'My Last Test Match',
  author:"Sachin Tendulkar",
  isbn: 9781263612630,
  publishedDate:"18-05-2007",
  availableItems: 6,
  category: "Sports"
}, {
  key: '14',
  bookName: 'Neural Network Models - Theory And Projects',
  author:"JAMES JONES",
  isbn: 9780385444741,
  publishedDate:"14-12-2018",
  availableItems: 2,
  category: "Historical Fiction"
}, {
  key: '15',
  bookName: 'Adaptive Internal Model Control',
  author:"Datta Aniruddha",
  isbn: 3540762523,
  publishedDate:"08-06-2013",
  availableItems: 1,
  category: "Engineering"
}, {
  key: '16',
  bookName: 'Information Theoretic Security',
  author:"Junji shikata",
  isbn: 3540762531,
  publishedDate:"09-09-2017",
  availableItems: 3,
  category: "Engineering"
}, {
  key: '17',
  bookName: 'Trends In Functional Programming',
  author:"Meng Wang",
  isbn: 3540762532,
  publishedDate:"08-01-2018",
  availableItems: 7,
  category: "Engineering"
}, {
  key: '18',
  bookName: 'Security Engineering',
  author:"Ross Anderson",
  isbn: 3540762533,
  publishedDate:"24-07-2020",
  availableItems: 4,
  category: "Engineering"
}, {
  key: '19',
  bookName: 'Logic For Mathematics And Computer Science',
  author:"Stanley N.Buris",
  isbn: 3540762534,
  publishedDate:"21-04-1997",
  availableItems: 6,
  category: "Engineering"
}, {
  key: '20',
  bookName: 'The Algorithmic Leader',
  author:"Mike Walsh",
  isbn: 3540762535,
  publishedDate:"08-05-2019",
  availableItems: 5,
  category: "Engineering"
}];

class BookContainer extends Component {
    constructor(props) {
      super(props);
      var requestColumns = [{
        title: 'Book Name',
        dataIndex: 'bookName',
        key: 'bookName',
      }, {
        title: 'ISBN',
        dataIndex: 'isbn',
        key: 'isbn',
      },{
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
      },{
        title: 'Published Date',
        dataIndex: 'publishedDate',
        key: 'isbn',
      },{
        title: 'Available items',
        dataIndex: 'availableItems',
        key: 'isbn',
      },{
        title: 'Category',
        dataIndex: 'category',
        key: 'isbn',
      },{
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <Button 
            type="primary"
            onClick={this.requestConfirm.bind(this)}>Request Book</Button>          
          </span>
        ),
      }];
      var returnColumns = [{
        title: 'Book Name',
        dataIndex: 'bookName',
        key: 'bookName',
      }, {
        title: 'ISBN',
        dataIndex: 'isbn',
        key: 'isbn',
      },{
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
      },{
        title: 'Published Date',
        dataIndex: 'publishedDate',
        key: 'isbn',
      },{
        title: 'Category',
        dataIndex: 'category',
        key: 'isbn',
      },
      // {
      //   title: 'Quantity',
      //   dataIndex: 'availableItems',
      //   key: 'isbn',
      // },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <Button 
            type="primary"
            onClick={this.returnConfirm.bind(this)}>Return Book</Button>          
          </span>
        )
      }];
      this.state = {
        dataSource : defaultDataSource,
        updatedDataSource:  defaultDataSource,
        myBooksDataSource:[],// for search purpose
        updatedMyBooksDataSource:[],//persitence
        //dataSource:this.masterDataSource,    
        columns : requestColumns,
        returnColumns:returnColumns,
        selectedSearchType:"bookName" ,
        selectedRowKeys: [], 
        visible: false     
      };
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
    var updatedMyBooksDataSource = this.state.myBooksDataSource;
    var updatedBooksDataSource = [];
    var selectedKey = this.state.selectedRowKeys[0];
    var allowUpdate = true;
    this.state.updatedDataSource.forEach(function(dataSource) {  
          
        if(dataSource.key.toLowerCase() === selectedKey){
         
          if(dataSource.availableItems === 0)
            allowUpdate = false;
          dataSource.availableItems = allowUpdate ? dataSource.availableItems - 1 : 0;
          if(allowUpdate)
            updatedMyBooksDataSource.push(dataSource);
          else{
            alert("Out of stock");
            return false;
          }
        }
        updatedBooksDataSource.push(dataSource);
    });
    if(allowUpdate){
      this.setState({updatedDataSource:updatedBooksDataSource,myBooksDataSource:updatedMyBooksDataSource,selectedRowKeys:[],updatedMyBooksDataSource:updatedMyBooksDataSource});
      notification["success"]({
        message: 'Success',
        description: 'Book lended successfully.',
        duration:3
      });
  }
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }
 
  onSelectChange = (selectedRowKeys) => {    
    this.setState({ selectedRowKeys : selectedRowKeys});
  }
  requestConfirm(){
    if(this.state.selectedRowKeys.length > 0){
      this.setState({
        visible: true
      }); 
  }      
    else
      alert("Please select an item!");
  }
  returnConfirm(){
      
      //start
      if(this.state.selectedRowKeys.length > 0){
      var updatedMyBooksDataSource = this.state.myBooksDataSource;
      var updatedBooksDataSource = [];
      var selectedKey = this.state.selectedRowKeys[0];
     // var allowUpdate = true;
      this.state.updatedDataSource.forEach(function(dataSource) {  
            
          if(dataSource.key.toLowerCase() === selectedKey){
            dataSource.availableItems =  dataSource.availableItems + 1 ;
            updatedMyBooksDataSource.pop(dataSource);
          }
          updatedBooksDataSource.push(dataSource);
      });
        this.setState({updatedDataSource:updatedBooksDataSource,myBooksDataSource:updatedMyBooksDataSource,selectedRowKeys:[],updatedMyBooksDataSource:updatedMyBooksDataSource});
        notification["success"]({
          message: 'Success',
          description: 'Book returned successfully.',
          duration:3
        });
      }  else
        alert("Please select an item!");
      //end
  }

     filterDataSource(value,tabName){
       var valueLowerCase = value.trim().toLowerCase();
       var filteredDataSource = [];
       var selectedSearchType = this.state.selectedSearchType;
       if(tabName === "requestbooks"){
       defaultDataSource.forEach(function(dataSource) {
  
       if(dataSource[selectedSearchType].toString().toLowerCase().indexOf(valueLowerCase) !== -1)
          filteredDataSource.push(dataSource);
       });    
       this.setState({dataSource:filteredDataSource});
      }else{
        this.state.updatedMyBooksDataSource.forEach(function(dataSource) {          
          if(dataSource[selectedSearchType].toString().toLowerCase().indexOf(valueLowerCase) !== -1)
            filteredDataSource.push(dataSource);
          });    
          this.setState({myBooksDataSource:filteredDataSource});
      }
     }
     handleSearchTypeChange(e){
       this.setState({selectedSearchType:e});
     }
     resetSearch(tabName){
      if(tabName === "requestbooks")
        this.setState({dataSource:defaultDataSource});
      else
        this.setState({myBooksDataSource:this.state.updatedMyBooksDataSource});
     }
     render() {
        return (          
            <BookComponent
                {...{
                    book: {
                        dataSource: this.state.dataSource,
                        myBooksDataSource:this.state.myBooksDataSource,
                        columns: this.state.columns,
                        returnColumns: this.state.returnColumns,
                        selectedRowKeys: this.state
                    },
                    model:{
                      visible: this.state.visible                      
                    }
                }}
                onOk={this.handleOk.bind(this)}
                onCancel={this.handleCancel.bind(this)}
                returnConfirm={this.returnConfirm.bind(this)}
                resetSearch={this.resetSearch.bind(this)}
                handleSearchTypeChange={this.handleSearchTypeChange.bind(this)}
                filterDataSource={this.filterDataSource.bind(this)}
                onSelectChange={this.onSelectChange.bind(this)}
            />           
        );
    }
  }
    export default BookContainer;