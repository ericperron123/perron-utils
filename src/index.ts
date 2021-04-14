




// ***********************************************************************************************************************
// ArrayUtils.ts
// ***********************************************************************************************************************



export class ArrayUtils {


    public static parse<T>(arr:Array<T>, f:Function, sameArray:boolean = false):Array<T>
    {
      let tArray:Array<T> = arr;
      if(sameArray)
        tArray = [];
  
      for(var i:number = 0; i < arr.length;i++)
        tArray[i] = f(arr[i]);
  
      return tArray;
    }
  
    public static forEach<T>(arr:Array<T>,f:Function):void
    {
      for(var i:number = 0; i < arr.length;i++)
      {
        let result:any = f(arr[i]);
        if(result == "break")
          break;
      }
  
    }
  
    public static async forEachAsync<T>(arr:Array<T>,f:Function):Promise<any>
    {
      for(var i:number = 0; i < arr.length;i++)
      {
        let result:any = await f(arr[i]);
        if(result == "break")
          break;
      }
  
    }
  
  
    public static getListOfNumbers(count:number, startAt:number = 0):Array<number>
    {
      let arr:Array<number> = [];
      for(let i =0; i <= count; i++)
        arr.push(startAt + i)
  
      return arr;
    }
  
  
    public static shuffle(arr:Array<any>) {
      var currentIndex = arr.length, temporaryValue, randomIndex;
  
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
      }
  
      return arr;
    }
  
  
    public static removeItem(arr:Array<any>, item:any):boolean
    {
      let i:number = ArrayUtils.indexOf(arr, item);
  
      if(i != -1)
      {
        arr.splice(i,1);
        return true;
      }
  
      return false;
  
    }
  
    public static removeItemAt(arr:Array<any>, index:number):void
    {
      arr.splice(index, 1);
      return ;
    }
  
    public static lastItem(arr:Array<any>):any
    {
      if(arr.length>0)
        return arr[arr.length-1];
      else
        return null;
    }
  
  
  
  
    public static getItemByProperty(arr:Array<any>, propertyName:string, value:any)
    {
      for(let i:number = 0; i< arr.length; i++)
      {
        if(arr[i][propertyName] == value)
          return arr[i];
      }
  
      return null;
  
    }
  
  
    public static  getUniqueValues(arr:Array<any>):Array<any>
    {
      if(arr == null)
        return null;
  
      let arrUnique:Array<any> = [];
      let j:number;
      let found:Boolean = false;
  
      for (let i:number = 0 ; i < arr.length; i++ )
      {
        found = false;
        for (j = 0 ; j < arrUnique.length; j++ )
        {
          if(arrUnique[j] == arr[i])
            found = true;
        }
  
        if(!found)
          arrUnique.push(arr[i]);
      }
  
      return arrUnique;
  
    }
  
  
    public static indexOf(arr:Array<any>, value:Object, subFieldName?:any, ignoreCase:boolean = false):number
    {
      if(arr == null || arr.length == 0)
        return -1;
  
      if(ignoreCase)
        value = (value as string).toLowerCase();
  
      for(let i:number = 0; i < arr.length; i++)
      {
        let iValue = subFieldName? arr[i][subFieldName]: arr[i];
  
        if(ignoreCase)
          try {
            iValue = iValue.toLowerCase();
          }
          catch(err){
            // do nothing
          }
  
        if(iValue == value)
          return i;
      }
      return -1;
    }
  
    public static contains(arr:Array<any>, value:Object, subFieldName?:any, ignoreCase:boolean = false):boolean
    {
      let i:number = ArrayUtils.indexOf(arr, value, subFieldName, ignoreCase);
      return i != -1;
    }
  
  
    public static collectionToArray(o:any):Array<Key>{
      let arr:Array<Key> = new Array<Key>();
      for(let each in o){
        arr.push(new Key(each, o[each]));
      }
  
      return arr;
    }
  }

  


// ***********************************************************************************************************************
// MathUtils.ts
// ***********************************************************************************************************************


export class MathUtils {


    // [Eric Perron 2019-10-10] I tested this method and it will return within 1 or 2 ms even if the number reaches into the millions at base 62. 

   public static toBaseN(num:number, base:number = 62):string{

       if(base <= 1)
           throw "Base cannot be equal or smaller than 1";

       if(Math.round(base) != base)
          throw "Base must be an integer, it cannot be a float.";
       
       // if the output is abcde
       //  baseLogic is
       //  (a × n⁴) + (b × n³) + (c × n²) + (d × n¹) + (e × n⁰)

       let pow:number = Math.floor(this.nRoot(num, base));

       // get the maximum exponent 
       let tmpNum:number = num;
       let str:string = "";
       
       while(pow >= 0)
       {
           if(tmpNum == 0){
               str = str + "0";
           }
           else 
           {
               let digitUnit:number = Math.pow(base,pow);
               let digit:number = 0;

               digit = Math.floor(tmpNum/digitUnit);

               tmpNum -= (digit * digitUnit);
           
               // update the string
               str = str + MathUtils.getBaseChar(digit);
           }

           pow -=1;
       }
       
       if(str == "")
           return "0";

       return str;
   }

   private static getBaseChar(num:number): string 
   {
       if (num < 0)
           throw "The number cannot be negative!"

       if(num > 62)
           throw "base cannot exceed 62";
       
       // 0 to 9 are as is.  (ASCII 48 to 57)
       if(num<10)
           return String(num);

       // 10 to 36 = a to z  (ASCII 97 to 122)
       if(num < 36 ) 
           return String.fromCharCode(97 + num - 10);
               
       // 37 to 63 = A to Z  (ASCII 65 to 90)
       if(num >= 36 ) 
           return String.fromCharCode(65 + num - 36);
   }

   public static nRoot(num:number, base:number):number{
       
       return Math.log10(num)/Math.log10(base);

   }

}



// ***********************************************************************************************************************
// EPLEventEmitter.ts
// ***********************************************************************************************************************



export class EplEvent {

    public static readonly COMPLETE:string = "complete";
  
    private _type:string;
    private _target:any;
  
    public data:any;
  
    constructor(type:string, targetObj?:any, data?:any ) {
      this._type = type;
      this._target = targetObj;
      this.data = data;
    }
  
    public get target():any {
      return this._target;
    }
  
    public get type():string {
      return this._type;
    }
  
    public clone(targetObj:any):EplEvent
    {
      let newEvent:EplEvent = new EplEvent(this.type,targetObj);
      newEvent.data = this.data;
      return newEvent;
    }
  
  
  }
  
  export class PropertyChangeEvent extends EplEvent
  {
  
    public static readonly BEFORE_CHANGE:string = "beforePropertyChange";
    public static readonly CHANGE:string = "propertyChange";
  
    public oldValue:any;
    public newValue:any;
    public propertyName:string ="";
  
    public clone(targetObj:any)
    {
      let newEvent:PropertyChangeEvent = new PropertyChangeEvent(this.type, targetObj);
      newEvent.data = this.data;
      newEvent.oldValue = this.oldValue;
      newEvent.newValue = this.newValue;
      newEvent.propertyName = this.propertyName;
  
      return newEvent;
  
    }
  
    constructor(type:string, obj:any)
    {
      super(type, obj);
    }
  
  }
  
  export class EPLEventEmitter {
  
  
  
    // *********************************************
    // Public Methods
    // *********************************************
  
    public mimicEvent(type:string, dispatcherObj:EPLEventEmitter):void
    {
      dispatcherObj.on(type, this._mimicHandler, this);
    }
  
    public mimicEventOff(type:string, dispatcherObj:EPLEventEmitter):void
    {
      dispatcherObj.off(type, this._mimicHandler, this);
    }
  
    public getEventListener(type:string, listener:Function|string, scope:any):EventListener
    {
  
      let exists:Boolean = false;
  
      for (let i = 0; i < this._listeners.length; i++)
      {
        let item:EventListener = this._listeners[i];
        if (item.type === type && item.listener === listener && item.scope == scope)
          return item;
      }
  
      return null;
    }
  
  
    public onAll(listenerFunc:Function|string, scope:any):EventListener|Array<EventListener> {
  
      let listener:EventListener = new EventListener("**EPS: subscribe to all events", listenerFunc, scope);
      this._listeners.push(listener);
      return listener;
    }
  
    public on(type:string|Array<string>, listenerFunc:Function|string, scope:any):EventListener|Array<EventListener> {
  
      if(listenerFunc == null)
      {
        
        console.error("The listener for ["+type+"], is not defined!");
        throw "The listener is not defined!";
      }
  
      if(typeof type == "string")
      {
        if (this.getEventListener(type, listenerFunc, scope) != null)
          return;
  
        let listener:EventListener =new EventListener(type, listenerFunc, scope);
        this._listeners.push(listener);
        return listener;
      }
      else {
        let arr:Array<EventListener> = new Array<EventListener>();
  
        for(let typeItem of type){
          let listener:EventListener = this.on(typeItem, listenerFunc, scope) as EventListener;
          arr.push(listener);
        }
  
        return arr;
      }
    }
  
    public onOnce(type:string|Array<string>, listenerFunc:Function, scope:any):EventListener|Array<EventListener>{
      if(typeof type == "string")
      {
        if (this.getEventListener(type, listenerFunc, scope))
          return;
  
        let listener:EventListener = new EventListener(type, listenerFunc, scope, true);
        this._listeners.push(listener);
        return listener;
      }
      else {
        let arr:Array<EventListener> = new Array<EventListener>();
  
        for(let typeItem of type){
          let listener:EventListener = this.onOnce(typeItem, listenerFunc, scope) as EventListener;
          arr.push(listener);
        }
  
        return arr;
      }
  
    }
  
    public off(type:string|Array<string>, listenerFunc:Function|string, scope:any):void {
  
      if(typeof type == "string")
      {
        for (let i = 0; i < this._listeners.length; i++)
        {
          let item:EventListener = this._listeners[i];
          if (item.type === type && (item.listener === listenerFunc || listenerFunc== null)  && item.scope === scope) {
              this._listeners.splice(i, 1);
          }
        }
      }
      else for(let typeItem of type)
        this.off(typeItem, listenerFunc, scope);
    }
  
    public offAll(scope:any = null):void {
  
      // let scope:any = null;
      for(let i:number = this._listeners.length - 1; i >= 0; i--)
      {
        let item:EventListener =  this._listeners[i];
        if(scope == null || item.scope == scope)
        {
          item.type = null;
          item.scope = null;
          item.listener = null;
          try{
            this._listeners.splice(i, 1);
          }catch(error){}
        }
      }
  
    }
  
    public emit(evt:EplEvent|string, data?:any) {
  
      if(typeof evt == "string") {
        evt = new EplEvent(evt, this);
        evt.data = data;
      }
  
      for (let i = 0; i < this._listeners.length; i++)
      {
        if (this._listeners[i].type === evt.type || this._listeners[i].type == "*" || this._listeners[i].type == "**EPS: subscribe to all events")
        {
          let listener = this._listeners[i];
          if(typeof listener.listener == "string" ){
            listener.scope[listener.listener](evt);
          }
          else
            listener.listener.call(this, evt, listener.scope);
  
          if(listener.once)
            this.off(listener.type, listener.listener, listener.scope);
  
        }
      }
    }
  
  
    // *********************************************
    // Private properties
    // *********************************************
  
  
  
    private _listeners:Array<EventListener> = new Array<EventListener>();
  
  
    // *********************************************
    // Event Handlers
    // *********************************************
  
    private _mimicHandler(event:any, scope:any):void
    {
      let newEvent:any = event.clone(scope);
      scope.emit(newEvent);
    }
  
    private removeEventListener(eventListener:EventListener):void{
  
      for(let i:number = 0; i < this._listeners.length; i++)
      {
        if(eventListener == this._listeners[i])
          this._listeners.splice(i, 1);
      }
  
    }
  
  }
   
  export class EventListener {
  
    public type:string;
    public listener:Function|string;
    public scope:any;
    public once:boolean = false
  
    constructor(type:string, listener:Function|string, scope:any, once:boolean = false){
      this.type = type;
      this.listener = listener;
      this.scope = scope;
      this.once = once;
    }
  
  }

  

// ***********************************************************************************************************************
// Key.ts
// ***********************************************************************************************************************



export class Key extends EPLEventEmitter
{

    public get label():string { return this._label;};
    public get value():any { return this._value;};

    public set label(v:string)
    {
        if(this._label == v)
            return;

        // prepare the change event
        let e:PropertyChangeEvent = new PropertyChangeEvent(PropertyChangeEvent.CHANGE, this);
        e.newValue = v;
        e.oldValue = this._label;
        e.propertyName = "label";

        // change the bindAtt
        this._label = v;

        // dispatch the event
        this.emit(e);

    };

    public set value(v:any)
    {
        if(this._value == v)
            return;

        // prepare the change event
        let e:PropertyChangeEvent = new PropertyChangeEvent(PropertyChangeEvent.CHANGE, this);
        e.newValue = v;
        e.oldValue = this._value;
        e.propertyName = "value";

        // change the bindAtt
        this._value = v;

        // dispatch the event
        this.emit(e);

    };


    private _label:string;
    private _value:any;

    public toJSON():any{
        return {
            label: this.label,
            value:this.value
        }
    }

    public fromJSON(o:any):void
    {
      this.label = o.label;
      this.value = o.value;
    }

    constructor(label:string = null, value?:any)
    {
        super()

        this._label = label;
        this._value = value;

    }

}



// ***********************************************************************************************************************
// List.ts
// ***********************************************************************************************************************



export class ListEvent extends EplEvent {

    public static readonly ITEM_ADDED:string = "itemAdded";
    public static readonly ITEM_REMOVED:string = "itemRemoved";
    public static readonly ITEMS_ADDED:string = "itemsAdded";
    public static readonly REMOVE_ALL:string = "removeAll";
    public static readonly BEFORE_REMOVE_ALL:string = "beforeRemoveAll";
    public static readonly MOVE:string = "move";
  
    public item:any;
    public items:Array<any>;
    public index:number = -1;
    public oldIndex:number = -1;
  
    constructor(type:string, targetObj:any)
    {
      super(type, targetObj);
    }
  
  }


  
  export class List<T> extends EPLEventEmitter{
  
    // *************************************
    // Static Public property
    // *************************************
  
    public static readonly BREAK:string = "break";
  
    // *************************************
    // Static Public methods
    // *************************************
  
    public static isList(obj:any):boolean{
      if(obj && obj.className == "List")
        return true;
  
      return false;
    }
  
  
    // *************************************
    // Public Properties
    // *************************************
  
    public idFieldName:string = "id";
    public className:string = "List";
  
  
    // *************************************
    // Private Properties
    // *************************************
  
  
    private _list:Array<any> = [];
  
  
    // *************************************
    // Public Methods
    // *************************************
  
    public hasUniqueValues():boolean
    {
      let flag:boolean = true;
  
      this.forEach((a:T)=>{
        let c:number = this.find((b:T)=>{
          return (a == b)
        });
  
        if(c != -1) {
          flag = false;
          return List.BREAK;
        }
      });
  
      return flag;
  
    }
  
    public getUniqueValues():List<T>
    {
      let unique:List<any> = new List<T>();
      let j:number;
      let found:Boolean = false;
  
      for (let i:number = 0 ; i < this._list.length; i++ )
      {
        found = false;
        for (j = 0 ; j < unique.length; j++ )
        {
          if(unique[j] == this._list[i])
            found = true;
        }
  
        if(!found)
          unique.addItem(this._list[i]);
      }
  
      return unique;
  
    }
  
    public removeDuplicates(f?:(a:T,b:T)=>boolean):void
    {
  
      if(f == null)
        f = (a:T,b:T)=>{ return a == b; };
  
      if(this.length < 2)
        return;
  
      this.forEach((item:T, index:number)=>{
  
        let findIndex:number = this.find((item2:T, index2:number):boolean=> (index != index2 && f(item,item2)));
        if(findIndex != -1) {
          this.removeItemAt(findIndex);
        }
      },true);
  
      return;
  
    }
  
    public async destroy():Promise<any> {
  
      // removes all the event listeners.
      // this method is to clear memory. When this is called, your code should not be
      // listening to any events on this object.
      this.offAll();
  
      // destroy each of the children
      await this.forEachAsync(async (item:any):Promise<any>=>{
        if(item.destroy)
          return Utils.toAsync(item.destroy());
      });
  
      // removes all the children.
      this.removeAll();
    }
  
    public toString(f?:(item:T)=>string, seperator:string = ",", ignoreNullOrEmpty:boolean = false):string
    {
      
      let result:string = ""
      
      this.forEach((item:T)=>{
  
        let itemValue:string = (f == null) ? item.toString() : f(item);
  
        if(!ignoreNullOrEmpty || !StringUtils.isNullOrEmpty(itemValue))
          result += itemValue + seperator;
         
      })
  
      result = result.substr(0,result.length-1);
  
      return result;
    }
  
    public get last():T{
  
      if(this._list.length == 0)
        return null;
  
      return this._list[this._list.length-1]
    }
  
    public get first():T{
  
      return this._list[0];
    }
  
    public get random():T{
      if(this.count == 0)
        return null;
  
      if(this.count == 1)
        return this._list[0];
  
      let i:number = Math.round(Math.random()*this.count - 1);
      if(i==-1) i = 0;
      
      return this._list[i];
    }
  
    public get length():number
    {
      return this._list.length;
    }
  
    public get count():number
    {
      return this._list.length;
    }
  
    public removeItemAt(index:number):void {
      // remove from the list
  
      if(index < 0 && index > (this._list.length - 1))
      {
        console.debug("EPL List: Index is out of range. index: " + index + ".")
        return;
      }
  
      let rslt: Array<any> = this._list.splice(index, 1);
  
      if (rslt.length == 0)
      {
        console.debug("EPL List: Unable to remove item at " + index + ". Nothing returned by the splice method!")
        return;
      }
  
      let item = rslt[0];
  
      let event:ListEvent = new ListEvent(ListEvent.ITEM_REMOVED, this);
      event.item = item;
      event.index = index;
      this.emit(event);
  
      return item;
  
    }
  
    public move(item:any, index:number):void{
  
      let old_index:number = this.indexOf(item);
      if(old_index == -1 || old_index == index || index == this.count)
        return;
  
      this._list.splice(index, 0, this._list.splice(old_index, 1)[0]);
  
      let event:ListEvent = new ListEvent(ListEvent.MOVE, this);
      event.item = item;
      event.index = index;
      event.oldIndex = old_index;
      this.emit(event);
  
    }
  
    public pop(first:boolean = false):any
    {
      let item:any;
  
      if(first){
        item = this.first;
        this.removeItemAt(0);
      }
      else
      {
        item = this.last;
        this.removeItemAt(this.count - 1);
      }
      return item;
    }
  
    public popRange(from:number, to:number):List<T>{
  
      if(to > this.length - 1)
        to = this.length - 1;
        
      if(from == 0 && to == 0)
      {
        let r:List<T> = new List();
        r.addItem(this._list[0]);
        this._list = [];
        return r;
      } 
  
      return new List(this._list.splice(from, to));
  
    }
  
    public removeAll():void{
  
      let event:ListEvent = new ListEvent(ListEvent.BEFORE_REMOVE_ALL, this);
      this.emit(event);
  
      this._list = [];
  
      let event2:ListEvent = new ListEvent(ListEvent.REMOVE_ALL , this);
      this.emit(event2);
  
    }
  
    public itemAt(index:number):T
    {
      return this._list[index];
    }
  
    public find(f:(a:T, b?:number)=>boolean):number
    {
      let flag;
      let index:number = 0
  
      for(index; index<this.length; index++)
      {
        flag = f(this.itemAt(index), index);
        if(flag)
          break;
      }
  
      if(flag)
        return index;
      else
        return -1;
    }
  
  
  
    public findSortedItem(value:string|number, getValue:(item:T, index?:number)=>string|number):T {
    
      if(getValue == null)
        getValue = (item:T, index?:number)=>{
          return String(item);
        }
  
      let f:(value:string|number, from:number, to:number)=>T = (value:string|number, from:number, to:number):T=>{
  
        if(from == to){
          let item:T = this.itemAt(from);
          return (getValue(item) == value)?item:null;
        }
        else if (to - from == 1){
          
          let fromItem:T = this.itemAt(from);
          if(getValue(fromItem) == value) 
            return fromItem;
  
          let toItem:T = this.itemAt(to);
          if(getValue(toItem) == value) 
            return toItem;
  
          return null;
        }
  
        let mid:number = Math.floor((to-from)/2) + from;
        let midItem:T = this.itemAt(mid);
        let midItemValue:string|number = getValue(midItem);
      
        if(midItemValue == value)
          return midItem;
        else if(midItemValue < value)
          return f(value, mid, to);
        else 
          return f(value, from, mid);
  
      };
      
      
  
      return f(value, 0, this.count - 1);
  
    }
  
  
  
    public findItem(f:(a:T, b?:any)=>boolean, data?:any):T
    {
      let flag;
      let index:number = 0
  
      for(index; index<this.length; index++)
      {
        flag = f(this.itemAt(index), data);
        if(flag)
          break;
      }
  
      if(!flag)
        return null;
      else
        return this.itemAt(index);
    }
  
    public forEach(f:(a: T, b?:number) => string|void, reverse:boolean = false):string
    {
      let flag:string|void;
  
      if(reverse) {
        for (let index: number = this.length - 1; index >= 0; index--){
          flag = f(this.itemAt(index), index);
          if(flag == List.BREAK)
            break;
        }
      }
      else
        for(let index:number = 0; index<this.length; index++)
        {
          flag = f(this.itemAt(index), index);
          if(flag == List.BREAK)
            break;
        }
  
      if(flag == List.BREAK)
        return flag;
    }
  
    public async forEachAsync(f:(a: T, b?:number) => Promise<string>|Promise<void>, reverse:boolean = false):Promise<any>
    {
  
      if(reverse){
        for(let index:number = this.length - 1; index>=0; index--){
          let r:any = await f(this.itemAt(index), index);
          if(r == "break")
           break;
        }
      }
      else
        for(let index:number = 0; index<this.length; index++){
          let r:any = await f(this.itemAt(index), index);
          if(r == "break")
           break;
        }
    }
  
  
    public setItemAt(item:T, index:number = -1):T
    {
  
      if(this._list[index] !== undefined){
        let event:ListEvent = new ListEvent(ListEvent.ITEM_REMOVED, this);
        event.item = item;
        event.index = index;
        this.emit(event);
      }
      
      // replace the content
      this._list[index] = item;
  
      let event2:ListEvent = new ListEvent(ListEvent.ITEM_ADDED, this);
      event2.item = item;
      event2.index = index;
      this.emit(event2);
  
      return item;
    }
  
    public addItemAt(item:T, index:number = -1):T
    {
      // if the index is invalid, append to the end.
      if(index < 0  || index > this._list.length)
        this._list.push(item);
      else
        this._list.splice(index, 0, item);
  
      let event:ListEvent = new ListEvent(ListEvent.ITEM_ADDED, this);
      event.item = item;
      event.index = index;
      this.emit(event);
  
      return item;
    }
  
    public addItem(item?:T):T
    {
      if(item == null)
        if(this.itemFactory)
          item = this.itemFactory();
        else
          return;
  
      this.addItemAt(item, -1);
  
      return item;
    }
  
    public toArray():Array<T>
    {
      let arr:Array<T> = [];
  
      this.forEach((item:T)=>{
        arr.push(item);
      });
  
      return arr;
    }
  
    public sort(compareFn?: (a: T, b: T) => number):void{
      this._list.sort(compareFn);
    }
  
    /**
     * This will iterate through each values in the list and replace it with the returned value.
     * @param f
     */
    public iterate(f:(a: T, b?:number) => T):void
    {
  
      for(let i:number = 0; i < this._list.length; i++)
        this._list[i] = f(this._list[i], i);
  
    }
  
    public filter(f:(a: T, b?:number) => boolean):void
    {
      let newList:Array<T> = [];
  
      for(let i:number = 0; i < this._list.length; i++) {
        if (f(this._list[i], i)) {
          newList.push(this._list[i])
        }
      }
  
      this._list = newList;
    }
  
    public addItems(items:Array<T>|List<T>):void
    {
  
      if(items == null || items.length == 0)
        return;
  
      if(items["className"] == this.className)
      {
        let list:List<T> = items as List<T>;
  
        list.forEach((list:T)=>{
          this._list.push(list);
        });
  
        let event:ListEvent = new ListEvent(ListEvent.ITEMS_ADDED, this);
        event.items = list.toArray();
        this.emit(event);
  
      }
      else {
        let arr:Array<T> = items as Array<T>;
        
        for(let item of arr )
          this._list.push(item);
        
        let event:ListEvent = new ListEvent(ListEvent.ITEMS_ADDED, this);
        event.items = arr;
        this.emit(event);
      }
  
    }
  
    public removeItem(item:T):void
    {
      let i:number = this.indexOf(item);
      if(i == -1)
        return;
  
      this.removeItemAt(i);
  
    }
  
    public indexOf(item:T):number
    {
      return this._list.indexOf(item);
    }
  
  
    public contains(item:T):boolean{
  
      return this._list.indexOf(item) != -1;
    }
  
  
    public lastIndexOf(item:T):number
    {
      return this._list.lastIndexOf(item);
    }
  
    public getItemById(id:string, idFieldName:string = null, ignoreCase:boolean = false):T
    {
      if(StringUtils.isNullOrEmpty(id))
        return;
  
      if(idFieldName)
        this.idFieldName = idFieldName;
  
      if(ignoreCase)
        id = id.toLowerCase();
  
      for(let i:number = 0; i < this.length; i++)
      {
        let item:any = this.itemAt(i);
        if(item != null){
          let v:string = item[this.idFieldName];
          if(ignoreCase && v && typeof v == "string")
            v = v.toLowerCase();
  
          if(v == id)
            return item;
        }
      }
  
      return null;
    }
  
    public toJSON(recursive:boolean = false):any{
  
      let arr:Array<any> = new Array<any>();
  
      this.forEach((item:T)=>{
        arr.push(Utils.toJSON(item, recursive));
      })
  
      return arr;
    }
  
    public fromJSON<T>(arr:Array<T>):any{
  
      for(let i:number = 0; i < arr.length; i++)
      {
        // create an instance of the list item
        if(this.itemFactory != null){
          let item:any = this.itemFactory();
  
          // push the values into the instance
          Utils.fromJSON<T>(arr[i], item);
  
          // add the item into this list;
          this.addItem(item)
        }
        else {
          console.warn("WARNING: Unable to instantiate new items as the itemFactory function has not be defined in this List.");
        }
      }
    }
  
    public itemFactory:Function;
  
  
    public get list():Array<T>
    {
      return this._list;
    }
  
  
    // ***************************************
    // CONSTRUCTOR
    // ***************************************
  
    constructor(list?:List<T>|Array<T>){
  
      super();
  
      this.addItems(list);
      
    }
  
  
  }
  


// ***********************************************************************************************************************
// Utils.ts
// ***********************************************************************************************************************




export class Utils
{

  // I was anoyed with this type of line:
  //   if(a == "hello" || a == "big" || a == "bad" || a == "world")
  // so we can now replace it with
  //   if(Utils.orEquals(a, "hello", "big", "bad", "world"))

  public static orEquals(str:string, ...arr:Array<string>):boolean{

    let i:number = arr.findIndex((item)=>(item == str));

    return (i != -1);
  }


  public static removeNullProperties(o:any):any{
    let properties:Array<string> = Object.getOwnPropertyNames(o);
    
    properties.forEach((propName)=>{
      if(o[propName] == null)
        delete o[propName];
    });
    
    return o;
  }

  public static async toAsync(f:Function):Promise<any>{

    let r: any = f();
    if(r instanceof Promise) {

      let p:Promise<any> = r as Promise<any>;

      return new Promise((resolve, reject)=>{
        p.then((value:any)=>{
          resolve(value);
        }).catch((error:any)=>{
          reject(error);
        });
      });

    }
    else  return new Promise((resolve, reject)=>{
      resolve(r);
    });

  }

  public static copyToClipboard(text:string)
  {
    let previousFocus:any = document.activeElement;

    let tf = document.createElement("input");
    tf.type = "text";
    tf.style.position = "absolute";
    tf.style.opacity = "0";
    document.body.appendChild(tf);
    tf.value = text;
    tf.select();
    let r:boolean = document.execCommand("Copy");
    document.body.removeChild(tf);

    if(previousFocus)
      previousFocus.focus();
  }

  public static async getClipboard():Promise<string>
  {
    let previousFocus:any = document.activeElement;

    let tf = document.createElement("input");
    tf.type = "text";
    tf.style.position = "absolute";
    tf.style.opacity = "0";
    tf.style.top = "0px";
    document.body.appendChild(tf);
    tf.focus();
    tf.value = "yo";
    tf.setSelectionRange(0,2);

    let p:Promise<string> = new Promise((resolve, reject)=>{

      tf.onkeyup = () => {

        if(previousFocus)
          previousFocus.focus();

        let s:string = tf.value;
        document.body.removeChild(tf);

        resolve(s);

      };


    });

    document.execCommand("paste");



    return p;

  }




  /*
  *  This function is useful to read properties in an unknown object without causing a error.
  *
  *  for instance: prop_a.child_a.child_b.hello
  *
  *  if prop_a.child_a doesn't exist, you will simply get "null" back.
  *  it won't throw an error when trying to read "child_b" from an null object.
  *
  * */
  public static getValue(obj:any,path:string|Array<string>, defaultValue:any = null):any
  {

    if(path instanceof Array)
    {
      let arr:Array<string> = path as Array<string>;
      for(let i:number = 0; i < arr.length; i++)
      {
        let iPath:string = arr[i];
        let v:any = this.getValue(obj, iPath, null);
        if(v != null)
          return v;
      }

      return defaultValue;
    }

    if(obj == null || StringUtils.isNullOrEmpty(path))
      return defaultValue;

    let i:number = path.indexOf(".");

    let propertyName:string = null;
    if(i == -1)
      propertyName = path;
    else
      propertyName = path.substring(0,i);

    let value:any = obj[propertyName];


    if(i<path.length-1 && i != -1 && value != null)
    {
      path = path.substring(i+1,path.length);
      return Utils.getValue(value, path, defaultValue);
    }

    if(!obj.hasOwnProperty(propertyName))
      return defaultValue;

    return value;

  }

  public static getInheritencePath(obj:any, separator:string = " -> "):string{

    let className:string = Utils.getValue(obj, "__proto__.constructor.name");
    if(StringUtils.isNullOrEmpty(className))
      return null;

    let parentClassName:string;

    if(obj.__proto__ && obj.__proto__.__proto__)
      parentClassName = Utils.getInheritencePath(obj.__proto__, separator);

    if(!StringUtils.isNullOrEmpty(parentClassName))
      return parentClassName + separator + className;
    else
      return className;
  }



  // this function also makes a difference for the
  // Date = "date"
  // null = "null"
  // Array = "array"
  // List  = "list"
  // Otherwise, these properties are seen as objects.

  public static typeof(obj):string{

    let t = typeof obj;

    if (t == "object")
    {

      if(List.isList(obj))
        return "list";
      
      else if(obj instanceof Array)
        return "array";

      else if(obj instanceof Date)
        return "date";

      else if(obj === null)
        return "null";

      else
        return "object";

    }

    return t;

  }


  public static toJSON(obj:any, recursive:boolean = false):any {

    let t:string = Utils.typeof(obj);

    // string, boolean, number, date
    if(t == "string" || t == "boolean" || t == "number" || t == "date")
      return obj;

    // null
    else if(t == "null")
      return null;

    // function, symbol
    if(t == "function" || t == "symbol")
      return undefined; // ignore functions and symbol

    // has a function called toJSON
    else if(obj && obj.toJSON != null)
      return obj.toJSON(recursive);

    if(t == "array" && recursive)
    {
      for(var i:number = 0; i < obj.length; i++)
        obj[i] = Utils.toJSON(obj[i], true);

      return obj;
    }
    else if(t == "object")
    {
      let o:any = {};

      for (let prop in obj)
      {
        // ignore private properties
        if(StringUtils.startsWith(prop, "_"))
          continue;

        let t:string = Utils.typeof(obj[prop]);

        if (recursive == false && ( t == "object" || t == "array" || t == "list"))
          o[prop] = "["+ t +"]";
        else {
          let v =  Utils.toJSON(obj[prop],recursive);
          if(v !== undefined)
            o[prop] = v;
        }
      }

      return o;
    }


    return null;
  }

  public static fromJSON<T>(json: any, obj: T = null) : T {

    if(json == null)
      return;

    if(this.typeof(obj) == "date")
    {
      let d:Date = new Date(json);
      
      (obj as any).setTime(d.getTime());
      return obj;
    }

    if(typeof(json) == "string") {
      json = JSON.parse(json);
      if(obj)
        obj = Utils.fromJSON(json, obj);
      return obj;
    }

    if (typeof obj["fromJSON"] === "function") {
      obj["fromJSON"](json);
      return obj;
    }


    for (var propName in json)
    {
      let prop:any = obj[propName];
      let value:any = json[propName];

      let t:string = Utils.typeof(prop);

      // string, boolean, number, date
      if(t == "boolean"){
        if(Utils.typeof(value) == "string")
          obj[propName] = StringUtils.toBool(value);
        else
          obj[propName] = value;
      }
      else if(t == "string" || t == "number" || t == "date")
        obj[propName] = value;

      else if (prop && prop.fromJSON != null)
        prop.fromJSON(value);

      else if (t == "object")
        Utils.fromJSON(value, prop);
      
      else
        obj[propName] = value
    }


    return obj;
  }


  public static mixin(...objs):any {
    let newObj = {};

    objs.forEach(o => {
      Object.keys(o).forEach(k => {
        if(typeof newObj[k] == "object")
          newObj[k] = Utils.mixin(newObj[k],o[k]);
        else
          newObj[k] = o[k];
      });
    });

    return newObj;
  }

  public static clone(obj:any):any {
      
    let objType = this.typeof(obj);

    if(obj === null) return null;
    if(obj === undefined) return undefined;

    if(objType == "string" || objType == "boolean" || objType == "number") 
      return obj;
   
    if(objType == "date") 
      return new Date((obj as Date).getTime());
    
    if(objType == "array") 
    {
      let arrIn:Array<any> = obj as Array<any>;
      let newObj:Array<any> = [];
      for(let each in arrIn)
        newObj[each] = this.clone(arrIn[each]);
      return newObj;
    }
       
    
    // we are assuming it is an object
    let newObj:any = {};
    for(let each in obj){
      newObj[each] = this.clone(obj[each]);
    }
    
    return newObj;
  }


  public static getProperties(obj:any):string[]{

    let props:string[] = [];

    for(let each in obj)
      props.push(each);

    return props;
  }

}




// ***********************************************************************************************************************
// StringSearch.ts
// ***********************************************************************************************************************




export class StringSearch {


    constructor(content:string, contentBeginsWith:string, contentEndsWith:string = "", caseSensitive:Boolean = false)
    {
      this.content = content;
      this.contentBeginsWith = contentBeginsWith;
      this.contentEndsWith = contentEndsWith;
      this.caseSensitive = caseSensitive;
    }
  
  
  // **************************************
    // PUBLIC GETS AND SETS
    // **************************************
  
    public get index():number
    {
      return this._index;
    }
  
    public get indexEnd():number
    {
      return this._indexEnd;
    }
  
    public get indexInnerStart():number
    {
      return this._indexInnerStart;
    }
  
    public get indexInnerEnd():number
    {
      return this._indexInnerEnd;
    }
  
    public get result():string
    {
      return this._result;
    }
  
    public get innerResult():string
    {
      return this._innerResult;
    }
  
    // **************************************
    // PUBLIC PROPERTIES
    // **************************************
  
    public  content:string
    public  contentBeginsWith:string = "";
    public  contentEndsWith:string = ""
    public  caseSensitive:Boolean = false;
  
  
    // **************************************
    // PRIVATE METHODS
    // **************************************
  
    public searchNext()
    {
      if(this.index+1 >= this.content.length)
        return -1;
      else
        return this.search(this.index+1);
  
    }
  
    public search(indexOffset:number = 0):number
    {
  
      this._resetResults();
  
      // makes sure there is something in this string;
      if(this.content ==  null || this.content == "")
        return -1;
  
      let clc:string = this.content.toLowerCase();
  
      if(!this.caseSensitive)
        this._index = clc.indexOf(this.contentBeginsWith.toLowerCase(), indexOffset);
      else
        this._index = this.content.indexOf(this.contentBeginsWith, indexOffset);
  
      if(this._index == -1)
        return -1;
  
      this._indexInnerStart = this._index + this.contentBeginsWith.length;
  
      if(this.contentEndsWith == ""){
        this._indexInnerStart = -1;
        this._indexEnd = this._indexInnerStart;
        return this._index;
      }
  
      if(!this.caseSensitive)
        this._indexInnerEnd = clc.indexOf(this.contentEndsWith.toLowerCase(), this._indexInnerStart);
      else
        this._indexInnerEnd = this.content.indexOf(this.contentEndsWith, this._indexInnerStart);
  
      if(this._indexInnerEnd == -1)
      {
        this._indexInnerStart = -1;
        this._indexEnd = this._indexInnerStart;
        return this._index;
      }
  
      this._innerResult = this.content.substring(this._indexInnerStart, this._indexInnerEnd);
      this._indexEnd = this._indexInnerEnd+this.contentEndsWith.length;
      this._result = this.content.substring(this._index, this._indexEnd);
  
      return this.index;
    }
  
    // **************************************
    // PRIVATE PROPERTIES
    // **************************************
  
    private  _index:number;
    private  _indexOffset:number;
    private  _indexEnd:number;
    private  _indexInnerStart:number;
    private  _indexInnerEnd:number;
  
    private  _result:string;
    private  _innerResult:string;
  
    // **************************************
    // PRIVATE METHODS
    // **************************************
  
    private _resetResults():void
    {
  
      this._index= -1;
      this._indexEnd = -1
      this._indexInnerStart = -1;
      this._indexInnerEnd = -1;
  
      this._result = "";
      this._innerResult = "";
  
    }
  
    // **************************************
    // CONSTRUCTOR
    // **************************************
  
  
  
  
  }
    


// ***********************************************************************************************************************
// StringUtils.ts
// ***********************************************************************************************************************



export class StringUtils {


    constructor() {}
  
    public static forEach(str:string, f:(char:string, i:number)=>void):void
    {
      for(let i:number = 0; i < str.length; i++)
        f(str.charAt(i), i);
      
    }
  
  
    public static toArray(str):Array<string>
    {
      let arr:Array<string> = new Array<string>();
  
      for(let i:number = 0; i < str.length; i++)
        arr.push(str.substr(i,1));
  
      return arr;
  
    }
  
    public static clip(str:string, length:number, threePoints:boolean = false)
    {
      if(str == null)
        return;
        
      if(str.length > length)
      {
        if(threePoints)
          length -= 3;
        str = str.substring(0, length);
        if(threePoints)
          str+="..."
      }
  
      return str;
    }
  
    public static toTitleCase(str:string):string{
      let flag:boolean = false;
      let out:string = "";
  
      for(let i = 0; i < str.length; i++){
        let c:string = str[i];
  
        if(flag || i == 0)
          c = c.toUpperCase();
        else
          c = c.toLowerCase();
  
        out += c;
        flag = (c == " ");
  
      }
  
      return out;
    }
  
    public static toSentenceCase(str:string):string{
  
      let out:string = "";
      let flag:boolean = true;
  
      for(let i = 0; i < str.length; i++){
        let c:string = str[i];
  
        c = flag? c.toUpperCase(): c = c.toLowerCase();
  
        if(c != " ") flag = false;
        if(c == ".") flag = true;
  
        out += c;
  
      }
  
      return out;
    }
  
  
    public static startsWith(str:string, subString:string, caseSensitive:boolean = true):boolean
    {
      if(str == null || subString == null)
        return false;
  
     if(caseSensitive)
       return  str.indexOf(subString) == 0;
  
      return str.toLowerCase().indexOf(subString.toLowerCase()) == 0;
  
    }
  
    public static endsWith(str:string, subString:string, caseSensitive:boolean = true):boolean
    {
      if(str == null || subString == null)
        return false;
  
      let i:number = str.length - subString.length;
  
      if(i < 0)
        return false;
  
      if(caseSensitive)
        return  str.lastIndexOf(subString) == i;
  
      return str.toLowerCase().lastIndexOf(subString.toLowerCase()) == i;
  
    }
  
    public static obfuscate(str:string, reverse:boolean = false, extendedChars:boolean = false)
    {
      /*
       this method can be useful to hide text in the javascript code that you don't want someone to
       be able to find by simply searching the source code.
  
       This method is not an encryption function in the sence that it should never be used for security
       measures. The reason for this is obvious, the key is right inline!!
      */
  
      let codes:Array<number> = [48,98,65,83,121,46,101,114,119,88,106,42,37,58,107,122,38,70,59,92,43,50,125,110,80,67,124,91,73,77,111,127,89,34,120,63,90,82,96,126,109,112,118,36,44,97,84,87,115,102,105,116,41,32,47,62,54,99,104,33,53,79,69,51,45,117,61,94,95,85,72,113,78,40,75,108,39,52,35,123,100,68,55,56,81,74,49,71,86,93,76,60,66,57,64,103];
      let codeExt:Array<number> = [197,148,45,143,150,168,121,85,149,116,255,127,144,92,195,59,125,252,60,193,179,134,91,93,76,219,100,215,50,202,94,151,162,48,246,177,175,126,139,114,241,63,83,110,136,49,210,205,79,42,172,35,109,70,201,236,122,111,234,224,187,181,137,176,159,212,77,206,138,105,160,64,178,170,104,115,192,117,145,86,142,166,120,101,82,38,222,61,155,199,58,214,174,130,229,66,98,68,211,107,141,54,203,247,129,132,223,188,171,228,158,74,218,189,227,99,221,239,220,108,80,51,46,102,180,52,88,78,184,208,216,209,191,89,163,207,198,36,97,186,173,250,230,55,251,34,242,237,135,217,39,167,183,200,106,243,133,226,165,123,235,62,154,249,153,118,190,213,161,71,75,65,128,124,140,47,185,119,37,231,182,238,225,204,146,72,33,244,69,248,157,156,103,112,254,84,245,95,152,131,96,81,67,90,169,44,113,164,53,73,194,87,32,196,233,41,56,240,147,40,253,232,57,43];
      let out:string = "";
  
      if(extendedChars)
        codes = codeExt;
  
      if(!reverse)
      {
        for(let char of str) {
          let code:number = char.charCodeAt(0)-32;
          out += String.fromCharCode(codes[code]);
        }
        return out;
      }
      else
      {
        for(let char of str)
        {
         let i:number = codes.indexOf(char.charCodeAt(0));
         out += String.fromCharCode(i+32);
        }
  
        return out;
      }
    }
  
  
    private static uniqueCtr:number = 0;
    
    
    // [Eric Perron 2019-10-10] I tested this method and it will return a 1000 random string in 1 or 2 ms even if it must be a unique string.
  
    public static randomString(length:number, unique:boolean = false):string
    {
  
  
      let str:string = "";
  
      for(let i:number = 0; i < length; i++)
      {
        let g:number = Math.round(Math.random()*2)
        let c:number;
  
        // 48 to 57 [0 to 9]
        if(g == 0) c = Math.round(Math.random()*(57-48))+48
  
        // 65 to 90 [A to Z]
        if(g == 1) c = Math.round(Math.random()*(90-65))+65
  
        // 97 to 122 [a to z]
        if(g == 2) c = Math.round(Math.random()*(122-97))+97
  
        str += String.fromCharCode(c);
  
      }
  
      if(unique)
      {
      
        this.uniqueCtr++; 
        let uStr:string = MathUtils.toBaseN(this.uniqueCtr, 62);
  
        if(uStr.length >= str.length)
          str = uStr;
        else 
          str = str.substr(0,str.length - uStr.length) + uStr;
      }
  
      return str;
    }
  
    /*
      variables within a string can be reset
      "hello Mr.{0} {1}" can become "hello Mr.{3} {4}". 
  
      This is useful for building sql strings using predefined searches. 
    */ 
  
    public static startCtrVariablesAt(str: string, startAt: number): string {
  
      var ctr:number = startAt - 1;
  
      return this.parse(new StringSearch(str, "{","}"),true,(s:StringSearch)=>{
        let n:number = Number.parseInt(s.innerResult, 10);
        if(!isNaN(n)){
          ctr++;
          return ctr;
        }
        else 
          return s;
      });
  
    }
  
  
    public static Format(str:string, values:Array<any>):string
    {
      for(let i:number = 0; i < values.length; i++)
        str = StringUtils.replace(str, "{"+i+"}", values[i]);
  
      return str;
    }
  
    public static splitAt(str:string, index:number):Array<string>
    {
  
      // example: splitAt("helloWorld", 4) will return ["hello","World"];
  
      let arr:Array<string> = [];
      arr[0] = str.substring(0,index);
      arr[1] = str.substring(index+1,str.length + 1);
  
      return arr;
    }
  
    public static indexOfMany(text:string, arr:Array<string>):number
    {
      let min:number = -1;
  
      for(let v of arr)
      {
        let i:number = text.indexOf(v);
        if(min == -1) min = i;
  
        if(i < min && i != -1)
        {
          min = i;
        }
      }
  
      return min;
    }
  
    public static  isPostalCode(str:string):Boolean
    {
      str = StringUtils.replace(str, " ","");
      return StringUtils.validateMask(str, "A#A#A#");
    }
  
    public static  charIsAnumber(char:string):Boolean
    {
      if(char.charCodeAt(0) >=48 && char.charCodeAt(0) <=57)
        return true;
      else
        return false;
    }
  
    public static charIsALetter(char:string):Boolean
    {
      // a to z
      if(char.charCodeAt(0) >=97 && char.charCodeAt(0) <=122)
        return true;
  
      // A to Z
      if(char.charCodeAt(0) >=65 && char.charCodeAt(0) <=90)
        return true;
  
      return false;
    }
  
    public static  validateMask(str:string, mask:string):Boolean
    {
      if(str.length != mask.length)
        return false;
  
      // A = Letter
      // # = number
      // exeample Masks: A#A#A#, (###) ###-####
  
      for(let i:number = 0; i < mask.length; i++)
      {
        let cMask:string = mask.charAt(i).toLowerCase();
        let cStr:string = str.charAt(i);
  
        // not enough characters!
        if(cStr == null)
        {
  
          return false;
        }
  
        if(cMask == "a")
        {
          if( !StringUtils.charIsALetter(cStr) )
            return false;
        }
        else if(cMask == "#")
        {
          if(!StringUtils.charIsAnumber(cStr) )
            return false;
        }
        else if(cMask != cStr)
        {
          return false;
        }
  
      }
  
      return true;
    }
  
  
    public static applyMask(str:string, mask:string):string
    {
      let output:string = "";
      let iStr:number = 0;
  
      for(let i:number = 0; i < mask.length; i++)
      {
        let c:string = mask.charAt(i).toLowerCase();
        if(c == "a" || c == "#")
        {
          output += str.charAt(iStr);
          iStr ++;
        }
        else
          output += c;
      }
  
      return output;
    }
  
    public static  toBool(str:string):boolean
    {
  
      if(str == null)
        return false;
  
      if(typeof str == "boolean")
        return str as boolean;
      
      if(typeof str != "string")
        return false;
      
      str = str.toLowerCase();
  
      if(ArrayUtils.indexOf(['1','true','t','on','yes','y','oui'],str)!= -1)
        return true;
      else
        return false;
    }
  
  
  
    public static  getValue(str:string):any
    {
      str = str.toLowerCase();
      if(str == "false") return false;
      if(str == "true")  return true;
  
      let num:number = parseFloat(str);
      if(!isNaN(num))	return num;
  
      let i:number = parseInt(str);
      if(!isNaN(i)) return i;
  
      return str;
    }
  
  
  // Removes all spaces and sets the string to lower case.
  // then sends the index of str2 in str1.
  
    public static  simplifyIndexOf(str1:string, str2:string):number
    {
      str1 = StringUtils.simplify(str1);
      str2 = StringUtils.simplify(str2);
      return str1.indexOf(str2);
    }
  
  // Removes all spaces and sets the string to lower case.
  // then verifies if both are the same.
  
    public static  simplifyIsEqual(str1:string, str2:string):Boolean
    {
      return (StringUtils.simplify(str1) == StringUtils.simplify(str2));
    }
  
    public static  isNullOrEmpty(str:string):Boolean
    {
      return (str == null || str.length == 0 || str == "" || str == undefined);
    }
  
    public static spacePadding(str:string, length:number, left:Boolean = false, spaceChar:string = " "):string
    {
      if(str.length > length)
        return str;
  
      let spaces:string = "";
  
      for(let i:number = str.length; i < length; i++)
        spaces += spaceChar;
  
      if(left)
        return spaces + str;
      else
        return str + spaces;
    }
  
    public static spaceOffset(str:string, length:number, left:Boolean = true, spaceChar:string = " "):string
    {
      let spaces:string = "";
  
      for(let i:number = 0; i < length; i++)
        spaces += spaceChar;
  
      if(left)
        return spaces + str;
      else
        return str + spaces;
    }
  
  
  // Removes all spaces and sets the string to lower case.
    public static  simplify(str:string):string
    {
      if (str == null || str == "")
        return str;
  
      str = StringUtils.replace(str, " ", "", false, true);
      str = str.toLowerCase();
  
      return str;
    }
  
    public static  removeExtraSpaces(str:string, leadingSpaces:Boolean = true, endingSpaces:Boolean=true, doubleSpaces:Boolean = false):string
    {
  
      let i:number = 0;
      let flag:Boolean = false;
  
      if(endingSpaces)
      {
  
        do
        {
          flag = (" \n\r\t".indexOf(str.charAt(i)) != -1);
          if(flag) i++;
        }
        while(flag && i < str.length - 1);
  
        str = str.substring(i, str.length);
      }
  
      if(leadingSpaces)
      {
        i = str.length - 1;
  
        do
        {
          flag = (" \n\r\t".indexOf(str.charAt(i)) != -1);
          if(flag) i--;
        }
        while(flag && i > 0);
  
        str = str.substring(0, i + 1);
      }
  
      if(doubleSpaces)
        str = StringUtils.replace(str, "  ", " ", false, true);
  
      return str;
    }
  
  
    public static  replaceVariables(str:string, variables:Object, caseSensitive:Boolean = false):string
    {
      for(let each in variables)
        str = StringUtils.replace(str, "{" + each + "}", variables[each], caseSensitive);
  
      return str;
    }
  
    public static removeFrenchChars(str:string):string{
  
      let frenchCharsA:Array<string> = ['À','Â','Ä','È','É','Ê','Ë','Î','Ï','Ô','Œ', 'Ù','Û','Ü','Ÿ','à','â','ä','è','é','ê','ë','î','ï','ô','œ', 'ù','û','ü','ÿ','Ç','ç','«','»','€'];
      let frenchCharsB:Array<string> = ['A','A','A','E','E','E','E','I','I','O','OE','U','U','U','Y','a','a','a','e','e','e','e','i','i','o','oe','u','u','u','y','C','c','"','"','euro'];
  
      frenchCharsA.forEach((char, index)=>{
        str = StringUtils.replace(str, char, frenchCharsB[index],true, true);
      });
  
      return str;
  
    }
  
    public static indexOf(str:string, find:string, position:number = 0, caseSensitivte:boolean = false, ignoreFrenchChars:boolean = false):number
    {
      if(StringUtils.isNullOrEmpty(str) || StringUtils.isNullOrEmpty(find))
        return -1;
  
      if(!caseSensitivte) {
        str = str.toLowerCase();
        find = find.toLowerCase();
      }
  
      if(ignoreFrenchChars){
        str = StringUtils.removeFrenchChars(str);
        find = StringUtils.removeFrenchChars(find);
      }
  
     return str.indexOf(find);
  
    }
  
    public static toOneLine(str:string, divider:string = "|"){
  
       str = StringUtils.replace(str, "\r", "\n");
      str = StringUtils.replace(str, "\n\n", "|");
      str = StringUtils.replace(str, "\n", "|");
      str = StringUtils.trim(str);
      str = StringUtils.removeExtraSpaces(str);
  
      return str;
    }
  
    public static replace(str:string, find:string|Array<string>, replaceWith:string, caseSensitive:Boolean = false, recursive:Boolean = false):string
    {
      if(Utils.typeof(find) == "array")
      {
        let arr:Array<string> = find as Array<string>;
        for(let i:number = 0; i < arr.length; i++)
          str = StringUtils.replace(str, arr[i], replaceWith, caseSensitive, recursive);
  
        return str;
      }
  
      if(typeof(str) != "string")
        return str;
  
      if(str == null || str == "")
        return str;
  
      if(find == replaceWith || str == null)
        return str;
  
      let strOut:string = "";
  
      let s:StringSearch = new StringSearch(str, find as string, "", caseSensitive);
      let i:number=0;
      let i2:number = 0;
  
      do
      {
        i2 = s.search(i);
        if(i2 != -1)
        {
  
          strOut += str.substring(i, i2)+replaceWith;
  
          i = i2+find.length;
  
        }
        else
        {
          strOut += str.substring(i, str.length);
          i = -1;
        }
  
      }
      while(i != -1);
  
      if(recursive && strOut.indexOf(find as string) != -1){
        strOut = StringUtils.replace(strOut, find, replaceWith, caseSensitive, recursive);
      }
      return strOut;
    }
  
  
    public static  textFileToLines(str:string):Array<string>
    {
      return StringUtils.splitWithMultipleDelimeter(str, ["\r\n", "\r", "\n"]);
    }
  
    public static allIndexesOf(str:string, searchString:string):Array<number>{
  
      let i:number = 0;
      let arr:Array<number> = [];
  
      do
      {
        i = str.indexOf(searchString, i);
        if (i != -1)
        {
          arr.push(i);
          i += searchString.length;
        }
      } while (i != -1 && i < str.length - 1);
  
      return arr;
    }
  
  
  
  
  
    public static  parse(search:StringSearch, innerResultOnly:Boolean, f:Function):string
    {
      if(!search.content || search.content == "")
        return "";
  
      let i:number = 0;
      let i2:number = -1;
      let strOut:string = "";
  
      do
      {
        i2 = search.search(i);
  
        if(i2 != -1)
        {
  
          if(innerResultOnly)
          {
            strOut += search.content.substring(i, search.indexInnerStart) + f(search);
            i = search.indexInnerEnd;
  
          }
          else
          {
            strOut += search.content.substring(i, i2) + f(search);
            i = search.indexEnd;
          }
  
  
        }
        else
        {
          strOut += search.content.substring(i, search.content.length);
          i = -1;
        }
      }
      while(i != -1);
  
  
      return strOut;
    }
  
    public static  split(str:string, delimeter:string, caseSensitive:Boolean = false):Array<string>
    {
  
      let arr:Array<string> = [];
      let tmp_str:string = str;
      let tmp_delimeter:string = delimeter;
  
      if(!caseSensitive)
      {
        if(tmp_str)
          tmp_str = tmp_str.toLowerCase();
        if(tmp_delimeter)
          tmp_delimeter = tmp_delimeter.toLowerCase();
      }
  
      let i:number = 0;
      let i2:number = tmp_str.indexOf(tmp_delimeter);
  
      if(i2 == -1)
        return [str];
  
      do
      {
        arr.push(str.substring(i, i2));
        i = i2 + tmp_delimeter.length;
        i2 = tmp_str.indexOf(tmp_delimeter, i2 + tmp_delimeter.length);
      }
      while(i2 != -1);
  
      arr.push(str.substring(i, tmp_str.length));
  
      return arr;
  
    }
  
    public static  spitStrings(arrStr:Array<string>, delimeter:string,  caseSensitive:Boolean = false):Array<string>
    {
  
      let outArr:Array<string> = [];
      let tmpArr:Array<string>;
  
      for (let i:number = 0; i < arrStr.length; i++)
      {
        tmpArr = StringUtils.split(arrStr[i], delimeter, caseSensitive);
  
        for (let j:number = 0; j < tmpArr.length; j++ )
        {
          outArr.push(tmpArr[j]);
        }
      }
  
      return outArr;
    }
  
    public static  splitWithMultipleDelimeter(str:string, delimeters:Array<string>, caseSensitive:Boolean = false):Array<string>
    {
  
      let arrOut:Array<string> = [str];
  
      for (let i:number = 0; i < delimeters.length; i++ )
      {
        arrOut =  StringUtils.spitStrings(arrOut, delimeters[i], caseSensitive);
      }
  
      return arrOut;
    }
  
    public static trim(input:string):string
    {
      if (input == null || input.length == 0)
        return input;
  
      let rtrim:RegExp = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      return input.replace(rtrim, '');
  
    }
  
    public static insert(str:string, insertStr:string, index:number, before:boolean = true){
  
      if(!before && index != str.length)
        index++;
  
      str = str.substr(0,index) + insertStr + str.substring(index,str.length);
  
      return str;
    }
  
  
  }
  



// ***********************************************************************************************************************
// DateDuration.ts
// ***********************************************************************************************************************



  
export class DateDuration {

    constructor(d1:Date, d2:Date)
    {
      this.run(d1, d2);
    }
  
  
    public days:number;
    public daysTotal:number;
  
    public months:number;
    public monthsTotal:number;
  
    public weeksTotal:number;
  
    public years:number;
  
    public run(date1:Date, date2:Date):void
  {
    var d1:Date = new Date(date1);
    var d2:Date = new Date(date2);
  
    if(d2<d1)
    {
      var tmp:Date = d1;
      d1 = d2;
      d2 = tmp;
    }
  
    // ---------------------------
    // DAYS
  
    this.daysTotal+=Math.floor((d2.getTime() - d1.getTime()) / 1000 / 60 / 60 / 24);
  
    if(d1.getDate() > d2.getDate())
      this.days = DateUtils.getDaysInMonth(d1) - d1.getDate() + d2.getDate();
    else
      this.days = d2.getDate() - d1.getDate();
  
    d1.setDate( d1.getDate() + this.days);
  
    // WEEKS
    this.weeksTotal = this.daysTotal / 7;
  
  
    // ---------------------------
    // MONTHS
  
    if(d1.getMonth() > d2.getMonth())
      this.months = 12 - d1.getMonth() + d2.getMonth();
    else
      this.months = d2.getMonth() - d1.getMonth();
  
    d1.setMonth(d1.getMonth() + this.months);
  
    this.monthsTotal = this.months;
  
  
    // --------------------------------------------------------
    // number of years
    this.years = Math.abs(d1.getFullYear() - d2.getFullYear());
  
    this.monthsTotal += this.years * 12;
  
  }
  
  }

// ***********************************************************************************************************************
// DatePeriod.ts
// ***********************************************************************************************************************



export class DatePeriod {

    constructor(from?:Date, to?:Date)
    {
      if(from != null)
        this._from = from;
      if(to != null)
        this._to = to;
    }
  
    private _from:Date;
    private _to:Date;
  
    // **************************************
    // PUBLIC GETS AND SETS
    // **************************************
  
  
    public  get from():Date
    {
      return this._from;
    }
  
  
    public  get duration():DateDuration
    {
      return new DateDuration(this._from, this._to);
    }
  
  
    public get to():Date
    {
      return this._to;
    }
  
  
    // **************************************
    // PUBLIC METHODS
    // **************************************
  
    public containsDate(date:Date):number
  {
    let d1:number = DateUtils.compareDates(date, this._from);
    let d2:number = DateUtils.compareDates(this._to, date);
  
    if(d1 != -1 && d2 != -1) // within bounds
      return 0;
  
  
    if (d1 != -1)  // is after this period.
      return 1;
  
    return -1; // is before this period.
  }
  
    public  toString():String
  {
    return "from " + this._from.toDateString() + " to " + this._to.toDateString();
  }
  }
  




// ***********************************************************************************************************************
// DateUtils.ts
// ***********************************************************************************************************************


  export class DateUtils {

    constructor(){}
  
    private static _monthsNames:Array<any> = [
      {
        fr_CA:[ "Janvier", "Jan" ],
        en_CA:[ "January", "Jan" ]
      },{
        fr_CA:[ "Février", "Fév" ],
        en_CA:[ "February", "Feb" ]
      },{
        fr_CA:[ "Mars", "Mars" ],
        en_CA:[ "March", "Mar" ]
      },{
        fr_CA:[ "Avril", "Avr" ],
        en_CA:[ "April", "Apr" ]
      },{
        fr_CA:[ "Mai", "Mai" ],
        en_CA:[ "May", "May" ]
      },{
        fr_CA:[ "Juin", "Juin" ],
        en_CA:[ "June", "Jun" ]
      },{
        fr_CA:[ "Juillet", "Juil" ],
        en_CA:[ "July", "Jul" ]
      },{
        fr_CA:[ "Août", "Août"],
        en_CA:[ "August", "Aug"]
      },{
        fr_CA:[ "Septembre", "Sept" ],
        en_CA:[ "September", "Sep" ]
      },{
        fr_CA:[ " Octobre", "Oct" ],
        en_CA:[ " October", "Oct" ]
      },{
        fr_CA:[ " Novembre", "Nov" ],
        en_CA:[ " November", "Nov" ]
      },{
        fr_CA:[ " Décembre", "Déc" ],
        en_CA:[ " December", "Dec" ]
      }
    ];
  
    private static _weeksDescriptions:Array<any> = [
      {
        fr_CA:[ "Première semaine", "1ère semaine" ],
        en_CA:[ "First week", "1st week"]
      },{
        fr_CA:[ "Deuxième semaine", "2ème semaine" ],
        en_CA:[ "Second week", "2nd week"]
      },{
        fr_CA:[ "Troisième semaine", "3ème semaine" ],
        en_CA:[ "Third week", "3rd week"]
      },{
        fr_CA:[ "Quatrième semaine", "4ème semaine" ],
        en_CA:[ "Forth week", "4th week"]
      },{
        fr_CA:[ "Cinquième semaine", "5ème semaine" ],
        en_CA:[ "Fift week", "5th week" ]
      },
    ]
  
    private static _daysNames:Array<object> = [
      {
        fr_CA:[ "Dimanche", "Dim" ],
        en_CA:[ "Sunday", "Sun" ]
      },{
        fr_CA:[ "Lundi", "Lun" ],
        en_CA:[ "Monday", "Mon" ]
      },{
        fr_CA:[ "Mardi", "Mar" ],
        en_CA:[ "Tuesday", "Tue" ]
      },{
        fr_CA:[ "Mercredi", "Mer" ],
        en_CA:[ "Wednesday", "Wed" ]
      },{
        fr_CA:[ "Jeudi", "Jeu" ],
        en_CA:[ "Thursday", "Thu" ]
      },{
        fr_CA:[ "Vendredi", "Ven" ],
        en_CA:[ "Friday", "Fri" ]
      },{
        fr_CA:[ "Samedi", "Sam" ],
        en_CA:[ "Saturday", "Sat" ]
      }
    ];
  
    private static  _arrMonthsDayCount:Array<number> = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  
    public static timeToString(t:number):string{
  
      let out:string = "";
  
      let s = 1000; // 60 * 1000;
      let h = 60000; // 60 * s;
      let d = 1440000; // 24 * h;
  
      // how many days
      let days:number = Math.floor(t/d);
      if(days > 0){
        t -= days*d;
        out += days + " days, ";
      }
      
      // how many hours
      let hours:number = Math.floor(t/h);
      if(hours > 0){
        t -= hours*h;
        out += hours + " hrs, ";
      }
      // how many seconds
      let seconds:number = Math.floor(t/s);
      if(seconds > 0){
        t -= seconds*s;
        out += seconds + " seconds, ";
      }
  
      out += t + " ms"
      return out;
    }
  
    public static removeHours(date:Date, count:number):Date{
      
      date.setTime(date.getTime()-3600000*count);
      
      return date;
    }
  
  
    public static addHours(date:Date, count:number):Date{
      
      date.setTime(date.getTime()+3600000*count);
      
      return date;
    }
  
    public static addDays(date:Date, count:number):Date{
      
      date.setTime(date.getTime()+86400000*count);
      
      return date;
    }
  
    public static removeDays(date:Date, count:number):Date{
      
      date.setTime(date.getTime()-86400000*count);
      
      return date;
    }
  
  
     
  
    public static isDate(obj:any):boolean
    {
      if(obj != null && obj.toDateString != null && obj.getDate != null && obj.setTime != null)
        return true;
  
      return false;
    }
  
  
    public static toString(date:Date = null, includeTime:boolean = false, utc:boolean = false):string
    {
      if(date == null)
        return null;
  
      let year:string, month:string, day:string, hours:string, minutes:string, seconds:string, milliseconds:string;
  
  
      if(utc)
      {
        year         = date.getUTCFullYear().toString();
        month        = (date.getUTCMonth()+ 1).toString();
        day          = date.getUTCDate().toString();
        hours        = date.getUTCHours().toString();
        minutes      = date.getUTCMinutes().toString();
        seconds      = date.getUTCSeconds().toString();
        milliseconds = date.getUTCMinutes().toString();
      }
      else
      {
        year         = date.getFullYear().toString();
        month        = (date.getMonth()+ 1).toString();
        day          = date.getDate().toString();
        hours        = date.getHours().toString();
        minutes      = date.getMinutes().toString();
        seconds      = date.getSeconds().toString();
        milliseconds = date.getMinutes().toString();
      }
  
      month = StringUtils.spacePadding(month,2,true,"0");
      day = StringUtils.spacePadding(day,2,true,"0");
      hours = StringUtils.spacePadding(hours,2,true,"0");
      minutes = StringUtils.spacePadding(minutes,2,true,"0");
      seconds = StringUtils.spacePadding(seconds,2,true,"0");
      milliseconds = StringUtils.spacePadding(milliseconds,4,true,"0");
  
      let str = "{0}-{1}-{2}";
      if(includeTime)
        str = "{0}-{1}-{2} {3}:{4}:{5}:{6}";
  
      return StringUtils.Format(str, [year, month, day, hours, minutes, seconds, milliseconds]);
    }
  



    
    public static toFormattedString(date:Date = null,format:string = "YY-MM-DD",language:string = "en_CA"):string
    {
  
  
      /*
       sample formats:
       DD-MM-YYYY    : 01-01-2010
       DD,MM,YYYY    : 01,01,2010
       DDD DD,MMM,YYYY  : Mon 10, FEB, 2010
       DDDD DD, MMMM, YY : Monday 10, February 10
       DDDD, DDst of MMMMM, YYYY : Monday, 10th of February 2010
       */
  
      if(date == null)
        date = new Date();
  
      let strDate:string = format;
  
  
      // --------------------------------
      // hours
  
      if(strDate.toLowerCase().indexOf("hh") != -1)
      {
        let hours:string = date.getHours().toString();
        hours = StringUtils.spacePadding(hours,2,true,"0");
        strDate = StringUtils.replace(strDate, "hh", hours);
      }
  
      // --------------------------------
      // minutes
  
      if(strDate.indexOf("mm") != -1)
      {
        let minutes:string = date.getMinutes().toString();
        minutes = StringUtils.spacePadding(minutes,2,true,"0");
        strDate = StringUtils.replace(strDate, "mm", minutes, true);
      }
  
      // --------------------------------
      // seconds
      if(strDate.toLowerCase().indexOf("ss") != -1)
      {
        let seconds:string = date.getSeconds().toString();
        seconds = StringUtils.spacePadding(seconds,2,true,"0");
        strDate = StringUtils.replace(strDate, "ss", seconds);
      }
  
      // --------------------------------
      // milliseconds
      if(strDate.toLowerCase().indexOf("ms") != -1)
      {
        let milliseconds:string = date.getMilliseconds().toString();
        milliseconds = StringUtils.spacePadding(milliseconds,3, true,"0");
        strDate = StringUtils.replace(strDate, "ms", milliseconds);
      }
  
      // ------------------------------
      // Day
      let day:string = date.getDate().toString(10);
      let dayZeroPadding:string = date.getDate().toString(10);
  
      if(date.getDate() < 10)
        dayZeroPadding = "0" + day;
  
      let dayFullName:string = DateUtils._daysNames[date.getDay()][language][0];
      let dayShortName:string = DateUtils._daysNames[date.getDay()][language][1];
  
      strDate = StringUtils.replace(strDate, "DDDD", dayFullName);
      strDate = StringUtils.replace(strDate, "DDD", dayShortName);
      strDate = StringUtils.replace(strDate, "DD", dayZeroPadding);
      strDate = StringUtils.replace(strDate, "D", day, true);
  
  
      // ------------------------------
      // Week
      let week:number = Math.floor(date.getDate()/7);
      let weekLong:string =  DateUtils._weeksDescriptions[week][language][0];
      let weekShort:string = DateUtils. _weeksDescriptions[week][language][1];
  
      strDate = StringUtils.replace(strDate, "WWWW", weekLong);
      strDate = StringUtils.replace(strDate, "WWW", weekShort);
      strDate = StringUtils.replace(strDate, "WW", week.toString(10));
  
  
      // -------------------------------
      // MONTH
      let month:string = "" + (date.getMonth()+1);
      let monthZeroPadding:string = month;
  
      if(date.getMonth()<9)
        monthZeroPadding = "0"+ month;
  
      let monthFullName:string = DateUtils._monthsNames[date.getMonth()][language][0];
      let monthShortName:string = DateUtils._monthsNames[date.getMonth()][language][1];
  
      strDate = StringUtils.replace(strDate, "MMMM",	monthFullName, true);
      strDate = StringUtils.replace(strDate, "mmmm",	monthFullName.toLowerCase(), true);
  
      strDate = StringUtils.replace(strDate, "MMM",	monthShortName, true);
      strDate = StringUtils.replace(strDate, "mmm",	monthShortName.toLowerCase(), true);
  
      strDate = StringUtils.replace(strDate, "MM",	monthZeroPadding, true);
      strDate = StringUtils.replace(strDate, "mm",	monthZeroPadding.toLowerCase(), true);
  
      strDate = StringUtils.replace(strDate, "M ",	month + " ", true);
  
      // --------------------------------
      // Year
      let year:string = date.getFullYear().toString().substr(2, 2);
      let fullYear:string = date.getFullYear().toString();
  
      strDate = StringUtils.replace(strDate, "YYYY", fullYear);
      strDate = StringUtils.replace(strDate, "YY", year);
  
      return strDate;
  
  
    }
  
    public static  isBeforeToday(date:Date):Boolean
    {
      let d:Date = new Date();
      let today:Date = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
  
      if(date.getTime() < today.getTime())
        return true;
      else
        return false;
    }
  
  
    // expected format: 2011-10-29 or 11-10-29 24:01:01.1111
    public static  stringToDate(str:string, utc:boolean = false):Date
    {
  
      if(StringUtils.isNullOrEmpty(str))
        return null;
  
      let date:Date;
      let strDate:string = str;
      let strTime:string;
  
      let arr:Array<string> = str.split(" ");
      if(arr[1] == null) arr[1] = "00:00:00:0000";
      if(arr.length == 2)
      {
        strDate = arr[0];
        strTime = arr[1];
      }
  
      // --------------------------
      // convert the date
  
      let arrDate:Array<string> = strDate.split("-");
  
      let year:number = parseInt(arrDate[0]);
      if(arrDate[0].length == 2)
        year += 2000;
  
      let month:number = 1;
      let day:number = 1;
  
      if(arrDate[1])
      {
        month = parseInt(arrDate[1]);
        if(arrDate[2]) day = parseInt(arrDate[2]);
      }
  
      if(StringUtils.isNullOrEmpty(strTime))
      {
        return new Date(year, month - 1, day);
      }
  
      // --------------------------
      // convert the time
      let arrTime:Array<string> = strTime.split(":");
  
      let hours:number = 0;
      let minutes:number = 0;
      let seconds:number = 0;
      let milliseconds:number = 0;
  
      if(arrTime[0])
      {
        hours = parseInt(arrTime[0]);
        if(arrTime[1])
        {
          minutes = parseInt(arrTime[1]);
          if(arrTime[2])
          {
            seconds = parseInt(arrTime[2]);
            if(arrTime[3])
              milliseconds = parseInt(arrTime[3]);
          }
        }
      }
  
      date = new Date(year, month - 1, day, hours, minutes, seconds, milliseconds);
  
      if(utc)
      {
        // the timezone difference is in minutes from UTC
        let dif:number = date.getTimezoneOffset()*60*1000;
        date.setTime(date.getTime() - dif);
      }
  
      return date;
    }
  
    public static  isToday(date:Date):Boolean
    {
      let today:Date = new Date();
      let dif:number = DateUtils.compareDates(date, today);
  
      return (dif == 0)
    }
  
    public static  stringToDateSlashDelimited(str:string):Date
    {
  
      if(str == null)
        return null;
  
      let arr:Array<string> = str.split("/");
      let day:number = parseInt(arr[1]);
      let month:number = 1;
      let year:number = 1;
  
      if(arr.length==3)
      {
        month = parseInt(arr[0]);
        //peel off time from year field
        let yearPlus:string = arr[2];
        let ya:Array<string> = yearPlus.split(" ");  //split at space
        year = parseInt(ya[0]);
      }
      else if(arr.length == 2)
      {
        month = parseInt(arr[1]);
      }
      let dt:Date = new Date(year, month-1, day);
      return dt;
  
    }
  
    public static  getClosestMonth(date:Date):Date
    {
  
      let returnDate:Date = new Date(date);
  
      let tmpDate:Date = new Date(date);
  
      let c1:number = 0;
      let c2:number = 0;
      let month:number = returnDate.getMonth();
  
      // get next month
      do
      {
        tmpDate.setDate(tmpDate.getDate() + 1);
        c1++;
      }
      while(tmpDate.getMonth() == month);
  
      // get last month
      do
      {
        tmpDate.setDate(tmpDate.getDate() - 1);
        c2++;
      }
      while(tmpDate.getMonth() != month);
  
      if(c1 > c2)
        returnDate.setDate(returnDate.getDate() + c1);
      else
        returnDate.setDate(returnDate.getDate() - c2);
  
      return returnDate;
  
    }
  
    public static getDayByName(dayName:string):number
    {
      let day:number = -1;
  
      dayName = dayName.toLowerCase();
  
      if("sunday".indexOf(dayName) == 0 )    day = 0;
      if("monday".indexOf(dayName) == 0 )    day = 1;
      if("tuesday".indexOf(dayName) == 0 )   day = 2;
      if("wednesday".indexOf(dayName) == 0 ) day = 3;
      if("thursday".indexOf(dayName) == 0 )  day = 4;
      if("friday".indexOf(dayName) == 0 )    day = 5;
      if("saturday".indexOf(dayName) == 0 )  day = 6;
  
      return day;
    }
  
  
    // example: getNextDay(date, "saturday");
  
    public static getNextDay(date:Date, dayName:string):Date
    {
      let day:number = this.getDayByName(dayName);
      if(day == -1){
        throw new Error(StringUtils.Format("Day id '{0}' could not be found!",[dayName]));
      }
  
      let outDate:Date = new Date();
  
      outDate.setTime(date.getTime());
  
      let dif = day - outDate.getDay();
  
      if(dif == 0) dif = 7;
      if(dif < 0) dif = 7 + dif;
  
      outDate.setDate(date.getDate() + dif);
  
      return outDate;
  
    }
  
    public static getLastDay(date:Date, dayName:string):Date
    {
      let day:number = this.getDayByName(dayName);
      if(day == -1){
        throw new Error(StringUtils.Format("Day id '{0}' could not be found!",[dayName]));
      }
  
      let outDate:Date = new Date();
  
      outDate.setTime(date.getTime());
  
      let dif = outDate.getDay() - day;
  
      if(dif == 0) dif = 7;
      if(dif < 0) dif = 7 + dif;
  
      outDate.setDate(date.getDate() - dif);
  
      return outDate;
  
    }
  
  
    public static  getClosestYearDividableBy(date:Date, m:number):Date
    {
      let returnDate:Date = new Date(date);
  
      returnDate.setDate(1);
      returnDate.setMonth(0);
  
      let tmpDate:Date = new Date(returnDate);
  
      let c1:number = 0;
      let c2:number = 0;
  
      // get next year dividable by m
      while(tmpDate.getFullYear() % m != 0)
      {
        tmpDate.setFullYear(tmpDate.getFullYear() + 1);
        c1++;
      }
  
      // get last year dividable by m
      while(tmpDate.getFullYear() % m != 0)
      {
        tmpDate.setFullYear(tmpDate.getFullYear() - 1);
        c2++;
      }
  
      if(c1 > c2)
        returnDate.setFullYear(returnDate.getFullYear() + c1);
      else
        returnDate.setFullYear(returnDate.getFullYear() - c2);
  
      return returnDate;
  
    }
  
  
    public static  isLeapYear(year:number):Boolean
    {
  
      if (year % 400 == 0)
        return true;
      else if (year % 100 == 0)
        return false;
      else if (year % 4 == 0)
        return true;
  
      return false;
    }
  
  
    public static  getDurationBetweenDates(d1:Date, d2:Date):DateDuration
    {
  
      return new DateDuration(d1, d2);
  
    }
  
    public static  getDaysInMonth(date:Date):number
    {
      if(date.getMonth() == 1 && DateUtils.isLeapYear(date.getFullYear()))
        return 29;
      else
        return DateUtils._arrMonthsDayCount[date.getMonth()];
    }
  
  
    public static  periodOverlapTest(period1:DatePeriod, period2:DatePeriod):number
    {
      /*
       -1 does not overlap
       0  period2 starts before period1 ends
       1  period1 starts and ends within the boundaries of period2
       2  period1 starts before period2 ends
       3  period2 starts and ends within the boundaries of period1
       */
  
      let c1:number = DateUtils.compareDates(period1.from, period2.from);
      let c2:number = DateUtils.compareDates(period1.from, period2.to);
      let c3:number = DateUtils.compareDates(period1.to, period2.from);
      let c4:number = DateUtils.compareDates(period1.to, period2.to);
  
      // ------------------------------------------
      // 0  period2 starts before period1 ends
      // ------------------------------------------
  
      if(
        c1 == -1  // pariod1.from is smaller then period2.from
        && c3 != -1  // pariod1.to is greater then or equal to period2.from
        && c4 == -1  // period1.to is smaller then period2.to
      )
        return 0;
  
  
      // ------------------------------------------
      // 1  period1 starts and ends within the boundaries of period2
      // ------------------------------------------
  
      if(
        c1 != -1  // pariod1.from is greater then or equal to period2.from
        && c4 != 1   // pariod1.to is smaller then or equal to period2.to
      )
        return 1;
  
  
      // ------------------------------------------
      // 2  period1 starts before period2 ends
      // ------------------------------------------
  
      if(
        c1 != -1  // pariod1.from is greater then or equal to period2.from
        && c2 != 1   // pariod1.from is smaller then or equal to period2.to
        && c4 == 1   // pariod1.to is greater then to period2.to
      )
        return 2;
  
      // ------------------------------------------
      // 3 period2 starts and ends within the boundaries of period1
      // ------------------------------------------
  
      if(
        c1 != 1  // pariod2.from is greater then or equal to period1.from
        && c4 != -1   // pariod2.to is smaller then or equal to period1.to
      )
        return 3;
  
  
  
      return -1;
  
  
    }
  
    public static  getYesterday():Date
    {
      let d:Date = new Date();
      d.setTime(d.getTime() - 86400000); // one day
  
      return d;
    }
  
    public static  getTomorrow():Date
    {
      let d:Date = new Date();
      d.setTime(d.getTime() + 86400000); // one day
  
      return d;
    }
  
  
    public static  compareDates(dateOne:Date, dateTwo:Date):number
    {
      /*
       -1 dateOne is smaller then dateTwo
       0  dateOne and dateTwo are equal
       1  dateOne is greater then dateTwo
  
       */
  
      let r:number = 0;
  
      if(dateOne.getFullYear() < dateTwo.getFullYear())
      {
        r = -1
      }
      else if(dateOne.getFullYear() > dateTwo.getFullYear())
      {
        r = 1
      }
      else
      {
        if(dateOne.getMonth() < dateTwo.getMonth())
        {
          r = -1
        }
        else if(dateOne.getMonth() > dateTwo.getMonth())
        {
          r = 1
        }
        else
        {
          if(dateOne.getDate() < dateTwo.getDate()) r = -1
          else if(dateOne.getDate() > dateTwo.getDate()) r = 1
        }
      }
  
      return r;
    }
  
  
    public static  isDayInDateRange(date:Date, startDate:Date, endDate:Date):Boolean
    {
      let ret:Boolean = true;
  
      if(date)
      {
        if(startDate)
        {
          // before the start date
          if (DateUtils.compareDates(date, startDate) == -1)
            return false;
  
          // after end date
          if(endDate && DateUtils.compareDates(date, endDate) == 1)
            return false;
  
          // if it got this far, than the date is >= to the start date and <=  to the end date.
          return true;
        }
      }
  
      // there is an argument missing here.
      return false
    }
  
  
  
    public static  isTimeInDateRange(date:Date, startDate:Date, endDate:Date):Boolean
    {
      let ret:Boolean = true;
  
      if(date)
      {
        if(startDate)
        {
          if(endDate)
          {
            if ((date.getTime() >= startDate.getTime()) && (date.getTime() <= endDate.getTime()))
              ret=true;
            else
              ret = false;
          }
        }
      }
      return ret;
    }
  
    public static  isSameDay(dateOne:Date, dateTwo:Date):Boolean
    {
      if(dateOne == dateTwo)
        return true;
  
      if(dateOne == null || dateTwo == null)
        return false;
  
      let result:number = DateUtils.compareDates(dateOne, dateTwo);
  
      if(result === 0)
        return true;
      else
        return false;
    }
  
  
  }
  



// ***********************************************************************************************************************
// DomUtils.ts
// ***********************************************************************************************************************



export class NodeType {

    public static readonly ELEMENT_NODE:number   =  1;
    public static readonly ATTRIBUTE_NODE:number  =  2;
    public static readonly TEXT_NODE:number  =  3;
    public static readonly CDATA_SECTION_NODE:number  =  4;
    public static readonly ENTITY_REFERENCE_NODE:number  =  5;
    public static readonly ENTITY_NODE:number  =  6;
    public static readonly PROCESSING_INSTRUCTION_NODE:number  =  7;
    public static readonly COMMENT_NODE:number  =  8;
    public static readonly DOCUMENT_NODE:number  =  9;
    public static readonly DOCUMENT_TYPE_NODE:number  =  10;
    public static readonly DOCUMENT_FRAGMENT_NODE:number  =  11;
    public static readonly NOTATION_NODE:number  =  12;
  
  }
  
  
  export class DOMUtils {
  
    public static scrollToTop():void{
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  
    public static appendHTML(element:HTMLElement, html:string):HTMLElement
    {
      if(element == null)
      {
        console.debug("EPL DOMUtils: Cannot add html to null element: "+ html);
        return null;
      }
  
      let div:HTMLElement = document.createElement("div");
      div.innerHTML = html;
  
      let returnElement:HTMLElement =  div.children[0] as HTMLElement;
  
      for(let i:number =0; i < div.children.length; i++)
        element.appendChild(div.children[i]);
  
      return returnElement;
    }
  
    public static getChildNodes(node:Node):Array<Node>
    {
      let children:Array<Node> = [];
  
      for(let i:number = 0; i < node.childNodes.length; i++)
      {
        let iNode = node.childNodes[i];
        if(iNode.nodeType == NodeType.ELEMENT_NODE)
          children.push(iNode)
      }
  
      return children;
    }
  
    public static getNodesByName(node:Node, name:string):Array<Node>
    {
      let nodes:Array<Node> = [];
  
      for(let i:number = 0; i < node.childNodes.length; i++)
      {
        let iNode = node.childNodes[i];
        if(iNode.nodeType == NodeType.ELEMENT_NODE && iNode.nodeName == name)
          nodes.push(iNode)
      }
  
      return nodes;
    }
  
  
    public static firstChildNode(node:XMLDocument):Node
    {
      for(let i:number = 0; i < node.childNodes.length; i++)
      {
        let iNode = node.childNodes[i];
        if(iNode.nodeType == NodeType.ELEMENT_NODE)
          return iNode;
      }
  
      return null;
    }
  
  
  
  
    public static getNodeByName(node:Node, name:string, recursive:boolean = false):Node
    {
  
      for(let i:number = 0; i < node.childNodes.length; i++)
      {
        let iNode = node.childNodes[i];
        if(iNode.nodeType == NodeType.ELEMENT_NODE)
          if(iNode.nodeName == name)
          {
            return iNode;
          } else
          {
            if(recursive && iNode.childNodes.length > 0)
            {
              let rNode:Node = DOMUtils.getNodeByName(iNode, name, recursive);
              if(rNode != null)
                return rNode;
            }
          }
      }
  
      return null;
    }
  
    public static getList(node:Node, nodeName:string, f:Function, list?:List<any>):List<any>
    {
      if(list == null)
        list = new List<any>();
      else
        list.removeAll();
  
      // load the errors
  
      let listElement:Node = DOMUtils.getNodeByName(node, nodeName);
      let childNodes = DOMUtils.getChildNodes(listElement);
  
      for(let i:number = 0; i < childNodes.length; i++)
      {
        let iNode:Node = childNodes[i];
        list.addItem(f(iNode, i));
      }
  
      return list;
    }
  
  
    public static getText(node:Node, nodeName?:string):string
    {
      let resultNode:Node = nodeName?DOMUtils.getNodeByName(node, nodeName):node;
  
      if(resultNode == null)
        return null;
  
      return resultNode.firstChild.nodeValue;
    }
  
    public static getBool(node:Node, nodeName:string):boolean
    {
      let resultNode:Node = nodeName?DOMUtils.getNodeByName(node, nodeName):node;
      if(resultNode == null)
        return null;
  
      return StringUtils.toBool(resultNode.firstChild.nodeValue);
    }
  
    public static getInt(node:Node, nodeName:string):number
    {
      let resultNode:Node = nodeName?DOMUtils.getNodeByName(node, nodeName):node;
      if(resultNode == null)
        return null;
  
      return parseInt(resultNode.firstChild.nodeValue);
    }
  
  
    public static getFloat(node:Node, nodeName:string):number
    {
      let resultNode:Node = nodeName?DOMUtils.getNodeByName(node, nodeName):node;
      if(resultNode == null)
        return null;
  
      return parseFloat(resultNode.firstChild.nodeValue);
    }
  
    public static XmlStringToObj(XmlString:string):any
    {
      let dp:DOMParser = new DOMParser();
      let doc:XMLDocument = dp.parseFromString(XmlString,'text/xml');
  
      let node:Node = DOMUtils.firstChildNode(doc);
      let bodyNode:Node = DOMUtils.getNodeByName(node,"s:Body", true);
      let obj = DOMUtils.nodeToObj(bodyNode);
  
      return obj;
    }
  
    public static nodeToObj(node:Node):any
    {
      let obj:any = {};
  
        if(node['attributes'])
        {
            let att:any = node['attributes'];
            for (let i:number = 0; i < att.length; i++)
            {
                let attr:Attr = att.item(i);
  
                // ignore namespace attributes
                if(attr.name.indexOf("xmlns:") != -1) continue;
  
                if(obj.attributes == null)
                    obj.attributes = {};
                obj.attributes[attr.name] = attr.value;
  
            }
        }
  
  
      let strValue:string = "";
      let elementNodeCount:number = 0;
  
      for(let i:number = 0; i < node.childNodes.length; i++)
      {
        let iNode:Node = node.childNodes[i];
  
        if(iNode.nodeType == NodeType.ELEMENT_NODE)
        {
          elementNodeCount++;
          let propName = iNode.nodeName;
          if(propName.indexOf(":")!=-1)
            propName = propName.split(":")[1];
  
          if(obj[propName] == null)
          {
            obj[propName] = DOMUtils.nodeToObj(iNode);
          }
          else if(Object.prototype.toString.call( obj[propName] ) === '[object Array]' )
          {
            obj[propName].push(DOMUtils.nodeToObj(iNode));
          }
          else
          {
            let tmp:any = obj[propName];
            obj[propName] = [];
            obj[propName].push(tmp);
            obj[propName].push(DOMUtils.nodeToObj(iNode));
          }
        } else
          strValue += iNode.nodeValue;
      }
  
      if(elementNodeCount == 0)
      {
        if(obj.attributes == null) obj = strValue;
        else if(strValue != "") obj.text = strValue;
      }
  
      return obj;
    }
  
  
  
  }
  

// ***********************************************************************************************************************
// URLUtils.ts
// ***********************************************************************************************************************



  export class URLUtils {


    public static addPaths(basePath:string, subFolderPath:string):string{
  
      let newPath:string = basePath;
  
      if(newPath.charAt(newPath.length-1) != "\\" && newPath.charAt(newPath.length-1) != "/")
      {
        newPath += "/";
      }
  
      return newPath+subFolderPath;
  
    }
  
  
    public static objToForm(obj:any):string{
      let str = "";
  
  
      for (let key in obj) {
        if (str != "") {
          str += "&";
        }
        str += key + "=" + StringUtils.replace(obj[key],"&","&amp;");
      }
  
      return str;
    }
  
    public static objToURIParams(obj:any):string{
  
      let str = "";
  
  
      for (let key in obj) {
        if (str != "") {
          str += "&";
        }
        str += key + "=" + encodeURIComponent(obj[key]);
      }
  
      return str;
    }
  
    public static URIParamsToObj(path:string):any{
  
      let vars:any = {}
  
      let pairs:Array<string> = path.split("&");
  
      pairs.forEach((pair)=>{
        let s:Array<string> = pair.split("=");
        let propertyName:string = decodeURIComponent(s[0]);
        if(!StringUtils.isNullOrEmpty(propertyName))
        {
          let value:string = null;
          if(s.length>1)
            value = decodeURIComponent(s[1]);
          vars[propertyName] = value;
        }
      });
  
      return vars;
    }
  
    public static pathToLocation (path:string):URLLocation
    {
      let o:URLLocation = new URLLocation();
  
      o.fullPath = path;
  
      // ------------------------------
      // variables
      var i = path.indexOf("?");
      if(i != -1) {
        let vars:string = path.substring( i+1 , path.length);
        o.vars = this.URIParamsToObj(vars);
        path = path.substr(0,i);
      }
  
      // ------------------------------
      // protocole
  
      i = path.indexOf("://");
      if(i != -1) {
        o.protocol = path.substr(0,i);
        path = path.substring( i+3 , path.length);
      }
  
      // ------------------------------
      // check for port
      i = path.indexOf(":");
      var i2 = path.indexOf("/");
  
      if(i != -1 && (i < i2 || i2 == -1)){
        if(i2 == -1) {
          i2 = path.length;
        }
        else
          o.subPath = path.substring(i2 + 1,path.length);
  
        o.port = path.substring(i + 1,i2);
        path = path.substr(0,i);
      }
  
      // domain
      i2 = path.indexOf("/");
      if(i2 != -1){
        path = path.substr(0,i2);
      }
  
      o.domains = path.split(".");
      o.tld = o.domains.pop();
  
      return o;
    }
  
    public static  relativeToFullPath(path:string, defaultPath:string):string
    {
      path = StringUtils.replace(path, "\\", "/");
  
      let a:number = defaultPath.indexOf("://");
      let urlProtocol:string = "";
      let urlDomain:string = "";
  
      if(a != -1)
      {
        let arrPath:Array<string> = defaultPath.split("://");
        urlProtocol = arrPath[0];
        urlDomain = arrPath[1];
      }
      else
      {
        urlProtocol = "https";
        urlDomain = defaultPath;
      }
  
      let i:number = path.indexOf("/");
      let i2:number = path.indexOf("//");
  
      if(i2 == 0) // url starts with "//"
        return urlProtocol+":"+ path;
  
      if(i == 0) // url starts with "/"
        return urlProtocol + "://" +urlDomain + path;
  
      if(i == i2) // url has "//" before any "/"
        return path;
  
      var i3:number = path.indexOf(".");
  
      if(i3 < i) // there is a "." before a "/".
        return urlProtocol + "://"+path;
  
      return urlProtocol + "://" +urlDomain + "/" + path;
    }
  
  }
  
  
  export class URLLocation {
  
    public get host():string
    {
      return this.domains[this.domains.length - 1] + "." + this.tld;
    }
  
    public domains:Array<string>;
    public fullPath:string;
    public subPath:string;
    public tld:string;  // top level domain
    public protocol:string;
    public port:string;
    public vars:string;
  
  }
  
