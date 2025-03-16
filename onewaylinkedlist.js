class OneWayLinkedList{
    
    constructor(){
        this.head = null;
        this.length = 0;
    }

    append(value){
        const node ={value, next: null}
        if (!this.head){
            this.head = node
        } else{
            let currentItem = this.head;
            while (currentItem.next){
                currentItem = currentItem.next;
            }
            currentItem.next=node;
        }
        this.length++;
    }

    
    size(){
        return this.length;
    }

    find(value){
        let currentItem = this.head;
        while(currentItem){
            if (currentItem.value === value){
                return currentItem;
            }
            currentItem = currentItem.next;
        }
        return null;
    }


    prepend(value){
        const node ={value, next: null};
        if (!this.head){
            append(value);
        } else{
            let currentItem = this.head;
            node.next = currentItem;
            this.head = node;
        }
        this.length++;
    }

    remove(value){
        let currentItem = this.head;
        let prevItem;
        
        if (this.head.value === value){
            this.head = this.head.next;
            this.length--;
            console.log("успешное удаление первого элемента");
            return 1;
        }
        while(currentItem){
            
            if (!currentItem.next){
                if (currentItem.value === value){
                    prevItem.next = null;
                    this.length--;
                    console.log("успешное удаление последнего элемента");
                    return 1;
                }
                console.log("не найдено");
                return null;
            }
            if (currentItem.value === value){
                prevItem.next = currentItem.next;
                this.length--;
                console.log("успешное удаление из тела");
                return 1;
            }
            prevItem = currentItem;
            currentItem = currentItem.next;
        }
        console.log("не найдено");
        return null;

        //   5     3    10     5      12    3
        //  next next  next   next   next  null
    }
    show(){
        let currentItem = this.head;
        let strRes = "";
        while(currentItem){
            strRes = strRes + `${currentItem.value} `;
            currentItem = currentItem.next;
        }
        return strRes;
    }
}

let List = new OneWayLinkedList();
List.append(1);
List.append(2);
List.append(3);
List.append(4);
List.prepend(0);
console.log(List.show());
console.log("Размер связного листа: ",List.size());
List.remove(1);
console.log(List.show());
console.log("Размер связного листа: ",List.size());
