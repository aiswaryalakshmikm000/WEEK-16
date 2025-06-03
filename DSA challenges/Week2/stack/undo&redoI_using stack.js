
class UndoRedo{
    constructor(){
    this.undoStack=[]
    this.redoStack=[]
    }
    do(action){
        this.undoStack.push(action)
        this.redoStack=[]
    }
    undo(){
        if(this.undoStack.length===0){
            console.log("nothing to undo return ")
            return
        }
        let action =this.undoStack.pop()
        this.redoStack.push(action)
        console.log("undone",action)
    }
    redo(){
        if(this.redoStack.length===0){
            console.log("Nothing to redo")
            return
        }
        let action =this.redoStack.pop()
        this.undoStack.push(action)
        console.log(action)
    }
}

const editor=new UndoRedo()
editor.do("Type A")
editor.do("Type B")

editor.undo()
