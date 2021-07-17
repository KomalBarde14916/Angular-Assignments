var orderItems={
     product:function(pid,pname,unit_price) {
        console.log("id: "+pid+"m product name: "+pname+"  unit price:"+unit_price);


},
 total_item_cost:function(unit_price,quantity,discount){
  console.log("total_item_cost: "+ unit_price*quantity*discount);
},
 total_order_cost:function (sum,total_item_cost ){
 console.log("total_order_cost: " +sum*total_item_cost);
 }
};

module.exports = orderItems

