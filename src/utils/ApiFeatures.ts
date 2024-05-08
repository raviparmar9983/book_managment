import e, { json } from "express";
import Book,{IBook} from "../models/bookModel";

export default class ApiFeatures{
    public query;
    private querystring;
    constructor(query:any,queryString:any) {
        this.query=query;
        this.querystring=queryString
    }
    public  fillter(){
        let queryObje={...this.querystring}
        const excludedfeild=['page','sort','limit','search']
        excludedfeild.forEach(element => {
            delete queryObje[element as any]
        });

        const querystr=JSON.stringify(queryObje)
        queryObje=querystr.replace(/\bgte|lte|lt|gt\b/g,(val)=>{
            return `$${val}`
        })
        queryObje=JSON.parse(queryObje)
        this.query=this.query.find(queryObje)
        return this
    }
   public sort(){
        if(this.querystring.sort){
            let sortobj=this.querystring.sort.split(',').join(' ')
            this.query=this.query.sort(sortobj)
        }
        return this;
    }
   public paging(){
        const page=this.querystring.page||1;
        const limit=this.querystring.limit||5;
        const skip=(page-1)*limit
        this.query=this.query.skip(skip).limit(limit)
        return this
    }
    public search(){
        if(this.querystring.search){
            const search=`${this.querystring.search}`
            console.log(search);
            this.query=this.query.find({title:{$regex:search,$options:'i'}})
        }
        return this
    }

}
