//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		console.log('unable to connect to mongodb server');
	}
	console.log('connected to server');
	
	db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
	console.log('todos');
	console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log('unable to fetch',err);
	});
	
	db.collection('Todos').find({name:'amogha'}).toArray().then((docs)=>{
	console.log('todos');
	console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log('unable to fetch',err);
	});
	
	//db.close();
});