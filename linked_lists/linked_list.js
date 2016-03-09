Linked_List = function(){
  this.start = null;
}

Linked_List.prototype.add_node = function(node){
  var last_node = this.start;
  while (last_node.next != null){
    last_node = last_node.next;
  }
  last_node.next = node;
  return node.data;
}

Linked_List.prototype.last_data = function(){
  var last_node = this.start;
  while (last_node.next != null){
    last_node = last_node.next;
  }
  return last_node.data;
}

Node = function(data){
  this.data = data;
  this.next = null;
}

var list = new Linked_List();
list.start = new Node(1);
list.add_node(new Node(12))
list.add_node(new Node(13))

console.log(list.last_data())
console.log(list.start.data)